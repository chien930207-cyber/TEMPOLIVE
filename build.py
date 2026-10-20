#!/usr/bin/env python3
"""Build fixed multilingual LIVE recordings. Never edits the live site.

Python 3.11+, edge-tts 7.x and ffmpeg are required for a real build.
Use --preflight to check the source/transcripts without network or synthesis.
Only reviewed generic phrases are sent to the speech service; no room/user data.
"""
from __future__ import annotations
import argparse, array, asyncio, base64, hashlib, html, importlib.metadata
import json, math, os, pathlib, shutil, subprocess, sys, tempfile, time, zipfile

REVISION = '2.4.11-neural-sentences-r1'
BASE_SHA256 = '73787011876f5cf977d0471511d2792aab4361dccd955f69b68fd5af6bef40d6'
VOICES = {'zh-Hant': 'zh-TW-HsiaoChenNeural', 'en': 'en-US-JennyNeural', 'de': 'de-DE-KatjaNeural'}
ROLES = ['piano','keyboard','acoustic','electric','bass','drums','leader','vocals','sound','member']
ACTIONS = ['fast','slow','more','less','monitor-up','monitor-down','help','custom']
ZH = ['\u92fc\u7434','\u9375\u76e4','\u6728\u5409\u4ed6','\u96fb\u5409\u4ed6','\u8c9d\u65af','\u9f13\u624b','\u4e3b\u9818','\u6b4c\u5531','\u97f3\u63a7','\u5718\u54e1']
EN = ['pianist','keyboard player','acoustic guitarist','electric guitarist','bass player','drummer','worship leader','vocalist','sound engineer','band member']
DE = ['Klavier','Keyboard','Akustikgitarre','E-Gitarre','Bass','Schlagzeug','Lobpreisleitung','Gesang','Tonregie','Bandmitglied']
DE_FROM = ['vom Klavier','vom Keyboard','von der Akustikgitarre','von der E-Gitarre','vom Bass','vom Schlagzeug','von der Lobpreisleitung','vom Gesang','von der Tonregie','von einem Bandmitglied']
PHRASES = {
 'zh-Hant': dict(zip(ACTIONS,[
  '\u8acb\u6162\u4e00\u9ede','\u8acb\u5feb\u4e00\u9ede','\u8acb\u591a\u4e00\u9ede','\u8acb\u5c11\u4e00\u9ede',
  '\u8acb\u628a\u76e3\u807d\u8abf\u5927\u4e00\u9ede','\u8acb\u628a\u76e3\u807d\u8abf\u5c0f\u4e00\u9ede',
  '\u6211\u9700\u8981\u5e6b\u5fd9','\u6709\u4e00\u5247\u81ea\u8a02\u8a0a\u606f\uff0c\u8acb\u770b\u756b\u9762'])),
 'en': dict(zip(ACTIONS,[
  'please slow down','please speed up','a little more, please','a little less, please',
  'please turn up the monitor','please turn down the monitor','I need help',
  'please read the custom message on screen'])),
 'de': dict(zip(ACTIONS,[
  'bitte etwas langsamer','bitte etwas schneller','bitte etwas mehr','bitte etwas weniger',
  'bitte den Monitor lauter stellen','bitte den Monitor leiser stellen','ich brauche Hilfe',
  'bitte die eigene Nachricht auf dem Bildschirm lesen']))
}
TEST = {'zh-Hant':'\u8a9e\u97f3\u63d0\u9192\u5df2\u555f\u7528\u3002\u8acb\u8ddf\u4e0a\u76ee\u524d\u7684\u7bc0\u62cd\u3002',
        'en':'Voice alerts are on. Please follow the beat.',
        'de':'Sprachhinweise sind aktiviert. Bitte im Takt bleiben.'}


