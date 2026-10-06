# TEMPOLIVE - new canonical entry

This complete package preserves the existing metronome application (2.1.14) and changes the browser entry route. It is a **workaround, not a proven diagnosis or a guaranteed Safari favicon repair**.

## Upload

Upload all 21 files from this ZIP into the same GitHub Pages publishing directory as the current index.html; replace matching files. Do not delete unrelated repository files, workflows, verification files or browser data. No build tools, Actions inspection, new account, custom domain or extra device setting is required.

The original /TEMPOLIVE/ and /TEMPOLIVE/tempolive.html addresses automatically navigate to /TEMPOLIVE/live.html. A fixed same-directory destination preserves query parameters and fragments. live.html is the complete app, not a test screen and not an outer iframe. Keep live.html permanently.

## What changed

- index.html and tempolive.html are small entry redirects using location.replace.
- live.html is the prior complete application loader at a previously unused document path. It does not add an Apple touch link after loading; the single normal-tab PNG is retained.
- site.webmanifest start_url is now ./live.html. The existing application id /TEMPOLIVE/, scope, display mode and artwork stay unchanged.
- Application JavaScript, interface HTML, styles, translations, audio synthesis, room protocol, game and storage keys are byte-identical to the supplied 2.1.14 package.
- The current icon-compare-tempolive.png remains a production dependency, despite its historical filename. It is not regenerated.

## Data and App

The original and new documents share the same HTTPS origin and use the same localStorage keys. No data migration/reset is performed. Existing installed Apps that start at the old URL can follow the same redirect. New installations use the updated manifest start URL. Real Home Screen installation and native iPad Safari icon selection are not verified in this environment.

## Evidence limit

The user confirmed that the same PNG displays in the static B comparison page, while formal-homepage revisions fail. That supports separating the document URL from the already successful image, but does not prove cached metadata is the root cause or that a new URL must succeed. No screenshot of an HTML logo or successful image decode is counted as native Safari favicon success.

Do not clear Safari data merely to change the favicon. Do not upload private setlist backups to a public repository.
