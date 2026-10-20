TEMPOLIVE LIVE - single-upload automation

Upload the .github folder to the repository root on main. The workflow starts on that commit; do not flatten the directories.
No Python installation, API key, manual Run workflow, or manual result download is required on the user computer.

This automatically generates and publishes fixed neural recordings. It does not contain pre-generated speech.
Sources: the provided TEMPOLIVE-main (2).zip and the prior natural voice build kit.
It updates only index.html and tempolive-live-voices.json. A source checksum guard stops incompatible updates.
The previous custom-message limitation is unchanged: exact text remains visible, but audio says to read the screen. Numbered/custom role names remain visible and use a generic spoken role.

The workflow checks the existing Pages mode, creates a backup artifact, commits without force, explicitly publishes, and compares the public HTML/JSON hashes. It does not change Pages configuration.
If Actions are disabled, branch/environment rules require approval, write permissions are restricted, or the speech service is unavailable, it stops with a visible error instead of claiming success. A source conflict also stops publication.
If failure happens before the commit, the original site files are not committed over. If publication fails after the commit, the repository contains the new files but public publication is not claimed. The backup is retained as an Actions artifact for 30 days.

Local tests covered syntax and mocked workflow behavior only. No real neural speech, GitHub account execution, human listening, iPhone, or Bluetooth testing was completed in this environment.

References:
https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
https://github.com/rany2/edge-tts