def transcripts() -> dict[str, dict[str,str]]:
    result = {lang: {'test': TEST[lang]} for lang in VOICES}
    for i,role in enumerate(ROLES):
        result['zh-Hant']['from:'+role] = '\u4f86\u81ea'+ZH[i]+'\u7684\u8a0a\u606f\u3002'
        result['en']['from:'+role] = 'Message from the '+EN[i]+'.'
        result['de']['from:'+role] = 'Nachricht '+DE_FROM[i]+'.'
    for i,role in enumerate(ROLES+['all']):
        labels={'zh-Hant':ZH[i] if i<len(ROLES) else '\u6240\u6709\u4eba',
                'en':EN[i].capitalize() if i<len(ROLES) else 'Everyone',
                'de':DE[i] if i<len(ROLES) else 'An alle'}
        for action in ACTIONS:
            for lang in VOICES:
                result[lang]['to:'+role+':'+action] = labels[lang]+('\uff0c' if lang=='zh-Hant' else ', ')+PHRASES[lang][action]+('\u3002' if lang=='zh-Hant' else '.')
    assert all(len(clips)==99 for clips in result.values())
    return result


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def command(argv: list[str], **kw) -> subprocess.CompletedProcess:
    return subprocess.run(argv, check=True, capture_output=True, timeout=60, **kw)


def decode(path: pathlib.Path) -> bytes:
    return command(['ffmpeg','-v','error','-xerror','-i',str(path),'-f','f32le','-ac','1','-ar','24000','pipe:1']).stdout


def validate_audio(path: pathlib.Path) -> dict:
    data=path.read_bytes()
    if len(data)<1000 or data.lstrip().startswith((b'<',b'{',b'[')):
        raise ValueError('Missing audio / non-audio service response: '+str(path))
    pcm=decode(path)
    samples=array.array('f');samples.frombytes(pcm)
    if sys.byteorder!='little': samples.byteswap()
    if not samples or any(not math.isfinite(x) for x in samples):
        raise ValueError('Empty or corrupt decoded audio: '+str(path))
    duration=len(samples)/24000
    peak=max(abs(x) for x in samples)
    rms=math.sqrt(sum(x*x for x in samples)/len(samples))
    clipping=sum(abs(x)>=.999 for x in samples)/len(samples)
    if not .15<duration<=20 or rms<.001 or clipping>.005:
        raise ValueError(f'Audio signal check failed: {path}, duration={duration}, rms={rms}, clipped={clipping}')
    return {'duration':round(duration,6),'sha256':digest(data),'bytes':len(data),
            'rmsDb':round(20*math.log10(rms),2),'peak':round(peak,6),
            'clippedFraction':clipping,'decoded':True,'humanListening':'not-yet-verified'}


async def synthesize_all(words: dict, cache: pathlib.Path) -> tuple[dict,dict]:
    try:
        import edge_tts
    except ImportError as exc:
        raise RuntimeError('Install edge-tts first. No substitute voice will be used.') from exc
    # Service may reject access or change voices: fail, do not guess or swap.
    available=await asyncio.wait_for(edge_tts.list_voices(),timeout=40)
    ids={v['ShortName'] for v in available}
    missing=set(VOICES.values())-ids
    if missing: raise RuntimeError('Required voices unavailable: '+', '.join(sorted(missing)))
    audio={lang:{} for lang in VOICES}; checks={lang:{} for lang in VOICES}
    semaphore=asyncio.Semaphore(2)
    done=0
    async def one(lang: str,key: str,text: str):
        nonlocal done
        identity=json.dumps([REVISION,VOICES[lang],text,'+0%','+0Hz'],ensure_ascii=False).encode()
        file=cache/(digest(identity)+'.mp3')
        async with semaphore:
            if file.exists():
                try: proof=await asyncio.to_thread(validate_audio,file)
                except Exception: file.unlink(missing_ok=True)
            if not file.exists():
                error=None
                for attempt in range(4):
                    tmp=file.with_suffix('.part.mp3')
                    try:
                        voice=edge_tts.Communicate(text,VOICES[lang],rate='+0%',pitch='+0Hz',
                                                  volume='+0%',connect_timeout=15,receive_timeout=45)
                        await asyncio.wait_for(voice.save(str(tmp)),timeout=65)
                        proof=await asyncio.to_thread(validate_audio,tmp)
                        tmp.replace(file);error=None;break
                    except Exception as exc:
                        tmp.unlink(missing_ok=True);error=exc
                        if getattr(exc,'status',None) in (401,403):
                            raise RuntimeError('Speech service denied access. Build stopped; no old/robotic fallback.') from exc
                        if attempt<3: await asyncio.sleep(2**attempt+1)
                if error is not None: raise RuntimeError(f'Failed to generate {lang}:{key}') from error
            audio[lang][key]=base64.b64encode(file.read_bytes()).decode('ascii')
            checks[lang][key]=proof
            done+=1;print(f'{done}/297 {lang} {key}',flush=True)
            await asyncio.sleep(.15)
    # Test all three voices first, before building the complete bank.
    await asyncio.gather(*(one(lang,'test',words[lang]['test']) for lang in VOICES))
    jobs=[one(lang,key,text) for lang,clips in words.items() for key,text in clips.items() if key!='test']
    await asyncio.gather(*jobs)
    return audio,checks


