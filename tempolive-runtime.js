'use strict';
/* TEMPOLIVE 2.1.14: existing application, initialized after entry load. */

;
/* BEGIN tempolive-i18n */
/* v1.19: local UI language only. Canonical song/room data, clocks and DSP never
   change when the language changes. No network translation service is used.
   Translatable output is registered at its render site; no global DOM mutation
   observer or prototype patch runs on the metronome's animation/audio loop. */
(()=>{
 'use strict';
 const dictionary={"\u81ea\u7531\u7df4\u7fd2": "Free practice", "\u55ae\u4eba\u6a21\u5f0f": "Solo mode", "\u4e3b\u6301\u4eba": "Host", "\u53c3\u8207\u8005": "Participant", "\u958b\u59cb\u7bc0\u62cd": "Start", "\u505c\u6b62\u64ad\u653e": "Stop", "\u672c\u6a5f\u975c\u97f3": "Mute this device", "\u6062\u5fa9\u6536\u807d": "Unmute", "\u5c1a\u672a\u958b\u59cb": "Not started", "\u64ad\u653e\u4e2d": "Playing", "\u7b49\u5f85\u958b\u59cb": "Waiting", "\u9810\u5099\u62cd": "Count-in", "\u5df2\u5c31\u7dd2": "Ready", "\u6821\u6642\u4e2d": "Syncing", "\u5f85\u555f\u7528\u8072\u97f3": "Audio not enabled", "\u5df2\u975c\u97f3": "Muted", "\u958b\u5834\u8b9a\u7f8e": "Opening praise", "\u5b89\u975c\u656c\u62dc": "Quiet worship", "\u56de\u61c9\u8a69\u6b4c": "Response song", "\u7bc4\u4f8b": "Example", "\u5df2\u5132\u5b58\u6b4c\u66f2": "Song saved", "\u8b8a\u66f4\u5c07\u65bc\u5c0f\u7bc0\u4ea4\u754c\u5957\u7528": "Change at the next bar boundary", "\u6e96\u5099\u597d\u4e86\uff0c\u5f9e\u7b2c\u4e00\u62cd\u958b\u59cb\u3002": "Ready. Start on beat one.", "\u7cfb\u7d71\u9810\u8a2d\uff08\u5587\u53ed\uff0f\u8033\u6a5f\uff09": "System default (speakers / headphones)", "\u7121\u6cd5\u9023\u4e0a\u4e2d\u7e7c\u670d\u52d9\u3002\u8acb\u5617\u8a66\u66f4\u63db Wi-Fi \u6216\u624b\u6a5f\u71b1\u9ede\uff0c\u518d\u6309\u91cd\u8a66\u3002\u516c\u958b\u670d\u52d9\u4e5f\u53ef\u80fd\u66ab\u6642\u7121\u6cd5\u4f7f\u7528\u3002": "Cannot connect to the relay. Try another Wi-Fi network or a mobile hotspot, then retry. The public service may also be temporarily unavailable.", "\u8207\u4e3b\u6301\u4eba\u7684\u9023\u7dda\u4e2d\u65b7\uff0c\u5df2\u505c\u6b62\u64ad\u653e\u3002\u8acb\u91cd\u65b0\u52a0\u5165\u623f\u9593\u3002": "Disconnected from the host. Playback has stopped. Please rejoin the room.", "\u91cd\u97f3": "Accented", "\u4e00\u822c": "Unaccented", "\u975c\u97f3": "Muted", "\u6728\u584a": "Woodblock", "\u6eab\u6f64\u7684\u6728\u8cea\u6572\u64ca\uff0c\u8d77\u97f3\u6e05\u695a\u3001\u8072\u5c3e\u77ed\u4fc3\u3002": "A warm wooden click with a clear attack and a short decay.", "\u6e05\u6670\u96fb\u5b50": "Clear electronic", "\u6e05\u6670\u4fd0\u843d\u7684\u96fb\u5b50\u97f3\uff0c\u5f37\u5f31\u62cd\u4ee5\u9ad8\u4f4e\u97f3\u5340\u5206\u3002": "A crisp electronic click. Accented and unaccented beats use different pitches.", "\u725b\u9234": "Cowbell", "\u539a\u5be6\u7684\u91d1\u5c6c\u5171\u9cf4\uff0c\u62cd\u9ede\u660e\u78ba\u3001\u8fa8\u8b58\u5ea6\u9ad8\u3002": "A full metallic resonance with a distinct, easy-to-hear beat.", "\u77ed\u9234": "Short bell", "\u660e\u4eae\u7684\u77ed\u9234\u8072\uff0c\u5e36\u91d1\u5c6c\u5c64\u6b21\uff0c\u4e0d\u4f7f\u7528\u9577\u6df7\u97ff\u3002": "A bright, short bell tone with metallic overtones and no long reverb tail.", "\u99ac\u6797\u5df4": "Marimba", "\u5713\u6f64\u7684\u6728\u8cea\u5171\u9cf4\uff0c\u6709\u97f3\u9ad8\u8207\u6572\u64ca\u5c64\u6b21\u3002": "A rounded wooden resonance with a defined pitch and percussive attack.", "\u6a19\u6e96": "Standard", "\u8f03\u81ea\u7136\u7684\u5f37\u5f31\u8207\u8870\u6e1b\uff0c\u9069\u5408\u5b89\u975c\u7df4\u7fd2\u3002": "More natural dynamics and decay for quiet practice.", "\u52a0\u5f37": "Boost", "\u8f03\u9ad8\u7684\u767c\u8072\u5bc6\u5ea6\uff0c\u5f31\u62cd\u8207\u7d30\u5206\u97f3\u66f4\u660e\u986f\u3002": "A denser sound that makes unaccented beats and subdivisions easier to hear.", "\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8cc7\u6599\uff0c\u8acb\u4f7f\u7528\u300c\u532f\u51fa\u6b4c\u55ae\u300d\u5099\u4efd\u3002": "The browser could not save your data. Use Export setlist to make a backup.", "\u8acb\u518d\u9ede\u4e00\u6b21\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\uff0c\u5141\u8a31\u624b\u6a5f\u64ad\u653e\u3002": "Tap Enable audio again to allow playback on this phone.", "\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4 Web Audio\u3002": "This browser does not support Web Audio.", "\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u653e\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u958b\u59cb\u6216\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\u3002": "Playback is not yet allowed. Tap Start or Enable audio again.", "\u8acb\u518d\u9ede\u4e00\u6b21\u555f\u7528\u8072\u97f3\u3002": "Tap again to enable audio.", "\u65b0\u7248\u767c\u8072\u66f4\u5f37\uff1b\u8033\u6a5f\u8acb\u5148\u964d\u4f4e\u97f3\u91cf\uff0c\u518d\u9010\u6b65\u8abf\u6574\u3002": "The click output is stronger in this version. Lower your headphone volume first, then increase it gradually.", "\u672c\u6a5f\u76ee\u524d\u975c\u97f3\uff0c\u8acb\u5148\u958b\u555f\u97f3\u91cf\u3002": "This device is muted. Unmute it or raise the volume first.", "\u6b63\u5728\u64ad\u653e\u76ee\u524d\u97f3\u8272\uff1b\u505c\u6b62\u7bc0\u62cd\u5f8c\u53ef\u55ae\u7368\u8a66\u807d\uff0c\u4e0d\u6703\u53e0\u52a0\u984d\u5916\u62cd\u9ede\u3002": "The selected sound is already playing. Stop the metronome to preview it separately without adding extra clicks.", "\u5df2\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002": "Audio has been re-enabled on this device.", "\u6b63\u5728\u78ba\u8a8d\u4e2d\u7e7c\u9023\u7dda\u2026": "Checking the relay connection...", "\u4e2d\u7e7c\u670d\u52d9\u62d2\u7d55\u9023\u7dda\uff08": "The relay rejected the connection (", "\uff09\u3002\u8acb\u7a0d\u5f8c\u91cd\u8a66\u3002 [R04]": "). Please try again later. [R04]", "\u4e2d\u7e7c\u8cc7\u6599\u683c\u5f0f\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66\u3002 [R05]": "Invalid relay data. Please retry. [R05]", "\u7121\u6cd5\u8a02\u95b1\u623f\u9593\u8cc7\u6599\uff0c\u8acb\u91cd\u8a66\u3002 [R08]": "Cannot subscribe to room data. Please retry. [R08]", "\u4e2d\u7e7c\u6c92\u6709\u56de\u61c9\uff0c\u8acb\u91cd\u8a66\u3002 [R09]": "The relay did not respond. Please retry. [R09]", "\u5df2\u9023\u4e0a\u4e2d\u7e7c\uff0c\u4f46\u627e\u4e0d\u5230\u6b64\u623f\u9593\u3002\u8acb\u78ba\u8a8d\u56db\u4f4d\u4ee3\u78bc\u3001\u4e3b\u6301\u4eba\u672a\u95dc\u9589\u7db2\u9801\uff0c\u4e26\u78ba\u8a8d\u5168\u54e1\u90fd\u4f7f\u7528\u9019\u4e00\u7248\u3002 [R10]": "Connected to the relay, but the room was not found. Check the four-digit code, make sure the host has kept the page open, and use the same version on every device. [R10]", "\u9023\u7dda\u4e2d\u65b7\uff0c\u6b63\u5728\u91cd\u9023": "Connection lost. Reconnecting", "\u6b63\u5728\u9023\u63a5\u4e2d\u7e7c\u670d\u52d9": "Connecting to the relay", "\u5df2\u9023\u4e0a\u4e2d\u7e7c\uff0c\u6b63\u5728\u6aa2\u67e5\u56db\u4f4d\u4ee3\u78bc\u2026": "Connected to the relay. Checking the four-digit code...", "\u623f\u9593\u4ee3\u78bc\u5df2\u88ab\u5176\u4ed6\u4e3b\u6301\u4eba\u4f7f\u7528\uff0c\u8acb\u91cd\u65b0\u5efa\u7acb\u623f\u9593\u3002": "Another host is using this room code. Please create a new room.", "\u623f\u9593\u4ee3\u78bc\u5fd9\u788c\uff0c\u8acb\u91cd\u8a66\u5efa\u7acb\u3002": "The room code is in use. Please try creating the room again.", "\u6b63\u5728\u9023\u63a5\u4e2d\u7e7c\u670d\u52d9\u2026": "Connecting to the relay...", "\u9023\u7dda\u903e\u6642\uff0c\u5df2\u505c\u6b62\u7b49\u5f85\u3002\u8acb\u78ba\u8a8d\u5168\u54e1\u4f7f\u7528\u65b0\u7248\uff0c\u4e26\u5617\u8a66\u66f4\u63db\u7db2\u8def\u5f8c\u91cd\u8a66\u3002 [R11]": "Connection timed out. Check that everyone uses the same version, then try another network. [R11]", "\u4e2d\u7e7c\u5df2\u9023\u7dda\uff0c\u6b63\u5728\u5c0b\u627e\u623f\u9593 ": "Relay connected. Looking for room ", "\u4e2d\u7e7c\u4e2d\u65b7\uff0c\u6b63\u5728\u81ea\u52d5\u91cd\u9023\u2026": "Relay disconnected. Reconnecting automatically...", "\u623f\u9593\u5df2\u9054\u672c\u7248 12 \u4eba\u4e0a\u9650\u3002": "This room has reached the 12-person limit.", "\u4e3b\u6301\u4eba\u5df2\u7d50\u675f\u623f\u9593\uff0c\u7bc0\u62cd\u5df2\u505c\u6b62\u3002": "The host ended the room. Playback has stopped.", "\u623f\u9593\u6821\u6642\u5b8c\u6210\uff0c\u6b63\u5728\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002": "Room clocks synchronized. Following the host.", "\u5df2\u9023\u4e0a\u623f\u9593\uff0c\u4f46\u7db2\u8def\u5ef6\u9072\u904e\u5927\u800c\u7121\u6cd5\u6821\u6642\u3002\u5df2\u505c\u6b62\u7b49\u5f85\uff0c\u8acb\u66f4\u63db\u7db2\u8def\u5f8c\u91cd\u8a66\u3002 [R12]": "Connected to the room, but network latency is too high to synchronize. Please try another network. [R12]", "\u5df2\u91cd\u65b0\u53d6\u6a23\u6821\u6642\uff0c\u4e0d\u6539\u8b8a\u64ad\u653e\u9032\u5ea6\u3002": "Resampling clock synchronization without changing playback position.", "\u5df2\u91cd\u65b0\u50b3\u9001\u7bc0\u594f\u72c0\u614b\u3002": "The current playback state has been resent.", "\u5df2\u96e2\u958b\u623f\u9593\uff0c\u56de\u5230\u55ae\u4eba\u6a21\u5f0f\u3002": "You left the room and returned to solo mode.", "\u7b2c ": "Beat ", " \u62cd\uff1a": ": ", "\uff0c\u9ede\u9078\u5207\u63db": ". Select to change.", "\u6162\u677f\u547c\u5438": "Slow and spacious", "\u5f9e\u5bb9\u524d\u884c": "Relaxed pace", "\u7a69\u5b9a\u5f8b\u52d5": "Steady groove", "\u8f15\u5feb\u63a8\u9032": "Upbeat momentum", "\u9ad8\u901f\u7bc0\u594f": "Fast tempo", "\u7bc0\u594f\u7531\u4e3b\u6301\u4eba\u7d71\u4e00\u63a7\u5236": "The host controls the rhythm", "\u9ede\u9078\u62cd\u9ede\uff1a\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3": "Tap a beat: accented > unaccented > muted", "\u6062\u5fa9\u672c\u6a5f\u8072\u97f3": "Restore audio", "\u5718\u968a\u6536\u807d": "Team listening", "\u623f\u9593\u4e3b\u6301": "Hosting", "\u9023\u7dda\u4e2d": "Connecting", "\u9084\u6c92\u6709\u6b4c\u66f2\uff0c\u5c07\u76ee\u524d\u7684\u7bc0\u594f\u5b58\u6210\u7b2c\u4e00\u9996\u5427\u3002": "No songs yet. Save the current rhythm as your first song.", "\u7de8\u8f2f ": "Edit ", "\u6211\u7684\u5718\u968a\u623f\u9593": "My team room", "\u5df2\u52a0\u5165\u5718\u968a\u623f\u9593": "Joined room", "\u4e2d\u7e7c\u4e2d\u65b7\uff0c\u91cd\u9023\u4e2d": "Relay disconnected. Reconnecting", "\u5df2\u9023\u7dda\uff0c\u6821\u6642\u4e2d": "Connected. Syncing clocks", "\u5df2\u9023\u7dda \u00b7 \u4e2d\u7e7c\u540c\u6b65": "Connected | Relay sync", " \u4eba\u5728\u623f\u9593": " people in the room", "\u4eba": "P", " \u00b7 \u4e3b\u6301": " | Host", "\u7db2\u8def\u6ce2\u52d5": "Network unstable", "\u5df2\u6821\u6642": "Synchronized", "\u56db\u4f4d\u6578\u5b57\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5bc6\u78bc\u3002\u77e5\u9053\u4ee3\u78bc\u7684\u4eba\u53ef\u52a0\u5165\uff1b\u95dc\u9589\u7db2\u9801\u6703\u7d50\u675f\u623f\u9593\u3002": "The four-digit code is an invitation, not a password. Anyone with the code can join. Closing this page ends the room.", "\u986f\u793a\u7684\u662f\u7db2\u8def\u5f80\u8fd4\u5ef6\u9072\uff0c\u4e0d\u662f\u8033\u6a5f\u7684\u5be6\u969b\u8072\u97f3\u8aa4\u5dee\u3002": "This is the network round-trip time, not the actual timing difference between headphones.", "\u7d50\u675f\u623f\u9593": "End room", "\u96e2\u958b\u623f\u9593": "Leave room", "\u5df2\u958b\u555f\uff0c\u50c5\u7bc0\u62cd\u5668\u5340\u584a\u767c\u5149": "On. Only the metronome panel flashes.", "\u95dc\u9589\uff0c\u4e0d\u986f\u793a\u62cd\u9ede\u87a2\u5149": "Off. No visual beat flash.", "00:00 \u00b7 \u7b2c 0 \u5c0f\u7bc0": "00:00 | Bar 0", "\u9810\u5099 ": "Count-in ", " \u5c0f\u7bc0": " bars", "\u9810\u5099\u62cd \u00b7 ": "Count-in | ", " \u00b7 \u7b2c ": " | Bar ", "\u8ddf\u96a8\u4e3b\u6301\u4eba \u00b7 ": "Following host | ", " \u00b7 \u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96": " | Quarter-note BPM", " \u79d2": " s", "\u5c07\u65bc ": "Starts in ", " \u79d2\u5f8c\u958b\u59cb": " s", " \u79d2\u5f8c\u505c\u6b62": " s", "\u6b63\u5728\u6821\u6b63\u88dd\u7f6e\u6642\u9593\u2026": "Synchronizing device clocks...", "\u91cd\u9023\u4e2d": "Reconnecting", "\u9023\u7dda\u4e2d\u65b7\uff0c\u8072\u97f3\u66ab\u505c\uff1b\u6b63\u5728\u91cd\u65b0\u9023\u7dda\u3002": "Connection lost. Audio is paused while reconnecting.", "\u6b4c\u55ae\u4e0a\u9650\u70ba 200 \u9996\uff0c\u8acb\u5148\u532f\u51fa\u5099\u4efd\u4e26\u6574\u7406\u3002": "The setlist limit is 200 songs. Export a backup and remove unused songs first.", "\u7de8\u8f2f\u6b4c\u66f2": "Edit song", "\u65b0\u589e\u6b4c\u66f2": "Add song", "\u8acb\u8f38\u5165\u6b4c\u66f2\u540d\u7a31": "Enter a song name", "\u6b4c\u66f2\u5df2\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff0c\u4f46\u700f\u89bd\u5668\u7121\u6cd5\u5132\u5b58\uff1b\u8acb\u5148\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002": "The song is kept on this page, but the browser could not save it. Export your setlist before closing.", "\u78ba\u5b9a\u522a\u9664\u300c": "Delete \"", "\u5df2\u522a\u9664\u6b4c\u66f2\u3002": "Song deleted.", "\u5df2\u5f9e\u76ee\u524d\u9801\u9762\u522a\u9664\uff0c\u4f46\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8b8a\u66f4\uff1b\u8acb\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002": "Deleted from this page, but the browser could not save the change. Export a setlist backup.", "\u5df2\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002": "Setlist backup exported.", "\u532f\u5165 ": "Import ", " \u9996\u6b4c\u66f2\uff0c\u4e26\u53d6\u4ee3\u6b64\u700f\u89bd\u5668\u539f\u6709\u6b4c\u55ae\uff1f\u539f\u6b4c\u55ae\u8acb\u5148\u532f\u51fa\u5099\u4efd\u3002": " songs and replace the setlist in this browser? Export the current setlist first.", "\u5df2\u532f\u5165 ": "Imported ", " \u9996\u6b4c\u66f2\u3002": " songs.", "\u5df2\u532f\u5165\u6b4c\u55ae\uff0c\u4f46\u50c5\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff1b\u8acb\u78ba\u8a8d\u700f\u89bd\u5668\u5141\u8a31\u5132\u5b58\u8cc7\u6599\u3002": "The setlist was imported but is only kept on this page. Check that the browser allows data storage.", "\u7121\u6cd5\u532f\u5165\uff1a\u8acb\u9078\u64c7\u7531\u672c\u7bc0\u62cd\u5668\u532f\u51fa\u30012 MB \u4ee5\u4e0b\u7684\u6709\u6548 JSON \u6b4c\u55ae\u3002": "Import failed. Choose a valid JSON setlist exported by this metronome, under 2 MB.", "\u518d\u9ede\u4e00\u6b21\u6e2c\u901f\uff0c\u9023\u7e8c\u591a\u9ede\u5e7e\u6b21\u66f4\u6e96\u78ba\u3002": "Tap again to measure the tempo. More taps improve the estimate.", "\u5df2\u5207\u63db\u52a0\u5f37\uff0c\u8acb\u5f9e\u8f03\u4f4e\u97f3\u91cf\u958b\u59cb\u8a66\u807d\u3002": "Boost enabled. Start at a lower volume and increase it gradually.", "\u5207\u63db\u6dfa\u8272\u6a21\u5f0f": "Switch to light mode", "\u5207\u63db\u6df1\u8272\u6a21\u5f0f": "Switch to dark mode", "\u76ee\u524d\u4f7f\u7528\u6df1\u8272\u5916\u89c0": "Using dark mode", "\u76ee\u524d\u4f7f\u7528\u6dfa\u8272\u5916\u89c0": "Using light mode", "\u96e2\u958b\u5c08\u6ce8\u6a21\u5f0f": "Exit focus mode", "\u5c08\u6ce8\u6a21\u5f0f": "Focus mode", "\u97f3\u8a0a\u88dd\u7f6e ": "Audio device ", "\u539f\u8f38\u51fa\u88dd\u7f6e\u5df2\u4e2d\u65b7\uff0c\u6539\u7528\u7cfb\u7d71\u9810\u8a2d\u8f38\u51fa\u3002": "The previous output device disconnected. Switched to the system default.", "\u6b64\u700f\u89bd\u5668\u4f7f\u7528\u7cfb\u7d71\u7684\u97f3\u8a0a\u8f38\u51fa\u3002\u8981\u7528\u624b\u6a5f\u5916\u653e\uff0c\u8acb\u5728\u63a7\u5236\u4e2d\u5fc3\u9078\u64c7\u624b\u6a5f\u5587\u53ed\u6216\u4e2d\u65b7\u85cd\u7259\u8033\u6a5f\uff0c\u8abf\u9ad8\u5a92\u9ad4\u97f3\u91cf\uff0c\u518d\u9ede\u300c\u8a66\u807d\u300d\u3002\u4e0d\u9700\u8981\u8033\u6a5f\u6216\u9ea5\u514b\u98a8\u6b0a\u9650\u5373\u53ef\u64ad\u653e\u3002": "This browser uses the system audio output. To use the phone speaker, select it in the system audio controls or disconnect Bluetooth headphones. Raise the media volume, then tap Preview sound. Headphones and microphone permission are not required for playback.", "\u53ef\u4f7f\u7528\u624b\u6a5f\u5587\u53ed\uff1b\u8acb\u78ba\u8a8d\u7cfb\u7d71\u8f38\u51fa\u8207\u5a92\u9ad4\u97f3\u91cf\uff0c\u518d\u9ede\u8a66\u807d\u3002": "The phone speaker is supported. Check the system output and media volume, then preview the sound.", "\u5df2\u9078\u8f38\u51fa": "Selected output", "\u5df2\u5207\u63db\u97f3\u8a0a\u8f38\u51fa\u3002": "Audio output changed.", "\u672a\u5207\u63db\u8f38\u51fa\uff1a\u8acb\u5141\u8a31\u88dd\u7f6e\u6b0a\u9650\uff0c\u6216\u6539\u7531\u7cfb\u7d71\u9078\u64c7\u8033\u6a5f\u3002": "Output was not changed. Allow device access or select headphones in system settings.", "\u5df2\u66f4\u65b0\u88dd\u7f6e\u6e05\u55ae\uff0c\u8acb\u9078\u64c7\u8981\u4f7f\u7528\u7684\u8f38\u51fa\u3002": "Device list updated. Select the output you want to use.", "\u7121\u6cd5\u53d6\u5f97\u88dd\u7f6e\u6e05\u55ae\uff0c\u8acb\u6539\u7531\u7cfb\u7d71\u9078\u64c7\u8f38\u51fa\u3002": "Cannot get the device list. Select the output in system settings.", "\u5df2\u5207\u63db\u8072\u97f3\u8f38\u51fa\uff0c\u8acb\u8a66\u807d\u78ba\u8a8d\u3002": "Audio output changed. Preview the sound to check it.", "\u7121\u6cd5\u5207\u63db\u8f38\u51fa\uff0c\u539f\u8f38\u51fa\u4fdd\u6301\u4e0d\u8b8a\u3002": "Cannot change the output. The previous output is unchanged.", " \u00b7 \u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4": " | Not supported by this browser", " \u00b7 \u5df2\u555f\u7528": " | Enabled", " \u00b7 \u672a\u53d6\u5f97\u6b0a\u9650": " | Permission not granted", "\u5efa\u7acb\u5718\u968a\u623f\u9593": "Create a team room", "\u4ee3\u78bc\u52a0\u5165\u623f\u9593": "Join with a code", "\u5efa\u7acb\u623f\u9593": "Create room", "\u52a0\u5165\u4e26\u555f\u7528\u8072\u97f3": "Join and enable audio", "\u4f60\u5c07\u6210\u70ba\u4e3b\u6301\u4eba\uff0c\u7d71\u4e00\u63a7\u5236\u5927\u5bb6\u7684\u7bc0\u594f\u3002": "You will be the host and control the rhythm for everyone.", "\u8f38\u5165\u4e3b\u6301\u4eba\u63d0\u4f9b\u7684\u56db\u4f4d\u6578\u5b57\uff0c\u52a0\u5165\u5f8c\u81ea\u52d5\u8ddf\u96a8\u7bc0\u62cd\u3002": "Enter the host's four-digit code. You will follow the metronome after joining.", "\u8acb\u8f38\u5165\u66b1\u7a31\u3002": "Enter a nickname.", "\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u56db\u4f4d\u6578\u5b57\u4ee3\u78bc\u3002": "Enter a valid four-digit code.", "\u76ee\u524d\u96e2\u7dda\uff0c\u8acb\u5148\u9023\u4e0a\u7db2\u8def\u3002": "You are offline. Connect to the internet first.", "\u9023\u7dda\u4e2d\u2026": "Connecting...", "\u623f\u9593\u5df2\u5efa\u7acb\uff0c\u8acb\u5206\u4eab\u56db\u4f4d\u6578\u5b57\u7d66\u5718\u54e1\u3002": "Room created. Share the four-digit code with your bandmates.", "\u5df2\u52a0\u5165\u623f\u9593\uff0c\u958b\u59cb\u6821\u6642\u3002": "Room joined. Synchronizing clocks.", "\u91cd\u8a66\u5efa\u7acb": "Retry creating", "\u91cd\u8a66\u52a0\u5165": "Retry joining", "\u7d50\u675f\u623f\u9593\u5c07\u505c\u6b62\u6240\u6709\u53c3\u8207\u8005\u7684\u7bc0\u62cd\uff0c\u78ba\u5b9a\u7d50\u675f\uff1f": "Ending this room will stop the metronome for all participants. End the room?", "\u5df2\u8907\u88fd\u623f\u9593\u4ee3\u78bc\uff1a": "Room code copied: ", "\u8acb\u624b\u52d5\u8907\u88fd\u4ee3\u78bc\uff1a": "Copy this code manually: ", "\u7cfb\u7d71\u8f38\u51fa\u8aaa\u660e": "System output help", "\u6b64\u700f\u89bd\u5668\u7684\u5132\u5b58\u8cc7\u6599\u7121\u6cd5\u8b80\u53d6\uff0c\u5df2\u4f7f\u7528\u9810\u8a2d\u503c\u3002\u8acb\u4f7f\u7528\u6b4c\u55ae\u532f\u51fa\u5099\u4efd\u3002": "The browser could not read saved data, so defaults were loaded. Use setlist export for backups.", "\u5df2\u66ab\u6642\u95dc\u9589\u672c\u6a5f\u7bc0\u62cd\u8072\u3002\u904a\u6232\u7d50\u675f\u6216\u8fd4\u56de\u5f8c\u81ea\u52d5\u6062\u5fa9\uff1b\u623f\u9593\u5176\u4ed6\u4eba\u7684\u7bc0\u62cd\u4e0d\u53d7\u5f71\u97ff\u3002": "This device's metronome is temporarily silenced. It will resume after the game ends or you return. Other devices in the room are unaffected.", "\u700f\u89bd\u5668\u5c1a\u672a\u6062\u5fa9\u7bc0\u62cd\u8072\uff0c\u8acb\u56de\u4e3b\u756b\u9762\u91cd\u65b0\u555f\u7528\u8072\u97f3\u3002": "The browser has not restored the click. Return to the main screen and enable audio again.", "\u904a\u6232\u5df2\u7d50\u675f\uff0c\u5df2\u6062\u5fa9\u672c\u6a5f\u7bc0\u62cd\u8072\u3002\u518d\u73a9\u4e00\u6b21\u6642\u6703\u81ea\u52d5\u5207\u63db\u56de\u904a\u6232\u8072\u97f3\u3002": "The game has ended and the local click has resumed. Playing again will switch back to game audio.", "\u904a\u6232\u5df2\u7d50\u675f\uff0c\u4fdd\u7559\u76ee\u524d\u7684\u505c\u6b62\u3001\u975c\u97f3\u8207\u97f3\u91cf\u8a2d\u5b9a\u3002": "The game has ended. Your current stop, mute and volume settings are preserved.", "\u904a\u6232\u7121\u6cd5\u8f09\u5165\uff0c\u8acb\u91cd\u65b0\u958b\u555f\u3002": "The game could not load. Close it and open it again.", "\u7bc0\u594f\u5c0f\u904a\u6232": "Rhythm game", "\u7e7c\u7e8c\u7bc0\u594f\u6311\u6230": "Continue rhythm challenge", "\uff5c\u6700\u9ad8 ": " | Best ", " \u5206": " points", "\uff08\u65b0\u529f\u80fd\uff09": " (new feature)", "\u92fc\u7434": "Piano", "\u9375\u76e4": "Keyboard", "\u6728\u5409\u4ed6": "Acoustic guitar", "\u96fb\u5409\u4ed6": "Electric guitar", "\u8c9d\u65af": "Bass", "\u9f13": "Drums", "\u4e3b\u9818": "Worship leader", "\u6b4c\u5531": "Vocals", "\u97f3\u63a7": "Sound engineer", "\u592a\u5feb": "Too fast", "\u6162\u4e00\u9ede": "Slow down", "\u8acb\u6162\u4e00\u9ede": "Please slow down", "\u592a\u6162": "Too slow", "\u5feb\u4e00\u9ede": "Speed up", "\u8acb\u5feb\u4e00\u9ede": "Please speed up", "\u591a\u4e00\u9ede": "A little more", "\u5c11\u4e00\u9ede": "A little less", "\u76e3\u807d\u5927": "Monitor up", "\u76e3\u807d\u5927\u4e00\u9ede": "Turn the monitor level up", "\u76e3\u807d\u5c0f": "Monitor down", "\u76e3\u807d\u5c0f\u4e00\u9ede": "Turn the monitor level down", "\u8981\u5e6b\u5fd9": "Need help", "\u9700\u8981\u5e6b\u5fd9": "I need help", "\u7b49\u5f85\u9001\u9054": "Awaiting delivery", "\u4e3b\u6301\u4eba\u5df2\u63a5\u6536": "Host received the message", "\u5df2\u9001\u9054": "Delivered", "\u5df2\u9001\u9054\uff0c\u7b49\u5f85\u64ad\u5831": "Delivered. Queued for speech", "\u6b63\u5728\u64ad\u5831": "Speaking", "\u88dd\u7f6e\u5df2\u5b8c\u6210\u64ad\u5831": "Playback completed on the device", "\u5c0d\u65b9\u5df2\u78ba\u8a8d": "Recipient confirmed", "\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u672a\u555f\u7528": "Delivered. Speech not enabled", "\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u97f3\u91cf\u70ba\u96f6": "Delivered. Speech volume is zero", "\u5df2\u9001\u9054\uff0c\u81ea\u52d5\u64ad\u5831\u95dc\u9589": "Delivered. Automatic speech is off", "\u5df2\u9001\u9054\uff0c\u64ad\u5831\u5931\u6557": "Delivered. Speech failed", "\u5df2\u9001\u9054\uff0c\u5df2\u903e\u64ad\u5831\u6642\u9650": "Delivered. Speech expired", "\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u4f47\u5217\u5df2\u6eff": "Delivered. Speech queue is full", "\u5c0d\u65b9\u9700\u66f4\u65b0\u7248\u672c": "Recipient needs to update", "\u5c0d\u65b9\u96e2\u7dda\uff0f\u5c1a\u672a\u78ba\u8a8d\u9001\u9054": "Recipient offline / delivery unconfirmed", "\u903e\u6642\u672a\u78ba\u8a8d\u9001\u9054": "Delivery confirmation timed out", "\u88dd\u7f6e\u7121\u6cd5\u540c\u6642\u64ad\u653e\u8a9e\u97f3": "The device cannot play speech at the same time", "\u672a\u9001\u51fa": "Not sent", "\u9f13\u624b": "Drummer", "\u8aaa\uff0c": " says, ", "\u4e0d\u652f\u63f4\u8a9e\u97f3": "Speech not supported", "\u50c5\u986f\u793a\u6587\u5b57": "Text only", "\u8a9e\u97f3\u975c\u97f3": "Speech muted", "\u9700\u8981\u91cd\u65b0\u8a66\u807d": "Test speech again", "\u8a9e\u97f3\u5df2\u555f\u7528": "Speech enabled", "\u5f85\u555f\u7528\u8a9e\u97f3": "Speech not enabled", "\u76ee\u524d\u6b63\u5728\u64ad\u5831\uff0c\u8acb\u807d\u5b8c\u5f8c\u518d\u8a66\u807d\u3002": "A message is being spoken. Wait for it to finish before testing.", "\u8a9e\u97f3\u63d0\u9192\u5df2\u555f\u7528\u3002\u7bc0\u62cd\u5668\u6703\u7e7c\u7e8c\u64ad\u653e\u3002": "Voice alerts are enabled. The metronome will keep playing.", "\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u8a9e\u97f3\u5408\u6210\uff0c\u4ecd\u53ef\u63a5\u6536\u6587\u5b57\u3002": "This browser does not support speech synthesis. Text messages still work.", "\u8a9e\u97f3\u97f3\u91cf\u76ee\u524d\u70ba\u96f6\u3002": "Speech volume is currently zero.", "\u627e\u4e0d\u5230\u4e2d\u6587\u8a9e\u97f3\u3002\u8acb\u5728\u88dd\u7f6e\u5b89\u88dd\u4e2d\u6587\u8a9e\u97f3\u5f8c\uff0c\u518d\u6309\u555f\u7528\uff0f\u8a66\u807d\u3002": "No English voice is available. Install an English voice on this device, then select Enable / test.", "\u8a9e\u97f3\u7121\u6cd5\u64ad\u653e": "Speech cannot play", "\u8a9e\u97f3\u672a\u80fd\u64ad\u653e\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u3002": "Speech could not play. Please test it again.", "\u8a66\u807d\u5b8c\u6210\u3002\u8acb\u78ba\u8a8d\u5be6\u969b\u5587\u53ed\uff0f\u8033\u6a5f\u6709\u8072\u97f3\uff1b\u97f3\u91cf\u4ecd\u7531\u7cfb\u7d71\u9650\u5236\u3002": "Voice test finished. Check that you actually heard it through the speaker or headphones. System volume limits still apply.", "\u8a66\u807d\u672a\u5b8c\u6210\u3002": "Voice test did not finish.", "\u8a9e\u97f3\u64ad\u653e\u903e\u6642\u3002": "Speech playback timed out.", "\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u5831\uff0c\u8acb\u9ede\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\u3002": "The browser has not allowed speech. Select Enable / test.", "\u8a9e\u97f3\u670d\u52d9\u7121\u6cd5\u64ad\u653e\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u4e26\u78ba\u8a8d\u4e2d\u6587\u8a9e\u97f3\u5df2\u5b89\u88dd\u3002": "The speech service could not play. Test again and check that an English voice is installed.", "\u6b64\u88dd\u7f6e\u76ee\u524d\u7121\u6cd5\u540c\u6642\u64ad\u653e\u8a9e\u97f3\u8207\u7bc0\u62cd\uff0c\u5df2\u505c\u6b62\u8a9e\u97f3\uff1b\u8acb\u91cd\u65b0\u555f\u7528\u7bc0\u62cd\u4e26\u6539\u7528\u6587\u5b57\u78ba\u8a8d\u3002": "This device cannot currently play speech and the click together. Speech has stopped. Re-enable the click and use text messages.", "\u8a9e\u97f3\u5c1a\u672a\u958b\u59cb\uff0c\u8acb\u9ede\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\uff0c\u4e26\u78ba\u8a8d\u4e2d\u6587\u8a9e\u97f3\u53ca\u8f38\u51fa\u88dd\u7f6e\u3002": "Speech has not started. Select Enable / test and check the English voice and output device.", "\u7121\u6cd5\u555f\u52d5\u8a9e\u97f3\uff0c\u8acb\u4f7f\u7528\u652f\u63f4\u4e2d\u6587\u8a9e\u97f3\u7684\u700f\u89bd\u5668\u3002": "Cannot start speech. Use a browser that supports English speech synthesis.", "\u81ea\u52d5\u9078\u64c7\u4e2d\u6587\u8072\u97f3": "Automatically select an English voice", "\uff08\u672c\u6a5f\uff09": " (on device)", "\uff08\u53ef\u80fd\u9700\u7db2\u8def\uff09": " (may need internet)", "\u4e2d\u6587\u8a9e\u97f3\u4f7f\u7528\u7cfb\u7d71\u8f38\u51fa\uff1b\u4e0d\u6703\u8ddf\u96a8\u7db2\u9801\u53e6\u5916\u6307\u5b9a\u7684\u97f3\u6548\u5361\u3002\u8acb\u5148\u8a66\u807d\u78ba\u8a8d\u3002": "English speech uses the system output, not a separate audio interface selected on this page. Test it first.", "\u88dd\u7f6e\u5c1a\u672a\u5217\u51fa\u4e2d\u6587\u8a9e\u97f3\uff1b\u53ef\u5148\u8a66\u807d\uff0c\u5fc5\u8981\u6642\u5b89\u88dd\u7cfb\u7d71\u4e2d\u6587\u8a9e\u97f3\u3002": "The device has not listed an English voice yet. Try the voice test, or install a system English voice if needed.", "\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u8a9e\u97f3\uff0c\u4ecd\u53ef\u986f\u793a\u6536\u5230\u7684\u6587\u5b57\u3002": "This browser does not support speech. Received text can still be shown.", " \u4e0d\u4f7f\u7528\u9ea5\u514b\u98a8\u3002\u96f2\u7aef\u8a9e\u97f3\u53ef\u80fd\u7531\u88dd\u7f6e\u670d\u52d9\u8655\u7406\u6587\u5b57\uff1b\u672c\u6a5f\u8a9e\u97f3\u512a\u5148\u3002": " No microphone is used. Cloud voices may send text to the device's speech service; on-device voices are preferred.", "\u8a0a\u606f\u8b58\u5225\u78bc\u91cd\u8907\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u3002": "Duplicate message ID. Please send a new message.", "\u8a0a\u606f\u5df2\u904e\u6642\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u3002": "The message is too old. Please send it again.", "\u50b3\u9001\u592a\u5bc6\u96c6\uff0c\u8acb\u7a0d\u7b49\u4e00\u4e0b\u3002": "Messages are being sent too quickly. Wait a moment.", "\u8acb\u5148\u9078\u64c7\u6216\u8f38\u5165\u8a0a\u606f\u3002": "Select or enter a message first.", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u6216\u5c1a\u7121\u5176\u4ed6\u5718\u54e1\u3002": "The recipient has left, or no other bandmates have joined yet.", "\u6240\u6709\u4eba": "Everyone", "\u7b2c\u4e00\u6b65\uff0c\u5171\u5169\u6b65": "Step 1 of 2", "\u7b2c\u4e8c\u6b65\uff0c\u5171\u5169\u6b65": "Step 2 of 2", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u3002": "The recipient has left. Choose another recipient.", "\u623f\u9593\u5c1a\u672a\u9023\u7dda\u5b8c\u6210\uff0c\u8acb\u5f85\u9023\u7dda\u6062\u5fa9\u5f8c\u518d\u9078\u64c7\u77ed\u53e5\u3002": "The room is not fully connected. Wait for the connection to recover, then choose a phrase.", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u50b3\u9001\u5c0d\u8c61\u3002": "The recipient has left. Choose a recipient again.", "\u8acb\u5148\u9078\u64c7\u77ed\u53e5\uff0c\u6216\u5beb\u4e0b\u81ea\u8a02\u8a0a\u606f\u3002": "Select a phrase or write a custom message first.", "\u4e0a\u4e00\u5247\u525b\u9001\u51fa\uff0c\u8acb\u7a0d\u5f8c\u518d\u9078\u4e00\u6b21\u3002": "The previous message was just sent. Wait a moment, then select again.", "\u50b3\u8a71\u672a\u80fd\u9001\u51fa\uff0c\u8acb\u78ba\u8a8d\u623f\u9593\u9023\u7dda\u5f8c\u518d\u8a66\u3002": "The message could not be sent. Check the room connection and try again.", " \u50b3\u7d66 ": " to ", "\u8a9e\u97f3\u5c1a\u672a\u555f\u7528\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002": "Speech is not enabled. You can select Replay.", "\u8a9e\u97f3\u97f3\u91cf\u70ba\u96f6\uff0c\u8acb\u5f9e live\u50b3\u8a71\u88e1\u7684\u8a9e\u97f3\u8a2d\u5b9a\u8abf\u6574\u3002": "Speech volume is zero. Adjust it in Live talk's voice settings.", "\u81ea\u52d5\u64ad\u5831\u5df2\u95dc\u9589\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002": "Automatic speech is off. You can select Replay.", "\u8a9e\u97f3\u672a\u80fd\u64ad\u51fa\uff0c\u53ef\u518d\u8a66\u4e00\u6b21\u3002": "Speech could not play. You can try again.", "\u6b64\u5247\u8a0a\u606f\u5df2\u904e\u6642\uff0c\u4e0d\u6703\u81ea\u52d5\u88dc\u64ad\u3002": "This message has expired and will not play automatically.", "\u76ee\u524d\u64ad\u5831\u8f03\u591a\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002": "There are several messages to play. You can select Replay.", "\u6b64\u88dd\u7f6e\u7684\u8a9e\u97f3\u64ad\u5831\u5df2\u4e2d\u65b7\uff0c\u8acb\u5148\u78ba\u8a8d\u8072\u97f3\u8f38\u51fa\u3002": "Speech was interrupted on this device. Check the audio output first.", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u5c0d\u8c61\u3002": "The recipient has left. Choose another recipient.", "\u5168\u90e8\u4eba": "Everyone", " \u4f4d\u5718\u54e1": " bandmates", "\u623f\u9593\u6210\u54e1": "Room member", "\u9700\u66f4\u65b0\u7248\u672c": "Update required", "\u540c\u6a23\u7684\u6a02\u5668\u6703\u4ee5\u7de8\u865f\u5340\u5206\uff1b\u5168\u90e8\u4eba\u4e0d\u5305\u542b\u81ea\u5df1\u3002": "Players with the same instrument are numbered. Everyone excludes you.", "\u7b49\u5f85\u5176\u4ed6\u6a02\u5668\u52a0\u5165\u623f\u9593\u3002": "Waiting for other instruments to join the room.", "\u5e38\u7528\u77ed\u53e5": "Saved phrase", "\u81ea\u8a02\u8a0a\u606f": "Custom message", "\u5beb\u4e0b\u60f3\u8aaa\u7684\u8a71": "Write what you want to say", "\u79fb\u9664": "Remove", "\u79fb\u9664\u5e38\u7528\u77ed\u53e5\uff1a": "Remove saved phrase: ", "\u5148\u5beb\u4e0b\u60f3\u8aaa\u7684\u8a71": "Write your message first", "\uff0b \u65b0\u589e\u6a02\u5668": "+ Add instrument", "\u4f60\u7684\u6a02\u5668\uff1a": "Your instrument: ", "\u8acb\u9078\u64c7\u672c\u6b21\u4f7f\u7528\u7684\u6a02\u5668\u6216\u89d2\u8272\u3002": "Choose the instrument or role you are using this time.", " \u00b7 \u623f\u9593 ": " | Room ", "\u623f\u9593\u6b63\u5728\u9023\u7dda\uff0f\u6821\u6642\uff0c\u5b8c\u6210\u5f8c\u5373\u53ef\u50b3\u8a71\u3002": "The room is connecting or synchronizing. You can send messages when it is ready.", "\u5148\u5f9e\u4e3b\u756b\u9762\u5efa\u7acb\u6216\u52a0\u5165\u623f\u9593\u3002": "Create or join a room from the main screen first.", "\u4e3b\u6301\u4eba\u5c1a\u672a\u555f\u7528\u50b3\u8a71\u529f\u80fd\uff0c\u8acb\u5168\u9ad4\u66f4\u65b0\u5f8c\u91cd\u65b0\u5efa\u7acb\u623f\u9593\u3002": "The host does not have messaging enabled. Everyone should update, then create the room again.", "\u8acb\u5148\u5efa\u7acb\u6216\u52a0\u5165\u623f\u9593\uff0c\u624d\u80fd\u4f7f\u7528 live\u50b3\u8a71\u3002": "Create or join a room before using Live talk.", "live\u50b3\u8a71\u672a\u80fd\u9001\u51fa\uff0c\u8acb\u78ba\u8a8d\u9023\u7dda\u5f8c\u518d\u8a66\u3002": "Live talk could not send the message. Check the connection and try again.", "\u8acb\u5148\u9078\u64c7\u4f60\u7684\u6a02\u5668\u6216\u89d2\u8272\u3002": "Choose your instrument or role first.", "\u65b0\u589e\u6a02\u5668": "Add instrument", "\u8acb\u8f38\u5165 1\u201316 \u5b57\u7684\u6a02\u5668\u6216\u89d2\u8272\u540d\u7a31\u3002": "Enter an instrument or role name using 1-16 characters.", "\u6700\u591a\u65b0\u589e 12 \u500b\u6a02\u5668\u3002": "You can add up to 12 instruments.", "\u5269\u9918 ${lives} \u6b21\u6a5f\u6703": "${lives} lives remaining", "\u7b2c ${level} \u95dc": "Level ${level}", "\u807d\u7bc0\u594f\uff0c\u8a18\u4e0b\u4f86": "Listen and remember", "\u63db\u4f60\u4e86\uff01": "Your turn!", "\u6e96\u78ba\u7387: ${accuracy}%": "Accuracy: ${accuracy}%", "${accuracy}% \u5931\u6557": "${accuracy}% | Miss", "\u9700\u9054 95%": "95% required", "${accuracy}% \u5b8c\u7f8e!": "${accuracy}% | Perfect!", "\u901a\u904e\u672c\u95dc": "Level cleared", "\u6311\u6230\u6210\u529f": "Challenge complete", "\u672c\u6b21\u6311\u6230\u7d50\u675f": "Game over", "\u518d\u73a9\u4e00\u6b21": "Play again", "\u700f\u89bd\u5668\u5c1a\u672a\u555f\u7528\u8072\u97f3\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u7e7c\u7e8c\u3002": "Audio is not enabled yet. Select Continue again.", "TEMPOLIVE \u9023\u7dda\u7bc0\u62cd\u5668": "TEMPOLIVE Connected Metronome", "\u8df3\u81f3\u7bc0\u62cd\u63a7\u5236": "Skip to metronome controls", "\u9023\u7dda\u7bc0\u62cd\u5668": "Connected metronome", "\u6234\u4e0a\u8033\u6a5f\uff0c\u5c08\u6ce8\u6bcf\u4e00\u62cd": "Put on headphones. Focus on every beat.", "\u76ee\u524d\u96e2\u7dda\uff1a\u55ae\u4eba\u7bc0\u62cd\u5668\u8207\u6b4c\u55ae\u4ecd\u53ef\u4f7f\u7528\uff0c\u8de8\u88dd\u7f6e\u623f\u9593\u9700\u8981\u7db2\u8def\u3002": "You are offline. Solo practice and your setlist still work; rooms need an internet connection.", "\u76ee\u524d\u6b4c\u66f2": "Current song", "\u6bcf\u5206\u9418\u62cd\u6578": "Beats per minute", "\u62d6\u66f3\u8abf\u6574\u901f\u5ea6": "Drag to adjust tempo", "\u4e0b\u4e00\u9996": "Next song", "\u9ede\u6309\u6e2c\u901f": "Tap tempo", "\u672c\u6a5f\u97f3\u91cf": "Local volume", "\u62cd\u865f": "Time signature", "\u97f3\u7b26\u7d30\u5206": "Subdivision", "\u95dc\u9589": "Off", "1 \u5c0f\u7bc0": "1 bar", "2 \u5c0f\u7bc0": "2 bars", "\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a": "Save current settings", "\u6b4c\u66f2\u6e05\u55ae": "Setlist", "\u4e8b\u5148\u8a2d\u597d\u901f\u5ea6\uff0c\u73fe\u5834\u4e00\u9375\u5207\u63db\u3002": "Set your tempos in advance. Switch songs with one tap.", "\u524d\u4e00\u9996": "Previous song", "\u532f\u51fa\u6b4c\u55ae": "Export setlist", "\u532f\u5165\u6b4c\u55ae": "Import setlist", "\u50c5\u5132\u5b58\u65bc\u672c\u6a5f": "Saved on this device", "\u4e0d\u540c\u88dd\u7f6e\uff0c\u540c\u4e00\u7bc0\u594f\u3002": "Different devices. One rhythm.", "\u5efa\u7acb\u5718\u968a\u623f\u9593\uff0c\u7531\u4e00\u4eba\u63a7\u5236\u901f\u5ea6\u8207\u64ad\u653e\uff0c\u5927\u5bb6\u5404\u81ea\u7528\u8033\u6a5f\u8ddf\u4e0a\u3002": "Create a team room. One host controls tempo and playback; everyone follows on their own headphones.", "\u4ee3\u78bc\u52a0\u5165": "Join with code", "\u623f\u9593\u4ee3\u78bc": "Room code", "1 \u4eba\u5728\u623f\u9593": "1 person in the room", "\u91cd\u65b0\u6821\u6642": "Resync clocks", "\u5f80\u8fd4\u5ef6\u9072": "Round-trip time", "\u6821\u6642\u72c0\u614b": "Clock sync", "\u6821\u6b63\u4e2d": "Synchronizing", "\u77e5\u9053\u4ee3\u78bc\u7684\u4eba\u90fd\u53ef\u52a0\u5165\u3002\u4e3b\u6301\u4eba\u96e2\u958b\u5f8c\u623f\u9593\u7d50\u675f\u3002": "Anyone with the code can join. The room ends when the host leaves.", "\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u5132\u5b58\u65bc\u6b64\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u8de8\u88dd\u7f6e\u540c\u6b65\u3002": "Your setlist and preferences stay in this browser. They do not sync automatically across devices.", "\u7a7a\u767d\u9375": "Space", "\u64ad\u653e / \u505c\u6b62": "Play / Stop", "\u6e2c\u901f": "Tap tempo", "live\u50b3\u8a71": "Live talk", "\u9078\u5c0d\u8c61 \u2192 \u9ede\u77ed\u53e5 \u2192 \u81ea\u52d5\u9001\u51fa": "Choose a recipient > tap a phrase > sent automatically", "\u8981\u50b3\u7d66\u8ab0\uff1f": "Who is it for?", "\u9078\u64c7\u623f\u9593\u88e1\u7684\u6a02\u5668\u3002": "Choose an instrument in the room.", "\u50b3\u7d66": "To", "\u63db\u5c0d\u8c61": "Change recipient", "\u60f3\u8aaa\u4ec0\u9ebc\uff1f": "What do you want to say?", "\u9ede\u9078\u4e00\u53e5\uff0c\u5c31\u6703\u50b3\u9001\u4e26\u8fd4\u56de\u4e3b\u756b\u9762\u3002": "Tap a phrase to send it and return to the main screen.", "\u6700\u591a 40 \u5b57": "Up to 40 characters", "\u5132\u5b58\u70ba\u672c\u6a5f\u5e38\u7528\u77ed\u53e5": "Save as a phrase on this device", "\u9ede\u9019\u53e5\u5c31\u9001\u51fa\uff0c\u6216\u6309 Enter": "Tap this message to send, or press Enter", "\u8a9e\u97f3\u8207\u5e38\u7528\u77ed\u53e5": "Voice and saved phrases", "\u8a9e\u97f3\u63d0\u9192": "Voice alerts", "\u5c1a\u672a\u8a66\u807d": "Not tested yet", "\u555f\u7528\uff0f\u8a66\u807d": "Enable / test", "\u6536\u5230\u8a0a\u606f\u6642\u81ea\u52d5\u64ad\u5831": "Speak incoming messages automatically", "\u8a9e\u97f3\u97f3\u91cf": "Voice volume", "\u64ad\u5831\u8072\u97f3": "Voice", "\u81ea\u8a02\u6a02\u5668\u3001\u5e38\u7528\u77ed\u53e5\u8207\u8a9e\u97f3\u8a2d\u5b9a\u50c5\u5b58\u65bc\u6b64\u700f\u89bd\u5668\u3002\u50b3\u8a71\u4e0d\u9700\u56de\u8986\u6536\u5230\uff1b\u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\u4e0d\u9069\u5408\u654f\u611f\u8cc7\u6599\u3002": "Custom instruments, saved phrases and voice preferences stay in this browser. No acknowledgement is required. Do not send sensitive information through the public test relay.", "\u50b3\u8a71": "Talk", "\u518d\u64ad\u4e00\u6b21": "Replay", "\u8a2d\u5b9a": "Settings", "\u6df1\u8272\u6a21\u5f0f": "Dark mode", "\u87a2\u5e55\u9583\u720d": "Beat flash", "\u9810\u8a2d\u95dc\u9589\u3002\u50c5\u5728\u7bc0\u62cd\u5668\u5340\u584a\u986f\u793a\u62cd\u9ede\u87a2\u5149\uff1a\u6dfa\u8272\u6a21\u5f0f\u70ba\u9ed1\u8272\uff0c\u6df1\u8272\u6a21\u5f0f\u70ba\u767d\u8272\uff0c\u6bcf\u6b21\u767c\u5149\u7d04 0.32 \u79d2\uff0c\u4e26\u9010\u6f38\u6de1\u51fa\uff0c\u4e0d\u9583\u52d5\u6574\u500b\u9801\u9762\u3002\u9ad8\u901f\u6642\u81ea\u52d5\u6e1b\u5c11\u9583\u720d\u6b21\u6578\uff1b\u5c0d\u9583\u5149\u654f\u611f\u8005\u8acb\u4fdd\u6301\u95dc\u9589\u3002": "Off by default. Only the metronome panel flashes: black in light mode and white in dark mode. Each pulse lasts about 0.32 seconds and fades out; the whole page does not flash. At higher tempos, fewer pulses are shown. Keep this off if you are sensitive to flashing light.", "\u97f3\u8a0a\u8207\u85cd\u7259": "Audio and Bluetooth", "\u99ac\u6797\u5df4 \u00b7 \u52a0\u5f37": "Marimba | Boost", "\u7bc0\u62cd\u97f3\u8272": "Click sound", "\u8f38\u51fa\u5f37\u5ea6": "Output level", "\u4f7f\u7528\u8033\u6a5f\u8acb\u5148\u964d\u4f4e\u97f3\u91cf\uff0c\u518d\u9010\u6b65\u8abf\u6574\u3002\u624b\u6a5f\u5916\u653e\u7684\u5be6\u969b\u97f3\u91cf\u4ecd\u53d7\u5587\u53ed\u529f\u7387\u9650\u5236\u3002": "Start with a low headphone volume and increase it gradually. Phone speaker volume is still limited by its hardware.", "\u8072\u97f3\u8f38\u51fa\u88dd\u7f6e": "Audio output device", "\u9078\u64c7\u8f38\u51fa": "Choose output", "\u8a66\u807d\u97f3\u8272": "Preview sound", "\u672a\u9023\u63a5\u8033\u6a5f\u6642\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u624b\u6a5f\u5587\u53ed\uff1b\u8acb\u8abf\u9ad8\u7cfb\u7d71\u7684\u5a92\u9ad4\u97f3\u91cf\u3002\u4f7f\u7528\u85cd\u7259\u6642\uff0c\u8acb\u5148\u5728\u7cfb\u7d71\u914d\u5c0d\u4e26\u9078\u64c7\u8f38\u51fa\u3002": "Without headphones, you can use the phone speaker. Raise the system media volume. For Bluetooth, pair the device and select it in system settings first.", "\u672c\u6a5f\u6642\u9593\u6821\u6b63": "Local timing offset", "\u63d0\u524d 300 ms": "300 ms earlier", "\u5ef6\u5f8c 300 ms": "300 ms later", "\u8072\u97f3\u6bd4\u5176\u4ed6\u4eba\u6162\uff0c\u5f80\u8ca0\u503c\u8abf\u6574\uff1b\u592a\u5feb\u5247\u5f80\u6b63\u503c\u8abf\u6574\u3002\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u3002": "If your sound is late, use a negative value. If it is early, use a positive value. This affects only this device.", "\u4f7f\u7528\u700f\u89bd\u5668\u63d0\u4f9b\u7684\u8f38\u51fa\u5ef6\u9072\u4f30\u8a08\uff08\u4e0d\u7b49\u65bc\u5be6\u969b\u91cf\u6e2c\uff09": "Use the browser's output latency estimate (not an actual measurement)", "\u64ad\u653e\u6642\u4fdd\u6301\u87a2\u5e55\u958b\u555f\uff08\u88dd\u7f6e\u652f\u63f4\u6642\uff09": "Keep the screen awake during playback (where supported)", "\u85cd\u7259\u4e0d\u662f\u623f\u9593\u9023\u7dda\u65b9\u5f0f\u3002\u5404\u53f0\u88dd\u7f6e\u9700\u8981\u7db2\u8def\uff0c\u4e26\u5404\u81ea\u9023\u63a5\u8033\u6a5f\u3002\u85cd\u7259\u5ef6\u9072\u4e0d\u4e00\u4e14\u53ef\u80fd\u8b8a\u52d5\uff0c\u6b63\u5f0f\u6f14\u51fa\u8acb\u512a\u5148\u4f7f\u7528\u6709\u7dda\u76e3\u807d\uff0c\u4e26\u5148\u5be6\u6e2c\u3002": "Bluetooth is not the room connection. Every device needs internet and its own headphone connection. Bluetooth latency varies and can change. Prefer wired monitoring for performances, and test it first.", "\u5132\u5b58\u901f\u5ea6\u8207\u62cd\u865f\uff0c\u4e0b\u6b21\u9ede\u6b4c\u540d\u5373\u53ef\u5207\u63db\u3002": "Save the tempo and time signature, then tap the song name to recall it next time.", "\u6b4c\u66f2\u540d\u7a31": "Song name", "\u901f\u5ea6 BPM": "Tempo (BPM)", "\u56db\u5206\u97f3\u7b26": "Quarter note", "\u516b\u5206\u97f3\u7b26": "Eighth note", "\u5341\u516d\u5206\u97f3\u7b26": "Sixteenth note", "\u6b4c\u55ae\u9806\u5e8f": "Setlist order", "\u2191 \u4e0a\u79fb": "Move up", "\u2193 \u4e0b\u79fb": "Move down", "\u522a\u9664": "Delete", "\u53d6\u6d88": "Cancel", "\u5132\u5b58\u6b4c\u66f2": "Save song", "\u4f60\u7684\u6a02\u5668\uff0f\u89d2\u8272": "Your instrument / role", "\u65b0\u589e\u6a02\u5668\u6216\u89d2\u8272": "Add an instrument or role", "\u65b0\u589e\u4e26\u9078\u64c7": "Add and select", "\u6536\u5230\u5718\u968a\u8a0a\u606f\u6642\u81ea\u52d5\u64ad\u5831": "Speak incoming team messages automatically", "\u8a66\u807d\u8a9e\u97f3": "Test voice", "\u8acb\u5148\u8a66\u807d\uff0c\u78ba\u8a8d\u5587\u53ed\u6216\u8033\u6a5f\u6709\u8072\u97f3\u3002\u8a9e\u97f3\u8207\u7bc0\u62cd\u5668\u5206\u958b\u63a7\u5236\uff0c\u4e0d\u4f7f\u7528\u9ea5\u514b\u98a8\u3002": "Test first and check that the speaker or headphones produce sound. Speech and the metronome are controlled separately. No microphone is used.", "4 \u4f4d\u6578\u5b57\u623f\u9593\u4ee3\u78bc": "4-digit room code", "\u4f7f\u7528 shiftr.io \u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\uff08WSS 443\uff09\u3002\u50b3\u9001\u6a02\u5668\u540d\u7a31\u3001\u6b4c\u540d\u3001\u7bc0\u594f\u8207\u50b3\u8a71\u6587\u5b57\uff0c\u4e0d\u9304\u97f3\u3001\u4e0d\u50b3\u9001\u9ea5\u514b\u98a8\u8072\u97f3\u3002\u6307\u5b9a\u50b3\u8a71\u7531\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5230\u7aef\u52a0\u5bc6\uff1b\u8acb\u52ff\u8f38\u5165\u654f\u611f\u8cc7\u6599\u3002": "Uses the public shiftr.io test relay (WSS port 443). Instrument names, song names, rhythm settings and message text are transmitted. No audio is recorded and no microphone audio is sent. Targeted messages are relayed by the host, not end-to-end encrypted. Do not enter sensitive information.", "\u4e3b\u6301\u4eba\u8207\u5718\u54e1\u90fd\u8acb\u4f7f\u7528\u6b64\u65b0\u7248\u3002\u516c\u958b\u4e2d\u7e7c\u50c5\u4f9b\u8a66\u7528\uff0c\u4e0d\u4fdd\u8b49\u670d\u52d9\u53ef\u7528\u7387\uff1b\u6b63\u5f0f\u6f14\u51fa\u61c9\u6539\u7528\u5c08\u7528\u670d\u52d9\u4e26\u5148\u5be6\u6e2c\u3002": "The host and all participants should use this version. The public relay is for testing and has no uptime guarantee. Use a dedicated service for performances and test it first.", "\u958b\u59cb\u4f7f\u7528\u7bc0\u62cd\u5668": "Getting started", "\u5148\u9078\u901f\u5ea6\uff0c\u518d\u958b\u59cb": "Choose a tempo, then start", "\u53ef\u76f4\u63a5\u8f38\u5165 40\u2013300 BPM\uff0c\u62d6\u66f3\u6ed1\u687f\uff0c\u6216\u4f7f\u7528\u52a0\u6e1b\u9375\u3002\u9023\u7e8c\u9ede\u6309\u300c\u9ede\u6309\u6e2c\u901f\u300d\u53ef\u5e36\u5165\u4f60\u7684\u901f\u5ea6\u3002\u62cd\u9ede\u53ef\u5207\u63db\u91cd\u97f3\u3001\u4e00\u822c\u8207\u975c\u97f3\u3002": "Enter 40-300 BPM, drag the slider, or use the plus and minus buttons. Repeatedly press Tap tempo to set your tempo. Beats can be accented, unaccented or muted.", "\u97f3\u7b26\u8207\u62cd\u865f": "Notes and time signatures", "BPM \u56fa\u5b9a\u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\u3002\u56db\u5206\u3001\u516b\u5206\u3001\u5341\u516d\u5206\u97f3\u7b26\u5206\u5225\u5728\u6bcf\u500b\u56db\u5206\u97f3\u7b26\u6642\u9593\u5167\u767c\u8072 1\u30012\u30014 \u6b21\u3002\u62cd\u9ede\u4f9d\u62cd\u865f\u7684\u5206\u6bcd\u8a08\u6578\uff1b6/8 \u7684\u516b\u5206\u97f3\u7b26\u70ba\u534a\u500b\u56db\u5206\u97f3\u7b26\u3002\u6a02\u8b5c\u6a19\u793a\u300c\u9644\u9ede\u56db\u5206\u97f3\u7b26 = 70\u300d\u6642\uff0c\u6b64\u8655\u8a2d\u70ba 105 BPM\u3002": "BPM is always based on quarter notes. Quarter, eighth and sixteenth notes sound 1, 2 and 4 times per quarter-note duration. Beat positions follow the time signature's denominator; in 6/8, an eighth note is half a quarter note. If the score says dotted quarter note = 70, set this metronome to 105 BPM.", "\u6b4c\u55ae\u8207\u9810\u5099\u62cd": "Setlists and count-ins", "\u6b4c\u55ae\u5167\u5efa\u4e09\u9996\u7bc4\u4f8b\uff0c\u4e0d\u662f\u771f\u5be6\u6b4c\u66f2\u7684\u5efa\u8b70\u901f\u5ea6\u3002\u53ef\u65b0\u589e\u3001\u7de8\u8f2f\u3001\u79fb\u52d5\u9806\u5e8f\u3001\u522a\u9664\u8207\u532f\u51fa\u5099\u4efd\u3002\u64ad\u653e\u4e2d\u8abf\u6574\u901f\u5ea6\u3001\u9ede\u6309\u6e2c\u901f\u6216\u8b8a\u66f4\u62cd\u9ede\u91cd\u97f3\uff0c\u90fd\u6703\u7acb\u5373\u5957\u7528\uff0c\u4e0d\u7b49\u5c0f\u7bc0\u4ea4\u754c\uff1b\u5df2\u767c\u51fa\u7684\u8072\u97f3\u4e0d\u6703\u91cd\u64ad\u3002\u5207\u63db\u6b4c\u66f2\u4ecd\u5728\u9810\u544a\u7684\u5c0f\u7bc0\u4ea4\u754c\u5957\u7528\u3002\u9810\u5099\u62cd\u53ea\u5728\u5f9e\u505c\u6b62\u72c0\u614b\u958b\u59cb\u6642\u751f\u6548\u3002": "The setlist includes three examples, not recommended tempos for actual songs. You can add, edit, reorder, delete and export songs. Tempo changes, Tap tempo and beat accents take effect immediately during playback, without waiting for a bar boundary. Clicks already played are not repeated. Song changes still take effect at the scheduled bar boundary. Count-ins apply only when starting from stopped.", "\u8b93\u5718\u968a\u52a0\u5165": "Bring your team into the room", "\u4e3b\u6301\u4eba\u5efa\u7acb\u623f\u9593\u5f8c\uff0c\u5c07 4 \u4f4d\u6578\u5b57\u4ee3\u78bc\u4ea4\u7d66\u5718\u54e1\u3002\u5168\u54e1\u90fd\u9700\u958b\u555f\u9019\u500b\u65b0\u7248 HTML\uff0c\u518d\u9ede\u9078\u52a0\u5165\u3002\u623f\u9593\u4f7f\u7528\u516c\u958b WSS \u4e2d\u7e7c\uff0c\u4e0d\u8981\u4f7f\u7528\u771f\u5be6\u59d3\u540d\u6216\u654f\u611f\u6b4c\u540d\u3002\u6821\u6642\u5f8c\u5728\u5404\u672c\u6a5f\u7522\u751f\u7bc0\u62cd\uff0c\u4e0d\u662f\u4e32\u6d41\u4e3b\u6301\u4eba\u7684\u8072\u97f3\u3002\u53c3\u8207\u8005\u53ef\u8abf\u6574\u672c\u6a5f\u97f3\u91cf\u3001\u97f3\u8272\u8207\u5ef6\u9072\uff0c\u4e5f\u53ef\u4f7f\u7528\u5718\u968a\u50b3\u8a71\uff0c\u4f46\u4e0d\u80fd\u66f4\u52d5\u4e3b\u6301\u4eba\u7684\u7bc0\u594f\u3002\u4ee3\u78bc\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5b89\u5168\u5bc6\u78bc\u3002": "After creating a room, the host shares the four-digit code. Everyone needs to open this version of the HTML and select Join. Rooms use a public WSS relay; avoid real names and sensitive song titles. After clock sync, each device generates its own click rather than streaming the host's audio. Participants can adjust local volume, sound and timing offset and use team messages, but cannot change the host's rhythm. The code is an invitation, not a secure password.", "\u91cd\u8981\uff1a\u7db2\u8def\u6821\u6642\u4e0d\u7b49\u65bc\u8033\u6a5f\u8072\u97f3\u5b8c\u5168\u540c\u6b65\u3002\u85cd\u7259\u3001\u97f3\u6548\u5361\u3001\u7cfb\u7d71\u6392\u7a0b\u90fd\u6703\u5f71\u97ff\u5ef6\u9072\u3002\u672c\u7248\u9069\u5408\u5148\u8a66\u7528\u8207\u6392\u7df4\uff1b\u4e0d\u4fdd\u8b49\u6f14\u51fa\u7b49\u7d1a\u7684\u96f6\u5ef6\u9072\u6216\u4e0d\u4e2d\u65b7\u3002\u4e3b\u6301\u4eba\u96e2\u7dda\u6642\uff0c\u53c3\u8207\u8005\u6703\u505c\u6b62\u64ad\u653e\u3002": "Important: synchronized clocks do not guarantee perfectly synchronized headphone audio. Bluetooth, audio interfaces and system scheduling all affect latency. This version is for trying out and rehearsing; it does not guarantee performance-grade zero latency or uninterrupted operation. Participants stop playback if the host goes offline.", "\u8cc7\u6599\u8207\u96b1\u79c1": "Data and privacy", "\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u4f7f\u7528 localStorage\uff0c\u50c5\u4fdd\u7559\u65bc\u76ee\u524d\u700f\u89bd\u5668\uff0c\u4e0d\u9069\u5408\u5b58\u653e\u654f\u611f\u8cc7\u8a0a\u3002\u6e05\u9664\u700f\u89bd\u8cc7\u6599\u3001\u7121\u75d5\u6a21\u5f0f\u6216\u66f4\u63db\u6a94\u6848\u4f4d\u7f6e\u53ef\u80fd\u7121\u6cd5\u4fdd\u7559\u8cc7\u6599\u3002\u623f\u9593\u5206\u4eab\u6a02\u5668\u540d\u7a31\u3001\u76ee\u524d\u6b4c\u540d\u8207\u7bc0\u594f\uff0c\u4e0d\u6703\u540c\u6b65\u6574\u4efd\u6b4c\u55ae\u3002\u5718\u968a\u50b3\u8a71\u6587\u5b57\u6703\u7d93\u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\u8207\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5c0d\u7aef\u52a0\u5bc6\uff1b\u8acb\u52ff\u50b3\u9001\u654f\u611f\u8cc7\u6599\u3002": "Your setlist and preferences use localStorage and stay in this browser. Do not store sensitive information. Clearing browser data, private browsing or moving the file may prevent data from being retained. Rooms share instrument names, the current song name and rhythm, not the entire setlist. Team message text passes through the public test relay and host; it is not end-to-end encrypted. Do not send sensitive information.", "\u5feb\u901f\u9375": "Keyboard shortcuts", "\u7a7a\u767d\u9375\uff1a\u64ad\u653e / \u505c\u6b62\u3002T\uff1a\u9ede\u6309\u6e2c\u901f\u3002N\uff1a\u4e0b\u4e00\u9996\u3002\u4e0a\u4e0b\u65b9\u5411\u9375\uff1a\u901f\u5ea6 \u00b11 BPM\uff08\u642d\u914d Shift \u70ba \u00b15\uff09\u3002F\uff1a\u5c08\u6ce8\u6a21\u5f0f\u3002\u8f38\u5165\u6587\u5b57\u6642\u4e0d\u6703\u89f8\u767c\u3002": "Space: play / stop. T: Tap tempo. N: next song. Up / Down: tempo +/-1 BPM (hold Shift for +/-5). F: focus mode. Shortcuts do not trigger while you type.", "\u53d6\u5f97\u97f3\u8a0a\u88dd\u7f6e\u6e05\u55ae": "List audio devices", "\u6b64\u700f\u89bd\u5668\u53ef\u80fd\u8981\u6c42\u9ea5\u514b\u98a8\u6b0a\u9650\uff0c\u624d\u6703\u5217\u51fa\u8033\u6a5f\u8207\u5587\u53ed\u540d\u7a31\u3002\u7db2\u9801\u53ea\u6703\u77ed\u66ab\u53d6\u5f97\u6b0a\u9650\u5f8c\u7acb\u5373\u95dc\u9589\u9ea5\u514b\u98a8\uff0c\u4e0d\u9304\u97f3\u3001\u4e0d\u50b3\u9001\u8072\u97f3\u3002\u4e5f\u53ef\u53d6\u6d88\uff0c\u76f4\u63a5\u5728\u7cfb\u7d71\u8a2d\u5b9a\u4e2d\u5207\u63db\u8f38\u51fa\u3002": "This browser may require microphone permission to list speaker and headphone names. The page briefly requests access, then immediately closes the microphone. It does not record or transmit audio. You can cancel and choose the output in system settings instead.", "\u7e7c\u7e8c\u9078\u64c7": "Continue", "\u904a\u6232\u8207\u7bc0\u62cd\u8072\u81ea\u52d5\u5207\u63db": "Automatic game / click audio switching", "\u8fd4\u56de\u7bc0\u62cd\u5668": "Back to metronome", "\u904a\u6232\u97f3\u91cf": "Game volume", "\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668": "Metronome volume unchanged", "\u904a\u73a9\u6642\u66ab\u6642\u95dc\u9589\u672c\u6a5f\u7bc0\u62cd\u8072\uff0c\u7d50\u675f\u6216\u8fd4\u56de\u5f8c\u6062\u5fa9\u539f\u5148\u64ad\u653e\u72c0\u614b\u3002\u4e0d\u5f71\u97ff\u623f\u9593\u5176\u4ed6\u4eba\u3002": "The local click is temporarily silenced while you play. When you finish or return, its previous playback state is restored. Other people in the room are unaffected.", "\u6e96\u5099\u904a\u6232\u4e2d\u2026": "Preparing the game...", "\u4e3b\u8981\u529f\u80fd": "Main controls", "\u5207\u63db\u5c08\u6ce8\u6a21\u5f0f": "Toggle focus mode", "\u7591\u554f\u6559\u5b78": "Help", "\u7bc0\u594f\u5c0f\u904a\u6232\uff08NEW\uff09": "Rhythm game (NEW)", "\u7bc0\u594f\u5c0f\u904a\u6232\uff08\u65b0\u529f\u80fd\uff09": "Rhythm game (new feature)", "\u7bc0\u62cd\u63a7\u5236": "Metronome controls", "\u6e1b\u5c11\u4e00 BPM": "Decrease tempo by 1 BPM", "\u901f\u5ea6 BPM\uff0c40 \u81f3 300": "Tempo in BPM, from 40 to 300", "\u589e\u52a0\u4e00 BPM": "Increase tempo by 1 BPM", "\u6bcf\u62cd\u91cd\u97f3\u8a2d\u5b9a": "Beat accents", "\u5207\u63db\u4e0b\u4e00\u9996": "Go to the next song", "\u958b\u59cb\u7bc0\u62cd\u5668": "Start the metronome", "\u9023\u7e8c\u9ede\u6309\u81f3\u5c11\u5169\u6b21\uff0c\u6216\u6309 T \u9375": "Tap at least twice, or press T", "\u6b4c\u66f2\u5feb\u901f\u5207\u63db": "Quick song navigation", "\u5207\u63db\u524d\u4e00\u9996": "Go to the previous song", "\u8907\u88fd\u623f\u9593\u4ee3\u78bc": "Copy room code", "live\u50b3\u8a71\uff0c\u65b0\u529f\u80fd": "Live talk, new feature", "\u95dc\u9589 live\u50b3\u8a71": "Close Live talk", "\u4f8b\u5982\uff1a\u4e0b\u4e00\u6bb5\u4e00\u8d77\u9032\u526f\u6b4c": "For example: enter the chorus together next", "live\u50b3\u8a71\uff08\u65b0\u529f\u80fd\uff09": "Live talk (new feature)", "\u6253\u958b live\u50b3\u8a71\uff0c\u65b0\u529f\u80fd": "Open Live talk, new feature", "\u6536\u8d77\u8a0a\u606f": "Dismiss message", "\u95dc\u9589\u8a2d\u5b9a": "Close settings", "\u6642\u9593\u6821\u6b63\u6beb\u79d2": "Timing offset in milliseconds", "\u4f8b\u5982\uff1a\u672c\u9031\u958b\u5834\u8a69\u6b4c": "For example: this week's opening song", "\u4f8b\u5982\uff1a\u85a9\u514b\u65af\u98a8": "For example: saxophone", "\u6536\u8d77\u904a\u6232\u4e26\u8fd4\u56de\u7bc0\u62cd\u5668": "Close the game and return to the metronome", "\u7bc0\u594f\u8a18\u61b6\u6311\u6230": "Rhythm memory challenge", "\u95dc\u5361": "Level", "\u5206\u6578": "Score", "\u5269\u9918\u6a5f\u6703": "Lives", "\u6700\u9ad8\u5206\u6578": "High score", "\u66ab\u505c": "Pause", "\u6e96\u5099\u597d\u4e86\u55ce\uff1f": "Ready?", "\u8ddf\u8457\u7bc0\u62cd\u807d\uff0c\u8a18\u4f4f\u6bcf\u6b21\u6572\u64ca\u3002": "Listen with the click. Remember each note.", "\u6572\u4e00\u4e0b": "Tap", "\u6216\u6309\u7a7a\u767d\u9375": "or press Space", "\u8f2a\u5230\u4f60\u6642\uff0c\u6572\u51fa\u525b\u624d\u807d\u5230\u7684\u7bc0\u594f\u3002": "When it is your turn, tap the rhythm you just heard.", "\u807d\u8207\u8a18\u61b6": "Listen and remember", "\u807d\u4e00\u6bb5\u7bc0\u594f\uff0c\u63a5\u8457\u63db\u4f60\u6572\u51fa\u4f86\u3002": "Listen to a rhythm, then tap it back.", "\u807d\u8457\u80cc\u666f\u7bc0\u62cd\uff0c\u8a18\u4f4f\u7cfb\u7d71\u793a\u7bc4\u7684\u7bc0\u594f\u3002": "Listen to the click and remember the demonstrated rhythm.", "\u97f3\u7b26\u96b1\u85cf\u5f8c\uff0c\u9ede\u300c\u6572\u4e00\u4e0b\u300d\u6216\u6309\u7a7a\u767d\u9375\uff0c\u91cd\u73fe\u76f8\u540c\u7bc0\u594f\u3002": "When the notes disappear, select Tap or press Space to reproduce the same rhythm.", "\u6bcf\u984c\u9650\u65bc 4 \u62cd\u5167\uff0c\u6e96\u78ba\u7387\u9054 95% \u5373\u53ef\u904e\u95dc\u3002": "Each pattern is within four beats. Reach 95% accuracy to pass.", "10 \u500b\u6f38\u9032\u95dc\u5361 \u00b7 3 \u6b21\u5931\u8aa4\u6a5f\u6703 \u00b7 \u96a8\u6a5f\u7bc0\u594f\u984c\u76ee": "10 progressive levels | 3 lives | Random rhythm patterns", "\u958b\u59cb\u6311\u6230": "Start challenge", "\u7a0d\u4f5c\u4f11\u606f": "Take a break", "\u904a\u6232\u5df2\u66ab\u505c": "Game paused", "\u70ba\u4e86\u78ba\u4fdd\u7bc0\u62cd\u6e96\u78ba\uff0c\u9ede\u9078\u7e7c\u7e8c\u5f8c\uff0c\u6703\u91cd\u65b0\u958b\u59cb\u672c\u95dc\u7684\u76f8\u540c\u984c\u76ee\u3002": "To keep the timing accurate, continuing restarts the same pattern in this level.", "\u7e7c\u7e8c\u672c\u95dc": "Resume level", "\u5f9e\u982d\u6311\u6230": "Start over", "\u6b61\u8fce\u56de\u4f86": "Welcome back", "\u63a5\u8457\u525b\u624d\u7684\u7bc0\u594f": "Pick up the rhythm", "\u5df2\u4fdd\u7559\u4f60\u7684\u95dc\u5361\u8207\u9032\u5ea6\u3002": "Your level and progress have been kept.", "\u9ede\u4e00\u4e0b\u7e7c\u7e8c\uff0c\u8072\u97f3\u8207\u8a08\u6642\u624d\u6703\u6062\u5fa9\u3002": "Select Continue to resume the audio and timer.", "\u7e7c\u7e8c\u904a\u6232": "Continue game", "\u91cd\u65b0\u904a\u73a9": "Play from the start", "\u91cd\u65b0\u904a\u73a9\u6703\u5f9e\u7b2c 1 \u95dc\u958b\u59cb\uff0c\u6700\u9ad8\u5206\u4ecd\u6703\u4fdd\u7559\u3002": "Starting over returns to level 1. Your high score is kept.", "\u5269\u9918 3 \u6b21\u6a5f\u6703": "3 lives remaining", "\u7bc0\u594f\u8996\u89ba\u8ecc\u9053\uff1b\u793a\u7bc4\u6642\u986f\u793a\u97f3\u7b26\uff0c\u8f2a\u5230\u4f60\u6642\u96b1\u85cf\u97f3\u7b26": "Visual rhythm track. Notes are shown during the demonstration and hidden during your turn.", "\u6572\u64ca\u7bc0\u594f": "Tap the rhythm"};
 /* v1.20: labels for the relocated card and brand controls only. */
 Object.assign(dictionary,{"\u4f7f\u7528\u8aaa\u660e": "User guide", "\u653e\u5927\u7bc0\u62cd\u5668": "Expand metronome", "\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a": "Expand the metronome panel", "\u9084\u539f\u5927\u5c0f": "Restore size", "\u9084\u539f\u7bc0\u62cd\u5668\u5927\u5c0f": "Restore the metronome panel size", "\u50c5\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a\uff0c\u66ab\u6642\u6536\u8d77\u6b4c\u55ae\u8207\u623f\u9593\uff1b\u4e0d\u5f71\u97ff\u64ad\u653e\u3002": "Enlarges only the metronome panel and temporarily hides the setlist and room panels. Playback is unaffected."});
 /* v1.20.1: concise, topic-based guide copy only. */
 Object.assign(dictionary,{"\u9078\u901f\u5ea6": "Set the tempo", "\u8a2d\u5b9a 40\u2013300 BPM\uff0c\u6216\u4f7f\u7528\u9ede\u6309\u6e2c\u901f\u3002": "Set 40\u2013300 BPM, or use Tap tempo.", "\u8abf\u7bc0\u594f": "Choose your rhythm", "\u9078\u62cd\u865f\u8207\u97f3\u7b26\u7d30\u5206\uff0c\u9ede\u62cd\u9ede\u5207\u63db\u8f15\u91cd\u97f3\u3002": "Choose the time signature and subdivision; tap beats to set accents.", "\u958b\u59cb\u64ad\u653e": "Start playing", "\u6309\u300c\u958b\u59cb\u7bc0\u62cd\u300d\uff0c\u7528\u672c\u6a5f\u97f3\u91cf\u8abf\u6574\u5927\u5c0f\u3002": "Press Start, then adjust the local volume.", "\u62cd\u9ede\u8f15\u91cd\u97f3": "Beat accents", "\u9ede\u9078\u62cd\u9ede\uff0c\u4f9d\u5e8f\u5207\u63db\u300c\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3\u300d\u3002": "Tap a beat to cycle through accented, unaccented and muted.", "\u901f\u5ea6\u57fa\u6e96": "Tempo reference", "BPM \u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\uff1b\u62cd\u9ede\u5247\u4f9d\u62cd\u865f\u7684\u5206\u6bcd\u8a08\u6578\u3002": "BPM uses quarter notes as its reference. Beat markers follow the denominator of the time signature.", "\u97f3\u7b26\u7d30\u5206": "Subdivision", "\u5728\u6bcf\u500b\u56db\u5206\u97f3\u7b26\u7684\u6642\u9593\u5167\uff0c\u56db\u5206\u3001\u516b\u5206\u3001\u5341\u516d\u5206\u97f3\u7b26\u5206\u5225\u767c\u8072 1\u30012\u30014 \u6b21\u3002": "Within one quarter-note duration, quarter, eighth and sixteenth notes produce 1, 2 and 4 clicks respectively.", "\u64ad\u653e\u4e2d\u8abf\u6574": "Adjust while playing", "\u901f\u5ea6\u3001\u62cd\u9ede\u91cd\u97f3\u8207\u97f3\u7b26\u7d30\u5206\u6703\u5373\u6642\u5957\u7528\uff1b\u5df2\u767c\u51fa\u7684\u8072\u97f3\u4e0d\u6703\u91cd\u64ad\u3002": "Tempo, beat accents and subdivisions update immediately. Clicks already played are not repeated.", "6/8 \u7684\u901f\u5ea6\u63db\u7b97": "Tempo in 6/8", "6/8 \u7684\u6bcf\u4e00\u62cd\u9ede\u662f\u516b\u5206\u97f3\u7b26\uff0c\u9577\u5ea6\u70ba\u534a\u500b\u56db\u5206\u97f3\u7b26\u3002\u6a02\u8b5c\u6a19\u793a\u300c\u9644\u9ede\u56db\u5206\u97f3\u7b26 = 70\u300d\u6642\uff0c\u9019\u88e1\u8acb\u8a2d\u70ba 105 BPM\u3002": "Each beat marker in 6/8 represents an eighth note, half a quarter note. For a score marked dotted quarter note = 70, set this metronome to 105 BPM.", "\u901f\u5ea6\u3001\u62cd\u865f\u8207\u7d30\u5206": "Tempo, time signature & subdivision", "\u5132\u5b58\u6b4c\u66f2": "Save song", "\u65b0\u589e\u6216\u7de8\u8f2f\u6b4c\u66f2\uff0c\u8a2d\u5b9a\u6b4c\u540d\u3001\u901f\u5ea6\u8207\u62cd\u865f\uff0c\u518d\u6309\u300c\u5132\u5b58\u6b4c\u66f2\u300d\u3002": "Add or edit a song, enter its name, tempo and time signature, then choose Save song.", "\u73fe\u5834\u5207\u6b4c": "Switch songs", "\u9ede\u6b4c\u540d\uff0c\u6216\u4f7f\u7528\u524d\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u3002\u64ad\u653e\u4e2d\u6703\u5728\u5c0f\u7bc0\u4ea4\u754c\u5207\u63db\uff0c\u4e26\u5ef6\u7e8c\u76ee\u524d\u7684\u8f15\u91cd\u97f3\u8a2d\u5b9a\u3002": "Choose a song or use Previous / Next. During playback, songs change at a bar boundary and retain your current beat-accent pattern.", "\u66f4\u65b0\u6b4c\u66f2\u8a2d\u5b9a": "Update a saved song", "\u4e3b\u756b\u9762\u81e8\u6642\u6539\u4e86\u901f\u5ea6\uff0c\u8981\u5beb\u56de\u8a72\u9996\u6b4c\u6642\uff0c\u6309\u300c\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a\u300d\u518d\u5132\u5b58\u6b4c\u66f2\u3002": "A temporary tempo change does not overwrite the saved song. Use Save current settings, then Save song to update it.", "\u9810\u5099\u62cd": "Count-in", "\u53ef\u9078\u95dc\u9589\u30011 \u5c0f\u7bc0\u6216 2 \u5c0f\u7bc0\u3002\u53ea\u5728\u5f9e\u505c\u6b62\u72c0\u614b\u958b\u59cb\u64ad\u653e\u6642\u751f\u6548\u3002": "Choose Off, 1 bar or 2 bars. The count-in applies only when starting from a stopped state.", "\u6574\u7406\u8207\u5099\u4efd": "Organize and back up", "\u6b4c\u55ae\u53ef\u6392\u5e8f\u3001\u522a\u9664\u8207\u532f\u51fa\u5099\u4efd\u3002\u5167\u5efa\u4e09\u9996\u50c5\u70ba\u7bc4\u4f8b\uff0c\u4e0d\u662f\u771f\u5be6\u6b4c\u66f2\u7684\u5efa\u8b70\u901f\u5ea6\u3002": "Reorder, delete or export songs to back up your setlist. The three built-in examples are not recommended tempos for real songs.", "\u6b4c\u55ae\u7ba1\u7406\u8207\u9810\u5099\u62cd": "Setlist & count-in", "\u4e3b\u6301\u4eba": "Host", "\u9078\u64c7\u6a02\u5668\uff0f\u89d2\u8272\u4e26\u5efa\u7acb\u623f\u9593\uff0c\u5c07 4 \u4f4d\u6578\u5b57\u4ee3\u78bc\u4ea4\u7d66\u5718\u54e1\u3002": "Choose your instrument or role, create a room, and share the four-digit code with your bandmates.", "\u5718\u54e1": "Participants", "\u958b\u555f\u76f8\u540c\u7248\u672c\uff0c\u9078\u6a02\u5668\u4e26\u8f38\u5165\u4ee3\u78bc\u52a0\u5165\u3002\u6821\u6642\u5b8c\u6210\u5f8c\uff0c\u81ea\u52d5\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002": "Open the same version, choose your instrument and join with the code. Follow the host once clock synchronization finishes.", "\u5404\u81ea\u8abf\u6574\u76e3\u807d": "Local monitoring", "\u4e3b\u6301\u4eba\u63a7\u5236\u7bc0\u594f\uff1b\u5718\u54e1\u53ef\u8abf\u672c\u6a5f\u97f3\u91cf\u3001\u97f3\u8272\u8207\u5ef6\u9072\uff0c\u4e0d\u6703\u6539\u52d5\u5168\u9ad4\u7bc0\u594f\u3002": "The host controls the rhythm. Participants can adjust their local volume, sound and timing offset without changing the shared rhythm.", "live\u50b3\u8a71": "Live talk", "\u5165\u623f\u5f8c\u9ede\u5074\u908a live\u50b3\u8a71\uff0c\u9078\u5c0d\u8c61\u518d\u9ede\u77ed\u53e5\uff0c\u5c31\u6703\u81ea\u52d5\u9001\u51fa\u3002\u8a9e\u97f3\u8acb\u5148\u555f\u7528\uff0f\u8a66\u807d\u3002": "After joining, open the Live talk side tab, choose a recipient and tap a phrase to send it automatically. Enable and test speech first.", "\u4e0d\u662f\u8072\u97f3\u4e32\u6d41": "Not an audio stream", "\u623f\u9593\u50b3\u9001\u7bc0\u594f\u8207\u6642\u9593\u8cc7\u8a0a\uff0c\u5404\u88dd\u7f6e\u5728\u672c\u6a5f\u767c\u8072\u3002\u4e3b\u6301\u4eba\u96e2\u7dda\u6642\uff0c\u53c3\u8207\u8005\u6703\u505c\u6b62\u64ad\u653e\u3002": "The room shares rhythm and timing information; each device generates its own clicks. Participants stop playing if the host disconnects.", "\u5718\u968a\u623f\u9593\u8207\u50b3\u8a71": "Team rooms & Live talk", "\u807d\u4e0d\u5230\u7bc0\u62cd": "No metronome sound", "\u5148\u78ba\u8a8d\u672c\u6a5f\u6c92\u6709\u975c\u97f3\u3001\u7cfb\u7d71\u5a92\u9ad4\u97f3\u91cf\u53ca\u8f38\u51fa\u88dd\u7f6e\u6b63\u78ba\u3002\u756b\u9762\u51fa\u73fe\u300c\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\u300d\u6642\uff0c\u9ede\u4e2d\u592e\u6309\u9215\u6062\u5fa9\u3002": "Check local mute, system media volume and the selected output device. If Restore audio appears, tap the central button.", "\u8072\u97f3\u6bd4\u5225\u4eba\u5feb\u6216\u6162": "Clicks sound early or late", "\u5728\u8a2d\u5b9a\u4e2d\u8abf\u6574\u300c\u672c\u6a5f\u6642\u9593\u6821\u6b63\u300d\uff1a\u592a\u6162\u5f80\u8ca0\u503c\uff0c\u592a\u5feb\u5f80\u6b63\u503c\u3002\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u3002": "In Settings, adjust the local timing offset: negative for late clicks, positive for early clicks. This affects only your device.", "\u85cd\u7259\u8207\u7db2\u8def": "Bluetooth and the network", "\u85cd\u7259\u7528\u65bc\u8033\u6a5f\u8f38\u51fa\uff0c\u4e0d\u662f\u623f\u9593\u9023\u7dda\u65b9\u5f0f\u3002\u5404\u88dd\u7f6e\u90fd\u9700\u8981\u7db2\u8def\u3002": "Bluetooth is an audio output connection, not the room connection. Each device needs network access.", "\u6f14\u51fa\u524d\u8acb\u5148\u5be6\u6e2c": "Test before a performance", "\u7db2\u8def\u6821\u6642\u4e0d\u7b49\u65bc\u8033\u6a5f\u8072\u97f3\u5b8c\u5168\u540c\u6b65\u3002\u85cd\u7259\u3001\u97f3\u6548\u5361\u8207\u7cfb\u7d71\u6392\u7a0b\u90fd\u6703\u5f71\u97ff\u5ef6\u9072\uff1b\u672c\u7248\u9069\u5408\u8a66\u7528\u8207\u6392\u7df4\uff0c\u4e0d\u4fdd\u8b49\u96f6\u5ef6\u9072\u6216\u4e0d\u4e2d\u65b7\u3002": "Synchronized clocks do not guarantee perfectly aligned headphone audio. Bluetooth, audio interfaces and system scheduling add latency. This version is for trials and rehearsals, with no guarantee of zero latency or uninterrupted playback.", "\u8072\u97f3\u8207\u540c\u6b65\u554f\u984c": "Sound & synchronization", "\u8cc7\u6599\u5b58\u5728\u54ea\u88e1\uff1f": "Where is data saved?", "\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u7528 localStorage \u4fdd\u5b58\u65bc\u76ee\u524d\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u8de8\u88dd\u7f6e\u540c\u6b65\u3002": "Your setlist and preferences are stored in this browser using localStorage. They do not automatically sync across devices.", "\u4ec0\u9ebc\u6642\u5019\u8981\u5099\u4efd\uff1f": "When should I back up?", "\u66f4\u65b0\u6216\u79fb\u52d5\u6a94\u6848\u524d\u5148\u532f\u51fa\u6b4c\u55ae\u3002\u6e05\u9664\u700f\u89bd\u8cc7\u6599\u3001\u7121\u75d5\u6a21\u5f0f\u6216\u66f4\u63db\u6a94\u6848\u4f4d\u7f6e\uff0c\u90fd\u53ef\u80fd\u8b80\u4e0d\u5230\u539f\u8cc7\u6599\u3002": "Export your setlist before updating or moving the file. Clearing browsing data, private browsing or a different file location may make saved data unavailable.", "\u623f\u9593\u5206\u4eab\u4ec0\u9ebc\uff1f": "What does the room share?", "\u623f\u9593\u5206\u4eab\u6a02\u5668\u540d\u7a31\u3001\u76ee\u524d\u6b4c\u540d\u8207\u7bc0\u594f\uff0c\u4e0d\u6703\u540c\u6b65\u6574\u4efd\u6b4c\u55ae\u3002": "The room shares instrument names, the current song title and rhythm, not your full setlist.", "\u8acb\u52ff\u50b3\u9001\u654f\u611f\u8cc7\u6599": "Do not share sensitive information", "4 \u4f4d\u4ee3\u78bc\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5b89\u5168\u5bc6\u78bc\u3002\u623f\u9593\u4f7f\u7528\u516c\u958b WSS \u4e2d\u7e7c\uff1b\u50b3\u8a71\u6587\u5b57\u7d93\u4e2d\u7e7c\u8207\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5c0d\u7aef\u52a0\u5bc6\u3002\u672c\u6a5f\u5132\u5b58\u4e5f\u4e0d\u9069\u5408\u654f\u611f\u8cc7\u8a0a\uff1b\u8acb\u52ff\u586b\u771f\u5be6\u59d3\u540d\u3001\u654f\u611f\u6b4c\u540d\u6216\u79c1\u5bc6\u8a0a\u606f\u3002": "The four-digit code is an invitation code, not a secure password. Rooms use a public WSS relay; messages pass through the relay and host, without end-to-end encryption. Local storage is not suitable for sensitive data either. Avoid real names, sensitive song titles and private messages.", "\u8cc7\u6599\u4fdd\u5b58\u8207\u96b1\u79c1": "Saved data & privacy", "\u7a7a\u767d\u9375": "Space", "\u64ad\u653e\uff0f\u505c\u6b62": "Play / stop", "\u9ede\u6309\u6e2c\u901f": "Tap tempo", "\u4e0b\u4e00\u9996": "Next song", "\u653e\u5927\uff0f\u9084\u539f\u7bc0\u62cd\u5668": "Expand / restore the metronome", "\u901f\u5ea6 \u00b11 BPM": "Tempo \u00b11 BPM", "\u901f\u5ea6 \u00b15 BPM": "Tempo \u00b15 BPM", "\u8f38\u5165\u6587\u5b57\u6216\u958b\u555f\u5c0d\u8a71\u8996\u7a97\u6642\uff0c\u4e0d\u6703\u89f8\u767c\u4e3b\u756b\u9762\u5feb\u901f\u9375\u3002": "Main-screen shortcuts do not trigger while you type or while a dialog is open.", "\u623f\u9593\u53c3\u8207\u8005\u7684\u7a7a\u767d\u9375\u64cd\u4f5c\u672c\u6a5f\u6536\u807d\u6216\u8072\u97f3\u6062\u5fa9\uff0c\u4e0d\u6703\u505c\u6b62\u6574\u500b\u623f\u9593\u3002": "For participants, Space controls local listening or audio recovery; it does not stop the whole room.", "\u9375\u76e4\u5feb\u901f\u9375": "Keyboard shortcuts", "\u4f7f\u7528\u8aaa\u660e": "User guide", "\u5148\u7528 3 \u6b65\u958b\u59cb\uff0c\u5176\u4ed6\u9700\u8981\u6642\u518d\u770b\u3002": "Start in three steps. Open a topic when you need it.", "\u95dc\u9589\u4f7f\u7528\u8aaa\u660e": "Close user guide", "\u5feb\u901f\u4e0a\u624b": "Quick start", "\u60f3\u4e86\u89e3\u54ea\u4e00\u9805\uff1f": "What would you like to know?"});
 /* v1.20.2: help-page priorities only; existing translations stay intact. */
 Object.assign(dictionary,{"\u9023\u4e0a\u5718\u968a\u3001\u540c\u6b65\u7bc0\u62cd\u3001\u5373\u6642\u50b3\u8a71\uff0c\u4e5f\u80fd\u7368\u81ea\u7df4\u7fd2\u3002": "Connect your band, share the beat and send live cues, or practise solo.", "TEMPOLIVE \u7684\u6838\u5fc3\u529f\u80fd": "The TEMPOLIVE essentials", "\u66f4\u591a\u64cd\u4f5c\u8207\u6ce8\u610f\u4e8b\u9805": "More controls and useful details", "\u5718\u968a\u623f\u9593": "Team rooms", "\u5efa\u7acb\u623f\u9593\uff0c\u5206\u4eab 4 \u4f4d\u4ee3\u78bc\u3002": "Create a room. Share its four-digit code.", "\u5718\u54e1\u9078\u64c7\u6a02\u5668\uff0f\u89d2\u8272\uff0c\u8f38\u5165\u4ee3\u78bc\u52a0\u5165\uff1b\u5168\u54e1\u4f7f\u7528\u76f8\u540c\u7248\u672c\u3002": "Bandmates choose an instrument or role and join with the code. Use the same version on every device.", "\u540c\u6b65\u7bc0\u62cd": "Synchronized beats", "\u4e3b\u6301\u4eba\u63a7\u5236\uff0c\u5168\u5718\u8ddf\u96a8\u7bc0\u62cd\u3002": "One host controls the beat.", "\u6821\u6642\u5f8c\u8ddf\u96a8\u4e3b\u6301\u4eba\u7684\u901f\u5ea6\u8207\u64ad\u653e\uff1b\u5404\u81ea\u8abf\u6574\u672c\u6a5f\u97f3\u91cf\uff0c\u4e0d\u5f71\u97ff\u5176\u4ed6\u4eba\u3002": "After clock sync, everyone follows the host's tempo and playback. Adjust your own volume without changing anyone else's.", "\u9078\u5c0d\u8c61\uff0c\u9ede\u77ed\u53e5\u5c31\u81ea\u52d5\u9001\u51fa\u3002": "Choose a recipient, then tap a phrase to send.", "\u5165\u623f\u5f8c\u5f9e\u5074\u908a\u958b\u555f\uff0c\u53ef\u50b3\u7d66\u6307\u5b9a\u6a02\u5668\u6216\u5168\u90e8\u4eba\uff1b\u8a9e\u97f3\u8acb\u5148\u555f\u7528\uff0f\u8a66\u807d\u3002": "Open the side tab after joining a room. Send to one instrument or everyone; enable and test speech first.", "\u7bc0\u62cd\u5668": "Metronome", "\u9078\u901f\u5ea6\u3001\u8abf\u7bc0\u594f\uff0c\u518d\u958b\u59cb\u64ad\u653e\u3002": "Set the tempo and rhythm, then press Start.", "\u8a2d\u5b9a 40\u2013300 BPM\u3001\u62cd\u865f\u8207\u97f3\u7b26\u7d30\u5206\uff1b\u9ede\u62cd\u9ede\u5207\u63db\u91cd\u97f3\u3001\u4e00\u822c\u6216\u975c\u97f3\u3002": "Choose 40\u2013300 BPM, a time signature and a subdivision. Tap beats to set them to accented, unaccented or muted."});
 Object.assign(dictionary,{"\u9078\u64c7\u8a9e\u8a00":"Choose language"});
 const german={"\u81ea\u7531\u7df4\u7fd2":"Freies \u00dcben","\u55ae\u4eba\u6a21\u5f0f":"Solo-Modus","\u4e3b\u6301\u4eba":"Host","\u53c3\u8207\u8005":"Teilnehmer","\u958b\u59cb\u7bc0\u62cd":"Start","\u505c\u6b62\u64ad\u653e":"Stopp","\u672c\u6a5f\u975c\u97f3":"Dieses Ger\u00e4t stummschalten","\u6062\u5fa9\u6536\u807d":"Ton einschalten","\u5c1a\u672a\u958b\u59cb":"Nicht gestartet","\u64ad\u653e\u4e2d":"L\u00e4uft","\u7b49\u5f85\u958b\u59cb":"Warten","\u9810\u5099\u62cd":"Einz\u00e4hlen","\u5df2\u5c31\u7dd2":"Bereit","\u6821\u6642\u4e2d":"Synchronisieren","\u5f85\u555f\u7528\u8072\u97f3":"Ton nicht aktiviert","\u5df2\u975c\u97f3":"Stumm","\u958b\u5834\u8b9a\u7f8e":"Lobpreis zum Auftakt","\u5b89\u975c\u656c\u62dc":"Ruhige Anbetung","\u56de\u61c9\u8a69\u6b4c":"Antwortlied","\u7bc4\u4f8b":"Beispiel","\u5df2\u5132\u5b58\u6b4c\u66f2":"Song gespeichert","\u8b8a\u66f4\u5c07\u65bc\u5c0f\u7bc0\u4ea4\u754c\u5957\u7528":"\u00c4nderung am n\u00e4chsten Taktanfang","\u6e96\u5099\u597d\u4e86\uff0c\u5f9e\u7b2c\u4e00\u62cd\u958b\u59cb\u3002":"Bereit. Starte auf der ersten Z\u00e4hlzeit.","\u7cfb\u7d71\u9810\u8a2d\uff08\u5587\u53ed\uff0f\u8033\u6a5f\uff09":"Systemstandard (Lautsprecher / Kopfh\u00f6rer)","\u7121\u6cd5\u9023\u4e0a\u4e2d\u7e7c\u670d\u52d9\u3002\u8acb\u5617\u8a66\u66f4\u63db Wi-Fi \u6216\u624b\u6a5f\u71b1\u9ede\uff0c\u518d\u6309\u91cd\u8a66\u3002\u516c\u958b\u670d\u52d9\u4e5f\u53ef\u80fd\u66ab\u6642\u7121\u6cd5\u4f7f\u7528\u3002":"Keine Verbindung zum Relay. Probiere ein anderes WLAN oder einen mobilen Hotspot und versuche es erneut. Der \u00f6ffentliche Dienst kann vor\u00fcbergehend nicht verf\u00fcgbar sein.","\u8207\u4e3b\u6301\u4eba\u7684\u9023\u7dda\u4e2d\u65b7\uff0c\u5df2\u505c\u6b62\u64ad\u653e\u3002\u8acb\u91cd\u65b0\u52a0\u5165\u623f\u9593\u3002":"Verbindung zum Host verloren. Die Wiedergabe wurde gestoppt. Bitte tritt dem Raum erneut bei.","\u91cd\u97f3":"Betont","\u4e00\u822c":"Unbetont","\u975c\u97f3":"Stumm","\u6728\u584a":"Holzblock","\u6eab\u6f64\u7684\u6728\u8cea\u6572\u64ca\uff0c\u8d77\u97f3\u6e05\u695a\u3001\u8072\u5c3e\u77ed\u4fc3\u3002":"Ein warmer Holzklang mit deutlichem Anschlag und kurzem Ausklang.","\u6e05\u6670\u96fb\u5b50":"Klarer Elektronik-Klick","\u6e05\u6670\u4fd0\u843d\u7684\u96fb\u5b50\u97f3\uff0c\u5f37\u5f31\u62cd\u4ee5\u9ad8\u4f4e\u97f3\u5340\u5206\u3002":"Ein klarer, pr\u00e4gnanter elektronischer Klick. Betonte und unbetonte Z\u00e4hlzeiten haben unterschiedliche Tonh\u00f6hen.","\u725b\u9234":"Cowbell","\u539a\u5be6\u7684\u91d1\u5c6c\u5171\u9cf4\uff0c\u62cd\u9ede\u660e\u78ba\u3001\u8fa8\u8b58\u5ea6\u9ad8\u3002":"Ein voller metallischer Klang mit gut erkennbarem Anschlag.","\u77ed\u9234":"Kurzer Glockenton","\u660e\u4eae\u7684\u77ed\u9234\u8072\uff0c\u5e36\u91d1\u5c6c\u5c64\u6b21\uff0c\u4e0d\u4f7f\u7528\u9577\u6df7\u97ff\u3002":"Ein heller, kurzer Glockenton mit metallischen Obert\u00f6nen, ohne langen Nachhall.","\u99ac\u6797\u5df4":"Marimba","\u5713\u6f64\u7684\u6728\u8cea\u5171\u9cf4\uff0c\u6709\u97f3\u9ad8\u8207\u6572\u64ca\u5c64\u6b21\u3002":"Ein runder Holzklang mit klarer Tonh\u00f6he und perkussivem Anschlag.","\u6a19\u6e96":"Standard","\u8f03\u81ea\u7136\u7684\u5f37\u5f31\u8207\u8870\u6e1b\uff0c\u9069\u5408\u5b89\u975c\u7df4\u7fd2\u3002":"Nat\u00fcrlichere Dynamik und Ausklang f\u00fcr ruhiges \u00dcben.","\u52a0\u5f37":"Verst\u00e4rkt","\u8f03\u9ad8\u7684\u767c\u8072\u5bc6\u5ea6\uff0c\u5f31\u62cd\u8207\u7d30\u5206\u97f3\u66f4\u660e\u986f\u3002":"Ein dichterer Klang, der unbetonte Z\u00e4hlzeiten und Unterteilungen deutlicher h\u00f6rbar macht.","\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8cc7\u6599\uff0c\u8acb\u4f7f\u7528\u300c\u532f\u51fa\u6b4c\u55ae\u300d\u5099\u4efd\u3002":"Der Browser konnte deine Daten nicht speichern. Erstelle mit \u201eSetlist exportieren\u201c eine Sicherung.","\u8acb\u518d\u9ede\u4e00\u6b21\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\uff0c\u5141\u8a31\u624b\u6a5f\u64ad\u653e\u3002":"Tippe erneut auf \u201eTon aktivieren\u201c, um die Wiedergabe auf diesem Smartphone zu erlauben.","\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4 Web Audio\u3002":"Dieser Browser unterst\u00fctzt Web Audio nicht.","\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u653e\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u958b\u59cb\u6216\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\u3002":"Die Wiedergabe ist noch nicht erlaubt. Tippe erneut auf Start oder \u201eTon aktivieren\u201c.","\u8acb\u518d\u9ede\u4e00\u6b21\u555f\u7528\u8072\u97f3\u3002":"Tippe erneut, um den Ton zu aktivieren.","\u65b0\u7248\u767c\u8072\u66f4\u5f37\uff1b\u8033\u6a5f\u8acb\u5148\u964d\u4f4e\u97f3\u91cf\uff0c\u518d\u9010\u6b65\u8abf\u6574\u3002":"Der Klick ist in dieser Version kr\u00e4ftiger. Stelle die Kopfh\u00f6rerlautst\u00e4rke zun\u00e4chst niedrig ein und erh\u00f6he sie schrittweise.","\u672c\u6a5f\u76ee\u524d\u975c\u97f3\uff0c\u8acb\u5148\u958b\u555f\u97f3\u91cf\u3002":"Dieses Ger\u00e4t ist stumm. Schalte den Ton ein oder erh\u00f6he die Lautst\u00e4rke.","\u6b63\u5728\u64ad\u653e\u76ee\u524d\u97f3\u8272\uff1b\u505c\u6b62\u7bc0\u62cd\u5f8c\u53ef\u55ae\u7368\u8a66\u807d\uff0c\u4e0d\u6703\u53e0\u52a0\u984d\u5916\u62cd\u9ede\u3002":"Der ausgew\u00e4hlte Klang wird bereits wiedergegeben. Stoppe das Metronom, um ihn ohne zus\u00e4tzliche Klicks einzeln vorzuh\u00f6ren.","\u5df2\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002":"Der Ton wurde auf diesem Ger\u00e4t wieder aktiviert.","\u6b63\u5728\u78ba\u8a8d\u4e2d\u7e7c\u9023\u7dda\u2026":"Relay-Verbindung wird gepr\u00fcft ...","\u4e2d\u7e7c\u670d\u52d9\u62d2\u7d55\u9023\u7dda\uff08":"Das Relay hat die Verbindung abgelehnt (","\uff09\u3002\u8acb\u7a0d\u5f8c\u91cd\u8a66\u3002 [R04]":"). Bitte versuche es sp\u00e4ter erneut. [R04]","\u4e2d\u7e7c\u8cc7\u6599\u683c\u5f0f\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66\u3002 [R05]":"Ung\u00fcltige Relay-Daten. Bitte erneut versuchen. [R05]","\u7121\u6cd5\u8a02\u95b1\u623f\u9593\u8cc7\u6599\uff0c\u8acb\u91cd\u8a66\u3002 [R08]":"Raumdaten konnten nicht abonniert werden. Bitte erneut versuchen. [R08]","\u4e2d\u7e7c\u6c92\u6709\u56de\u61c9\uff0c\u8acb\u91cd\u8a66\u3002 [R09]":"Das Relay antwortet nicht. Bitte erneut versuchen. [R09]","\u5df2\u9023\u4e0a\u4e2d\u7e7c\uff0c\u4f46\u627e\u4e0d\u5230\u6b64\u623f\u9593\u3002\u8acb\u78ba\u8a8d\u56db\u4f4d\u4ee3\u78bc\u3001\u4e3b\u6301\u4eba\u672a\u95dc\u9589\u7db2\u9801\uff0c\u4e26\u78ba\u8a8d\u5168\u54e1\u90fd\u4f7f\u7528\u9019\u4e00\u7248\u3002 [R10]":"Mit dem Relay verbunden, aber der Raum wurde nicht gefunden. Pr\u00fcfe den vierstelligen Code, ob der Host die Seite ge\u00f6ffnet hat und ob alle dieselbe Version verwenden. [R10]","\u9023\u7dda\u4e2d\u65b7\uff0c\u6b63\u5728\u91cd\u9023":"Verbindung verloren. Erneuter Verbindungsaufbau","\u6b63\u5728\u9023\u63a5\u4e2d\u7e7c\u670d\u52d9":"Verbindung zum Relay wird hergestellt","\u5df2\u9023\u4e0a\u4e2d\u7e7c\uff0c\u6b63\u5728\u6aa2\u67e5\u56db\u4f4d\u4ee3\u78bc\u2026":"Mit dem Relay verbunden. Der vierstellige Code wird gepr\u00fcft ...","\u623f\u9593\u4ee3\u78bc\u5df2\u88ab\u5176\u4ed6\u4e3b\u6301\u4eba\u4f7f\u7528\uff0c\u8acb\u91cd\u65b0\u5efa\u7acb\u623f\u9593\u3002":"Ein anderer Host verwendet diesen Raumcode. Bitte erstelle einen neuen Raum.","\u623f\u9593\u4ee3\u78bc\u5fd9\u788c\uff0c\u8acb\u91cd\u8a66\u5efa\u7acb\u3002":"Der Raumcode ist belegt. Bitte versuche erneut, einen Raum zu erstellen.","\u6b63\u5728\u9023\u63a5\u4e2d\u7e7c\u670d\u52d9\u2026":"Verbindung zum Relay wird hergestellt ...","\u9023\u7dda\u903e\u6642\uff0c\u5df2\u505c\u6b62\u7b49\u5f85\u3002\u8acb\u78ba\u8a8d\u5168\u54e1\u4f7f\u7528\u65b0\u7248\uff0c\u4e26\u5617\u8a66\u66f4\u63db\u7db2\u8def\u5f8c\u91cd\u8a66\u3002 [R11]":"Zeit\u00fcberschreitung beim Verbindungsaufbau. Pr\u00fcfe, ob alle dieselbe Version verwenden, und versuche es mit einem anderen Netzwerk. [R11]","\u4e2d\u7e7c\u5df2\u9023\u7dda\uff0c\u6b63\u5728\u5c0b\u627e\u623f\u9593 ":"Relay verbunden. Raum wird gesucht: ","\u4e2d\u7e7c\u4e2d\u65b7\uff0c\u6b63\u5728\u81ea\u52d5\u91cd\u9023\u2026":"Relay-Verbindung unterbrochen. Automatischer Neuaufbau ...","\u623f\u9593\u5df2\u9054\u672c\u7248 12 \u4eba\u4e0a\u9650\u3002":"Dieser Raum hat die Obergrenze von 12 Personen erreicht.","\u4e3b\u6301\u4eba\u5df2\u7d50\u675f\u623f\u9593\uff0c\u7bc0\u62cd\u5df2\u505c\u6b62\u3002":"Der Host hat den Raum beendet. Die Wiedergabe wurde gestoppt.","\u623f\u9593\u6821\u6642\u5b8c\u6210\uff0c\u6b63\u5728\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002":"Die Uhren sind synchronisiert. Du folgst jetzt dem Host.","\u5df2\u9023\u4e0a\u623f\u9593\uff0c\u4f46\u7db2\u8def\u5ef6\u9072\u904e\u5927\u800c\u7121\u6cd5\u6821\u6642\u3002\u5df2\u505c\u6b62\u7b49\u5f85\uff0c\u8acb\u66f4\u63db\u7db2\u8def\u5f8c\u91cd\u8a66\u3002 [R12]":"Mit dem Raum verbunden, aber die Netzwerklatenz ist zum Synchronisieren zu hoch. Versuche es mit einem anderen Netzwerk. [R12]","\u5df2\u91cd\u65b0\u53d6\u6a23\u6821\u6642\uff0c\u4e0d\u6539\u8b8a\u64ad\u653e\u9032\u5ea6\u3002":"Die Uhrensynchronisation wird neu gemessen. Die Wiedergabeposition bleibt unver\u00e4ndert.","\u5df2\u91cd\u65b0\u50b3\u9001\u7bc0\u594f\u72c0\u614b\u3002":"Der aktuelle Wiedergabestatus wurde erneut gesendet.","\u5df2\u96e2\u958b\u623f\u9593\uff0c\u56de\u5230\u55ae\u4eba\u6a21\u5f0f\u3002":"Du hast den Raum verlassen und bist wieder im Solo-Modus.","\u7b2c ":"Z\u00e4hlzeit "," \u62cd\uff1a":": ","\uff0c\u9ede\u9078\u5207\u63db":". Zum \u00c4ndern antippen.","\u6162\u677f\u547c\u5438":"Langsam und ruhig","\u5f9e\u5bb9\u524d\u884c":"Entspanntes Tempo","\u7a69\u5b9a\u5f8b\u52d5":"Gleichm\u00e4\u00dfiger Groove","\u8f15\u5feb\u63a8\u9032":"Lebendiger Schwung","\u9ad8\u901f\u7bc0\u594f":"Schnelles Tempo","\u7bc0\u594f\u7531\u4e3b\u6301\u4eba\u7d71\u4e00\u63a7\u5236":"Der Host steuert den Rhythmus","\u9ede\u9078\u62cd\u9ede\uff1a\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3":"Antippen: betont \u2192 unbetont \u2192 stumm","\u6062\u5fa9\u672c\u6a5f\u8072\u97f3":"Ton wiederherstellen","\u5718\u968a\u6536\u807d":"Gemeinsam h\u00f6ren","\u623f\u9593\u4e3b\u6301":"Raum leiten","\u9023\u7dda\u4e2d":"Verbinden","\u9084\u6c92\u6709\u6b4c\u66f2\uff0c\u5c07\u76ee\u524d\u7684\u7bc0\u594f\u5b58\u6210\u7b2c\u4e00\u9996\u5427\u3002":"Noch keine Songs. Speichere den aktuellen Rhythmus als ersten Song.","\u7de8\u8f2f ":"Bearbeiten: ","\u6211\u7684\u5718\u968a\u623f\u9593":"Mein Bandraum","\u5df2\u52a0\u5165\u5718\u968a\u623f\u9593":"Raum beigetreten","\u4e2d\u7e7c\u4e2d\u65b7\uff0c\u91cd\u9023\u4e2d":"Relay getrennt. Erneuter Verbindungsaufbau","\u5df2\u9023\u7dda\uff0c\u6821\u6642\u4e2d":"Verbunden. Uhren werden synchronisiert","\u5df2\u9023\u7dda \u00b7 \u4e2d\u7e7c\u540c\u6b65":"Verbunden \u00b7 Relay-Synchronisation"," \u4eba\u5728\u623f\u9593":" Personen im Raum","\u4eba":"P"," \u00b7 \u4e3b\u6301":" \u00b7 Host","\u7db2\u8def\u6ce2\u52d5":"Instabiles Netzwerk","\u5df2\u6821\u6642":"Synchronisiert","\u56db\u4f4d\u6578\u5b57\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5bc6\u78bc\u3002\u77e5\u9053\u4ee3\u78bc\u7684\u4eba\u53ef\u52a0\u5165\uff1b\u95dc\u9589\u7db2\u9801\u6703\u7d50\u675f\u623f\u9593\u3002":"Der vierstellige Code ist eine Einladung, kein Passwort. Wer den Code kennt, kann beitreten. Das Schlie\u00dfen dieser Seite beendet den Raum.","\u986f\u793a\u7684\u662f\u7db2\u8def\u5f80\u8fd4\u5ef6\u9072\uff0c\u4e0d\u662f\u8033\u6a5f\u7684\u5be6\u969b\u8072\u97f3\u8aa4\u5dee\u3002":"Dies ist die Netzwerk-Roundtrip-Zeit, nicht die tats\u00e4chliche Zeitabweichung zwischen Kopfh\u00f6rern.","\u7d50\u675f\u623f\u9593":"Raum beenden","\u96e2\u958b\u623f\u9593":"Raum verlassen","\u5df2\u958b\u555f\uff0c\u50c5\u7bc0\u62cd\u5668\u5340\u584a\u767c\u5149":"Ein. Nur der Metronombereich leuchtet auf.","\u95dc\u9589\uff0c\u4e0d\u986f\u793a\u62cd\u9ede\u87a2\u5149":"Aus. Kein optischer Taktimpuls.","00:00 \u00b7 \u7b2c 0 \u5c0f\u7bc0":"00:00 \u00b7 Takt 0","\u9810\u5099 ":"Einz\u00e4hlen: "," \u5c0f\u7bc0":" Takte","\u9810\u5099\u62cd \u00b7 ":"Einz\u00e4hlen \u00b7 "," \u00b7 \u7b2c ":" \u00b7 Takt ","\u8ddf\u96a8\u4e3b\u6301\u4eba \u00b7 ":"Dem Host folgen \u00b7 "," \u00b7 \u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96":" \u00b7 BPM in Viertelnoten"," \u79d2":" s","\u5c07\u65bc ":"Start in "," \u79d2\u5f8c\u958b\u59cb":" s"," \u79d2\u5f8c\u505c\u6b62":" s","\u6b63\u5728\u6821\u6b63\u88dd\u7f6e\u6642\u9593\u2026":"Die Ger\u00e4teuhren werden synchronisiert ...","\u91cd\u9023\u4e2d":"Neu verbinden","\u9023\u7dda\u4e2d\u65b7\uff0c\u8072\u97f3\u66ab\u505c\uff1b\u6b63\u5728\u91cd\u65b0\u9023\u7dda\u3002":"Verbindung unterbrochen. Der Ton pausiert w\u00e4hrend des Neuaufbaus.","\u6b4c\u55ae\u4e0a\u9650\u70ba 200 \u9996\uff0c\u8acb\u5148\u532f\u51fa\u5099\u4efd\u4e26\u6574\u7406\u3002":"Die Setlist ist auf 200 Songs begrenzt. Exportiere eine Sicherung und entferne zuerst nicht ben\u00f6tigte Songs.","\u7de8\u8f2f\u6b4c\u66f2":"Song bearbeiten","\u65b0\u589e\u6b4c\u66f2":"Song hinzuf\u00fcgen","\u8acb\u8f38\u5165\u6b4c\u66f2\u540d\u7a31":"Gib einen Songnamen ein","\u6b4c\u66f2\u5df2\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff0c\u4f46\u700f\u89bd\u5668\u7121\u6cd5\u5132\u5b58\uff1b\u8acb\u5148\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002":"Der Song bleibt auf dieser Seite verf\u00fcgbar, konnte aber nicht gespeichert werden. Exportiere die Setlist vor dem Schlie\u00dfen.","\u78ba\u5b9a\u522a\u9664\u300c":"L\u00f6schen: \u201e","\u5df2\u522a\u9664\u6b4c\u66f2\u3002":"Song gel\u00f6scht.","\u5df2\u5f9e\u76ee\u524d\u9801\u9762\u522a\u9664\uff0c\u4f46\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8b8a\u66f4\uff1b\u8acb\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002":"Auf dieser Seite gel\u00f6scht, aber der Browser konnte die \u00c4nderung nicht speichern. Exportiere eine Setlist-Sicherung.","\u5df2\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002":"Setlist-Sicherung exportiert.","\u532f\u5165 ":"Importieren: "," \u9996\u6b4c\u66f2\uff0c\u4e26\u53d6\u4ee3\u6b64\u700f\u89bd\u5668\u539f\u6709\u6b4c\u55ae\uff1f\u539f\u6b4c\u55ae\u8acb\u5148\u532f\u51fa\u5099\u4efd\u3002":" Songs und die bisherige Setlist dieses Browsers ersetzen? Exportiere die aktuelle Setlist zuerst.","\u5df2\u532f\u5165 ":"Importiert: "," \u9996\u6b4c\u66f2\u3002":" Songs.","\u5df2\u532f\u5165\u6b4c\u55ae\uff0c\u4f46\u50c5\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff1b\u8acb\u78ba\u8a8d\u700f\u89bd\u5668\u5141\u8a31\u5132\u5b58\u8cc7\u6599\u3002":"Die Setlist wurde importiert, ist aber nur auf dieser Seite verf\u00fcgbar. Pr\u00fcfe, ob der Browser Daten speichern darf.","\u7121\u6cd5\u532f\u5165\uff1a\u8acb\u9078\u64c7\u7531\u672c\u7bc0\u62cd\u5668\u532f\u51fa\u30012 MB \u4ee5\u4e0b\u7684\u6709\u6548 JSON \u6b4c\u55ae\u3002":"Import fehlgeschlagen. W\u00e4hle eine g\u00fcltige, mit diesem Metronom exportierte JSON-Setlist unter 2 MB.","\u518d\u9ede\u4e00\u6b21\u6e2c\u901f\uff0c\u9023\u7e8c\u591a\u9ede\u5e7e\u6b21\u66f4\u6e96\u78ba\u3002":"Tippe noch einmal, um das Tempo zu messen. Weitere Taps verbessern die Sch\u00e4tzung.","\u5df2\u5207\u63db\u52a0\u5f37\uff0c\u8acb\u5f9e\u8f03\u4f4e\u97f3\u91cf\u958b\u59cb\u8a66\u807d\u3002":"Verst\u00e4rkte Ausgabe aktiviert. Beginne mit geringer Lautst\u00e4rke und erh\u00f6he sie schrittweise.","\u5207\u63db\u6dfa\u8272\u6a21\u5f0f":"Zum hellen Modus wechseln","\u5207\u63db\u6df1\u8272\u6a21\u5f0f":"Zum dunklen Modus wechseln","\u76ee\u524d\u4f7f\u7528\u6df1\u8272\u5916\u89c0":"Dunkler Modus aktiv","\u76ee\u524d\u4f7f\u7528\u6dfa\u8272\u5916\u89c0":"Heller Modus aktiv","\u96e2\u958b\u5c08\u6ce8\u6a21\u5f0f":"Fokusmodus verlassen","\u5c08\u6ce8\u6a21\u5f0f":"Fokusmodus","\u97f3\u8a0a\u88dd\u7f6e ":"Audioger\u00e4t ","\u539f\u8f38\u51fa\u88dd\u7f6e\u5df2\u4e2d\u65b7\uff0c\u6539\u7528\u7cfb\u7d71\u9810\u8a2d\u8f38\u51fa\u3002":"Das bisherige Ausgabeger\u00e4t wurde getrennt. Die Systemausgabe wird verwendet.","\u6b64\u700f\u89bd\u5668\u4f7f\u7528\u7cfb\u7d71\u7684\u97f3\u8a0a\u8f38\u51fa\u3002\u8981\u7528\u624b\u6a5f\u5916\u653e\uff0c\u8acb\u5728\u63a7\u5236\u4e2d\u5fc3\u9078\u64c7\u624b\u6a5f\u5587\u53ed\u6216\u4e2d\u65b7\u85cd\u7259\u8033\u6a5f\uff0c\u8abf\u9ad8\u5a92\u9ad4\u97f3\u91cf\uff0c\u518d\u9ede\u300c\u8a66\u807d\u300d\u3002\u4e0d\u9700\u8981\u8033\u6a5f\u6216\u9ea5\u514b\u98a8\u6b0a\u9650\u5373\u53ef\u64ad\u653e\u3002":"Dieser Browser verwendet die Systemausgabe. W\u00e4hle f\u00fcr die Smartphone-Lautsprecher diese in der Systemsteuerung oder trenne die Bluetooth-Kopfh\u00f6rer. Erh\u00f6he die Medienlautst\u00e4rke und tippe auf \u201eKlang testen\u201c. Kopfh\u00f6rer und Mikrofonzugriff sind f\u00fcr die Wiedergabe nicht erforderlich.","\u53ef\u4f7f\u7528\u624b\u6a5f\u5587\u53ed\uff1b\u8acb\u78ba\u8a8d\u7cfb\u7d71\u8f38\u51fa\u8207\u5a92\u9ad4\u97f3\u91cf\uff0c\u518d\u9ede\u8a66\u807d\u3002":"Der Smartphone-Lautsprecher kann verwendet werden. Pr\u00fcfe Systemausgabe und Medienlautst\u00e4rke und teste dann den Klang.","\u5df2\u9078\u8f38\u51fa":"Gew\u00e4hlte Ausgabe","\u5df2\u5207\u63db\u97f3\u8a0a\u8f38\u51fa\u3002":"Audioausgabe ge\u00e4ndert.","\u672a\u5207\u63db\u8f38\u51fa\uff1a\u8acb\u5141\u8a31\u88dd\u7f6e\u6b0a\u9650\uff0c\u6216\u6539\u7531\u7cfb\u7d71\u9078\u64c7\u8033\u6a5f\u3002":"Die Ausgabe wurde nicht ge\u00e4ndert. Erlaube den Ger\u00e4tezugriff oder w\u00e4hle die Kopfh\u00f6rer in den Systemeinstellungen.","\u5df2\u66f4\u65b0\u88dd\u7f6e\u6e05\u55ae\uff0c\u8acb\u9078\u64c7\u8981\u4f7f\u7528\u7684\u8f38\u51fa\u3002":"Ger\u00e4teliste aktualisiert. W\u00e4hle die gew\u00fcnschte Ausgabe.","\u7121\u6cd5\u53d6\u5f97\u88dd\u7f6e\u6e05\u55ae\uff0c\u8acb\u6539\u7531\u7cfb\u7d71\u9078\u64c7\u8f38\u51fa\u3002":"Die Ger\u00e4teliste konnte nicht geladen werden. W\u00e4hle die Ausgabe in den Systemeinstellungen.","\u5df2\u5207\u63db\u8072\u97f3\u8f38\u51fa\uff0c\u8acb\u8a66\u807d\u78ba\u8a8d\u3002":"Audioausgabe ge\u00e4ndert. Teste den Klang zur Kontrolle.","\u7121\u6cd5\u5207\u63db\u8f38\u51fa\uff0c\u539f\u8f38\u51fa\u4fdd\u6301\u4e0d\u8b8a\u3002":"Die Ausgabe konnte nicht ge\u00e4ndert werden. Die bisherige Ausgabe bleibt bestehen."," \u00b7 \u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4":" \u00b7 Vom Browser nicht unterst\u00fctzt"," \u00b7 \u5df2\u555f\u7528":" \u00b7 Aktiviert"," \u00b7 \u672a\u53d6\u5f97\u6b0a\u9650":" \u00b7 Keine Berechtigung","\u5efa\u7acb\u5718\u968a\u623f\u9593":"Bandraum erstellen","\u4ee3\u78bc\u52a0\u5165\u623f\u9593":"Mit Code beitreten","\u5efa\u7acb\u623f\u9593":"Raum erstellen","\u52a0\u5165\u4e26\u555f\u7528\u8072\u97f3":"Beitreten und Ton aktivieren","\u4f60\u5c07\u6210\u70ba\u4e3b\u6301\u4eba\uff0c\u7d71\u4e00\u63a7\u5236\u5927\u5bb6\u7684\u7bc0\u594f\u3002":"Du wirst Host und steuerst den Rhythmus f\u00fcr alle.","\u8f38\u5165\u4e3b\u6301\u4eba\u63d0\u4f9b\u7684\u56db\u4f4d\u6578\u5b57\uff0c\u52a0\u5165\u5f8c\u81ea\u52d5\u8ddf\u96a8\u7bc0\u62cd\u3002":"Gib den vierstelligen Code des Hosts ein. Nach dem Beitritt folgst du dem Metronom.","\u8acb\u8f38\u5165\u66b1\u7a31\u3002":"Gib einen Spitznamen ein.","\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u56db\u4f4d\u6578\u5b57\u4ee3\u78bc\u3002":"Gib einen g\u00fcltigen vierstelligen Code ein.","\u76ee\u524d\u96e2\u7dda\uff0c\u8acb\u5148\u9023\u4e0a\u7db2\u8def\u3002":"Du bist offline. Stelle zuerst eine Internetverbindung her.","\u9023\u7dda\u4e2d\u2026":"Verbinden ...","\u623f\u9593\u5df2\u5efa\u7acb\uff0c\u8acb\u5206\u4eab\u56db\u4f4d\u6578\u5b57\u7d66\u5718\u54e1\u3002":"Raum erstellt. Teile den vierstelligen Code mit deiner Band.","\u5df2\u52a0\u5165\u623f\u9593\uff0c\u958b\u59cb\u6821\u6642\u3002":"Raum beigetreten. Die Uhren werden synchronisiert.","\u91cd\u8a66\u5efa\u7acb":"Erneut erstellen","\u91cd\u8a66\u52a0\u5165":"Erneut beitreten","\u7d50\u675f\u623f\u9593\u5c07\u505c\u6b62\u6240\u6709\u53c3\u8207\u8005\u7684\u7bc0\u62cd\uff0c\u78ba\u5b9a\u7d50\u675f\uff1f":"Wenn du den Raum beendest, stoppt das Metronom f\u00fcr alle Teilnehmer. Raum beenden?","\u5df2\u8907\u88fd\u623f\u9593\u4ee3\u78bc\uff1a":"Raumcode kopiert: ","\u8acb\u624b\u52d5\u8907\u88fd\u4ee3\u78bc\uff1a":"Code bitte manuell kopieren: ","\u7cfb\u7d71\u8f38\u51fa\u8aaa\u660e":"Hilfe zur Systemausgabe","\u6b64\u700f\u89bd\u5668\u7684\u5132\u5b58\u8cc7\u6599\u7121\u6cd5\u8b80\u53d6\uff0c\u5df2\u4f7f\u7528\u9810\u8a2d\u503c\u3002\u8acb\u4f7f\u7528\u6b4c\u55ae\u532f\u51fa\u5099\u4efd\u3002":"Gespeicherte Daten konnten nicht gelesen werden. Die Standardwerte wurden geladen. Exportiere die Setlist zur Sicherung.","\u5df2\u66ab\u6642\u95dc\u9589\u672c\u6a5f\u7bc0\u62cd\u8072\u3002\u904a\u6232\u7d50\u675f\u6216\u8fd4\u56de\u5f8c\u81ea\u52d5\u6062\u5fa9\uff1b\u623f\u9593\u5176\u4ed6\u4eba\u7684\u7bc0\u62cd\u4e0d\u53d7\u5f71\u97ff\u3002":"Das Metronom ist auf diesem Ger\u00e4t vor\u00fcbergehend stumm. Nach dem Spiel oder bei der R\u00fcckkehr wird der Ton wiederhergestellt. Andere Ger\u00e4te im Raum sind nicht betroffen.","\u700f\u89bd\u5668\u5c1a\u672a\u6062\u5fa9\u7bc0\u62cd\u8072\uff0c\u8acb\u56de\u4e3b\u756b\u9762\u91cd\u65b0\u555f\u7528\u8072\u97f3\u3002":"Der Browser hat den Metronomton noch nicht wiederhergestellt. Kehre zur Hauptansicht zur\u00fcck und aktiviere den Ton erneut.","\u904a\u6232\u5df2\u7d50\u675f\uff0c\u5df2\u6062\u5fa9\u672c\u6a5f\u7bc0\u62cd\u8072\u3002\u518d\u73a9\u4e00\u6b21\u6642\u6703\u81ea\u52d5\u5207\u63db\u56de\u904a\u6232\u8072\u97f3\u3002":"Das Spiel ist beendet und der lokale Metronomton l\u00e4uft wieder. Bei einem neuen Spiel wird wieder zum Spielton gewechselt.","\u904a\u6232\u5df2\u7d50\u675f\uff0c\u4fdd\u7559\u76ee\u524d\u7684\u505c\u6b62\u3001\u975c\u97f3\u8207\u97f3\u91cf\u8a2d\u5b9a\u3002":"Das Spiel ist beendet. Stopp, Stummschaltung und Lautst\u00e4rke bleiben wie eingestellt.","\u904a\u6232\u7121\u6cd5\u8f09\u5165\uff0c\u8acb\u91cd\u65b0\u958b\u555f\u3002":"Das Spiel konnte nicht geladen werden. Schlie\u00dfe es und \u00f6ffne es erneut.","\u7bc0\u594f\u5c0f\u904a\u6232":"Rhythmusspiel","\u7e7c\u7e8c\u7bc0\u594f\u6311\u6230":"Rhythmus-Challenge fortsetzen","\uff5c\u6700\u9ad8 ":" \u00b7 Rekord: "," \u5206":" Punkte","\uff08\u65b0\u529f\u80fd\uff09":" (neue Funktion)","\u92fc\u7434":"Klavier","\u9375\u76e4":"Keyboard","\u6728\u5409\u4ed6":"Akustikgitarre","\u96fb\u5409\u4ed6":"E-Gitarre","\u8c9d\u65af":"Bass","\u9f13":"Schlagzeug","\u4e3b\u9818":"Lobpreisleitung","\u6b4c\u5531":"Gesang","\u97f3\u63a7":"Tontechnik","\u592a\u5feb":"Zu schnell","\u6162\u4e00\u9ede":"Langsamer","\u8acb\u6162\u4e00\u9ede":"Bitte langsamer","\u592a\u6162":"Zu langsam","\u5feb\u4e00\u9ede":"Schneller","\u8acb\u5feb\u4e00\u9ede":"Bitte schneller","\u591a\u4e00\u9ede":"Etwas mehr","\u5c11\u4e00\u9ede":"Etwas weniger","\u76e3\u807d\u5927":"Monitor lauter","\u76e3\u807d\u5927\u4e00\u9ede":"Monitorpegel erh\u00f6hen","\u76e3\u807d\u5c0f":"Monitor leiser","\u76e3\u807d\u5c0f\u4e00\u9ede":"Monitorpegel verringern","\u8981\u5e6b\u5fd9":"Hilfe n\u00f6tig","\u9700\u8981\u5e6b\u5fd9":"Ich brauche Hilfe","\u7b49\u5f85\u9001\u9054":"Warten auf Zustellung","\u4e3b\u6301\u4eba\u5df2\u63a5\u6536":"Nachricht beim Host eingegangen","\u5df2\u9001\u9054":"Zugestellt","\u5df2\u9001\u9054\uff0c\u7b49\u5f85\u64ad\u5831":"Zugestellt. Sprachausgabe wartet","\u6b63\u5728\u64ad\u5831":"Wird vorgelesen","\u88dd\u7f6e\u5df2\u5b8c\u6210\u64ad\u5831":"Sprachausgabe auf dem Ger\u00e4t beendet","\u5c0d\u65b9\u5df2\u78ba\u8a8d":"Vom Empf\u00e4nger best\u00e4tigt","\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u672a\u555f\u7528":"Zugestellt. Sprachausgabe nicht aktiviert","\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u97f3\u91cf\u70ba\u96f6":"Zugestellt. Sprachlautst\u00e4rke ist null","\u5df2\u9001\u9054\uff0c\u81ea\u52d5\u64ad\u5831\u95dc\u9589":"Zugestellt. Automatisches Vorlesen ist aus","\u5df2\u9001\u9054\uff0c\u64ad\u5831\u5931\u6557":"Zugestellt. Sprachausgabe fehlgeschlagen","\u5df2\u9001\u9054\uff0c\u5df2\u903e\u64ad\u5831\u6642\u9650":"Zugestellt. Vorlesefrist abgelaufen","\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u4f47\u5217\u5df2\u6eff":"Zugestellt. Sprachwarteschlange ist voll","\u5c0d\u65b9\u9700\u66f4\u65b0\u7248\u672c":"Der Empf\u00e4nger muss aktualisieren","\u5c0d\u65b9\u96e2\u7dda\uff0f\u5c1a\u672a\u78ba\u8a8d\u9001\u9054":"Empf\u00e4nger offline / Zustellung unbest\u00e4tigt","\u903e\u6642\u672a\u78ba\u8a8d\u9001\u9054":"Zeitlimit f\u00fcr Zustellbest\u00e4tigung abgelaufen","\u88dd\u7f6e\u7121\u6cd5\u540c\u6642\u64ad\u653e\u8a9e\u97f3":"Das Ger\u00e4t kann Sprache nicht gleichzeitig wiedergeben","\u672a\u9001\u51fa":"Nicht gesendet","\u9f13\u624b":"Schlagzeuger","\u8aaa\uff0c":" sagt: ","\u4e0d\u652f\u63f4\u8a9e\u97f3":"Sprachausgabe nicht unterst\u00fctzt","\u50c5\u986f\u793a\u6587\u5b57":"Nur Text","\u8a9e\u97f3\u975c\u97f3":"Sprachausgabe stumm","\u9700\u8981\u91cd\u65b0\u8a66\u807d":"Sprachausgabe erneut testen","\u8a9e\u97f3\u5df2\u555f\u7528":"Sprachausgabe aktiviert","\u5f85\u555f\u7528\u8a9e\u97f3":"Sprachausgabe nicht aktiviert","\u76ee\u524d\u6b63\u5728\u64ad\u5831\uff0c\u8acb\u807d\u5b8c\u5f8c\u518d\u8a66\u807d\u3002":"Eine Nachricht wird gerade vorgelesen. Warte vor dem Test, bis sie beendet ist.","\u8a9e\u97f3\u63d0\u9192\u5df2\u555f\u7528\u3002\u7bc0\u62cd\u5668\u6703\u7e7c\u7e8c\u64ad\u653e\u3002":"Sprachhinweise sind aktiviert. Das Metronom l\u00e4uft weiter.","\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u8a9e\u97f3\u5408\u6210\uff0c\u4ecd\u53ef\u63a5\u6536\u6587\u5b57\u3002":"Dieser Browser unterst\u00fctzt keine Sprachsynthese. Textnachrichten funktionieren weiterhin.","\u8a9e\u97f3\u97f3\u91cf\u76ee\u524d\u70ba\u96f6\u3002":"Die Sprachlautst\u00e4rke ist derzeit null.","\u627e\u4e0d\u5230\u4e2d\u6587\u8a9e\u97f3\u3002\u8acb\u5728\u88dd\u7f6e\u5b89\u88dd\u4e2d\u6587\u8a9e\u97f3\u5f8c\uff0c\u518d\u6309\u555f\u7528\uff0f\u8a66\u807d\u3002":"Keine deutsche Stimme verf\u00fcgbar. Installiere eine deutsche Systemstimme und w\u00e4hle dann \u201eAktivieren / testen\u201c.","\u8a9e\u97f3\u7121\u6cd5\u64ad\u653e":"Sprachausgabe nicht m\u00f6glich","\u8a9e\u97f3\u672a\u80fd\u64ad\u653e\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u3002":"Die Sprachausgabe ist fehlgeschlagen. Bitte erneut testen.","\u8a66\u807d\u5b8c\u6210\u3002\u8acb\u78ba\u8a8d\u5be6\u969b\u5587\u53ed\uff0f\u8033\u6a5f\u6709\u8072\u97f3\uff1b\u97f3\u91cf\u4ecd\u7531\u7cfb\u7d71\u9650\u5236\u3002":"Sprachtest beendet. Pr\u00fcfe, ob du ihn tats\u00e4chlich \u00fcber Lautsprecher oder Kopfh\u00f6rer geh\u00f6rt hast. Die Systemlautst\u00e4rke begrenzt weiterhin die Ausgabe.","\u8a66\u807d\u672a\u5b8c\u6210\u3002":"Sprachtest nicht abgeschlossen.","\u8a9e\u97f3\u64ad\u653e\u903e\u6642\u3002":"Zeit\u00fcberschreitung bei der Sprachausgabe.","\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u5831\uff0c\u8acb\u9ede\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\u3002":"Der Browser hat die Sprachausgabe noch nicht erlaubt. W\u00e4hle \u201eAktivieren / testen\u201c.","\u8a9e\u97f3\u670d\u52d9\u7121\u6cd5\u64ad\u653e\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u4e26\u78ba\u8a8d\u4e2d\u6587\u8a9e\u97f3\u5df2\u5b89\u88dd\u3002":"Der Sprachdienst konnte nichts wiedergeben. Teste erneut und pr\u00fcfe, ob eine deutsche Stimme installiert ist.","\u6b64\u88dd\u7f6e\u76ee\u524d\u7121\u6cd5\u540c\u6642\u64ad\u653e\u8a9e\u97f3\u8207\u7bc0\u62cd\uff0c\u5df2\u505c\u6b62\u8a9e\u97f3\uff1b\u8acb\u91cd\u65b0\u555f\u7528\u7bc0\u62cd\u4e26\u6539\u7528\u6587\u5b57\u78ba\u8a8d\u3002":"Dieses Ger\u00e4t kann Sprache und Metronom derzeit nicht gleichzeitig wiedergeben. Die Sprachausgabe wurde gestoppt. Aktiviere das Metronom erneut und nutze Textnachrichten.","\u8a9e\u97f3\u5c1a\u672a\u958b\u59cb\uff0c\u8acb\u9ede\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\uff0c\u4e26\u78ba\u8a8d\u4e2d\u6587\u8a9e\u97f3\u53ca\u8f38\u51fa\u88dd\u7f6e\u3002":"Die Sprachausgabe hat noch nicht begonnen. W\u00e4hle \u201eAktivieren / testen\u201c und pr\u00fcfe deutsche Stimme und Ausgabeger\u00e4t.","\u7121\u6cd5\u555f\u52d5\u8a9e\u97f3\uff0c\u8acb\u4f7f\u7528\u652f\u63f4\u4e2d\u6587\u8a9e\u97f3\u7684\u700f\u89bd\u5668\u3002":"Die Sprachausgabe konnte nicht starten. Verwende einen Browser mit deutscher Sprachsynthese.","\u81ea\u52d5\u9078\u64c7\u4e2d\u6587\u8072\u97f3":"Deutsche Stimme automatisch w\u00e4hlen","\uff08\u672c\u6a5f\uff09":" (lokal)","\uff08\u53ef\u80fd\u9700\u7db2\u8def\uff09":" (ggf. Internet erforderlich)","\u4e2d\u6587\u8a9e\u97f3\u4f7f\u7528\u7cfb\u7d71\u8f38\u51fa\uff1b\u4e0d\u6703\u8ddf\u96a8\u7db2\u9801\u53e6\u5916\u6307\u5b9a\u7684\u97f3\u6548\u5361\u3002\u8acb\u5148\u8a66\u807d\u78ba\u8a8d\u3002":"Deutsche Sprachausgabe nutzt die Systemausgabe, nicht ein auf dieser Seite separat ausgew\u00e4hltes Audio-Interface. Bitte zuerst testen.","\u88dd\u7f6e\u5c1a\u672a\u5217\u51fa\u4e2d\u6587\u8a9e\u97f3\uff1b\u53ef\u5148\u8a66\u807d\uff0c\u5fc5\u8981\u6642\u5b89\u88dd\u7cfb\u7d71\u4e2d\u6587\u8a9e\u97f3\u3002":"Das Ger\u00e4t hat noch keine deutsche Stimme aufgelistet. Teste die Sprachausgabe oder installiere bei Bedarf eine deutsche Systemstimme.","\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u8a9e\u97f3\uff0c\u4ecd\u53ef\u986f\u793a\u6536\u5230\u7684\u6587\u5b57\u3002":"Dieser Browser unterst\u00fctzt keine Sprachausgabe. Empfangener Text kann weiterhin angezeigt werden."," \u4e0d\u4f7f\u7528\u9ea5\u514b\u98a8\u3002\u96f2\u7aef\u8a9e\u97f3\u53ef\u80fd\u7531\u88dd\u7f6e\u670d\u52d9\u8655\u7406\u6587\u5b57\uff1b\u672c\u6a5f\u8a9e\u97f3\u512a\u5148\u3002":" Es wird kein Mikrofon verwendet. Cloud-Stimmen k\u00f6nnen Text an den Sprachdienst des Ger\u00e4ts senden; lokale Stimmen werden bevorzugt.","\u8a0a\u606f\u8b58\u5225\u78bc\u91cd\u8907\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u3002":"Doppelte Nachrichten-ID. Bitte sende eine neue Nachricht.","\u8a0a\u606f\u5df2\u904e\u6642\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u3002":"Die Nachricht ist veraltet. Bitte sende sie erneut.","\u50b3\u9001\u592a\u5bc6\u96c6\uff0c\u8acb\u7a0d\u7b49\u4e00\u4e0b\u3002":"Nachrichten werden zu schnell gesendet. Bitte kurz warten.","\u8acb\u5148\u9078\u64c7\u6216\u8f38\u5165\u8a0a\u606f\u3002":"W\u00e4hle zuerst eine Nachricht aus oder gib eine ein.","\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u6216\u5c1a\u7121\u5176\u4ed6\u5718\u54e1\u3002":"Der Empf\u00e4nger hat den Raum verlassen oder es sind noch keine anderen Bandmitglieder da.","\u6240\u6709\u4eba":"Alle","\u7b2c\u4e00\u6b65\uff0c\u5171\u5169\u6b65":"Schritt 1 von 2","\u7b2c\u4e8c\u6b65\uff0c\u5171\u5169\u6b65":"Schritt 2 von 2","\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u3002":"Der Empf\u00e4nger hat den Raum verlassen. W\u00e4hle einen anderen.","\u623f\u9593\u5c1a\u672a\u9023\u7dda\u5b8c\u6210\uff0c\u8acb\u5f85\u9023\u7dda\u6062\u5fa9\u5f8c\u518d\u9078\u64c7\u77ed\u53e5\u3002":"Die Raumverbindung ist noch nicht bereit. Warte, bis sie wiederhergestellt ist, und w\u00e4hle dann eine Nachricht.","\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u50b3\u9001\u5c0d\u8c61\u3002":"Der Empf\u00e4nger hat den Raum verlassen. W\u00e4hle den Empf\u00e4nger erneut.","\u8acb\u5148\u9078\u64c7\u77ed\u53e5\uff0c\u6216\u5beb\u4e0b\u81ea\u8a02\u8a0a\u606f\u3002":"W\u00e4hle zuerst eine Kurzmitteilung oder schreibe eine eigene Nachricht.","\u4e0a\u4e00\u5247\u525b\u9001\u51fa\uff0c\u8acb\u7a0d\u5f8c\u518d\u9078\u4e00\u6b21\u3002":"Die vorherige Nachricht wurde gerade gesendet. Warte kurz und w\u00e4hle erneut.","\u50b3\u8a71\u672a\u80fd\u9001\u51fa\uff0c\u8acb\u78ba\u8a8d\u623f\u9593\u9023\u7dda\u5f8c\u518d\u8a66\u3002":"Die Nachricht konnte nicht gesendet werden. Pr\u00fcfe die Raumverbindung und versuche es erneut."," \u50b3\u7d66 ":" an ","\u8a9e\u97f3\u5c1a\u672a\u555f\u7528\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002":"Sprachausgabe ist nicht aktiviert. Du kannst \u201eErneut vorlesen\u201c w\u00e4hlen.","\u8a9e\u97f3\u97f3\u91cf\u70ba\u96f6\uff0c\u8acb\u5f9e live\u50b3\u8a71\u88e1\u7684\u8a9e\u97f3\u8a2d\u5b9a\u8abf\u6574\u3002":"Die Sprachlautst\u00e4rke ist null. Passe sie in den Spracheinstellungen von Live-Ansagen an.","\u81ea\u52d5\u64ad\u5831\u5df2\u95dc\u9589\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002":"Automatisches Vorlesen ist aus. Du kannst \u201eErneut vorlesen\u201c w\u00e4hlen.","\u8a9e\u97f3\u672a\u80fd\u64ad\u51fa\uff0c\u53ef\u518d\u8a66\u4e00\u6b21\u3002":"Die Sprachausgabe ist fehlgeschlagen. Du kannst es erneut versuchen.","\u6b64\u5247\u8a0a\u606f\u5df2\u904e\u6642\uff0c\u4e0d\u6703\u81ea\u52d5\u88dc\u64ad\u3002":"Diese Nachricht ist veraltet und wird nicht automatisch vorgelesen.","\u76ee\u524d\u64ad\u5831\u8f03\u591a\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002":"Mehrere Nachrichten stehen zur Wiedergabe an. Du kannst \u201eErneut vorlesen\u201c w\u00e4hlen.","\u6b64\u88dd\u7f6e\u7684\u8a9e\u97f3\u64ad\u5831\u5df2\u4e2d\u65b7\uff0c\u8acb\u5148\u78ba\u8a8d\u8072\u97f3\u8f38\u51fa\u3002":"Die Sprachausgabe wurde auf diesem Ger\u00e4t unterbrochen. Pr\u00fcfe zuerst die Audioausgabe.","\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u5c0d\u8c61\u3002":"Der Empf\u00e4nger hat den Raum verlassen. W\u00e4hle einen anderen.","\u5168\u90e8\u4eba":"Alle"," \u4f4d\u5718\u54e1":" Bandmitglieder","\u623f\u9593\u6210\u54e1":"Raummitglied","\u9700\u66f4\u65b0\u7248\u672c":"Update erforderlich","\u540c\u6a23\u7684\u6a02\u5668\u6703\u4ee5\u7de8\u865f\u5340\u5206\uff1b\u5168\u90e8\u4eba\u4e0d\u5305\u542b\u81ea\u5df1\u3002":"Gleiche Instrumente werden nummeriert. \u201eAlle\u201c schlie\u00dft dich selbst aus.","\u7b49\u5f85\u5176\u4ed6\u6a02\u5668\u52a0\u5165\u623f\u9593\u3002":"Warten auf weitere Instrumente im Raum.","\u5e38\u7528\u77ed\u53e5":"Gespeicherte Nachricht","\u81ea\u8a02\u8a0a\u606f":"Eigene Nachricht","\u5beb\u4e0b\u60f3\u8aaa\u7684\u8a71":"Schreibe, was du sagen m\u00f6chtest","\u79fb\u9664":"Entfernen","\u79fb\u9664\u5e38\u7528\u77ed\u53e5\uff1a":"Gespeicherte Nachricht entfernen: ","\u5148\u5beb\u4e0b\u60f3\u8aaa\u7684\u8a71":"Schreibe zuerst deine Nachricht","\uff0b \u65b0\u589e\u6a02\u5668":"+ Instrument hinzuf\u00fcgen","\u4f60\u7684\u6a02\u5668\uff1a":"Dein Instrument: ","\u8acb\u9078\u64c7\u672c\u6b21\u4f7f\u7528\u7684\u6a02\u5668\u6216\u89d2\u8272\u3002":"W\u00e4hle dein Instrument oder deine Rolle f\u00fcr diese Sitzung."," \u00b7 \u623f\u9593 ":" \u00b7 Raum ","\u623f\u9593\u6b63\u5728\u9023\u7dda\uff0f\u6821\u6642\uff0c\u5b8c\u6210\u5f8c\u5373\u53ef\u50b3\u8a71\u3002":"Die Raumverbindung wird hergestellt oder synchronisiert. Danach kannst du Nachrichten senden.","\u5148\u5f9e\u4e3b\u756b\u9762\u5efa\u7acb\u6216\u52a0\u5165\u623f\u9593\u3002":"Erstelle zuerst einen Raum oder tritt ihm auf der Hauptseite bei.","\u4e3b\u6301\u4eba\u5c1a\u672a\u555f\u7528\u50b3\u8a71\u529f\u80fd\uff0c\u8acb\u5168\u9ad4\u66f4\u65b0\u5f8c\u91cd\u65b0\u5efa\u7acb\u623f\u9593\u3002":"Der Host unterst\u00fctzt noch keine Nachrichten. Alle sollten aktualisieren und den Raum neu erstellen.","\u8acb\u5148\u5efa\u7acb\u6216\u52a0\u5165\u623f\u9593\uff0c\u624d\u80fd\u4f7f\u7528 live\u50b3\u8a71\u3002":"Erstelle einen Raum oder tritt ihm bei, um Live-Ansagen zu verwenden.","live\u50b3\u8a71\u672a\u80fd\u9001\u51fa\uff0c\u8acb\u78ba\u8a8d\u9023\u7dda\u5f8c\u518d\u8a66\u3002":"Die Live-Ansage konnte nicht gesendet werden. Pr\u00fcfe die Verbindung und versuche es erneut.","\u8acb\u5148\u9078\u64c7\u4f60\u7684\u6a02\u5668\u6216\u89d2\u8272\u3002":"W\u00e4hle zuerst dein Instrument oder deine Rolle.","\u65b0\u589e\u6a02\u5668":"Instrument hinzuf\u00fcgen","\u8acb\u8f38\u5165 1\u201316 \u5b57\u7684\u6a02\u5668\u6216\u89d2\u8272\u540d\u7a31\u3002":"Gib einen Instrumenten- oder Rollennamen mit 1\u201316 Zeichen ein.","\u6700\u591a\u65b0\u589e 12 \u500b\u6a02\u5668\u3002":"Du kannst bis zu 12 Instrumente hinzuf\u00fcgen.","\u5269\u9918 ${lives} \u6b21\u6a5f\u6703":"Noch ${lives} Versuche","\u7b2c ${level} \u95dc":"Stufe ${level}","\u807d\u7bc0\u594f\uff0c\u8a18\u4e0b\u4f86":"Zuh\u00f6ren und merken","\u63db\u4f60\u4e86\uff01":"Du bist dran!","\u6e96\u78ba\u7387: ${accuracy}%":"Genauigkeit: ${accuracy}%","${accuracy}% \u5931\u6557":"${accuracy}% | Nicht bestanden","\u9700\u9054 95%":"95% erforderlich","${accuracy}% \u5b8c\u7f8e!":"${accuracy}% | Perfekt!","\u901a\u904e\u672c\u95dc":"Stufe geschafft","\u6311\u6230\u6210\u529f":"Challenge geschafft","\u672c\u6b21\u6311\u6230\u7d50\u675f":"Spiel beendet","\u518d\u73a9\u4e00\u6b21":"Erneut spielen","\u700f\u89bd\u5668\u5c1a\u672a\u555f\u7528\u8072\u97f3\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u7e7c\u7e8c\u3002":"Der Ton ist noch nicht aktiviert. W\u00e4hle erneut \u201eFortsetzen\u201c.","TEMPOLIVE \u9023\u7dda\u7bc0\u62cd\u5668":"TEMPOLIVE Vernetztes Metronom","\u8df3\u81f3\u7bc0\u62cd\u63a7\u5236":"Zur Metronomsteuerung springen","\u9023\u7dda\u7bc0\u62cd\u5668":"Vernetztes Metronom","\u6234\u4e0a\u8033\u6a5f\uff0c\u5c08\u6ce8\u6bcf\u4e00\u62cd":"Kopfh\u00f6rer auf. Konzentriere dich auf jeden Schlag.","\u76ee\u524d\u96e2\u7dda\uff1a\u55ae\u4eba\u7bc0\u62cd\u5668\u8207\u6b4c\u55ae\u4ecd\u53ef\u4f7f\u7528\uff0c\u8de8\u88dd\u7f6e\u623f\u9593\u9700\u8981\u7db2\u8def\u3002":"Du bist offline. Solo-Metronom und Setlist funktionieren weiterhin; R\u00e4ume ben\u00f6tigen Internet.","\u76ee\u524d\u6b4c\u66f2":"Aktueller Song","\u6bcf\u5206\u9418\u62cd\u6578":"Schl\u00e4ge pro Minute","\u62d6\u66f3\u8abf\u6574\u901f\u5ea6":"Tempo mit dem Regler einstellen","\u4e0b\u4e00\u9996":"N\u00e4chster Song","\u9ede\u6309\u6e2c\u901f":"Tap-Tempo","\u672c\u6a5f\u97f3\u91cf":"Lokale Lautst\u00e4rke","\u62cd\u865f":"Taktart","\u97f3\u7b26\u7d30\u5206":"Unterteilung","\u95dc\u9589":"Aus","1 \u5c0f\u7bc0":"1 Takt","2 \u5c0f\u7bc0":"2 Takte","\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a":"Aktuelle Einstellungen speichern","\u6b4c\u66f2\u6e05\u55ae":"Setlist","\u4e8b\u5148\u8a2d\u597d\u901f\u5ea6\uff0c\u73fe\u5834\u4e00\u9375\u5207\u63db\u3002":"Tempi vorab festlegen. Songs mit einem Tipp wechseln.","\u524d\u4e00\u9996":"Vorheriger Song","\u532f\u51fa\u6b4c\u55ae":"Setlist exportieren","\u532f\u5165\u6b4c\u55ae":"Setlist importieren","\u50c5\u5132\u5b58\u65bc\u672c\u6a5f":"Nur lokal gespeichert","\u4e0d\u540c\u88dd\u7f6e\uff0c\u540c\u4e00\u7bc0\u594f\u3002":"Mehrere Ger\u00e4te. Ein Rhythmus.","\u5efa\u7acb\u5718\u968a\u623f\u9593\uff0c\u7531\u4e00\u4eba\u63a7\u5236\u901f\u5ea6\u8207\u64ad\u653e\uff0c\u5927\u5bb6\u5404\u81ea\u7528\u8033\u6a5f\u8ddf\u4e0a\u3002":"Erstellt einen Bandraum. Ein Host steuert Tempo und Wiedergabe; alle folgen mit den eigenen Kopfh\u00f6rern.","\u4ee3\u78bc\u52a0\u5165":"Mit Code beitreten","\u623f\u9593\u4ee3\u78bc":"Raumcode","1 \u4eba\u5728\u623f\u9593":"1 Person im Raum","\u91cd\u65b0\u6821\u6642":"Uhren neu synchronisieren","\u5f80\u8fd4\u5ef6\u9072":"Roundtrip-Latenz","\u6821\u6642\u72c0\u614b":"Uhrensynchronisation","\u6821\u6b63\u4e2d":"Synchronisieren","\u77e5\u9053\u4ee3\u78bc\u7684\u4eba\u90fd\u53ef\u52a0\u5165\u3002\u4e3b\u6301\u4eba\u96e2\u958b\u5f8c\u623f\u9593\u7d50\u675f\u3002":"Wer den Code kennt, kann beitreten. Der Raum endet, wenn der Host ihn verl\u00e4sst.","\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u5132\u5b58\u65bc\u6b64\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u8de8\u88dd\u7f6e\u540c\u6b65\u3002":"Setlist und pers\u00f6nliche Einstellungen bleiben in diesem Browser. Sie werden nicht automatisch zwischen Ger\u00e4ten synchronisiert.","\u7a7a\u767d\u9375":"Leertaste","\u64ad\u653e / \u505c\u6b62":"Start / Stopp","\u6e2c\u901f":"Tap-Tempo","live\u50b3\u8a71":"Live-Ansagen","\u9078\u5c0d\u8c61 \u2192 \u9ede\u77ed\u53e5 \u2192 \u81ea\u52d5\u9001\u51fa":"Empf\u00e4nger w\u00e4hlen \u2192 Nachricht antippen \u2192 automatisch senden","\u8981\u50b3\u7d66\u8ab0\uff1f":"An wen geht die Nachricht?","\u9078\u64c7\u623f\u9593\u88e1\u7684\u6a02\u5668\u3002":"W\u00e4hle ein Instrument im Raum.","\u50b3\u7d66":"An","\u63db\u5c0d\u8c61":"Empf\u00e4nger wechseln","\u60f3\u8aaa\u4ec0\u9ebc\uff1f":"Was m\u00f6chtest du sagen?","\u9ede\u9078\u4e00\u53e5\uff0c\u5c31\u6703\u50b3\u9001\u4e26\u8fd4\u56de\u4e3b\u756b\u9762\u3002":"Tippe auf eine Nachricht, um sie zu senden und zur Hauptansicht zur\u00fcckzukehren.","\u6700\u591a 40 \u5b57":"Bis zu 40 Zeichen","\u5132\u5b58\u70ba\u672c\u6a5f\u5e38\u7528\u77ed\u53e5":"Als Kurzmitteilung auf diesem Ger\u00e4t speichern","\u9ede\u9019\u53e5\u5c31\u9001\u51fa\uff0c\u6216\u6309 Enter":"Zum Senden antippen oder Enter dr\u00fccken","\u8a9e\u97f3\u8207\u5e38\u7528\u77ed\u53e5":"Stimme und Kurzmitteilungen","\u8a9e\u97f3\u63d0\u9192":"Sprachhinweise","\u5c1a\u672a\u8a66\u807d":"Noch nicht getestet","\u555f\u7528\uff0f\u8a66\u807d":"Aktivieren / testen","\u6536\u5230\u8a0a\u606f\u6642\u81ea\u52d5\u64ad\u5831":"Eingehende Nachrichten automatisch vorlesen","\u8a9e\u97f3\u97f3\u91cf":"Sprachlautst\u00e4rke","\u64ad\u5831\u8072\u97f3":"Stimme","\u81ea\u8a02\u6a02\u5668\u3001\u5e38\u7528\u77ed\u53e5\u8207\u8a9e\u97f3\u8a2d\u5b9a\u50c5\u5b58\u65bc\u6b64\u700f\u89bd\u5668\u3002\u50b3\u8a71\u4e0d\u9700\u56de\u8986\u6536\u5230\uff1b\u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\u4e0d\u9069\u5408\u654f\u611f\u8cc7\u6599\u3002":"Eigene Instrumente, Kurzmitteilungen und Spracheinstellungen bleiben in diesem Browser. Keine Empfangsbest\u00e4tigung n\u00f6tig. Sende keine sensiblen Informationen \u00fcber das \u00f6ffentliche Test-Relay.","\u50b3\u8a71":"Ansagen","\u518d\u64ad\u4e00\u6b21":"Erneut vorlesen","\u8a2d\u5b9a":"Einstellungen","\u6df1\u8272\u6a21\u5f0f":"Dunkler Modus","\u87a2\u5e55\u9583\u720d":"Optischer Taktimpuls","\u9810\u8a2d\u95dc\u9589\u3002\u50c5\u5728\u7bc0\u62cd\u5668\u5340\u584a\u986f\u793a\u62cd\u9ede\u87a2\u5149\uff1a\u6dfa\u8272\u6a21\u5f0f\u70ba\u9ed1\u8272\uff0c\u6df1\u8272\u6a21\u5f0f\u70ba\u767d\u8272\uff0c\u6bcf\u6b21\u767c\u5149\u7d04 0.32 \u79d2\uff0c\u4e26\u9010\u6f38\u6de1\u51fa\uff0c\u4e0d\u9583\u52d5\u6574\u500b\u9801\u9762\u3002\u9ad8\u901f\u6642\u81ea\u52d5\u6e1b\u5c11\u9583\u720d\u6b21\u6578\uff1b\u5c0d\u9583\u5149\u654f\u611f\u8005\u8acb\u4fdd\u6301\u95dc\u9589\u3002":"Standardm\u00e4\u00dfig aus. Nur der Metronombereich leuchtet auf: schwarz im hellen und wei\u00df im dunklen Modus. Jeder Impuls dauert etwa 0,32 Sekunden und klingt optisch ab; nicht die gesamte Seite blinkt. Bei hohem Tempo werden weniger Impulse gezeigt. Bei Lichtempfindlichkeit bitte ausgeschaltet lassen.","\u97f3\u8a0a\u8207\u85cd\u7259":"Audio und Bluetooth","\u99ac\u6797\u5df4 \u00b7 \u52a0\u5f37":"Marimba \u00b7 Verst\u00e4rkt","\u7bc0\u62cd\u97f3\u8272":"Metronomklang","\u8f38\u51fa\u5f37\u5ea6":"Ausgangspegel","\u4f7f\u7528\u8033\u6a5f\u8acb\u5148\u964d\u4f4e\u97f3\u91cf\uff0c\u518d\u9010\u6b65\u8abf\u6574\u3002\u624b\u6a5f\u5916\u653e\u7684\u5be6\u969b\u97f3\u91cf\u4ecd\u53d7\u5587\u53ed\u529f\u7387\u9650\u5236\u3002":"Beginne mit geringer Kopfh\u00f6rerlautst\u00e4rke und erh\u00f6he sie schrittweise. Die Lautst\u00e4rke des Smartphone-Lautsprechers bleibt durch die Hardware begrenzt.","\u8072\u97f3\u8f38\u51fa\u88dd\u7f6e":"Audioausgabeger\u00e4t","\u9078\u64c7\u8f38\u51fa":"Ausgabe w\u00e4hlen","\u8a66\u807d\u97f3\u8272":"Klang testen","\u672a\u9023\u63a5\u8033\u6a5f\u6642\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u624b\u6a5f\u5587\u53ed\uff1b\u8acb\u8abf\u9ad8\u7cfb\u7d71\u7684\u5a92\u9ad4\u97f3\u91cf\u3002\u4f7f\u7528\u85cd\u7259\u6642\uff0c\u8acb\u5148\u5728\u7cfb\u7d71\u914d\u5c0d\u4e26\u9078\u64c7\u8f38\u51fa\u3002":"Ohne Kopfh\u00f6rer kannst du den Smartphone-Lautsprecher verwenden. Erh\u00f6he die Medienlautst\u00e4rke. Bluetooth-Ger\u00e4te zuerst im System koppeln und als Ausgabe w\u00e4hlen.","\u672c\u6a5f\u6642\u9593\u6821\u6b63":"Lokaler Zeitversatz","\u63d0\u524d 300 ms":"300 ms fr\u00fcher","\u5ef6\u5f8c 300 ms":"300 ms sp\u00e4ter","\u8072\u97f3\u6bd4\u5176\u4ed6\u4eba\u6162\uff0c\u5f80\u8ca0\u503c\u8abf\u6574\uff1b\u592a\u5feb\u5247\u5f80\u6b63\u503c\u8abf\u6574\u3002\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u3002":"Klingt dein Klick sp\u00e4ter als bei den anderen, w\u00e4hle einen negativen Wert; klingt er fr\u00fcher, einen positiven. Nur dieses Ger\u00e4t ist betroffen.","\u4f7f\u7528\u700f\u89bd\u5668\u63d0\u4f9b\u7684\u8f38\u51fa\u5ef6\u9072\u4f30\u8a08\uff08\u4e0d\u7b49\u65bc\u5be6\u969b\u91cf\u6e2c\uff09":"Ausgabelatenz-Sch\u00e4tzung des Browsers verwenden (keine tats\u00e4chliche Messung)","\u64ad\u653e\u6642\u4fdd\u6301\u87a2\u5e55\u958b\u555f\uff08\u88dd\u7f6e\u652f\u63f4\u6642\uff09":"Bildschirm bei Wiedergabe eingeschaltet lassen (falls unterst\u00fctzt)","\u85cd\u7259\u4e0d\u662f\u623f\u9593\u9023\u7dda\u65b9\u5f0f\u3002\u5404\u53f0\u88dd\u7f6e\u9700\u8981\u7db2\u8def\uff0c\u4e26\u5404\u81ea\u9023\u63a5\u8033\u6a5f\u3002\u85cd\u7259\u5ef6\u9072\u4e0d\u4e00\u4e14\u53ef\u80fd\u8b8a\u52d5\uff0c\u6b63\u5f0f\u6f14\u51fa\u8acb\u512a\u5148\u4f7f\u7528\u6709\u7dda\u76e3\u807d\uff0c\u4e26\u5148\u5be6\u6e2c\u3002":"Bluetooth verbindet nicht den Raum. Jedes Ger\u00e4t ben\u00f6tigt Internet und einen eigenen Kopfh\u00f6reranschluss. Bluetooth-Latenz variiert und kann sich \u00e4ndern. Bevorzuge bei Auftritten kabelgebundenes Monitoring und teste es vorher.","\u5132\u5b58\u901f\u5ea6\u8207\u62cd\u865f\uff0c\u4e0b\u6b21\u9ede\u6b4c\u540d\u5373\u53ef\u5207\u63db\u3002":"Speichere Tempo und Taktart. Tippe beim n\u00e4chsten Mal auf den Songnamen, um sie abzurufen.","\u6b4c\u66f2\u540d\u7a31":"Songname","\u901f\u5ea6 BPM":"Tempo (BPM)","\u56db\u5206\u97f3\u7b26":"Viertelnote","\u516b\u5206\u97f3\u7b26":"Achtelnote","\u5341\u516d\u5206\u97f3\u7b26":"Sechzehntelnote","\u6b4c\u55ae\u9806\u5e8f":"Reihenfolge der Setlist","\u2191 \u4e0a\u79fb":"Nach oben","\u2193 \u4e0b\u79fb":"Nach unten","\u522a\u9664":"L\u00f6schen","\u53d6\u6d88":"Abbrechen","\u5132\u5b58\u6b4c\u66f2":"Song speichern","\u4f60\u7684\u6a02\u5668\uff0f\u89d2\u8272":"Dein Instrument / deine Rolle","\u65b0\u589e\u6a02\u5668\u6216\u89d2\u8272":"Instrument oder Rolle hinzuf\u00fcgen","\u65b0\u589e\u4e26\u9078\u64c7":"Hinzuf\u00fcgen und ausw\u00e4hlen","\u6536\u5230\u5718\u968a\u8a0a\u606f\u6642\u81ea\u52d5\u64ad\u5831":"Eingehende Bandnachrichten automatisch vorlesen","\u8a66\u807d\u8a9e\u97f3":"Stimme testen","\u8acb\u5148\u8a66\u807d\uff0c\u78ba\u8a8d\u5587\u53ed\u6216\u8033\u6a5f\u6709\u8072\u97f3\u3002\u8a9e\u97f3\u8207\u7bc0\u62cd\u5668\u5206\u958b\u63a7\u5236\uff0c\u4e0d\u4f7f\u7528\u9ea5\u514b\u98a8\u3002":"Teste zuerst, ob Lautsprecher oder Kopfh\u00f6rer tats\u00e4chlich Ton ausgeben. Sprachausgabe und Metronom werden getrennt gesteuert. Es wird kein Mikrofon verwendet.","4 \u4f4d\u6578\u5b57\u623f\u9593\u4ee3\u78bc":"Vierstelliger Raumcode","\u4f7f\u7528 shiftr.io \u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\uff08WSS 443\uff09\u3002\u50b3\u9001\u6a02\u5668\u540d\u7a31\u3001\u6b4c\u540d\u3001\u7bc0\u594f\u8207\u50b3\u8a71\u6587\u5b57\uff0c\u4e0d\u9304\u97f3\u3001\u4e0d\u50b3\u9001\u9ea5\u514b\u98a8\u8072\u97f3\u3002\u6307\u5b9a\u50b3\u8a71\u7531\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5230\u7aef\u52a0\u5bc6\uff1b\u8acb\u52ff\u8f38\u5165\u654f\u611f\u8cc7\u6599\u3002":"Verwendet das \u00f6ffentliche shiftr.io-Test-Relay (WSS-Port 443). Instrumenten- und Songnamen, Rhythmuseinstellungen sowie Nachrichtentext werden \u00fcbertragen. Es wird kein Audio aufgenommen und kein Mikrofonsignal gesendet. Auch gezielte Nachrichten werden vom Host weitergeleitet und sind nicht Ende-zu-Ende-verschl\u00fcsselt. Gib keine sensiblen Informationen ein.","\u4e3b\u6301\u4eba\u8207\u5718\u54e1\u90fd\u8acb\u4f7f\u7528\u6b64\u65b0\u7248\u3002\u516c\u958b\u4e2d\u7e7c\u50c5\u4f9b\u8a66\u7528\uff0c\u4e0d\u4fdd\u8b49\u670d\u52d9\u53ef\u7528\u7387\uff1b\u6b63\u5f0f\u6f14\u51fa\u61c9\u6539\u7528\u5c08\u7528\u670d\u52d9\u4e26\u5148\u5be6\u6e2c\u3002":"Host und alle Teilnehmer sollten diese Version verwenden. Das \u00f6ffentliche Relay dient zum Testen, ohne Verf\u00fcgbarkeitsgarantie. Nutzt f\u00fcr Auftritte einen eigenen Dienst und testet ihn vorher.","\u958b\u59cb\u4f7f\u7528\u7bc0\u62cd\u5668":"Erste Schritte","\u5148\u9078\u901f\u5ea6\uff0c\u518d\u958b\u59cb":"Tempo w\u00e4hlen, dann starten","\u53ef\u76f4\u63a5\u8f38\u5165 40\u2013300 BPM\uff0c\u62d6\u66f3\u6ed1\u687f\uff0c\u6216\u4f7f\u7528\u52a0\u6e1b\u9375\u3002\u9023\u7e8c\u9ede\u6309\u300c\u9ede\u6309\u6e2c\u901f\u300d\u53ef\u5e36\u5165\u4f60\u7684\u901f\u5ea6\u3002\u62cd\u9ede\u53ef\u5207\u63db\u91cd\u97f3\u3001\u4e00\u822c\u8207\u975c\u97f3\u3002":"Gib 40\u2013300 BPM ein, bewege den Regler oder verwende Plus und Minus. Tippe wiederholt auf Tap-Tempo, um dein Tempo zu \u00fcbernehmen. Jede Z\u00e4hlzeit kann betont, unbetont oder stumm sein.","\u97f3\u7b26\u8207\u62cd\u865f":"Notenwerte und Taktarten","BPM \u56fa\u5b9a\u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\u3002\u56db\u5206\u3001\u516b\u5206\u3001\u5341\u516d\u5206\u97f3\u7b26\u5206\u5225\u5728\u6bcf\u500b\u56db\u5206\u97f3\u7b26\u6642\u9593\u5167\u767c\u8072 1\u30012\u30014 \u6b21\u3002\u62cd\u9ede\u4f9d\u62cd\u865f\u7684\u5206\u6bcd\u8a08\u6578\uff1b6/8 \u7684\u516b\u5206\u97f3\u7b26\u70ba\u534a\u500b\u56db\u5206\u97f3\u7b26\u3002\u6a02\u8b5c\u6a19\u793a\u300c\u9644\u9ede\u56db\u5206\u97f3\u7b26 = 70\u300d\u6642\uff0c\u6b64\u8655\u8a2d\u70ba 105 BPM\u3002":"BPM bezieht sich immer auf Viertelnoten. Viertel, Achtel und Sechzehntel erzeugen innerhalb einer Viertelnote 1, 2 bzw. 4 Klicks. Die Z\u00e4hlmarkierungen folgen dem Nenner der Taktart: Im 6/8-Takt ist eine Achtelnote eine halbe Viertelnote lang. Steht in den Noten \u201epunktierte Viertelnote = 70\u201c, stelle hier 105 BPM ein.","\u6b4c\u55ae\u8207\u9810\u5099\u62cd":"Setlist und Einz\u00e4hlen","\u6b4c\u55ae\u5167\u5efa\u4e09\u9996\u7bc4\u4f8b\uff0c\u4e0d\u662f\u771f\u5be6\u6b4c\u66f2\u7684\u5efa\u8b70\u901f\u5ea6\u3002\u53ef\u65b0\u589e\u3001\u7de8\u8f2f\u3001\u79fb\u52d5\u9806\u5e8f\u3001\u522a\u9664\u8207\u532f\u51fa\u5099\u4efd\u3002\u64ad\u653e\u4e2d\u8abf\u6574\u901f\u5ea6\u3001\u9ede\u6309\u6e2c\u901f\u6216\u8b8a\u66f4\u62cd\u9ede\u91cd\u97f3\uff0c\u90fd\u6703\u7acb\u5373\u5957\u7528\uff0c\u4e0d\u7b49\u5c0f\u7bc0\u4ea4\u754c\uff1b\u5df2\u767c\u51fa\u7684\u8072\u97f3\u4e0d\u6703\u91cd\u64ad\u3002\u5207\u63db\u6b4c\u66f2\u4ecd\u5728\u9810\u544a\u7684\u5c0f\u7bc0\u4ea4\u754c\u5957\u7528\u3002\u9810\u5099\u62cd\u53ea\u5728\u5f9e\u505c\u6b62\u72c0\u614b\u958b\u59cb\u6642\u751f\u6548\u3002":"Die Setlist enth\u00e4lt drei Beispiele, keine Tempoempfehlungen f\u00fcr echte Songs. Du kannst Songs hinzuf\u00fcgen, bearbeiten, sortieren, l\u00f6schen und als Sicherung exportieren. Tempo, Tap-Tempo und Betonungen \u00e4ndern sich bei laufender Wiedergabe sofort, ohne auf den n\u00e4chsten Takt zu warten. Bereits ausgegebene Klicks werden nicht wiederholt. Songwechsel erfolgen weiterhin am geplanten Taktanfang. Einz\u00e4hlen gilt nur beim Start aus dem Stoppzustand.","\u8b93\u5718\u968a\u52a0\u5165":"Deine Band einladen","\u4e3b\u6301\u4eba\u5efa\u7acb\u623f\u9593\u5f8c\uff0c\u5c07 4 \u4f4d\u6578\u5b57\u4ee3\u78bc\u4ea4\u7d66\u5718\u54e1\u3002\u5168\u54e1\u90fd\u9700\u958b\u555f\u9019\u500b\u65b0\u7248 HTML\uff0c\u518d\u9ede\u9078\u52a0\u5165\u3002\u623f\u9593\u4f7f\u7528\u516c\u958b WSS \u4e2d\u7e7c\uff0c\u4e0d\u8981\u4f7f\u7528\u771f\u5be6\u59d3\u540d\u6216\u654f\u611f\u6b4c\u540d\u3002\u6821\u6642\u5f8c\u5728\u5404\u672c\u6a5f\u7522\u751f\u7bc0\u62cd\uff0c\u4e0d\u662f\u4e32\u6d41\u4e3b\u6301\u4eba\u7684\u8072\u97f3\u3002\u53c3\u8207\u8005\u53ef\u8abf\u6574\u672c\u6a5f\u97f3\u91cf\u3001\u97f3\u8272\u8207\u5ef6\u9072\uff0c\u4e5f\u53ef\u4f7f\u7528\u5718\u968a\u50b3\u8a71\uff0c\u4f46\u4e0d\u80fd\u66f4\u52d5\u4e3b\u6301\u4eba\u7684\u7bc0\u594f\u3002\u4ee3\u78bc\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5b89\u5168\u5bc6\u78bc\u3002":"Nach dem Erstellen teilt der Host den vierstelligen Code mit. Alle \u00f6ffnen diese HTML-Version und treten bei. Die R\u00e4ume nutzen ein \u00f6ffentliches WSS-Relay; vermeide echte Namen und vertrauliche Songtitel. Nach der Uhrensynchronisation erzeugt jedes Ger\u00e4t seinen eigenen Klick, statt den Ton des Hosts zu streamen. Teilnehmer k\u00f6nnen lokale Lautst\u00e4rke, Klang und Zeitversatz einstellen und Nachrichten senden, aber nicht den Rhythmus des Hosts \u00e4ndern. Der Code ist eine Einladung, kein sicheres Passwort.","\u91cd\u8981\uff1a\u7db2\u8def\u6821\u6642\u4e0d\u7b49\u65bc\u8033\u6a5f\u8072\u97f3\u5b8c\u5168\u540c\u6b65\u3002\u85cd\u7259\u3001\u97f3\u6548\u5361\u3001\u7cfb\u7d71\u6392\u7a0b\u90fd\u6703\u5f71\u97ff\u5ef6\u9072\u3002\u672c\u7248\u9069\u5408\u5148\u8a66\u7528\u8207\u6392\u7df4\uff1b\u4e0d\u4fdd\u8b49\u6f14\u51fa\u7b49\u7d1a\u7684\u96f6\u5ef6\u9072\u6216\u4e0d\u4e2d\u65b7\u3002\u4e3b\u6301\u4eba\u96e2\u7dda\u6642\uff0c\u53c3\u8207\u8005\u6703\u505c\u6b62\u64ad\u653e\u3002":"Wichtig: Synchronisierte Uhren garantieren keinen exakt gleichzeitigen Kopfh\u00f6rerton. Bluetooth, Audio-Interfaces und Systemabl\u00e4ufe beeinflussen die Latenz. Diese Version dient zum Ausprobieren und Proben; latenzfreie oder unterbrechungsfreie Auftritte sind nicht garantiert. Geht der Host offline, stoppt die Wiedergabe bei den Teilnehmern.","\u8cc7\u6599\u8207\u96b1\u79c1":"Daten und Datenschutz","\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u4f7f\u7528 localStorage\uff0c\u50c5\u4fdd\u7559\u65bc\u76ee\u524d\u700f\u89bd\u5668\uff0c\u4e0d\u9069\u5408\u5b58\u653e\u654f\u611f\u8cc7\u8a0a\u3002\u6e05\u9664\u700f\u89bd\u8cc7\u6599\u3001\u7121\u75d5\u6a21\u5f0f\u6216\u66f4\u63db\u6a94\u6848\u4f4d\u7f6e\u53ef\u80fd\u7121\u6cd5\u4fdd\u7559\u8cc7\u6599\u3002\u623f\u9593\u5206\u4eab\u6a02\u5668\u540d\u7a31\u3001\u76ee\u524d\u6b4c\u540d\u8207\u7bc0\u594f\uff0c\u4e0d\u6703\u540c\u6b65\u6574\u4efd\u6b4c\u55ae\u3002\u5718\u968a\u50b3\u8a71\u6587\u5b57\u6703\u7d93\u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\u8207\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5c0d\u7aef\u52a0\u5bc6\uff1b\u8acb\u52ff\u50b3\u9001\u654f\u611f\u8cc7\u6599\u3002":"Setlist und Einstellungen werden per localStorage nur in diesem Browser gespeichert. Speichere keine sensiblen Informationen. Das L\u00f6schen von Browserdaten, privates Surfen oder ein anderer Dateipfad k\u00f6nnen gespeicherte Daten unzug\u00e4nglich machen. R\u00e4ume teilen Instrumentennamen, den aktuellen Song und Rhythmus, nicht die gesamte Setlist. Nachrichtentext wird \u00fcber das \u00f6ffentliche Test-Relay und den Host weitergeleitet, ohne Ende-zu-Ende-Verschl\u00fcsselung. Sende keine vertraulichen Informationen.","\u5feb\u901f\u9375":"Tastenk\u00fcrzel","\u7a7a\u767d\u9375\uff1a\u64ad\u653e / \u505c\u6b62\u3002T\uff1a\u9ede\u6309\u6e2c\u901f\u3002N\uff1a\u4e0b\u4e00\u9996\u3002\u4e0a\u4e0b\u65b9\u5411\u9375\uff1a\u901f\u5ea6 \u00b11 BPM\uff08\u642d\u914d Shift \u70ba \u00b15\uff09\u3002F\uff1a\u5c08\u6ce8\u6a21\u5f0f\u3002\u8f38\u5165\u6587\u5b57\u6642\u4e0d\u6703\u89f8\u767c\u3002":"Leertaste: Start / Stopp. T: Tap-Tempo. N: n\u00e4chster Song. Pfeil hoch / runter: Tempo \u00b11 BPM (mit Shift \u00b15). F: Fokusmodus. Beim Tippen in Eingabefelder sind diese K\u00fcrzel inaktiv.","\u53d6\u5f97\u97f3\u8a0a\u88dd\u7f6e\u6e05\u55ae":"Audioger\u00e4te auflisten","\u6b64\u700f\u89bd\u5668\u53ef\u80fd\u8981\u6c42\u9ea5\u514b\u98a8\u6b0a\u9650\uff0c\u624d\u6703\u5217\u51fa\u8033\u6a5f\u8207\u5587\u53ed\u540d\u7a31\u3002\u7db2\u9801\u53ea\u6703\u77ed\u66ab\u53d6\u5f97\u6b0a\u9650\u5f8c\u7acb\u5373\u95dc\u9589\u9ea5\u514b\u98a8\uff0c\u4e0d\u9304\u97f3\u3001\u4e0d\u50b3\u9001\u8072\u97f3\u3002\u4e5f\u53ef\u53d6\u6d88\uff0c\u76f4\u63a5\u5728\u7cfb\u7d71\u8a2d\u5b9a\u4e2d\u5207\u63db\u8f38\u51fa\u3002":"Dieser Browser ben\u00f6tigt m\u00f6glicherweise Mikrofonzugriff, um Kopfh\u00f6rer- und Lautsprechernamen aufzulisten. Die Seite fordert den Zugriff kurz an und schlie\u00dft das Mikrofon sofort wieder. Sie zeichnet keinen Ton auf und \u00fcbertr\u00e4gt ihn nicht. Du kannst abbrechen und die Ausgabe stattdessen im System w\u00e4hlen.","\u7e7c\u7e8c\u9078\u64c7":"Weiter","\u904a\u6232\u8207\u7bc0\u62cd\u8072\u81ea\u52d5\u5207\u63db":"Automatischer Wechsel zwischen Spielton und Metronom","\u8fd4\u56de\u7bc0\u62cd\u5668":"Zur\u00fcck zum Metronom","\u904a\u6232\u97f3\u91cf":"Spiel-Lautst\u00e4rke","\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668":"Metronomlautst\u00e4rke unver\u00e4ndert","\u904a\u73a9\u6642\u66ab\u6642\u95dc\u9589\u672c\u6a5f\u7bc0\u62cd\u8072\uff0c\u7d50\u675f\u6216\u8fd4\u56de\u5f8c\u6062\u5fa9\u539f\u5148\u64ad\u653e\u72c0\u614b\u3002\u4e0d\u5f71\u97ff\u623f\u9593\u5176\u4ed6\u4eba\u3002":"W\u00e4hrend des Spiels ist der lokale Klick vor\u00fcbergehend stumm. Beim Spielende oder bei der R\u00fcckkehr wird der vorherige Wiedergabestatus wiederhergestellt. Andere im Raum sind nicht betroffen.","\u6e96\u5099\u904a\u6232\u4e2d\u2026":"Spiel wird vorbereitet ...","\u4e3b\u8981\u529f\u80fd":"Hauptfunktionen","\u5207\u63db\u5c08\u6ce8\u6a21\u5f0f":"Fokusmodus umschalten","\u7591\u554f\u6559\u5b78":"Hilfe","\u7bc0\u594f\u5c0f\u904a\u6232\uff08NEW\uff09":"Rhythmusspiel (NEW)","\u7bc0\u594f\u5c0f\u904a\u6232\uff08\u65b0\u529f\u80fd\uff09":"Rhythmusspiel (neue Funktion)","\u7bc0\u62cd\u63a7\u5236":"Metronomsteuerung","\u6e1b\u5c11\u4e00 BPM":"Tempo um 1 BPM verringern","\u901f\u5ea6 BPM\uff0c40 \u81f3 300":"Tempo in BPM, 40 bis 300","\u589e\u52a0\u4e00 BPM":"Tempo um 1 BPM erh\u00f6hen","\u6bcf\u62cd\u91cd\u97f3\u8a2d\u5b9a":"Betonungen der Z\u00e4hlzeiten","\u5207\u63db\u4e0b\u4e00\u9996":"Zum n\u00e4chsten Song","\u958b\u59cb\u7bc0\u62cd\u5668":"Metronom starten","\u9023\u7e8c\u9ede\u6309\u81f3\u5c11\u5169\u6b21\uff0c\u6216\u6309 T \u9375":"Mindestens zweimal tippen oder T dr\u00fccken","\u6b4c\u66f2\u5feb\u901f\u5207\u63db":"Songs schnell wechseln","\u5207\u63db\u524d\u4e00\u9996":"Zum vorherigen Song","\u8907\u88fd\u623f\u9593\u4ee3\u78bc":"Raumcode kopieren","live\u50b3\u8a71\uff0c\u65b0\u529f\u80fd":"Live-Ansagen, neue Funktion","\u95dc\u9589 live\u50b3\u8a71":"Live-Ansagen schlie\u00dfen","\u4f8b\u5982\uff1a\u4e0b\u4e00\u6bb5\u4e00\u8d77\u9032\u526f\u6b4c":"Zum Beispiel: Im n\u00e4chsten Abschnitt gemeinsam in den Refrain","live\u50b3\u8a71\uff08\u65b0\u529f\u80fd\uff09":"Live-Ansagen (neue Funktion)","\u6253\u958b live\u50b3\u8a71\uff0c\u65b0\u529f\u80fd":"Live-Ansagen \u00f6ffnen, neue Funktion","\u6536\u8d77\u8a0a\u606f":"Nachricht schlie\u00dfen","\u95dc\u9589\u8a2d\u5b9a":"Einstellungen schlie\u00dfen","\u6642\u9593\u6821\u6b63\u6beb\u79d2":"Zeitversatz in Millisekunden","\u4f8b\u5982\uff1a\u672c\u9031\u958b\u5834\u8a69\u6b4c":"Zum Beispiel: Auftaktlied dieser Woche","\u4f8b\u5982\uff1a\u85a9\u514b\u65af\u98a8":"Zum Beispiel: Saxofon","\u6536\u8d77\u904a\u6232\u4e26\u8fd4\u56de\u7bc0\u62cd\u5668":"Spiel schlie\u00dfen und zum Metronom zur\u00fcckkehren","\u7bc0\u594f\u8a18\u61b6\u6311\u6230":"Rhythmus-Merkspiel","\u95dc\u5361":"Stufe","\u5206\u6578":"Punkte","\u5269\u9918\u6a5f\u6703":"Versuche","\u6700\u9ad8\u5206\u6578":"Rekord","\u66ab\u505c":"Pause","\u6e96\u5099\u597d\u4e86\u55ce\uff1f":"Bereit?","\u8ddf\u8457\u7bc0\u62cd\u807d\uff0c\u8a18\u4f4f\u6bcf\u6b21\u6572\u64ca\u3002":"H\u00f6re auf den Klick und merke dir jeden Anschlag.","\u6572\u4e00\u4e0b":"Tippen","\u6216\u6309\u7a7a\u767d\u9375":"oder Leertaste","\u8f2a\u5230\u4f60\u6642\uff0c\u6572\u51fa\u525b\u624d\u807d\u5230\u7684\u7bc0\u594f\u3002":"Wenn du dran bist, tippe den gerade geh\u00f6rten Rhythmus nach.","\u807d\u8207\u8a18\u61b6":"H\u00f6ren und merken","\u807d\u4e00\u6bb5\u7bc0\u594f\uff0c\u63a5\u8457\u63db\u4f60\u6572\u51fa\u4f86\u3002":"H\u00f6re einen Rhythmus und tippe ihn nach.","\u807d\u8457\u80cc\u666f\u7bc0\u62cd\uff0c\u8a18\u4f4f\u7cfb\u7d71\u793a\u7bc4\u7684\u7bc0\u594f\u3002":"H\u00f6re auf den Metronomklick und merke dir den vorgespielten Rhythmus.","\u97f3\u7b26\u96b1\u85cf\u5f8c\uff0c\u9ede\u300c\u6572\u4e00\u4e0b\u300d\u6216\u6309\u7a7a\u767d\u9375\uff0c\u91cd\u73fe\u76f8\u540c\u7bc0\u594f\u3002":"Wenn die Noten verschwinden, tippe auf \u201eTippen\u201c oder dr\u00fccke die Leertaste, um denselben Rhythmus zu wiederholen.","\u6bcf\u984c\u9650\u65bc 4 \u62cd\u5167\uff0c\u6e96\u78ba\u7387\u9054 95% \u5373\u53ef\u904e\u95dc\u3002":"Jedes Muster umfasst vier Schl\u00e4ge. Ab 95% Genauigkeit bestehst du die Stufe.","10 \u500b\u6f38\u9032\u95dc\u5361 \u00b7 3 \u6b21\u5931\u8aa4\u6a5f\u6703 \u00b7 \u96a8\u6a5f\u7bc0\u594f\u984c\u76ee":"10 ansteigende Stufen \u00b7 3 Versuche \u00b7 Zuf\u00e4llige Rhythmen","\u958b\u59cb\u6311\u6230":"Challenge starten","\u7a0d\u4f5c\u4f11\u606f":"Kurze Pause","\u904a\u6232\u5df2\u66ab\u505c":"Spiel pausiert","\u70ba\u4e86\u78ba\u4fdd\u7bc0\u62cd\u6e96\u78ba\uff0c\u9ede\u9078\u7e7c\u7e8c\u5f8c\uff0c\u6703\u91cd\u65b0\u958b\u59cb\u672c\u95dc\u7684\u76f8\u540c\u984c\u76ee\u3002":"Damit das Timing stimmt, beginnt beim Fortsetzen dasselbe Rhythmusmuster dieser Stufe erneut.","\u7e7c\u7e8c\u672c\u95dc":"Stufe fortsetzen","\u5f9e\u982d\u6311\u6230":"Von vorn beginnen","\u6b61\u8fce\u56de\u4f86":"Willkommen zur\u00fcck","\u63a5\u8457\u525b\u624d\u7684\u7bc0\u594f":"Den Rhythmus wieder aufnehmen","\u5df2\u4fdd\u7559\u4f60\u7684\u95dc\u5361\u8207\u9032\u5ea6\u3002":"Deine Stufe und dein Fortschritt wurden beibehalten.","\u9ede\u4e00\u4e0b\u7e7c\u7e8c\uff0c\u8072\u97f3\u8207\u8a08\u6642\u624d\u6703\u6062\u5fa9\u3002":"W\u00e4hle \u201eFortsetzen\u201c, damit Ton und Zeitmessung weiterlaufen.","\u7e7c\u7e8c\u904a\u6232":"Spiel fortsetzen","\u91cd\u65b0\u904a\u73a9":"Neu spielen","\u91cd\u65b0\u904a\u73a9\u6703\u5f9e\u7b2c 1 \u95dc\u958b\u59cb\uff0c\u6700\u9ad8\u5206\u4ecd\u6703\u4fdd\u7559\u3002":"Beim Neustart geht es ab Stufe 1 los. Dein Rekord bleibt erhalten.","\u5269\u9918 3 \u6b21\u6a5f\u6703":"Noch 3 Versuche","\u7bc0\u594f\u8996\u89ba\u8ecc\u9053\uff1b\u793a\u7bc4\u6642\u986f\u793a\u97f3\u7b26\uff0c\u8f2a\u5230\u4f60\u6642\u96b1\u85cf\u97f3\u7b26":"Rhythmusanzeige: Noten sind beim Vorspiel sichtbar und w\u00e4hrend deiner Runde ausgeblendet","\u6572\u64ca\u7bc0\u594f":"Rhythmus tippen","\u4f7f\u7528\u8aaa\u660e":"Anleitung","\u653e\u5927\u7bc0\u62cd\u5668":"Metronom vergr\u00f6\u00dfern","\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a":"Metronombereich vergr\u00f6\u00dfern","\u9084\u539f\u5927\u5c0f":"Gr\u00f6\u00dfe wiederherstellen","\u9084\u539f\u7bc0\u62cd\u5668\u5927\u5c0f":"Metronombereich verkleinern","\u50c5\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a\uff0c\u66ab\u6642\u6536\u8d77\u6b4c\u55ae\u8207\u623f\u9593\uff1b\u4e0d\u5f71\u97ff\u64ad\u653e\u3002":"Vergr\u00f6\u00dfert nur den Metronombereich und blendet Setlist und Raum vor\u00fcbergehend aus. Die Wiedergabe bleibt unver\u00e4ndert.","\u9078\u901f\u5ea6":"Tempo einstellen","\u8a2d\u5b9a 40\u2013300 BPM\uff0c\u6216\u4f7f\u7528\u9ede\u6309\u6e2c\u901f\u3002":"Stelle 40\u2013300 BPM ein oder nutze Tap-Tempo.","\u8abf\u7bc0\u594f":"Rhythmus einstellen","\u9078\u62cd\u865f\u8207\u97f3\u7b26\u7d30\u5206\uff0c\u9ede\u62cd\u9ede\u5207\u63db\u8f15\u91cd\u97f3\u3002":"W\u00e4hle Taktart und Unterteilung. Tippe auf die Z\u00e4hlzeiten, um ihre Betonung festzulegen.","\u958b\u59cb\u64ad\u653e":"Wiedergabe starten","\u6309\u300c\u958b\u59cb\u7bc0\u62cd\u300d\uff0c\u7528\u672c\u6a5f\u97f3\u91cf\u8abf\u6574\u5927\u5c0f\u3002":"Dr\u00fccke Start und passe die lokale Lautst\u00e4rke an.","\u62cd\u9ede\u8f15\u91cd\u97f3":"Betonungen","\u9ede\u9078\u62cd\u9ede\uff0c\u4f9d\u5e8f\u5207\u63db\u300c\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3\u300d\u3002":"Tippe auf eine Z\u00e4hlzeit: betont \u2192 unbetont \u2192 stumm.","\u901f\u5ea6\u57fa\u6e96":"Tempobezug","BPM \u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\uff1b\u62cd\u9ede\u5247\u4f9d\u62cd\u865f\u7684\u5206\u6bcd\u8a08\u6578\u3002":"BPM bezieht sich auf Viertelnoten. Die Z\u00e4hlmarkierungen richten sich nach dem Nenner der Taktart.","\u5728\u6bcf\u500b\u56db\u5206\u97f3\u7b26\u7684\u6642\u9593\u5167\uff0c\u56db\u5206\u3001\u516b\u5206\u3001\u5341\u516d\u5206\u97f3\u7b26\u5206\u5225\u767c\u8072 1\u30012\u30014 \u6b21\u3002":"Innerhalb einer Viertelnote erklingen bei Vierteln, Achteln bzw. Sechzehnteln jeweils 1, 2 bzw. 4 Klicks.","\u64ad\u653e\u4e2d\u8abf\u6574":"Beim Spielen anpassen","\u901f\u5ea6\u3001\u62cd\u9ede\u91cd\u97f3\u8207\u97f3\u7b26\u7d30\u5206\u6703\u5373\u6642\u5957\u7528\uff1b\u5df2\u767c\u51fa\u7684\u8072\u97f3\u4e0d\u6703\u91cd\u64ad\u3002":"Tempo, Betonungen und Unterteilung werden sofort aktualisiert. Bereits ausgegebene Klicks werden nicht wiederholt.","6/8 \u7684\u901f\u5ea6\u63db\u7b97":"Tempo im 6/8-Takt","6/8 \u7684\u6bcf\u4e00\u62cd\u9ede\u662f\u516b\u5206\u97f3\u7b26\uff0c\u9577\u5ea6\u70ba\u534a\u500b\u56db\u5206\u97f3\u7b26\u3002\u6a02\u8b5c\u6a19\u793a\u300c\u9644\u9ede\u56db\u5206\u97f3\u7b26 = 70\u300d\u6642\uff0c\u9019\u88e1\u8acb\u8a2d\u70ba 105 BPM\u3002":"Im 6/8-Takt steht jede Z\u00e4hlmarkierung f\u00fcr eine Achtelnote, also eine halbe Viertelnote. Bei \u201epunktierte Viertelnote = 70\u201c stelle dieses Metronom auf 105 BPM.","\u901f\u5ea6\u3001\u62cd\u865f\u8207\u7d30\u5206":"Tempo, Taktart und Unterteilung","\u65b0\u589e\u6216\u7de8\u8f2f\u6b4c\u66f2\uff0c\u8a2d\u5b9a\u6b4c\u540d\u3001\u901f\u5ea6\u8207\u62cd\u865f\uff0c\u518d\u6309\u300c\u5132\u5b58\u6b4c\u66f2\u300d\u3002":"Erstelle oder bearbeite einen Song, gib Namen, Tempo und Taktart ein und w\u00e4hle \u201eSong speichern\u201c.","\u73fe\u5834\u5207\u6b4c":"Songs wechseln","\u9ede\u6b4c\u540d\uff0c\u6216\u4f7f\u7528\u524d\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u3002\u64ad\u653e\u4e2d\u6703\u5728\u5c0f\u7bc0\u4ea4\u754c\u5207\u63db\uff0c\u4e26\u5ef6\u7e8c\u76ee\u524d\u7684\u8f15\u91cd\u97f3\u8a2d\u5b9a\u3002":"Tippe auf einen Song oder nutze Vorheriger / N\u00e4chster Song. Bei laufender Wiedergabe erfolgt der Wechsel am Taktanfang. Die aktuelle Betonungseinstellung bleibt erhalten.","\u66f4\u65b0\u6b4c\u66f2\u8a2d\u5b9a":"Gespeicherten Song aktualisieren","\u4e3b\u756b\u9762\u81e8\u6642\u6539\u4e86\u901f\u5ea6\uff0c\u8981\u5beb\u56de\u8a72\u9996\u6b4c\u6642\uff0c\u6309\u300c\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a\u300d\u518d\u5132\u5b58\u6b4c\u66f2\u3002":"Eine vor\u00fcbergehende Tempo\u00e4nderung \u00fcberschreibt den Song nicht. Nutze \u201eAktuelle Einstellungen speichern\u201c und dann \u201eSong speichern\u201c.","\u53ef\u9078\u95dc\u9589\u30011 \u5c0f\u7bc0\u6216 2 \u5c0f\u7bc0\u3002\u53ea\u5728\u5f9e\u505c\u6b62\u72c0\u614b\u958b\u59cb\u64ad\u653e\u6642\u751f\u6548\u3002":"W\u00e4hle Aus, 1 Takt oder 2 Takte. Das Einz\u00e4hlen gilt nur beim Start aus dem Stoppzustand.","\u6574\u7406\u8207\u5099\u4efd":"Ordnen und sichern","\u6b4c\u55ae\u53ef\u6392\u5e8f\u3001\u522a\u9664\u8207\u532f\u51fa\u5099\u4efd\u3002\u5167\u5efa\u4e09\u9996\u50c5\u70ba\u7bc4\u4f8b\uff0c\u4e0d\u662f\u771f\u5be6\u6b4c\u66f2\u7684\u5efa\u8b70\u901f\u5ea6\u3002":"Du kannst Songs sortieren, l\u00f6schen oder als Sicherung exportieren. Die drei Beispiele sind keine Tempoempfehlungen f\u00fcr echte Songs.","\u6b4c\u55ae\u7ba1\u7406\u8207\u9810\u5099\u62cd":"Setlist und Einz\u00e4hlen","\u9078\u64c7\u6a02\u5668\uff0f\u89d2\u8272\u4e26\u5efa\u7acb\u623f\u9593\uff0c\u5c07 4 \u4f4d\u6578\u5b57\u4ee3\u78bc\u4ea4\u7d66\u5718\u54e1\u3002":"W\u00e4hle Instrument oder Rolle, erstelle einen Raum und teile den vierstelligen Code mit deiner Band.","\u5718\u54e1":"Bandmitglieder","\u958b\u555f\u76f8\u540c\u7248\u672c\uff0c\u9078\u6a02\u5668\u4e26\u8f38\u5165\u4ee3\u78bc\u52a0\u5165\u3002\u6821\u6642\u5b8c\u6210\u5f8c\uff0c\u81ea\u52d5\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002":"\u00d6ffnet dieselbe Version, w\u00e4hlt euer Instrument und tretet mit dem Code bei. Nach der Uhrensynchronisation folgt ihr dem Host.","\u5404\u81ea\u8abf\u6574\u76e3\u807d":"Lokales Monitoring","\u4e3b\u6301\u4eba\u63a7\u5236\u7bc0\u594f\uff1b\u5718\u54e1\u53ef\u8abf\u672c\u6a5f\u97f3\u91cf\u3001\u97f3\u8272\u8207\u5ef6\u9072\uff0c\u4e0d\u6703\u6539\u52d5\u5168\u9ad4\u7bc0\u594f\u3002":"Der Host steuert den Rhythmus. Teilnehmer k\u00f6nnen ihre lokale Lautst\u00e4rke, den Klang und Zeitversatz anpassen, ohne den gemeinsamen Rhythmus zu \u00e4ndern.","\u5165\u623f\u5f8c\u9ede\u5074\u908a live\u50b3\u8a71\uff0c\u9078\u5c0d\u8c61\u518d\u9ede\u77ed\u53e5\uff0c\u5c31\u6703\u81ea\u52d5\u9001\u51fa\u3002\u8a9e\u97f3\u8acb\u5148\u555f\u7528\uff0f\u8a66\u807d\u3002":"\u00d6ffne nach dem Beitritt die seitlichen Live-Ansagen, w\u00e4hle einen Empf\u00e4nger und tippe auf eine Nachricht zum direkten Senden. Aktiviere und teste die Sprachausgabe zuerst.","\u4e0d\u662f\u8072\u97f3\u4e32\u6d41":"Kein Audiostream","\u623f\u9593\u50b3\u9001\u7bc0\u594f\u8207\u6642\u9593\u8cc7\u8a0a\uff0c\u5404\u88dd\u7f6e\u5728\u672c\u6a5f\u767c\u8072\u3002\u4e3b\u6301\u4eba\u96e2\u7dda\u6642\uff0c\u53c3\u8207\u8005\u6703\u505c\u6b62\u64ad\u653e\u3002":"Der Raum teilt Rhythmus und Zeitinformationen; jedes Ger\u00e4t erzeugt die Klicks selbst. Trennt sich der Host, stoppt die Wiedergabe der Teilnehmer.","\u5718\u968a\u623f\u9593\u8207\u50b3\u8a71":"Bandr\u00e4ume und Live-Ansagen","\u807d\u4e0d\u5230\u7bc0\u62cd":"Kein Metronomton","\u5148\u78ba\u8a8d\u672c\u6a5f\u6c92\u6709\u975c\u97f3\u3001\u7cfb\u7d71\u5a92\u9ad4\u97f3\u91cf\u53ca\u8f38\u51fa\u88dd\u7f6e\u6b63\u78ba\u3002\u756b\u9762\u51fa\u73fe\u300c\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\u300d\u6642\uff0c\u9ede\u4e2d\u592e\u6309\u9215\u6062\u5fa9\u3002":"Pr\u00fcfe Stummschaltung, Systemlautst\u00e4rke und Ausgabeger\u00e4t. Erscheint \u201eTon wiederherstellen\u201c, tippe auf die mittlere Taste.","\u8072\u97f3\u6bd4\u5225\u4eba\u5feb\u6216\u6162":"Klicks kommen zu fr\u00fch oder zu sp\u00e4t","\u5728\u8a2d\u5b9a\u4e2d\u8abf\u6574\u300c\u672c\u6a5f\u6642\u9593\u6821\u6b63\u300d\uff1a\u592a\u6162\u5f80\u8ca0\u503c\uff0c\u592a\u5feb\u5f80\u6b63\u503c\u3002\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u3002":"Passe in den Einstellungen den lokalen Zeitversatz an: negativ bei versp\u00e4teten, positiv bei zu fr\u00fchen Klicks. Dies betrifft nur dein Ger\u00e4t.","\u85cd\u7259\u8207\u7db2\u8def":"Bluetooth und Netzwerk","\u85cd\u7259\u7528\u65bc\u8033\u6a5f\u8f38\u51fa\uff0c\u4e0d\u662f\u623f\u9593\u9023\u7dda\u65b9\u5f0f\u3002\u5404\u88dd\u7f6e\u90fd\u9700\u8981\u7db2\u8def\u3002":"Bluetooth dient der Audioausgabe, nicht der Raumverbindung. Jedes Ger\u00e4t ben\u00f6tigt Internetzugang.","\u6f14\u51fa\u524d\u8acb\u5148\u5be6\u6e2c":"Vor dem Auftritt testen","\u7db2\u8def\u6821\u6642\u4e0d\u7b49\u65bc\u8033\u6a5f\u8072\u97f3\u5b8c\u5168\u540c\u6b65\u3002\u85cd\u7259\u3001\u97f3\u6548\u5361\u8207\u7cfb\u7d71\u6392\u7a0b\u90fd\u6703\u5f71\u97ff\u5ef6\u9072\uff1b\u672c\u7248\u9069\u5408\u8a66\u7528\u8207\u6392\u7df4\uff0c\u4e0d\u4fdd\u8b49\u96f6\u5ef6\u9072\u6216\u4e0d\u4e2d\u65b7\u3002":"Synchronisierte Uhren garantieren keinen exakt gleichzeitigen Kopfh\u00f6rerton. Bluetooth, Audio-Interfaces und Systemabl\u00e4ufe beeinflussen die Latenz. Diese Version dient zum Testen und Proben, ohne Garantie f\u00fcr Latenzfreiheit oder unterbrechungsfreie Wiedergabe.","\u8072\u97f3\u8207\u540c\u6b65\u554f\u984c":"Ton und Synchronisation","\u8cc7\u6599\u5b58\u5728\u54ea\u88e1\uff1f":"Wo werden Daten gespeichert?","\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u7528 localStorage \u4fdd\u5b58\u65bc\u76ee\u524d\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u8de8\u88dd\u7f6e\u540c\u6b65\u3002":"Setlist und Einstellungen werden per localStorage in diesem Browser gespeichert. Sie werden nicht automatisch zwischen Ger\u00e4ten synchronisiert.","\u4ec0\u9ebc\u6642\u5019\u8981\u5099\u4efd\uff1f":"Wann sollte ich sichern?","\u66f4\u65b0\u6216\u79fb\u52d5\u6a94\u6848\u524d\u5148\u532f\u51fa\u6b4c\u55ae\u3002\u6e05\u9664\u700f\u89bd\u8cc7\u6599\u3001\u7121\u75d5\u6a21\u5f0f\u6216\u66f4\u63db\u6a94\u6848\u4f4d\u7f6e\uff0c\u90fd\u53ef\u80fd\u8b80\u4e0d\u5230\u539f\u8cc7\u6599\u3002":"Exportiere die Setlist vor einem Update oder Verschieben der Datei. Gel\u00f6schte Browserdaten, privates Surfen oder ein anderer Dateipfad k\u00f6nnen gespeicherte Daten unzug\u00e4nglich machen.","\u623f\u9593\u5206\u4eab\u4ec0\u9ebc\uff1f":"Was teilt der Raum?","\u623f\u9593\u5206\u4eab\u6a02\u5668\u540d\u7a31\u3001\u76ee\u524d\u6b4c\u540d\u8207\u7bc0\u594f\uff0c\u4e0d\u6703\u540c\u6b65\u6574\u4efd\u6b4c\u55ae\u3002":"Der Raum teilt Instrumentennamen, den aktuellen Songtitel und Rhythmus, nicht die gesamte Setlist.","\u8acb\u52ff\u50b3\u9001\u654f\u611f\u8cc7\u6599":"Keine sensiblen Daten senden","4 \u4f4d\u4ee3\u78bc\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5b89\u5168\u5bc6\u78bc\u3002\u623f\u9593\u4f7f\u7528\u516c\u958b WSS \u4e2d\u7e7c\uff1b\u50b3\u8a71\u6587\u5b57\u7d93\u4e2d\u7e7c\u8207\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5c0d\u7aef\u52a0\u5bc6\u3002\u672c\u6a5f\u5132\u5b58\u4e5f\u4e0d\u9069\u5408\u654f\u611f\u8cc7\u8a0a\uff1b\u8acb\u52ff\u586b\u771f\u5be6\u59d3\u540d\u3001\u654f\u611f\u6b4c\u540d\u6216\u79c1\u5bc6\u8a0a\u606f\u3002":"Der vierstellige Code ist eine Einladung, kein sicheres Passwort. R\u00e4ume verwenden ein \u00f6ffentliches WSS-Relay. Nachrichten werden \u00fcber Relay und Host weitergeleitet, ohne Ende-zu-Ende-Verschl\u00fcsselung. Auch lokale Speicherung ist nicht f\u00fcr sensible Daten geeignet. Vermeide echte Namen, vertrauliche Songtitel und private Nachrichten.","\u8cc7\u6599\u4fdd\u5b58\u8207\u96b1\u79c1":"Speicherung und Datenschutz","\u64ad\u653e\uff0f\u505c\u6b62":"Start / Stopp","\u653e\u5927\uff0f\u9084\u539f\u7bc0\u62cd\u5668":"Metronom vergr\u00f6\u00dfern / verkleinern","\u901f\u5ea6 \u00b11 BPM":"Tempo \u00b11 BPM","\u901f\u5ea6 \u00b15 BPM":"Tempo \u00b15 BPM","\u8f38\u5165\u6587\u5b57\u6216\u958b\u555f\u5c0d\u8a71\u8996\u7a97\u6642\uff0c\u4e0d\u6703\u89f8\u767c\u4e3b\u756b\u9762\u5feb\u901f\u9375\u3002":"Beim Tippen in Eingabefelder oder bei ge\u00f6ffnetem Dialog sind die Tastenk\u00fcrzel der Hauptansicht inaktiv.","\u623f\u9593\u53c3\u8207\u8005\u7684\u7a7a\u767d\u9375\u64cd\u4f5c\u672c\u6a5f\u6536\u807d\u6216\u8072\u97f3\u6062\u5fa9\uff0c\u4e0d\u6703\u505c\u6b62\u6574\u500b\u623f\u9593\u3002":"Bei Teilnehmern steuert die Leertaste den lokalen Ton oder dessen Wiederherstellung. Sie stoppt nicht den gesamten Raum.","\u9375\u76e4\u5feb\u901f\u9375":"Tastenk\u00fcrzel","\u5148\u7528 3 \u6b65\u958b\u59cb\uff0c\u5176\u4ed6\u9700\u8981\u6642\u518d\u770b\u3002":"Starte in drei Schritten. \u00d6ffne weitere Themen bei Bedarf.","\u95dc\u9589\u4f7f\u7528\u8aaa\u660e":"Anleitung schlie\u00dfen","\u5feb\u901f\u4e0a\u624b":"Schnellstart","\u60f3\u4e86\u89e3\u54ea\u4e00\u9805\uff1f":"Was m\u00f6chtest du wissen?","\u9023\u4e0a\u5718\u968a\u3001\u540c\u6b65\u7bc0\u62cd\u3001\u5373\u6642\u50b3\u8a71\uff0c\u4e5f\u80fd\u7368\u81ea\u7df4\u7fd2\u3002":"Verbinde deine Band, teilt den Rhythmus und sendet Live-Ansagen. Oder \u00fcbe allein.","TEMPOLIVE \u7684\u6838\u5fc3\u529f\u80fd":"Das bietet TEMPOLIVE","\u66f4\u591a\u64cd\u4f5c\u8207\u6ce8\u610f\u4e8b\u9805":"Weitere Funktionen und Hinweise","\u5718\u968a\u623f\u9593":"Bandr\u00e4ume","\u5efa\u7acb\u623f\u9593\uff0c\u5206\u4eab 4 \u4f4d\u4ee3\u78bc\u3002":"Raum erstellen. Vierstelligen Code teilen.","\u5718\u54e1\u9078\u64c7\u6a02\u5668\uff0f\u89d2\u8272\uff0c\u8f38\u5165\u4ee3\u78bc\u52a0\u5165\uff1b\u5168\u54e1\u4f7f\u7528\u76f8\u540c\u7248\u672c\u3002":"Bandmitglieder w\u00e4hlen Instrument oder Rolle und treten mit dem Code bei. Verwendet auf allen Ger\u00e4ten dieselbe Version.","\u540c\u6b65\u7bc0\u62cd":"Synchroner Metronomklick","\u4e3b\u6301\u4eba\u63a7\u5236\uff0c\u5168\u5718\u8ddf\u96a8\u7bc0\u62cd\u3002":"Ein Host steuert den gemeinsamen Rhythmus.","\u6821\u6642\u5f8c\u8ddf\u96a8\u4e3b\u6301\u4eba\u7684\u901f\u5ea6\u8207\u64ad\u653e\uff1b\u5404\u81ea\u8abf\u6574\u672c\u6a5f\u97f3\u91cf\uff0c\u4e0d\u5f71\u97ff\u5176\u4ed6\u4eba\u3002":"Nach der Uhrensynchronisation folgen alle Tempo und Wiedergabe des Hosts. Die eigene Lautst\u00e4rke l\u00e4sst sich unabh\u00e4ngig einstellen.","\u9078\u5c0d\u8c61\uff0c\u9ede\u77ed\u53e5\u5c31\u81ea\u52d5\u9001\u51fa\u3002":"Empf\u00e4nger w\u00e4hlen und Nachricht antippen.","\u5165\u623f\u5f8c\u5f9e\u5074\u908a\u958b\u555f\uff0c\u53ef\u50b3\u7d66\u6307\u5b9a\u6a02\u5668\u6216\u5168\u90e8\u4eba\uff1b\u8a9e\u97f3\u8acb\u5148\u555f\u7528\uff0f\u8a66\u807d\u3002":"\u00d6ffne die Seitenlasche nach dem Beitritt. Sende an ein Instrument oder an alle. Aktiviere und teste vorher die Sprachausgabe.","\u7bc0\u62cd\u5668":"Metronom","\u9078\u901f\u5ea6\u3001\u8abf\u7bc0\u594f\uff0c\u518d\u958b\u59cb\u64ad\u653e\u3002":"Tempo und Rhythmus einstellen, dann starten.","\u8a2d\u5b9a 40\u2013300 BPM\u3001\u62cd\u865f\u8207\u97f3\u7b26\u7d30\u5206\uff1b\u9ede\u62cd\u9ede\u5207\u63db\u91cd\u97f3\u3001\u4e00\u822c\u6216\u975c\u97f3\u3002":"W\u00e4hle 40\u2013300 BPM, Taktart und Unterteilung. Tippe auf die Z\u00e4hlzeiten, um betont, unbetont oder stumm einzustellen.","\u64cd\u4f5c\u6559\u5b78":"Einf\u00fchrung","\u7d50\u675f\u6559\u5b78":"Einf\u00fchrung schlie\u00dfen","\u4e0a\u4e00\u6b65":"Zur\u00fcck","\u4e0b\u4e00\u6b65":"Weiter","\u5b8c\u6210\u6559\u5b78":"Einf\u00fchrung beenden","\u8df3\u5230\u4e3b\u984c":"Zum Thema","\u770b\u4e00\u904d\u5c31\u597d\uff1b\u6559\u5b78\u4e0d\u6703\u6539\u8a2d\u5b9a\u3001\u958b\u623f\u6216\u9001\u8a0a\u606f\u3002":"Lies einfach mit. Die Einf\u00fchrung \u00e4ndert keine Einstellungen, erstellt keinen Raum und sendet keine Nachrichten.","\u6559\u5b78\u793a\u610f":"Anschauungsbeispiel","\u4e0d\u6703\u57f7\u884c\u64cd\u4f5c":"Es wird nichts ausgef\u00fchrt","\u5718\u968a\u5408\u4f5c":"Gemeinsam spielen","\u7bc0\u62cd\u8207\u6b4c\u55ae":"Metronom und Setlist","\u97f3\u8a0a\u8207\u5916\u89c0":"Klang und Darstellung","\u66f4\u591a\u529f\u80fd":"Weitere Funktionen","\u8acb\u5148\u95dc\u9589\u76ee\u524d\u8996\u7a97\uff0c\u518d\u958b\u555f\u64cd\u4f5c\u6559\u5b78\u3002":"Schlie\u00dfe zuerst das ge\u00f6ffnete Fenster, bevor du die Einf\u00fchrung startest.","\u5148\u628a\u5718\u968a\u9023\u8d77\u4f86":"Die Band verbinden","\u4e00\u4eba\u5efa\u7acb\u623f\u9593\u7576\u4e3b\u6301\u4eba\uff0c\u5176\u4ed6\u4eba\u7528\u56db\u4f4d\u4ee3\u78bc\u52a0\u5165\u3002\u5168\u54e1\u4f7f\u7528\u540c\u4e00\u7248\u672c\uff0c\u4e26\u4fdd\u6301\u7db2\u8def\u9023\u7dda\u3002":"Eine Person erstellt als Host einen Raum. Alle anderen treten mit dem vierstelligen Code bei. Verwendet dieselbe Version und bleibt online.","\u4e3b\u756b\u9762 \u2192 \u5718\u968a\u623f\u9593":"Hauptansicht \u2192 Bandraum","\u9078\u6a02\u5668\uff0c\u518d\u52a0\u5165":"Dein Instrument w\u00e4hlen","\u7528\u6a02\u5668\u6216\u89d2\u8272\u4ee3\u66ff\u66b1\u7a31\uff1b\u6c92\u6709\u7684\u53ef\u81ea\u5df1\u65b0\u589e\u3002\u53c3\u8207\u8005\u8f38\u5165\u4e3b\u6301\u4eba\u7d66\u7684\u4ee3\u78bc\uff0c\u52a0\u5165\u524d\u5148\u8a66\u807d\u8a9e\u97f3\u3002":"W\u00e4hle statt eines Spitznamens ein Instrument oder eine Rolle oder f\u00fcge eine eigene hinzu. Teilnehmer geben den Code des Hosts ein. Teste vor dem Beitritt die Sprachausgabe.","\u5efa\u7acb\u623f\u9593 / \u4ee3\u78bc\u52a0\u5165":"Raum erstellen / Mit Code beitreten","\u4e00\u4eba\u63a7\u5236\uff0c\u5168\u5718\u8ddf\u62cd":"Ein Host, ein gemeinsamer Rhythmus","\u4e3b\u6301\u4eba\u63a7\u5236\u901f\u5ea6\u3001\u64ad\u653e\u8207\u5207\u6b4c\uff0c\u5718\u54e1\u5404\u81ea\u8abf\u8033\u6a5f\u97f3\u91cf\u3002\u6821\u6642\u4e0d\u7b49\u65bc\u96f6\u5ef6\u9072\uff0c\u6f14\u51fa\u524d\u8acb\u5148\u5be6\u6e2c\u3002":"Der Host steuert Tempo, Wiedergabe und Songwechsel. Jedes Bandmitglied regelt seine eigene Kopfh\u00f6rerlautst\u00e4rke. Synchronisation bedeutet nicht Latenzfreiheit: Testet vor dem Auftritt.","\u5165\u623f\u5f8c \u2192 \u623f\u9593\u8cc7\u8a0a\u8207\u91cd\u65b0\u6821\u6642":"Nach dem Beitritt \u2192 Raumstatus und Synchronisation","\u73fe\u5834\u8981\u8aaa\u8a71\uff0c\u9ede\u5074\u908a":"Etwas mitteilen? Tippe an der Seite.","\u5165\u623f\u5f8c\u624d\u6703\u51fa\u73fe live\u50b3\u8a71\u5074\u62c9\u9215\u3002\u5148\u9078\u6a02\u5668\u6216\u300c\u5168\u90e8\u4eba\u300d\uff1b\u540c\u6a23\u6a02\u5668\u6703\u4ee5\u7de8\u865f\u5340\u5206\u3002":"Die Seitenlasche f\u00fcr Live-Ansagen erscheint erst nach dem Beitritt. W\u00e4hle ein Instrument oder \u201eAlle\u201c. Gleiche Instrumente werden nummeriert.","\u5165\u623f\u5f8c \u2192 \u53f3\u5074 live\u50b3\u8a71":"Nach dem Beitritt \u2192 Live-Ansagen am rechten Rand","\u9ede\u77ed\u53e5\uff0c\u5c31\u81ea\u52d5\u50b3\u51fa":"Antippen und direkt senden","\u9078\u77ed\u53e5\u5c31\u9001\u51fa\u4e26\u6536\u8d77\uff0c\u4e0d\u7528\u518d\u78ba\u8a8d\u3002\u4e5f\u80fd\u81ea\u8a02\u8a0a\u606f\uff1b\u5148\u555f\u7528\u8a9e\u97f3\u8a66\u807d\uff0c\u50b3\u8a71\u4e0d\u6703\u4e3b\u52d5\u505c\u4e0b\u7bc0\u62cd\u3002":"Tippe auf eine Kurzmitteilung: Sie wird gesendet und das Fenster schlie\u00dft sich. Du kannst auch eigene Nachrichten erstellen. Teste die Sprachausgabe zuerst; Live-Ansagen stoppen das Metronom nicht absichtlich.","live\u50b3\u8a71 \u2192 \u77ed\u53e5 / \u8a9e\u97f3\u8a2d\u5b9a":"Live-Ansagen \u2192 Nachrichten / Spracheinstellungen","\u5148\u6c7a\u5b9a\u901f\u5ea6":"Dein Tempo einstellen","\u8f38\u5165 40\u2013300 BPM\uff0c\u6216\u7528\u52a0\u6e1b\u9375\u3001\u6ed1\u687f\u8abf\u6574\u3002\u9019\u88e1\u7684 BPM \u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\uff1b\u4e0d\u7528\u505c\u4e0b\u4f86\u624d\u80fd\u6539\u901f\u5ea6\u3002":"Gib 40\u2013300 BPM ein oder nutze Plus, Minus und den Regler. Die BPM beziehen sich auf Viertelnoten. Du kannst das Tempo bei laufender Wiedergabe \u00e4ndern.","\u7bc0\u62cd\u5668 \u2192 BPM \u5927\u6578\u5b57":"Metronom \u2192 BPM-Anzeige","\u64ad\u653e\uff0c\u6216\u9ede\u51fa\u4f60\u7684\u901f\u5ea6":"Starten oder Tempo tippen","\u4e0a\u6392\u4e2d\u9593\u6309\u9215\u958b\u59cb\uff0f\u505c\u6b62\uff0c\u5de6\u53f3\u5716\u793a\u5207\u63db\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u3002\u4e0b\u65b9\u300c\u9ede\u6309\u6e2c\u901f\u300d\u9023\u9ede\u81f3\u5c11\u5169\u6b21\u5c31\u80fd\u4f30\u7b97 BPM\u3002":"Die mittlere Taste startet oder stoppt. Tippe mindestens zweimal auf Tap-Tempo, um deine BPM zu ermitteln. Links daneben wechselst du zum n\u00e4chsten Song.","\u7bc0\u62cd\u5668 \u2192 \u4e09\u500b\u4e3b\u8981\u6309\u9215":"Metronom \u2192 Haupttasten","\u8a2d\u5b9a\u6bcf\u5c0f\u7bc0\u600e\u9ebc\u6578":"So wird der Takt unterteilt","\u62cd\u865f\u6c7a\u5b9a\u6bcf\u5c0f\u7bc0\u7684\u62cd\u6578\u8207\u97f3\u7b26\u55ae\u4f4d\u3002\u7d30\u5206\u53ef\u9078\u56db\u5206\u3001\u516b\u5206\u6216\u5341\u516d\u5206\uff1b\u958b\u59cb\u524d\u60f3\u5148\u6578\u62cd\uff0c\u5c31\u8a2d\u9810\u5099\u62cd\u3002":"Die Taktart bestimmt Anzahl und Notenwert der Z\u00e4hlzeiten. W\u00e4hle Viertel, Achtel oder Sechzehntel als Unterteilung. Aktiviere Einz\u00e4hlen, um vor dem Start einen Vorlauf zu h\u00f6ren.","\u62cd\u865f / \u97f3\u7b26\u7d30\u5206 / \u9810\u5099\u62cd":"Taktart / Unterteilung / Einz\u00e4hlen","\u6bcf\u4e00\u62cd\u90fd\u53ef\u8abf\u8f15\u91cd":"Jede Z\u00e4hlzeit betonen","\u9ede\u62cd\u9ede\u53ef\u5207\u63db\u300c\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3\u300d\u3002\u5207\u6b4c\u4e0d\u6703\u91cd\u8a2d\u76ee\u524d\u7684\u8f15\u91cd\u97f3\uff1b\u62cd\u6578\u6539\u8b8a\u4e5f\u6703\u5ef6\u7e8c\u4f60\u7684\u9078\u64c7\u3002":"Tippe auf eine Z\u00e4hlzeit: betont \u2192 unbetont \u2192 stumm. Beim Songwechsel bleiben deine Betonungen erhalten, auch bei einer anderen Anzahl von Z\u00e4hlzeiten.","BPM \u4e0b\u65b9 \u2192 \u62cd\u9ede\u65b9\u584a":"Unter der BPM-Anzeige \u2192 Z\u00e4hlzeittasten","\u8abf\u81ea\u5df1\u807d\u5230\u7684\u97f3\u91cf":"Nur die eigene Lautst\u00e4rke regeln","\u9019\u689d\u6ed1\u687f\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u7684\u7bc0\u62cd\u8072\uff0c\u4e0d\u6703\u6539\u5176\u4ed6\u5718\u54e1\u3002\u8a9e\u97f3\u50b3\u8a71\u548c\u5c0f\u904a\u6232\u6709\u5404\u81ea\u7684\u97f3\u91cf\u3002":"Dieser Regler \u00e4ndert nur den Metronomton auf deinem Ger\u00e4t, nicht bei anderen Bandmitgliedern. Live-Ansagen und Rhythmusspiel haben eigene Lautst\u00e4rkeregler.","\u4e3b\u756b\u9762 \u2192 \u672c\u6a5f\u97f3\u91cf":"Hauptansicht \u2192 Lokale Lautst\u00e4rke","\u6b4c\u55ae\u5148\u6392\u597d\uff0c\u73fe\u5834\u5c11\u64cd\u4f5c":"Die Setlist vorher vorbereiten","\u9ede\u6b4c\u540d\u6216\u524d\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u5207\u63db\u3002\u64ad\u653e\u4e2d\u5207\u6b4c\u6703\u63a5\u5728\u5c0f\u7bc0\u4ea4\u754c\uff0c\u4e0d\u6703\u7a81\u7136\u5f9e\u4e2d\u9593\u91cd\u4f86\u3002":"Tippe auf einen Song oder auf Vorheriger / N\u00e4chster Song. W\u00e4hrend der Wiedergabe wird am Taktanfang gewechselt, statt mitten im Takt neu zu beginnen.","\u6b4c\u66f2\u6e05\u55ae \u2192 \u6b4c\u540d\u8207\u524d\u5f8c\u9996":"Setlist \u2192 Songs und Navigation","\u628a\u6b4c\u540d\u8207\u7bc0\u594f\u5b58\u8d77\u4f86":"Song und Rhythmus speichern","\u65b0\u589e\u6216\u7de8\u8f2f\u6b4c\u66f2\uff0c\u53ef\u8a2d\u6b4c\u540d\u3001\u901f\u5ea6\u3001\u62cd\u865f\u8207\u6392\u5e8f\u3002\u4e3b\u756b\u9762\u81e8\u6642\u8abf\u597d\u5f8c\uff0c\u7528\u300c\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a\u300d\u66f4\u65b0\u9019\u9996\u6b4c\u3002":"Erstelle oder bearbeite Songs mit Namen, Tempo, Taktart und Reihenfolge. Nach einer Live-Anpassung aktualisierst du den Song mit \u201eAktuelle Einstellungen speichern\u201c.","\u65b0\u589e\u6b4c\u66f2 / \u7de8\u8f2f / \u5132\u5b58\u76ee\u524d\u8a2d\u5b9a":"Song hinzuf\u00fcgen / Bearbeiten / Aktuelle Einstellungen speichern","\u63db\u88dd\u7f6e\u524d\uff0c\u5148\u5099\u4efd":"Vor dem Ger\u00e4tewechsel sichern","\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u5b58\u5728\u9019\u500b\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u96f2\u7aef\u540c\u6b65\u3002\u532f\u51fa\u53ef\u5099\u4efd\u6b4c\u55ae\uff1b\u532f\u5165\u6703\u53d6\u4ee3\u539f\u6b4c\u55ae\uff0c\u8acb\u5148\u7559\u4e00\u4efd\u3002":"Setlist und Einstellungen bleiben in diesem Browser, ohne automatische Cloud-Synchronisation. Exportiere zuerst eine Sicherung: Ein Import ersetzt die aktuelle Setlist.","\u6b4c\u55ae\u4e0b\u65b9 \u2192 \u532f\u51fa / \u532f\u5165":"Unter der Setlist \u2192 Exportieren / Importieren","\u8b93\u756b\u9762\u66f4\u9069\u5408\u73fe\u5834":"Die Anzeige f\u00fcr die B\u00fchne anpassen","\u65b9\u6846\u5716\u793a\u53ea\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a\u3002\u8a2d\u5b9a\u53ef\u5207\u6df1\u6dfa\u8272\uff0c\u6216\u958b\u555f\u62cd\u9ede\u87a2\u5149\uff1b\u5c0d\u9583\u5149\u654f\u611f\u8005\u8acb\u4fdd\u6301\u95dc\u9589\u3002":"Das Rahmensymbol vergr\u00f6\u00dfert nur den Metronombereich. Unter Einstellungen findest du Hell/Dunkel und optische Taktimpulse. Bei Lichtempfindlichkeit lasse das Aufleuchten ausgeschaltet.","\u7bc0\u62cd\u5340\u65b9\u6846\u5716\u793a / \u8a2d\u5b9a \u2192 \u5916\u89c0":"Rahmensymbol / Einstellungen \u2192 Darstellung","\u9078\u4e00\u500b\u6e05\u695a\u7684\u62cd\u9ede\u8072":"Einen deutlichen Klick w\u00e4hlen","\u6709\u6728\u584a\u3001\u6e05\u6670\u96fb\u5b50\u3001\u725b\u9234\u3001\u77ed\u9234\u8207\u99ac\u6797\u5df4\u3002\u53ef\u9078\u6a19\u6e96\uff0f\u52a0\u5f37\u4e26\u8a66\u807d\uff1b\u6234\u8033\u6a5f\u6642\u5148\u964d\u97f3\u91cf\uff0c\u518d\u6162\u6162\u52a0\u5927\u3002":"W\u00e4hle Holzblock, klaren Elektronik-Klick, Cowbell, kurzen Glockenton oder Marimba. Teste Standard oder Verst\u00e4rkt. Mit Kopfh\u00f6rern leise beginnen und langsam lauter stellen.","\u8a2d\u5b9a \u2192 \u97f3\u8a0a\u8207\u85cd\u7259":"Einstellungen \u2192 Audio und Bluetooth","\u5148\u78ba\u8a8d\u8072\u97f3\u5f9e\u54ea\u88e1\u51fa\u4f86":"Die Audioausgabe pr\u00fcfen","\u85cd\u7259\u8033\u6a5f\u5148\u5728\u7cfb\u7d71\u914d\u5c0d\u3002\u8072\u97f3\u6bd4\u5225\u4eba\u6162\u6642\uff0c\u53ef\u8abf\u672c\u6a5f\u6642\u9593\u6821\u6b63\uff1b\u8acb\u4fdd\u6301\u7db2\u9801\u524d\u666f\uff0c\u56de\u4f86\u7121\u8072\u6642\u9ede\u6062\u5fa9\u8072\u97f3\u3002":"Kopple Bluetooth-Kopfh\u00f6rer zuerst im System. Kommt dein Ton zu sp\u00e4t, passe den lokalen Zeitversatz an. Lass die Seite im Vordergrund; fehlt nach der R\u00fcckkehr Ton, nutze \u201eTon wiederherstellen\u201c.","\u8a2d\u5b9a \u2192 \u8f38\u51fa / \u6642\u9593\u6821\u6b63":"Einstellungen \u2192 Ausgabe / Zeitversatz","\u7a7a\u6a94\u73a9\u4e00\u4e0b\u7bc0\u594f\u8a18\u61b6":"Das Rhythmusged\u00e4chtnis testen","\u9ede\u53f3\u4e0a\u89d2\u904a\u6232\uff0c\u5148\u807d\u793a\u7bc4\u518d\u6572\u56de\u4f86\u3002\u904a\u6232\u6709\u7368\u7acb\u97f3\u91cf\uff1b\u904a\u73a9\u6642\u66ab\u505c\u672c\u6a5f\u7bc0\u62cd\u8072\uff0c\u7d50\u675f\u5f8c\u4f9d\u539f\u72c0\u614b\u6062\u5fa9\u3002":"\u00d6ffne das Spiel oben rechts, h\u00f6re zu und tippe den Rhythmus nach. Es hat eine eigene Lautst\u00e4rke. Im Spiel ist nur dein lokales Metronom stumm; danach gilt wieder der vorherige Wiedergabestatus.","\u53f3\u4e0a\u89d2 \u2192 \u904a\u6232\u5716\u793a":"Oben rechts \u2192 Spielsymbol","\u6e96\u5099\u597d\u4e86\uff0c\u56de\u4e3b\u756b\u9762\u8a66\u8a66":"Bereit f\u00fcr die Hauptansicht","TW / EN \u53ef\u5207\u63db\u8a9e\u8a00\uff0c\u554f\u865f\u53ef\u67e5\u5b8c\u6574\u8aaa\u660e\u3002\u7a7a\u767d\u9375\u64ad\u653e\u3001T \u6e2c\u901f\u3001N \u4e0b\u4e00\u9996\u3001F \u653e\u5927\uff1b\u4e4b\u5f8c\u53ef\u96a8\u6642\u518d\u958b\u555f\u6559\u5b78\u3002":"Wechsle mit TW / EN / DE die Sprache. Das Fragezeichen \u00f6ffnet die Anleitung. Leertaste: Wiedergabe, T: Tap-Tempo, N: n\u00e4chster Song, F: vergr\u00f6\u00dfern. Die Einf\u00fchrung ist jederzeit wieder verf\u00fcgbar.","\u53f3\u4e0a\u89d2\u8a9e\u8a00 / TEMPOLIVE \u65c1\u7684\u554f\u865f":"Sprache oben rechts / ? neben TEMPOLIVE","+ \u65b0\u589e\u6a02\u5668":"+ Instrument hinzuf\u00fcgen","4826 \u662f\u6559\u5b78\u7bc4\u4f8b\uff0c\u4e0d\u662f\u5be6\u969b\u623f\u9593\u4ee3\u78bc\u3002":"4826 ist ein Beispiel, kein echter Raumcode.","\u6821\u6642\u5b8c\u6210\u5f8c\u8ddf\u96a8\u4e3b\u6301\u4eba":"Nach der Synchronisation dem Host folgen","\u623f\u9593\u6703\u5206\u4eab\u76ee\u524d\u7bc0\u594f\uff0c\u4e0d\u6703\u628a\u6574\u4efd\u6b4c\u55ae\u8907\u88fd\u7d66\u5225\u4eba\u3002":"R\u00e4ume teilen den aktuellen Rhythmus, nicht die komplette Setlist.","\u53f3\u5074\u7684 live\u50b3\u8a71\u6309\u9215\uff0c\u5165\u623f\u5f8c\u624d\u51fa\u73fe\u3002":"Die Lasche f\u00fcr Live-Ansagen erscheint erst nach dem Beitritt.","1 / 2 \u00b7 \u8981\u50b3\u7d66\u8ab0\uff1f":"1 / 2 \u00b7 An wen geht die Nachricht?","\u92fc\u7434 1":"Klavier 1","\u92fc\u7434 2":"Klavier 2","\u9019\u662f\u7bc4\u4f8b\u6210\u54e1\uff0c\u4e0d\u6703\u52a0\u5165\u771f\u5be6\u623f\u9593\u3002":"Dies sind Beispielmitglieder. Es wird keinem echten Raum beigetreten.","\u50b3\u7d66 \u00b7 \u92fc\u7434":"An \u00b7 Klavier","2 / 2 \u00b7 \u60f3\u8aaa\u4ec0\u9ebc\uff1f":"2 / 2 \u00b7 Was m\u00f6chtest du sagen?","\u9f13\u624b\u9078\u300c\u592a\u6162\u300d\uff1a\u300c\u9f13\u624b\u8aaa\uff0c\u92fc\u7434\uff0c\u5feb\u4e00\u9ede\u3002\u300d":"Schlagzeug w\u00e4hlt \u201eZu langsam\u201c: \u201eSchlagzeuger sagt: Klavier, bitte schneller.\u201c","\u9019\u88e1\u53ea\u8aaa\u660e\u64cd\u4f5c\uff0c\u4e0d\u6703\u64ad\u5831\u6216\u50b3\u9001\u8a0a\u606f\u3002":"Dieses Beispiel spricht nicht und sendet keine Nachricht.","\u672c\u9031\u958b\u5834\u8a69\u6b4c":"Auftaktlied","\u7de8\u8f2f\u6642\u4e5f\u80fd\u6392\u5e8f\u8207\u522a\u9664":"Beim Bearbeiten auch sortieren oder l\u00f6schen","\u7bc4\u4f8b\u4e0d\u6703\u5beb\u5165\u4f60\u7684\u6b4c\u55ae\u3002":"Dieses Beispiel f\u00fcgt deiner Setlist nichts hinzu.","\u756b\u9762\u8207\u62cd\u9ede\u63d0\u793a":"Anzeige und Taktimpulse","\u653e\u5927\uff0f\u7e2e\u5c0f\u7bc0\u62cd\u5668":"Metronom vergr\u00f6\u00dfern / verkleinern","\u87a2\u5149\u50c5\u51fa\u73fe\u5728\u7bc0\u62cd\u5340\u584a\uff1a\u6dfa\u8272\u6a21\u5f0f\u9ed1\u8272\uff0c\u6df1\u8272\u6a21\u5f0f\u767d\u8272\u3002\u9810\u8a2d\u95dc\u9589\uff0c\u6559\u5b78\u4e0d\u6703\u958b\u555f\u9583\u720d\u3002":"Das Leuchten bleibt im Metronombereich: schwarz im hellen, wei\u00df im dunklen Modus. Standardm\u00e4\u00dfig aus; die Einf\u00fchrung aktiviert es nicht.","\u78ba\u8a8d\u8033\u6a5f\u5be6\u969b\u807d\u5230\u7684\u8072\u97f3":"Den tats\u00e4chlichen Kopfh\u00f6rerton pr\u00fcfen","\u793a\u610f\u756b\u9762\u4e0d\u767c\u8072\uff0c\u4e5f\u4e0d\u66f4\u6539\u4f60\u7684\u97f3\u8272\u3002":"Dieses Anschauungsbeispiel gibt keinen Ton aus und \u00e4ndert deinen Klang nicht.","\u8072\u97f3\u8f38\u51fa\u8207\u6821\u6b63":"Audioausgabe und Zeitversatz","\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u9078\u64c7\u6642\uff0c\u4f7f\u7528\u7cfb\u7d71\u9810\u8a2d\u8033\u6a5f\uff0f\u5587\u53ed\u3002":"Falls der Browser keine Auswahl erlaubt, verwende Kopfh\u00f6rer oder Lautsprecher \u00fcber die Systemeinstellungen.","\u81ea\u52d5\u5ef6\u9072\u4f30\u8a08\uff0c\u4e0d\u7b49\u65bc\u5be6\u969b\u91cf\u6e2c\u3002\u4e5f\u53ef\u52fe\u9078\u300c\u64ad\u653e\u6642\u4fdd\u6301\u87a2\u5e55\u958b\u555f\u300d\uff0c\u4f46\u4ecd\u9700\u88dd\u7f6e\u652f\u63f4\u3002":"Automatische Latenzsch\u00e4tzungen sind keine Messung. \u201eBildschirm eingeschaltet lassen\u201c kann auf unterst\u00fctzten Ger\u00e4ten ebenfalls aktiviert werden.","\u5148\u807d\u7cfb\u7d71\u793a\u7bc4\u7684\u7bc0\u594f\u3002":"H\u00f6re zuerst den vorgespielten Rhythmus.","\u63db\u4f60\u6642\u9ede\u6309\u6216\u6309\u7a7a\u767d\u9375\uff0c\u6572\u51fa\u525b\u624d\u7684\u7bc0\u594f\u3002":"Wenn du dran bist, tippe oder dr\u00fccke die Leertaste, um ihn zu wiederholen.","\u6536\u8d77\u5f8c\u53ef\u7e7c\u7e8c\u6216\u91cd\u73a9\uff1b\u8fd4\u56de\u5f8c\u4f9d\u539f\u72c0\u614b\u6062\u5fa9\u7bc0\u62cd\u8072\u3002":"Nach dem erneuten \u00d6ffnen kannst du fortsetzen oder neu starten. Bei der R\u00fcckkehr gilt der vorherige lokale Metronomton-Status.","10 \u95dc \u00b7 \u6bcf\u984c 4 \u62cd \u00b7 \u4fdd\u7559\u6700\u9ad8\u5206":"10 Stufen \u00b7 4 Schl\u00e4ge pro Aufgabe \u00b7 Rekord gespeichert","\u9019\u662f\u6559\u5b78\u793a\u610f\uff0c\u4e0d\u6703\u958b\u59cb\u904a\u6232\u6216\u5207\u63db\u8072\u97f3\u3002":"Dies ist ein Anschauungsbeispiel. Es startet kein Spiel und \u00e4ndert keinen Ton.","\u623f\u9593\u7684\u901f\u5ea6\u8207\u958b\u59cb\uff0f\u505c\u6b62\u7531\u4e3b\u6301\u4eba\u63a7\u5236\u3002\u4f60\u7684\u4e2d\u9593\u6309\u9215\u53ea\u5207\u63db\u672c\u6a5f\u6536\u807d\uff1b\u6c92\u8072\u97f3\u6642\u53ef\u7528\u5b83\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\u3002":"Im Raum steuert der Host Tempo sowie Start/Stopp. Deine mittlere Taste steuert nur deinen lokalen Ton. Nutze sie zum Wiederherstellen, wenn das Ger\u00e4t stumm bleibt.","TW / EN / DE \u53ef\u5207\u63db\u8a9e\u8a00\uff0c\u554f\u865f\u53ef\u67e5\u5b8c\u6574\u8aaa\u660e\u3002\u7a7a\u767d\u9375\u64ad\u653e\u3001T \u6e2c\u901f\u3001N \u4e0b\u4e00\u9996\u3001F \u653e\u5927\uff1b\u4e4b\u5f8c\u53ef\u96a8\u6642\u518d\u958b\u555f\u6559\u5b78\u3002":"Wechsle mit TW / EN / DE die Sprache. Das Fragezeichen \u00f6ffnet die Anleitung. Leertaste: Wiedergabe, T: Tap-Tempo, N: n\u00e4chster Song, F: vergr\u00f6\u00dfern. Die Einf\u00fchrung ist jederzeit wieder verf\u00fcgbar.","\u9078\u64c7\u8a9e\u8a00":"Sprache w\u00e4hlen"};

/* v2.1.4 additions: human-written, local-only UI translations. */
Object.assign(dictionary,{"\u97f3\u8a0a\u4e2d\u65b7\u5f8c\u81ea\u52d5\u7e8c\u64ad":"Resume after audio interruptions","\u9810\u8a2d\u958b\u555f\u3002\u8033\u6a5f\u5207\u63db\u6216\u97f3\u8a0a\u4e2d\u65b7\u5f8c\uff0c\u6703\u5617\u8a66\u6062\u5fa9\u539f\u672c\u64ad\u653e\u7684\u7bc0\u62cd\uff1b\u4e0d\u6703\u81ea\u52d5\u958b\u59cb\u5df2\u505c\u6b62\u6216\u975c\u97f3\u7684\u7bc0\u62cd\u3002":"On by default. After a headphone/output change or audio interruption, try to resume the metronome only if it was already playing. Stopped or muted playback is not started.","\u7db2\u9801\u7121\u6cd5\u95dc\u9589\u8033\u6a5f\u7684\u914d\u6234\u5075\u6e2c\u3002\u82e5\u62ff\u4e0b\u55ae\u908a\u8033\u6a5f\u4ecd\u6703\u66ab\u505c\uff0c\u8acb\u5728\u8033\u6a5f\u6216\u7cfb\u7d71\u8a2d\u5b9a\u95dc\u9589\u300c\u81ea\u52d5\u8033\u90e8\u5075\u6e2c\uff0f\u53d6\u4e0b\u66ab\u505c\u300d\u3002":"A website cannot turn off headset wear detection. If removing one earbud still pauses audio, disable Automatic Ear Detection / Auto-pause in your headset or system settings.","\u7121\u6cd5\u81ea\u52d5\u6062\u5fa9\u8072\u97f3\uff0c\u8acb\u78ba\u8a8d\u8033\u6a5f\u7684\u81ea\u52d5\u66ab\u505c\u8a2d\u5b9a\uff0c\u4e26\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002":"Audio could not resume automatically. Check your headset auto-pause settings, then re-enable local audio.","\u7bc0\u62cd\u5668 \u2192 \u64ad\u653e\u8207\u5207\u6b4c\u6309\u9215":"Metronome \u2192 Playback and track controls","\u653e\u5927\u5f8c\u4fdd\u7559 BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u6309\u9215\u3001\u6e2c\u901f\u3001\u76ee\u524d\u6b4c\u540d\u8207\u623f\u9593\u50b3\u8a71\u3002\u97f3\u7b26\u7d30\u5206\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\uff1b\u518d\u6309\u65b9\u6846\u5716\u793a\u6216 F \u53ef\u9084\u539f\uff0c\u4e0d\u5f71\u97ff\u64ad\u653e\u3002":"Stage view keeps BPM and +/\u2212 controls, compact beat markers, playback, larger previous/next song buttons, Tap tempo, the current song title and room Live talk. Restore the normal view to adjust subdivisions or volume. Press the frame icon or F to restore without changing playback.","\u65b9\u6846\u5716\u793a\u958b\u555f\u73fe\u5834\u653e\u5927\u6a21\u5f0f\uff1a\u986f\u793a BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u5207\u6b4c\u6309\u9215\u8207\u6e2c\u901f\u3002\u50c5\u986f\u793a\u76ee\u524d\u6b4c\u540d\uff0c\u4e26\u4fdd\u7559\u623f\u9593\u50b3\u8a71\uff1b\u97f3\u7b26\u7d30\u5206\u3001\u62cd\u865f\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\u3002":"The frame icon opens stage view with BPM and +/\u2212 buttons, compact beat markers, playback, larger song-navigation buttons and Tap tempo. Only the current song title is shown, and room Live talk remains available. Restore the normal view to change subdivisions, time signature or volume.","\u4e0a\u6392\u5169\u500b\u5927\u5716\u793a\u5207\u63db\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\uff0c\u4e0b\u65b9\u4f9d\u5e8f\u70ba\u958b\u59cb\uff0f\u505c\u6b62\u8207\u9ede\u6309\u6e2c\u901f\u3002\u9023\u9ede\u6e2c\u901f\u81f3\u5c11\u5169\u6b21\uff0c\u5373\u53ef\u4f30\u7b97 BPM\u3002":"The two large icons on the top row select the previous or next song. Start/Stop and Tap tempo each have their own row below. Tap at least twice to estimate your BPM."});
Object.assign(german,{"\u97f3\u8a0a\u4e2d\u65b7\u5f8c\u81ea\u52d5\u7e8c\u64ad":"Nach Audiounterbrechungen fortsetzen","\u9810\u8a2d\u958b\u555f\u3002\u8033\u6a5f\u5207\u63db\u6216\u97f3\u8a0a\u4e2d\u65b7\u5f8c\uff0c\u6703\u5617\u8a66\u6062\u5fa9\u539f\u672c\u64ad\u653e\u7684\u7bc0\u62cd\uff1b\u4e0d\u6703\u81ea\u52d5\u958b\u59cb\u5df2\u505c\u6b62\u6216\u975c\u97f3\u7684\u7bc0\u62cd\u3002":"Standardm\u00e4\u00dfig aktiviert. Nach einem Kopfh\u00f6rerwechsel oder einer Audiounterbrechung wird versucht, die bereits laufende Metronomwiedergabe fortzusetzen. Gestoppte oder stummgeschaltete Wiedergabe wird nicht gestartet.","\u7db2\u9801\u7121\u6cd5\u95dc\u9589\u8033\u6a5f\u7684\u914d\u6234\u5075\u6e2c\u3002\u82e5\u62ff\u4e0b\u55ae\u908a\u8033\u6a5f\u4ecd\u6703\u66ab\u505c\uff0c\u8acb\u5728\u8033\u6a5f\u6216\u7cfb\u7d71\u8a2d\u5b9a\u95dc\u9589\u300c\u81ea\u52d5\u8033\u90e8\u5075\u6e2c\uff0f\u53d6\u4e0b\u66ab\u505c\u300d\u3002":"Eine Webseite kann die Trageerkennung des Kopfh\u00f6rers nicht ausschalten. Pausiert der Ton beim Herausnehmen eines Ohrh\u00f6rers, deaktiviere die automatische Ohrerkennung bzw. Autopause in den Kopfh\u00f6rer- oder Systemeinstellungen.","\u7121\u6cd5\u81ea\u52d5\u6062\u5fa9\u8072\u97f3\uff0c\u8acb\u78ba\u8a8d\u8033\u6a5f\u7684\u81ea\u52d5\u66ab\u505c\u8a2d\u5b9a\uff0c\u4e26\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002":"Audio konnte nicht automatisch fortgesetzt werden. Pr\u00fcfe die Autopause-Einstellung des Kopfh\u00f6rers und aktiviere den lokalen Ton erneut.","\u7bc0\u62cd\u5668 \u2192 \u64ad\u653e\u8207\u5207\u6b4c\u6309\u9215":"Metronom \u2192 Wiedergabe und Songwechsel","\u653e\u5927\u5f8c\u4fdd\u7559 BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u6309\u9215\u3001\u6e2c\u901f\u3001\u76ee\u524d\u6b4c\u540d\u8207\u623f\u9593\u50b3\u8a71\u3002\u97f3\u7b26\u7d30\u5206\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\uff1b\u518d\u6309\u65b9\u6846\u5716\u793a\u6216 F \u53ef\u9084\u539f\uff0c\u4e0d\u5f71\u97ff\u64ad\u653e\u3002":"Die B\u00fchnenansicht zeigt BPM mit Plus/Minus-Tasten, kompakte Schlagfelder, Wiedergabe, gr\u00f6\u00dfere Tasten f\u00fcr den vorherigen und n\u00e4chsten Song, Tap-Tempo, den aktuellen Songtitel und Live-Talk im Raum. Unterteilung und Lautst\u00e4rke stellst du in der normalen Ansicht ein. Mit dem Rahmensymbol oder F kehrst du ohne Wiedergabe\u00e4nderung zur\u00fcck.","\u65b9\u6846\u5716\u793a\u958b\u555f\u73fe\u5834\u653e\u5927\u6a21\u5f0f\uff1a\u986f\u793a BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u5207\u6b4c\u6309\u9215\u8207\u6e2c\u901f\u3002\u50c5\u986f\u793a\u76ee\u524d\u6b4c\u540d\uff0c\u4e26\u4fdd\u7559\u623f\u9593\u50b3\u8a71\uff1b\u97f3\u7b26\u7d30\u5206\u3001\u62cd\u865f\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\u3002":"Das Rahmensymbol \u00f6ffnet die B\u00fchnenansicht mit BPM und Plus/Minus-Tasten, kompakten Schlagfeldern, Wiedergabe, gr\u00f6\u00dferen Songwechsel-Tasten und Tap-Tempo. Es wird nur der aktuelle Songtitel angezeigt; Live-Talk im Raum bleibt verf\u00fcgbar. Unterteilung, Taktart und Lautst\u00e4rke \u00e4nderst du in der normalen Ansicht.","\u4e0a\u6392\u5169\u500b\u5927\u5716\u793a\u5207\u63db\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\uff0c\u4e0b\u65b9\u4f9d\u5e8f\u70ba\u958b\u59cb\uff0f\u505c\u6b62\u8207\u9ede\u6309\u6e2c\u901f\u3002\u9023\u9ede\u6e2c\u901f\u81f3\u5c11\u5169\u6b21\uff0c\u5373\u53ef\u4f30\u7b97 BPM\u3002":"Die beiden gro\u00dfen Symbole oben wechseln zum vorherigen oder n\u00e4chsten Song. Darunter haben Start/Stopp und Tap-Tempo jeweils eine eigene Zeile. Tippe mindestens zweimal, um dein Tempo zu bestimmen."});
 const KEY='tempolive.ui-language.v1';
 let lang='zh-Hant';try{const saved=localStorage.getItem(KEY);if(saved==='en'||saved==='de')lang=saved;}catch(e){}
 const rows=new Set(),byNode=new WeakMap(),mounted=new WeakSet(),documents=new Set(),listeners=new Set(),untranslated=new Set();
 let changes=0,pruneQueued=false;
 const hasHan=s=>/[\u3400-\u9fff]/.test(s);
 const replacements=Object.entries(dictionary).filter(([s])=>s.length>=2&&!s.includes('${')).sort((a,b)=>b[0].length-a[0].length);
 const patternKeys=replacements.map(([s])=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
 const combined=new RegExp(patternKeys.join('|'),'g');
 const numberRules=[
  [/^(\d\d:\d\d) \u00b7 \u7b2c (\d+) \u5c0f\u7bc0$/,(_,clock,n)=>`${clock} \u00b7 Bar ${n}`],
  [/^\u7b2c (\d+) \u62cd\uff1a(.+)\uff0c\u9ede\u9078\u5207\u63db$/,(_,n,s)=>`Beat ${n}: ${t(s,'en')}. Select to change.`],
  [/^\u9810\u5099 (\d+) \/ (\d+) \u5c0f\u7bc0$/,(_,n,total)=>`Count-in ${n} / ${total} bars`],
  [/^\u5c07\u65bc ([\d.]+) \u79d2\u5f8c\u958b\u59cb$/,(_,n)=>`Starts in ${n} s`],
  [/^\u5c07\u65bc ([\d.]+) \u79d2\u5f8c\u505c\u6b62$/,(_,n)=>`Stops in ${n} s`],
  [/^(\d+) \u4eba\u5728\u623f\u9593$/,(_,n)=>`${n} ${n==='1'?'person':'people'} in the room`],
  [/^(\d+) \u4f4d\u5718\u54e1$/,(_,n)=>`${n} ${n==='1'?'bandmate':'bandmates'}`],
  [/^\u5269\u9918 (\d+) \u6b21\u6a5f\u6703$/,(_,n)=>`${n} ${n==='1'?'life':'lives'} remaining`],
  [/^\u7b2c (\d+) \u95dc$/,(_,n)=>`Level ${n}`],
  [/^\u6e96\u78ba\u7387: ([\d.]+)%$/,(_,n)=>`Accuracy: ${n}%`],
  [/^([\d.]+)% \u5931\u6557$/,(_,n)=>`${n}% | Miss`],
  [/^([\d.]+)% \u5b8c\u7f8e!$/,(_,n)=>`${n}% | Perfect!`],
  [/^\u78ba\u5b9a\u522a\u9664\u300c([\s\S]*)\u300d\uff1f$/,(_,name)=>`Delete "${name}"?`],
  [/^\u532f\u5165 (\d+) \u9996\u6b4c\u66f2\uff0c\u4e26\u53d6\u4ee3\u6b64\u700f\u89bd\u5668\u539f\u6709\u6b4c\u55ae\uff1f\u539f\u6b4c\u55ae\u8acb\u5148\u532f\u51fa\u5099\u4efd\u3002$/,(_,n)=>`Import ${n} ${n==='1'?'song':'songs'} and replace this browser's setlist? Export the current setlist first.`],
  [/^\u5df2\u532f\u5165 (\d+) \u9996\u6b4c\u66f2\u3002$/,(_,n)=>`Imported ${n} ${n==='1'?'song':'songs'}.`]
 ];
/* v2.1.3 German text only. Musical values, user data and transport are untouched.
   Terminology: Taktart, Unterteilung, Einzaehlen, Viertel-/Achtel-/Sechzehntelnote.
   The dictionary is bundled locally: no runtime translation service. */
const deReplacements=Object.keys(german).filter(s=>s.length>=2&&!s.includes('${')).sort((a,b)=>b.length-a.length);
const deCombined=new RegExp(deReplacements.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
const deNumber=n=>String(n).replace('.',',');
const germanRules=[
 [/^(\d\d:\d\d) \u00b7 \u7b2c (\d+) \u5c0f\u7bc0$/,(_,clock,n)=>`${clock} \u00b7 Takt ${n}`],
 [/^\u7b2c (\d+) \u62cd\uff1a(.+)\uff0c\u9ede\u9078\u5207\u63db$/,(_,n,s)=>`Z\u00e4hlzeit ${n}: ${t(s,'de')}. Zum \u00c4ndern antippen.`],
 [/^\u9810\u5099 (\d+) \/ (\d+) \u5c0f\u7bc0$/,(_,n,total)=>`Einz\u00e4hlen: Takt ${n} / ${total}`],
 [/^\u5c07\u65bc ([\d.]+) \u79d2\u5f8c\u958b\u59cb$/,(_,n)=>`Start in ${deNumber(n)} s`],
 [/^\u5c07\u65bc ([\d.]+) \u79d2\u5f8c\u505c\u6b62$/,(_,n)=>`Stopp in ${deNumber(n)} s`],
 [/^(\d+) \u4eba\u5728\u623f\u9593$/,(_,n)=>`${n} ${n==='1'?'Person':'Personen'} im Raum`],
 [/^(\d+) \u4f4d\u5718\u54e1$/,(_,n)=>`${n} ${n==='1'?'Bandmitglied':'Bandmitglieder'}`],
 [/^\u5269\u9918 (\d+) \u6b21\u6a5f\u6703$/,(_,n)=>`Noch ${n} ${n==='1'?'Versuch':'Versuche'}`],
 [/^\u7b2c (\d+) \u95dc$/,(_,n)=>`Stufe ${n}`],
 [/^\u6e96\u78ba\u7387: ([\d.]+)%$/,(_,n)=>`Genauigkeit: ${deNumber(n)}%`],
 [/^([\d.]+)% \u5931\u6557$/,(_,n)=>`${deNumber(n)}% | Nicht bestanden`],
 [/^([\d.]+)% \u5b8c\u7f8e!$/,(_,n)=>`${deNumber(n)}% | Perfekt!`],
 [/^\u78ba\u5b9a\u522a\u9664\u300c([\s\S]*)\u300d\uff1f$/,(_,name)=>`\u201e${name}\u201c l\u00f6schen?`],
 [/^\u532f\u5165 (\d+) \u9996\u6b4c\u66f2\uff0c\u4e26\u53d6\u4ee3\u6b64\u700f\u89bd\u5668\u539f\u6709\u6b4c\u55ae\uff1f\u539f\u6b4c\u55ae\u8acb\u5148\u532f\u51fa\u5099\u4efd\u3002$/,(_,n)=>`${n} ${n==='1'?'Song':'Songs'} importieren und die bisherige Setlist ersetzen? Exportiere sie vorher als Sicherung.`],
 [/^\u5df2\u532f\u5165 (\d+) \u9996\u6b4c\u66f2\u3002$/,(_,n)=>`${n} ${n==='1'?'Song':'Songs'} importiert.`]
];
function germanText(s){
 if(Object.prototype.hasOwnProperty.call(german,s))return german[s];
 const trimmed=s.trim();if(Object.prototype.hasOwnProperty.call(german,trimmed))return s.slice(0,s.indexOf(trimmed))+german[trimmed]+s.slice(s.indexOf(trimmed)+trimmed.length);
 for(const [re,fn] of germanRules)if(re.test(s))return s.replace(re,fn);
 const out=s.replace(deCombined,k=>german[k]).replace(/\uff08/g,' (').replace(/\uff09/g,')').replace(/\uff1a/g,': ').replace(/\uff0c/g,', ').replace(/\u3002/g,'.').replace(/\u2026/g,'...').replace(/\uff5c/g,' | ').replace(/\u300c/g,'\u201e').replace(/\u300d/g,'\u201c');
 if(hasHan(out))untranslated.add('de: '+s);return out;
}

 function t(value,language=lang){
  const s=String(value??'');if(!hasHan(s))return s;if(language==='de')return germanText(s);if(language!=='en')return s;
  if(Object.prototype.hasOwnProperty.call(dictionary,s))return dictionary[s];
  const trimmed=s.trim();if(Object.prototype.hasOwnProperty.call(dictionary,trimmed))return s.slice(0,s.indexOf(trimmed))+dictionary[trimmed]+s.slice(s.indexOf(trimmed)+trimmed.length);
  for(const [re,fn] of numberRules)if(re.test(s))return s.replace(re,fn);
  const out=s.replace(combined,key=>dictionary[key]).replace(/\uff08/g,' (').replace(/\uff09/g,')').replace(/\uff1a/g,': ').replace(/\uff0c/g,', ').replace(/\u3002/g,'.').replace(/\u2026/g,'...').replace(/\uff5c/g,' | ').replace(/\u300c/g,'"').replace(/\u300d/g,'"');
  if(hasHan(out))untranslated.add(s);return out;
 }
 function write(row){
  let value;try{value=String(row.get()??'');}catch(e){return;}
  if(row.type==='text'){if(row.node.nodeValue!==value)row.node.nodeValue=value;}
  else if(row.type==='content'){if(row.node.textContent!==value)row.node.textContent=value;}
  else if(row.node.getAttribute(row.type)!==value)row.node.setAttribute(row.type,value);
 }
 function remember(node,type,get,source){
  let map=byNode.get(node);if(!map){map=new Map();byNode.set(node,map);}
  let row=map.get(type);
  if(row){row.get=get;row.source=source;}else{row={node,type,get,source};map.set(type,row);rows.add(row);}
  write(row);
  if(++changes%256===0&&!pruneQueued){pruneQueued=true;queueMicrotask(()=>{pruneQueued=false;for(const r of rows)if(!r.node.isConnected){rows.delete(r);byNode.get(r.node)?.delete(r.type);}});}
  return node;
 }
 function set(node,value){const source=String(value??'');node.dataset.i18nDynamic='';return remember(node,'content',()=>t(source),source);}
 function bind(node,get){node.dataset.i18nDynamic='';return remember(node,'content',get,null);}
 function attr(node,key,value){const source=String(value??'');return remember(node,key,()=>lang!=='zh-Hant'&&key==='aria-label'&&source==='\u95dc\u9589'?(lang==='de'?'Schlie\u00dfen':'Close'):t(source),source);}
 function bindAttr(node,key,get){return remember(node,key,get,null);}
 function option(text,value){const n=new Option('',value);if(typeof text==='function')bind(n,text);else set(n,text);return n;}
 function mount(doc){
  documents.add(doc);doc.documentElement.lang=lang;
  const walker=doc.createTreeWalker(doc.documentElement,NodeFilter.SHOW_TEXT);let n;
  while(n=walker.nextNode()){
   if(mounted.has(n)||n.parentElement?.closest('script,style,template,[data-i18n-dynamic]'))continue;
   mounted.add(n);const source=n.nodeValue;if(!hasHan(source))continue;
   if(n.parentElement?.tagName==='OPTION'&&!n.parentElement.hasAttribute('value'))n.parentElement.value=n.parentElement.textContent;
   remember(n,'text',()=>t(source),source);
  }
  for(const node of doc.querySelectorAll('[title],[aria-label],[placeholder],[aria-valuetext]')){
   for(const key of ['title','aria-label','placeholder','aria-valuetext']){
    if(!node.hasAttribute(key)||byNode.get(node)?.has(key))continue;
    const value=node.getAttribute(key);if(hasHan(value))attr(node,key,value);
   }
  }
 }
 const instruments={"\u92fc\u7434": "Piano", "\u9375\u76e4": "Keyboard", "\u6728\u5409\u4ed6": "Acoustic guitar", "\u96fb\u5409\u4ed6": "Electric guitar", "\u8c9d\u65af": "Bass", "\u9f13": "Drums", "\u4e3b\u9818": "Worship leader", "\u6b4c\u5531": "Vocals", "\u97f3\u63a7": "Sound engineer"};
 const germanInstruments=Object.fromEntries(Object.keys(instruments).map(key=>[key,german[key]]));
 function personLabel(value,language=lang){
  const s=String(value??'');if(language==='zh-Hant')return s;const table=language==='de'?germanInstruments:instruments;
  if(Object.prototype.hasOwnProperty.call(table,s))return table[s];
  const m=s.match(/^(.*) (\d+)$/);return m&&Object.prototype.hasOwnProperty.call(table,m[1])?table[m[1]]+' '+m[2]:s;
 }
 function instrument(value,language=lang){const s=String(value??'');const table=language==='de'?germanInstruments:instruments;return language!=='zh-Hant'&&Object.prototype.hasOwnProperty.call(table,s)?table[s]:s;}
 function person(p,language=lang){
  const name=String(p?.name||'');if(language==='zh-Hant')return name;const table=language==='de'?germanInstruments:instruments;
  if(typeof p?.instrument==='string'&&p.instrument){
   const base=p.instrument;if(!Object.prototype.hasOwnProperty.call(table,base))return name;
   if(name===base)return table[base];
   if(name.startsWith(base+' ')&&/^\d+$/.test(name.slice(base.length+1)))return table[base]+name.slice(base.length);
   return name;
  }
  return personLabel(name,language);
 }
 function song(s,language=lang){return s?.sample&&Object.values(sampleTitles).includes(s.name)?t(s.name,language):String(s?.name||'');}
 const sampleTitles={'sample-1':'\u958b\u5834\u8b9a\u7f8e','sample-2':'\u5b89\u975c\u656c\u62dc','sample-3':'\u56de\u61c9\u8a69\u6b4c'};
 function refresh(){for(const doc of documents)doc.documentElement.lang=lang;for(const row of rows)if(row.node.isConnected)write(row);updateToggle();}
/* Ordered language picker: zh-Hant (default), English, Deutsch (NEW).
   It changes UI language only. No rhythm, audio, room or theme API is called. */
const languageItems=Object.freeze([
 {id:'zh-Hant',code:'TW',label:'\u7e41\u9ad4\u4e2d\u6587',htmlLang:'zh-Hant'},
 {id:'en',code:'EN',label:'English',htmlLang:'en'},
 {id:'de',code:'DE',label:'Deutsch',htmlLang:'de',fresh:true}
]);
const languageCode=()=>languageItems.find(x=>x.id===lang).code;
const languageLabel=()=>lang==='de'?'Sprache w\u00e4hlen':lang==='en'?'Choose language':'\u9078\u64c7\u8a9e\u8a00';
let languageMenu=null,languageAnchor=null;
function ensureLanguageMenu(){
 if(languageMenu)return languageMenu;
 languageMenu=document.createElement('div');languageMenu.id='languageMenu';languageMenu.className='language-menu';languageMenu.hidden=true;languageMenu.dataset.i18nDynamic='';languageMenu.setAttribute('role','menu');languageMenu.setAttribute('popover','manual');
 for(const locale of languageItems){
  const button=document.createElement('button');button.type='button';button.dataset.language=locale.id;button.setAttribute('role','menuitemradio');button.setAttribute('tabindex','-1');button.lang=locale.htmlLang;
  const code=document.createElement('span');code.className='language-option-code';code.textContent=locale.code;
  const name=document.createElement('span');name.className='language-option-name';name.textContent=locale.label;
  button.append(code,name);
  if(locale.fresh){const badge=document.createElement('span');badge.className='language-option-new';badge.textContent='NEW';badge.lang='en';badge.setAttribute('aria-hidden','true');button.append(badge);button.setAttribute('aria-label','Deutsch, neue Sprache');}
  const check=document.createElement('span');check.className='language-option-check';check.textContent='\u2713';check.setAttribute('aria-hidden','true');button.append(check);
  button.addEventListener('click',()=>{const anchor=languageAnchor;closeLanguageMenu(false);change(locale.id);anchor?.focus({preventScroll:true});});languageMenu.append(button);
 }
 document.body.append(languageMenu);return languageMenu;
}
function placeLanguageMenu(){
 if(!languageMenu||languageMenu.hidden||!languageAnchor)return;
 const r=languageAnchor.getBoundingClientRect();const w=Math.min(236,window.innerWidth-24),h=176;
 languageMenu.style.width=w+'px';languageMenu.style.left=Math.max(12,Math.min(window.innerWidth-w-12,r.right-w))+'px';
 const y=r.bottom+8+h<=window.innerHeight-12?r.bottom+8:Math.max(12,r.top-h-8);
 languageMenu.style.top=y+'px';
}
function closeLanguageMenu(returnFocus=true){
 if(!languageMenu||languageMenu.hidden)return;
 try{if(languageMenu.matches(':popover-open'))languageMenu.hidePopover();}catch(e){}
 languageMenu.hidden=true;const anchor=languageAnchor;languageAnchor=null;anchor?.setAttribute('aria-expanded','false');
 if(returnFocus&&anchor?.isConnected&&!anchor.closest('[hidden]'))anchor.focus({preventScroll:true});
}
function openLanguageMenu(anchor=document.getElementById('languageBtn')){
 if(!anchor)return;
 if(languageMenu&&!languageMenu.hidden&&languageAnchor===anchor){closeLanguageMenu();return;}
 closeLanguageMenu(false);const menu=ensureLanguageMenu();languageAnchor=anchor;
 // Keep tutorial keyboard focus inside its own dialog. Its main interface is inert.
 const coach=anchor.closest('#tourCoach');(coach||document.body).append(menu);
 menu.hidden=false;menu.setAttribute('aria-label',languageLabel());anchor.setAttribute('aria-expanded','true');
 for(const button of menu.querySelectorAll('[data-language]'))button.setAttribute('aria-checked',String(button.dataset.language===lang));
 placeLanguageMenu();try{menu.showPopover?.();}catch(e){}
 menu.querySelector(`[data-language="${lang}"]`)?.focus({preventScroll:true});
}
function updateToggle(){
 for(const id of ['languageBtn','tourLang']){
  const b=document.getElementById(id);if(!b)continue;
  const code=b.querySelector('.language-code');if(code){code.textContent=languageCode();code.lang='en';}else b.textContent=languageCode();
  b.title=languageLabel();b.setAttribute('aria-label',languageLabel());b.removeAttribute('aria-pressed');b.setAttribute('aria-haspopup','menu');b.setAttribute('aria-controls','languageMenu');if(b!==languageAnchor)b.setAttribute('aria-expanded','false');b.classList.toggle('language-is-de',lang==='de');
 }
 if(languageMenu){languageMenu.setAttribute('aria-label',languageLabel());for(const b of languageMenu.querySelectorAll('[data-language]'))b.setAttribute('aria-checked',String(b.dataset.language===lang));}
}
window.addEventListener('keydown',event=>{
 if(!languageMenu||languageMenu.hidden)return;
 // Installed before the tutorial's capture handler; language arrows never
 // change tempo or advance a tutorial step. Native Enter/Space still activates.
 event.stopImmediatePropagation();const buttons=[...languageMenu.querySelectorAll('button')],i=buttons.indexOf(document.activeElement);
 if(event.key==='Escape'){event.preventDefault();closeLanguageMenu();return;}
 if(event.key==='Tab'){closeLanguageMenu(true);return;}
 if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
  event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(i+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;buttons[next]?.focus();
 }
},true);
document.addEventListener('pointerdown',event=>{if(languageMenu&&!languageMenu.hidden&&!languageMenu.contains(event.target)&&!languageAnchor?.contains(event.target))closeLanguageMenu(false);},true);
window.addEventListener('resize',placeLanguageMenu);
window.addEventListener('scroll',()=>{if(languageMenu&&!languageMenu.hidden)closeLanguageMenu(false);},true);
window.addEventListener('pagehide',()=>closeLanguageMenu(false));

 function change(next,persist=true){
  const chosen=next==='de'?'de':next==='en'?'en':'zh-Hant';if(chosen===lang){refresh();return;}
  lang=chosen;document.documentElement.lang=lang;
  if(persist)try{localStorage.setItem(KEY,lang);}catch(e){}
  refresh();for(const fn of listeners)try{fn(lang);}catch(e){console.warn('Language refresh failed',e);}refresh();
 }
 const api=Object.freeze({t,set,bind,attr,bindAttr,option,mount,refresh,languageCode,languageLabel,openLanguageMenu,personLabel,person,instrument,song,get lang(){return lang;},setLanguage:change,onChange:fn=>{listeners.add(fn);return()=>listeners.delete(fn);},snapshot:()=>({language:lang,version:'2.1.3-trilingual',untranslated:[...untranslated]})});
 window.I18N=window.TempoliveI18n=api;
 document.documentElement.lang=lang;
 // v2.1.14: the app is mounted after the entry document has completed loading.
 // Preserve the original DOM-ready ordering without dispatching a fake event.
 const initializeDocument=()=>{mount(document);const button=document.getElementById('languageBtn');if(button)button.addEventListener('click',()=>openLanguageMenu(button));refresh();};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initializeDocument,{once:true});
 else queueMicrotask(initializeDocument);
})();

/* END tempolive-i18n */

;
/* BEGIN original-script-1 */

'use strict';
/* === CENTRAL SETTINGS / TEXT / SAMPLE SONGS ===
   Single-device controls remain offline. v1.1 changes only room networking and
   room codes. Native MQTT 3.1.1 over WSS replaces PeerJS/WebRTC: no CDN or NAT
   traversal. This PUBLIC endpoint is for testing, NOT sensitive/production data.
   A dedicated relay may be configured here by an administrator. All devices
   must use the same endpoint/namespace. Never embed private long-lived secrets.
   Provider docs: https://www.shiftr.io/docs/manuals/javascript/
   https://www.shiftr.io/docs/broker/mqtt-interface/
*/
const CONFIG = Object.freeze({
  version: 1, storageKey: 'tw.metronome.v1', minBpm: 40, maxBpm: 300,
  meters: ['2/4','3/4','4/4','5/4','6/8','7/8','12/8'], maxSongs: 200,
  roomPrefix: 'tw-beat-v2-', roomLead: 1600, maxPeople: 12, syncRefreshMs: 60000,
  relay: {url:'wss://public.cloud.shiftr.io',username:'public',password:'public',namespace:'tw-metronome-202609-v2',connectTimeout:8500,requestTimeout:7000,maxReconnects:2}
});
const TEXT = Object.freeze({
  free:'自由練習', solo:'單人模式', host:'主持人', guest:'參與者',
  start:'開始節拍', stop:'停止播放', muted:'本機靜音', unmute:'恢復收聽',
  notStarted:'尚未開始', playing:'播放中', waiting:'等待開始', countIn:'預備拍',
  ready:'已就緒', syncing:'校時中', audioOff:'待啟用聲音', silent:'已靜音',
  sample1:'開場讚美', sample2:'安靜敬拜', sample3:'回應詩歌',
  sample:'範例', saved:'已儲存歌曲', nextBar:'變更將於小節交界套用',
  readyHint:'準備好了，從第一拍開始。',
  outputDefault:'系統預設（喇叭／耳機）',
  peerFailed:'無法連上中繼服務。請嘗試更換 Wi-Fi 或手機熱點，再按重試。公開服務也可能暫時無法使用。',
  lost:'與主持人的連線中斷，已停止播放。請重新加入房間。',
  strong:'重音', normal:'一般', rest:'靜音'
});
const $ = id => document.getElementById(id);
const clamp = (v,min,max) => Math.min(max,Math.max(min,v));
const wallNow = () => performance.timeOrigin + performance.now();
const clone = x => JSON.parse(JSON.stringify(x));
const cleanText = (v,n=40) => String(v??'').replace(/[\u0000-\u001f\u007f]/g,'').trim().slice(0,n);
function id(){return crypto.randomUUID ? crypto.randomUUID() : [...crypto.getRandomValues(new Uint32Array(3))].map(x=>x.toString(16)).join('');}
function defaultAccents(meter){const [n,d]=meter.split('/').map(Number);return Array.from({length:n},(_,i)=>i===0||(d===8&&n%3===0&&i%3===0)?2:1);}
function validSettings(x,strict=false){
  if(!x||typeof x!=='object')throw Error('Invalid settings');
  const bpm=Number(x.bpm),note=Number(x.note),countIn=Number(x.countIn??0);
  if(!Number.isFinite(bpm)||!CONFIG.meters.includes(x.meter)||![4,8,16].includes(note)||![0,1,2].includes(countIn)||(strict&&(bpm<40||bpm>300)))throw Error('Invalid rhythm');
  const n=Number(x.meter.split('/')[0]);
  const accents=Array.isArray(x.accents)&&x.accents.length===n&&x.accents.every(v=>[0,1,2].includes(v))?[...x.accents]:defaultAccents(x.meter);
  return {bpm:clamp(Math.round(bpm),40,300),meter:x.meter,note,countIn,accents};
}
const DEFAULT_SETTINGS={bpm:120,meter:'4/4',note:4,countIn:0,accents:[2,1,1,1]};
const SAMPLE_SONGS=[
  {id:'sample-1',name:TEXT.sample1,sample:true,settings:{...DEFAULT_SETTINGS,note:8}},
  {id:'sample-2',name:TEXT.sample2,sample:true,settings:{...DEFAULT_SETTINGS,bpm:72}},
  {id:'sample-3',name:TEXT.sample3,sample:true,settings:{bpm:96,meter:'4/4',note:8,countIn:0,accents:[2,1,1,1]}}
];
/* v1.17: keep the LIVE beat accents when changing songs/meters.
   Song tempo, time signature, subdivision and count-in still come from the song.
   Saved song records are never mass-rewritten. This small local preference is
   stored beside them, NOT in shared room packets or the audio engine.
   Uniform accents extend to every beat; mixed patterns keep each beat index.
   Hidden beat positions survive shorter meters; never-seen beats start normal.
*/
const ACCENT_CARRY_LIMIT=Math.max(...CONFIG.meters.map(m=>Number(m.split('/')[0])));
function isAccentList(value){
  return Array.isArray(value)&&value.length>0&&value.length<=ACCENT_CARRY_LIMIT&&value.every(level=>level===0||level===1||level===2);
}
function accentCarryFrom(accents){
  const beats=isAccentList(accents)?[...accents]:[2,1,1,1];
  return {uniform:beats.every(level=>level===beats[0])?beats[0]:null,beats};
}
function fitAccentCarry(meter,carry){
  if(!CONFIG.meters.includes(meter))throw Error('Invalid meter');
  const count=Number(meter.split('/')[0]);
  return Array.from({length:count},(_,i)=>carry.uniform!==null?carry.uniform:(carry.beats[i]??1));
}
function restoreAccentCarry(value,settings){
  const fallback=accentCarryFrom(settings.accents);
  if(!value||typeof value!=='object'||!isAccentList(value.beats)||![null,0,1,2].includes(value.uniform))return fallback;
  const candidate={uniform:value.uniform,beats:[...value.beats]};
  const visible=fitAccentCarry(settings.meter,candidate);
  // A malformed/stale preference must never replace valid restored settings.
  return visible.every((level,i)=>level===settings.accents[i])?candidate:fallback;
}
function liveAccentsFor(meter){return fitAccentCarry(meter,state.accentCarry);}
function rememberLiveAccents(accents){
  if(!isAccentList(accents))return;
  const explicit=accentCarryFrom(accents);
  if(explicit.uniform!==null){state.accentCarry=explicit;return;}
  const before=state.accentCarry;
  const count=Math.max(before.beats.length,accents.length);
  const beats=Array.from({length:count},(_,i)=>before.uniform!==null?before.uniform:(before.beats[i]??1));
  accents.forEach((level,i)=>{beats[i]=level;});
  state.accentCarry={uniform:null,beats};
}

let storageProblem=false;

/* AUDIO CATALOG v1.4: five existing timbres, two output presets.
   boost intentionally uses EVERY numeric parameter of the old stage preset.
   This changes the labels/choices, not the maximum audio output or synthesis. */
const AUDIO_TONES=Object.freeze({
  wood:{label:'木塊',ms:70,description:'溫潤的木質敲擊，起音清楚、聲尾短促。'},
  digital:{label:'清晰電子',ms:65,description:'清晰俐落的電子音，強弱拍以高低音區分。'},
  cowbell:{label:'牛鈴',ms:105,description:'厚實的金屬共鳴，拍點明確、辨識度高。'},
  bell:{label:'短鈴',ms:120,description:'明亮的短鈴聲，帶金屬層次，不使用長混響。'},
  marimba:{label:'馬林巴',ms:110,description:'圓潤的木質共鳴，有音高與敲擊層次。'}
});
const AUDIO_POWER=Object.freeze({
  standard:{label:'標準',gain:1.0,length:1.0,hold:.06,decay:4.0,normal:.84,sub:.68,description:'較自然的強弱與衰減，適合安靜練習。'},
  boost:{label:'加強',gain:1.55,length:1.35,hold:.19,decay:1.85,normal:.97,sub:.86,description:'較高的發聲密度，弱拍與細分音更明顯。'}
});
const hasOwn=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);

const initial={settings:clone(DEFAULT_SETTINGS),accentCarry:accentCarryFrom(DEFAULT_SETTINGS.accents),songs:clone(SAMPLE_SONGS),activeId:null,volume:70,mute:false,tone:'marimba',audioPower:'boost',audioUiVersion:14,latency:0,autoLatency:true,keepAwake:true,continueAudio:true,theme:'light',screenFlash:false,name:''};
let state=clone(initial);
try{
  const saved=JSON.parse(localStorage.getItem(CONFIG.storageKey)||'null');
  if(saved&&saved.version===1){
    state.settings=validSettings(saved.settings);
    state.accentCarry=restoreAccentCarry(saved.accentCarry,state.settings);
    if(Array.isArray(saved.songs)&&saved.songs.length<=CONFIG.maxSongs){state.songs=saved.songs.map(s=>({id:cleanText(s.id,64)||id(),name:cleanText(s.name)||TEXT.free,sample:!!s.sample,settings:validSettings(s.settings)}));}
    state.activeId=state.songs.some(s=>s.id===saved.activeId)?saved.activeId:null;
    state.volume=clamp(Number(saved.volume)||0,0,100);
    // Apply the requested marimba default once when upgrading. Later choices persist.
    state.tone=saved.audioUiVersion===14&&hasOwn(AUDIO_TONES,saved.tone)?saved.tone:'marimba';
    state.audioPower=saved.audioPower==='standard'?'standard':'boost';
    state.latency=clamp(Number(saved.latency)||0,-300,300);state.autoLatency=saved.autoLatency!==false;state.keepAwake=saved.keepAwake!==false;state.continueAudio=saved.continueAudio!==false;
    state.theme=saved.theme==='dark'?'dark':'light';state.screenFlash=saved.screenFlash===true;state.name=cleanText(saved.name,16);
  }
}catch(e){storageProblem=true;}
/* v1.16 persistence hardening. Reuse tw.metronome.v1 / version:1 so existing
   stored song names, rhythms, order and preferences remain readable.
   localStorage is browser/origin-scoped; file:// behavior is browser-dependent.
   Never claim durable storage when the browser rejects writes. */
let saveTimer,localSaveDirty=false,localSaveFailureNotified=false;
const localSaveStatus={ok:null,lastSavedAt:null,error:''};
function flushLocal({quiet=false}={}){
  clearTimeout(saveTimer);saveTimer=undefined;
  if(!localSaveDirty)return localSaveStatus.ok!==false;
  try{
    localStorage.setItem(CONFIG.storageKey,JSON.stringify({...state,version:1,mute:false}));
    localSaveDirty=false;localSaveFailureNotified=false;
    localSaveStatus.ok=true;localSaveStatus.lastSavedAt=Date.now();localSaveStatus.error='';
    return true;
  }catch(error){
    localSaveStatus.ok=false;localSaveStatus.error=error?.name||'StorageError';
    if(!quiet&&!localSaveFailureNotified){
      localSaveFailureNotified=true;
      toast('\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8cc7\u6599\uff0c\u8acb\u4f7f\u7528\u300c\u532f\u51fa\u6b4c\u55ae\u300d\u5099\u4efd\u3002');
    }
    return false;
  }
}
function saveLocal(immediate=false){
  localSaveDirty=true;clearTimeout(saveTimer);
  if(immediate)return flushLocal();
  saveTimer=setTimeout(()=>flushLocal(),180);
}
document.addEventListener('visibilitychange',()=>{
  if(document.hidden)flushLocal({quiet:true});
  else if(localSaveDirty)flushLocal();
});
document.addEventListener('freeze',()=>flushLocal({quiet:true}));
let toastTimer;
function toast(message){
  if($('settingsDialog').open){
    $('toast').classList.remove('visible');
    I18N.set($('settingsNotice'),message);$('settingsNotice').hidden=false;
    clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('settingsNotice').hidden=true,4600);return;
  }
  $('settingsNotice').hidden=true;I18N.set($('toast'),message);$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),4600);}
function setIcon(el,name){const use=el.querySelector('use');if(use)use.setAttribute('href','#i-'+name);}
function titleNow(){return state.songs.find(s=>s.id===state.activeId)?.name||TEXT.free;}
function metrics(settings){const [n,d]=settings.meter.split('/').map(Number),beatQ=4/d,noteQ=4/settings.note,stepQ=Math.min(beatQ,noteQ);return {n,d,beatQ,noteQ,stepQ,stepMs:60000/settings.bpm*stepQ,barMs:60000/settings.bpm*n*beatQ,ticks:Math.round(n*beatQ/stepQ)};}
let rev=1;
let events=[{rev:1,at:0,anchor:0,playing:false,settings:clone(state.settings),title:titleNow(),countIn:0,barBase:0,runAt:0}];
function currentEvent(t=hostNow()){let e=events[0];for(const ev of events){if(ev.at<=t)e=ev;else break;}return e;}
function desiredEvent(){return events[events.length-1];}
function hostNow(){return wallNow()+(room.role==='guest'?room.offset:0);}

/* === WEB AUDIO ENGINE v1.3: audible body, local power presets, five retained tones ===
   v1.2 peaks were already close to full scale, but the 42-59 ms exponential
   envelope lost most of its energy in its first few milliseconds. Increasing
   peak gain alone cannot fix that. This version uses normalized PCM percussion
   with a shaped body, longer decay, and less deeply attenuated weak beats.
   Each click is cached, scheduled on the SAME audio clock, and shortened at
   high subdivisions so increased body does not turn into a continuous tone.
   A zero-lookahead soft ceiling handles digital peaks; the volume fader is
   AFTER it. This is NOT a hearing protector or a speaker-power amplifier.
   All mobile media routing remains the v1.2 code.
   References: https://www.w3.org/TR/webaudio-1.1/
   https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening
*/
const AUDIO_CONFIG=Object.freeze({maxGain:1,volumeExponent:1,limiterKnee:.82,limiterCeiling:.97,resumeTimeout:3000,bufferPeak:.92,maxBuffers:128,editGuardSeconds:.012});
function audioDeadline(promise,message){
  let timer;
  return Promise.race([Promise.resolve(promise),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error(message)),AUDIO_CONFIG.resumeTimeout);})]).finally(()=>clearTimeout(timer));
}
class AudioEngine{
  constructor(){
    this.gameOutputSuppressed=false;this.gameOutputGate=null;
    this.ctx=null;this.master=null;this.limiter=null;this.entries=new Map();this.voices=new Set();this.worker=null;this.totalScheduled=0;this.dropped=0;this.noise=null;this.presence=null;this.buffers=new Map();this.previewVoices=[];this.levelNoticeShown=false;
    this.sessionMode='system';this.mediaGate=null;this.mediaGateURL=null;this.mediaGateNeeded=false;this.gateHoldUntil=0;this.gatePlayPromise=null;this.resumePromise=null;this.recoverPromise=null;
  }
  configurePlaybackSession(){
    // Feature-detect: do not require this Safari API on Android or desktop.
    try{
      if(navigator.audioSession){
        if(navigator.audioSession.type!=='playback')navigator.audioSession.type='playback';
        if(navigator.audioSession.type==='playback'){this.sessionMode='playback';this.mediaGateNeeded=false;this.mediaGate?.pause();return;}
      }
    }catch(e){/* Restricted embedded browsers may expose, but reject, this API. */}
    const appleMobile=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
    this.mediaGateNeeded=appleMobile;this.sessionMode=appleMobile?'legacy-media':'system';
  }
  createMediaGate(){
    if(this.mediaGate)return;
    // One second of PCM silence. No oscillators, network files or microphone.
    // Do NOT use muted=true or volume=0: older iOS then stays on the ringer path.
    const rate=22050,bytes=rate*2,buffer=new ArrayBuffer(44+bytes),view=new DataView(buffer);
    const text=(offset,value)=>{for(let i=0;i<value.length;i++)view.setUint8(offset+i,value.charCodeAt(i));};
    text(0,'RIFF');view.setUint32(4,36+bytes,true);text(8,'WAVE');text(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,rate,true);view.setUint32(28,rate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);text(36,'data');view.setUint32(40,bytes,true);
    const audio=document.createElement('audio');audio.id='mobilePlaybackGate';audio.hidden=true;audio.setAttribute('aria-hidden','true');audio.setAttribute('playsinline','');audio.setAttribute('webkit-playsinline','');audio.preload='auto';audio.loop=true;audio.muted=false;audio.volume=1;
    audio.disableRemotePlayback=true;this.mediaGateURL=URL.createObjectURL(new Blob([buffer],{type:'audio/wav'}));audio.src=this.mediaGateURL;this.mediaGate=audio;document.body.append(audio);window.TempoliveAudioContinuity?.bindGate(audio);
    audio.addEventListener('pause',()=>{if(desiredEvent().playing||room.role==='guest')renderAudioStatus();});
    audio.addEventListener('playing',()=>{renderAudioStatus();this.schedule();});
  }
  openMediaGate(){
    if(!this.mediaGateNeeded)return Promise.resolve();
    this.createMediaGate();this.gateHoldUntil=wallNow()+1500;
    if(this.gatePlayPromise)return this.gatePlayPromise;
    if(!this.mediaGate.paused)return Promise.resolve();
    let play;
    try{play=this.mediaGate.play();}catch(e){return Promise.reject(e);}
    const pending=audioDeadline(play,'\u8acb\u518d\u9ede\u4e00\u6b21\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\uff0c\u5141\u8a31\u624b\u6a5f\u64ad\u653e\u3002');
    this.gatePlayPromise=pending;
    const clear=()=>{if(this.gatePlayPromise===pending)this.gatePlayPromise=null;};pending.then(clear,clear);return pending;
  }
  isReady(){return !!(this.ctx&&this.ctx.state==='running'&&(!this.mediaGateNeeded||(this.mediaGate&&!this.mediaGate.paused)));}
  closeIdleMediaGate(){
    if(!this.mediaGate||this.mediaGate.paused||wallNow()<this.gateHoldUntil)return;
    // Guests keep their authorized media route ready for remote host starts.
    if(room.role==='guest'||room.role==='connecting'||desiredEvent().playing||currentEvent().playing||this.voices.size)return;
    this.mediaGate.pause();
  }
  stopMediaGate(){this.gateHoldUntil=0;this.mediaGate?.pause();}
  restoreOutput(){
    if(!this.ctx||document.hidden)return;
    this.configurePlaybackSession();
    if(desiredEvent().playing||room.role==='guest')this.ensure().then(()=>{this.invalidate();this.schedule();room.sendLocalStatus();}).catch(()=>renderAudioStatus());
  }
  connectOutput(){
    this.limiter=this.ctx.createWaveShaper();const curve=new Float32Array(16385),knee=AUDIO_CONFIG.limiterKnee,span=AUDIO_CONFIG.limiterCeiling-knee;
    for(let i=0;i<curve.length;i++){const x=i*2/(curve.length-1)-1,abs=Math.abs(x);curve[i]=abs<=knee?x:Math.sign(x)*(knee+span*Math.tanh((abs-knee)/span));}
    this.limiter.curve=curve;this.limiter.oversample='none';
    this.presence=this.ctx.createGain();this.presence.gain.value=AUDIO_POWER[state.audioPower].gain;
    this.presence.connect(this.limiter);this.limiter.connect(this.master);
    // v1.17.1: this gate is transient; state.mute and the stored volume are untouched.
    this.gameOutputGate=this.ctx.createGain();this.gameOutputGate.gain.value=this.gameOutputSuppressed?0:1;
    this.master.connect(this.gameOutputGate);this.gameOutputGate.connect(this.ctx.destination);
  }
  createContext(){
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('此瀏覽器不支援 Web Audio。');
    const ctx=new AC({latencyHint:'interactive'});this.ctx=ctx;this.master=ctx.createGain();this.master.gain.value=0;this.connectOutput();this.setVolume();
    ctx.addEventListener('statechange',()=>{if(this.ctx!==ctx)return;if(ctx.state!=='running')this.stopAll();renderAudioStatus();room.sendLocalStatus();if(ctx.state==='running')this.schedule();});
    window.TempoliveAudioContinuity?.bindContext(ctx);
    if(!this.worker){try{const url=URL.createObjectURL(new Blob(['setInterval(function(){postMessage(1)},25)'],{type:'application/javascript'}));this.worker=new Worker(url);this.worker.onmessage=()=>this.schedule();URL.revokeObjectURL(url);}catch(e){this.worker=setInterval(()=>this.schedule(),25);}}
  }
  async ensure(){
    // Both play() and resume() are invoked in the original user gesture,
    // before the first await. Audio permission never blocks room networking.
    this.configurePlaybackSession();
    if(!this.ctx)this.createContext();
    const mediaReady=this.openMediaGate();
    if(this.ctx.state!=='running'&&!this.resumePromise){
      const pending=audioDeadline(this.ctx.resume(),'\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u653e\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u958b\u59cb\u6216\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\u3002');
      this.resumePromise=pending;const clear=()=>{if(this.resumePromise===pending)this.resumePromise=null;};pending.then(clear,clear);
    }
    try{await Promise.all([mediaReady,this.resumePromise||Promise.resolve()]);}
    catch(e){renderAudioStatus();throw e;}
    if(!this.isReady())throw Error('\u8acb\u518d\u9ede\u4e00\u6b21\u555f\u7528\u8072\u97f3\u3002');
    this.setVolume();this.warnOutputLevel();renderAudioStatus();return this.ctx;
  }
  recover(){
    if(this.recoverPromise)return this.recoverPromise;
    // iOS Safari can leave a context reporting "running" while its output is
    // silent after the page loses foreground. A fresh context is the explicit,
    // user-gesture recovery path; the shared transport state stays untouched.
    this.configurePlaybackSession();this.stopAll();this.cancelPreview();this.entries.clear();
    const old=this.ctx;
    if(old){this.ctx=null;this.master=null;this.limiter=null;this.presence=null;this.buffers.clear();this.resumePromise=null;try{old.close().catch(()=>{});}catch(e){}}
    const pending=this.ensure().then(ctx=>{this.invalidate();this.schedule();room.sendLocalStatus();return ctx;});
    this.recoverPromise=pending;const clear=()=>{if(this.recoverPromise===pending)this.recoverPromise=null;};pending.then(clear,clear);return pending;
  }
  setGameOutputSuppressed(suppressed){
    this.gameOutputSuppressed=!!suppressed;
    if(this.gameOutputSuppressed)window.TempoliveAudioContinuity?.cancel('game');
    if(!this.gameOutputGate||!this.ctx||this.ctx.state==='closed')return;
    const gain=this.gameOutputGate.gain,time=this.ctx.currentTime,target=this.gameOutputSuppressed?0:1;
    const value=gain.value;gain.cancelScheduledValues(time);
    if(this.ctx.state==='running'){gain.setValueAtTime(value,time);gain.linearRampToValueAtTime(target,time+.008);}
    else gain.setValueAtTime(target,time);
  }
  setVolume(){
    if(this.master)this.master.gain.setTargetAtTime(state.mute?0:Math.pow(state.volume/100,AUDIO_CONFIG.volumeExponent),this.ctx.currentTime,.012);
    if(this.presence)this.presence.gain.setTargetAtTime(AUDIO_POWER[state.audioPower].gain,this.ctx.currentTime,.02);
  }
  warnOutputLevel(){
    if(this.levelNoticeShown||state.mute||state.volume<60)return;
    this.levelNoticeShown=true;
    toast('新版發聲更強；耳機請先降低音量，再逐步調整。');
  }
  latencyMs(){return this.ctx&&state.autoLatency?((this.ctx.outputLatency||0)+(this.ctx.baseLatency||0))*1000:0;}
  audioTime(nominal){
    const targetPerf=nominal-(room.role==='guest'?room.offset:0)-performance.timeOrigin+state.latency;
    if(state.autoLatency&&this.ctx.getOutputTimestamp){
      const ts=this.ctx.getOutputTimestamp();
      if(ts.contextTime>0&&ts.performanceTime>0&&Math.abs(performance.now()-ts.performanceTime)<1200){return ts.contextTime+(targetPerf-ts.performanceTime)/1000;}
    }
    return this.ctx.currentTime+(targetPerf-performance.now())/1000-(state.autoLatency?this.latencyMs()/1000:0);
  }

  clickBuffer(tone,accent,spacingMs){
    const profile=AUDIO_POWER[state.audioPower],spec=AUDIO_TONES[tone],rate=this.ctx.sampleRate;
    const safeSpacing=Number.isFinite(spacingMs)&&spacingMs>0?spacingMs:500;
    // The shortest supported interval is 50 ms (300 BPM, sixteenth notes).
    const durationMs=Math.max(12,Math.min(Math.round(spec.ms*profile.length),Math.floor(safeSpacing*.84)));
    const key=[tone,state.audioPower,accent?1:0,durationMs,rate].join(':');
    if(this.buffers.has(key))return this.buffers.get(key);
    const count=Math.max(16,Math.ceil(rate*durationMs/1000)),buffer=this.ctx.createBuffer(1,count,rate),data=buffer.getChannelData(0),window=new Float32Array(count);
    const duration=(count-1)/rate,hold=duration*profile.hold,release=Math.max(.002,duration-hold),tau=2*Math.PI;
    const attack=Math.min(.0015,duration*.06),tail=Math.min(.009,duration*.18);
    let seed=accent?39191:73913,low=0,high=0,sum=0,weight=0;
    const upper=1-Math.exp(-tau*Math.min(6800,rate*.32)/rate),lower=1-Math.exp(-tau*(tone==='hat'?2200:650)/rate);
    const sin=(f,t,p=0)=>f<rate*.43?Math.sin(tau*f*t+p):0;
    const swept=(f,t)=>{const bend=Math.log(.67)/.035,first=Math.min(t,.035);return tau*(f*(Math.exp(bend*first)-1)/bend+Math.max(0,t-.035)*f*.67);};
    for(let i=0;i<count;i++){
      const t=i/rate;seed=(Math.imul(seed,1664525)+1013904223)>>>0;const random=seed/4294967296*2-1;
      high+=upper*(random-high);low+=lower*(random-low);const noise=high-low;
      const hit=accent?1.18:1;let x=0;
      switch(tone){
        case 'wood':{const phase=swept(accent?1480:960,t);x=Math.sin(phase)+.17*Math.sin(phase*2.73)*Math.exp(-t/.018);break;}
        case 'digital':{const f=accent?1760:1175;x=sin(f,t)+.08*sin(f*2,t);break;}
        case 'rim':{const phase=swept(accent?2050:1440,t);x=Math.sin(phase)+.42*noise*Math.exp(-t/.034);break;}
        case 'stage':{const f=accent?2240:1680;x=sin(f,t)+.28*sin(f*2,t)+.15*sin(f*3,t)+.07*sin(f*4,t);break;}
        case 'clave':{const f=accent?2500:1930;x=sin(f,t)+.42*sin(f*1.43,t)*Math.exp(-t/.045)+.20*sin(f*2.11,t)*Math.exp(-t/.017)+.10*noise*Math.exp(-t/.008);break;}
        case 'cowbell':{const f=accent?930:780,g=f*1.484;const square=h=>sin(h,t)+sin(h*3,t)/3+sin(h*5,t)/5+sin(h*7,t)/7;x=.68*square(f)+.62*square(g)*Math.exp(-t/.13);break;}
        case 'rimshot':{const f=accent?2110:1690;x=.58*sin(f,t)*Math.exp(-t/.07)+.22*sin(225*hit,t)*Math.exp(-t/.023)+1.2*noise*Math.exp(-t/.07);break;}
        case 'bell':{const f=accent?1960:1480;x=sin(f,t)+.43*sin(f*2.756,t)*Math.exp(-t/.064)+.20*sin(f*1.498,t)*Math.exp(-t/.09)+.08*sin(f*4.07,t)*Math.exp(-t/.019);break;}
        case 'clap':{let bursts=.6;for(const delay of [0,.007,.014])if(t>=delay)bursts+=Math.exp(-(t-delay)/.005);x=noise*bursts+.10*sin(1180*hit,t)*Math.exp(-t/.021);break;}
        case 'hat':{x=1.5*noise+.14*(sin(3490*hit,t)+sin(4690*hit,t)+sin(6120*hit,t));break;}
        case 'marimba':{const f=accent?1046.5:784;x=sin(f,t)+.40*sin(f*3.93,t)*Math.exp(-t/.032)+.09*sin(f*9.4,t)*Math.exp(-t/.009);break;}
      }
      const body=t<=hold?1:Math.exp(-profile.decay*(t-hold)/release);
      const fadeIn=t<attack?Math.sin(t/attack*Math.PI/2)**2:1;
      const remaining=duration-t,fadeOut=remaining<tail?Math.sin(Math.max(0,remaining)/tail*Math.PI/2)**2:1;
      const w=fadeIn*fadeOut;window[i]=w;data[i]=x*body*w;sum+=data[i];weight+=w;
    }
    // Remove residual DC with the same boundary window, then normalize each
    // timbre independently. No hard square-wave discontinuities or sample fetch.
    const dc=weight?sum/weight:0;let peak=0;
    for(let i=0;i<count;i++){data[i]-=dc*window[i];peak=Math.max(peak,Math.abs(data[i]));}
    const gain=peak>AUDIO_CONFIG.bufferPeak/10000?AUDIO_CONFIG.bufferPeak/peak:1;
    for(let i=0;i<count;i++)data[i]*=gain;
    data[0]=0;data[count-1]=0;
    if(this.buffers.size>=AUDIO_CONFIG.maxBuffers)this.buffers.delete(this.buffers.keys().next().value);
    this.buffers.set(key,buffer);return buffer;
  }
  makeClick(when,level=1,sub=false,spacingMs=500){
    if(level===0)return {cancel:()=>{},when,end:when};
    const ctx=this.ctx,source=ctx.createBufferSource(),gain=ctx.createGain(),profile=AUDIO_POWER[state.audioPower];
    source.buffer=this.clickBuffer(state.tone,level===2,spacingMs);
    gain.gain.value=(level===2?1:profile.normal)*(sub?profile.sub:1);
    source.connect(gain);gain.connect(this.presence);
    const end=when+source.buffer.duration;let cleaned=false,voice;
    const cleanup=()=>{if(cleaned)return;cleaned=true;source.disconnect();gain.disconnect();this.voices.delete(voice);};
    source.onended=cleanup;
    voice={cancel:()=>{try{source.stop();}catch(e){}cleanup();},when,end};
    this.voices.add(voice);source.start(when);return voice;
  }
  cancelPreview(){for(const voice of this.previewVoices)voice.cancel();this.previewVoices=[];}
  invalidate(from=-Infinity){if(!this.ctx)return;for(const [key,e] of this.entries){if(e.nominal>=from&&(!e.voice||e.voice.when>this.ctx.currentTime+AUDIO_CONFIG.editGuardSeconds)){e.voice?.cancel();this.entries.delete(key);}}}
  stopAll(){for(const voice of [...this.voices])voice.cancel();this.previewVoices=[];this.entries.clear();}
  schedule(){
    this.closeIdleMediaGate();
    if(desiredEvent().playing||currentEvent().playing)this.cancelPreview();
    if(!this.isReady()||(room.role==='guest'&&!room.synced)||room.role==='connecting'||room.recovering)return;
    const now=hostNow(),audioNow=this.ctx.currentTime;
    for(const [key,e] of this.entries){if(e.nominal<now-3000)this.entries.delete(key);}
    const committed=new Set();
    for(const item of this.entries.values())if(item.voice&&item.voice.when<=audioNow+AUDIO_CONFIG.editGuardSeconds)committed.add(item.phaseId+':'+item.tick);
    const lo=now-450,hi=now+Math.max(1100,this.latencyMs()+450);
    for(let ei=0;ei<events.length;ei++){
      const ev=events[ei],limit=events[ei+1]?.at??Infinity;if(!ev.playing||limit<lo||ev.at>hi)continue;
      const m=metrics(ev.settings);let begin=Math.max(0,Math.floor((Math.max(lo,ev.at)-ev.anchor)/m.stepMs)-1),end=Math.ceil((Math.min(hi,limit)-ev.anchor)/m.stepMs);
      if(end-begin>150)begin=end-150;
      for(let tick=begin;tick<=end;tick++){
        const nominal=ev.anchor+tick*m.stepMs;if(nominal<ev.at-.05||nominal>=limit-.05||nominal>hi)continue;
        const key=ev.rev+':'+tick;if(this.entries.has(key))continue;
        const phaseId=ev.phaseId||ev.rev;
        if(committed.has(phaseId+':'+tick)){this.entries.set(key,{nominal,voice:null,phaseId,tick});continue;}
        const inBar=tick%m.ticks,pos=inBar*m.stepQ,beat=Math.min(m.n-1,Math.floor((pos+.000001)/m.beatQ)),onBeat=Math.abs(pos/m.beatQ-Math.round(pos/m.beatQ))<.00001;
        const pre=tick<ev.countIn*m.ticks;
        const onNote=pre?onBeat:Math.abs(pos/m.noteQ-Math.round(pos/m.noteQ))<.00001;
        const level=pre?(beat===0?2:1):ev.settings.accents[beat];
        if(!onNote||level===0){this.entries.set(key,{nominal,voice:null,phaseId,tick});continue;}
        const when=this.audioTime(nominal);
        if(when<audioNow+.002){if(nominal>now-70)this.dropped++;this.entries.set(key,{nominal,voice:null,phaseId,tick});continue;}
        const voice=this.makeClick(when,onBeat?level:1,!onBeat,60000/ev.settings.bpm*(pre?m.beatQ:m.noteQ));this.entries.set(key,{nominal,voice,phaseId,tick});this.totalScheduled++;
      }
    }
  }
  async test(){
    await this.ensure();
    if(state.mute||state.volume===0){toast('本機目前靜音，請先開啟音量。');return;}
    if(desiredEvent().playing||currentEvent().playing){toast('正在播放目前音色；停止節拍後可單獨試聽，不會叠加額外拍點。');return;}
    this.cancelPreview();const at=this.ctx.currentTime+.05;
    this.previewVoices=[this.makeClick(at,2,false,320),this.makeClick(at+.32,1,false,320),this.makeClick(at+.64,1,false,320)];
  }
}
const engine=new AudioEngine();

/* === TRANSPORT AUTHORITY === */
let changeTimer;
function localLead(){return Math.max(220,engine.latencyMs()-state.latency+90);}
function hostLead(){
  const rtts=[...room.clients.values()].filter(client=>client.hello&&Number.isFinite(client.rtt)).map(client=>client.rtt);
  return rtts.length?clamp(Math.ceil(Math.max(...rtts)*1.5+250),600,CONFIG.roomLead):Math.min(850,CONFIG.roomLead);
}
function applyEvents(next){
  let changedAt=Infinity;
  for(const old of events){if(!next.some(n=>n.rev===old.rev))changedAt=Math.min(changedAt,old.at);}
  for(const n of next){if(!events.some(old=>old.rev===n.rev))changedAt=Math.min(changedAt,n.at);}
  if(changedAt!==Infinity)engine.invalidate(changedAt);
  events=next;engine.schedule();renderControls();requestWake();
}
function keepHistory(next,now=hostNow()){
  next.sort((a,b)=>a.at-b.at||a.rev-b.rev);let cut=0;for(let i=0;i<next.length;i++)if(next[i].at<=now-4000)cut=i;
  return next.slice(cut).slice(-20);
}
function publish(next){applyEvents(keepHistory(next));if(room.role==='host')room.broadcastSnapshot();}
function requestSettings(patch,{songChange=false,immediate=false,keepAccents=false}={}){
  if(room.role==='guest'||room.role==='connecting'||room.recovering)return;
  const meter=patch.meter??state.settings.meter;
  const accents=keepAccents?liveAccentsFor(meter):(patch.accents??(meter!==state.settings.meter?liveAccentsFor(meter):state.settings.accents));
  const nextSettings=validSettings({...state.settings,...patch,accents});
  // Only an explicit beat edit changes the live preference. Merely fitting a
  // shorter song must not erase remembered fourth/fifth/etc. beat settings.
  if(!keepAccents&&hasOwn(patch,'accents'))rememberLiveAccents(nextSettings.accents);
  state.settings=nextSettings;
  renderControls();saveLocal();clearTimeout(changeTimer);
  const keys=Object.keys(patch);
  const liveEdit=!songChange&&!immediate&&keys.length>0&&keys.every(key=>key==='bpm'||key==='accents'||key==='note');
  if(liveEdit){commitLiveSettings(patch);return;}
  const run=()=>commitSettings(songChange);if(immediate)run();else changeTimer=setTimeout(run,75);
}
/* v1.10: BPM/TAP, accent, and subdivision edits have no debounce or next-bar queue.
   Rebase the beat grid at the edit time, preserving its fractional beat phase.
   A phaseId identifies already-rendered ticks across revisions, so rapid edits
   cannot replay the same beat. Device and network latency cannot be removed.
   Start/count-in and explicit song changes retain their previous behavior. */
function commitLiveSettings(patch){
  if(room.role==='guest'||room.role==='connecting'||room.recovering)return;
  const now=hostNow(),old=currentEvent(now),future=events.filter(e=>e.at>now);
  const updateSettings=(previous)=>{
    const next=clone(previous);
    if(hasOwn(patch,'bpm'))next.bpm=state.settings.bpm;
    if(hasOwn(patch,'accents')&&previous.meter===state.settings.meter)next.accents=[...state.settings.accents];
    if(hasOwn(patch,'note'))next.note=state.settings.note;
    return validSettings(next);
  };
  const settings=updateSettings(old.settings);
  // Audio already in the device buffer cannot be recalled. Rebase at the
  // earliest editable render point instead of chasing a tick into the past.
  // The event/UI still takes effect NOW, with no musical waiting period.
  const renderLead=engine.ctx?.state==='running'?Math.max(0,(engine.ctx.currentTime+AUDIO_CONFIG.editGuardSeconds-engine.audioTime(now))*1000):0;
  const pivot=now+renderLead;
  const anchor=old.playing?pivot-(pivot-old.anchor)*old.settings.bpm/settings.bpm:now;
  const runAt=old.playing&&now<old.runAt?anchor+old.countIn*metrics(settings).barMs:old.runAt;
  const current={...old,rev:++rev,at:now,anchor,runAt,settings,phaseId:hasOwn(patch,'note')?rev:(old.phaseId||old.rev)};
  // An edit during a pending start updates the selected tempo without adding
  // another countdown, cancelling the requested start, or discarding count-in.
  const queued=future.map(ev=>{
    const nextSettings=updateSettings(ev.settings);
    const nextAnchor=ev.at-(ev.at-ev.anchor)*ev.settings.bpm/nextSettings.bpm;
    return {...ev,rev:++rev,settings:nextSettings,anchor:nextAnchor,phaseId:hasOwn(patch,'note')?rev:ev.phaseId,
      runAt:ev.countIn?nextAnchor+ev.countIn*metrics(nextSettings).barMs:ev.runAt};
  });
  publish([...events.filter(e=>e.at<=now),current,...queued]);
}

function commitSettings(songChange=false){
  if(room.role==='guest'||room.role==='connecting'||room.recovering)return;
  const now=hostNow(),old=currentEvent(now),last=desiredEvent(),lead=room.role==='host'?hostLead():localLead();
  let at=now+12,playing=last.playing,anchor=at,countIn=0,barBase=0,runAt=at;
  if(playing){
    if(!old.playing){at=Math.max(last.at,now+lead);anchor=at;countIn=state.settings.countIn;runAt=at+metrics(state.settings).barMs*countIn;}
    else{const m=metrics(old.settings),boundaryMs=songChange?m.barMs:60000/old.settings.bpm*m.beatQ;at=old.anchor+Math.ceil((now+lead-old.anchor)/boundaryMs)*boundaryMs;anchor=at;barBase=songChange?0:Math.max(0,old.barBase+Math.floor((at-old.anchor)/m.barMs)-old.countIn);runAt=songChange?at:old.runAt;}
  }
  const e={rev:++rev,at,anchor,playing,settings:clone(state.settings),title:titleNow(),countIn,barBase,runAt};
  publish([...events.filter(x=>x.at<=now),e]);
}
async function togglePlay(){
  if(room.role==='guest'){
    if(guestAudioRecoveryRequired||!engine.isReady()){await restoreGuestAudio();return;}
    if(state.mute){try{await engine.ensure();}catch(e){toast(e.message);return;}state.mute=false;engine.invalidate();engine.schedule();}
    else state.mute=true;
    engine.setVolume();renderAudio();renderControls();room.sendLocalStatus();return;
  }
  if(room.role==='connecting'||room.recovering)return;
  clearTimeout(changeTimer);
  if(desiredEvent().playing){stopTransport();return;}
  try{await engine.ensure();}catch(e){toast(e.message);return;}
  const at=hostNow()+(room.role==='host'?hostLead():localLead());
  const e={rev:++rev,at,anchor:at,playing:true,settings:clone(state.settings),title:titleNow(),countIn:state.settings.countIn,barBase:0,runAt:at+metrics(state.settings).barMs*state.settings.countIn};
  publish([...events.filter(x=>x.at<=hostNow()),e]);
}
async function restoreGuestAudio(){
  try{
    await engine.recover();state.mute=false;guestAudioRecoveryRequired=false;engine.setVolume();engine.invalidate();engine.schedule();
    renderAudio();renderControls();room.sendLocalStatus();toast('已重新啟用本機聲音。');
  }catch(e){guestAudioRecoveryRequired=true;renderControls();toast(e.message);}
}
function stopTransport(){
  window.TempoliveAudioContinuity?.cancel('stopped');
  clearTimeout(changeTimer);const now=hostNow(),at=now+(room.role==='host'?200:0);
  publish([...events.filter(x=>x.at<=now),{rev:++rev,at,anchor:at,playing:false,settings:clone(state.settings),title:titleNow(),countIn:0,barBase:0,runAt:at}]);
  if(room.role!=='host')engine.stopAll();clearScreenFlash();releaseWake();
}
function resetStopped(settings=state.settings){
  window.TempoliveAudioContinuity?.cancel('reset');
  clearTimeout(changeTimer);engine.stopAll();clearScreenFlash();events=[{rev:++rev,at:0,anchor:0,playing:false,settings:clone(settings),title:titleNow(),countIn:0,barBase:0,runAt:0}];renderControls();releaseWake();
}

/* === SELF-CONTAINED MQTT 3.1.1 WSS RELAY ===
   Only CONNECT/SUBSCRIBE/UNSUBSCRIBE/PUBLISH QoS0 and incoming QoS1/PING are used.
   No CDN scripts. No STUN, TURN or peer-to-peer socket is required.
   Public broker topics are NOT private; the UI explicitly warns about this.
   Do not use the public relay for performance-critical production deployments.
*/
class SignalBus{
  constructor(){this.handlers=new Map();}
  on(name,fn){if(!this.handlers.has(name))this.handlers.set(name,[]);this.handlers.get(name).push(fn);return this;}
  emit(name,...args){for(const fn of this.handlers.get(name)||[])fn(...args);}
}
const mqttUtf8=new TextEncoder(),mqttText=new TextDecoder();
function joinBytes(...parts){const result=new Uint8Array(parts.reduce((n,p)=>n+p.length,0));let at=0;for(const part of parts){result.set(part,at);at+=part.length;}return result;}
function mqttString(s){const bytes=mqttUtf8.encode(s);if(bytes.length>65535)throw Error('MQTT string too long');return joinBytes(new Uint8Array([bytes.length>>8,bytes.length&255]),bytes);}
function mqttPacket(header,body=new Uint8Array()){
  const bytes=[];let n=body.length;do{let v=n%128;n=Math.floor(n/128);if(n)v|=128;bytes.push(v);}while(n);return joinBytes(new Uint8Array([header,...bytes]),body);
}
function networkError(message,type='network'){const e=Error(message);e.type=type;return e;}
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
class MqttWire extends SignalBus{
  constructor(){super();this.ws=null;this.ready=false;this.manual=false;this.buffer=new Uint8Array();this.waiters=new Map();this.serial=0;this.lastRx=performance.now();}
  async connect(){
    const cfg=CONFIG.relay;this.manual=false;
    return new Promise((resolve,reject)=>{
      let settled=false;
      const settle=(error)=>{if(settled)return;settled=true;clearTimeout(timer);this.rejectConnect=null;if(error)reject(error);else resolve();};
      this.rejectConnect=e=>settle(e);
      const timer=setTimeout(()=>{settle(networkError(TEXT.peerFailed+' [R01]'));this.close();},cfg.connectTimeout);
      let ws;try{ws=this.ws=new WebSocket(cfg.url,'mqtt');ws.binaryType='arraybuffer';}catch(e){settle(networkError(TEXT.peerFailed+' [R02]'));return;}
      ws.onopen=()=>{
        this.emit('progress','正在確認中繼連線…');
        const flags=2|(cfg.username?128:0)|(cfg.password?64:0);
        const body=joinBytes(mqttString('MQTT'),new Uint8Array([4,flags,0,20]),mqttString('tm-'+id().replace(/-/g,'')),cfg.username?mqttString(cfg.username):new Uint8Array(),cfg.password?mqttString(cfg.password):new Uint8Array());
        try{ws.send(mqttPacket(0x10,body));}catch(e){settle(networkError(TEXT.peerFailed+' [R03]'));this.close();}
      };
      this.onConnack=code=>{
        if(code!==0){settle(networkError('中繼服務拒絕連線（'+code+'）。請稍後重試。 [R04]'));this.close();return;}
        this.ready=true;this.lastRx=performance.now();settle();
        this.pingTimer=setInterval(()=>{if(!this.ready)return;if(performance.now()-this.lastRx>30000){this.ws?.close();return;}try{this.send(mqttPacket(0xc0));}catch(e){this.ws?.close();}},7000);
      };
      ws.onmessage=e=>{try{this.feed(new Uint8Array(e.data));}catch(error){settle(networkError('中繼資料格式錯誤，請重試。 [R05]'));this.close();this.emit('close');}};
      ws.onerror=()=>{settle(networkError(TEXT.peerFailed+' [R06]'));};
      ws.onclose=()=>{clearInterval(this.pingTimer);this.ready=false;settle(networkError(TEXT.peerFailed+' [R07]'));for(const w of this.waiters.values())w.reject(networkError('Relay disconnected'));this.waiters.clear();if(!this.manual)this.emit('close');};
    });
  }
  send(bytes){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)throw networkError('Relay disconnected');if(this.ws.bufferedAmount>262144){this.ws.close();throw networkError('Relay backpressure');}this.ws.send(bytes);}
  feed(bytes){
    this.lastRx=performance.now();this.buffer=joinBytes(this.buffer,bytes);if(this.buffer.length>262144)throw Error('Oversize MQTT frame');
    while(this.buffer.length>=2){
      let len=0,mul=1,i=1,digit=0;
      do{if(i>=this.buffer.length)return;digit=this.buffer[i++];len+=(digit&127)*mul;mul*=128;if(i>5)throw Error('Invalid MQTT length');}while(digit&128);
      if(len>131072)throw Error('MQTT payload too large');if(this.buffer.length<i+len)return;
      const h=this.buffer[0],body=this.buffer.slice(i,i+len);this.buffer=this.buffer.slice(i+len);const type=h>>4;
      if(type===2){if(body.length!==2)throw Error('Invalid CONNACK');this.onConnack?.(body[1]);}
      else if(type===9||type===11){const pid=body[0]*256+body[1],w=this.waiters.get(pid);if(w){this.waiters.delete(pid);if(type===9&&(body.length<3||body[2]===128))w.reject(networkError('無法訂閱房間資料，請重試。 [R08]'));else w.resolve();}}
      else if(type===3){
        if(body.length<2)throw Error('Invalid PUBLISH');const size=body[0]*256+body[1];if(size+2>body.length)throw Error('Invalid topic');
        const topic=mqttText.decode(body.slice(2,2+size));let at=2+size;const qos=(h>>1)&3;
        if(qos===1){if(at+2>body.length)throw Error('Invalid QoS1');this.send(mqttPacket(0x40,body.slice(at,at+2)));at+=2;}else if(qos!==0)throw Error('Unsupported QoS');
        this.emit('message',topic,mqttText.decode(body.slice(at)));
      }
    }
  }
  command(header,topic,subscribe=true){
    if(!this.ready)return Promise.reject(networkError('Relay not ready'));const pid=(this.serial=this.serial%65535+1);
    return new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>{this.waiters.delete(pid);reject(networkError('中繼沒有回應，請重試。 [R09]'));},4500);
      this.waiters.set(pid,{resolve:()=>{clearTimeout(timer);resolve();},reject:e=>{clearTimeout(timer);reject(e);}});
      try{this.send(mqttPacket(header,joinBytes(new Uint8Array([pid>>8,pid&255]),mqttString(topic),subscribe?new Uint8Array([0]):new Uint8Array())));}catch(e){clearTimeout(timer);this.waiters.delete(pid);reject(e);}
    });
  }
  subscribe(topic){return this.command(0x82,topic,true);}
  unsubscribe(topic){return this.command(0xa2,topic,false);}
  publish(topic,data){if(!this.ready)throw networkError('Relay not ready');const body=mqttUtf8.encode(JSON.stringify(data));if(body.length>63000)throw Error('Room packet too large');this.send(mqttPacket(0x30,joinBytes(mqttString(topic),body)));}
  close(){
    this.manual=true;clearInterval(this.pingTimer);this.rejectConnect?.(networkError('Connection cancelled','cancelled'));
    for(const w of this.waiters.values())w.reject(networkError('Connection cancelled','cancelled'));this.waiters.clear();
    try{if(this.ready)this.send(mqttPacket(0xe0));}catch(e){}this.ready=false;try{this.ws?.close();}catch(e){}
  }
}
class RelayConnection extends SignalBus{
  constructor(owner,peer,cid,remoteUid=''){super();this.owner=owner;this.peer=peer;this.cid=cid;this.remoteUid=remoteUid;this.open=false;this.closed=false;this.outgoing=false;this.sent=0;this.received=0;}
  begin(){
    this.outgoing=true;clearInterval(this.requestTimer);clearTimeout(this.requestTimeout);
    const request=()=>{if(!this.closed&&!this.open)this.owner.signal(this.peer,{kind:'connect',cid:this.cid});};request();this.requestTimer=setInterval(request,700);
    this.requestTimeout=setTimeout(()=>{if(this.open||this.closed)return;this.emit('error',networkError('已連上中繼，但找不到此房間。請確認四位代碼、主持人未關閉網頁，並確認全員都使用這一版。 [R10]','peer-unavailable'));this.close();},CONFIG.relay.requestTimeout);
  }
  activate(remoteUid){if(this.closed)return;this.remoteUid=remoteUid;clearInterval(this.requestTimer);clearTimeout(this.requestTimeout);const wasOpen=this.open;this.open=true;if(!wasOpen)this.emit('open');}
  send(data){if(this.open&&!this.closed)this.owner.signal(this.peer,{kind:'data',cid:this.cid,toUid:this.remoteUid,seq:++this.sent,data});}
  close(notify=true){if(this.closed)return;this.closed=true;this.open=false;clearInterval(this.requestTimer);clearTimeout(this.requestTimeout);if(notify)this.owner.signal(this.peer,{kind:'close',cid:this.cid,toUid:this.remoteUid});this.owner.connections.delete(this.cid);this.emit('close');}
}
/* Peer-like adapter: leaves the proven room/clock protocol independent of MQTT. */
class RelayPeer extends SignalBus{
  constructor(peerId){
    super();this.id=peerId;this.uid=id();this.isHost=peerId.startsWith(CONFIG.roomPrefix);this.connections=new Map();this.destroyed=false;this.disconnected=false;this.claimed=false;this.everOpened=false;this.starting=false;this.wire=null;
    queueMicrotask(()=>this.start(false));
  }
  topic(peer=this.id){return CONFIG.relay.namespace+'/in/'+peer;}
  signal(to,message){
    if(!this.wire?.ready||this.destroyed)return;
    try{this.wire.publish(this.topic(to),{protocol:'tm-relay-2',from:this.id,uid:this.uid,...message});}catch(e){if(!this.starting)this.handleDisconnect();}
  }
  async start(reconnecting){
    if(this.starting||this.destroyed)return;this.starting=true;let failure;
    for(let attempt=0;attempt<=1;attempt++){
      if(this.destroyed){this.starting=false;return;}
      this.emit('progress',(reconnecting?'連線中斷，正在重連':'正在連接中繼服務')+'（'+(attempt+1)+'/2）…');
      const old=this.wire;old?.close();const wire=this.wire=new MqttWire();
      wire.on('progress',s=>this.emit('progress',s));wire.on('message',(topic,payload)=>{if(this.wire===wire)this.receive(topic,payload);});
      wire.on('close',()=>{if(this.wire===wire&&!this.starting)this.handleDisconnect();});
      try{
        await wire.connect();if(this.destroyed)throw networkError('Cancelled','cancelled');await wire.subscribe(this.topic());
        if(this.isHost){
          let available=false;
          for(let probe=0;probe<5&&!available;probe++){
            this.emit('progress','已連上中繼，正在檢查四位代碼…');
            this.busy=false;this.claimed=false;this.signal(this.id,{kind:'probe'});await delay(1000);if(this.destroyed)throw networkError('Cancelled','cancelled');
            if(!this.busy){this.claimed=true;this.signal(this.id,{kind:'claim'});await delay(550);}
            if(!wire.ready)throw networkError(TEXT.peerFailed);
            if(!this.busy){available=true;break;}
            this.claimed=false;if(reconnecting)throw networkError('房間代碼已被其他主持人使用，請重新建立房間。','unavailable-id');
            await wire.unsubscribe(this.topic());this.id=CONFIG.roomPrefix+randomCode();await wire.subscribe(this.topic());
          }
          if(!available)throw networkError('房間代碼忙碌，請重試建立。','unavailable-id');
        }
        if(this.destroyed)throw networkError('Cancelled','cancelled');
        this.disconnected=false;this.starting=false;this.everOpened=true;
        for(const c of this.connections.values())if(!c.closed){if(c.outgoing)c.begin();else c.open=true;}
        this.emit('open',this.id);return;
      }catch(e){failure=e;wire.close();if(this.destroyed||e.type==='cancelled'){this.starting=false;return;}if(e.type==='unavailable-id')break;if(attempt<1)await delay(550);}
    }
    this.starting=false;this.emit('error',failure||networkError(TEXT.peerFailed));
  }
  handleDisconnect(){
    if(this.destroyed||this.disconnected)return;this.disconnected=true;
    for(const c of this.connections.values())c.open=false;
    this.emit('disconnected');this.reconnectTimer=setTimeout(()=>this.reconnect(),600);
  }
  reconnect(){if(!this.destroyed&&!this.starting)this.start(true);}
  connect(peer){const c=new RelayConnection(this,peer,id());this.connections.set(c.cid,c);queueMicrotask(()=>c.begin());return c;}
  receive(topic,payload){
    if(this.destroyed||topic.replace(/^\//,'')!==this.topic()||payload.length>65000)return;
    let m;try{m=JSON.parse(payload);}catch(e){return;}
    if(!m||m.protocol!=='tm-relay-2'||m.uid===this.uid||typeof m.from!=='string'||m.from.length>64||!/^[-a-zA-Z0-9]+$/.test(m.from)||typeof m.uid!=='string'||m.uid.length>64)return;
    if(m.toUid&&m.toUid!==this.uid)return;
    if(m.kind==='probe'&&this.isHost&&this.claimed){this.signal(this.id,{kind:'busy',toUid:m.uid});return;}
    if(m.kind==='busy'&&m.toUid===this.uid){if(!this.everOpened||this.starting)this.busy=true;return;}
    if(m.kind==='claim'&&this.isHost){
      if((this.everOpened&&!this.starting)||(this.claimed&&this.uid<m.uid))this.signal(this.id,{kind:'busy',toUid:m.uid});else if(this.claimed)this.busy=true;return;
    }
    if(typeof m.cid!=='string'||m.cid.length>64)return;
    let c=this.connections.get(m.cid);
    if(m.kind==='connect'&&this.isHost&&this.claimed&&!this.starting){
      if(c&&(c.peer!==m.from||c.remoteUid!==m.uid))return;
      if(!c){if(this.connections.size>=CONFIG.maxPeople+2)return;c=new RelayConnection(this,m.from,m.cid,m.uid);this.connections.set(m.cid,c);this.emit('connection',c);c.activate(m.uid);}
      this.signal(m.from,{kind:'accepted',cid:m.cid,toUid:m.uid});return;
    }
    if(!c||c.peer!==m.from)return;
    if(m.kind==='accepted'&&c.outgoing){if(c.remoteUid&&c.remoteUid!==m.uid){c.emit('error',networkError(TEXT.lost,'peer-unavailable'));c.close();return;}c.activate(m.uid);return;}
    if(c.remoteUid!==m.uid||m.toUid!==this.uid)return;
    if(m.kind==='data'&&Number.isSafeInteger(m.seq)&&m.seq>c.received){c.received=m.seq;c.emit('data',m.data);}
    else if(m.kind==='close')c.close(false);
  }
  destroy(){if(this.destroyed)return;clearTimeout(this.reconnectTimer);for(const c of [...this.connections.values()])c.close();this.destroyed=true;this.wire?.close();this.emit('close');}
}
function randomCode(){return String(1000+crypto.getRandomValues(new Uint32Array(1))[0]%9000);}
function peerErrorMessage(e){return cleanText(e?.message,260)||TEXT.peerFailed;}

/* === ROOM PROTOCOL: one host, revisioned transport and four-timestamp sync === */
class Room{
  constructor(){this.role='solo';this.code='';this.name='';this.peer=null;this.connection=null;this.clients=new Map();this.offset=0;this.samples=[];this.pendingPings=new Map();this.synced=false;this.session='';this.generation=0;this.connecting=false;this.recovering=false;this.signalOnline=true;this.roster=[];this.backup=null;this.lastSeen=0;this.lastPing=0;this.lastSyncBurst=0;this.lastSnapshotVersion=0;this.snapshotVersion=0;this.acceptedSession=false;this.connectedAt=0;this.rtt=null;this.spread=null;this.progress='';setInterval(()=>this.heartbeat(),1000);}
  send(conn,data){try{if(conn?.open)conn.send(data);}catch(e){console.warn('Room send failed');}}
  packet(type,extra={}){return {app:'tw-beat',v:2,type,session:this.session,...extra};}
  broadcast(data){for(const c of this.clients.values())if(c.hello)this.send(c.conn,data);}
  snapshot(){return this.packet('snapshot',{sequence:++this.snapshotVersion,events:clone(events)});}
  broadcastSnapshot(){this.broadcast(this.snapshot());}
  setProgress(message){this.progress=message;if(this.connecting&&$('roomDialog').open)I18N.set($('roomError'),message);if(this.recovering)renderRoom();}
  async enter(role,name,code){
    this.cancelAttempt();const generation=++this.generation;this.connecting=true;this.role='connecting';this.name=cleanText(name,16);this.code=role==='host'?randomCode():code;this.backup={settings:clone(state.settings),activeId:state.activeId};
    resetStopped();renderRoom();renderControls();this.setProgress('正在連接中繼服務…');
    try{
      await new Promise((resolve,reject)=>{
        let done=false,joined=false;const timer=setTimeout(()=>fail(networkError('連線逾時，已停止等待。請確認全員使用新版，並嘗試更換網路後重試。 [R11]')),29000);
        const success=()=>{if(done||generation!==this.generation)return;done=true;joined=true;clearTimeout(timer);this.connecting=false;resolve();};
        const fail=e=>{if(done)return;done=true;clearTimeout(timer);reject(e);};this.cancelPending=()=>fail(networkError('cancelled','cancelled'));
        this.peer=new RelayPeer(role==='host'?CONFIG.roomPrefix+this.code:'tw-beat-client-'+id());
        this.peer.on('progress',text=>{if(generation===this.generation)this.setProgress(text);});
        this.peer.on('open',peerId=>{
          if(generation!==this.generation)return;
          this.signalOnline=true;this.recovering=false;
          if(done){
            this.lastSeen=wallNow();this.connectedAt=wallNow();for(const c of this.clients.values())c.lastSeen=wallNow();
            if(this.role==='guest'){this.synced=false;this.samples=[];this.burstSync();this.send(this.connection,this.packet('resync'));}
            else this.broadcastSnapshot();engine.invalidate();engine.schedule();renderRoom();renderControls();return;
          }
          this.connectedAt=wallNow();
          if(role==='host'){this.code=peerId.slice(CONFIG.roomPrefix.length);this.role='host';this.session=id();this.synced=true;this.offset=0;this.roster=[];success();this.updateRoster();renderRoom();renderControls();}
          else{
            this.setProgress('中繼已連線，正在尋找房間 '+this.code+'…');
            const conn=this.peer.connect(CONFIG.roomPrefix+this.code);this.connection=conn;
            conn.on('open',()=>{if(generation!==this.generation)return;this.send(conn,{app:'tw-beat',v:2,type:'hello',name:this.name,audio:this.localAudioStatus()});});
            conn.on('data',data=>{
              if(generation!==this.generation||data?.app!=='tw-beat'||data.v!==2)return;
              if(data.type==='denied'){if(!joined)fail(networkError(cleanText(data.message,160)));else this.leave(true,cleanText(data.message,160));return;}
              if(data.type==='welcome'&&!this.acceptedSession){
                this.session=cleanText(data.session,64);if(!this.session)return;this.acceptedSession=true;this.role='guest';this.offset=0;this.synced=false;this.samples=[];this.lastSeen=wallNow();
                this.receiveSnapshot(data);this.roster=Array.isArray(data.roster)?data.roster.slice(0,CONFIG.maxPeople):[];success();this.burstSync();renderRoom();renderControls();
              }else if(data.type==='welcome'&&data.session===this.session){this.receiveSnapshot(data);this.lastSeen=wallNow();this.burstSync();}
              else this.receiveGuest(data);
            });
            conn.on('close',()=>{if(generation!==this.generation)return;if(!joined)fail(networkError(TEXT.lost));else this.leave(true,TEXT.lost);});
            conn.on('error',e=>{if(generation!==this.generation)return;if(!joined)fail(e);else this.leave(true,peerErrorMessage(e));});
          }
        });
        this.peer.on('connection',conn=>{if(generation!==this.generation||this.role!=='host'){conn.on('open',()=>conn.close());return;}this.accept(conn,generation);});
        this.peer.on('error',e=>{if(generation!==this.generation)return;if(!joined)fail(e);else this.leave(true,peerErrorMessage(e));});
        this.peer.on('disconnected',()=>{
          if(generation!==this.generation)return;
          this.signalOnline=false;this.recovering=true;engine.stopAll();if(this.role==='guest')this.synced=false;this.setProgress('中繼中斷，正在自動重連…');renderRoom();renderControls();
        });
        this.peer.on('close',()=>{if(generation===this.generation&&!joined)fail(networkError(TEXT.lost));});
      });
      if(generation!==this.generation)return false;this.cancelPending=null;renderRoom();renderControls();return true;
    }catch(e){if(generation!==this.generation)return false;this.leave(false);throw e;}
  }
  accept(conn,generation){
    const entry={conn,name:'',hello:false,audio:TEXT.audioOff,lastSeen:wallNow(),rtt:null,lastPong:0};
    if(this.clients.size>=CONFIG.maxPeople-1){conn.on('open',()=>{this.send(conn,this.packet('denied',{message:'房間已達本版 12 人上限。'}));setTimeout(()=>conn.close(),200);});return;}
    this.clients.set(conn.peer,entry);
    conn.on('data',data=>{
      if(generation!==this.generation||this.role!=='host'||!data||data.app!=='tw-beat'||data.v!==2)return;
      entry.lastSeen=wallNow();
      if(data.type==='hello'){
        if(!entry.hello){entry.hello=true;entry.name=cleanText(data.name,16)||TEXT.guest;entry.audio=cleanText(data.audio,20);}
        this.send(conn,this.packet('welcome',{sequence:++this.snapshotVersion,events:clone(events),roster:this.makeRoster()}));this.updateRoster();
      }else if(entry.hello&&data.session===this.session){
        if(data.type==='ping'&&Number.isFinite(data.t0)&&typeof data.nonce==='string'&&wallNow()-entry.lastPong>=30){const t1=wallNow();entry.lastPong=t1;this.send(conn,this.packet('pong',{nonce:cleanText(data.nonce,64),t0:data.t0,t1,t2:wallNow()}));}
        else if(data.type==='status'){entry.audio=cleanText(data.audio,20);entry.rtt=Number.isFinite(data.rtt)?clamp(data.rtt,0,10000):null;this.updateRoster();}
        else if(data.type==='resync'){this.send(conn,this.snapshot());}
        // Clients cannot issue transport commands; only the host publishes them.
      }
    });
    const remove=()=>{if(generation!==this.generation)return;if(this.clients.get(conn.peer)===entry){this.clients.delete(conn.peer);this.updateRoster();}};
    conn.on('close',remove);conn.on('error',()=>{try{conn.close();}catch(e){}remove();});
    setTimeout(()=>{if(!entry.hello&&this.clients.get(conn.peer)===entry){conn.close();remove();}},10000);
  }
  receiveGuest(data){
    if(this.role!=='guest'||data?.session!==this.session)return;this.lastSeen=wallNow();
    if(data.type==='snapshot')this.receiveSnapshot(data);
    else if(data.type==='pong')this.pong(data);
    else if(data.type==='roster'){this.roster=Array.isArray(data.people)?data.people.slice(0,CONFIG.maxPeople):[];renderRoom();}
    else if(data.type==='bye')this.leave(true,'主持人已結束房間，節拍已停止。');
  }
  receiveSnapshot(data){
    if(!Number.isSafeInteger(data.sequence)||data.sequence<=this.lastSnapshotVersion||!Array.isArray(data.events)||!data.events.length||data.events.length>20)return;
    try{
      const next=data.events.map(e=>{if(!e||!Number.isSafeInteger(e.rev)||![e.at,e.anchor,e.runAt].every(Number.isFinite)||Math.abs(e.at)>1e15||Math.abs(e.anchor)>1e15||![0,1,2].includes(e.countIn)||!Number.isFinite(e.barBase)||e.barBase<0)throw Error('Bad snapshot');return {rev:e.rev,at:e.at,anchor:e.anchor,playing:!!e.playing,title:cleanText(e.title)||TEXT.free,settings:validSettings(e.settings,true),countIn:e.countIn,barBase:Math.floor(e.barBase),runAt:e.runAt,phaseId:Number.isSafeInteger(e.phaseId)&&e.phaseId>0?e.phaseId:e.rev};}).sort((a,b)=>a.at-b.at||a.rev-b.rev);
      if(new Set(next.map(e=>e.rev)).size!==next.length)return;
      this.lastSnapshotVersion=data.sequence;applyEvents(next);rev=Math.max(rev,...next.map(e=>e.rev));renderRoom();
    }catch(e){console.warn('Ignored invalid room snapshot');}
  }
  ping(){
    if(this.role!=='guest'||!this.connection?.open||this.recovering)return;
    const t0=wallNow(),nonce=id();this.pendingPings.set(nonce,t0);for(const [k,t] of this.pendingPings)if(t0-t>8000)this.pendingPings.delete(k);
    this.send(this.connection,this.packet('ping',{nonce,t0}));this.lastPing=t0;
  }
  pong(data){
    const t3=wallNow(),t0=this.pendingPings.get(data.nonce);this.pendingPings.delete(data.nonce);
    if(t0===undefined||![data.t1,data.t2].every(Number.isFinite))return;
    const rtt=(t3-t0)-(data.t2-data.t1),offset=((data.t1-t0)+(data.t2-t3))/2;
    if(rtt<0||rtt>3000||!Number.isFinite(offset))return;
    this.samples.push({rtt,offset});if(this.samples.length>24)this.samples.shift();
    const best=[...this.samples].sort((a,b)=>a.rtt-b.rtt).slice(0,5),offsets=best.map(s=>s.offset).sort((a,b)=>a-b),target=offsets[Math.floor(offsets.length/2)];
    this.rtt=Math.round(best[0].rtt);this.spread=Math.round(Math.max(...offsets)-Math.min(...offsets));
    if(this.samples.length>=5){
      const wasSynced=this.synced;
      if(!this.synced||!currentEvent().playing||Math.abs(target-this.offset)>80){this.offset=target;engine.invalidate();}
      else{const diff=clamp(target-this.offset,-2,2);this.offset+=diff;}
      this.synced=true;if(!wasSynced){engine.schedule();this.sendLocalStatus();toast('房間校時完成，正在跟隨主持人。');}
    }
    renderRoom();renderAudioStatus();
  }
  burstSync(){this.lastSyncBurst=wallNow();this.pendingPings.clear();const generation=this.generation;for(let i=0;i<10;i++)setTimeout(()=>{if(generation===this.generation)this.ping();},i*150);}
  localAudioStatus(){return !engine.isReady()?TEXT.audioOff:state.mute||!state.volume?TEXT.silent:this.role==='guest'&&!this.synced?TEXT.syncing:TEXT.ready;}
  sendLocalStatus(){if(this.role==='guest')this.send(this.connection,this.packet('status',{audio:this.localAudioStatus(),rtt:this.rtt}));else if(this.role==='host')this.updateRoster();}
  makeRoster(){return [{name:this.name,role:'host',audio:this.localAudioStatus()},...[...this.clients.values()].filter(c=>c.hello).map(c=>({name:c.name,role:'guest',audio:c.audio}))];}
  updateRoster(){if(this.role!=='host')return;this.roster=this.makeRoster();this.broadcast(this.packet('roster',{people:this.roster}));renderRoom();}
  heartbeat(){
    const now=wallNow();
    if(this.recovering)return;
    if(this.role==='guest'){
      if(now-this.lastSeen>10000){this.leave(true,TEXT.lost);return;}
      if(!document.hidden&&this.connection?.open&&now-this.lastSyncBurst>=CONFIG.syncRefreshMs){this.samples=[];this.burstSync();}
      if(now-this.lastPing>2500){this.ping();this.sendLocalStatus();}
      if(!this.synced&&now-this.connectedAt>15000){this.leave(true,'已連上房間，但網路延遲過大而無法校時。已停止等待，請更換網路後重試。 [R12]');}
    }else if(this.role==='host'){
      this.broadcastSnapshot();
      for(const [key,c] of this.clients){if(now-c.lastSeen>12000){c.conn.close();this.clients.delete(key);this.updateRoster();}}
    }
  }
  resync(){if(this.role==='guest'){this.samples=[];this.burstSync();this.send(this.connection,this.packet('resync'));toast('已重新取樣校時，不改變播放進度。');}else if(this.role==='host'){this.broadcastSnapshot();toast('已重新傳送節奏狀態。');}}
  cancelAttempt(){if(this.connecting||this.role==='connecting')this.leave(false);}
  leave(notify=true,message=''){
    const wasRole=this.role;this.generation++;this.cancelPending?.();this.cancelPending=null;this.connecting=false;this.recovering=false;
    if(wasRole==='host')this.broadcast(this.packet('bye'));
    const p=this.peer;this.peer=null;this.connection=null;this.role='solo';this.clients.clear();
    if(this.backup&&wasRole==='guest'){state.settings=this.backup.settings;state.activeId=this.backup.activeId;}this.backup=null;
    this.code='';this.session='';this.offset=0;this.synced=false;this.samples=[];this.pendingPings.clear();this.rtt=null;this.roster=[];this.lastSnapshotVersion=0;this.acceptedSession=false;this.signalOnline=true;
    resetStopped();renderRoom();renderControls();saveLocal();
    if(p)setTimeout(()=>{try{p.destroy();}catch(e){}},70);
    if(notify)toast(message||'已離開房間，回到單人模式。');
  }
}
const room=new Room();

/* === UI RENDERING: user-provided strings always use textContent === */
let lastBeatLayout='';
function renderBeatLayout(settings){
  const locked=room.role==='guest'||room.role==='connecting'||room.recovering||settings.meter!==state.settings.meter;
  const layout=settings.meter+':'+settings.accents.join(',')+':'+locked;
  if(layout===lastBeatLayout)return;lastBeatLayout=layout;
  const track=$('beats');
  if(track.children.length!==settings.accents.length){
    track.replaceChildren();settings.accents.forEach((_,i)=>{
      const b=document.createElement('button');b.className='beat';I18N.set(b,i+1);
      b.addEventListener('click',()=>{const accents=[...state.settings.accents];if(i>=accents.length)return;accents[i]=(accents[i]+2)%3;requestSettings({accents});});track.append(b);
    });
  }
  settings.accents.forEach((level,i)=>{const b=track.children[i];b.dataset.level=level;b.disabled=locked;
    I18N.attr(b,'aria-label','第 '+(i+1)+' 拍：'+[TEXT.rest,TEXT.normal,TEXT.strong][level]+'，點選切換');
  });lastVisualBeat=-2;
}
function renderControls(){
  const follower=room.role==='guest',busy=room.role==='connecting'||room.recovering,settings=follower?desiredEvent().settings:state.settings;
  if(!follower)guestAudioRecoveryRequired=false;
  $('bpm').value=settings.bpm;$('bpmRange').value=settings.bpm;$('meter').value=settings.meter;$('countIn').value=settings.countIn;
  // Read-only time signature beside the displayed song; use the same settings
  // source as the title/BPM (including the host's desired event for followers).
  I18N.bind($('stageMeter'),()=>settings.meter);
  I18N.bindAttr($('stageMeter'),'aria-label',()=>I18N.t('拍號')+' '+settings.meter);
  I18N.bindAttr($('stageMeter'),'title',()=>I18N.t('拍號')+' '+settings.meter);
  I18N.set($('tempoWord'),settings.bpm<70?'慢板呼吸':settings.bpm<100?'從容前行':settings.bpm<140?'穩定律動':settings.bpm<190?'輕快推進':'高速節奏');
  I18N.bind($('currentTitle'),()=>{if(follower)return desiredEvent().title===TEXT.free?I18N.t(TEXT.free):desiredEvent().title;const song=state.songs.find(s=>s.id===state.activeId);return song?I18N.song(song):I18N.t(TEXT.free);});I18N.bindAttr($('currentTitle'),'title',()=>$('currentTitle').textContent);
  for(const id of ['bpm','bpmRange','bpmMinus','bpmPlus','meter','countIn','tapBtn','saveCurrent','prevSong','nextSong','transportPrevSong','transportNextSong','freeMode'])$(id).disabled=follower||busy;
  document.querySelectorAll('[data-note]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.note)===settings.note));b.disabled=follower||busy;});
  renderBeatLayout(currentEvent().playing?currentEvent().settings:settings);
  I18N.set($('beatHint'),follower?'節奏由主持人統一控制':'點選拍點：重音 → 一般 → 靜音');
  const playing=desiredEvent().playing;
  const needsRecovery=follower&&!state.mute&&state.volume>0&&(guestAudioRecoveryRequired||!engine.isReady());
  $('playBtn').disabled=busy;setIcon($('playBtn'),follower?(needsRecovery||state.mute?'volume':'muted'):(playing?'stop':'play'));
  $('playBtn').classList.toggle('audio-muted',follower&&(needsRecovery||state.mute));
  I18N.set($('playBtn').querySelector('span'),follower?(needsRecovery?'恢復本機聲音':state.mute?TEXT.unmute:TEXT.muted):(playing?TEXT.stop:TEXT.start));
  I18N.bindAttr($('playBtn'),'aria-label',()=>$('playBtn').textContent.trim());
  I18N.set($('modeText'),follower?'團隊收聽':room.role==='host'?'房間主持':busy?'連線中':TEXT.solo);
  renderAudioStatus();renderSongs();
}
function renderAudio(){
  if(!$('tone').options.length){for(const [key,spec] of Object.entries(AUDIO_TONES))$('tone').append(I18N.option(spec.label,key));}
  $('audioPower').value=state.audioPower;
  I18N.set($('toneDescription'),AUDIO_TONES[state.tone].description);
  I18N.set($('audioPowerHint'),AUDIO_POWER[state.audioPower].description);
  $('volume').value=state.volume;$('volumeValue').value=state.volume+'%';I18N.set($('volumeValue'),state.volume+'%');$('tone').value=state.tone;$('latency').value=state.latency;$('latencyValue').value=state.latency;
  $('autoLatency').checked=state.autoLatency;$('keepAwake').checked=state.keepAwake;
  $('muteBtn').setAttribute('aria-pressed',String(state.mute));I18N.attr($('muteBtn'),'aria-label',state.mute?TEXT.unmute:TEXT.muted);setIcon($('muteBtn'),state.mute?'muted':'volume');
  const output=$('audioOutput').selectedOptions[0]?.textContent||TEXT.outputDefault;
  I18N.set($('audioSummary'),AUDIO_TONES[state.tone].label+' · '+AUDIO_POWER[state.audioPower].label);
  I18N.bindAttr($('audioSummary'),'title',()=>$('audioOutput').selectedOptions[0]?.textContent||I18N.t(TEXT.outputDefault));
}
function renderAudioStatus(){
  const follower=room.role==='guest',needAudio=!engine.isReady()&&(follower||desiredEvent().playing);
  if(follower&&needAudio&&!state.mute&&state.volume>0)guestAudioRecoveryRequired=true;
  // v1.16: no explanatory banner above the metronome. Actual local audio
  // recovery remains on the existing center button and the volume/mute button.
}
function renderSongs(){
  I18N.set($('songCount'),String(state.songs.length).padStart(2,'0'));const list=$('songList');list.replaceChildren();
  if(!state.songs.length){const p=document.createElement('p');p.className='muted small';p.style.padding='20px 8px';I18N.set(p,'還沒有歌曲，將目前的節奏存成第一首吧。');list.append(p);}
  state.songs.forEach((song,i)=>{
    const li=document.createElement('li');li.className='song-item'+(song.id===state.activeId&&room.role!=='guest'?' selected':'');
    const main=document.createElement('button');main.className='song-main';main.disabled=room.role==='guest'||room.role==='connecting'||room.recovering;I18N.bindAttr(main,'aria-label',()=>I18N.song(song)+', '+song.settings.bpm+' BPM, '+song.settings.meter);if(song.id===state.activeId)main.setAttribute('aria-current','true');
    const num=document.createElement('span');num.className='song-number';I18N.set(num,String(i+1).padStart(2,'0'));const copy=document.createElement('span');copy.className='song-copy';const name=document.createElement('span');name.className='song-name';I18N.bind(name,()=>I18N.song(song));
    const meta=document.createElement('span');meta.className='song-meta';I18N.set(meta,document.body.classList.contains('focus-mode')?song.settings.bpm+' BPM':song.settings.bpm+' BPM · '+song.settings.meter+(song.sample?' · '+TEXT.sample:''));copy.append(name,meta);main.append(num,copy);main.addEventListener('click',()=>selectSong(song.id));
    const edit=document.createElement('button');edit.className='icon-btn song-edit';I18N.bindAttr(edit,'aria-label',()=>I18N.t('編輯 ')+song.name);edit.innerHTML='<svg><use href="#i-edit"/></svg>';edit.addEventListener('click',()=>openSong(song.id));li.append(main,edit);list.append(li);
  });
  for(const id of ['prevSong','nextSong','transportPrevSong','transportNextSong'])$(id).disabled=state.songs.length===0||room.role==='guest'||room.role==='connecting'||room.recovering;
}
function renderRoom(){
  const live=room.role==='host'||room.role==='guest';$('roomIdle').hidden=live;$('roomLive').hidden=!live;
  $('createRoom').disabled=room.connecting;$('joinRoom').disabled=room.connecting;
  if(!live)return;
  I18N.set($('rolePill'),room.role==='host'?TEXT.host:TEXT.guest);I18N.set($('roomCode'),room.code);
  I18N.set($('roomHeading'),room.role==='host'?'我的團隊房間':'已加入團隊房間');
  I18N.set($('roomConnection'),room.recovering?(room.progress||'中繼中斷，重連中'):room.role==='guest'&&!room.synced?'已連線，校時中':'已連線 · 中繼同步');
  I18N.set($('memberCount'),(room.roster.length||1)+' 人在房間');$('memberList').replaceChildren();
  for(const person of room.roster){const li=document.createElement('li');li.className='member';const avatar=document.createElement('span');avatar.className='avatar';I18N.bind(avatar,()=>I18N.lang!=='zh-Hant'?(I18N.person(person).split(/\s+/).map(w=>w[0]).join('').slice(0,2)||'P'):(cleanText(person.name,1)||'人'));const name=document.createElement('span');name.className='member-name';I18N.bind(name,()=>I18N.person(person)+(person.role==='host'?' · '+I18N.t(TEXT.host):''));const status=document.createElement('span');status.className='member-state';I18N.set(status,cleanText(person.audio,20));li.append(avatar,name,status);$('memberList').append(li);}
  $('roomStats').hidden=room.role!=='guest';I18N.set($('rttValue'),room.rtt===null?'--':room.rtt+' ms');I18N.set($('syncValue'),!room.synced?'校時中':room.rtt>150||room.spread>20?'網路波動':'已校時');
  I18N.set($('connectionNote'),room.role==='host'?'四位數字是邀請碼，不是密碼。知道代碼的人可加入；關閉網頁會結束房間。':'顯示的是網路往返延遲，不是耳機的實際聲音誤差。');
  I18N.set($('leaveRoom'),room.role==='host'?'結束房間':'離開房間');
}
let lastVisualBeat=-1,lastVisualRev=-1,lastSecondText='',lastInfo='',lastStateText='',wakeTick=0;
/* v1.11: LOCAL, opt-in card glow; no changes to audio, tempo or room state.
   A 20 ms onset, 120 ms peak hold and 180 ms smooth fade make the pulse easier
   to see. Only the inset edge and tinted card background glow; text stays sharp.
   Keep the existing >=350 ms pulse spacing (<=3 starts in any rolling second),
   even when tempo, meter or accent settings change. No fast subdivision strobe.
   Reference: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes
   Rate limiting is NOT a medical safety guarantee. This remains opt-in. */
const SCREEN_FLASH=Object.freeze({minIntervalMs:350,durationMs:320,attackMs:20,holdUntilMs:140,darkPeak:.98,lightPeak:.94});
const screenFlash={key:'',lastPulse:-Infinity,pulseAt:-Infinity,peak:0,count:0,opacity:0};
function renderScreenFlashSetting(){
  $('screenFlashBtn').setAttribute('aria-checked',String(state.screenFlash));
  I18N.set($('screenFlashState'),state.screenFlash?'\u5df2\u958b\u555f\uff0c\u50c5\u7bc0\u62cd\u5668\u5340\u584a\u767c\u5149':'\u95dc\u9589\uff0c\u4e0d\u986f\u793a\u62cd\u9ede\u87a2\u5149');
}
function clearScreenFlash(){
  screenFlash.key='';screenFlash.pulseAt=-Infinity;screenFlash.opacity=0;
  $('beatScreenFlash').style.opacity='0';
}
function updateScreenFlash(now,ev,perfNow=performance.now()){
  const overlay=$('beatScreenFlash');
  if(!state.screenFlash||!ev.playing||!desiredEvent().playing||document.hidden||room.recovering||room.role==='connecting'||(room.role==='guest'&&!room.synced)||$('rhythmGameDialog')?.open){
    if(screenFlash.opacity||screenFlash.key)clearScreenFlash();return;
  }
  const m=metrics(ev.settings),beatMs=60000/ev.settings.bpm*m.beatQ;
  const elapsed=Math.max(0,now-ev.anchor),ordinal=Math.floor(elapsed/beatMs+1e-7),beat=ordinal%m.n;
  const phaseId=ev.phaseId||ev.rev,key=phaseId+':'+ordinal;
  if(key!==screenFlash.key){
    screenFlash.key=key;
    const pre=ordinal<ev.countIn*m.n,level=pre?(beat===0?2:1):ev.settings.accents[beat];
    const q=beat*m.beatQ,onNote=pre||Math.abs(q/m.noteQ-Math.round(q/m.noteQ))<1e-6;
    const stride=Math.max(1,Math.ceil(SCREEN_FLASH.minIntervalMs/beatMs));
    const late=elapsed-ordinal*beatMs;
    if(level>0&&onNote&&ordinal%stride===0&&late<Math.min(90,beatMs*.35)&&perfNow-screenFlash.lastPulse>=SCREEN_FLASH.minIntervalMs){
      screenFlash.lastPulse=perfNow;screenFlash.pulseAt=perfNow;
      screenFlash.peak=(state.theme==='dark'?SCREEN_FLASH.darkPeak:SCREEN_FLASH.lightPeak)*(level===2?1:.78);
      screenFlash.count++;
    }
  }
  const age=perfNow-screenFlash.pulseAt,duration=SCREEN_FLASH.durationMs;
  // One smooth pulse: quick onset, visible plateau, then a longer fade.
  // The pulse ends before the next permitted onset, preserving a visible gap.
  let envelope=0;
  if(age>=0&&age<duration){
    if(age<SCREEN_FLASH.attackMs)envelope=Math.sin(Math.PI*.5*age/SCREEN_FLASH.attackMs)**2;
    else if(age<=SCREEN_FLASH.holdUntilMs)envelope=1;
    else envelope=Math.cos(Math.PI*.5*(age-SCREEN_FLASH.holdUntilMs)/(duration-SCREEN_FLASH.holdUntilMs))**2;
  }
  const amount=envelope*screenFlash.peak;
  if(amount===0?screenFlash.opacity!==0:Math.abs(amount-screenFlash.opacity)>.0001){screenFlash.opacity=amount;overlay.style.opacity=String(amount);}
}
$('screenFlashBtn').addEventListener('click',()=>{
  state.screenFlash=!state.screenFlash;
  clearScreenFlash();renderScreenFlashSetting();saveLocal();
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearScreenFlash();});

function animate(){
  const now=hostNow(),ev=currentEvent(now),latest=desiredEvent(),pending=latest.at>now&&latest.rev!==ev.rev;
  let beat=-1,status=TEXT.notStarted,info=TEXT.readyHint,counter='00:00 · 第 0 小節';
  if(ev.playing&&!(room.role==='guest'&&!room.synced)){
    const m=metrics(ev.settings),elapsed=Math.max(0,now-ev.anchor),bar=Math.floor(elapsed/m.barMs),phase=(elapsed%m.barMs)/m.barMs;
    beat=Math.min(m.n-1,Math.floor(phase*m.n));status=bar<ev.countIn?TEXT.countIn:TEXT.playing;
    if(bar<ev.countIn){info='預備 '+(bar+1)+' / '+ev.countIn+' 小節';counter='預備拍 · '+(beat+1)+' / '+m.n;}
    else{const seconds=Math.max(0,Math.floor((now-ev.runAt)/1000));counter=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0')+' · 第 '+(bar-ev.countIn+ev.barBase+1)+' 小節';info=room.role==='guest'?'跟隨主持人 · '+ev.settings.bpm+' BPM':ev.settings.bpm+' BPM · '+ev.settings.meter+' · 四分音符為基準';}
    if((elapsed%(m.barMs/m.n))/(m.barMs/m.n)>.78)beat=-1;
  }
  if(pending){const wait=Math.max(0,(latest.at-now)/1000).toFixed(1);info=latest.playing?(ev.playing?TEXT.nextBar+' · '+wait+' 秒':'將於 '+wait+' 秒後開始'):'將於 '+wait+' 秒後停止';if(!ev.playing)status=TEXT.waiting;}
  if(room.role==='guest'&&!room.synced){status=TEXT.syncing;info='正在校正裝置時間…';beat=-1;}
  if(room.recovering){status='重連中';info='連線中斷，聲音暫停；正在重新連線。';beat=-1;}
  if(ev.rev!==lastVisualRev)renderBeatLayout(ev.playing?ev.settings:(room.role==='guest'?latest.settings:state.settings));
  if(beat!==lastVisualBeat||ev.rev!==lastVisualRev){const buttons=$('beats').children;for(let i=0;i<buttons.length;i++)buttons[i].classList.toggle('active',i===beat);lastVisualBeat=beat;lastVisualRev=ev.rev;}
  if(lastSecondText!==counter){I18N.set($('counter'),counter);lastSecondText=counter;}
  if(lastInfo!==info){I18N.set($('transportInfo'),info);lastInfo=info;}
  if(lastStateText!==status){I18N.set($('transportState'),status);lastStateText=status;}
  updateScreenFlash(now,ev);
  if(++wakeTick%180===0&&desiredEvent().playing)requestWake();requestAnimationFrame(animate);
}

/* === SONGS / LOCAL STORAGE === */
let editingSong=null,editingBase=null;
function selectSong(songId){
  if(room.role==='guest'||room.role==='connecting'||room.recovering)return;const song=state.songs.find(s=>s.id===songId);if(!song)return;
  state.activeId=song.id;requestSettings(clone(song.settings),{songChange:true,immediate:true,keepAccents:true});
}
function stepSong(direction){
  if(!state.songs.length||room.role==='guest'||room.role==='connecting'||room.recovering)return;
  const count=state.songs.length,index=state.songs.findIndex(s=>s.id===state.activeId);
  const target=index<0?(direction>0?0:count-1):(index+direction+count)%count;
  selectSong(state.songs[target].id);
}
function nextSong(){stepSong(1);}
function previousSong(){stepSong(-1);}
function openSong(songId=null,useCurrent=false){
  if(!songId&&state.songs.length>=CONFIG.maxSongs){toast('歌單上限為 200 首，請先匯出備份並整理。');return;}
  editingSong=songId;const song=state.songs.find(s=>s.id===songId);editingBase=clone(useCurrent?state.settings:(song?.settings||state.settings));
  if(!song&&!useCurrent){editingBase.meter='4/4';editingBase.note=4;editingBase.countIn=0;editingBase.accents=fitAccentCarry('4/4',accentCarryFrom(editingBase.accents));}
  I18N.set($('songDialogTitle'),song?'編輯歌曲':'新增歌曲');$('songName').value=song?.name||'';$('songBpm').value=editingBase.bpm;$('songMeter').value=editingBase.meter;$('songNote').value=editingBase.note;$('songCountIn').value=editingBase.countIn;
  $('deleteSong').hidden=!song;$('songOrder').hidden=!song;updateSongOrder();$('songDialog').showModal();setTimeout(()=>$('songName').focus(),20);
}
function updateSongOrder(){const index=state.songs.findIndex(s=>s.id===editingSong);$('moveSongUp').disabled=index<=0;$('moveSongDown').disabled=index<0||index===state.songs.length-1;I18N.set($('songPosition'),(index+1)+' / '+state.songs.length);}
function moveSong(delta){const i=state.songs.findIndex(s=>s.id===editingSong),j=i+delta;if(i<0||j<0||j>=state.songs.length)return;[state.songs[i],state.songs[j]]=[state.songs[j],state.songs[i]];saveLocal(true);renderSongs();updateSongOrder();}
$('songForm').addEventListener('submit',e=>{
  e.preventDefault();const name=cleanText($('songName').value);if(!name){$('songName').setCustomValidity(I18N.t('請輸入歌曲名稱'));$('songName').reportValidity();return;}
  const meter=$('songMeter').value,settings=validSettings({bpm:Number($('songBpm').value),meter,note:Number($('songNote').value),countIn:Number($('songCountIn').value),accents:meter===editingBase.meter?editingBase.accents:fitAccentCarry(meter,accentCarryFrom(editingBase.accents))},true);
  const song={id:editingSong||id(),name,settings,sample:false},index=state.songs.findIndex(s=>s.id===editingSong);
  if(index>=0)state.songs[index]=song;else state.songs.push(song);
  if(room.role!=='guest'&&room.role!=='connecting'&&!room.recovering){state.activeId=song.id;requestSettings(settings,{immediate:true,songChange:index<0,keepAccents:true});}
  const stored=saveLocal(true);renderSongs();$('songDialog').close();toast(stored?TEXT.saved:'\u6b4c\u66f2\u5df2\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff0c\u4f46\u700f\u89bd\u5668\u7121\u6cd5\u5132\u5b58\uff1b\u8acb\u5148\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002');
});
$('songName').addEventListener('input',()=>$('songName').setCustomValidity(I18N.t('')));
$('deleteSong').addEventListener('click',()=>{
  const song=state.songs.find(s=>s.id===editingSong);if(!song||!confirm(I18N.t('確定刪除「'+song.name+'」？')))return;
  state.songs=state.songs.filter(s=>s.id!==editingSong);if(state.activeId===editingSong){state.activeId=null;if(room.role!=='guest')commitSettings();}const stored=saveLocal(true);renderControls();$('songDialog').close();toast(stored?'\u5df2\u522a\u9664\u6b4c\u66f2\u3002':'\u5df2\u5f9e\u76ee\u524d\u9801\u9762\u522a\u9664\uff0c\u4f46\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8b8a\u66f4\uff1b\u8acb\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002');
});
$('moveSongUp').addEventListener('click',()=>moveSong(-1));$('moveSongDown').addEventListener('click',()=>moveSong(1));
$('addSong').addEventListener('click',()=>openSong());$('saveCurrent').addEventListener('click',()=>openSong(state.activeId,true));$('prevSong').addEventListener('click',previousSong);$('nextSong').addEventListener('click',nextSong);$('transportNextSong').addEventListener('click',nextSong);$('transportPrevSong').addEventListener('click',previousSong);
$('freeMode').addEventListener('click',()=>{state.activeId=null;requestSettings({}, {immediate:true,songChange:true});});
$('exportSongs').addEventListener('click',()=>{
  const payload={app:'tw-metronome-setlist',version:1,exportedAt:new Date().toISOString(),songs:state.songs};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='metronome-setlist-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('已匯出歌單備份。');
});
$('importSongs').addEventListener('click',()=>$('importFile').click());
$('importFile').addEventListener('change',async e=>{
  const file=e.target.files?.[0];e.target.value='';if(!file)return;
  try{if(file.size>2000000)throw Error('large');const data=JSON.parse(await file.text());if(data.app!=='tw-metronome-setlist'||data.version!==1||!Array.isArray(data.songs)||data.songs.length>CONFIG.maxSongs)throw Error('format');
    const songs=data.songs.map(s=>{const name=cleanText(s.name);if(!name)throw Error('name');return {id:id(),name,sample:!!s.sample,settings:validSettings(s.settings,true)};});
    if(!confirm(I18N.t('匯入 '+songs.length+' 首歌曲，並取代此瀏覽器原有歌單？原歌單請先匯出備份。')))return;
    state.songs=songs;state.activeId=null;if(room.role!=='guest')commitSettings();const stored=saveLocal(true);renderControls();toast(stored?'\u5df2\u532f\u5165 '+songs.length+' \u9996\u6b4c\u66f2\u3002':'\u5df2\u532f\u5165\u6b4c\u55ae\uff0c\u4f46\u50c5\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff1b\u8acb\u78ba\u8a8d\u700f\u89bd\u5668\u5141\u8a31\u5132\u5b58\u8cc7\u6599\u3002');
  }catch(e){toast('無法匯入：請選擇由本節拍器匯出、2 MB 以下的有效 JSON 歌單。');}
});

/* === CONTROLS / ACCESSIBILITY === */
$('playBtn').addEventListener('click',togglePlay);
$('bpmMinus').addEventListener('click',()=>requestSettings({bpm:state.settings.bpm-1}));$('bpmPlus').addEventListener('click',()=>requestSettings({bpm:state.settings.bpm+1}));
$('bpmRange').addEventListener('input',e=>requestSettings({bpm:Number(e.target.value)}));
function acceptBpm(){const raw=Number($('bpm').value);requestSettings({bpm:Number.isFinite(raw)&&raw>0?clamp(raw,40,300):state.settings.bpm});}
$('bpm').addEventListener('change',acceptBpm);$('bpm').addEventListener('keydown',e=>{if(e.key==='Enter'){acceptBpm();$('bpm').blur();}});
$('meter').addEventListener('change',e=>requestSettings({meter:e.target.value}));$('countIn').addEventListener('change',e=>requestSettings({countIn:Number(e.target.value)}));
document.querySelectorAll('[data-note]').forEach(b=>b.addEventListener('click',()=>requestSettings({note:Number(b.dataset.note)})));
let taps=[],tapReset;
function tapTempo(){
  if(room.role==='guest'||room.role==='connecting'||room.recovering)return;const now=performance.now();if(taps.length&&now-taps[taps.length-1]>2200)taps=[];taps.push(now);if(taps.length>7)taps.shift();
  $('tapBtn').classList.add('tapped');clearTimeout(tapReset);tapReset=setTimeout(()=>$('tapBtn').classList.remove('tapped'),100);
  if(taps.length>=2){const intervals=taps.slice(1).map((t,i)=>t-taps[i]);const avg=intervals.reduce((a,b)=>a+b,0)/intervals.length;requestSettings({bpm:clamp(Math.round(60000/avg),40,300)});}
  else toast('再點一次測速，連續多點幾次更準確。');
}
$('tapBtn').addEventListener('click',tapTempo);
$('volume').addEventListener('input',e=>{state.volume=Number(e.target.value);engine.setVolume();saveLocal();renderAudio();room.sendLocalStatus();});
$('muteBtn').addEventListener('click',()=>{if(room.role==='guest'&&(guestAudioRecoveryRequired||!engine.isReady())){restoreGuestAudio();return;}state.mute=!state.mute;engine.setVolume();if(!state.mute)engine.ensure().then(()=>{engine.invalidate();engine.schedule();room.sendLocalStatus();}).catch(e=>toast(e.message));renderAudio();renderControls();room.sendLocalStatus();});
$('tone').addEventListener('change',e=>{if(!hasOwn(AUDIO_TONES,e.target.value))return;state.tone=e.target.value;engine.cancelPreview();engine.invalidate();engine.schedule();saveLocal();renderAudio();});
$('audioPower').addEventListener('change',e=>{if(!hasOwn(AUDIO_POWER,e.target.value))return;state.audioPower=e.target.value;engine.cancelPreview();engine.setVolume();engine.invalidate();engine.schedule();saveLocal();renderAudio();if(state.audioPower==='boost')toast('已切換加強，請從較低音量開始試聽。');});
function setLatency(value){state.latency=Math.round(clamp(Number(value)||0,-300,300)/5)*5;engine.invalidate();engine.schedule();renderAudio();saveLocal();}
$('latency').addEventListener('input',e=>setLatency(e.target.value));$('latencyValue').addEventListener('change',e=>setLatency(e.target.value));
$('autoLatency').addEventListener('change',e=>{state.autoLatency=e.target.checked;engine.invalidate();engine.schedule();saveLocal();});
$('testAudio').addEventListener('click',()=>engine.test().catch(e=>toast(e.message)));

/* v2.1.2: opening Settings is a read-only refresh of its controls.
   Never reapply an old theme while opening a dialog. Only startup and an
   explicit press of the appearance switch may write the page's theme.
   Use the currently rendered theme when the DOM and a cached preference differ. */
function currentTheme(){
  const visible=document.documentElement.dataset.theme;
  return visible==='dark'||visible==='light'?visible:(state.theme==='dark'?'dark':'light');
}
function renderThemeControls(theme=state.theme){
  const dark=theme==='dark';
  setIcon($('themeBtn'),dark?'moon':'sun');
  $('themeBtn').setAttribute('aria-checked',String(dark));
  I18N.attr($('themeBtn'),'title',dark?'切換淺色模式':'切換深色模式');
  I18N.set($('themeState'),dark?'目前使用深色外觀':'目前使用淺色外觀');
}
function applyTheme(){
  const dark=state.theme==='dark';
  document.documentElement.dataset.theme=state.theme;
  document.querySelector('meta[name="theme-color"]').content=dark?'#191a18':'#f7f7f5';
  renderThemeControls(state.theme);
}
$('themeBtn').addEventListener('click',()=>{
  state.theme=currentTheme()==='dark'?'light':'dark';
  applyTheme();
  // Commit an explicit appearance choice before another settings action.
  // Reuse the existing failure handling and storage schema; no new storage key.
  saveLocal(true);
});
function toggleFocus(){
  const focused=document.body.classList.toggle('focus-mode');
  const button=$('focusBtn');button.setAttribute('aria-pressed',String(focused));
  const label=focused?'還原節拍器大小':'放大節拍器區塊';
  I18N.attr(button,'title',label);I18N.attr(button,'aria-label',label);
  setIcon(button,focused?'restore-panel':'focus');
  renderSongs();window.TempoliveStageView?.layout();
  window.scrollTo({top:0,behavior:'auto'});
}
$('focusBtn').addEventListener('click',toggleFocus);$('helpBtn').addEventListener('click',()=>$('helpDialog').showModal());
// The settings panel never pauses or restarts playback, including focus mode.
$('settingsBtn').addEventListener('click',()=>{
  const panel=$('settingsDialog');if(panel.open)return;
  renderAudio();renderThemeControls(currentTheme());renderScreenFlashSetting();window.TempoliveAudioContinuity?.refreshSetting();$('settingsNotice').hidden=true;
  panel.showModal();panel.scrollTop=0;
  $('settingsBtn').setAttribute('aria-expanded','true');
});
$('settingsDialog').addEventListener('keydown',event=>{
  if(event.key!=='Tab')return;
  const panel=$('settingsDialog');
  const controls=[...panel.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),a[href],[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length);
  if(!controls.length)return;
  const first=controls[0],last=controls[controls.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
$('settingsDialog').addEventListener('close',()=>{
  if($('settingsDialog').open)return;
  $('settingsBtn').setAttribute('aria-expanded','false');
  $('settingsNotice').hidden=true;
  $('settingsBtn').focus({preventScroll:true});
});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
document.addEventListener('keydown',e=>{
  if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||document.querySelector('dialog[open]')||e.target.closest('input,select,textarea,[contenteditable=true]'))return;
  if(e.code==='Space'){if(e.target.closest('button'))return;e.preventDefault();togglePlay();}
  else if(e.key.toLowerCase()==='t'){e.preventDefault();tapTempo();}
  else if(e.key.toLowerCase()==='n'){e.preventDefault();nextSong();}
  else if(e.key.toLowerCase()==='f'){e.preventDefault();toggleFocus();}
  else if((e.key==='ArrowUp'||e.key==='ArrowDown')&&room.role!=='guest'){e.preventDefault();requestSettings({bpm:state.settings.bpm+(e.key==='ArrowUp'?1:-1)*(e.shiftKey?5:1)});}
});

/* === OUTPUT SELECTION / BLUETOOTH === */
const supportsSink=()=>!!((window.AudioContext||window.webkitAudioContext)?.prototype?.setSinkId&&navigator.mediaDevices);
async function refreshDevices(){
  if(!navigator.mediaDevices?.enumerateDevices)return;
  const selected=$('audioOutput').value,devices=await navigator.mediaDevices.enumerateDevices(),outputs=devices.filter(d=>d.kind==='audiooutput'&&d.deviceId&&d.deviceId!=='default');
  $('audioOutput').replaceChildren(I18N.option(TEXT.outputDefault,''));outputs.forEach((d,i)=>$('audioOutput').append(I18N.option(()=>d.label||I18N.t('音訊裝置 ')+(i+1),d.deviceId)));
  if(outputs.some(d=>d.deviceId===selected))$('audioOutput').value=selected;
  else if(selected&&engine.ctx?.setSinkId){await engine.ctx.setSinkId('');toast('原輸出裝置已中斷，改用系統預設輸出。');}
  renderAudio();
}
$('chooseOutput').addEventListener('click',async()=>{
  if(!supportsSink()){I18N.set($('outputHint'),'此瀏覽器使用系統的音訊輸出。要用手機外放，請在控制中心選擇手機喇叭或中斷藍牙耳機，調高媒體音量，再點「試聽」。不需要耳機或麥克風權限即可播放。');toast('可使用手機喇叭；請確認系統輸出與媒體音量，再點試聽。');return;}
  try{
    await engine.ensure();
    if(navigator.mediaDevices.selectAudioOutput){const out=await navigator.mediaDevices.selectAudioOutput();await engine.ctx.setSinkId(out.deviceId);await refreshDevices();if(![...$('audioOutput').options].some(o=>o.value===out.deviceId))$('audioOutput').append(I18N.option(()=>out.label||I18N.t('已選輸出'),out.deviceId));$('audioOutput').value=out.deviceId;engine.invalidate();renderAudio();toast('已切換音訊輸出。');}
    else $('permissionDialog').showModal();
  }catch(e){toast('未切換輸出：請允許裝置權限，或改由系統選擇耳機。');}
});
$('grantDevicePermission').addEventListener('click',async()=>{
  $('permissionDialog').close();let stream;
  try{stream=await navigator.mediaDevices.getUserMedia({audio:true});await refreshDevices();$('audioOutput').focus();toast('已更新裝置清單，請選擇要使用的輸出。');}
  catch(e){toast('無法取得裝置清單，請改由系統選擇輸出。');}
  finally{stream?.getTracks().forEach(t=>t.stop());engine.configurePlaybackSession();engine.restoreOutput();}
});
$('audioOutput').addEventListener('change',async()=>{try{await engine.ensure();await engine.ctx.setSinkId($('audioOutput').value);engine.invalidate();engine.schedule();renderAudio();toast('已切換聲音輸出，請試聽確認。');}catch(e){$('audioOutput').value=typeof engine.ctx?.sinkId==='string'?engine.ctx.sinkId:'';toast('無法切換輸出，原輸出保持不變。');}});
if(navigator.mediaDevices?.addEventListener)navigator.mediaDevices.addEventListener('devicechange',()=>refreshDevices().catch(()=>{}).finally(()=>{engine.configurePlaybackSession();window.TempoliveAudioContinuity?.check('devicechange');}));

/* === SCREEN WAKE LOCK / VISIBILITY === */
let wakeLock=null,wakePending=false;
let guestAudioRecoveryRequired=false;
function armGuestRecoveryOnReturn(){if(!document.hidden&&room.role==='guest'&&!state.mute&&state.volume>0&&(desiredEvent().playing||currentEvent().playing)){guestAudioRecoveryRequired=true;renderControls();}}
async function requestWake(){
  if(!state.keepAwake||!desiredEvent().playing||document.hidden||wakeLock||wakePending)return;
  if(!navigator.wakeLock){I18N.set($('wakeStatus'),' · 此瀏覽器不支援');return;}
  wakePending=true;
  try{wakeLock=await navigator.wakeLock.request('screen');if(!desiredEvent().playing||!state.keepAwake){await releaseWake();return;}I18N.set($('wakeStatus'),' · 已啟用');wakeLock.addEventListener('release',()=>{wakeLock=null;I18N.set($('wakeStatus'),'');});}
  catch(e){I18N.set($('wakeStatus'),' · 未取得權限');}finally{wakePending=false;}
}
async function releaseWake(){const lock=wakeLock;wakeLock=null;if(lock)try{await lock.release();}catch(e){}I18N.set($('wakeStatus'),'');}
$('keepAwake').addEventListener('change',e=>{state.keepAwake=e.target.checked;saveLocal();if(state.keepAwake)requestWake();else releaseWake();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){armGuestRecoveryOnReturn();engine.restoreOutput();engine.invalidate();engine.schedule();requestWake();if(room.role==='guest')room.burstSync();renderControls();}});
window.addEventListener('focus',armGuestRecoveryOnReturn);
window.addEventListener('pageshow',armGuestRecoveryOnReturn);
window.addEventListener('online',()=>{$('offlineBanner').hidden=true;});window.addEventListener('offline',()=>{$('offlineBanner').hidden=false;});
window.addEventListener('pagehide',()=>{localSaveDirty=true;flushLocal({quiet:true});const peer=room.peer;if(room.role!=='solo')room.leave(false);else resetStopped();try{peer?.destroy();}catch(e){}engine.stopAll();engine.stopMediaGate();});

/* === ROOM DIALOG: network is never blocked on AudioContext.resume() === */
let dialogRoomRole='host',roomFormBusy=false,roomDialogToken=0;
function openRoomDialog(role){roomDialogToken++;dialogRoomRole=role;roomFormBusy=false;I18N.set($('roomError'),'');$('roomSubmit').disabled=false;$('displayName').value=state.name;$('joinCode').value='';$('joinCodeField').hidden=role!=='guest';$('joinCode').required=role==='guest';I18N.set($('roomDialogTitle'),role==='host'?'建立團隊房間':'代碼加入房間');I18N.set($('roomSubmit'),role==='host'?'建立房間':'加入並啟用聲音');I18N.set($('roomDialogIntro'),role==='host'?'你將成為主持人，統一控制大家的節奏。':'輸入主持人提供的四位數字，加入後自動跟隨節拍。');$('roomDialog').showModal();}
$('createRoom').addEventListener('click',()=>openRoomDialog('host'));$('joinRoom').addEventListener('click',()=>openRoomDialog('guest'));
function normalizeCode(value){return String(value).normalize('NFKC').replace(/[^0-9]/g,'').slice(0,4);}
$('joinCode').addEventListener('input',e=>{e.target.value=normalizeCode(e.target.value);});
$('joinCode').addEventListener('paste',e=>{const text=e.clipboardData?.getData('text');if(text!==undefined){e.preventDefault();$('joinCode').value=normalizeCode(text);}});
$('roomForm').addEventListener('submit',async e=>{
  e.preventDefault();if(roomFormBusy)return;const name=cleanText($('displayName').value,16),code=normalizeCode($('joinCode').value);
  if(!name){I18N.set($('roomError'),'請輸入暱稱。');return;}
  if(dialogRoomRole==='guest'&&!/^[0-9]{4}$/.test(code)){I18N.set($('roomError'),'請輸入正確的四位數字代碼。');return;}
  if(!navigator.onLine){I18N.set($('roomError'),'目前離線，請先連上網路。');return;}
  const token=++roomDialogToken;roomFormBusy=true;$('roomSubmit').disabled=true;I18N.set($('roomSubmit'),'連線中…');I18N.set($('roomError'),'正在連接中繼服務…');state.name=name;saveLocal();
  // Start audio in the user gesture, but do NOT await it before connecting.
  // Restricted browser audio can stay suspended indefinitely; show an unlock
  // control after joining instead of leaving the room form stuck forever.
  engine.ensure().catch(()=>{renderAudioStatus();});
  try{const ok=await room.enter(dialogRoomRole,name,code);if(ok&&token===roomDialogToken){$('roomDialog').close();toast(dialogRoomRole==='host'?'房間已建立，請分享四位數字給團員。':'已加入房間，開始校時。');}}
  catch(error){if(token===roomDialogToken&&$('roomDialog').open)I18N.set($('roomError'),peerErrorMessage(error));}
  finally{if(token===roomDialogToken){roomFormBusy=false;$('roomSubmit').disabled=false;I18N.set($('roomSubmit'),dialogRoomRole==='host'?'重試建立':'重試加入');}}
});
$('roomDialog').addEventListener('close',()=>{roomDialogToken++;roomFormBusy=false;if(room.connecting)room.cancelAttempt();});
$('leaveRoom').addEventListener('click',()=>{if(room.role==='host'&&!confirm(I18N.t('結束房間將停止所有參與者的節拍，確定結束？')))return;room.leave();});
$('copyCode').addEventListener('click',async()=>{
  try{if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(room.code);else{const area=document.createElement('textarea');area.value=room.code;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const copied=document.execCommand('copy');area.remove();if(!copied)throw Error('copy');}toast('已複製房間代碼：'+room.code);}
  catch(e){toast('請手動複製代碼：'+room.code);}
});
$('resyncBtn').addEventListener('click',()=>room.resync());
window.MetronomeDiagnostics=Object.freeze({snapshot:()=>({version:'2.1.7-stage-controls',role:room.role,code:room.code,synced:room.synced,recovering:room.recovering,offsetMs:room.offset,rttMs:room.rtt,settings:clone(room.role==='guest'?desiredEvent().settings:state.settings),playing:currentEvent().playing,desiredPlaying:desiredEvent().playing,events:clone(events),audioState:engine.ctx?.state||'not-created',audioReady:engine.isReady(),audioSession:engine.sessionMode,masterGain:engine.master?.gain.value??0,gameAudioSuppressed:engine.gameOutputSuppressed,gameOutputGain:engine.gameOutputGate?.gain.value??1,audioPower:state.audioPower,screenFlash:state.screenFlash,screenFlashCount:screenFlash.count,tone:state.tone,volume:state.volume,bufferCount:engine.buffers.size,activeVoices:engine.voices.size,scheduledClicks:engine.totalScheduled,droppedClicks:engine.dropped,queued:engine.entries.size,localMute:state.mute,songCount:state.songs.length,relay:'WSS',connectionStage:room.progress,localSave:{...localSaveStatus,pending:localSaveDirty}})});
applyTheme();renderScreenFlashSetting();renderControls();renderAudio();renderRoom();$('offlineBanner').hidden=navigator.onLine;
if(!supportsSink()){$('audioOutput').disabled=true;I18N.set($('chooseOutput'),'系統輸出說明');}
if(storageProblem)setTimeout(()=>toast('此瀏覽器的儲存資料無法讀取，已使用預設值。請使用歌單匯出備份。'),300);
requestAnimationFrame(animate);


// Locale refresh only repaints registered UI; it never publishes room events.

/* END original-script-1 */

;
/* BEGIN rhythmIntegration */
/* v1.17.1: game audio automatically takes priority on THIS device only.
   Main beat timing, room commands, saved mute/volume and game rules are preserved.
   Game remains in its own iframe/AudioContext. Start and GAME_OVER are explicit
   synchronous lifecycle hooks rather than a polling guess at whether it ended. */
(()=>{
  const openButton=document.getElementById('openRhythmGame');
  const dialog=document.getElementById('rhythmGameDialog');
  const closeButton=document.getElementById('closeRhythmGame');
  const frame=document.getElementById('rhythmGameFrame')||document.getElementById('rhythmGameFrameTemplate')?.content.querySelector('iframe');
  const loading=document.getElementById('rhythmGameLoading');
  const note=document.getElementById('rhythmActiveNotice');
  const volumeInput=document.getElementById('rhythmGameVolume');
  const volumeOutput=document.getElementById('rhythmGameVolumeValue');
  const volumeKey='tw.metronome.rhythm-game.volume.v1';
  let gameVolume=100;
  // Only the game slider gets a new, separate storage key. A denied storage
  // permission leaves a fully functional, session-only volume control.
  try{
    const stored=localStorage.getItem(volumeKey);
    if(stored!==null&&stored.trim()!==''&&Number.isFinite(Number(stored)))gameVolume=Math.max(0,Math.min(100,Math.round(Number(stored))));
  }catch(e){}
  let loaded=false,loadingStarted=false;
  const bridge=()=>{try{return frame.contentWindow?.RhythmGameBridge;}catch(e){return null;}};
  function setGameVolume(value,persist=true){
    const next=Number(value);if(!Number.isFinite(next))return;
    gameVolume=Math.max(0,Math.min(100,Math.round(next)));
    volumeInput.value=String(gameVolume);volumeOutput.value=gameVolume+'%';I18N.set(volumeOutput,gameVolume+'%');
    I18N.attr(volumeInput,'aria-valuetext',gameVolume===0?'靜音':gameVolume+'%');
    bridge()?.volume(gameVolume);
    if(persist){try{localStorage.setItem(volumeKey,String(gameVolume));}catch(e){}}
  }
  volumeInput.addEventListener('input',()=>setGameVolume(volumeInput.value));
  setGameVolume(gameVolume,false);
  /* v1.17.1: transient LOCAL output hold. Never publish a stop/start packet,
     overwrite state.mute/volume, save preferences, or rewind the beat timeline.
     Original stopped/muted states therefore remain stopped/muted afterwards. */
  let audioVisit=null,audioEpoch=0,closing=false,lastAudioTransition='idle';
  const transportPlaying=()=>!!(currentEvent().playing||desiredEvent().playing);
  function acquireMetronomeAudio(reason){
    if(!dialog.open||closing)return;
    if(audioVisit)return;
    audioVisit={id:++audioEpoch,wasPlaying:transportPlaying(),wasMuted:state.mute,volume:state.volume,reason};
    lastAudioTransition='held';engine.setGameOutputSuppressed(true);
    note.hidden=!audioVisit.wasPlaying;
    if(!note.hidden)I18N.set(note,'已暫時關閉本機節拍聲。遊戲結束或返回後自動恢復；房間其他人的節拍不受影響。');
  }
  async function releaseMetronomeAudio(reason,silent=Promise.resolve()){
    const visit=audioVisit;if(!visit)return;
    audioVisit=null;const epoch=++audioEpoch;lastAudioTransition='releasing';
    // Resume authorization is invoked in the close gesture when possible. The
    // output gate stays closed until the GAME has stopped/suspended its audio.
    const shouldWake=visit.wasPlaying&&transportPlaying()&&!state.mute&&state.volume>0&&!room.recovering&&!document.hidden;
    let wake=Promise.resolve(),wakeError=null;
    if(shouldWake&&!engine.isReady()){
      try{wake=engine.ensure().catch(error=>{wakeError=error;});}catch(error){wakeError=error;}
    }
    try{await Promise.all([Promise.resolve(silent).catch(()=>{}),wake]);}catch(e){}
    // Closing an old dialog cannot unmute a newly started/reopened game.
    if(epoch!==audioEpoch||audioVisit)return;
    engine.setGameOutputSuppressed(false);lastAudioTransition=reason;
    if(shouldWake&&transportPlaying()&&!room.recovering){engine.schedule();}
    if(wakeError){
      toast('瀏覽器尚未恢復節拍聲，請回主畫面重新啟用聲音。');
    }
    if(dialog.open){
      note.hidden=!visit.wasPlaying;
      if(!note.hidden)I18N.set(note,transportPlaying()&&!state.mute&&state.volume>0&&!wakeError?
        '遊戲已結束，已恢復本機節拍聲。再玩一次時會自動切換回遊戲聲音。':
        '遊戲已結束，保留目前的停止、靜音與音量設定。');
    }
  }
  function settleGameAudio(reason){
    // Called only after the original game has entered GAME_OVER. Cancelling
    // leftover game sources is synchronous; do not suspend its context here,
    // so an immediate replay is not raced by an old suspend promise.
    bridge()?.finishAudio?.();return releaseMetronomeAudio(reason);
  }
  function gameAudioSignal(action,source){
    if(source!==frame.contentWindow||!dialog.open||closing)return false;
    if(action==='begin'){acquireMetronomeAudio('game-start');return true;}
    if(action==='complete'){
      const snapshot=bridge()?.snapshot();if(snapshot?.state!=='GAME_OVER')return false;
      void settleGameAudio('game-complete');return true;
    }
    if(action==='failed'){void settleGameAudio('game-start-failed');return true;}
    return false;
  }
  window.TempoliveGameAudio=Object.freeze({signal:gameAudioSignal});

  function theme(){bridge()?.theme(document.documentElement.dataset.theme||'light');}
  function open(){
    if(dialog.open)return;
    closing=false;dialog.showModal();openButton.setAttribute('aria-expanded','true');
    acquireMetronomeAudio('game-open');
    if(!loadingStarted){
      loadingStarted=true;
      try{
        // Keep the unused game browsing context out of initial page loading.
        // Set srcdoc BEFORE first insertion: there is no about:blank warm-up.
        // Reuse the same mounted frame on later opens to preserve game progress.
        frame.srcdoc=JSON.parse(document.getElementById('rhythmGameSource').textContent);
        if(!frame.isConnected)document.getElementById('rhythmGameFrameTemplate').replaceWith(frame);
        I18N.attr(frame,'title','節奏記憶挑戰');
      }
      catch(error){loadingStarted=false;I18N.set(loading,'遊戲無法載入，請重新開啟。');void releaseMetronomeAudio('load-failed');}
    }else if(loaded){theme();bridge()?.show();}
    closeButton.focus({preventScroll:true});
  }
  function close(){
    if(!dialog.open)return;
    closing=true;const silent=bridge()?.hide();dialog.close();
    void releaseMetronomeAudio('game-closed',silent);
  }
  openButton.addEventListener('click',open);
  closeButton.addEventListener('click',close);
  dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
  dialog.addEventListener('click',e=>{
    if(e.target!==dialog)return;
    const r=dialog.getBoundingClientRect();
    if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();
  });
  dialog.addEventListener('close',()=>{
    if(dialog.open)return;
    closing=true;const silent=bridge()?.hide();void releaseMetronomeAudio('game-closed',silent);
    openButton.setAttribute('aria-expanded','false');
    const snapshot=bridge()?.snapshot();
    if(snapshot){
      const action=['START','GAME_OVER'].includes(snapshot.state)?'節奏小遊戲':'繼續節奏挑戰';
      I18N.attr(openButton,'title',action+(snapshot.highScore>0?'｜最高 '+snapshot.highScore+' 分':'')+'｜NEW');
      I18N.attr(openButton,'aria-label',action+'（新功能）');
    }
    openButton.focus({preventScroll:true});
  });
  frame.addEventListener('load',()=>{
    if(!loadingStarted||!bridge())return;
    loaded=true;loading.hidden=true;setGameVolume(gameVolume,false);theme();
    if(dialog.open)bridge().show();else bridge().hide();
  });
  window.addEventListener('message',event=>{
    if(event.source!==frame.contentWindow)return;
    if(event.data?.type==='rhythm-game-close')close();
    else if(event.data?.type==='rhythm-game-audio')gameAudioSignal(event.data.action,event.source);
  });
  new MutationObserver(theme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  window.addEventListener('pagehide',()=>{closing=true;audioVisit=null;audioEpoch++;engine.setGameOutputSuppressed(false);bridge()?.hide();});
  window.MetronomeGameDiagnostics=Object.freeze({snapshot:()=>({integrationVersion:'1.17.1-game-audio-switch',metronomeBase:'1.17.1',loaded,open:dialog.open,gameVolume,localAudioHeld:engine.gameOutputSuppressed,previouslyPlaying:audioVisit?.wasPlaying??false,audioTransition:lastAudioTransition,game:bridge()?.snapshot()||null})});
})();

/* END rhythmIntegration */

;
/* BEGIN band-addon-script */
/* TEMPOLIVE v1.14 live drawer messaging extension.
   Original metronome/game code remains byte-identical in its own script.
   Only room HELLO/STATUS/roster gain metadata; new band-* packets never enter
   transport controls. The host derives sender identity from the connection.
   Public broker delivery is not E2E encryption or a guarantee of audible sound.
   Speech: Web Speech API. Native synthesis uses the OS output, not setSinkId.
   References: developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
   developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event
*/
(()=>{
'use strict';
const C=Object.freeze({version:1,storageKey:'tempolive.band.v1',ttl:20000,receiptLife:120000,maxHistory:20,maxQueue:4,minSendGap:700,maxCustom:12,
 instruments:['鋼琴','鍵盤','木吉他','電吉他','貝斯','鼓','主領','歌唱','音控'],
 phrases:[{id:'fast',label:'太快',say:'慢一點',hint:'請慢一點'},{id:'slow',label:'太慢',say:'快一點',hint:'請快一點'},{id:'more',label:'多一點',say:'多一點',hint:''},{id:'less',label:'少一點',say:'少一點',hint:''},{id:'monitor-up',label:'監聽大',say:'監聽大一點',hint:'監聽大一點'},{id:'monitor-down',label:'監聽小',say:'監聽小一點',hint:'監聽小一點'},{id:'help',label:'要幫忙',say:'需要幫忙',hint:''}]});
const $b=id=>document.getElementById(id),now=()=>hostNow(),uid=()=>id();
const text=(v,n=40)=>String(v??'').normalize('NFKC').replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2066-\u2069]/g,'').trim().slice(0,n);
const isId=v=>typeof v==='string'&&/^[-a-zA-Z0-9]{1,80}$/.test(v);
const prefs={instrument:'',customInstruments:[],customPhrases:[],autoSpeak:true,volume:100,voiceURI:'',voiceEnURI:'',voiceDeURI:''};
try{const s=JSON.parse(localStorage.getItem(C.storageKey)||'null');if(s){prefs.instrument=text(s.instrument,16);prefs.customInstruments=Array.isArray(s.customInstruments)?[...new Set(s.customInstruments.map(x=>text(x,16)).filter(x=>x&&!C.instruments.includes(x)))].slice(0,12):[];prefs.customPhrases=Array.isArray(s.customPhrases)?[...new Set(s.customPhrases.map(x=>text(x)).filter(Boolean))].slice(0,12):[];prefs.autoSpeak=s.autoSpeak!==false;prefs.volume=Number.isFinite(s.volume)?Math.min(100,Math.max(0,s.volume)):100;prefs.voiceURI=text(s.voiceURI,240);prefs.voiceEnURI=text(s.voiceEnURI,240);prefs.voiceDeURI=text(s.voiceDeURI,240);}}catch(e){}
let storageError=false;function save(){try{localStorage.setItem(C.storageKey,JSON.stringify(prefs));}catch(e){storageError=true;}}
const statusText={pending:'等待送達',accepted:'主持人已接收',received:'已送達',queued:'已送達，等待播報',speaking:'正在播報',played:'裝置已完成播報',confirmed:'對方已確認',blocked:'已送達，語音未啟用',muted:'已送達，語音音量為零',disabled:'已送達，自動播報關閉',failed:'已送達，播報失敗',expired:'已送達，已逾播報時限',busy:'已送達，語音佇列已滿',unsupported:'對方需更新版本',offline:'對方離線／尚未確認送達',noack:'逾時未確認送達',interrupted:'裝置無法同時播放語音',rejected:'未送出'};
let route='',lastRender='',targetSig='',historySig='',phraseSig='',instrumentSig='',lastStatusAt=0,toastTimer;
let selectedTarget='',selectedPhrase='',selectedInstrument=prefs.instrument,sendLock=0,activeAlert=null,alertShownAt=0;
let composerStep='targets',sending=false,focusEpoch=0,customComposing=false,lastCompositionEnd=-Infinity;
let session='',inbox=[],outbox=[],ledger=new Map(),seen=new Map(),rate=new Map(),requests=new Map(),recipientIds=[];
const currentId=()=>room.peer?.id||'';
const online=()=>['host','guest'].includes(room.role)&&!room.recovering&&!room.connecting&&room.signalOnline&&(room.role==='host'||(room.connection?.open&&room.synced));
const allInstruments=()=>[...C.instruments,...prefs.customInstruments.filter(x=>!C.instruments.includes(x))];
const shortRole=name=>name==='鼓'?'鼓手':name;
const getPeople=()=>Array.isArray(room.roster)?room.roster.filter(p=>isId(p.id)):[];
const self=()=>getPeople().find(p=>p.id===currentId())||{id:currentId(),name:room.name||prefs.instrument,instrument:room.name||prefs.instrument};
function messagePhrase(m,language=I18N.lang){const preset=C.phrases.find(p=>p.id===m.phraseId);return preset?I18N.t(preset.say,language):m.text;}
function speakLabel(label,language,instrument){if(language==='zh-Hant')return shortRole(label);const name=I18N.person({name:label,instrument},language);return language==='de'?name.replace(/^Schlagzeug(?= |$)/,'Schlagzeuger'):name.replace(/^Drums(?= |$)/,'Drummer');}
function voiceLanguage(language=I18N.lang){return language==='de'?'de-DE':language==='en'?'en-US':'zh-TW';}
function voiceMatches(voice,language=I18N.lang){return (language==='de'?/^de(?:[-_]|$)/i:language==='en'?/^en(?:[-_]|$)/i:/^zh(?:[-_]|$)/i).test(voice.lang);}
const safeMessage=m=>m&&isId(m.id)&&isId(m.senderId)&&typeof m.senderLabel==='string'&&typeof m.targetLabel==='string'&&typeof m.text==='string'&&m.text.length<=40&&Array.isArray(m.targetIds)&&m.targetIds.length<=CONFIG.maxPeople&&m.targetIds.every(isId)&&Number.isFinite(m.createdAt)&&Number.isFinite(m.expiresAt)&&m.expiresAt-m.createdAt<=C.ttl+100;
function notify(message){if($b('bandDialog').open){I18N.set($b('bandInlineNotice'),message);$b('bandInlineNotice').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$b('bandInlineNotice').hidden=true,5000);}else toast(message);}
function spoken(m){if(I18N.lang==='de'){
 const target=['\u6240\u6709\u4eba','\u5168\u90e8\u4eba'].includes(m.targetLabel)?'An alle':I18N.person({name:m.targetLabel,instrument:m.targetInstrument},'de');
 const spokenPreset={fast:'bitte langsamer',slow:'bitte schneller',more:'bitte etwas mehr',less:'bitte etwas weniger','monitor-up':'bitte den Monitorpegel erh\u00f6hen','monitor-down':'bitte den Monitorpegel verringern',help:'ich brauche Hilfe'};
 // Custom messages are read verbatim; no machine translation of user text.
 const text=spokenPreset[m.phraseId]||m.text;
 return speakLabel(m.senderLabel,'de',m.senderInstrument)+' sagt: '+target+', '+text+(/[.!?\u3002\uff01\uff1f]$/.test(text)?'':'.');
}if(I18N.lang!=='en')return shortRole(m.senderLabel)+'說，'+m.targetLabel+'，'+m.text+'。';const target=['所有人','全部人'].includes(m.targetLabel)?'Everyone':I18N.person({name:m.targetLabel,instrument:m.targetInstrument});return speakLabel(m.senderLabel,'en',m.senderInstrument)+' says: '+target+', '+(messagePhrase(m,'en').startsWith('I ')?messagePhrase(m,'en'):messagePhrase(m,'en').replace(/^./,c=>c.toLowerCase()))+'.';}
function localMessage(m){return {id:m.id,senderId:m.senderId,senderLabel:text(m.senderLabel,24),targetLabel:text(m.targetLabel,24),text:text(m.text),targetIds:[...m.targetIds],createdAt:m.createdAt,expiresAt:m.expiresAt,phraseId:C.phrases.some(p=>p.id===m.phraseId)?m.phraseId:'custom',senderInstrument:text(m.senderInstrument||'',16),targetInstrument:text(m.targetInstrument||'',16)};}
function sendToHost(type,more){if(room.role==='guest'&&room.connection?.open&&!room.recovering)room.send(room.connection,room.packet(type,more));}
function deliver(id,type,data){if(id===currentId()){receivePacket({type,...data});return;}const entry=room.clients.get(id);if(entry?.hello&&entry.conn.open)room.send(entry.conn,room.packet(type,data));}
function announceStatus(){const t=performance.now();if(t-lastStatusAt<150)return;lastStatusAt=t;if(room.role==='guest')room.sendLocalStatus();else if(room.role==='host')room.updateRoster();}

class Speaker{
 constructor(){this.armed=false;this.problem='';this.voices=[];this.queue=[];this.active=null;this.counter=0;this.refresh();if(window.speechSynthesis?.addEventListener)window.speechSynthesis.addEventListener('voiceschanged',()=>this.refresh());}
 refresh(){try{this.voices=window.speechSynthesis?.getVoices()||[];}catch(e){this.voices=[];}renderVoices();}
 available(){return typeof window.speechSynthesis!=='undefined'&&typeof window.SpeechSynthesisUtterance==='function';}
 voice(language=I18N.lang){const uri=language==='de'?prefs.voiceDeURI:language==='en'?prefs.voiceEnURI:prefs.voiceURI;const preferred=this.voices.find(v=>v.voiceURI===uri&&voiceMatches(v,language));if(preferred)return preferred;return [...this.voices].filter(v=>voiceMatches(v,language)).sort((a,b)=>((b.lang.toLowerCase()===voiceLanguage(language).toLowerCase()?10:0)+(b.localService?2:0))-((a.lang.toLowerCase()===voiceLanguage(language).toLowerCase()?10:0)+(a.localService?2:0)))[0]||null;}
 status(){if(!this.available())return '不支援語音';if(!prefs.autoSpeak)return '僅顯示文字';if(!prefs.volume)return '語音靜音';if(this.problem)return '需要重新試聽';return this.armed?'語音已啟用':'待啟用語音';}
 arm(){if(this.active){notify('目前正在播報，請聽完後再試聽。');return;}this.refresh();this.problem='';this.enqueue({test:true,text:I18N.t("\u8a9e\u97f3\u63d0\u9192\u5df2\u555f\u7528\u3002\u7bc0\u62cd\u5668\u6703\u7e7c\u7e8c\u64ad\u653e\u3002"),language:I18N.lang,expiresAt:now()+C.ttl},true);}
 enqueue(item,manual=false){
  if(!this.available()){this.reject(item,'failed','此瀏覽器不支援語音合成，仍可接收文字。');return;}
  if(prefs.volume===0){this.reject(item,'muted','語音音量目前為零。');return;}
  if(!manual&&!prefs.autoSpeak){this.reject(item,'disabled');return;}
  if(!manual&&!this.armed){this.reject(item,'blocked');return;}
  if(this.voices.length&&!this.voice()){this.reject(item,'failed','找不到中文語音。請在裝置安裝中文語音後，再按啟用／試聽。');return;}
  if(!manual&&now()>item.expiresAt){this.reject(item,'expired');return;}
  if(this.queue.length>=C.maxQueue){this.reject(item,'busy');return;}
  this.queue.push({...item,manual,language:item.language||I18N.lang});if(item.id)receipt(item.id,'queued');this.pump();
 }
 reject(item,state,message=''){if(item.id)receipt(item.id,state);if(item.test||message){this.problem=message||'語音無法播放';notify(this.problem);}renderVoiceState();announceStatus();}
 pump(){
  if(this.active||!this.queue.length)return;
  const item=this.queue.shift();if(!item.test&&!item.manual&&now()>item.expiresAt){this.reject(item,'expired');this.pump();return;}
  if(document.hidden&&!item.manual){this.reject(item,'blocked');this.pump();return;}
  const utter=new SpeechSynthesisUtterance(item.text),voice=this.voice(item.language);utter.lang=voice?.lang||voiceLanguage(item.language);if(voice)utter.voice=voice;utter.volume=prefs.volume/100;utter.rate=1.08;utter.pitch=1;
  const token=++this.counter,job={token,item,utter,started:false,done:false,timer:null,listener:null,context:engine.ctx};this.active=job;
  const finish=(status,message='')=>{
   if(job.done||this.active!==job)return;job.done=true;clearTimeout(job.timer);job.context?.removeEventListener?.('statechange',job.listener);this.active=null;
   if(status==='played'){this.armed=true;this.problem='';}else if(['failed','interrupted'].includes(status)){this.problem=message||'語音未能播放，請重新試聽。';this.armed=false;}
   if(item.id)receipt(item.id,status);if(item.test)notify(status==='played'?'試聽完成。請確認實際喇叭／耳機有聲音；音量仍由系統限制。':this.problem||'試聽未完成。');
   renderVoiceState();announceStatus();setTimeout(()=>this.pump(),70);
  };
  job.finish=finish;
  utter.onstart=()=>{if(job.done)return;job.started=true;this.armed=true;this.problem='';clearTimeout(job.timer);job.timer=setTimeout(()=>{finish('failed','語音播放逾時。');window.speechSynthesis.cancel();},Math.min(25000,Math.max(9000,item.text.length*450)));if(item.id)receipt(item.id,'speaking');renderVoiceState();announceStatus();};
  utter.onend=()=>finish(job.started?'played':'failed');utter.onerror=e=>finish('failed',e.error==='not-allowed'?'瀏覽器尚未允許播報，請點「啟用／試聽」。':'語音服務無法播放，請重新試聽並確認中文語音已安裝。');
  job.listener=()=>{if(job.done)return;if(job.context?.state!=='running'&&desiredEvent().playing&&!document.hidden){finish('interrupted','此裝置目前無法同時播放語音與節拍，已停止語音；請重新啟用節拍並改用文字確認。');window.speechSynthesis.cancel();}};
  job.context?.addEventListener?.('statechange',job.listener);
  job.timer=setTimeout(()=>{finish('failed','語音尚未開始，請點「啟用／試聽」，並確認中文語音及輸出裝置。');window.speechSynthesis.cancel();},5500);
  try{window.speechSynthesis.resume();window.speechSynthesis.speak(utter);}catch(e){finish('failed','無法啟動語音，請使用支援中文語音的瀏覽器。');}
 }
 cancel(reason='blocked'){
  const jobs=this.queue.splice(0);jobs.forEach(item=>{if(item.id)receipt(item.id,reason);});
  if(this.active){const active=this.active;active.finish(reason);try{window.speechSynthesis.cancel();}catch(e){}}
 }
}
// Delay voice list painting until all event handlers are attached.
let speaker;
speaker=new Speaker();
function renderVoices(){
 if(typeof speaker==='undefined')return;
 const select=$b('bandVoiceSelect'),previous=I18N.lang==='de'?prefs.voiceDeURI:I18N.lang==='en'?prefs.voiceEnURI:prefs.voiceURI,voices=speaker.voices.filter(v=>voiceMatches(v));
 select.replaceChildren(I18N.option('自動選擇中文聲音',''));
 for(const v of voices)select.append(I18N.option(()=>v.name+' · '+v.lang+I18N.t(v.localService?'（本機）':'（可能需網路）'),v.voiceURI));
 select.value=voices.some(v=>v.voiceURI===previous)?previous:'';
 const hint=speaker.available()?(voices.length?'中文語音使用系統輸出；不會跟隨網頁另外指定的音效卡。請先試聽確認。':'裝置尚未列出中文語音；可先試聽，必要時安裝系統中文語音。'):'此瀏覽器不支援語音，仍可顯示收到的文字。';
 I18N.set($b('bandVoiceHint'),hint+' 不使用麥克風。雲端語音可能由裝置服務處理文字；本機語音優先。');
}
function renderVoiceState(){
 I18N.set($b('bandVoiceStatus'),speaker.status()+(speaker.problem?' · '+speaker.problem:''));
 I18N.set($b('roomVoiceStatus'),speaker.status()+(speaker.problem?' '+speaker.problem:''));$b('bandAutoSpeak').checked=prefs.autoSpeak;$b('roomAutoSpeak').checked=prefs.autoSpeak;
 $b('bandVoiceVolume').value=prefs.volume;I18N.set($b('bandVoiceVolumeValue'),prefs.volume+'%');
 if(activeAlert)paintAlert(activeAlert);
}
function decorateRoster(base,owner){
 const source=[{id:owner.peer?.id||'',instrument:owner.name,name:owner.name,role:'host',audio:owner.localAudioStatus(),bandVersion:1,voiceState:speaker.status()},...[...owner.clients.values()].filter(e=>e.hello).map(e=>({id:e.conn.peer,instrument:e.name,name:e.name,role:'guest',audio:e.audio,bandVersion:e.bandVersion||0,voiceState:e.bandVoice||'待啟用語音'}))];
 const counts=new Map(),position=new Map();for(const p of source)counts.set(p.instrument,(counts.get(p.instrument)||0)+1);
 for(const p of source){const n=(position.get(p.instrument)||0)+1;position.set(p.instrument,n);if(counts.get(p.instrument)>1)p.name=p.instrument+' '+n;}
 return source;
}
function hostSubmit(senderId,request){
 if(room.role!=='host'||room.recovering)return;
 const people=room.makeRoster(),sender=people.find(p=>p.id===senderId),mid=request?.id;
 if(!sender||!isId(mid))return;
 const key=senderId+':'+mid;
 const existing=ledger.get(key);if(existing){statusToSender(existing);return;}
 const decline=reason=>deliver(senderId,'band-reject',{id:mid,reason});
 if([...ledger.values()].some(r=>r.data.id===mid&&r.senderId!==senderId)){decline('訊息識別碼重複，請重新傳送。');return;}
 if(!Number.isFinite(request.createdAt)||Math.abs(now()-request.createdAt)>C.ttl||now()-request.createdAt< -5000){decline('訊息已過時，請重新傳送。');return;}
 if(now()-(rate.get(senderId)||0)<C.minSendGap){decline('傳送太密集，請稍等一下。');return;}
 const preset=C.phrases.find(p=>p.id===request.phrase),message=preset?.say||(request.phrase==='custom'?text(request.text):'');
 if(!message){decline('請先選擇或輸入訊息。');return;}
 let targets=request.target==='all'?people.filter(p=>p.id!==senderId):people.filter(p=>p.id===request.target&&p.id!==senderId);
 if(!targets.length){decline('對方已離開，或尚無其他團員。');return;}
 rate.set(senderId,now());
 const data={id:mid,senderId,senderLabel:text(sender.name,24),targetLabel:request.target==='all'?'所有人':text(targets[0].name,24),targetIds:targets.map(p=>p.id),text:message,phraseId:preset?.id||'custom',senderInstrument:text(sender.instrument||sender.name,16),targetInstrument:request.target==='all'?'':text(targets[0].instrument||targets[0].name,16),createdAt:now(),expiresAt:now()+C.ttl};
 const record={data,senderId,createdAt:now(),lastAttempt:now(),attempts:1,targets:targets.map(p=>({id:p.id,name:p.name,state:p.bandVersion>=1?'pending':'unsupported'}))};
 ledger.set(key,record);statusToSender(record);
 for(const target of record.targets)if(target.state!=='unsupported')deliver(target.id,'band-delivery',{message:data});
}
function statusToSender(record){deliver(record.senderId,'band-status',{id:record.data.id,message:record.data,targets:record.targets.map(x=>({...x}))});}
function hostReceipt(recipientId,packet){
 if(room.role!=='host'||!isId(packet?.id)||!isId(packet.senderId)||!Object.hasOwn(statusText,packet.status))return;
 if(!['received','queued','speaking','played','confirmed','blocked','muted','disabled','failed','expired','busy','interrupted'].includes(packet.status))return;
 const record=ledger.get(packet.senderId+':'+packet.id);if(!record||now()-record.createdAt>C.receiptLife)return;
 const target=record.targets.find(t=>t.id===recipientId);if(!target)return;
 if(target.state==='confirmed')return;
 if(packet.status==='received'&&!['pending','noack','offline'].includes(target.state))return;
 target.state=packet.status;
}
function acknowledgeArrival(item){
 const packet={id:item.id,senderId:item.senderId,status:'received'};
 if(room.role==='host')hostReceipt(currentId(),packet);else sendToHost('band-receipt',packet);
}
function receipt(messageId,status){
 const item=inbox.find(m=>m.id===messageId);if(!item)return;
 item.status=status;
 if(status==='received')acknowledgeArrival(item);
 if(activeAlert?.id===item.id)paintAlert(item);
}
function receivePacket(packet){
 if(packet.type==='band-delivery'){
  const m=packet.message;if(!safeMessage(m)||!m.targetIds.includes(currentId())||m.senderId===currentId())return;
  const key=m.senderId+':'+m.id;
  if(seen.has(key)){const old=inbox.find(x=>x.senderId===m.senderId&&x.id===m.id);if(old)acknowledgeArrival(old);return;}
  if(Math.abs(now()-m.createdAt)>C.receiptLife||m.createdAt>now()+5000)return;
  seen.set(key,now());const item={...localMessage(m),status:'received',confirmed:false,kind:'received'};inbox.unshift(item);inbox=inbox.slice(0,C.maxHistory);
  receipt(item.id,'received');showAlert(item);
  if(now()>item.expiresAt){receipt(item.id,'expired');return;}
  speaker.enqueue({id:item.id,text:spoken(item),expiresAt:item.expiresAt});
 }else if(packet.type==='band-status'){
  const row=outbox.find(x=>x.id===packet.id);if(!row||!safeMessage(packet.message)||packet.message.senderId!==currentId()||!Array.isArray(packet.targets)||packet.targets.length>CONFIG.maxPeople)return;
  row.accepted=true;row.message=localMessage(packet.message);row.targets=packet.targets.filter(t=>isId(t.id)&&Object.hasOwn(statusText,t.state)).map(t=>({id:t.id,name:text(t.name,24),state:t.state}));row.status='accepted';requests.delete(row.id);
 }else if(packet.type==='band-reject'){
  const row=outbox.find(x=>x.id===packet.id);if(row){row.status='rejected';row.error=text(packet.reason,100);requests.delete(row.id);notify(row.error);}
 }
}
/* v1.14 fast drawer: one click chooses the recipient; the next selects the
   phrase AND sends it. No preview/confirmation step or delivery-status screen.
   Basic transport ACKs remain internal for the existing deduplication/retry. */
function canCommunicate(){return online()&&(room.role==='host'||getPeople().some(p=>p.role==='host'&&p.bandVersion>=1));}
function drawerVisible(){return $b('bandDialog').open;}
function setComposerStep(step,focus=false){
 composerStep=step;
 $b('bandTargetStep').hidden=step!=='targets';$b('bandPhraseStep').hidden=step!=='phrases';
 I18N.set($b('bandStepStatus'),step==='targets'?'1 / 2':'2 / 2');
 I18N.attr($b('bandStepStatus'),'aria-label',step==='targets'?'第一步，共兩步':'第二步，共兩步');
 updateSelection();updatePreview();
 if(focus){$b('bandDrawerBody').scrollTop=0;const epoch=++focusEpoch;requestAnimationFrame(()=>{if(epoch!==focusEpoch||!drawerVisible()||composerStep!==step)return;$b(step==='targets'?'bandTargetTitle':'bandPhraseTitle').focus({preventScroll:true});});}
}
function resetComposer(){
 focusEpoch++;selectedTarget='';selectedPhrase='';composerStep='targets';sending=false;
 $b('bandCustomText').value='';$b('bandCustomBox').hidden=true;$b('bandOptions').open=false;
 $b('bandInlineNotice').hidden=true;clearTimeout(toastTimer);setComposerStep('targets');
}
function chooseTarget(id){
 if(!drawerVisible()||!canCommunicate()||sending)return;
 const other=getPeople().find(p=>p.id===id&&p.id!==currentId()&&p.bandVersion>=1);
 if(id!=='all'&&!other){notify('對方已離開，請重新選擇。');return;}
 if(id==='all'&&!getPeople().some(p=>p.id!==currentId()&&p.bandVersion>=1))return;
 selectedTarget=id;selectedPhrase='';$b('bandCustomBox').hidden=true;$b('bandInlineNotice').hidden=true;
 setComposerStep('phrases',true);
}
function choosePhrase(id,event){
 if(!drawerVisible()||composerStep!=='phrases'||sending||event?.detail>1)return;
 selectedPhrase=id;$b('bandCustomBox').hidden=id!=='custom';updateSelection();updatePreview();
 if(id==='custom'){$b('bandCustomText').focus();return;}
 makeRequest();
}
function makeRequest(){
 if(!drawerVisible()||composerStep!=='phrases'||sending)return false;
 if(!canCommunicate()){notify('房間尚未連線完成，請待連線恢復後再選擇短句。');return false;}
 const people=getPeople(),target=people.find(p=>p.id===selectedTarget&&p.id!==currentId());
 const validTarget=selectedTarget==='all'?people.some(p=>p.id!==currentId()&&p.bandVersion>=1):target?.bandVersion>=1;
 if(!validTarget){selectedTarget='';selectedPhrase='';setComposerStep('targets',true);notify('對方已離開，請重新選擇傳送對象。');return false;}
 let phrase=selectedPhrase,content='';
 if(phrase==='custom')content=text($b('bandCustomText').value);
 else if(phrase.startsWith('saved:')){content=prefs.customPhrases[Number(phrase.slice(6))]||'';phrase='custom';}
 if(!C.phrases.some(p=>p.id===phrase)&&!(phrase==='custom'&&content)){notify('請先選擇短句，或寫下自訂訊息。');return false;}
 if(performance.now()<sendLock){notify('上一則剛送出，請稍後再選一次。');return false;}
 sending=true;sendLock=performance.now()+C.minSendGap;updatePreview();
 if(selectedPhrase==='custom'&&$b('bandSavePhrase').checked&&content&&!prefs.customPhrases.includes(content)){
  prefs.customPhrases=[...prefs.customPhrases,content].slice(-C.maxCustom);save();renderPhrases();
 }
 const data={id:uid(),target:selectedTarget,phrase,text:content,createdAt:now()};
 const phraseText=C.phrases.find(p=>p.id===phrase)?.say||content;
 const row={id:data.id,kind:'sent',createdAt:now(),status:'pending',accepted:false,message:{senderLabel:self().name,targetLabel:selectedTarget==='all'?'所有人':target.name,text:phraseText},targets:[]};
 outbox.unshift(row);outbox=outbox.slice(0,C.maxHistory);requests.set(data.id,{data,attempts:1,at:now()});
 try{
  if(room.role==='host')hostSubmit(currentId(),data);else sendToHost('band-send',{request:data});
  if(row.status==='rejected')return false;
  // No confirmation, waiting page, receipt toast, or automatic local playback.
  // Closing the drawer never invokes the metronome transport or audio context.
  $b('bandDialog').close();return true;
 }catch(e){
  requests.delete(data.id);row.status='rejected';notify('傳話未能送出，請確認房間連線後再試。');return false;
 }finally{sending=false;setTimeout(updatePreview,C.minSendGap+10);}
}
function replay(item){if(!item)return;showAlert(item);speaker.refresh();speaker.problem='';speaker.enqueue({id:item.id,text:spoken(item),expiresAt:now()+C.ttl},true);}
function showAlert(item){
 activeAlert=item;alertShownAt=performance.now();paintAlert(item);const alert=$b('bandAlert');
 const modal=[...document.querySelectorAll('dialog[open]')].at(-1),parent=modal||document.body;
 if(alert.parentElement!==parent){try{if(alert.matches(':popover-open'))alert.hidePopover();}catch(e){}parent.append(alert);}
 if(alert.showPopover){try{if(!alert.matches(':popover-open'))alert.showPopover();}catch(e){alert.classList.add('band-alert-fallback');}}else alert.classList.add('band-alert-fallback');
}
function hideAlert(){const alert=$b('bandAlert');try{if(alert.matches(':popover-open'))alert.hidePopover();}catch(e){}alert.classList.remove('band-alert-fallback');activeAlert=null;}
function paintAlert(item){
 I18N.bind($b('bandAlertFrom'),()=>I18N.person({name:item.senderLabel,instrument:item.senderInstrument})+I18N.t(' 傳給 ')+(['全部人','所有人'].includes(item.targetLabel)?I18N.t(item.targetLabel):I18N.person({name:item.targetLabel,instrument:item.targetInstrument})));I18N.bind($b('bandAlertText'),()=>messagePhrase(item));
 // Local playback trouble is useful to the recipient; it is NOT sent back to
 // the sender. No "received/played/confirmed" receipt UI exists in this version.
 const hints={blocked:'語音尚未啟用，可點「再播一次」。',muted:'語音音量為零，請從 live傳話裡的語音設定調整。',disabled:'自動播報已關閉，可點「再播一次」。',failed:'語音未能播出，可再試一次。',expired:'此則訊息已過時，不會自動補播。',busy:'目前播報較多，可點「再播一次」。',interrupted:'此裝置的語音播報已中斷，請先確認聲音輸出。'};
 const hint=hints[item.status]||'';I18N.set($b('bandAlertHint'),hint);$b('bandAlertHint').hidden=!hint;
}
function renderTargets(){
 const people=getPeople(),me=currentId(),others=people.filter(p=>p.id!==me),sig=JSON.stringify(others.map(p=>[p.id,p.name,p.role,p.bandVersion]));
 if(sig===targetSig){updatePreview();return;}targetSig=sig;
 const lost=selectedTarget&&selectedTarget!=='all'&&!others.some(p=>p.id===selectedTarget&&p.bandVersion>=1);
 if(lost){selectedTarget='';selectedPhrase='';setComposerStep('targets',drawerVisible());if(drawerVisible())notify('對方已離開，請重新選擇對象。');}
 const node=$b('bandTargets');node.replaceChildren();
 const add=(id,label,sub,supported)=>{
  const b=document.createElement('button');b.type='button';b.className='band-tile';b.dataset.target=id;b.dataset.supported=supported?'true':'false';b.setAttribute('aria-pressed',String(selectedTarget===id));
  const title=document.createElement('span');I18N.bind(title,()=>id==='all'?I18N.t(label):I18N.person(others.find(p=>p.id===id)||{name:label}));const hint=document.createElement('small');I18N.set(hint,sub);b.append(title,hint);
  b.addEventListener('click',()=>chooseTarget(id));node.append(b);
 };
 add('all','全部人',others.length+' 位團員',others.some(p=>p.bandVersion>=1));
 for(const person of others)add(person.id,person.name,person.bandVersion>=1?(person.role==='host'?'主持人':'房間成員'):'需更新版本',person.bandVersion>=1);
 I18N.set($b('bandTargetHint'),others.length?'同樣的樂器會以編號區分；全部人不包含自己。':'等待其他樂器加入房間。');
 updatePreview();
}
function updateSelection(){document.querySelectorAll('[data-target]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.target===selectedTarget)));document.querySelectorAll('[data-phrase]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.phrase===selectedPhrase)));}
function renderPhrases(){
 const sig=JSON.stringify(prefs.customPhrases);if(sig===phraseSig)return;phraseSig=sig;const root=$b('bandPhrases');root.replaceChildren();
 const add=(id,label,hint='')=>{const b=document.createElement('button');b.type='button';b.className='band-tile';b.dataset.phrase=id;b.setAttribute('aria-pressed',String(selectedPhrase===id));const title=document.createElement('span');I18N.bind(title,()=>id.startsWith('saved:')?label:I18N.t(label));b.append(title);if(hint){const sub=document.createElement('small');I18N.set(sub,hint);b.append(sub);}b.addEventListener('click',event=>choosePhrase(id,event));root.append(b);};
 for(const p of C.phrases)add(p.id,p.label,p.hint);
 prefs.customPhrases.forEach((value,i)=>add('saved:'+i,value,'常用短句'));add('custom','自訂訊息','寫下想說的話');
 const list=$b('bandSavedPhrases');list.replaceChildren();
 prefs.customPhrases.forEach((value,index)=>{const row=document.createElement('div');row.className='band-saved-row';const title=document.createElement('span');I18N.bind(title,()=>value);const remove=document.createElement('button');remove.type='button';I18N.set(remove,'移除');I18N.bindAttr(remove,'aria-label',()=>I18N.t('移除常用短句：')+value);remove.addEventListener('click',()=>{prefs.customPhrases.splice(index,1);if(selectedPhrase.startsWith('saved:'))selectedPhrase='';save();renderPhrases();updatePreview();});row.append(title,remove);list.append(row);});
 updatePreview();
}
function updatePreview(){
 const ready=canCommunicate(),people=getPeople(),person=people.find(p=>p.id===selectedTarget&&p.id!==currentId());
 const validTarget=selectedTarget==='all'?people.some(p=>p.id!==currentId()&&p.bandVersion>=1):person?.bandVersion>=1;
 const enabled=ready&&!!validTarget&&!sending&&performance.now()>=sendLock;
 I18N.bind($b('bandSelectedTarget'),()=>selectedTarget==='all'?I18N.t('全部人'):I18N.person(person));
 for(const b of $b('bandTargets').querySelectorAll('button'))b.disabled=!ready||sending||b.dataset.supported!=='true';
 for(const b of $b('bandPhrases').querySelectorAll('button'))b.disabled=!enabled;
 const draft=text($b('bandCustomText').value);I18N.bind($b('bandDraftText'),()=>draft||I18N.t('先寫下想說的話'));
 $b('bandDraftChoice').disabled=!enabled||!draft||selectedPhrase!=='custom';
 $b('bandBack').disabled=sending;
}

function renderInstruments(){
 const instruments=allInstruments();if(!instruments.includes(selectedInstrument))selectedInstrument='';
 const sig=JSON.stringify([instruments,selectedInstrument]);if(sig===instrumentSig)return;instrumentSig=sig;
 const grid=$b('instrumentPicker');grid.replaceChildren();
 for(const value of instruments){const button=document.createElement('button');button.type='button';I18N.bind(button,()=>I18N.instrument(value));button.setAttribute('aria-pressed',String(value===selectedInstrument));button.addEventListener('click',()=>{selectedInstrument=value;prefs.instrument=value;save();instrumentSig='';renderInstruments();});grid.append(button);}
 const add=document.createElement('button');add.type='button';I18N.set(add,'＋ 新增樂器');add.addEventListener('click',()=>{$b('instrumentAddBox').hidden=false;$b('customInstrument').focus();});grid.append(add);
 $b('displayName').value=selectedInstrument;I18N.bind($b('instrumentSelected'),()=>selectedInstrument?I18N.t('你的樂器：')+I18N.instrument(selectedInstrument):I18N.t('請選擇本次使用的樂器或角色。'));
}
function syncRoom(){
 const joined=['host','guest'].includes(room.role),nextSession=joined?room.session:'';
 if(nextSession!==session){
  const previous=session;session=nextSession;
  if(previous){speaker.cancel('blocked');inbox=[];outbox=[];ledger.clear();seen.clear();rate.clear();requests.clear();hideAlert();if(drawerVisible())$b('bandDialog').close();}
  selectedTarget='';selectedPhrase='';targetSig='';resetComposer();
 }
 document.body.classList.toggle('band-in-room',joined);$b('bandQuickOpen').hidden=!joined;
 if(!joined&&drawerVisible())$b('bandDialog').close();
 I18N.bind($b('bandSelf'),()=>joined?I18N.person(self())+I18N.t(' · 房間 ')+room.code:'');
 $b('bandConnectNote').hidden=canCommunicate();
 I18N.set($b('bandConnectNote'),joined?'房間正在連線／校時，完成後即可傳話。':'先從主畫面建立或加入房間。');
 if(online()&&room.role==='guest'&&!getPeople().some(p=>p.role==='host'&&p.bandVersion>=1))I18N.set($b('bandConnectNote'),'主持人尚未啟用傳話功能，請全體更新後重新建立房間。');
 renderTargets();updatePreview();
}
function openPanel(){
 if(!['host','guest'].includes(room.role)){notify('請先建立或加入房間，才能使用 live傳話。');return;}
 if(drawerVisible())return;
 resetComposer();targetSig='';syncRoom();renderVoiceState();renderPhrases();
 $b('bandDialog').showModal();$b('bandDrawerBody').scrollTop=0;
 document.body.classList.add('band-drawer-open');$b('bandQuickOpen').setAttribute('aria-expanded','true');
}

function tick(){
 if(room.recovering){if(speaker.active||speaker.queue.length)speaker.cancel('blocked');}
 const time=now();
 if(online()){
  for(const [mid,r] of requests){if(time-r.data.createdAt>C.ttl){requests.delete(mid);const row=outbox.find(x=>x.id===mid);if(row&&!row.accepted){row.status='noack';notify('live傳話未能送出，請確認連線後再試。');}}else if(r.attempts<3&&time-r.at>1400){r.at=time;r.attempts++;if(room.role==='host')hostSubmit(currentId(),r.data);else sendToHost('band-send',{request:r.data});}}
  if(room.role==='host')for(const [key,r] of ledger){
   if(time-r.createdAt>C.receiptLife){ledger.delete(key);continue;}
   if(r.attempts<3&&time-r.lastAttempt>1400&&time<r.data.expiresAt){r.lastAttempt=time;r.attempts++;for(const t of r.targets)if(t.state==='pending')deliver(t.id,'band-delivery',{message:r.data});}
   if(time>=r.data.expiresAt){let changed=false;for(const t of r.targets)if(t.state==='pending'){t.state='noack';changed=true;}/* Arrival status remains internal; no recipient report is displayed or sent. */}
  }
 }
 for(const [key,t] of seen)if(time-t>C.receiptLife)seen.delete(key);
 if(activeAlert&&performance.now()-alertShownAt>20000)hideAlert();
 updatePreview();
}
// Minimal room hooks. Original methods still process all transport operations.
const originalSend=Room.prototype.send;
Room.prototype.send=function(conn,data){if(data?.type==='hello'||data?.type==='status')data={...data,band:{version:1,voice:speaker.status()}};return originalSend.call(this,conn,data);};
const originalRoster=Room.prototype.makeRoster;
Room.prototype.makeRoster=function(){return decorateRoster(originalRoster.call(this),this);};
const originalAccept=Room.prototype.accept;
Room.prototype.accept=function(conn,generation){
 conn.on('data',data=>{
  const entry=this.clients.get(conn.peer);if(generation!==this.generation||this.role!=='host'||!entry||!data||data.app!=='tw-beat'||data.v!==2)return;
  if(data.type==='hello'||(entry.hello&&data.session===this.session&&data.type==='status')){entry.bandVersion=data.band?.version===1?1:0;entry.bandVoice=text(data.band?.voice,30)||'待啟用語音';}
  if(!entry.hello||entry.bandVersion!==1||data.session!==this.session)return;
  if(data.type==='band-send')hostSubmit(conn.peer,data.request);
  else if(data.type==='band-receipt')hostReceipt(conn.peer,data);
 });
 return originalAccept.call(this,conn,generation);
};
const originalReceive=Room.prototype.receiveGuest;
Room.prototype.receiveGuest=function(data){const result=originalReceive.call(this,data);if(this.role==='guest'&&data?.session===this.session&&data.app==='tw-beat'&&data.v===2&&['band-delivery','band-status','band-reject'].includes(data.type))receivePacket(data);return result;};
const originalRenderRoom=renderRoom;
renderRoom=function(){const result=originalRenderRoom();syncRoom();return result;};
// Registration name remains an internal compatibility field; user never types a nickname.
for(const name of ['createRoom','joinRoom'])$b(name).addEventListener('click',()=>{selectedInstrument=prefs.instrument;instrumentSig='';renderInstruments();$b('instrumentAddBox').hidden=true;renderVoiceState();});
$b('roomForm').addEventListener('submit',event=>{
 if(!selectedInstrument||!allInstruments().includes(selectedInstrument)){event.preventDefault();event.stopImmediatePropagation();I18N.set($b('roomError'),'請先選擇你的樂器或角色。');return;}
 $b('displayName').value=selectedInstrument;prefs.instrument=selectedInstrument;save();
 // Start speech in the original gesture. Never await it or block room networking.
 if(prefs.autoSpeak&&!speaker.armed)speaker.arm();
},true);
$b('addInstrumentConfirm').addEventListener('click',()=>{const value=text($b('customInstrument').value,16);if(!value||['全部人','所有人','新增樂器'].includes(value)){I18N.set($b('instrumentAddError'),'請輸入 1–16 字的樂器或角色名稱。');return;}if(!allInstruments().includes(value)){if(prefs.customInstruments.length>=12){I18N.set($b('instrumentAddError'),'最多新增 12 個樂器。');return;}prefs.customInstruments.push(value);}selectedInstrument=value;prefs.instrument=value;save();$b('customInstrument').value='';I18N.set($b('instrumentAddError'),'');$b('instrumentAddBox').hidden=true;instrumentSig='';renderInstruments();});
$b('customInstrument').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$b('addInstrumentConfirm').click();}});
$b('bandQuickOpen').addEventListener('click',openPanel);
$b('bandDialog').querySelector('[data-band-close]').addEventListener('click',()=>$b('bandDialog').close());
$b('bandDialog').addEventListener('close',()=>{
 if(drawerVisible())return;
 resetComposer();document.body.classList.remove('band-drawer-open');
 $b('bandQuickOpen').setAttribute('aria-expanded','false');
 if(!$b('bandQuickOpen').hidden)$b('bandQuickOpen').focus({preventScroll:true});
});
$b('bandDialog').addEventListener('click',e=>{if(e.target===$b('bandDialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
$b('bandDialog').addEventListener('keydown',e=>{if(e.key!=='Tab')return;const controls=[...e.currentTarget.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),summary')].filter(el=>{if(!el.getClientRects().length)return false;for(let p=el.parentElement;p&&p!==e.currentTarget;p=p.parentElement)if(p.tagName==='DETAILS'&&!p.open&&!p.querySelector('summary')?.contains(el))return false;return true;});if(!controls.length)return;const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}});
$b('bandCustomText').addEventListener('input',updatePreview);
$b('bandBack').addEventListener('click',()=>{selectedTarget='';selectedPhrase='';$b('bandCustomBox').hidden=true;setComposerStep('targets',true);});
$b('bandCustomText').addEventListener('compositionstart',()=>{customComposing=true;});
$b('bandCustomText').addEventListener('compositionend',()=>{customComposing=false;lastCompositionEnd=performance.now();updatePreview();});
$b('bandCustomText').addEventListener('keydown',event=>{if(event.key==='Enter'&&(event.isComposing||customComposing||event.keyCode===229||performance.now()-lastCompositionEnd<80))event.preventDefault();});
$b('bandCustomBox').addEventListener('submit',event=>{event.preventDefault();if(customComposing||performance.now()-lastCompositionEnd<80)return;selectedPhrase='custom';makeRequest();});
for(const id of ['bandEnableVoice','roomVoiceTest'])$b(id).addEventListener('click',()=>speaker.arm());
for(const id of ['bandAutoSpeak','roomAutoSpeak'])$b(id).addEventListener('change',e=>{prefs.autoSpeak=e.target.checked;save();if(!prefs.autoSpeak)speaker.cancel('disabled');renderVoiceState();announceStatus();});
$b('bandVoiceVolume').addEventListener('input',e=>{prefs.volume=Number(e.target.value);save();if(!prefs.volume)speaker.cancel('muted');renderVoiceState();announceStatus();});
$b('bandVoiceSelect').addEventListener('change',e=>{if(I18N.lang==='de')prefs.voiceDeURI=e.target.value;else if(I18N.lang==='en')prefs.voiceEnURI=e.target.value;else prefs.voiceURI=e.target.value;save();speaker.armed=false;speaker.problem='';renderVoiceState();announceStatus();});
$b('bandAlertClose').addEventListener('click',hideAlert);$b('bandAlertReplay').addEventListener('click',()=>replay(activeAlert));
document.addEventListener('visibilitychange',()=>{if(document.hidden&&(speaker.active||speaker.queue.length))speaker.cancel('blocked');});
window.addEventListener('pagehide',()=>{speaker.cancel('blocked');hideAlert();});
new MutationObserver(changes=>{if(activeAlert&&changes.some(m=>m.target.tagName==='DIALOG'))showAlert(activeAlert);}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
window.TempoliveBand=Object.freeze({version:'1.14-live-drawer',snapshot:()=>({session,online:online(),drawerOpen:drawerVisible(),composerStep,selectedTarget,sending,instrument:prefs.instrument,self:currentId(),people:getPeople().map(p=>({...p})),volume:prefs.volume,voiceState:speaker.status(),autoSpeak:prefs.autoSpeak,queue:speaker.queue.length,speaking:!!speaker.active,received:inbox.map(m=>({...m})),sent:outbox.map(m=>({...m,targets:m.targets.map(t=>({...t}))})),localStorageAvailable:!storageError,customInstruments:[...prefs.customInstruments],customPhrases:[...prefs.customPhrases]}),open:openPanel});
I18N.onChange(()=>{renderVoices();renderVoiceState();});
renderInstruments();renderPhrases();renderVoices();renderVoiceState();syncRoom();setInterval(tick,500);
})();

/* END band-addon-script */

;
/* BEGIN original-script-4 */
TempoliveI18n.mount(document);
/* END original-script-4 */

;
/* BEGIN tempolive-guide-controls */
/* v1.20.1 reading-only help. No audio, transport, room or stored settings access. */
(()=>{
  const dialog=document.getElementById('helpDialog');
  const scroller=document.getElementById('guideScroll');
  const helpButton=document.getElementById('helpBtn');
  const topics=[...dialog.querySelectorAll('.guide-topic')];
  // The original Help button still owns showModal(). This handler only resets
  // the reading position, so reopening never starts halfway through old copy.
  helpButton.addEventListener('click',()=>{
    topics.forEach(topic=>topic.open=false);scroller.scrollTop=0;
    helpButton.setAttribute('aria-expanded','true');
    document.getElementById('guideClose').focus({preventScroll:true});
  });
  topics.forEach(topic=>topic.addEventListener('toggle',()=>{
    if(!topic.open)return;
    topics.forEach(other=>{if(other!==topic)other.open=false;});
    requestAnimationFrame(()=>{
      if(!dialog.open||!topic.open)return;
      const bounds=scroller.getBoundingClientRect(),head=topic.querySelector('summary').getBoundingClientRect();
      // Closing the previously open topic can pull the new heading above the
      // viewport. Keep its heading in view without focusing or moving playback.
      if(head.top<bounds.top+8||head.top>bounds.top+bounds.height*.3){
        scroller.scrollTop+=head.top-bounds.top-12;
      }
    });
  }));
  dialog.addEventListener('keydown',event=>{
    if(event.key!=='Tab')return;
    const controls=[...dialog.querySelectorAll('button:not(:disabled),summary,a[href],[tabindex]:not([tabindex="-1"])')].filter(el=>{
      if(!el.getClientRects().length)return false;
      for(let parent=el.parentElement;parent&&parent!==dialog;parent=parent.parentElement){
        if(parent.tagName==='DETAILS'&&!parent.open&&!parent.querySelector('summary')?.contains(el))return false;
      }
      return true;
    });
    if(!controls.length)return;
    const first=controls[0],last=controls.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  dialog.addEventListener('close',()=>{
    if(dialog.open)return;
    helpButton.setAttribute('aria-expanded','false');
    helpButton.focus({preventScroll:true});
  });
})();

/* END tempolive-guide-controls */

;
/* BEGIN tempolive-tutorial-code */
/* TEMPOLIVE v2.1.1: a read-only, fully local product walkthrough.
   No setters, room methods, transport/audio APIs, game bridge, form submissions,
   speech synthesis, storage writes or artificial clicks are used by the tour.
   Actual page regions are shown in a separate scroll viewport. State-dependent
   panels use explicitly labelled, inert teaching previews instead of opening
   rooms, sending messages or starting the game. All existing scripts unchanged. */
(()=>{
'use strict';
const byId=id=>document.getElementById(id);
const app=byId('tourWorkspace'),coach=byId('tourCoach'),stage=byId('tourStage');
const scroller=byId('tourStageScroller'),preview=byId('tourPreview');
const button=byId('tutorialBtn'),bodyText=byId('tourStepBody'),title=byId('tourStepTitle');
const pair=(zh,en)=>({zh,en}),pick=x=>typeof x==='string'?x:(I18N.lang==='de'?I18N.t(x.zh,'de'):I18N.lang==='en'?x.en:x.zh);
const copy={
 entry:pair('\u64cd\u4f5c\u6559\u5b78','Guided tour'),close:pair('\u7d50\u675f\u6559\u5b78','Close tutorial'),
 prev:pair('\u4e0a\u4e00\u6b65','Back'),next:pair('\u4e0b\u4e00\u6b65','Next'),finish:pair('\u5b8c\u6210\u6559\u5b78','Finish tour'),
 jump:pair('\u8df3\u5230\u4e3b\u984c','Jump to'),readonly:pair('\u770b\u4e00\u904d\u5c31\u597d\uff1b\u6559\u5b78\u4e0d\u6703\u6539\u8a2d\u5b9a\u3001\u958b\u623f\u6216\u9001\u8a0a\u606f\u3002','Read along. The tour never changes settings, creates a room or sends a message.'),
 preview:pair('\u6559\u5b78\u793a\u610f','Teaching preview'),previewHint:pair('\u4e0d\u6703\u57f7\u884c\u64cd\u4f5c','No actions are performed'),
 chapter: [pair('\u5718\u968a\u5408\u4f5c','Play together'),pair('\u7bc0\u62cd\u8207\u6b4c\u55ae','Metronome & setlist'),pair('\u97f3\u8a0a\u8207\u5916\u89c0','Sound & appearance'),pair('\u66f4\u591a\u529f\u80fd','More features')],
 busy:pair('\u8acb\u5148\u95dc\u9589\u76ee\u524d\u8996\u7a97\uff0c\u518d\u958b\u555f\u64cd\u4f5c\u6559\u5b78\u3002','Close the current panel before starting the tour.')
};
const STEPS=[
 {id:'rooms',group:0,target:'#roomCard',title:pair('\u5148\u628a\u5718\u968a\u9023\u8d77\u4f86','Bring the band together'),body:pair('\u4e00\u4eba\u5efa\u7acb\u623f\u9593\u7576\u4e3b\u6301\u4eba\uff0c\u5176\u4ed6\u4eba\u7528\u56db\u4f4d\u4ee3\u78bc\u52a0\u5165\u3002\u5168\u54e1\u4f7f\u7528\u540c\u4e00\u7248\u672c\uff0c\u4e26\u4fdd\u6301\u7db2\u8def\u9023\u7dda\u3002','One person creates a room as host. Everyone else joins with the four-digit code. Use the same version and stay online.'),where:pair('\u4e3b\u756b\u9762 \u2192 \u5718\u968a\u623f\u9593','Main screen \u2192 Team room')},
 {id:'join',group:0,scene:'join',title:pair('\u9078\u6a02\u5668\uff0c\u518d\u52a0\u5165','Choose your instrument'),body:pair('\u7528\u6a02\u5668\u6216\u89d2\u8272\u4ee3\u66ff\u66b1\u7a31\uff1b\u6c92\u6709\u7684\u53ef\u81ea\u5df1\u65b0\u589e\u3002\u53c3\u8207\u8005\u8f38\u5165\u4e3b\u6301\u4eba\u7d66\u7684\u4ee3\u78bc\uff0c\u52a0\u5165\u524d\u5148\u8a66\u807d\u8a9e\u97f3\u3002','Choose an instrument or role instead of a nickname, or add your own. Guests enter the host\u2019s code. Test voice playback before joining.'),where:pair('\u5efa\u7acb\u623f\u9593 / \u4ee3\u78bc\u52a0\u5165','Create room / Join with code')},
 {id:'sync',group:0,scene:'sync',title:pair('\u4e00\u4eba\u63a7\u5236\uff0c\u5168\u5718\u8ddf\u62cd','One host, one shared beat'),body:pair('\u4e3b\u6301\u4eba\u63a7\u5236\u901f\u5ea6\u3001\u64ad\u653e\u8207\u5207\u6b4c\uff0c\u5718\u54e1\u5404\u81ea\u8abf\u8033\u6a5f\u97f3\u91cf\u3002\u6821\u6642\u4e0d\u7b49\u65bc\u96f6\u5ef6\u9072\uff0c\u6f14\u51fa\u524d\u8acb\u5148\u5be6\u6e2c\u3002','The host controls tempo, playback and song changes. Each member adjusts their own volume. Clock sync is not zero latency: test your setup before a performance.'),where:pair('\u5165\u623f\u5f8c \u2192 \u623f\u9593\u8cc7\u8a0a\u8207\u91cd\u65b0\u6821\u6642','After joining \u2192 Room status & Resync')},
 {id:'talk-target',group:0,scene:'recipients',title:pair('\u73fe\u5834\u8981\u8aaa\u8a71\uff0c\u9ede\u5074\u908a','Need to tell someone?'),body:pair('\u5165\u623f\u5f8c\u624d\u6703\u51fa\u73fe live\u50b3\u8a71\u5074\u62c9\u9215\u3002\u5148\u9078\u6a02\u5668\u6216\u300c\u5168\u90e8\u4eba\u300d\uff1b\u540c\u6a23\u6a02\u5668\u6703\u4ee5\u7de8\u865f\u5340\u5206\u3002','After joining, open the live talk tab at the side. Pick an instrument or Everyone. Matching instruments are numbered so you can choose the right person.'),where:pair('\u5165\u623f\u5f8c \u2192 \u53f3\u5074 live\u50b3\u8a71','After joining \u2192 Side live talk tab')},
 {id:'talk-message',group:0,scene:'phrases',title:pair('\u9ede\u77ed\u53e5\uff0c\u5c31\u81ea\u52d5\u50b3\u51fa','Tap a phrase to send'),body:pair('\u9078\u77ed\u53e5\u5c31\u9001\u51fa\u4e26\u6536\u8d77\uff0c\u4e0d\u7528\u518d\u78ba\u8a8d\u3002\u4e5f\u80fd\u81ea\u8a02\u8a0a\u606f\uff1b\u5148\u555f\u7528\u8a9e\u97f3\u8a66\u807d\uff0c\u50b3\u8a71\u4e0d\u6703\u4e3b\u52d5\u505c\u4e0b\u7bc0\u62cd\u3002','Tap a phrase and it sends immediately, then closes the panel. Add custom messages too. Enable and test voice first; live talk does not intentionally stop the metronome.'),where:pair('live\u50b3\u8a71 \u2192 \u77ed\u53e5 / \u8a9e\u97f3\u8a2d\u5b9a','Live talk \u2192 Phrases / Voice options')},
 {id:'tempo',group:1,target:'.tempo-zone',title:pair('\u5148\u6c7a\u5b9a\u901f\u5ea6','Set your tempo'),body:pair('\u8f38\u5165 40\u2013300 BPM\uff0c\u6216\u7528\u52a0\u6e1b\u9375\u3001\u6ed1\u687f\u8abf\u6574\u3002\u9019\u88e1\u7684 BPM \u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\uff1b\u4e0d\u7528\u505c\u4e0b\u4f86\u624d\u80fd\u6539\u901f\u5ea6\u3002','Enter 40\u2013300 BPM, or use the +/\u2212 buttons and slider. BPM uses the quarter note as its reference. Tempo can change during playback.'),where:pair('\u7bc0\u62cd\u5668 \u2192 BPM \u5927\u6578\u5b57','Metronome \u2192 BPM display')},
 {id:'play-tap',group:1,target:'.transport',title:pair('\u64ad\u653e\uff0c\u6216\u9ede\u51fa\u4f60\u7684\u901f\u5ea6','Play, or tap your tempo'),body:pair('\u4e0a\u6392\u5169\u500b\u5927\u5716\u793a\u5207\u63db\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\uff0c\u4e0b\u65b9\u4f9d\u5e8f\u70ba\u958b\u59cb\uff0f\u505c\u6b62\u8207\u9ede\u6309\u6e2c\u901f\u3002\u9023\u9ede\u6e2c\u901f\u81f3\u5c11\u5169\u6b21\uff0c\u5373\u53ef\u4f30\u7b97 BPM\u3002','The two large icons on the top row select the previous or next song. Start/Stop and Tap tempo each have their own row below. Tap at least twice to estimate your BPM.'),where:pair('\u7bc0\u62cd\u5668 \u2192 \u64ad\u653e\u8207\u5207\u6b4c\u6309\u9215','Metronome \u2192 Main controls')},
 {id:'rhythm',group:1,target:'.settings-grid',title:pair('\u8a2d\u5b9a\u6bcf\u5c0f\u7bc0\u600e\u9ebc\u6578','Choose how the beat is divided'),body:pair('\u62cd\u865f\u6c7a\u5b9a\u6bcf\u5c0f\u7bc0\u7684\u62cd\u6578\u8207\u97f3\u7b26\u55ae\u4f4d\u3002\u7d30\u5206\u53ef\u9078\u56db\u5206\u3001\u516b\u5206\u6216\u5341\u516d\u5206\uff1b\u958b\u59cb\u524d\u60f3\u5148\u6578\u62cd\uff0c\u5c31\u8a2d\u9810\u5099\u62cd\u3002','Time signature sets the beats and beat unit in each bar. Choose quarter-, eighth- or sixteenth-note subdivision. Add a count-in to hear a lead-in before starting.'),where:pair('\u62cd\u865f / \u97f3\u7b26\u7d30\u5206 / \u9810\u5099\u62cd','Time signature / Subdivision / Count-in')},
 {id:'accents',group:1,target:'#beats',title:pair('\u6bcf\u4e00\u62cd\u90fd\u53ef\u8abf\u8f15\u91cd','Set the accent of each beat'),body:pair('\u9ede\u62cd\u9ede\u53ef\u5207\u63db\u300c\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3\u300d\u3002\u5207\u6b4c\u4e0d\u6703\u91cd\u8a2d\u76ee\u524d\u7684\u8f15\u91cd\u97f3\uff1b\u62cd\u6578\u6539\u8b8a\u4e5f\u6703\u5ef6\u7e8c\u4f60\u7684\u9078\u64c7\u3002','Tap a beat to cycle Accented \u2192 Unaccented \u2192 Muted. Changing songs keeps your current accent choices, even when the number of beats changes.'),where:pair('BPM \u4e0b\u65b9 \u2192 \u62cd\u9ede\u65b9\u584a','Below BPM \u2192 Beat buttons')},
 {id:'volume',group:1,target:'.main-volume',title:pair('\u8abf\u81ea\u5df1\u807d\u5230\u7684\u97f3\u91cf','Adjust only your own volume'),body:pair('\u9019\u689d\u6ed1\u687f\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u7684\u7bc0\u62cd\u8072\uff0c\u4e0d\u6703\u6539\u5176\u4ed6\u5718\u54e1\u3002\u8a9e\u97f3\u50b3\u8a71\u548c\u5c0f\u904a\u6232\u6709\u5404\u81ea\u7684\u97f3\u91cf\u3002','This slider changes the metronome volume on this device only, not anyone else\u2019s. Live talk and the rhythm game each have their own volume control.'),where:pair('\u4e3b\u756b\u9762 \u2192 \u672c\u6a5f\u97f3\u91cf','Main screen \u2192 Local volume')},
 {id:'setlist',group:1,target:'#songList',title:pair('\u6b4c\u55ae\u5148\u6392\u597d\uff0c\u73fe\u5834\u5c11\u64cd\u4f5c','Prepare the setlist first'),body:pair('\u9ede\u6b4c\u540d\u6216\u524d\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u5207\u63db\u3002\u64ad\u653e\u4e2d\u5207\u6b4c\u6703\u63a5\u5728\u5c0f\u7bc0\u4ea4\u754c\uff0c\u4e0d\u6703\u7a81\u7136\u5f9e\u4e2d\u9593\u91cd\u4f86\u3002','Tap a song, Previous or Next to switch. During playback, song changes are scheduled at a bar boundary rather than restarting in the middle of a bar.'),where:pair('\u6b4c\u66f2\u6e05\u55ae \u2192 \u6b4c\u540d\u8207\u524d\u5f8c\u9996','Setlist \u2192 Songs & Previous / Next')},
 {id:'save-song',group:1,scene:'song',title:pair('\u628a\u6b4c\u540d\u8207\u7bc0\u594f\u5b58\u8d77\u4f86','Save a song and its rhythm'),body:pair('\u65b0\u589e\u6216\u7de8\u8f2f\u6b4c\u66f2\uff0c\u53ef\u8a2d\u6b4c\u540d\u3001\u901f\u5ea6\u3001\u62cd\u865f\u8207\u6392\u5e8f\u3002\u4e3b\u756b\u9762\u81e8\u6642\u8abf\u597d\u5f8c\uff0c\u7528\u300c\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a\u300d\u66f4\u65b0\u9019\u9996\u6b4c\u3002','Add or edit a song to set its name, tempo, time signature and order. After changing the live settings, use Save current settings to update that song\u2019s preset.'),where:pair('\u65b0\u589e\u6b4c\u66f2 / \u7de8\u8f2f / \u5132\u5b58\u76ee\u524d\u8a2d\u5b9a','Add song / Edit / Save current settings')},
 {id:'backup',group:1,target:'.song-tools',title:pair('\u63db\u88dd\u7f6e\u524d\uff0c\u5148\u5099\u4efd','Back up before changing devices'),body:pair('\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u5b58\u5728\u9019\u500b\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u96f2\u7aef\u540c\u6b65\u3002\u532f\u51fa\u53ef\u5099\u4efd\u6b4c\u55ae\uff1b\u532f\u5165\u6703\u53d6\u4ee3\u539f\u6b4c\u55ae\uff0c\u8acb\u5148\u7559\u4e00\u4efd\u3002','Setlists and preferences are stored in this browser, not synced to the cloud. Export a setlist backup first: importing replaces the current setlist.'),where:pair('\u6b4c\u55ae\u4e0b\u65b9 \u2192 \u532f\u51fa / \u532f\u5165','Below the setlist \u2192 Export / Import')},
 {id:'appearance',group:2,scene:'appearance',title:pair('\u8b93\u756b\u9762\u66f4\u9069\u5408\u73fe\u5834','Make the screen easier to follow'),body:pair('\u65b9\u6846\u5716\u793a\u958b\u555f\u73fe\u5834\u653e\u5927\u6a21\u5f0f\uff1a\u986f\u793a BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u5207\u6b4c\u6309\u9215\u8207\u6e2c\u901f\u3002\u50c5\u986f\u793a\u76ee\u524d\u6b4c\u540d\uff0c\u4e26\u4fdd\u7559\u623f\u9593\u50b3\u8a71\uff1b\u97f3\u7b26\u7d30\u5206\u3001\u62cd\u865f\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\u3002','The frame icon opens stage view with BPM and +/− buttons, compact beat markers, playback, larger song-navigation buttons and Tap tempo. Only the current song title is shown, and room Live talk remains available. Restore the normal view to change subdivisions, time signature or volume.'),where:pair('\u7bc0\u62cd\u5340\u65b9\u6846\u5716\u793a / \u8a2d\u5b9a \u2192 \u5916\u89c0','Metronome frame icon / Settings \u2192 Appearance')},
 {id:'tones',group:2,scene:'tones',title:pair('\u9078\u4e00\u500b\u6e05\u695a\u7684\u62cd\u9ede\u8072','Choose a clear click sound'),body:pair('\u6709\u6728\u584a\u3001\u6e05\u6670\u96fb\u5b50\u3001\u725b\u9234\u3001\u77ed\u9234\u8207\u99ac\u6797\u5df4\u3002\u53ef\u9078\u6a19\u6e96\uff0f\u52a0\u5f37\u4e26\u8a66\u807d\uff1b\u6234\u8033\u6a5f\u6642\u5148\u964d\u97f3\u91cf\uff0c\u518d\u6162\u6162\u52a0\u5927\u3002','Choose Woodblock, Clear electronic, Cowbell, Short bell or Marimba. Try Standard or Boost and preview the sound. With headphones, start quietly and increase gradually.'),where:pair('\u8a2d\u5b9a \u2192 \u97f3\u8a0a\u8207\u85cd\u7259','Settings \u2192 Audio & Bluetooth')},
 {id:'output',group:2,scene:'output',title:pair('\u5148\u78ba\u8a8d\u8072\u97f3\u5f9e\u54ea\u88e1\u51fa\u4f86','Check your audio output'),body:pair('\u85cd\u7259\u8033\u6a5f\u5148\u5728\u7cfb\u7d71\u914d\u5c0d\u3002\u8072\u97f3\u6bd4\u5225\u4eba\u6162\u6642\uff0c\u53ef\u8abf\u672c\u6a5f\u6642\u9593\u6821\u6b63\uff1b\u8acb\u4fdd\u6301\u7db2\u9801\u524d\u666f\uff0c\u56de\u4f86\u7121\u8072\u6642\u9ede\u6062\u5fa9\u8072\u97f3\u3002','Pair Bluetooth headphones in your system settings first. Use local timing calibration when audio is late. Keep the page in front; use Restore audio if sound is lost after returning.'),where:pair('\u8a2d\u5b9a \u2192 \u8f38\u51fa / \u6642\u9593\u6821\u6b63','Settings \u2192 Output / Timing calibration')},
 {id:'game',group:3,scene:'game',title:pair('\u7a7a\u6a94\u73a9\u4e00\u4e0b\u7bc0\u594f\u8a18\u61b6','Try the rhythm game'),body:pair('\u9ede\u53f3\u4e0a\u89d2\u904a\u6232\uff0c\u5148\u807d\u793a\u7bc4\u518d\u6572\u56de\u4f86\u3002\u904a\u6232\u6709\u7368\u7acb\u97f3\u91cf\uff1b\u904a\u73a9\u6642\u66ab\u505c\u672c\u6a5f\u7bc0\u62cd\u8072\uff0c\u7d50\u675f\u5f8c\u4f9d\u539f\u72c0\u614b\u6062\u5fa9\u3002','Open the game at the top right, listen to a rhythm and tap it back. It has its own volume. During play, only your local metronome sound is held, then restored according to its previous state.'),where:pair('\u53f3\u4e0a\u89d2 \u2192 \u904a\u6232\u5716\u793a','Top right \u2192 Game icon')},
 {id:'language-help',group:3,target:'.header',title:pair('\u6e96\u5099\u597d\u4e86\uff0c\u56de\u4e3b\u756b\u9762\u8a66\u8a66','You\u2019re ready to go'),body:pair('TW / EN / DE \u53ef\u5207\u63db\u8a9e\u8a00\uff0c\u554f\u865f\u53ef\u67e5\u5b8c\u6574\u8aaa\u660e\u3002\u7a7a\u767d\u9375\u64ad\u653e\u3001T \u6e2c\u901f\u3001N \u4e0b\u4e00\u9996\u3001F \u653e\u5927\uff1b\u4e4b\u5f8c\u53ef\u96a8\u6642\u518d\u958b\u555f\u6559\u5b78\u3002','Use TW / EN / DE to switch languages and ? for the full guide. Shortcuts: Space for playback, T for tap tempo, N for next song and F to expand. Reopen this tour anytime.'),where:pair('\u53f3\u4e0a\u89d2\u8a9e\u8a00 / TEMPOLIVE \u65c1\u7684\u554f\u865f','Language at top right / ? beside TEMPOLIVE')}
];
let active=false,index=0,epoch=0,focusTarget=null,returnState=null,resizeQueued=0;
const e=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=pick(text);return node;};
function svg(name){const n=document.createElementNS('http://www.w3.org/2000/svg','svg');n.setAttribute('aria-hidden','true');const use=document.createElementNS(n.namespaceURI,'use');use.setAttribute('href','#'+name);n.append(use);return n;}
function buttonLook(text,primary=false){return e('span','btn'+(primary?' primary':''),text);}
function tile(text,selected=false,hint=null){const n=e('div','tour-demo-tile'+(selected?' selected':'')+(hint?' tour-demo-phrase':''));n.append(e('span','',text));if(hint)n.append(e('small','',hint));return n;}
function grid(items,selected=-1,two=false){const n=e('div','tour-preview-grid'+(two?' two':''));items.forEach((t,i)=>n.append(tile(t,i===selected)));return n;}
function note(text){return e('p','tour-sample-note',text);}
function field(label,value){const row=e('div');row.append(e('label','field-label',label));const x=e('input');x.value=value;x.setAttribute('readonly','');x.tabIndex=-1;row.append(x);return row;}
function sampleVolume(label,percent){const row=e('div','tour-preview-volume');row.append(e('span','',label));const input=e('input');input.type='range';input.min=0;input.max=100;input.value=percent;input.tabIndex=-1;row.append(input,e('output','',percent+'%'));return row;}
function cloneSafe(selector){const original=document.querySelector(selector);if(!original)return e('div');const n=original.cloneNode(true);for(const el of [n,...n.querySelectorAll('*')]){if(el.id)el.dataset.tourCopy=el.id;['id','for','aria-labelledby','aria-describedby','aria-controls','data-close','data-note','data-target','data-phrase','autofocus','hidden'].forEach(a=>el.removeAttribute(a));if(el.matches('input,button,select,textarea,a,summary'))el.tabIndex=-1;if(el.matches('button'))el.type='button';}return n;}
const instruments=[pair('\u92fc\u7434','Piano'),pair('\u9375\u76e4','Keyboard'),pair('\u6728\u5409\u4ed6','Acoustic guitar'),pair('\u96fb\u5409\u4ed6','Electric guitar'),pair('\u8c9d\u65af','Bass'),pair('\u9f13','Drums'),pair('\u4e3b\u9818','Worship leader'),pair('\u6b4c\u5531','Vocals'),pair('\u97f3\u63a7','Sound engineer')];
function renderScene(scene){
 preview.replaceChildren();preview.inert=true;
 const titleText=STEPS[index].title;byId('tourSceneTitle').textContent=pick(titleText);preview.setAttribute('aria-label',pick(copy.preview)+': '+pick(titleText));
 if(scene==='join'){
  preview.append(e('h3','',pair('\u4ee3\u78bc\u52a0\u5165\u623f\u9593','Join a room')),e('label','field-label',pair('\u4f60\u7684\u6a02\u5668\uff0f\u89d2\u8272','Your instrument / role')),grid(instruments,0),buttonLook(pair('+ \u65b0\u589e\u6a02\u5668','+ Add an instrument')),e('label','field-label',pair('4 \u4f4d\u6578\u5b57\u623f\u9593\u4ee3\u78bc','4-digit room code')),e('div','tour-preview-code','4826'),buttonLook(pair('\u52a0\u5165\u4e26\u555f\u7528\u8072\u97f3','Join & enable audio'),true),note(pair('4826 \u662f\u6559\u5b78\u7bc4\u4f8b\uff0c\u4e0d\u662f\u5be6\u969b\u623f\u9593\u4ee3\u78bc\u3002','4826 is an example, not a real room code.')));
 }else if(scene==='sync'){
  preview.append(e('h3','',pair('\u5718\u968a\u623f\u9593','Team room')),e('span','tour-demo-status',pair('\u6821\u6642\u5b8c\u6210\u5f8c\u8ddf\u96a8\u4e3b\u6301\u4eba','Follow the host after syncing')),e('div','tour-preview-code','4826'));
  const members=e('div','tour-preview-members');[[pair('\u9f13','Drums'),pair('\u4e3b\u6301\u4eba','Host')],[pair('\u92fc\u7434','Piano'),pair('\u53c3\u8207\u8005','Participant')],[pair('\u97f3\u63a7','Sound engineer'),pair('\u53c3\u8207\u8005','Participant')]].forEach(([name,role])=>{const line=e('div','tour-preview-member');line.append(e('strong','',name),e('small','',role));members.append(line);});
  preview.append(members,buttonLook(pair('\u91cd\u65b0\u6821\u6642','Resync')),sampleVolume(pair('\u672c\u6a5f\u97f3\u91cf','Local volume'),70),note(pair('\u623f\u9593\u6703\u5206\u4eab\u76ee\u524d\u7bc0\u594f\uff0c\u4e0d\u6703\u628a\u6574\u4efd\u6b4c\u55ae\u8907\u88fd\u7d66\u5225\u4eba\u3002','Rooms share the current rhythm, not everyone\u2019s complete setlist.')));
 }else if(scene==='recipients'){
  preview.append(e('h3','',pair('live\u50b3\u8a71','Live talk')),note(pair('\u53f3\u5074\u7684 live\u50b3\u8a71\u6309\u9215\uff0c\u5165\u623f\u5f8c\u624d\u51fa\u73fe\u3002','The live talk tab appears at the side only after joining a room.')),e('h4','',pair('1 / 2 \u00b7 \u8981\u50b3\u7d66\u8ab0\uff1f','1 / 2 \u00b7 Who is it for?')));
  const g=grid([pair('\u5168\u90e8\u4eba','Everyone'),pair('\u92fc\u7434 1','Piano 1'),pair('\u92fc\u7434 2','Piano 2'),pair('\u96fb\u5409\u4ed6','Electric guitar'),pair('\u6b4c\u5531','Vocals'),pair('\u97f3\u63a7','Sound engineer')],1,true);g.firstElementChild.classList.add('wide');preview.append(g,note(pair('\u9019\u662f\u7bc4\u4f8b\u6210\u54e1\uff0c\u4e0d\u6703\u52a0\u5165\u771f\u5be6\u623f\u9593\u3002','These are example members. No real room is joined.')));
 }else if(scene==='phrases'){
  preview.append(e('h3','',pair('live\u50b3\u8a71','Live talk')),e('p','tour-demo-callout',pair('\u50b3\u7d66 \u00b7 \u92fc\u7434','To \u00b7 Piano')),e('h4','',pair('2 / 2 \u00b7 \u60f3\u8aaa\u4ec0\u9ebc\uff1f','2 / 2 \u00b7 What do you want to say?')));
  const g=e('div','tour-preview-grid two');[
   [pair('\u592a\u5feb','Too fast'),pair('\u8acb\u6162\u4e00\u9ede','Slow down')],[pair('\u592a\u6162','Too slow'),pair('\u8acb\u5feb\u4e00\u9ede','Speed up')],[pair('\u591a\u4e00\u9ede','More'),null],[pair('\u5c11\u4e00\u9ede','Less'),null],[pair('\u76e3\u807d\u5927','Monitor up'),null],[pair('\u76e3\u807d\u5c0f','Monitor down'),null],[pair('\u8981\u5e6b\u5fd9','Need help'),null],[pair('\u81ea\u8a02\u8a0a\u606f','Custom message'),null]
  ].forEach(([label,hint])=>g.append(tile(label,false,hint)));preview.append(g,e('div','tour-demo-callout',pair('\u9f13\u624b\u9078\u300c\u592a\u6162\u300d\uff1a\u300c\u9f13\u624b\u8aaa\uff0c\u92fc\u7434\uff0c\u5feb\u4e00\u9ede\u3002\u300d','Drums chooses Too slow: \u201cDrums says, Piano, speed up.\u201d')),e('h4','',pair('\u8a9e\u97f3\u8207\u5e38\u7528\u77ed\u53e5','Voice & saved phrases')),buttonLook(pair('\u555f\u7528\uff0f\u8a66\u807d','Enable / test')),sampleVolume(pair('\u8a9e\u97f3\u97f3\u91cf','Voice volume'),100),note(pair('\u9019\u88e1\u53ea\u8aaa\u660e\u64cd\u4f5c\uff0c\u4e0d\u6703\u64ad\u5831\u6216\u50b3\u9001\u8a0a\u606f\u3002','This preview never speaks or sends a message.')));
 }else if(scene==='song'){
  preview.append(e('h3','',pair('\u65b0\u589e\u6b4c\u66f2','Add song')),field(pair('\u6b4c\u66f2\u540d\u7a31','Song name'),pick(pair('\u672c\u9031\u958b\u5834\u8a69\u6b4c','Opening song'))));
  const g=e('div','tour-preview-grid two');g.append(field(pair('\u901f\u5ea6 BPM','Tempo BPM'),'96'),field(pair('\u62cd\u865f','Time signature'),'4/4'),field(pair('\u97f3\u7b26\u7d30\u5206','Subdivision'),pick(pair('\u516b\u5206\u97f3\u7b26','Eighth notes'))),field(pair('\u9810\u5099\u62cd','Count-in'),pick(pair('1 \u5c0f\u7bc0','1 bar'))));preview.append(g,e('h4','',pair('\u7de8\u8f2f\u6642\u4e5f\u80fd\u6392\u5e8f\u8207\u522a\u9664','Editing also lets you reorder or delete')),buttonLook(pair('\u5132\u5b58\u6b4c\u66f2','Save song'),true),note(pair('\u7bc4\u4f8b\u4e0d\u6703\u5beb\u5165\u4f60\u7684\u6b4c\u55ae\u3002','This example does not add anything to your setlist.')));
 }else if(scene==='appearance'){
  preview.append(e('h3','',pair('\u756b\u9762\u8207\u62cd\u9ede\u63d0\u793a','Display & beat cues')));
  const head=e('div','tour-demo-mini-head');head.append(e('span','',pair('\u653e\u5927\uff0f\u7e2e\u5c0f\u7bc0\u62cd\u5668','Expand / restore the metronome')),cloneSafe('#focusBtn'));preview.append(head,cloneSafe('#settingsDialog .settings-appearance'),cloneSafe('#settingsDialog .settings-flash'),note(pair('\u87a2\u5149\u50c5\u51fa\u73fe\u5728\u7bc0\u62cd\u5340\u584a\uff1a\u6dfa\u8272\u6a21\u5f0f\u9ed1\u8272\uff0c\u6df1\u8272\u6a21\u5f0f\u767d\u8272\u3002\u9810\u8a2d\u95dc\u9589\uff0c\u6559\u5b78\u4e0d\u6703\u958b\u555f\u9583\u720d\u3002','Glow stays inside the metronome: black in light mode, white in dark mode. It is off by default; the tour will not enable it.')));
 }else if(scene==='tones'){
  preview.append(e('h3','',pair('\u7bc0\u62cd\u97f3\u8272','Click sound')),grid([pair('\u6728\u584a','Woodblock'),pair('\u6e05\u6670\u96fb\u5b50','Clear electronic'),pair('\u725b\u9234','Cowbell'),pair('\u77ed\u9234','Short bell'),pair('\u99ac\u6797\u5df4','Marimba')],4,true),e('h4','',pair('\u8f38\u51fa\u5f37\u5ea6','Output strength')),grid([pair('\u6a19\u6e96','Standard'),pair('\u52a0\u5f37','Boost')],-1,true),e('h4','',pair('\u78ba\u8a8d\u8033\u6a5f\u5be6\u969b\u807d\u5230\u7684\u8072\u97f3','Check what you hear in your headphones')),buttonLook(pair('\u8a66\u807d\u97f3\u8272','Preview sound')),note(pair('\u793a\u610f\u756b\u9762\u4e0d\u767c\u8072\uff0c\u4e5f\u4e0d\u66f4\u6539\u4f60\u7684\u97f3\u8272\u3002','The teaching preview makes no sound and does not change your tone.')));
 }else if(scene==='output'){
  preview.append(e('h3','',pair('\u8072\u97f3\u8f38\u51fa\u8207\u6821\u6b63','Audio output & calibration')),e('label','field-label',pair('\u8072\u97f3\u8f38\u51fa\u88dd\u7f6e','Output device')),cloneSafe('#audioOutput'),note(pair('\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u9078\u64c7\u6642\uff0c\u4f7f\u7528\u7cfb\u7d71\u9810\u8a2d\u8033\u6a5f\uff0f\u5587\u53ed\u3002','When browser output selection is unavailable, use your system\u2019s headphones or speakers.')),cloneSafe('#settingsDialog .calibration'));
  // A plain-language summary covers the remaining local-only options.
  preview.append(e('div','tour-demo-callout',pair('\u81ea\u52d5\u5ef6\u9072\u4f30\u8a08\uff0c\u4e0d\u7b49\u65bc\u5be6\u969b\u91cf\u6e2c\u3002\u4e5f\u53ef\u52fe\u9078\u300c\u64ad\u653e\u6642\u4fdd\u6301\u87a2\u5e55\u958b\u555f\u300d\uff0c\u4f46\u4ecd\u9700\u88dd\u7f6e\u652f\u63f4\u3002','Automatic output-latency estimates are not a measurement. Keep screen awake can also be enabled when supported by your device.')));
 }else if(scene==='game'){
  preview.append(e('h3','',pair('\u7bc0\u594f\u8a18\u61b6\u6311\u6230','Rhythm memory challenge')),sampleVolume(pair('\u904a\u6232\u97f3\u91cf','Game volume'),100));
  const list=e('div','tour-preview-steps');[pair('\u5148\u807d\u7cfb\u7d71\u793a\u7bc4\u7684\u7bc0\u594f\u3002','Listen to the rhythm demonstration.'),pair('\u63db\u4f60\u6642\u9ede\u6309\u6216\u6309\u7a7a\u767d\u9375\uff0c\u6572\u51fa\u525b\u624d\u7684\u7bc0\u594f\u3002','When it is your turn, tap or press Space to repeat it.'),pair('\u6536\u8d77\u5f8c\u53ef\u7e7c\u7e8c\u6216\u91cd\u73a9\uff1b\u8fd4\u56de\u5f8c\u4f9d\u539f\u72c0\u614b\u6062\u5fa9\u7bc0\u62cd\u8072\u3002','Reopen to continue or restart. Returning restores the prior local metronome sound state.')].forEach((t,i)=>{const row=e('div','tour-preview-line');row.append(e('span','',String(i+1)),e('span','',t));list.append(row);});preview.append(list,e('div','tour-demo-callout',pair('10 \u95dc \u00b7 \u6bcf\u984c 4 \u62cd \u00b7 \u4fdd\u7559\u6700\u9ad8\u5206','10 levels \u00b7 4 beats per question \u00b7 High-score record')),buttonLook(pair('\u958b\u59cb\u6311\u6230','Start challenge'),true),note(pair('\u9019\u662f\u6559\u5b78\u793a\u610f\uff0c\u4e0d\u6703\u958b\u59cb\u904a\u6232\u6216\u5207\u63db\u8072\u97f3\u3002','This is a teaching preview. It will not start the game or change audio.')));
 }
 scroller.scrollTop=0;
}
function bounds(n){const r=n.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom};}
function measure(){
 if(!active)return;
 const rect=coach.getBoundingClientRect();document.documentElement.style.setProperty('--tour-dock-height',Math.ceil(rect.height)+'px');
}
function reveal(){
 if(!active||STEPS[index].scene)return;
 if(focusTarget)focusTarget.classList.remove('tour-focus');
 focusTarget=document.querySelector(STEPS[index].target);
 if(!focusTarget||!focusTarget.getClientRects().length)return;
 focusTarget.classList.add('tour-focus');
 const viewport=app.getBoundingClientRect(),r=focusTarget.getBoundingClientRect();
 const desired=r.height>viewport.height-46?viewport.top+22:viewport.top+Math.max(20,(viewport.height-r.height)/2);
 app.scrollTop+=r.top-desired;
}
function layout(revealTarget=false){
 if(!active)return;measure();
 if(revealTarget){const token=epoch;requestAnimationFrame(()=>{if(active&&token===epoch)reveal();});}
}
function texts(){
 button.title=pick(copy.entry)+' \u00b7 NEW';button.setAttribute('aria-label',pick(copy.entry)+' (NEW)');
 byId('tourHeading').textContent=pick(copy.entry);byId('tourClose').title=pick(copy.close);byId('tourClose').setAttribute('aria-label',pick(copy.close));
 byId('tourLang').textContent=I18N.languageCode();byId('tourLang').setAttribute('aria-label',I18N.languageLabel());byId('tourLang').classList.toggle('language-is-de',I18N.lang==='de');
 byId('tourJumpLabel').textContent=pick(copy.jump);byId('tourReadonly').textContent=pick(copy.readonly);byId('tourPreviewTag').textContent=pick(copy.preview);byId('tourPreviewHint').textContent=pick(copy.previewHint);
 byId('tourJump').replaceChildren();let current=-1,group;
 STEPS.forEach((step,i)=>{if(current!==step.group){current=step.group;group=e('optgroup');group.label=pick(copy.chapter[current]);byId('tourJump').append(group);}group.append(new Option((i+1)+'. '+pick(step.title),String(i)));});
}
function description(step){
 // A participant sees local listening controls, not the host's Start/Stop.
 if(window.MetronomeDiagnostics?.snapshot().role==='guest'&&step.id==='play-tap'){
  return pair('\u623f\u9593\u7684\u901f\u5ea6\u8207\u958b\u59cb\uff0f\u505c\u6b62\u7531\u4e3b\u6301\u4eba\u63a7\u5236\u3002\u4f60\u7684\u4e2d\u9593\u6309\u9215\u53ea\u5207\u63db\u672c\u6a5f\u6536\u807d\uff1b\u6c92\u8072\u97f3\u6642\u53ef\u7528\u5b83\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\u3002','In a room, the host controls tempo and Start/Stop. Your center button controls local listening only; use it to restore audio if this device goes silent.');
 }
 return step.body;
}

function render(focus=false){
 if(!active)return;epoch++;const step=STEPS[index];
 if(focusTarget){focusTarget.classList.remove('tour-focus');focusTarget=null;}
 byId('tourChapter').textContent=pick(copy.chapter[step.group]);title.textContent=pick(step.title);bodyText.textContent=pick(description(step));byId('tourLocation').textContent=pick(step.where);
 byId('tourCounter').textContent=(index+1)+' / '+STEPS.length;byId('tourProgress').style.width=((index+1)/STEPS.length*100)+'%';byId('tourJump').value=String(index);
 byId('tourPrevLabel').textContent=pick(copy.prev);byId('tourNextLabel').textContent=pick(index===STEPS.length-1?copy.finish:copy.next);byId('tourPrev').disabled=index===0;
 stage.hidden=!step.scene;if(step.scene)renderScene(step.scene);coach.querySelector('.tour-coach-scroll').scrollTop=0;layout(true);
 if(focus){title.focus({preventScroll:true});}
}
function start(){
 if(active)return;
 if(document.querySelector('dialog[open]')){toast(pick(copy.busy));return;}
 returnState={x:window.scrollX,y:window.scrollY,focus:document.activeElement,headerInert:app.querySelector('header').inert,mainInert:app.querySelector('main').inert};
 active=true;index=0;epoch++;coach.hidden=false;document.body.classList.add('tour-active');
 app.querySelector('header').inert=true;app.querySelector('main').inert=true;
 button.setAttribute('aria-expanded','true');texts();render();byId('tourNext').focus({preventScroll:true});
}
function end(restoreFocus=true){
 if(!active)return;active=false;epoch++;if(focusTarget)focusTarget.classList.remove('tour-focus');focusTarget=null;
 stage.hidden=true;coach.hidden=true;preview.replaceChildren();button.setAttribute('aria-expanded','false');document.body.classList.remove('tour-active');
 const saved=returnState;returnState=null;app.querySelector('header').inert=saved?.headerInert||false;app.querySelector('main').inert=saved?.mainInert||false;
 document.documentElement.style.removeProperty('--tour-dock-height');app.scrollTop=0;
 if(saved)window.scrollTo({left:saved.x,top:saved.y,behavior:'instant'});
 if(restoreFocus)button.focus({preventScroll:true});
}
function go(next,focus=true){if(!active)return;if(next>=STEPS.length){end();return;}index=Math.max(0,next);render(focus);}
button.addEventListener('click',start);byId('tourClose').addEventListener('click',()=>end());byId('tourPrev').addEventListener('click',()=>go(index-1));byId('tourNext').addEventListener('click',()=>go(index+1));byId('tourJump').addEventListener('change',e=>go(Number(e.target.value)));
byId('tourLang').addEventListener('click',()=>I18N.openLanguageMenu(byId('tourLang')));
I18N.onChange(()=>{texts();if(active)render(false);});
// Stop the original main-screen shortcuts while reading, without using or
// altering any existing keyboard handlers, audio contexts or transport state.
window.addEventListener('keydown',event=>{
 if(!active)return;event.stopImmediatePropagation();
 if(event.key==='Escape'){event.preventDefault();end();return;}
 if(event.key==='Tab'){
  const controls=[...coach.querySelectorAll('button:not(:disabled),select:not(:disabled)')].filter(n=>n.getClientRects().length);
  const i=controls.indexOf(document.activeElement);event.preventDefault();const next=event.shiftKey?(i<=0?controls.length-1:i-1):(i<0||i===controls.length-1?0:i+1);controls[next]?.focus();return;
 }
 if(!event.repeat&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!event.target.closest('select,input,textarea')){
  if(event.key==='ArrowRight'){event.preventDefault();go(index+1);}else if(event.key==='ArrowLeft'){event.preventDefault();go(index-1);}
 }
},true);
const observer=new ResizeObserver(()=>{if(!active)return;cancelAnimationFrame(resizeQueued);resizeQueued=requestAnimationFrame(()=>layout(false));});observer.observe(coach);
window.addEventListener('resize',()=>{if(active)layout(true);});
window.visualViewport?.addEventListener('resize',()=>{if(active)layout(true);});
new MutationObserver(()=>{if(active&&document.querySelector('dialog[open]'))end(false);}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
window.addEventListener('pagehide',()=>end(false));
window.TempoliveTutorial=Object.freeze({start,close:()=>end(),snapshot:()=>({version:'2.1.3',active,index,step:STEPS[index].id,total:STEPS.length,language:I18N.lang,preview:active&&!!STEPS[index].scene,coach:active?bounds(coach):null,viewport:active?bounds(STEPS[index].scene?stage:app):null,target:active&&focusTarget?bounds(focusTarget):null,steps:STEPS.map((s,i)=>({index:i,id:s.id,group:s.group,preview:!!s.scene}))})});
I18N.bindAttr(stage,'aria-label',()=>pick(copy.preview));
I18N.bindAttr(button,'title',()=>pick(copy.entry)+' (NEW)');
I18N.bindAttr(button,'aria-label',()=>pick(copy.entry)+' (NEW)');
I18N.bindAttr(byId('tourClose'),'title',()=>pick(copy.close));
I18N.bindAttr(byId('tourClose'),'aria-label',()=>pick(copy.close));
I18N.bindAttr(byId('tourLang'),'aria-label',()=>I18N.languageLabel());
texts();
})();

/* END tempolive-tutorial-code */

;
/* BEGIN tempolive-stage-code */
/* v2.1.8 shared accessible transport order. No clock, audio or room state changes. */
(()=>{
 const beats=document.getElementById('beats');let pending=0,last='';
 // Reuse the existing button nodes so all handlers/translated labels survive.
 // Keep keyboard and screen-reader order aligned with Start, track controls,
 // then Tap tempo in normal view, stage view and the tutorial workspace.
 const transport=document.querySelector('.metro-card .transport');
 const normalControls=['playBtn','transportPrevSong','transportNextSong','tapBtn'];
 const stageControls=['playBtn','transportPrevSong','transportNextSong','tapBtn'];
 function syncTransportOrder(){
  const stage=document.body.classList.contains('focus-mode')&&!document.body.classList.contains('tour-active');
  const nodes=(stage?stageControls:normalControls).map(id=>document.getElementById(id));
  if(!transport||nodes.some(node=>!node)||nodes.every((node,i)=>transport.children[i]===node))return;
  const focused=document.activeElement,retainFocus=transport.contains(focused);
  transport.append(...nodes);
  if(retainFocus&&focused?.isConnected)focused.focus({preventScroll:true});
 }

 // v2.1.12: move the SAME live launcher into the stage header while joined.
 // No copied handlers, new room commands, synthetic clicks or audio changes.
 const liveButton=document.getElementById('bandQuickOpen');
 const liveSlot=document.getElementById('stageLiveSlot');
 const liveHome=document.createComment('LIVE launcher home in normal view');
 if(liveButton)liveButton.before(liveHome);
 function syncStageLivePosition(){
  if(!liveButton||!liveSlot)return;
  const stage=document.body.classList.contains('focus-mode')&&!document.body.classList.contains('tour-active');
  const joined=document.body.classList.contains('band-in-room');
  const docked=stage&&joined;
  if(docked?liveButton.parentElement===liveSlot:liveButton.previousSibling===liveHome)return;
  const retainFocus=document.activeElement===liveButton;
  if(docked)liveSlot.append(liveButton);else liveHome.after(liveButton);
  if(retainFocus&&liveButton.getClientRects().length)liveButton.focus({preventScroll:true});
 }

 function layout(){
  pending=0;syncStageLivePosition();syncTransportOrder();
  if(!document.body.classList.contains('focus-mode')||document.body.classList.contains('tour-active'))return;
  const n=beats.children.length;if(!n)return;
  const r=beats.getBoundingClientRect(),gap=parseFloat(getComputedStyle(beats).gap)||10;
  if(r.width<=0||r.height<=0)return;
  let best={score:Infinity,cols:2,rows:2,w:100,h:100};
  for(let cols=1;cols<=n;cols++){
   const rows=Math.ceil(n/cols),w=(r.width-gap*(cols-1))/cols,h=(r.height-gap*(rows-1))/rows;
   if(w<=0||h<=0)continue;
   const score=Math.abs(Math.log(w/h))+(cols*rows-n)*.28;
   if(score<best.score)best={score,cols,rows,w,h};
  }
  const font=Math.floor(Math.min(best.w,best.h)*.40),key=[n,best.cols,best.rows,font].join(':');
  if(key!==last){last=key;beats.style.setProperty('--stage-cols',best.cols);beats.style.setProperty('--stage-rows',best.rows);beats.style.setProperty('--stage-font',font+'px');}
 }
 function queue(){if(!pending)pending=requestAnimationFrame(layout);}
 new MutationObserver(queue).observe(beats,{childList:true});
 new MutationObserver(queue).observe(document.body,{attributes:true,attributeFilter:['class']});
 if(window.ResizeObserver)new ResizeObserver(queue).observe(beats);
 window.addEventListener('resize',queue);window.visualViewport?.addEventListener('resize',queue);
 document.addEventListener('keydown',event=>{
  if(event.key!=='Escape'||event.defaultPrevented||document.querySelector('dialog[open]')||document.querySelector('#languageMenu:not([hidden])')||document.body.classList.contains('tour-active'))return;
  if(document.body.classList.contains('focus-mode')){event.preventDefault();toggleFocus();document.getElementById('focusBtn').focus({preventScroll:true});}
 });
 window.TempoliveStageView=Object.freeze({layout:queue,snapshot:()=>({active:document.body.classList.contains('focus-mode'),columns:Number(beats.style.getPropertyValue('--stage-cols')),rows:Number(beats.style.getPropertyValue('--stage-rows'))})});
 queue();
})();

/* END tempolive-stage-code */

;
/* BEGIN tempolive-audio-continuity */
/* v2.1.4 bounded, local audio recovery after an observable interruption.
   This CANNOT read/disable headset wear detection or verify audible output.
   No transport publish/start/stop, volume boost, unmute, microphone or game call.
   Only an existing, previously requested, audible metronome may be resumed.
   A failed interruption gets at most 3 attempts; state changes cannot spin it.
   Ref: MDN BaseAudioContext.state / MediaDevices.devicechange_event. */
(()=>{
 const DELAYS=[160,600,1500],boundContexts=new WeakSet(),boundGates=new WeakSet();
 let timer=0,epoch=0,episode=null,inFlight=false,status='idle',lastReason='',totalAttempts=0,notified=false;
 const eligibility=()=>state.continueAudio!==false&&!!engine.ctx&&engine.ctx.state!=='closed'&&!engine.recoverPromise&&
  desiredEvent().playing&&!state.mute&&state.volume>0&&!document.hidden&&!engine.gameOutputSuppressed&&
  !document.getElementById('rhythmGameDialog').open&&!room.connecting&&!room.recovering&&
  ['solo','host','guest'].includes(room.role)&&(room.role!=='guest'||room.synced);
 function cancel(reason='cancelled'){clearTimeout(timer);timer=0;epoch++;episode=null;status=reason;notified=false;}
 function sameRun(job){return episode===job&&job.epoch===epoch&&room.generation===job.generation&&room.session===job.session&&engine.ctx===job.context&&eligibility();}
 function running(){return engine.isReady();}
 function announceBlocked(){
  status='manual-action-required';
  if(notified)return;notified=true;
  toast('\u7121\u6cd5\u81ea\u52d5\u6062\u5fa9\u8072\u97f3\uff0c\u8acb\u78ba\u8a8d\u8033\u6a5f\u7684\u81ea\u52d5\u66ab\u505c\u8a2d\u5b9a\uff0c\u4e26\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002');
 }
 function queue(){
  if(!episode||timer||inFlight)return;
  if(!eligibility()){cancel('not-requested');return;}
  if(episode.attempts>=DELAYS.length){announceBlocked();return;}
  const job=episode;timer=setTimeout(()=>{timer=0;attempt(job);},DELAYS[job.attempts]);
 }
 async function attempt(job){
  if(!sameRun(job))return;
  if(running()){settled(job);return;}
  if(navigator.audioSession?.state==='interrupted'){status='waiting-for-system';return;}
  job.attempts++;totalAttempts++;inFlight=true;status='resuming';
  try{
   await engine.ensure();
   if(!sameRun(job))return;
   if(running())settled(job);else status='retrying';
  }catch(error){if(sameRun(job))status='retrying';}
  finally{inFlight=false;if(episode&&eligibility()&&!running())queue();}
 }
 function settled(job){
  if(!sameRun(job))return;
  clearTimeout(timer);timer=0;episode=null;notified=false;status='running';
  // Respect the latest room position; never replay a missed beat or count-in.
  if(room.role==='guest')guestAudioRecoveryRequired=false;
  engine.invalidate();engine.schedule();renderControls();room.sendLocalStatus();
 }
 function check(reason='audio-state'){
  lastReason=reason;
  if(!eligibility()){if(episode)cancel('not-requested');return;}
  if(running()){if(episode)settled(episode);else status='running';return;}
  if(!episode)episode={epoch:++epoch,context:engine.ctx,generation:room.generation,session:room.session,attempts:0};
  queue();
 }
 function bindContext(context){
  if(!context||boundContexts.has(context))return;boundContexts.add(context);
  context.addEventListener('statechange',()=>{if(context===engine.ctx)check('audio-state');});
 }
 function bindGate(gate){
  if(!gate||boundGates.has(gate))return;boundGates.add(gate);
  gate.addEventListener('pause',()=>check('media-pause'));gate.addEventListener('playing',()=>check('media-playing'));
 }
 function refreshSetting(){document.getElementById('continueAudio').checked=state.continueAudio!==false;}
 document.getElementById('continueAudio').addEventListener('change',event=>{
  state.continueAudio=event.target.checked;saveLocal(true);cancel(state.continueAudio?'idle':'disabled');
  if(state.continueAudio)check('enabled');
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel('background');else check('foreground');});
 navigator.audioSession?.addEventListener?.('statechange',()=>check('system-audio-session'));
 window.addEventListener('focus',()=>check('window-focus'));
 window.addEventListener('pagehide',()=>cancel('page-exit'));
 // UI mute/stop are handled before any delayed attempt; the original handlers
 // still own their actions. A later state transition will not restart playback.
 for(const id of ['playBtn','muteBtn','volume'])document.getElementById(id).addEventListener(id==='volume'?'input':'click',()=>queueMicrotask(()=>{if(!eligibility())cancel('user-action');else check('user-action');}));
 window.TempoliveAudioContinuity=Object.freeze({check,cancel,bindContext,bindGate,refreshSetting,
  snapshot:()=>({enabled:state.continueAudio!==false,status,lastReason,attempts:episode?.attempts||0,totalAttempts,pending:!!timer,inFlight})});
 bindContext(engine.ctx);bindGate(engine.mediaGate);refreshSetting();
})();

/* END tempolive-audio-continuity */

;
/* BEGIN tempolive-media-branding */
/* v2.1.9: passive Now Playing branding only.
   Source of truth: existing header logo, not a redesigned icon.
   Does NOT change media controls, playbackState, transport, timing, output,
   AudioContext, room packets, localStorage, speech, or game rules.
   Metadata is merely a request to the browser/OS. It does not guarantee a
   Lock Screen card, background playback, or removal of the source origin.
   References: https://www.w3.org/TR/mediasession/
   https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/artwork
*/
(()=>{
 'use strict';
 const BRAND='TEMPOLIVE';
 const ARTWORK="./tempolive-cover.png";
 const artSrc=(()=>{try{return new URL(ARTWORK,document.baseURI).href;}catch(e){return ARTWORK;}})();
 const COPY=Object.freeze({
  'zh-Hant':{
   heading:'\u9396\u5b9a\u756b\u9762\u54c1\u724c\u8cc7\u8a0a',
   subtitle:'\u9023\u7dda\u7bc0\u62cd\u5668',
   hint:'\u64ad\u653e\u6642\u63d0\u4f9b TEMPOLIVE \u540d\u7a31\u8207 Logo\uff1b\u5be6\u969b\u986f\u793a\u7531\u7cfb\u7d71\u6c7a\u5b9a\uff0c\u4ecd\u53ef\u80fd\u4fdd\u7559\u7db2\u7ad9\u4f86\u6e90\u3002',
   unsupported:'\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u81ea\u8a02\u5a92\u9ad4\u8cc7\u8a0a\uff1b\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668\u64cd\u4f5c\u3002',
   rejected:'\u700f\u89bd\u5668\u76ee\u524d\u672a\u63a5\u53d7\u54c1\u724c\u8cc7\u8a0a\uff1b\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668\u64cd\u4f5c\u3002'
  },
  en:{
   heading:'Lock-screen branding',subtitle:'Connected metronome',
   hint:'Provides the TEMPOLIVE name and logo during playback. Your system controls the final display and may still show the website address.',
   unsupported:'This browser does not support custom media metadata. Metronome controls are unaffected.',
   rejected:'The browser has not accepted the branding metadata. Metronome controls are unaffected.'
  },
  de:{
   heading:'Markenanzeige auf dem Sperrbildschirm',subtitle:'Vernetztes Metronom',
   hint:'Stellt bei der Wiedergabe TEMPOLIVE und das Logo bereit. Die Darstellung h\u00e4ngt vom System ab; die Website-Adresse kann zus\u00e4tzlich erscheinen.',
   unsupported:'Dieser Browser unterst\u00fctzt keine benutzerdefinierten Medienmetadaten. Die Metronom-Bedienung bleibt unver\u00e4ndert.',
   rejected:'Der Browser hat die Markeninformationen nicht \u00fcbernommen. Die Metronom-Bedienung bleibt unver\u00e4ndert.'
  }
 });
 const frame=document.getElementById('rhythmGameFrame')||document.getElementById('rhythmGameFrameTemplate')?.content.querySelector('iframe');
 const sessions=new WeakMap(),boundDocuments=new WeakSet();
 let writes=0,lastError='',pageExiting=false;
 const language=()=>window.TempoliveI18n?.lang||document.documentElement.lang||'zh-Hant';
 const copy=()=>COPY[language()]||COPY['zh-Hant'];
 function api(win){try{return win?.navigator?.mediaSession&&typeof win.MediaMetadata==='function'?win.navigator.mediaSession:null;}catch(e){return null;}}
 function paintHint(){
  const node=document.getElementById('mediaBrandingHint');
  if(node)node.textContent=api(window)?(lastError?copy().rejected:copy().hint):copy().unsupported;
 }
 function writeMetadata(win,force=false){
  const session=api(win);if(!session||pageExiting)return false;
  const subtitle=copy().subtitle;
  try{
   const metadata=session.metadata;
   const correct=metadata?.title===BRAND&&metadata.artist===subtitle&&metadata.album===''&&metadata.artwork?.some(image=>image.src===artSrc);
   if(!force&&correct)return true;
   // Use the constructor from the target document's realm, including the
   // embedded game's own media session. No duplicate audio element is needed.
   session.metadata=new win.MediaMetadata({title:BRAND,artist:subtitle,album:'',artwork:[{src:artSrc,sizes:'512x512',type:'image/png'}]});
   sessions.set(win,{title:BRAND,artist:subtitle,artwork:true});writes++;
   if(win===window)lastError='';return true;
  }catch(error){if(win===window)lastError=error?.name||'MetadataError';return false;}
 }
 function gameWindow(){try{return frame?.contentDocument?.getElementById('start-btn')?frame.contentWindow:null;}catch(e){return null;}}
 function refresh(force=false){
  writeMetadata(window,force);
  const game=gameWindow();if(game)writeMetadata(game,force);
  paintHint();
 }
 function bind(win){
  let doc;try{doc=win.document;}catch(e){return;}
  if(boundDocuments.has(doc))return;boundDocuments.add(doc);
  writeMetadata(win);
  // Media events do not bubble, hence capture. They refresh metadata only.
  for(const type of ['play','playing','loadedmetadata'])doc.addEventListener(type,()=>writeMetadata(win,true),true);
  // The app synthesizes its beat in Web Audio; a button gesture may have no
  // HTMLMediaElement event. Reapply before/after the original handler without
  // preventing that event or invoking any playback function ourselves.
  doc.addEventListener('click',event=>{
   if(!event.target?.closest?.('button'))return;
   writeMetadata(win);
   queueMicrotask(()=>{writeMetadata(win);paintHint();});
  },true);
 }
 function mount(){
  bind(window);
  const game=gameWindow();if(game)bind(game);
  const label=document.getElementById('mediaBrandingLabel');
  const hint=document.getElementById('mediaBrandingHint');
  if(window.TempoliveI18n){
   if(label)TempoliveI18n.bind(label,()=>copy().heading);
   if(hint)TempoliveI18n.bind(hint,()=>api(window)?(lastError?copy().rejected:copy().hint):copy().unsupported);
   TempoliveI18n.onChange(()=>refresh(true));
  }else{if(label)label.textContent=copy().heading;paintHint();}
  refresh();
 }
 frame?.addEventListener('load',()=>{const game=gameWindow();if(game)bind(game);refresh(true);});
 document.addEventListener('visibilitychange',()=>refresh(true));
 window.addEventListener('pageshow',()=>{pageExiting=false;refresh(true);});
 window.addEventListener('pagehide',()=>{pageExiting=true;});
 window.TempoliveMediaBranding=Object.freeze({
  refresh:()=>refresh(true),
  snapshot:()=>({version:'2.1.9-media-branding',supported:!!api(window),title:api(window)?.metadata?.title||'',artist:api(window)?.metadata?.artist||'',artwork:!!api(window)?.metadata?.artwork?.length,artworkSource:artSrc.startsWith('data:')?'embedded-png':'site-png',gameSupported:!!api(gameWindow()),writes,error:lastError})
 });
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();

/* END tempolive-media-branding */

;
/* BEGIN tempolive-app-shell */
/* App deployment layer, app-r3.
   Matches ARCO's static manifest / Apple metadata approach. No service worker,
   reload, audio, room messages, setlist writes or browser-data clearing. */
(()=>{
 'use strict';
 const COPY={
  'zh-Hant':{
   heading:'\u4e3b\u756b\u9762 App',
   browser:'\u76ee\u524d\u5728\u700f\u89bd\u5668\u5206\u9801',
   standalone:'\u5df2\u4ee5 App \u7368\u7acb\u6a21\u5f0f\u958b\u555f',
   install:'iPhone / iPad\uff1a\u5728 Safari \u958b\u555f\u6b63\u5f0f\u7db2\u7ad9\uff0c\u9ede\u300c\u5206\u4eab\u300d\u2192\u300c\u52a0\u5165\u4e3b\u756b\u9762\u300d\uff0c\u518d\u5f9e\u4e3b\u756b\u9762\u9ede TEMPOLIVE\u3002\u5176\u4ed6\u88dd\u7f6e\u53ef\u4f7f\u7528\u700f\u89bd\u5668\u63d0\u4f9b\u7684\u5b89\u88dd\u9078\u9805\u3002',
   active:'\u76ee\u524d\u662f\u4e3b\u756b\u9762 App \u8996\u7a97\uff0c\u4e0d\u662f\u4e00\u822c Safari \u5206\u9801\u3002\u7bc0\u62cd\u5668\u3001\u6b4c\u55ae\u8207\u623f\u9593\u64cd\u4f5c\u65b9\u5f0f\u4e0d\u8b8a\u3002',
   data:'\u9996\u6b21\u5207\u63db\u5230 App \u524d\uff0c\u5148\u5728\u539f\u700f\u89bd\u5668\u532f\u51fa\u6b4c\u55ae\u3002\u5982 App \u4e2d\u6c92\u6709\u820a\u6b4c\u55ae\uff0c\u518d\u532f\u5165\u5099\u4efd\uff1b\u4e0d\u9700\u6e05\u9664\u7db2\u7ad9\u8cc7\u6599\u3002',
   network:'\u672c\u5305\u4e0d\u65b0\u589e\u96e2\u7dda\u5feb\u53d6\u6216\u80cc\u666f\u64ad\u653e\u4fdd\u8b49\u3002\u9996\u6b21\u958b\u555f\u3001\u91cd\u65b0\u8f09\u5165\u53ca\u623f\u9593\u529f\u80fd\u8acb\u4fdd\u6301\u7db2\u8def\u9023\u7dda\u3002'
  },
  en:{
   heading:'Home Screen app',browser:'Currently in a browser tab',standalone:'Running in standalone app mode',
   install:'On iPhone / iPad, open the published website in Safari, choose Share > Add to Home Screen, then launch TEMPOLIVE from the Home Screen. On other devices, use the browser\'s installation option when available.',
   active:'This is a standalone Home Screen app window, not a regular Safari tab. Metronome, setlist and room controls work the same way.',
   data:'Export your setlist from the original browser before switching to the app. If your setlist is missing in the app, import that backup. Do not clear website data.',
   network:'This package does not add offline caching or guarantee background playback. Stay online for initial loading, reloading and room features.'
  },
  de:{
   heading:'Home-Bildschirm-App',browser:'Derzeit in einem Browser-Tab',standalone:'Im eigenst\u00e4ndigen App-Modus ge\u00f6ffnet',
   install:'Auf iPhone / iPad die ver\u00f6ffentlichte Website in Safari \u00f6ffnen, Teilen > Zum Home-Bildschirm w\u00e4hlen und TEMPOLIVE danach vom Home-Bildschirm starten. Auf anderen Ger\u00e4ten die Installationsoption des Browsers verwenden, sofern verf\u00fcgbar.',
   active:'Dies ist ein eigenst\u00e4ndiges App-Fenster, kein normaler Safari-Tab. Metronom, Setlist und Raumsteuerung funktionieren wie bisher.',
   data:'Vor dem Wechsel zur App die Setlist im bisherigen Browser exportieren. Fehlt sie in der App, diese Sicherung importieren. Website-Daten nicht l\u00f6schen.',
   network:'Dieses Paket f\u00fcgt keinen Offline-Cache hinzu und garantiert keine Hintergrundwiedergabe. Zum ersten Laden, Neuladen und f\u00fcr Raumfunktionen online bleiben.'
  }
 };
 const mode=window.matchMedia?.('(display-mode: standalone)');
 const isApp=()=>window.navigator.standalone===true||!!mode?.matches;
 const copy=()=>COPY[window.TempoliveI18n?.lang||document.documentElement.lang]||COPY['zh-Hant'];
 const values={
  appInstallLabel:()=>copy().heading,
  appInstallState:()=>isApp()?copy().standalone:copy().browser,
  appInstallHint:()=>isApp()?copy().active:copy().install,
  appInstallData:()=>copy().data,
  appInstallNetwork:()=>copy().network
 };
 function paint(){for(const [id,text] of Object.entries(values)){const node=document.getElementById(id);if(node)node.textContent=text();}}
 function mount(){
  const i18n=window.TempoliveI18n;
  if(i18n){for(const [id,text] of Object.entries(values)){const node=document.getElementById(id);if(node)i18n.bind(node,text);}i18n.onChange(paint);}
  paint();
 }
 if(mode?.addEventListener)mode.addEventListener('change',paint);else mode?.addListener?.(paint);
 window.addEventListener('pageshow',paint);
 window.TempoliveAppShell=Object.freeze({snapshot:()=>({release:'app-r3',standalone:isApp(),
  expectedIdentity:'/TEMPOLIVE/',manifestURL:document.querySelector('link[rel="manifest"]')?.href||'',
  appleCapable:document.querySelector('meta[name="apple-mobile-web-app-capable"]')?.content==='yes',
  iconURLs:[...document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"]')].map(e=>e.href),
  serviceWorkerAdded:false})});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();

/* END tempolive-app-shell */

;window.TempoliveRuntimeRelease="2.1.14-isolated-entry";
