#!/usr/bin/env python3
"""Publish only a completely generated and verified TEMPOLIVE voice update.

No personal token, account password, or third-party repository permission needed.
Uses the repository-scoped GITHUB_TOKEN only for GitHub API calls. Speech generation
runs in a separate step without this environment variable. No force push or Pages
configuration changes. Public verification never sends credentials to the website.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import zipfile

ROOT = Path.cwd()
OUTPUT = ROOT / 'voice-build-output'
STATE = Path(os.environ.get('RUNNER_TEMP', '/tmp')) / 'tempolive-live-auto-state.json'
FILES = ('index.html', 'tempolive-live-voices.json')
REVISION = '2.4.11-neural-sentences-r1'


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def git(*args: str) -> str:
    return subprocess.run(['git', *args], check=True, capture_output=True,
                          text=True, timeout=120).stdout.strip()


def api(path: str, method: str = 'GET') -> dict:
    repo = os.environ['GITHUB_REPOSITORY']
    if not re.fullmatch(r'[-\w.]+/[-\w.]+', repo):
        raise RuntimeError('Invalid repository name.')
    request = urllib.request.Request(
        'https://api.github.com/repos/' + repo + path,
        headers={'Accept': 'application/vnd.github+json',
                 'Authorization': 'Bearer ' + os.environ['GH_TOKEN'],
                 'X-GitHub-Api-Version': '2022-11-28',
                 'User-Agent': 'TEMPOLIVE-LIVE-Auto-Fix'}, method=method)
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            body = response.read()
            return json.loads(body) if body else {}
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode('utf-8', errors='replace')[:1200]
        raise RuntimeError(f'GitHub API {method} {path} returned {exc.code}: {detail}') from exc


def output(key: str, value: str) -> None:
    if '\n' in str(value) or '\r' in str(value):
        raise RuntimeError('Unexpected multiline workflow output.')
    with open(os.environ['GITHUB_OUTPUT'], 'a', encoding='utf-8') as stream:
        stream.write(f'{key}={value}\n')


def state() -> dict:
    return json.loads(STATE.read_text(encoding='utf-8'))


def preflight() -> None:
    if os.environ.get('GITHUB_REF') != 'refs/heads/main':
        raise RuntimeError('This update is scoped to main only. No changes made.')
    info = api('/pages')
    mode = info.get('build_type') or 'legacy'
    if mode not in ('legacy', 'workflow'):
        raise RuntimeError('Unknown Pages publishing mode. No changes made.')
    source = info.get('source') or {}
    if mode == 'legacy' and (source.get('branch') != 'main' or source.get('path') != '/'):
        raise RuntimeError('Pages is not publishing main / (root). Refusing to change your Pages settings.')
    site = info.get('html_url', '')
    if urllib.parse.urlsplit(site).scheme not in ('http', 'https'):
        raise RuntimeError('GitHub did not return a valid public website URL.')
    saved = {'baseCommit': git('rev-parse', 'HEAD'), 'mode': mode,
             'site': site.rstrip('/') + '/',
             'original': {name: sha((ROOT/name).read_bytes()) for name in FILES}}
    STATE.write_text(json.dumps(saved), encoding='utf-8')
    output('mode', mode)
    output('site', saved['site'])
    print('Pages configuration checked; its settings will not be changed.')


def stage() -> None:
    before = state()
    report = json.loads((OUTPUT/'audio-checks.json').read_text(encoding='utf-8'))
    if report.get('recordings') != 297 or report.get('allDecoded') is not True:
        raise RuntimeError('Audio validation was not completed. Existing site untouched.')
    for name in FILES:
        if sha((ROOT/name).read_bytes()) != before['original'][name]:
            raise RuntimeError('Local source changed during generation; refusing to overwrite it.')
    if report['sourceIndexSha256'] != before['original']['index.html']:
        raise RuntimeError('Builder used a different input version. No changes made.')
    with zipfile.ZipFile(OUTPUT/'TEMPOLIVE-live-natural-upload.zip') as archive:
        if len(archive.infolist()) != 2 or set(archive.namelist()) != set(FILES):
            raise RuntimeError('Unexpected contents in update ZIP. No files extracted.')
        updated = {name: archive.read(name) for name in FILES}
    if sha(updated['index.html']) != report['outputIndexSha256']:
        raise RuntimeError('Output HTML checksum mismatch.')
    if sha(updated['tempolive-live-voices.json']) != report['voicePackSha256']:
        raise RuntimeError('Output voice pack checksum mismatch.')
    pack = json.loads(updated['tempolive-live-voices.json'])
    if pack.get('revision') != REVISION or pack.get('recordingUnit') != 'complete-sentence':
        raise RuntimeError('Unexpected voice-bank revision or recording format.')
    with zipfile.ZipFile(OUTPUT/'TEMPOLIVE-before-LIVE-fix.zip', 'w', zipfile.ZIP_DEFLATED) as backup:
        for name in FILES:
            backup.write(ROOT/name, name)
    for name in FILES:
        (ROOT/name).write_bytes(updated[name])
    before['updated'] = {name: sha(data) for name, data in updated.items()}
    STATE.write_text(json.dumps(before), encoding='utf-8')
    print('Only index.html and tempolive-live-voices.json staged; backup saved as a workflow artifact.')


def commit() -> None:
    before = state()
    git('fetch', 'origin', 'main')
    if git('rev-parse', 'origin/main') != before['baseCommit']:
        raise RuntimeError('main changed during generation. No push made; rerun on the latest version.')
    for name in FILES:
        if sha((ROOT/name).read_bytes()) != before['updated'][name]:
            raise RuntimeError('Staged file changed after validation.')
    git('config', 'user.name', 'github-actions[bot]')
    git('config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com')
    git('add', '--', *FILES)
    staged = git('diff', '--cached', '--name-only').splitlines()
    if set(staged) - set(FILES):
        raise RuntimeError('Unexpected staged paths; no commit made.')
    if staged:
        git('commit', '-m', 'Fix LIVE voice recordings: Mandarin, English and German')
        git('push', 'origin', 'HEAD:main')
    before['publishedCommit'] = git('rev-parse', 'HEAD')
    STATE.write_text(json.dumps(before), encoding='utf-8')
    print('Validated files committed. Publication and public-file verification are still pending.')


def legacy_build() -> None:
    if state()['mode'] != 'legacy':
        raise RuntimeError('Not a branch-based Pages site.')
    # A GITHUB_TOKEN push alone does not start Pages. Request the build explicitly.
    api('/pages/builds', 'POST')
    print('Requested a Pages build of the updated branch.')


def pages_artifact() -> None:
    target = Path(os.environ['RUNNER_TEMP']) / 'tempolive-pages-site'
    if target.exists():
        shutil.rmtree(target)
    target.mkdir()
    for name in git('ls-files').splitlines():
        file = Path(name)
        if file.parts[0] in ('.git', '.github', 'voice-build'):
            continue
        source = ROOT/file
        if source.is_symlink():
            raise RuntimeError('Unexpected symbolic link in the Pages source.')
        if not source.is_file():
            continue
        dest = target/file
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, dest)
    if not (target/'index.html').exists():
        raise RuntimeError('Missing Pages index.')
    output('directory', str(target))


def public_bytes(url: str) -> bytes:
    request = urllib.request.Request(url, headers={
        'Cache-Control': 'no-cache', 'User-Agent': 'TEMPOLIVE-Release-Verification'})
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read(95*1024*1024)


def verify() -> None:
    expected = state()
    last = 'Publication not visible yet.'
    for attempt in range(36):
        try:
            suffix = '?livecheck=' + expected['publishedCommit'] + '-' + str(attempt)
            for name in FILES:
                data = public_bytes(urllib.parse.urljoin(expected['site'], name) + suffix)
                if sha(data) != expected['updated'][name]:
                    raise ValueError('Published ' + name + ' does not yet match the new file.')
            with open(os.environ['GITHUB_STEP_SUMMARY'], 'a', encoding='utf-8') as stream:
                stream.write('## LIVE voice update published\n\n')
                stream.write('All 297 recordings decoded successfully; the public HTML and voice JSON match the generated files.\n\n')
                stream.write('Open the existing website and use LIVE > Enable / Test in each language.\n\n')
                stream.write('**Not verified automatically:** pronunciation/naturalness by listening, iPhone audio output, Bluetooth timing.\n\n')
                stream.write('Custom messages remain visible; their audio is a recorded read-screen notice, not verbatim speech.\n')
            print('PUBLIC FILE VERIFICATION PASSED. Actual listening on the user device remains necessary.')
            return
        except (urllib.error.URLError, ValueError, TimeoutError) as exc:
            last = str(exc)
            print(f'Public verification {attempt+1}/36: {last}', flush=True)
            if attempt < 35:
                time.sleep(10)
    raise RuntimeError('Files committed, but live publication could not be confirmed: ' + last)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['preflight','stage','commit','legacy-build','pages-artifact','verify'])
    action = parser.parse_args().command
    {'preflight': preflight, 'stage': stage, 'commit': commit,
     'legacy-build': legacy_build, 'pages-artifact': pages_artifact, 'verify': verify}[action]()


if __name__ == '__main__':
    try:
        main()
    except Exception as exc:
        print('::error::' + str(exc).replace('\n', ' '), file=sys.stderr)
        sys.exit(1)