def make_preview(pack: dict, out: pathlib.Path) -> None:
    cards=[]
    with tempfile.TemporaryDirectory() as d:
        tmp=pathlib.Path(d)
        for lang in VOICES:
            items=[]
            for action in ['fast','monitor-up','help']:
                keys=['from:drums','to:piano:'+action]
                parts=[]
                for j,key in enumerate(keys):
                    f=tmp/f'{lang}-{j}.mp3';f.write_bytes(base64.b64decode(pack['voices'][lang][key]))
                    parts.append(decode(f))
                # Same sentence boundaries and padding as the application's player.
                raw=bytes(round(.12*24000)*4)+parts[0]+bytes(round(.08*24000)*4)+parts[1]+bytes(round(.1*24000)*4)
                encoded=command(['ffmpeg','-v','error','-f','f32le','-ac','1','-ar','24000','-i','pipe:0',
                                 '-codec:a','libmp3lame','-b:a','96k','-f','mp3','pipe:1'],input=raw).stdout
                text=' '.join(pack['transcripts'][lang][key] for key in keys)
                items.append('<p>'+html.escape(text)+'</p><audio controls preload="none" src="data:audio/mpeg;base64,'+base64.b64encode(encoded).decode()+'"></audio>')
            cards.append('<section><h2>'+html.escape(VOICES[lang])+'</h2>'+''.join(items)+'</section>')
    title='TEMPOLIVE \u4e09\u8a9e\u8a66\u807d\u8207\u9a57\u6536'
    note='\u9019\u662f\u771f\u6b63\u7522\u751f\u7684\u65b0\u97f3\u6a94\uff0c\u4e0d\u662f\u88dd\u7f6e\u7cfb\u7d71\u6717\u8b80\u3002\u8acb\u78ba\u8a8d\u4e09\u7a2e\u8a9e\u8a00\u767c\u97f3\u3001\u8a9e\u901f\u8207\u53e5\u5c3e\uff0c\u4e26\u5728\u624b\u6a5f\u8207\u8033\u6a5f\u4e0a\u8a66\u807d\u3002\u7a0b\u5f0f\u89e3\u78bc\u6210\u529f\u4e0d\u4ee3\u8868\u807d\u611f\u5df2\u9a57\u6536\u3002'
    doc='<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><style>body{font:16px/1.7 system-ui,sans-serif;max-width:760px;margin:auto;padding:28px}h1{font-size:26px}section{border-top:1px solid #bbb;padding:18px 0}audio{width:100%}p{margin:12px 0 6px}</style><h1>'+title+'</h1><p>'+note+'</p>'+''.join(cards)+'</html>'
    (out/'voice-preview.html').write_text(doc,encoding='utf-8')


def preflight(root: pathlib.Path) -> tuple[dict,pathlib.Path]:
    base=root/'index.html'
    template=pathlib.Path(__file__).resolve().parent/'index.template.html'
    if not base.exists(): raise RuntimeError('Run this in the TEMPOLIVE repository; index.html is missing.')
    if digest(base.read_bytes()) not in {BASE_SHA256, digest(template.read_bytes())}:
        raise RuntimeError('The current index.html differs from the uploaded source. Stopped to avoid overwriting newer changes.')
    if not template.exists(): raise RuntimeError('Missing .github/tempolive-live/index.template.html')
    source=template.read_text(encoding='utf-8')
    if REVISION not in source or 'new SpeechSynthesisUtterance(' in source:
        raise RuntimeError('Incorrect player template; no release created.')
    words=transcripts()
    for lang,clips in words.items():
        if len(clips)!=99 or any(not text.strip() for text in clips.values()): raise RuntimeError('Incomplete transcripts: '+lang)
    print('Preflight passed: 3 languages, 99 complete-sentence clips each, 297 recordings total.')
    return words,template


def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=pathlib.Path,default=pathlib.Path.cwd())
    parser.add_argument('--preflight',action='store_true')
    args=parser.parse_args();root=args.root.resolve()
    words,template=preflight(root)
    out=root/'voice-build-output';out.mkdir(exist_ok=True)
    (out/'planned-transcripts.json').write_text(json.dumps(words,ensure_ascii=False,indent=2),encoding='utf-8')
    if args.preflight: return 0
    if not shutil.which('ffmpeg'): raise RuntimeError('ffmpeg is required for complete audio decoding checks.')
    cache=root/'.voice-build-cache';cache.mkdir(exist_ok=True)
    audio,checks=asyncio.run(synthesize_all(words,cache))
    if sum(len(x) for x in audio.values())!=297: raise RuntimeError('Incomplete bank. No release will be written.')
    pack={'version':3,'revision':REVISION,'format':'audio/mpeg','recordingUnit':'complete-sentence',
          'generator':'Microsoft neural voices via edge-tts','generatorVersion':importlib.metadata.version('edge-tts'),
          'voiceIds':VOICES,'synthesisRate':'+0%','playbackRate':1,
          'humanListening':'NOT YET VERIFIED; use voice-preview.html and physical-device acceptance',
          'customMessagePolicy':'Recorded read-screen notice; exact custom text and exact/numbered names remain visible.',
          'voices':audio,'transcripts':words,'audioChecks':checks}
    payload=json.dumps(pack,ensure_ascii=False,separators=(',',':')).encode()
    if len(payload)>90*1024*1024: raise RuntimeError('Voice bank is too large; no release written.')
    # Build into temporary storage. A failed build leaves the original site intact.
    with tempfile.TemporaryDirectory(dir=out) as d:
        tmp=pathlib.Path(d);make_preview(pack,tmp)
        report={'revision':REVISION,'recordings':297,'allDecoded':True,'checks':checks,
                'humanListening':'not performed automatically','physicalIOS':'not performed automatically',
                'sourceIndexSha256':digest((root/'index.html').read_bytes()),'outputIndexSha256':digest(template.read_bytes()),
                'voicePackSha256':digest(payload)}
        (tmp/'audio-checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
        with zipfile.ZipFile(tmp/'TEMPOLIVE-live-natural-upload.zip','w',zipfile.ZIP_DEFLATED) as z:
            z.writestr('index.html',template.read_bytes())
            z.writestr('tempolive-live-voices.json',payload)
        for name in ['TEMPOLIVE-live-natural-upload.zip','voice-preview.html','audio-checks.json']:
            (tmp/name).replace(out/name)
    print('Created voice-build-output/TEMPOLIVE-live-natural-upload.zip')
    print('Listen to voice-preview.html before deploying. Only index.html and the JSON bank are replaced.')
    print('The running site was NOT edited, deployed, or committed by this builder.')
    return 0

if __name__=='__main__':
    try: raise SystemExit(main())
    except (KeyboardInterrupt,Exception) as exc:
        print('BUILD STOPPED: '+str(exc),file=sys.stderr)
        print('No unverified fallback voice was generated. Existing site files are unchanged.',file=sys.stderr)
        raise SystemExit(1)
