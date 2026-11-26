'use strict';
;
(() => {
    'use strict';
    const dictionary = { "\u81ea\u7531\u7df4\u7fd2": "Free practice", "\u55ae\u4eba\u6a21\u5f0f": "Solo mode", "\u4e3b\u6301\u4eba": "Host", "\u53c3\u8207\u8005": "Participant", "\u958b\u59cb\u7bc0\u62cd": "Start", "\u505c\u6b62\u64ad\u653e": "Stop", "\u672c\u6a5f\u975c\u97f3": "Mute this device", "\u6062\u5fa9\u6536\u807d": "Unmute", "\u5c1a\u672a\u958b\u59cb": "Not started", "\u64ad\u653e\u4e2d": "Playing", "\u7b49\u5f85\u958b\u59cb": "Waiting", "\u9810\u5099\u62cd": "Count-in", "\u5df2\u5c31\u7dd2": "Ready", "\u6821\u6642\u4e2d": "Syncing", "\u5f85\u555f\u7528\u8072\u97f3": "Audio not enabled", "\u5df2\u975c\u97f3": "Muted", "\u958b\u5834\u8b9a\u7f8e": "Opening praise", "\u5b89\u975c\u656c\u62dc": "Quiet worship", "\u56de\u61c9\u8a69\u6b4c": "Response song", "\u7bc4\u4f8b": "Example", "\u5df2\u5132\u5b58\u6b4c\u66f2": "Song saved", "\u8b8a\u66f4\u5c07\u65bc\u5c0f\u7bc0\u4ea4\u754c\u5957\u7528": "Change at the next bar boundary", "\u6e96\u5099\u597d\u4e86\uff0c\u5f9e\u7b2c\u4e00\u62cd\u958b\u59cb\u3002": "Ready. Start on beat one.", "\u7cfb\u7d71\u9810\u8a2d\uff08\u5587\u53ed\uff0f\u8033\u6a5f\uff09": "System default (speakers / headphones)", "\u7121\u6cd5\u9023\u4e0a\u4e2d\u7e7c\u670d\u52d9\u3002\u8acb\u5617\u8a66\u66f4\u63db Wi-Fi \u6216\u624b\u6a5f\u71b1\u9ede\uff0c\u518d\u6309\u91cd\u8a66\u3002\u516c\u958b\u670d\u52d9\u4e5f\u53ef\u80fd\u66ab\u6642\u7121\u6cd5\u4f7f\u7528\u3002": "Cannot connect to the relay. Try another Wi-Fi network or a mobile hotspot, then retry. The public service may also be temporarily unavailable.", "\u8207\u4e3b\u6301\u4eba\u7684\u9023\u7dda\u4e2d\u65b7\uff0c\u5df2\u505c\u6b62\u64ad\u653e\u3002\u8acb\u91cd\u65b0\u52a0\u5165\u623f\u9593\u3002": "Disconnected from the host. Playback has stopped. Please rejoin the room.", "\u91cd\u97f3": "Accented", "\u4e00\u822c": "Unaccented", "\u975c\u97f3": "Muted", "\u6728\u584a": "Woodblock", "\u6eab\u6f64\u7684\u6728\u8cea\u6572\u64ca\uff0c\u8d77\u97f3\u6e05\u695a\u3001\u8072\u5c3e\u77ed\u4fc3\u3002": "A warm wooden click with a clear attack and a short decay.", "\u6e05\u6670\u96fb\u5b50": "Clear electronic", "\u6e05\u6670\u4fd0\u843d\u7684\u96fb\u5b50\u97f3\uff0c\u5f37\u5f31\u62cd\u4ee5\u9ad8\u4f4e\u97f3\u5340\u5206\u3002": "A crisp electronic click. Accented and unaccented beats use different pitches.", "\u725b\u9234": "Cowbell", "\u539a\u5be6\u7684\u91d1\u5c6c\u5171\u9cf4\uff0c\u62cd\u9ede\u660e\u78ba\u3001\u8fa8\u8b58\u5ea6\u9ad8\u3002": "A full metallic resonance with a distinct, easy-to-hear beat.", "\u77ed\u9234": "Short bell", "\u660e\u4eae\u7684\u77ed\u9234\u8072\uff0c\u5e36\u91d1\u5c6c\u5c64\u6b21\uff0c\u4e0d\u4f7f\u7528\u9577\u6df7\u97ff\u3002": "A bright, short bell tone with metallic overtones and no long reverb tail.", "\u99ac\u6797\u5df4": "Marimba", "\u5713\u6f64\u7684\u6728\u8cea\u5171\u9cf4\uff0c\u6709\u97f3\u9ad8\u8207\u6572\u64ca\u5c64\u6b21\u3002": "A rounded wooden resonance with a defined pitch and percussive attack.", "\u6a19\u6e96": "Standard", "\u8f03\u81ea\u7136\u7684\u5f37\u5f31\u8207\u8870\u6e1b\uff0c\u9069\u5408\u5b89\u975c\u7df4\u7fd2\u3002": "More natural dynamics and decay for quiet practice.", "\u52a0\u5f37": "Boost", "\u8f03\u9ad8\u7684\u767c\u8072\u5bc6\u5ea6\uff0c\u5f31\u62cd\u8207\u7d30\u5206\u97f3\u66f4\u660e\u986f\u3002": "A denser sound that makes unaccented beats and subdivisions easier to hear.", "\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8cc7\u6599\uff0c\u8acb\u4f7f\u7528\u300c\u532f\u51fa\u6b4c\u55ae\u300d\u5099\u4efd\u3002": "The browser could not save your data. Use Export setlist to make a backup.", "\u8acb\u518d\u9ede\u4e00\u6b21\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\uff0c\u5141\u8a31\u624b\u6a5f\u64ad\u653e\u3002": "Tap Enable audio again to allow playback on this phone.", "\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4 Web Audio\u3002": "This browser does not support Web Audio.", "\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u653e\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u958b\u59cb\u6216\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\u3002": "Playback is not yet allowed. Tap Start or Enable audio again.", "\u8acb\u518d\u9ede\u4e00\u6b21\u555f\u7528\u8072\u97f3\u3002": "Tap again to enable audio.", "\u65b0\u7248\u767c\u8072\u66f4\u5f37\uff1b\u8033\u6a5f\u8acb\u5148\u964d\u4f4e\u97f3\u91cf\uff0c\u518d\u9010\u6b65\u8abf\u6574\u3002": "The click output is stronger in this version. Lower your headphone volume first, then increase it gradually.", "\u672c\u6a5f\u76ee\u524d\u975c\u97f3\uff0c\u8acb\u5148\u958b\u555f\u97f3\u91cf\u3002": "This device is muted. Unmute it or raise the volume first.", "\u6b63\u5728\u64ad\u653e\u76ee\u524d\u97f3\u8272\uff1b\u505c\u6b62\u7bc0\u62cd\u5f8c\u53ef\u55ae\u7368\u8a66\u807d\uff0c\u4e0d\u6703\u53e0\u52a0\u984d\u5916\u62cd\u9ede\u3002": "The selected sound is already playing. Stop the metronome to preview it separately without adding extra clicks.", "\u5df2\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002": "Audio has been re-enabled on this device.", "\u6b63\u5728\u78ba\u8a8d\u4e2d\u7e7c\u9023\u7dda\u2026": "Checking the relay connection...", "\u4e2d\u7e7c\u670d\u52d9\u62d2\u7d55\u9023\u7dda\uff08": "The relay rejected the connection (", "\uff09\u3002\u8acb\u7a0d\u5f8c\u91cd\u8a66\u3002 [R04]": "). Please try again later. [R04]", "\u4e2d\u7e7c\u8cc7\u6599\u683c\u5f0f\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66\u3002 [R05]": "Invalid relay data. Please retry. [R05]", "\u7121\u6cd5\u8a02\u95b1\u623f\u9593\u8cc7\u6599\uff0c\u8acb\u91cd\u8a66\u3002 [R08]": "Cannot subscribe to room data. Please retry. [R08]", "\u4e2d\u7e7c\u6c92\u6709\u56de\u61c9\uff0c\u8acb\u91cd\u8a66\u3002 [R09]": "The relay did not respond. Please retry. [R09]", "\u5df2\u9023\u4e0a\u4e2d\u7e7c\uff0c\u4f46\u627e\u4e0d\u5230\u6b64\u623f\u9593\u3002\u8acb\u78ba\u8a8d\u56db\u4f4d\u4ee3\u78bc\u3001\u4e3b\u6301\u4eba\u672a\u95dc\u9589\u7db2\u9801\uff0c\u4e26\u78ba\u8a8d\u5168\u54e1\u90fd\u4f7f\u7528\u9019\u4e00\u7248\u3002 [R10]": "Connected to the relay, but the room was not found. Check the four-digit code, make sure the host has kept the page open, and use the same version on every device. [R10]", "\u9023\u7dda\u4e2d\u65b7\uff0c\u6b63\u5728\u91cd\u9023": "Connection lost. Reconnecting", "\u6b63\u5728\u9023\u63a5\u4e2d\u7e7c\u670d\u52d9": "Connecting to the relay", "\u5df2\u9023\u4e0a\u4e2d\u7e7c\uff0c\u6b63\u5728\u6aa2\u67e5\u56db\u4f4d\u4ee3\u78bc\u2026": "Connected to the relay. Checking the four-digit code...", "\u623f\u9593\u4ee3\u78bc\u5df2\u88ab\u5176\u4ed6\u4e3b\u6301\u4eba\u4f7f\u7528\uff0c\u8acb\u91cd\u65b0\u5efa\u7acb\u623f\u9593\u3002": "Another host is using this room code. Please create a new room.", "\u623f\u9593\u4ee3\u78bc\u5fd9\u788c\uff0c\u8acb\u91cd\u8a66\u5efa\u7acb\u3002": "The room code is in use. Please try creating the room again.", "\u6b63\u5728\u9023\u63a5\u4e2d\u7e7c\u670d\u52d9\u2026": "Connecting to the relay...", "\u9023\u7dda\u903e\u6642\uff0c\u5df2\u505c\u6b62\u7b49\u5f85\u3002\u8acb\u78ba\u8a8d\u5168\u54e1\u4f7f\u7528\u65b0\u7248\uff0c\u4e26\u5617\u8a66\u66f4\u63db\u7db2\u8def\u5f8c\u91cd\u8a66\u3002 [R11]": "Connection timed out. Check that everyone uses the same version, then try another network. [R11]", "\u4e2d\u7e7c\u5df2\u9023\u7dda\uff0c\u6b63\u5728\u5c0b\u627e\u623f\u9593 ": "Relay connected. Looking for room ", "\u4e2d\u7e7c\u4e2d\u65b7\uff0c\u6b63\u5728\u81ea\u52d5\u91cd\u9023\u2026": "Relay disconnected. Reconnecting automatically...", "\u623f\u9593\u5df2\u9054\u672c\u7248 12 \u4eba\u4e0a\u9650\u3002": "This room has reached the 12-person limit.", "\u4e3b\u6301\u4eba\u5df2\u7d50\u675f\u623f\u9593\uff0c\u7bc0\u62cd\u5df2\u505c\u6b62\u3002": "The host ended the room. Playback has stopped.", "\u623f\u9593\u6821\u6642\u5b8c\u6210\uff0c\u6b63\u5728\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002": "Room clocks synchronized. Following the host.", "\u5df2\u9023\u4e0a\u623f\u9593\uff0c\u4f46\u7db2\u8def\u5ef6\u9072\u904e\u5927\u800c\u7121\u6cd5\u6821\u6642\u3002\u5df2\u505c\u6b62\u7b49\u5f85\uff0c\u8acb\u66f4\u63db\u7db2\u8def\u5f8c\u91cd\u8a66\u3002 [R12]": "Connected to the room, but network latency is too high to synchronize. Please try another network. [R12]", "\u5df2\u91cd\u65b0\u53d6\u6a23\u6821\u6642\uff0c\u4e0d\u6539\u8b8a\u64ad\u653e\u9032\u5ea6\u3002": "Resampling clock synchronization without changing playback position.", "\u5df2\u91cd\u65b0\u50b3\u9001\u7bc0\u594f\u72c0\u614b\u3002": "The current playback state has been resent.", "\u5df2\u96e2\u958b\u623f\u9593\uff0c\u56de\u5230\u55ae\u4eba\u6a21\u5f0f\u3002": "You left the room and returned to solo mode.", "\u7b2c ": "Beat ", " \u62cd\uff1a": ": ", "\uff0c\u9ede\u9078\u5207\u63db": ". Select to change.", "\u6162\u677f\u547c\u5438": "Slow and spacious", "\u5f9e\u5bb9\u524d\u884c": "Relaxed pace", "\u7a69\u5b9a\u5f8b\u52d5": "Steady groove", "\u8f15\u5feb\u63a8\u9032": "Upbeat momentum", "\u9ad8\u901f\u7bc0\u594f": "Fast tempo", "\u7bc0\u594f\u7531\u4e3b\u6301\u4eba\u7d71\u4e00\u63a7\u5236": "The host controls the rhythm", "\u9ede\u9078\u62cd\u9ede\uff1a\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3": "Tap a beat: accented > unaccented > muted", "\u6062\u5fa9\u672c\u6a5f\u8072\u97f3": "Restore audio", "\u5718\u968a\u6536\u807d": "Team listening", "\u623f\u9593\u4e3b\u6301": "Hosting", "\u9023\u7dda\u4e2d": "Connecting", "\u9084\u6c92\u6709\u6b4c\u66f2\uff0c\u5c07\u76ee\u524d\u7684\u7bc0\u594f\u5b58\u6210\u7b2c\u4e00\u9996\u5427\u3002": "No songs yet. Save the current rhythm as your first song.", "\u7de8\u8f2f ": "Edit ", "\u6211\u7684\u5718\u968a\u623f\u9593": "My team room", "\u5df2\u52a0\u5165\u5718\u968a\u623f\u9593": "Joined room", "\u4e2d\u7e7c\u4e2d\u65b7\uff0c\u91cd\u9023\u4e2d": "Relay disconnected. Reconnecting", "\u5df2\u9023\u7dda\uff0c\u6821\u6642\u4e2d": "Connected. Syncing clocks", "\u5df2\u9023\u7dda \u00b7 \u4e2d\u7e7c\u540c\u6b65": "Connected | Relay sync", " \u4eba\u5728\u623f\u9593": " people in the room", "\u4eba": "P", " \u00b7 \u4e3b\u6301": " | Host", "\u7db2\u8def\u6ce2\u52d5": "Network unstable", "\u5df2\u6821\u6642": "Synchronized", "\u56db\u4f4d\u6578\u5b57\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5bc6\u78bc\u3002\u77e5\u9053\u4ee3\u78bc\u7684\u4eba\u53ef\u52a0\u5165\uff1b\u95dc\u9589\u7db2\u9801\u6703\u7d50\u675f\u623f\u9593\u3002": "The four-digit code is an invitation, not a password. Anyone with the code can join. Closing this page ends the room.", "\u986f\u793a\u7684\u662f\u7db2\u8def\u5f80\u8fd4\u5ef6\u9072\uff0c\u4e0d\u662f\u8033\u6a5f\u7684\u5be6\u969b\u8072\u97f3\u8aa4\u5dee\u3002": "This is the network round-trip time, not the actual timing difference between headphones.", "\u7d50\u675f\u623f\u9593": "End room", "\u96e2\u958b\u623f\u9593": "Leave room", "\u5df2\u958b\u555f\uff0c\u50c5\u7bc0\u62cd\u5668\u5340\u584a\u767c\u5149": "On. Only the metronome panel flashes.", "\u95dc\u9589\uff0c\u4e0d\u986f\u793a\u62cd\u9ede\u87a2\u5149": "Off. No visual beat flash.", "00:00 \u00b7 \u7b2c 0 \u5c0f\u7bc0": "00:00 | Bar 0", "\u9810\u5099 ": "Count-in ", " \u5c0f\u7bc0": " bars", "\u9810\u5099\u62cd \u00b7 ": "Count-in | ", " \u00b7 \u7b2c ": " | Bar ", "\u8ddf\u96a8\u4e3b\u6301\u4eba \u00b7 ": "Following host | ", " \u00b7 \u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96": " | Quarter-note BPM", " \u79d2": " s", "\u5c07\u65bc ": "Starts in ", " \u79d2\u5f8c\u958b\u59cb": " s", " \u79d2\u5f8c\u505c\u6b62": " s", "\u6b63\u5728\u6821\u6b63\u88dd\u7f6e\u6642\u9593\u2026": "Synchronizing device clocks...", "\u91cd\u9023\u4e2d": "Reconnecting", "\u9023\u7dda\u4e2d\u65b7\uff0c\u8072\u97f3\u66ab\u505c\uff1b\u6b63\u5728\u91cd\u65b0\u9023\u7dda\u3002": "Connection lost. Audio is paused while reconnecting.", "\u6b4c\u55ae\u4e0a\u9650\u70ba 200 \u9996\uff0c\u8acb\u5148\u532f\u51fa\u5099\u4efd\u4e26\u6574\u7406\u3002": "The setlist limit is 200 songs. Export a backup and remove unused songs first.", "\u7de8\u8f2f\u6b4c\u66f2": "Edit song", "\u65b0\u589e\u6b4c\u66f2": "Add song", "\u8acb\u8f38\u5165\u6b4c\u66f2\u540d\u7a31": "Enter a song name", "\u6b4c\u66f2\u5df2\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff0c\u4f46\u700f\u89bd\u5668\u7121\u6cd5\u5132\u5b58\uff1b\u8acb\u5148\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002": "The song is kept on this page, but the browser could not save it. Export your setlist before closing.", "\u78ba\u5b9a\u522a\u9664\u300c": "Delete \"", "\u5df2\u522a\u9664\u6b4c\u66f2\u3002": "Song deleted.", "\u5df2\u5f9e\u76ee\u524d\u9801\u9762\u522a\u9664\uff0c\u4f46\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8b8a\u66f4\uff1b\u8acb\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002": "Deleted from this page, but the browser could not save the change. Export a setlist backup.", "\u5df2\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002": "Setlist backup exported.", "\u532f\u5165 ": "Import ", " \u9996\u6b4c\u66f2\uff0c\u4e26\u53d6\u4ee3\u6b64\u700f\u89bd\u5668\u539f\u6709\u6b4c\u55ae\uff1f\u539f\u6b4c\u55ae\u8acb\u5148\u532f\u51fa\u5099\u4efd\u3002": " songs and replace the setlist in this browser? Export the current setlist first.", "\u5df2\u532f\u5165 ": "Imported ", " \u9996\u6b4c\u66f2\u3002": " songs.", "\u5df2\u532f\u5165\u6b4c\u55ae\uff0c\u4f46\u50c5\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff1b\u8acb\u78ba\u8a8d\u700f\u89bd\u5668\u5141\u8a31\u5132\u5b58\u8cc7\u6599\u3002": "The setlist was imported but is only kept on this page. Check that the browser allows data storage.", "\u7121\u6cd5\u532f\u5165\uff1a\u8acb\u9078\u64c7\u7531\u672c\u7bc0\u62cd\u5668\u532f\u51fa\u30012 MB \u4ee5\u4e0b\u7684\u6709\u6548 JSON \u6b4c\u55ae\u3002": "Import failed. Choose a valid JSON setlist exported by this metronome, under 2 MB.", "\u518d\u9ede\u4e00\u6b21\u6e2c\u901f\uff0c\u9023\u7e8c\u591a\u9ede\u5e7e\u6b21\u66f4\u6e96\u78ba\u3002": "Tap again to measure the tempo. More taps improve the estimate.", "\u5df2\u5207\u63db\u52a0\u5f37\uff0c\u8acb\u5f9e\u8f03\u4f4e\u97f3\u91cf\u958b\u59cb\u8a66\u807d\u3002": "Boost enabled. Start at a lower volume and increase it gradually.", "\u5207\u63db\u6dfa\u8272\u6a21\u5f0f": "Switch to light mode", "\u5207\u63db\u6df1\u8272\u6a21\u5f0f": "Switch to dark mode", "\u76ee\u524d\u4f7f\u7528\u6df1\u8272\u5916\u89c0": "Using dark mode", "\u76ee\u524d\u4f7f\u7528\u6dfa\u8272\u5916\u89c0": "Using light mode", "\u96e2\u958b\u5c08\u6ce8\u6a21\u5f0f": "Exit focus mode", "\u5c08\u6ce8\u6a21\u5f0f": "Focus mode", "\u97f3\u8a0a\u88dd\u7f6e ": "Audio device ", "\u539f\u8f38\u51fa\u88dd\u7f6e\u5df2\u4e2d\u65b7\uff0c\u6539\u7528\u7cfb\u7d71\u9810\u8a2d\u8f38\u51fa\u3002": "The previous output device disconnected. Switched to the system default.", "\u6b64\u700f\u89bd\u5668\u4f7f\u7528\u7cfb\u7d71\u7684\u97f3\u8a0a\u8f38\u51fa\u3002\u8981\u7528\u624b\u6a5f\u5916\u653e\uff0c\u8acb\u5728\u63a7\u5236\u4e2d\u5fc3\u9078\u64c7\u624b\u6a5f\u5587\u53ed\u6216\u4e2d\u65b7\u85cd\u7259\u8033\u6a5f\uff0c\u8abf\u9ad8\u5a92\u9ad4\u97f3\u91cf\uff0c\u518d\u9ede\u300c\u8a66\u807d\u300d\u3002\u4e0d\u9700\u8981\u8033\u6a5f\u6216\u9ea5\u514b\u98a8\u6b0a\u9650\u5373\u53ef\u64ad\u653e\u3002": "This browser uses the system audio output. To use the phone speaker, select it in the system audio controls or disconnect Bluetooth headphones. Raise the media volume, then tap Preview sound. Headphones and microphone permission are not required for playback.", "\u53ef\u4f7f\u7528\u624b\u6a5f\u5587\u53ed\uff1b\u8acb\u78ba\u8a8d\u7cfb\u7d71\u8f38\u51fa\u8207\u5a92\u9ad4\u97f3\u91cf\uff0c\u518d\u9ede\u8a66\u807d\u3002": "The phone speaker is supported. Check the system output and media volume, then preview the sound.", "\u5df2\u9078\u8f38\u51fa": "Selected output", "\u5df2\u5207\u63db\u97f3\u8a0a\u8f38\u51fa\u3002": "Audio output changed.", "\u672a\u5207\u63db\u8f38\u51fa\uff1a\u8acb\u5141\u8a31\u88dd\u7f6e\u6b0a\u9650\uff0c\u6216\u6539\u7531\u7cfb\u7d71\u9078\u64c7\u8033\u6a5f\u3002": "Output was not changed. Allow device access or select headphones in system settings.", "\u5df2\u66f4\u65b0\u88dd\u7f6e\u6e05\u55ae\uff0c\u8acb\u9078\u64c7\u8981\u4f7f\u7528\u7684\u8f38\u51fa\u3002": "Device list updated. Select the output you want to use.", "\u7121\u6cd5\u53d6\u5f97\u88dd\u7f6e\u6e05\u55ae\uff0c\u8acb\u6539\u7531\u7cfb\u7d71\u9078\u64c7\u8f38\u51fa\u3002": "Cannot get the device list. Select the output in system settings.", "\u5df2\u5207\u63db\u8072\u97f3\u8f38\u51fa\uff0c\u8acb\u8a66\u807d\u78ba\u8a8d\u3002": "Audio output changed. Preview the sound to check it.", "\u7121\u6cd5\u5207\u63db\u8f38\u51fa\uff0c\u539f\u8f38\u51fa\u4fdd\u6301\u4e0d\u8b8a\u3002": "Cannot change the output. The previous output is unchanged.", " \u00b7 \u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4": " | Not supported by this browser", " \u00b7 \u5df2\u555f\u7528": " | Enabled", " \u00b7 \u672a\u53d6\u5f97\u6b0a\u9650": " | Permission not granted", "\u5efa\u7acb\u5718\u968a\u623f\u9593": "Create a team room", "\u4ee3\u78bc\u52a0\u5165\u623f\u9593": "Join with a code", "\u5efa\u7acb\u623f\u9593": "Create room", "\u52a0\u5165\u4e26\u555f\u7528\u8072\u97f3": "Join and enable audio", "\u4f60\u5c07\u6210\u70ba\u4e3b\u6301\u4eba\uff0c\u7d71\u4e00\u63a7\u5236\u5927\u5bb6\u7684\u7bc0\u594f\u3002": "You will be the host and control the rhythm for everyone.", "\u8f38\u5165\u4e3b\u6301\u4eba\u63d0\u4f9b\u7684\u56db\u4f4d\u6578\u5b57\uff0c\u52a0\u5165\u5f8c\u81ea\u52d5\u8ddf\u96a8\u7bc0\u62cd\u3002": "Enter the host's four-digit code. You will follow the metronome after joining.", "\u8acb\u8f38\u5165\u66b1\u7a31\u3002": "Enter a nickname.", "\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u56db\u4f4d\u6578\u5b57\u4ee3\u78bc\u3002": "Enter a valid four-digit code.", "\u76ee\u524d\u96e2\u7dda\uff0c\u8acb\u5148\u9023\u4e0a\u7db2\u8def\u3002": "You are offline. Connect to the internet first.", "\u9023\u7dda\u4e2d\u2026": "Connecting...", "\u623f\u9593\u5df2\u5efa\u7acb\uff0c\u8acb\u5206\u4eab\u56db\u4f4d\u6578\u5b57\u7d66\u5718\u54e1\u3002": "Room created. Share the four-digit code with your bandmates.", "\u5df2\u52a0\u5165\u623f\u9593\uff0c\u958b\u59cb\u6821\u6642\u3002": "Room joined. Synchronizing clocks.", "\u91cd\u8a66\u5efa\u7acb": "Retry creating", "\u91cd\u8a66\u52a0\u5165": "Retry joining", "\u7d50\u675f\u623f\u9593\u5c07\u505c\u6b62\u6240\u6709\u53c3\u8207\u8005\u7684\u7bc0\u62cd\uff0c\u78ba\u5b9a\u7d50\u675f\uff1f": "Ending this room will stop the metronome for all participants. End the room?", "\u5df2\u8907\u88fd\u623f\u9593\u4ee3\u78bc\uff1a": "Room code copied: ", "\u8acb\u624b\u52d5\u8907\u88fd\u4ee3\u78bc\uff1a": "Copy this code manually: ", "\u7cfb\u7d71\u8f38\u51fa\u8aaa\u660e": "System output help", "\u6b64\u700f\u89bd\u5668\u7684\u5132\u5b58\u8cc7\u6599\u7121\u6cd5\u8b80\u53d6\uff0c\u5df2\u4f7f\u7528\u9810\u8a2d\u503c\u3002\u8acb\u4f7f\u7528\u6b4c\u55ae\u532f\u51fa\u5099\u4efd\u3002": "The browser could not read saved data, so defaults were loaded. Use setlist export for backups.", "\u5df2\u66ab\u6642\u95dc\u9589\u672c\u6a5f\u7bc0\u62cd\u8072\u3002\u904a\u6232\u7d50\u675f\u6216\u8fd4\u56de\u5f8c\u81ea\u52d5\u6062\u5fa9\uff1b\u623f\u9593\u5176\u4ed6\u4eba\u7684\u7bc0\u62cd\u4e0d\u53d7\u5f71\u97ff\u3002": "This device's metronome is temporarily silenced. It will resume after the game ends or you return. Other devices in the room are unaffected.", "\u700f\u89bd\u5668\u5c1a\u672a\u6062\u5fa9\u7bc0\u62cd\u8072\uff0c\u8acb\u56de\u4e3b\u756b\u9762\u91cd\u65b0\u555f\u7528\u8072\u97f3\u3002": "The browser has not restored the click. Return to the main screen and enable audio again.", "\u904a\u6232\u5df2\u7d50\u675f\uff0c\u5df2\u6062\u5fa9\u672c\u6a5f\u7bc0\u62cd\u8072\u3002\u518d\u73a9\u4e00\u6b21\u6642\u6703\u81ea\u52d5\u5207\u63db\u56de\u904a\u6232\u8072\u97f3\u3002": "The game has ended and the local click has resumed. Playing again will switch back to game audio.", "\u904a\u6232\u5df2\u7d50\u675f\uff0c\u4fdd\u7559\u76ee\u524d\u7684\u505c\u6b62\u3001\u975c\u97f3\u8207\u97f3\u91cf\u8a2d\u5b9a\u3002": "The game has ended. Your current stop, mute and volume settings are preserved.", "\u904a\u6232\u7121\u6cd5\u8f09\u5165\uff0c\u8acb\u91cd\u65b0\u958b\u555f\u3002": "The game could not load. Close it and open it again.", "\u7bc0\u594f\u5c0f\u904a\u6232": "Rhythm game", "\u7e7c\u7e8c\u7bc0\u594f\u6311\u6230": "Continue rhythm challenge", "\uff5c\u6700\u9ad8 ": " | Best ", " \u5206": " points", "": " (new feature)", "\u92fc\u7434": "Piano", "\u9375\u76e4": "Keyboard", "\u6728\u5409\u4ed6": "Acoustic guitar", "\u96fb\u5409\u4ed6": "Electric guitar", "\u8c9d\u65af": "Bass", "\u9f13": "Drums", "\u4e3b\u9818": "Worship leader", "\u6b4c\u5531": "Vocals", "\u97f3\u63a7": "Sound engineer", "\u592a\u5feb": "Too fast", "\u6162\u4e00\u9ede": "Slow down", "\u8acb\u6162\u4e00\u9ede": "Please slow down", "\u592a\u6162": "Too slow", "\u5feb\u4e00\u9ede": "Speed up", "\u8acb\u5feb\u4e00\u9ede": "Please speed up", "\u591a\u4e00\u9ede": "A little more", "\u5c11\u4e00\u9ede": "A little less", "\u76e3\u807d\u5927": "Monitor up", "\u76e3\u807d\u5927\u4e00\u9ede": "Turn the monitor level up", "\u76e3\u807d\u5c0f": "Monitor down", "\u76e3\u807d\u5c0f\u4e00\u9ede": "Turn the monitor level down", "\u8981\u5e6b\u5fd9": "Need help", "\u9700\u8981\u5e6b\u5fd9": "I need help", "\u7b49\u5f85\u9001\u9054": "Awaiting delivery", "\u4e3b\u6301\u4eba\u5df2\u63a5\u6536": "Host received the message", "\u5df2\u9001\u9054": "Delivered", "\u5df2\u9001\u9054\uff0c\u7b49\u5f85\u64ad\u5831": "Delivered. Queued for speech", "\u6b63\u5728\u64ad\u5831": "Speaking", "\u88dd\u7f6e\u5df2\u5b8c\u6210\u64ad\u5831": "Playback completed on the device", "\u5c0d\u65b9\u5df2\u78ba\u8a8d": "Recipient confirmed", "\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u672a\u555f\u7528": "Delivered. Speech not enabled", "\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u97f3\u91cf\u70ba\u96f6": "Delivered. Speech volume is zero", "\u5df2\u9001\u9054\uff0c\u81ea\u52d5\u64ad\u5831\u95dc\u9589": "Delivered. Automatic speech is off", "\u5df2\u9001\u9054\uff0c\u64ad\u5831\u5931\u6557": "Delivered. Speech failed", "\u5df2\u9001\u9054\uff0c\u5df2\u903e\u64ad\u5831\u6642\u9650": "Delivered. Speech expired", "\u5df2\u9001\u9054\uff0c\u8a9e\u97f3\u4f47\u5217\u5df2\u6eff": "Delivered. Speech queue is full", "\u5c0d\u65b9\u9700\u66f4\u65b0\u7248\u672c": "Recipient needs to update", "\u5c0d\u65b9\u96e2\u7dda\uff0f\u5c1a\u672a\u78ba\u8a8d\u9001\u9054": "Recipient offline / delivery unconfirmed", "\u903e\u6642\u672a\u78ba\u8a8d\u9001\u9054": "Delivery confirmation timed out", "\u88dd\u7f6e\u7121\u6cd5\u540c\u6642\u64ad\u653e\u8a9e\u97f3": "The device cannot play speech at the same time", "\u672a\u9001\u51fa": "Not sent", "\u9f13\u624b": "Drummer", "\u8aaa\uff0c": " says, ", "\u4e0d\u652f\u63f4\u8a9e\u97f3": "Speech not supported", "\u50c5\u986f\u793a\u6587\u5b57": "Text only", "\u8a9e\u97f3\u975c\u97f3": "Speech muted", "\u9700\u8981\u91cd\u65b0\u8a66\u807d": "Test speech again", "\u8a9e\u97f3\u5df2\u555f\u7528": "Speech enabled", "\u5f85\u555f\u7528\u8a9e\u97f3": "Speech not enabled", "\u76ee\u524d\u6b63\u5728\u64ad\u5831\uff0c\u8acb\u807d\u5b8c\u5f8c\u518d\u8a66\u807d\u3002": "A message is being spoken. Wait for it to finish before testing.", "\u8a9e\u97f3\u63d0\u9192\u5df2\u555f\u7528\u3002\u7bc0\u62cd\u5668\u6703\u7e7c\u7e8c\u64ad\u653e\u3002": "Voice alerts are enabled. The metronome will keep playing.", "\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u8a9e\u97f3\u5408\u6210\uff0c\u4ecd\u53ef\u63a5\u6536\u6587\u5b57\u3002": "This browser does not support speech synthesis. Text messages still work.", "\u8a9e\u97f3\u97f3\u91cf\u76ee\u524d\u70ba\u96f6\u3002": "Speech volume is currently zero.", "\u627e\u4e0d\u5230\u4e2d\u6587\u8a9e\u97f3\u3002\u8acb\u5728\u88dd\u7f6e\u5b89\u88dd\u4e2d\u6587\u8a9e\u97f3\u5f8c\uff0c\u518d\u6309\u555f\u7528\uff0f\u8a66\u807d\u3002": "No English voice is available. Install an English voice on this device, then select Enable / test.", "\u8a9e\u97f3\u7121\u6cd5\u64ad\u653e": "Speech cannot play", "\u8a9e\u97f3\u672a\u80fd\u64ad\u653e\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u3002": "Speech could not play. Please test it again.", "\u8a66\u807d\u5b8c\u6210\u3002\u8acb\u78ba\u8a8d\u5be6\u969b\u5587\u53ed\uff0f\u8033\u6a5f\u6709\u8072\u97f3\uff1b\u97f3\u91cf\u4ecd\u7531\u7cfb\u7d71\u9650\u5236\u3002": "Voice test finished. Check that you actually heard it through the speaker or headphones. System volume limits still apply.", "\u8a66\u807d\u672a\u5b8c\u6210\u3002": "Voice test did not finish.", "\u8a9e\u97f3\u64ad\u653e\u903e\u6642\u3002": "Speech playback timed out.", "\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u5831\uff0c\u8acb\u9ede\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\u3002": "The browser has not allowed speech. Select Enable / test.", "\u8a9e\u97f3\u670d\u52d9\u7121\u6cd5\u64ad\u653e\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u4e26\u78ba\u8a8d\u4e2d\u6587\u8a9e\u97f3\u5df2\u5b89\u88dd\u3002": "The speech service could not play. Test again and check that an English voice is installed.", "\u6b64\u88dd\u7f6e\u76ee\u524d\u7121\u6cd5\u540c\u6642\u64ad\u653e\u8a9e\u97f3\u8207\u7bc0\u62cd\uff0c\u5df2\u505c\u6b62\u8a9e\u97f3\uff1b\u8acb\u91cd\u65b0\u555f\u7528\u7bc0\u62cd\u4e26\u6539\u7528\u6587\u5b57\u78ba\u8a8d\u3002": "This device cannot currently play speech and the click together. Speech has stopped. Re-enable the click and use text messages.", "\u8a9e\u97f3\u5c1a\u672a\u958b\u59cb\uff0c\u8acb\u9ede\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\uff0c\u4e26\u78ba\u8a8d\u4e2d\u6587\u8a9e\u97f3\u53ca\u8f38\u51fa\u88dd\u7f6e\u3002": "Speech has not started. Select Enable / test and check the English voice and output device.", "\u7121\u6cd5\u555f\u52d5\u8a9e\u97f3\uff0c\u8acb\u4f7f\u7528\u652f\u63f4\u4e2d\u6587\u8a9e\u97f3\u7684\u700f\u89bd\u5668\u3002": "Cannot start speech. Use a browser that supports English speech synthesis.", "\u81ea\u52d5\u9078\u64c7\u4e2d\u6587\u8072\u97f3": "Automatically select an English voice", "\uff08\u672c\u6a5f\uff09": " (on device)", "\uff08\u53ef\u80fd\u9700\u7db2\u8def\uff09": " (may need internet)", "\u4e2d\u6587\u8a9e\u97f3\u4f7f\u7528\u7cfb\u7d71\u8f38\u51fa\uff1b\u4e0d\u6703\u8ddf\u96a8\u7db2\u9801\u53e6\u5916\u6307\u5b9a\u7684\u97f3\u6548\u5361\u3002\u8acb\u5148\u8a66\u807d\u78ba\u8a8d\u3002": "English speech uses the system output, not a separate audio interface selected on this page. Test it first.", "\u88dd\u7f6e\u5c1a\u672a\u5217\u51fa\u4e2d\u6587\u8a9e\u97f3\uff1b\u53ef\u5148\u8a66\u807d\uff0c\u5fc5\u8981\u6642\u5b89\u88dd\u7cfb\u7d71\u4e2d\u6587\u8a9e\u97f3\u3002": "The device has not listed an English voice yet. Try the voice test, or install a system English voice if needed.", "\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u8a9e\u97f3\uff0c\u4ecd\u53ef\u986f\u793a\u6536\u5230\u7684\u6587\u5b57\u3002": "This browser does not support speech. Received text can still be shown.", " \u4e0d\u4f7f\u7528\u9ea5\u514b\u98a8\u3002\u96f2\u7aef\u8a9e\u97f3\u53ef\u80fd\u7531\u88dd\u7f6e\u670d\u52d9\u8655\u7406\u6587\u5b57\uff1b\u672c\u6a5f\u8a9e\u97f3\u512a\u5148\u3002": " No microphone is used. Cloud voices may send text to the device's speech service; on-device voices are preferred.", "\u8a0a\u606f\u8b58\u5225\u78bc\u91cd\u8907\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u3002": "Duplicate message ID. Please send a new message.", "\u8a0a\u606f\u5df2\u904e\u6642\uff0c\u8acb\u91cd\u65b0\u50b3\u9001\u3002": "The message is too old. Please send it again.", "\u50b3\u9001\u592a\u5bc6\u96c6\uff0c\u8acb\u7a0d\u7b49\u4e00\u4e0b\u3002": "Messages are being sent too quickly. Wait a moment.", "\u8acb\u5148\u9078\u64c7\u6216\u8f38\u5165\u8a0a\u606f\u3002": "Select or enter a message first.", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u6216\u5c1a\u7121\u5176\u4ed6\u5718\u54e1\u3002": "The recipient has left, or no other bandmates have joined yet.", "\u6240\u6709\u4eba": "Everyone", "\u7b2c\u4e00\u6b65\uff0c\u5171\u5169\u6b65": "Step 1 of 2", "\u7b2c\u4e8c\u6b65\uff0c\u5171\u5169\u6b65": "Step 2 of 2", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u3002": "The recipient has left. Choose another recipient.", "\u623f\u9593\u5c1a\u672a\u9023\u7dda\u5b8c\u6210\uff0c\u8acb\u5f85\u9023\u7dda\u6062\u5fa9\u5f8c\u518d\u9078\u64c7\u77ed\u53e5\u3002": "The room is not fully connected. Wait for the connection to recover, then choose a phrase.", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u50b3\u9001\u5c0d\u8c61\u3002": "The recipient has left. Choose a recipient again.", "\u8acb\u5148\u9078\u64c7\u77ed\u53e5\uff0c\u6216\u5beb\u4e0b\u81ea\u8a02\u8a0a\u606f\u3002": "Select a phrase or write a custom message first.", "\u4e0a\u4e00\u5247\u525b\u9001\u51fa\uff0c\u8acb\u7a0d\u5f8c\u518d\u9078\u4e00\u6b21\u3002": "The previous message was just sent. Wait a moment, then select again.", "\u50b3\u8a71\u672a\u80fd\u9001\u51fa\uff0c\u8acb\u78ba\u8a8d\u623f\u9593\u9023\u7dda\u5f8c\u518d\u8a66\u3002": "The message could not be sent. Check the room connection and try again.", " \u50b3\u7d66 ": " to ", "\u8a9e\u97f3\u5c1a\u672a\u555f\u7528\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002": "Speech is not enabled. You can select Replay.", "\u8a9e\u97f3\u97f3\u91cf\u70ba\u96f6\uff0c\u8acb\u5f9e live\u50b3\u8a71\u88e1\u7684\u8a9e\u97f3\u8a2d\u5b9a\u8abf\u6574\u3002": "Speech volume is zero. Adjust it in Live talk's voice settings.", "\u81ea\u52d5\u64ad\u5831\u5df2\u95dc\u9589\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002": "Automatic speech is off. You can select Replay.", "\u8a9e\u97f3\u672a\u80fd\u64ad\u51fa\uff0c\u53ef\u518d\u8a66\u4e00\u6b21\u3002": "Speech could not play. You can try again.", "\u6b64\u5247\u8a0a\u606f\u5df2\u904e\u6642\uff0c\u4e0d\u6703\u81ea\u52d5\u88dc\u64ad\u3002": "This message has expired and will not play automatically.", "\u76ee\u524d\u64ad\u5831\u8f03\u591a\uff0c\u53ef\u9ede\u300c\u518d\u64ad\u4e00\u6b21\u300d\u3002": "There are several messages to play. You can select Replay.", "\u6b64\u88dd\u7f6e\u7684\u8a9e\u97f3\u64ad\u5831\u5df2\u4e2d\u65b7\uff0c\u8acb\u5148\u78ba\u8a8d\u8072\u97f3\u8f38\u51fa\u3002": "Speech was interrupted on this device. Check the audio output first.", "\u5c0d\u65b9\u5df2\u96e2\u958b\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u5c0d\u8c61\u3002": "The recipient has left. Choose another recipient.", "\u5168\u90e8\u4eba": "Everyone", " \u4f4d\u5718\u54e1": " bandmates", "\u623f\u9593\u6210\u54e1": "Room member", "\u9700\u66f4\u65b0\u7248\u672c": "Update required", "\u540c\u6a23\u7684\u6a02\u5668\u6703\u4ee5\u7de8\u865f\u5340\u5206\uff1b\u5168\u90e8\u4eba\u4e0d\u5305\u542b\u81ea\u5df1\u3002": "Players with the same instrument are numbered. Everyone excludes you.", "\u7b49\u5f85\u5176\u4ed6\u6a02\u5668\u52a0\u5165\u623f\u9593\u3002": "Waiting for other instruments to join the room.", "\u5e38\u7528\u77ed\u53e5": "Saved phrase", "\u81ea\u8a02\u8a0a\u606f": "Custom message", "\u5beb\u4e0b\u60f3\u8aaa\u7684\u8a71": "Write what you want to say", "\u79fb\u9664": "Remove", "\u79fb\u9664\u5e38\u7528\u77ed\u53e5\uff1a": "Remove saved phrase: ", "\u5148\u5beb\u4e0b\u60f3\u8aaa\u7684\u8a71": "Write your message first", "\uff0b \u65b0\u589e\u6a02\u5668": "+ Add instrument", "\u4f60\u7684\u6a02\u5668\uff1a": "Your instrument: ", "\u8acb\u9078\u64c7\u672c\u6b21\u4f7f\u7528\u7684\u6a02\u5668\u6216\u89d2\u8272\u3002": "Choose the instrument or role you are using this time.", " \u00b7 \u623f\u9593 ": " | Room ", "\u623f\u9593\u6b63\u5728\u9023\u7dda\uff0f\u6821\u6642\uff0c\u5b8c\u6210\u5f8c\u5373\u53ef\u50b3\u8a71\u3002": "The room is connecting or synchronizing. You can send messages when it is ready.", "\u5148\u5f9e\u4e3b\u756b\u9762\u5efa\u7acb\u6216\u52a0\u5165\u623f\u9593\u3002": "Create or join a room from the main screen first.", "\u4e3b\u6301\u4eba\u5c1a\u672a\u555f\u7528\u50b3\u8a71\u529f\u80fd\uff0c\u8acb\u5168\u9ad4\u66f4\u65b0\u5f8c\u91cd\u65b0\u5efa\u7acb\u623f\u9593\u3002": "The host does not have messaging enabled. Everyone should update, then create the room again.", "\u8acb\u5148\u5efa\u7acb\u6216\u52a0\u5165\u623f\u9593\uff0c\u624d\u80fd\u4f7f\u7528 live\u50b3\u8a71\u3002": "Create or join a room before using Live talk.", "live\u50b3\u8a71\u672a\u80fd\u9001\u51fa\uff0c\u8acb\u78ba\u8a8d\u9023\u7dda\u5f8c\u518d\u8a66\u3002": "Live talk could not send the message. Check the connection and try again.", "\u8acb\u5148\u9078\u64c7\u4f60\u7684\u6a02\u5668\u6216\u89d2\u8272\u3002": "Choose your instrument or role first.", "\u65b0\u589e\u6a02\u5668": "Add instrument", "\u8acb\u8f38\u5165 1\u201316 \u5b57\u7684\u6a02\u5668\u6216\u89d2\u8272\u540d\u7a31\u3002": "Enter an instrument or role name using 1-16 characters.", "\u6700\u591a\u65b0\u589e 12 \u500b\u6a02\u5668\u3002": "You can add up to 12 instruments.", "\u5269\u9918 ${lives} \u6b21\u6a5f\u6703": "${lives} lives remaining", "\u7b2c ${level} \u95dc": "Level ${level}", "\u807d\u7bc0\u594f\uff0c\u8a18\u4e0b\u4f86": "Listen and remember", "\u63db\u4f60\u4e86\uff01": "Your turn!", "\u6e96\u78ba\u7387: ${accuracy}%": "Accuracy: ${accuracy}%", "${accuracy}% \u5931\u6557": "${accuracy}% | Miss", "\u9700\u9054 95%": "95% required", "${accuracy}% \u5b8c\u7f8e!": "${accuracy}% | Perfect!", "\u901a\u904e\u672c\u95dc": "Level cleared", "\u6311\u6230\u6210\u529f": "Challenge complete", "\u672c\u6b21\u6311\u6230\u7d50\u675f": "Game over", "\u518d\u73a9\u4e00\u6b21": "Play again", "\u700f\u89bd\u5668\u5c1a\u672a\u555f\u7528\u8072\u97f3\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u7e7c\u7e8c\u3002": "Audio is not enabled yet. Select Continue again.", "TEMPOLIVE \u9023\u7dda\u7bc0\u62cd\u5668": "TEMPOLIVE Connected Metronome", "\u8df3\u81f3\u7bc0\u62cd\u63a7\u5236": "Skip to metronome controls", "\u9023\u7dda\u7bc0\u62cd\u5668": "Connected metronome", "\u6234\u4e0a\u8033\u6a5f\uff0c\u5c08\u6ce8\u6bcf\u4e00\u62cd": "Put on headphones. Focus on every beat.", "\u76ee\u524d\u96e2\u7dda\uff1a\u55ae\u4eba\u7bc0\u62cd\u5668\u8207\u6b4c\u55ae\u4ecd\u53ef\u4f7f\u7528\uff0c\u8de8\u88dd\u7f6e\u623f\u9593\u9700\u8981\u7db2\u8def\u3002": "You are offline. Solo practice and your setlist still work; rooms need an internet connection.", "\u76ee\u524d\u6b4c\u66f2": "Current song", "\u6bcf\u5206\u9418\u62cd\u6578": "Beats per minute", "\u62d6\u66f3\u8abf\u6574\u901f\u5ea6": "Drag to adjust tempo", "\u4e0b\u4e00\u9996": "Next song", "\u9ede\u6309\u6e2c\u901f": "Tap tempo", "\u672c\u6a5f\u97f3\u91cf": "Local volume", "\u62cd\u865f": "Time signature", "\u97f3\u7b26\u7d30\u5206": "Subdivision", "\u95dc\u9589": "Off", "1 \u5c0f\u7bc0": "1 bar", "2 \u5c0f\u7bc0": "2 bars", "\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a": "Save current settings", "\u6b4c\u66f2\u6e05\u55ae": "Setlist", "\u4e8b\u5148\u8a2d\u597d\u901f\u5ea6\uff0c\u73fe\u5834\u4e00\u9375\u5207\u63db\u3002": "Set your tempos in advance. Switch songs with one tap.", "\u524d\u4e00\u9996": "Previous song", "\u532f\u51fa\u6b4c\u55ae": "Export setlist", "\u532f\u5165\u6b4c\u55ae": "Import setlist", "\u50c5\u5132\u5b58\u65bc\u672c\u6a5f": "Saved on this device", "\u4e0d\u540c\u88dd\u7f6e\uff0c\u540c\u4e00\u7bc0\u594f\u3002": "Different devices. One rhythm.", "\u5efa\u7acb\u5718\u968a\u623f\u9593\uff0c\u7531\u4e00\u4eba\u63a7\u5236\u901f\u5ea6\u8207\u64ad\u653e\uff0c\u5927\u5bb6\u5404\u81ea\u7528\u8033\u6a5f\u8ddf\u4e0a\u3002": "Create a team room. One host controls tempo and playback; everyone follows on their own headphones.", "\u4ee3\u78bc\u52a0\u5165": "Join with code", "\u623f\u9593\u4ee3\u78bc": "Room code", "1 \u4eba\u5728\u623f\u9593": "1 person in the room", "\u91cd\u65b0\u6821\u6642": "Resync clocks", "\u5f80\u8fd4\u5ef6\u9072": "Round-trip time", "\u6821\u6642\u72c0\u614b": "Clock sync", "\u6821\u6b63\u4e2d": "Synchronizing", "\u77e5\u9053\u4ee3\u78bc\u7684\u4eba\u90fd\u53ef\u52a0\u5165\u3002\u4e3b\u6301\u4eba\u96e2\u958b\u5f8c\u623f\u9593\u7d50\u675f\u3002": "Anyone with the code can join. The room ends when the host leaves.", "\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u5132\u5b58\u65bc\u6b64\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u8de8\u88dd\u7f6e\u540c\u6b65\u3002": "Your setlist and preferences stay in this browser. They do not sync automatically across devices.", "\u7a7a\u767d\u9375": "Space", "\u64ad\u653e / \u505c\u6b62": "Play / Stop", "\u6e2c\u901f": "Tap tempo", "live\u50b3\u8a71": "Live talk", "\u9078\u5c0d\u8c61 \u2192 \u9ede\u77ed\u53e5 \u2192 \u81ea\u52d5\u9001\u51fa": "Choose a recipient > tap a phrase > sent automatically", "\u8981\u50b3\u7d66\u8ab0\uff1f": "Who is it for?", "\u9078\u64c7\u623f\u9593\u88e1\u7684\u6a02\u5668\u3002": "Choose an instrument in the room.", "\u50b3\u7d66": "To", "\u63db\u5c0d\u8c61": "Change recipient", "\u60f3\u8aaa\u4ec0\u9ebc\uff1f": "What do you want to say?", "\u9ede\u9078\u4e00\u53e5\uff0c\u5c31\u6703\u50b3\u9001\u4e26\u8fd4\u56de\u4e3b\u756b\u9762\u3002": "Tap a phrase to send it and return to the main screen.", "\u6700\u591a 40 \u5b57": "Up to 40 characters", "\u5132\u5b58\u70ba\u672c\u6a5f\u5e38\u7528\u77ed\u53e5": "Save as a phrase on this device", "\u9ede\u9019\u53e5\u5c31\u9001\u51fa\uff0c\u6216\u6309 Enter": "Tap this message to send, or press Enter", "\u8a9e\u97f3\u8207\u5e38\u7528\u77ed\u53e5": "Voice and saved phrases", "\u8a9e\u97f3\u63d0\u9192": "Voice alerts", "\u5c1a\u672a\u8a66\u807d": "Not tested yet", "\u555f\u7528\uff0f\u8a66\u807d": "Enable / test", "\u6536\u5230\u8a0a\u606f\u6642\u81ea\u52d5\u64ad\u5831": "Speak incoming messages automatically", "\u8a9e\u97f3\u97f3\u91cf": "Voice volume", "\u64ad\u5831\u8072\u97f3": "Voice", "\u81ea\u8a02\u6a02\u5668\u3001\u5e38\u7528\u77ed\u53e5\u8207\u8a9e\u97f3\u8a2d\u5b9a\u50c5\u5b58\u65bc\u6b64\u700f\u89bd\u5668\u3002\u50b3\u8a71\u4e0d\u9700\u56de\u8986\u6536\u5230\uff1b\u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\u4e0d\u9069\u5408\u654f\u611f\u8cc7\u6599\u3002": "Custom instruments, saved phrases and voice preferences stay in this browser. No acknowledgement is required. Do not send sensitive information through the public test relay.", "\u50b3\u8a71": "Talk", "\u518d\u64ad\u4e00\u6b21": "Replay", "\u8a2d\u5b9a": "Settings", "\u6df1\u8272\u6a21\u5f0f": "Dark mode", "\u87a2\u5e55\u9583\u720d": "Beat flash", "\u9810\u8a2d\u95dc\u9589\u3002\u50c5\u5728\u7bc0\u62cd\u5668\u5340\u584a\u986f\u793a\u62cd\u9ede\u87a2\u5149\uff1a\u6dfa\u8272\u6a21\u5f0f\u70ba\u9ed1\u8272\uff0c\u6df1\u8272\u6a21\u5f0f\u70ba\u767d\u8272\uff0c\u6bcf\u6b21\u767c\u5149\u7d04 0.32 \u79d2\uff0c\u4e26\u9010\u6f38\u6de1\u51fa\uff0c\u4e0d\u9583\u52d5\u6574\u500b\u9801\u9762\u3002\u9ad8\u901f\u6642\u81ea\u52d5\u6e1b\u5c11\u9583\u720d\u6b21\u6578\uff1b\u5c0d\u9583\u5149\u654f\u611f\u8005\u8acb\u4fdd\u6301\u95dc\u9589\u3002": "Off by default. Only the metronome panel flashes: black in light mode and white in dark mode. Each pulse lasts about 0.32 seconds and fades out; the whole page does not flash. At higher tempos, fewer pulses are shown. Keep this off if you are sensitive to flashing light.", "\u97f3\u8a0a\u8207\u85cd\u7259": "Audio and Bluetooth", "\u99ac\u6797\u5df4 \u00b7 \u52a0\u5f37": "Marimba | Boost", "\u7bc0\u62cd\u97f3\u8272": "Click sound", "\u8f38\u51fa\u5f37\u5ea6": "Output level", "\u4f7f\u7528\u8033\u6a5f\u8acb\u5148\u964d\u4f4e\u97f3\u91cf\uff0c\u518d\u9010\u6b65\u8abf\u6574\u3002\u624b\u6a5f\u5916\u653e\u7684\u5be6\u969b\u97f3\u91cf\u4ecd\u53d7\u5587\u53ed\u529f\u7387\u9650\u5236\u3002": "Start with a low headphone volume and increase it gradually. Phone speaker volume is still limited by its hardware.", "\u8072\u97f3\u8f38\u51fa\u88dd\u7f6e": "Audio output device", "\u9078\u64c7\u8f38\u51fa": "Choose output", "\u8a66\u807d\u97f3\u8272": "Preview sound", "\u672a\u9023\u63a5\u8033\u6a5f\u6642\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u624b\u6a5f\u5587\u53ed\uff1b\u8acb\u8abf\u9ad8\u7cfb\u7d71\u7684\u5a92\u9ad4\u97f3\u91cf\u3002\u4f7f\u7528\u85cd\u7259\u6642\uff0c\u8acb\u5148\u5728\u7cfb\u7d71\u914d\u5c0d\u4e26\u9078\u64c7\u8f38\u51fa\u3002": "Without headphones, you can use the phone speaker. Raise the system media volume. For Bluetooth, pair the device and select it in system settings first.", "\u672c\u6a5f\u6642\u9593\u6821\u6b63": "Local timing offset", "\u63d0\u524d 300 ms": "300 ms earlier", "\u5ef6\u5f8c 300 ms": "300 ms later", "\u8072\u97f3\u6bd4\u5176\u4ed6\u4eba\u6162\uff0c\u5f80\u8ca0\u503c\u8abf\u6574\uff1b\u592a\u5feb\u5247\u5f80\u6b63\u503c\u8abf\u6574\u3002\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u3002": "If your sound is late, use a negative value. If it is early, use a positive value. This affects only this device.", "\u4f7f\u7528\u700f\u89bd\u5668\u63d0\u4f9b\u7684\u8f38\u51fa\u5ef6\u9072\u4f30\u8a08\uff08\u4e0d\u7b49\u65bc\u5be6\u969b\u91cf\u6e2c\uff09": "Use the browser's output latency estimate (not an actual measurement)", "\u64ad\u653e\u6642\u4fdd\u6301\u87a2\u5e55\u958b\u555f\uff08\u88dd\u7f6e\u652f\u63f4\u6642\uff09": "Keep the screen awake during playback (where supported)", "\u85cd\u7259\u4e0d\u662f\u623f\u9593\u9023\u7dda\u65b9\u5f0f\u3002\u5404\u53f0\u88dd\u7f6e\u9700\u8981\u7db2\u8def\uff0c\u4e26\u5404\u81ea\u9023\u63a5\u8033\u6a5f\u3002\u85cd\u7259\u5ef6\u9072\u4e0d\u4e00\u4e14\u53ef\u80fd\u8b8a\u52d5\uff0c\u6b63\u5f0f\u6f14\u51fa\u8acb\u512a\u5148\u4f7f\u7528\u6709\u7dda\u76e3\u807d\uff0c\u4e26\u5148\u5be6\u6e2c\u3002": "Bluetooth is not the room connection. Every device needs internet and its own headphone connection. Bluetooth latency varies and can change. Prefer wired monitoring for performances, and test it first.", "\u5132\u5b58\u901f\u5ea6\u8207\u62cd\u865f\uff0c\u4e0b\u6b21\u9ede\u6b4c\u540d\u5373\u53ef\u5207\u63db\u3002": "Save the tempo and time signature, then tap the song name to recall it next time.", "\u6b4c\u66f2\u540d\u7a31": "Song name", "\u901f\u5ea6 BPM": "Tempo (BPM)", "\u56db\u5206\u97f3\u7b26": "Quarter note", "\u516b\u5206\u97f3\u7b26": "Eighth note", "\u5341\u516d\u5206\u97f3\u7b26": "Sixteenth note", "\u6b4c\u55ae\u9806\u5e8f": "Setlist order", "\u2191 \u4e0a\u79fb": "Move up", "\u2193 \u4e0b\u79fb": "Move down", "\u522a\u9664": "Delete", "\u53d6\u6d88": "Cancel", "\u5132\u5b58\u6b4c\u66f2": "Save song", "\u4f60\u7684\u6a02\u5668\uff0f\u89d2\u8272": "Your instrument / role", "\u65b0\u589e\u6a02\u5668\u6216\u89d2\u8272": "Add an instrument or role", "\u65b0\u589e\u4e26\u9078\u64c7": "Add and select", "\u6536\u5230\u5718\u968a\u8a0a\u606f\u6642\u81ea\u52d5\u64ad\u5831": "Speak incoming team messages automatically", "\u8a66\u807d\u8a9e\u97f3": "Test voice", "\u8acb\u5148\u8a66\u807d\uff0c\u78ba\u8a8d\u5587\u53ed\u6216\u8033\u6a5f\u6709\u8072\u97f3\u3002\u8a9e\u97f3\u8207\u7bc0\u62cd\u5668\u5206\u958b\u63a7\u5236\uff0c\u4e0d\u4f7f\u7528\u9ea5\u514b\u98a8\u3002": "Test first and check that the speaker or headphones produce sound. Speech and the metronome are controlled separately. No microphone is used.", "4 \u4f4d\u6578\u5b57\u623f\u9593\u4ee3\u78bc": "4-digit room code", "\u4f7f\u7528 shiftr.io \u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\uff08WSS 443\uff09\u3002\u50b3\u9001\u6a02\u5668\u540d\u7a31\u3001\u6b4c\u540d\u3001\u7bc0\u594f\u8207\u50b3\u8a71\u6587\u5b57\uff0c\u4e0d\u9304\u97f3\u3001\u4e0d\u50b3\u9001\u9ea5\u514b\u98a8\u8072\u97f3\u3002\u6307\u5b9a\u50b3\u8a71\u7531\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5230\u7aef\u52a0\u5bc6\uff1b\u8acb\u52ff\u8f38\u5165\u654f\u611f\u8cc7\u6599\u3002": "Uses the public shiftr.io test relay (WSS port 443). Instrument names, song names, rhythm settings and message text are transmitted. No audio is recorded and no microphone audio is sent. Targeted messages are relayed by the host, not end-to-end encrypted. Do not enter sensitive information.", "\u4e3b\u6301\u4eba\u8207\u5718\u54e1\u90fd\u8acb\u4f7f\u7528\u6b64\u65b0\u7248\u3002\u516c\u958b\u4e2d\u7e7c\u50c5\u4f9b\u8a66\u7528\uff0c\u4e0d\u4fdd\u8b49\u670d\u52d9\u53ef\u7528\u7387\uff1b\u6b63\u5f0f\u6f14\u51fa\u61c9\u6539\u7528\u5c08\u7528\u670d\u52d9\u4e26\u5148\u5be6\u6e2c\u3002": "The host and all participants should use this version. The public relay is for testing and has no uptime guarantee. Use a dedicated service for performances and test it first.", "\u958b\u59cb\u4f7f\u7528\u7bc0\u62cd\u5668": "Getting started", "\u5148\u9078\u901f\u5ea6\uff0c\u518d\u958b\u59cb": "Choose a tempo, then start", "\u53ef\u76f4\u63a5\u8f38\u5165 40\u2013300 BPM\uff0c\u62d6\u66f3\u6ed1\u687f\uff0c\u6216\u4f7f\u7528\u52a0\u6e1b\u9375\u3002\u9023\u7e8c\u9ede\u6309\u300c\u9ede\u6309\u6e2c\u901f\u300d\u53ef\u5e36\u5165\u4f60\u7684\u901f\u5ea6\u3002\u62cd\u9ede\u53ef\u5207\u63db\u91cd\u97f3\u3001\u4e00\u822c\u8207\u975c\u97f3\u3002": "Enter 40-300 BPM, drag the slider, or use the plus and minus buttons. Repeatedly press Tap tempo to set your tempo. Beats can be accented, unaccented or muted.", "\u97f3\u7b26\u8207\u62cd\u865f": "Notes and time signatures", "BPM \u56fa\u5b9a\u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\u3002\u56db\u5206\u3001\u516b\u5206\u3001\u5341\u516d\u5206\u97f3\u7b26\u5206\u5225\u5728\u6bcf\u500b\u56db\u5206\u97f3\u7b26\u6642\u9593\u5167\u767c\u8072 1\u30012\u30014 \u6b21\u3002\u62cd\u9ede\u4f9d\u62cd\u865f\u7684\u5206\u6bcd\u8a08\u6578\uff1b6/8 \u7684\u516b\u5206\u97f3\u7b26\u70ba\u534a\u500b\u56db\u5206\u97f3\u7b26\u3002\u6a02\u8b5c\u6a19\u793a\u300c\u9644\u9ede\u56db\u5206\u97f3\u7b26 = 70\u300d\u6642\uff0c\u6b64\u8655\u8a2d\u70ba 105 BPM\u3002": "BPM is always based on quarter notes. Quarter, eighth and sixteenth notes sound 1, 2 and 4 times per quarter-note duration. Beat positions follow the time signature's denominator; in 6/8, an eighth note is half a quarter note. If the score says dotted quarter note = 70, set this metronome to 105 BPM.", "\u6b4c\u55ae\u8207\u9810\u5099\u62cd": "Setlists and count-ins", "\u6b4c\u55ae\u5167\u5efa\u4e09\u9996\u7bc4\u4f8b\uff0c\u4e0d\u662f\u771f\u5be6\u6b4c\u66f2\u7684\u5efa\u8b70\u901f\u5ea6\u3002\u53ef\u65b0\u589e\u3001\u7de8\u8f2f\u3001\u79fb\u52d5\u9806\u5e8f\u3001\u522a\u9664\u8207\u532f\u51fa\u5099\u4efd\u3002\u64ad\u653e\u4e2d\u8abf\u6574\u901f\u5ea6\u3001\u9ede\u6309\u6e2c\u901f\u6216\u8b8a\u66f4\u62cd\u9ede\u91cd\u97f3\uff0c\u90fd\u6703\u7acb\u5373\u5957\u7528\uff0c\u4e0d\u7b49\u5c0f\u7bc0\u4ea4\u754c\uff1b\u5df2\u767c\u51fa\u7684\u8072\u97f3\u4e0d\u6703\u91cd\u64ad\u3002\u5207\u63db\u6b4c\u66f2\u4ecd\u5728\u9810\u544a\u7684\u5c0f\u7bc0\u4ea4\u754c\u5957\u7528\u3002\u9810\u5099\u62cd\u53ea\u5728\u5f9e\u505c\u6b62\u72c0\u614b\u958b\u59cb\u6642\u751f\u6548\u3002": "The setlist includes three examples, not recommended tempos for actual songs. You can add, edit, reorder, delete and export songs. Tempo changes, Tap tempo and beat accents take effect immediately during playback, without waiting for a bar boundary. Clicks already played are not repeated. Song changes still take effect at the scheduled bar boundary. Count-ins apply only when starting from stopped.", "\u8b93\u5718\u968a\u52a0\u5165": "Bring your team into the room", "\u4e3b\u6301\u4eba\u5efa\u7acb\u623f\u9593\u5f8c\uff0c\u5c07 4 \u4f4d\u6578\u5b57\u4ee3\u78bc\u4ea4\u7d66\u5718\u54e1\u3002\u5168\u54e1\u90fd\u9700\u958b\u555f\u9019\u500b\u65b0\u7248 HTML\uff0c\u518d\u9ede\u9078\u52a0\u5165\u3002\u623f\u9593\u4f7f\u7528\u516c\u958b WSS \u4e2d\u7e7c\uff0c\u4e0d\u8981\u4f7f\u7528\u771f\u5be6\u59d3\u540d\u6216\u654f\u611f\u6b4c\u540d\u3002\u6821\u6642\u5f8c\u5728\u5404\u672c\u6a5f\u7522\u751f\u7bc0\u62cd\uff0c\u4e0d\u662f\u4e32\u6d41\u4e3b\u6301\u4eba\u7684\u8072\u97f3\u3002\u53c3\u8207\u8005\u53ef\u8abf\u6574\u672c\u6a5f\u97f3\u91cf\u3001\u97f3\u8272\u8207\u5ef6\u9072\uff0c\u4e5f\u53ef\u4f7f\u7528\u5718\u968a\u50b3\u8a71\uff0c\u4f46\u4e0d\u80fd\u66f4\u52d5\u4e3b\u6301\u4eba\u7684\u7bc0\u594f\u3002\u4ee3\u78bc\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5b89\u5168\u5bc6\u78bc\u3002": "After creating a room, the host shares the four-digit code. Everyone needs to open this version of the HTML and select Join. Rooms use a public WSS relay; avoid real names and sensitive song titles. After clock sync, each device generates its own click rather than streaming the host's audio. Participants can adjust local volume, sound and timing offset and use team messages, but cannot change the host's rhythm. The code is an invitation, not a secure password.", "\u91cd\u8981\uff1a\u7db2\u8def\u6821\u6642\u4e0d\u7b49\u65bc\u8033\u6a5f\u8072\u97f3\u5b8c\u5168\u540c\u6b65\u3002\u85cd\u7259\u3001\u97f3\u6548\u5361\u3001\u7cfb\u7d71\u6392\u7a0b\u90fd\u6703\u5f71\u97ff\u5ef6\u9072\u3002\u672c\u7248\u9069\u5408\u5148\u8a66\u7528\u8207\u6392\u7df4\uff1b\u4e0d\u4fdd\u8b49\u6f14\u51fa\u7b49\u7d1a\u7684\u96f6\u5ef6\u9072\u6216\u4e0d\u4e2d\u65b7\u3002\u4e3b\u6301\u4eba\u66ab\u6642\u96e2\u7dda\u6642\uff0c\u7e7c\u7e8c\u6700\u5f8c\u540c\u6b65\u7684\u7bc0\u62cd\uff1b\u91cd\u9023\u524d\u7121\u6cd5\u6536\u5230\u65b0\u7684\u8b8a\u901f\u6216\u66ab\u505c\u6307\u4ee4\u3002": "Important: synchronized clocks do not guarantee perfectly synchronized headphone audio. Bluetooth, audio interfaces and system scheduling all affect latency. This version is for trying out and rehearsing; it does not guarantee performance-grade zero latency or uninterrupted operation. If the host goes offline, the last synchronized beat continues. New tempo or pause commands require reconnection.", "\u8cc7\u6599\u8207\u96b1\u79c1": "Data and privacy", "\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u4f7f\u7528 localStorage\uff0c\u50c5\u4fdd\u7559\u65bc\u76ee\u524d\u700f\u89bd\u5668\uff0c\u4e0d\u9069\u5408\u5b58\u653e\u654f\u611f\u8cc7\u8a0a\u3002\u6e05\u9664\u700f\u89bd\u8cc7\u6599\u3001\u7121\u75d5\u6a21\u5f0f\u6216\u66f4\u63db\u6a94\u6848\u4f4d\u7f6e\u53ef\u80fd\u7121\u6cd5\u4fdd\u7559\u8cc7\u6599\u3002\u623f\u9593\u5206\u4eab\u6a02\u5668\u540d\u7a31\u3001\u76ee\u524d\u6b4c\u540d\u8207\u7bc0\u594f\uff0c\u4e0d\u6703\u540c\u6b65\u6574\u4efd\u6b4c\u55ae\u3002\u5718\u968a\u50b3\u8a71\u6587\u5b57\u6703\u7d93\u516c\u958b\u6e2c\u8a66\u4e2d\u7e7c\u8207\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5c0d\u7aef\u52a0\u5bc6\uff1b\u8acb\u52ff\u50b3\u9001\u654f\u611f\u8cc7\u6599\u3002": "Your setlist and preferences use localStorage and stay in this browser. Do not store sensitive information. Clearing browser data, private browsing or moving the file may prevent data from being retained. Rooms share instrument names, the current song name and rhythm, not the entire setlist. Team message text passes through the public test relay and host; it is not end-to-end encrypted. Do not send sensitive information.", "\u5feb\u901f\u9375": "Keyboard shortcuts", "\u7a7a\u767d\u9375\uff1a\u64ad\u653e / \u505c\u6b62\u3002T\uff1a\u9ede\u6309\u6e2c\u901f\u3002N\uff1a\u4e0b\u4e00\u9996\u3002\u4e0a\u4e0b\u65b9\u5411\u9375\uff1a\u901f\u5ea6 \u00b11 BPM\uff08\u642d\u914d Shift \u70ba \u00b15\uff09\u3002F\uff1a\u5c08\u6ce8\u6a21\u5f0f\u3002\u8f38\u5165\u6587\u5b57\u6642\u4e0d\u6703\u89f8\u767c\u3002": "Space: play / stop. T: Tap tempo. N: next song. Up / Down: tempo +/-1 BPM (hold Shift for +/-5). F: focus mode. Shortcuts do not trigger while you type.", "\u53d6\u5f97\u97f3\u8a0a\u88dd\u7f6e\u6e05\u55ae": "List audio devices", "\u6b64\u700f\u89bd\u5668\u53ef\u80fd\u8981\u6c42\u9ea5\u514b\u98a8\u6b0a\u9650\uff0c\u624d\u6703\u5217\u51fa\u8033\u6a5f\u8207\u5587\u53ed\u540d\u7a31\u3002\u7db2\u9801\u53ea\u6703\u77ed\u66ab\u53d6\u5f97\u6b0a\u9650\u5f8c\u7acb\u5373\u95dc\u9589\u9ea5\u514b\u98a8\uff0c\u4e0d\u9304\u97f3\u3001\u4e0d\u50b3\u9001\u8072\u97f3\u3002\u4e5f\u53ef\u53d6\u6d88\uff0c\u76f4\u63a5\u5728\u7cfb\u7d71\u8a2d\u5b9a\u4e2d\u5207\u63db\u8f38\u51fa\u3002": "This browser may require microphone permission to list speaker and headphone names. The page briefly requests access, then immediately closes the microphone. It does not record or transmit audio. You can cancel and choose the output in system settings instead.", "\u7e7c\u7e8c\u9078\u64c7": "Continue", "\u904a\u6232\u8207\u7bc0\u62cd\u8072\u81ea\u52d5\u5207\u63db": "Automatic game / click audio switching", "\u8fd4\u56de\u7bc0\u62cd\u5668": "Back to metronome", "\u904a\u6232\u97f3\u91cf": "Game volume", "\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668": "Metronome volume unchanged", "\u904a\u73a9\u6642\u66ab\u6642\u95dc\u9589\u672c\u6a5f\u7bc0\u62cd\u8072\uff0c\u7d50\u675f\u6216\u8fd4\u56de\u5f8c\u6062\u5fa9\u539f\u5148\u64ad\u653e\u72c0\u614b\u3002\u4e0d\u5f71\u97ff\u623f\u9593\u5176\u4ed6\u4eba\u3002": "The local click is temporarily silenced while you play. When you finish or return, its previous playback state is restored. Other people in the room are unaffected.", "\u6e96\u5099\u904a\u6232\u4e2d\u2026": "Preparing the game...", "\u4e3b\u8981\u529f\u80fd": "Main controls", "\u5207\u63db\u5c08\u6ce8\u6a21\u5f0f": "Toggle focus mode", "\u7591\u554f\u6559\u5b78": "Help", "\u7BC0\u594F\u5C0F\u904A\u6232": "Rhythm game ", "\u7BC0\u594F\u5C0F\u904A\u6232": "Rhythm game (new feature)", "\u7bc0\u62cd\u63a7\u5236": "Metronome controls", "\u6e1b\u5c11\u4e00 BPM": "Decrease tempo by 1 BPM", "\u901f\u5ea6 BPM\uff0c40 \u81f3 300": "Tempo in BPM, from 40 to 300", "\u589e\u52a0\u4e00 BPM": "Increase tempo by 1 BPM", "\u6bcf\u62cd\u91cd\u97f3\u8a2d\u5b9a": "Beat accents", "\u5207\u63db\u4e0b\u4e00\u9996": "Go to the next song", "\u958b\u59cb\u7bc0\u62cd\u5668": "Start the metronome", "\u9023\u7e8c\u9ede\u6309\u81f3\u5c11\u5169\u6b21\uff0c\u6216\u6309 T \u9375": "Tap at least twice, or press T", "\u6b4c\u66f2\u5feb\u901f\u5207\u63db": "Quick song navigation", "\u5207\u63db\u524d\u4e00\u9996": "Go to the previous song", "\u8907\u88fd\u623f\u9593\u4ee3\u78bc": "Copy room code", "live\u50B3\u8A71\uFF0C\u65B0\u529F\u80FD": "Live talk, new feature", "\u95dc\u9589 live\u50b3\u8a71": "Close Live talk", "\u4f8b\u5982\uff1a\u4e0b\u4e00\u6bb5\u4e00\u8d77\u9032\u526f\u6b4c": "For example: enter the chorus together next", "live\u50B3\u8A71": "Live talk (new feature)", "\u6253\u958B live\u50B3\u8A71\uFF0C\u65B0\u529F\u80FD": "Open Live talk, new feature", "\u6536\u8d77\u8a0a\u606f": "Dismiss message", "\u95dc\u9589\u8a2d\u5b9a": "Close settings", "\u6642\u9593\u6821\u6b63\u6beb\u79d2": "Timing offset in milliseconds", "\u4f8b\u5982\uff1a\u672c\u9031\u958b\u5834\u8a69\u6b4c": "For example: this week's opening song", "\u4f8b\u5982\uff1a\u85a9\u514b\u65af\u98a8": "For example: saxophone", "\u6536\u8d77\u904a\u6232\u4e26\u8fd4\u56de\u7bc0\u62cd\u5668": "Close the game and return to the metronome", "\u7bc0\u594f\u8a18\u61b6\u6311\u6230": "Rhythm memory challenge", "\u95dc\u5361": "Level", "\u5206\u6578": "Score", "\u5269\u9918\u6a5f\u6703": "Lives", "\u6700\u9ad8\u5206\u6578": "High score", "\u66ab\u505c": "Pause", "\u6e96\u5099\u597d\u4e86\u55ce\uff1f": "Ready?", "\u8ddf\u8457\u7bc0\u62cd\u807d\uff0c\u8a18\u4f4f\u6bcf\u6b21\u6572\u64ca\u3002": "Listen with the click. Remember each note.", "\u6572\u4e00\u4e0b": "Tap", "\u6216\u6309\u7a7a\u767d\u9375": "or press Space", "\u8f2a\u5230\u4f60\u6642\uff0c\u6572\u51fa\u525b\u624d\u807d\u5230\u7684\u7bc0\u594f\u3002": "When it is your turn, tap the rhythm you just heard.", "\u807d\u8207\u8a18\u61b6": "Listen and remember", "\u807d\u4e00\u6bb5\u7bc0\u594f\uff0c\u63a5\u8457\u63db\u4f60\u6572\u51fa\u4f86\u3002": "Listen to a rhythm, then tap it back.", "\u807d\u8457\u80cc\u666f\u7bc0\u62cd\uff0c\u8a18\u4f4f\u7cfb\u7d71\u793a\u7bc4\u7684\u7bc0\u594f\u3002": "Listen to the click and remember the demonstrated rhythm.", "\u97f3\u7b26\u96b1\u85cf\u5f8c\uff0c\u9ede\u300c\u6572\u4e00\u4e0b\u300d\u6216\u6309\u7a7a\u767d\u9375\uff0c\u91cd\u73fe\u76f8\u540c\u7bc0\u594f\u3002": "When the notes disappear, select Tap or press Space to reproduce the same rhythm.", "\u6bcf\u984c\u9650\u65bc 4 \u62cd\u5167\uff0c\u6e96\u78ba\u7387\u9054 95% \u5373\u53ef\u904e\u95dc\u3002": "Each pattern is within four beats. Reach 95% accuracy to pass.", "10 \u500b\u6f38\u9032\u95dc\u5361 \u00b7 3 \u6b21\u5931\u8aa4\u6a5f\u6703 \u00b7 \u96a8\u6a5f\u7bc0\u594f\u984c\u76ee": "10 progressive levels | 3 lives | Random rhythm patterns", "\u958b\u59cb\u6311\u6230": "Start challenge", "\u7a0d\u4f5c\u4f11\u606f": "Take a break", "\u904a\u6232\u5df2\u66ab\u505c": "Game paused", "\u70ba\u4e86\u78ba\u4fdd\u7bc0\u62cd\u6e96\u78ba\uff0c\u9ede\u9078\u7e7c\u7e8c\u5f8c\uff0c\u6703\u91cd\u65b0\u958b\u59cb\u672c\u95dc\u7684\u76f8\u540c\u984c\u76ee\u3002": "To keep the timing accurate, continuing restarts the same pattern in this level.", "\u7e7c\u7e8c\u672c\u95dc": "Resume level", "\u5f9e\u982d\u6311\u6230": "Start over", "\u6b61\u8fce\u56de\u4f86": "Welcome back", "\u63a5\u8457\u525b\u624d\u7684\u7bc0\u594f": "Pick up the rhythm", "\u5df2\u4fdd\u7559\u4f60\u7684\u95dc\u5361\u8207\u9032\u5ea6\u3002": "Your level and progress have been kept.", "\u9ede\u4e00\u4e0b\u7e7c\u7e8c\uff0c\u8072\u97f3\u8207\u8a08\u6642\u624d\u6703\u6062\u5fa9\u3002": "Select Continue to resume the audio and timer.", "\u7e7c\u7e8c\u904a\u6232": "Continue game", "\u91cd\u65b0\u904a\u73a9": "Play from the start", "\u91cd\u65b0\u904a\u73a9\u6703\u5f9e\u7b2c 1 \u95dc\u958b\u59cb\uff0c\u6700\u9ad8\u5206\u4ecd\u6703\u4fdd\u7559\u3002": "Starting over returns to level 1. Your high score is kept.", "\u5269\u9918 3 \u6b21\u6a5f\u6703": "3 lives remaining", "\u7bc0\u594f\u8996\u89ba\u8ecc\u9053\uff1b\u793a\u7bc4\u6642\u986f\u793a\u97f3\u7b26\uff0c\u8f2a\u5230\u4f60\u6642\u96b1\u85cf\u97f3\u7b26": "Visual rhythm track. Notes are shown during the demonstration and hidden during your turn.", "\u6572\u64ca\u7bc0\u594f": "Tap the rhythm" };
    Object.assign(dictionary, { "\u4f7f\u7528\u8aaa\u660e": "User guide", "\u653e\u5927\u7bc0\u62cd\u5668": "Expand metronome", "\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a": "Expand the metronome panel", "\u9084\u539f\u5927\u5c0f": "Restore size", "\u9084\u539f\u7bc0\u62cd\u5668\u5927\u5c0f": "Restore the metronome panel size", "\u50c5\u653e\u5927\u7bc0\u62cd\u5668\u5340\u584a\uff0c\u66ab\u6642\u6536\u8d77\u6b4c\u55ae\u8207\u623f\u9593\uff1b\u4e0d\u5f71\u97ff\u64ad\u653e\u3002": "Enlarges only the metronome panel and temporarily hides the setlist and room panels. Playback is unaffected." });
    Object.assign(dictionary, { "\u9078\u901f\u5ea6": "Set the tempo", "\u8a2d\u5b9a 40\u2013300 BPM\uff0c\u6216\u4f7f\u7528\u9ede\u6309\u6e2c\u901f\u3002": "Set 40\u2013300 BPM, or use Tap tempo.", "\u8abf\u7bc0\u594f": "Choose your rhythm", "\u9078\u62cd\u865f\u8207\u97f3\u7b26\u7d30\u5206\uff0c\u9ede\u62cd\u9ede\u5207\u63db\u8f15\u91cd\u97f3\u3002": "Choose the time signature and subdivision; tap beats to set accents.", "\u958b\u59cb\u64ad\u653e": "Start playing", "\u6309\u300c\u958b\u59cb\u7bc0\u62cd\u300d\uff0c\u7528\u672c\u6a5f\u97f3\u91cf\u8abf\u6574\u5927\u5c0f\u3002": "Press Start, then adjust the local volume.", "\u62cd\u9ede\u8f15\u91cd\u97f3": "Beat accents", "\u9ede\u9078\u62cd\u9ede\uff0c\u4f9d\u5e8f\u5207\u63db\u300c\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3\u300d\u3002": "Tap a beat to cycle through accented, unaccented and muted.", "\u901f\u5ea6\u57fa\u6e96": "Tempo reference", "BPM \u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\uff1b\u62cd\u9ede\u5247\u4f9d\u62cd\u865f\u7684\u5206\u6bcd\u8a08\u6578\u3002": "BPM uses quarter notes as its reference. Beat markers follow the denominator of the time signature.", "\u97f3\u7b26\u7d30\u5206": "Subdivision", "\u5728\u6bcf\u500b\u56db\u5206\u97f3\u7b26\u7684\u6642\u9593\u5167\uff0c\u56db\u5206\u3001\u516b\u5206\u3001\u5341\u516d\u5206\u97f3\u7b26\u5206\u5225\u767c\u8072 1\u30012\u30014 \u6b21\u3002": "Within one quarter-note duration, quarter, eighth and sixteenth notes produce 1, 2 and 4 clicks respectively.", "\u64ad\u653e\u4e2d\u8abf\u6574": "Adjust while playing", "\u901f\u5ea6\u3001\u62cd\u9ede\u91cd\u97f3\u8207\u97f3\u7b26\u7d30\u5206\u6703\u5373\u6642\u5957\u7528\uff1b\u5df2\u767c\u51fa\u7684\u8072\u97f3\u4e0d\u6703\u91cd\u64ad\u3002": "Tempo, beat accents and subdivisions update immediately. Clicks already played are not repeated.", "6/8 \u7684\u901f\u5ea6\u63db\u7b97": "Tempo in 6/8", "6/8 \u7684\u6bcf\u4e00\u62cd\u9ede\u662f\u516b\u5206\u97f3\u7b26\uff0c\u9577\u5ea6\u70ba\u534a\u500b\u56db\u5206\u97f3\u7b26\u3002\u6a02\u8b5c\u6a19\u793a\u300c\u9644\u9ede\u56db\u5206\u97f3\u7b26 = 70\u300d\u6642\uff0c\u9019\u88e1\u8acb\u8a2d\u70ba 105 BPM\u3002": "Each beat marker in 6/8 represents an eighth note, half a quarter note. For a score marked dotted quarter note = 70, set this metronome to 105 BPM.", "\u901f\u5ea6\u3001\u62cd\u865f\u8207\u7d30\u5206": "Tempo, time signature & subdivision", "\u5132\u5b58\u6b4c\u66f2": "Save song", "\u65b0\u589e\u6216\u7de8\u8f2f\u6b4c\u66f2\uff0c\u8a2d\u5b9a\u6b4c\u540d\u3001\u901f\u5ea6\u8207\u62cd\u865f\uff0c\u518d\u6309\u300c\u5132\u5b58\u6b4c\u66f2\u300d\u3002": "Add or edit a song, enter its name, tempo and time signature, then choose Save song.", "\u73fe\u5834\u5207\u6b4c": "Switch songs", "\u9ede\u6b4c\u540d\uff0c\u6216\u4f7f\u7528\u524d\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u3002\u64ad\u653e\u4e2d\u6703\u5728\u5c0f\u7bc0\u4ea4\u754c\u5207\u63db\uff0c\u4e26\u5ef6\u7e8c\u76ee\u524d\u7684\u8f15\u91cd\u97f3\u8a2d\u5b9a\u3002": "Choose a song or use Previous / Next. During playback, songs change at a bar boundary and retain your current beat-accent pattern.", "\u66f4\u65b0\u6b4c\u66f2\u8a2d\u5b9a": "Update a saved song", "\u4e3b\u756b\u9762\u81e8\u6642\u6539\u4e86\u901f\u5ea6\uff0c\u8981\u5beb\u56de\u8a72\u9996\u6b4c\u6642\uff0c\u6309\u300c\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a\u300d\u518d\u5132\u5b58\u6b4c\u66f2\u3002": "A temporary tempo change does not overwrite the saved song. Use Save current settings, then Save song to update it.", "\u9810\u5099\u62cd": "Count-in", "\u53ef\u9078\u95dc\u9589\u30011 \u5c0f\u7bc0\u6216 2 \u5c0f\u7bc0\u3002\u53ea\u5728\u5f9e\u505c\u6b62\u72c0\u614b\u958b\u59cb\u64ad\u653e\u6642\u751f\u6548\u3002": "Choose Off, 1 bar or 2 bars. The count-in applies only when starting from a stopped state.", "\u6574\u7406\u8207\u5099\u4efd": "Organize and back up", "\u6b4c\u55ae\u53ef\u6392\u5e8f\u3001\u522a\u9664\u8207\u532f\u51fa\u5099\u4efd\u3002\u5167\u5efa\u4e09\u9996\u50c5\u70ba\u7bc4\u4f8b\uff0c\u4e0d\u662f\u771f\u5be6\u6b4c\u66f2\u7684\u5efa\u8b70\u901f\u5ea6\u3002": "Reorder, delete or export songs to back up your setlist. The three built-in examples are not recommended tempos for real songs.", "\u6b4c\u55ae\u7ba1\u7406\u8207\u9810\u5099\u62cd": "Setlist & count-in", "\u4e3b\u6301\u4eba": "Host", "\u9078\u64c7\u6a02\u5668\uff0f\u89d2\u8272\u4e26\u5efa\u7acb\u623f\u9593\uff0c\u5c07 4 \u4f4d\u6578\u5b57\u4ee3\u78bc\u4ea4\u7d66\u5718\u54e1\u3002": "Choose your instrument or role, create a room, and share the four-digit code with your bandmates.", "\u5718\u54e1": "Participants", "\u958b\u555f\u76f8\u540c\u7248\u672c\uff0c\u9078\u6a02\u5668\u4e26\u8f38\u5165\u4ee3\u78bc\u52a0\u5165\u3002\u6821\u6642\u5b8c\u6210\u5f8c\uff0c\u81ea\u52d5\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002": "Open the same version, choose your instrument and join with the code. Follow the host once clock synchronization finishes.", "\u5404\u81ea\u8abf\u6574\u76e3\u807d": "Local monitoring", "\u4e3b\u6301\u4eba\u63a7\u5236\u7bc0\u594f\uff1b\u5718\u54e1\u53ef\u8abf\u672c\u6a5f\u97f3\u91cf\u3001\u97f3\u8272\u8207\u5ef6\u9072\uff0c\u4e0d\u6703\u6539\u52d5\u5168\u9ad4\u7bc0\u594f\u3002": "The host controls the rhythm. Participants can adjust their local volume, sound and timing offset without changing the shared rhythm.", "live\u50b3\u8a71": "Live talk", "\u5165\u623f\u5f8c\u9ede\u5074\u908a live\u50b3\u8a71\uff0c\u9078\u5c0d\u8c61\u518d\u9ede\u77ed\u53e5\uff0c\u5c31\u6703\u81ea\u52d5\u9001\u51fa\u3002\u8a9e\u97f3\u8acb\u5148\u555f\u7528\uff0f\u8a66\u807d\u3002": "After joining, open the Live talk side tab, choose a recipient and tap a phrase to send it automatically. Enable and test speech first.", "\u4e0d\u662f\u8072\u97f3\u4e32\u6d41": "Not an audio stream", "\u623f\u9593\u50b3\u9001\u7bc0\u594f\u8207\u6642\u9593\u8cc7\u8a0a\uff0c\u5404\u88dd\u7f6e\u5728\u672c\u6a5f\u767c\u8072\u3002\u4e3b\u6301\u4eba\u66ab\u6642\u96e2\u7dda\u6642\uff0c\u7e7c\u7e8c\u6700\u5f8c\u540c\u6b65\u7684\u7bc0\u62cd\uff1b\u91cd\u9023\u524d\u7121\u6cd5\u6536\u5230\u65b0\u7684\u8b8a\u901f\u6216\u66ab\u505c\u6307\u4ee4\u3002": "The room shares rhythm and timing information; each device generates its own clicks. If the host disconnects, participants keep the last synchronized beat. New tempo or pause commands require reconnection.", "\u5718\u968a\u623f\u9593\u8207\u50b3\u8a71": "Team rooms & Live talk", "\u807d\u4e0d\u5230\u7bc0\u62cd": "No metronome sound", "\u5148\u78ba\u8a8d\u672c\u6a5f\u6c92\u6709\u975c\u97f3\u3001\u7cfb\u7d71\u5a92\u9ad4\u97f3\u91cf\u53ca\u8f38\u51fa\u88dd\u7f6e\u6b63\u78ba\u3002\u756b\u9762\u51fa\u73fe\u300c\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\u300d\u6642\uff0c\u9ede\u4e2d\u592e\u6309\u9215\u6062\u5fa9\u3002": "Check local mute, system media volume and the selected output device. If Restore audio appears, tap the central button.", "\u8072\u97f3\u6bd4\u5225\u4eba\u5feb\u6216\u6162": "Clicks sound early or late", "\u5728\u8a2d\u5b9a\u4e2d\u8abf\u6574\u300c\u672c\u6a5f\u6642\u9593\u6821\u6b63\u300d\uff1a\u592a\u6162\u5f80\u8ca0\u503c\uff0c\u592a\u5feb\u5f80\u6b63\u503c\u3002\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u3002": "In Settings, adjust the local timing offset: negative for late clicks, positive for early clicks. This affects only your device.", "\u85cd\u7259\u8207\u7db2\u8def": "Bluetooth and the network", "\u85cd\u7259\u7528\u65bc\u8033\u6a5f\u8f38\u51fa\uff0c\u4e0d\u662f\u623f\u9593\u9023\u7dda\u65b9\u5f0f\u3002\u5404\u88dd\u7f6e\u90fd\u9700\u8981\u7db2\u8def\u3002": "Bluetooth is an audio output connection, not the room connection. Each device needs network access.", "\u6f14\u51fa\u524d\u8acb\u5148\u5be6\u6e2c": "Test before a performance", "\u7db2\u8def\u6821\u6642\u4e0d\u7b49\u65bc\u8033\u6a5f\u8072\u97f3\u5b8c\u5168\u540c\u6b65\u3002\u85cd\u7259\u3001\u97f3\u6548\u5361\u8207\u7cfb\u7d71\u6392\u7a0b\u90fd\u6703\u5f71\u97ff\u5ef6\u9072\uff1b\u672c\u7248\u9069\u5408\u8a66\u7528\u8207\u6392\u7df4\uff0c\u4e0d\u4fdd\u8b49\u96f6\u5ef6\u9072\u6216\u4e0d\u4e2d\u65b7\u3002": "Synchronized clocks do not guarantee perfectly aligned headphone audio. Bluetooth, audio interfaces and system scheduling add latency. This version is for trials and rehearsals, with no guarantee of zero latency or uninterrupted playback.", "\u8072\u97f3\u8207\u540c\u6b65\u554f\u984c": "Sound & synchronization", "\u8cc7\u6599\u5b58\u5728\u54ea\u88e1\uff1f": "Where is data saved?", "\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u7528 localStorage \u4fdd\u5b58\u65bc\u76ee\u524d\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u8de8\u88dd\u7f6e\u540c\u6b65\u3002": "Your setlist and preferences are stored in this browser using localStorage. They do not automatically sync across devices.", "\u4ec0\u9ebc\u6642\u5019\u8981\u5099\u4efd\uff1f": "When should I back up?", "\u66f4\u65b0\u6216\u79fb\u52d5\u6a94\u6848\u524d\u5148\u532f\u51fa\u6b4c\u55ae\u3002\u6e05\u9664\u700f\u89bd\u8cc7\u6599\u3001\u7121\u75d5\u6a21\u5f0f\u6216\u66f4\u63db\u6a94\u6848\u4f4d\u7f6e\uff0c\u90fd\u53ef\u80fd\u8b80\u4e0d\u5230\u539f\u8cc7\u6599\u3002": "Export your setlist before updating or moving the file. Clearing browsing data, private browsing or a different file location may make saved data unavailable.", "\u623f\u9593\u5206\u4eab\u4ec0\u9ebc\uff1f": "What does the room share?", "\u623f\u9593\u5206\u4eab\u6a02\u5668\u540d\u7a31\u3001\u76ee\u524d\u6b4c\u540d\u8207\u7bc0\u594f\uff0c\u4e0d\u6703\u540c\u6b65\u6574\u4efd\u6b4c\u55ae\u3002": "The room shares instrument names, the current song title and rhythm, not your full setlist.", "\u8acb\u52ff\u50b3\u9001\u654f\u611f\u8cc7\u6599": "Do not share sensitive information", "4 \u4f4d\u4ee3\u78bc\u662f\u9080\u8acb\u78bc\uff0c\u4e0d\u662f\u5b89\u5168\u5bc6\u78bc\u3002\u623f\u9593\u4f7f\u7528\u516c\u958b WSS \u4e2d\u7e7c\uff1b\u50b3\u8a71\u6587\u5b57\u7d93\u4e2d\u7e7c\u8207\u4e3b\u6301\u4eba\u8f49\u9001\uff0c\u4e26\u975e\u7aef\u5c0d\u7aef\u52a0\u5bc6\u3002\u672c\u6a5f\u5132\u5b58\u4e5f\u4e0d\u9069\u5408\u654f\u611f\u8cc7\u8a0a\uff1b\u8acb\u52ff\u586b\u771f\u5be6\u59d3\u540d\u3001\u654f\u611f\u6b4c\u540d\u6216\u79c1\u5bc6\u8a0a\u606f\u3002": "The four-digit code is an invitation code, not a secure password. Rooms use a public WSS relay; messages pass through the relay and host, without end-to-end encryption. Local storage is not suitable for sensitive data either. Avoid real names, sensitive song titles and private messages.", "\u8cc7\u6599\u4fdd\u5b58\u8207\u96b1\u79c1": "Saved data & privacy", "\u7a7a\u767d\u9375": "Space", "\u64ad\u653e\uff0f\u505c\u6b62": "Play / stop", "\u9ede\u6309\u6e2c\u901f": "Tap tempo", "\u4e0b\u4e00\u9996": "Next song", "\u653e\u5927\uff0f\u9084\u539f\u7bc0\u62cd\u5668": "Expand / restore the metronome", "\u901f\u5ea6 \u00b11 BPM": "Tempo \u00b11 BPM", "\u901f\u5ea6 \u00b15 BPM": "Tempo \u00b15 BPM", "\u8f38\u5165\u6587\u5b57\u6216\u958b\u555f\u5c0d\u8a71\u8996\u7a97\u6642\uff0c\u4e0d\u6703\u89f8\u767c\u4e3b\u756b\u9762\u5feb\u901f\u9375\u3002": "Main-screen shortcuts do not trigger while you type or while a dialog is open.", "\u623f\u9593\u53c3\u8207\u8005\u7684\u7a7a\u767d\u9375\u64cd\u4f5c\u672c\u6a5f\u6536\u807d\u6216\u8072\u97f3\u6062\u5fa9\uff0c\u4e0d\u6703\u505c\u6b62\u6574\u500b\u623f\u9593\u3002": "For participants, Space controls local listening or audio recovery; it does not stop the whole room.", "\u9375\u76e4\u5feb\u901f\u9375": "Keyboard shortcuts", "\u4f7f\u7528\u8aaa\u660e": "User guide", "\u5148\u7528 3 \u6b65\u958b\u59cb\uff0c\u5176\u4ed6\u9700\u8981\u6642\u518d\u770b\u3002": "Start in three steps. Open a topic when you need it.", "\u95dc\u9589\u4f7f\u7528\u8aaa\u660e": "Close user guide", "\u5feb\u901f\u4e0a\u624b": "Quick start", "\u60f3\u4e86\u89e3\u54ea\u4e00\u9805\uff1f": "What would you like to know?" });
    Object.assign(dictionary, { "\u9023\u4e0a\u5718\u968a\u3001\u540c\u6b65\u7bc0\u62cd\u3001\u5373\u6642\u50b3\u8a71\uff0c\u4e5f\u80fd\u7368\u81ea\u7df4\u7fd2\u3002": "Connect your band, share the beat and send live cues, or practise solo.", "TEMPOLIVE \u7684\u6838\u5fc3\u529f\u80fd": "The TEMPOLIVE essentials", "\u66f4\u591a\u64cd\u4f5c\u8207\u6ce8\u610f\u4e8b\u9805": "More controls and useful details", "\u5718\u968a\u623f\u9593": "Team rooms", "\u5efa\u7acb\u623f\u9593\uff0c\u5206\u4eab 4 \u4f4d\u4ee3\u78bc\u3002": "Create a room. Share its four-digit code.", "\u5718\u54e1\u9078\u64c7\u6a02\u5668\uff0f\u89d2\u8272\uff0c\u8f38\u5165\u4ee3\u78bc\u52a0\u5165\uff1b\u5168\u54e1\u4f7f\u7528\u76f8\u540c\u7248\u672c\u3002": "Bandmates choose an instrument or role and join with the code. Use the same version on every device.", "\u540c\u6b65\u7bc0\u62cd": "Synchronized beats", "\u4e3b\u6301\u4eba\u63a7\u5236\uff0c\u5168\u5718\u8ddf\u96a8\u7bc0\u62cd\u3002": "One host controls the beat.", "\u6821\u6642\u5f8c\u8ddf\u96a8\u4e3b\u6301\u4eba\u7684\u901f\u5ea6\u8207\u64ad\u653e\uff1b\u5404\u81ea\u8abf\u6574\u672c\u6a5f\u97f3\u91cf\uff0c\u4e0d\u5f71\u97ff\u5176\u4ed6\u4eba\u3002": "After clock sync, everyone follows the host's tempo and playback. Adjust your own volume without changing anyone else's.", "\u9078\u5c0d\u8c61\uff0c\u9ede\u77ed\u53e5\u5c31\u81ea\u52d5\u9001\u51fa\u3002": "Choose a recipient, then tap a phrase to send.", "\u5165\u623f\u5f8c\u5f9e\u5074\u908a\u958b\u555f\uff0c\u53ef\u50b3\u7d66\u6307\u5b9a\u6a02\u5668\u6216\u5168\u90e8\u4eba\uff1b\u8a9e\u97f3\u8acb\u5148\u555f\u7528\uff0f\u8a66\u807d\u3002": "Open the side tab after joining a room. Send to one instrument or everyone; enable and test speech first.", "\u7bc0\u62cd\u5668": "Metronome", "\u9078\u901f\u5ea6\u3001\u8abf\u7bc0\u594f\uff0c\u518d\u958b\u59cb\u64ad\u653e\u3002": "Set the tempo and rhythm, then press Start.", "\u8a2d\u5b9a 40\u2013300 BPM\u3001\u62cd\u865f\u8207\u97f3\u7b26\u7d30\u5206\uff1b\u9ede\u62cd\u9ede\u5207\u63db\u91cd\u97f3\u3001\u4e00\u822c\u6216\u975c\u97f3\u3002": "Choose 40\u2013300 BPM, a time signature and a subdivision. Tap beats to set them to accented, unaccented or muted." });
    Object.assign(dictionary, { "\u9078\u64c7\u8a9e\u8a00": "Choose language" });
    Object.assign(dictionary, { "\u97f3\u8a0a\u4e2d\u65b7\u5f8c\u81ea\u52d5\u7e8c\u64ad": "Resume after audio interruptions", "\u9810\u8a2d\u958b\u555f\u3002\u8033\u6a5f\u5207\u63db\u6216\u97f3\u8a0a\u4e2d\u65b7\u5f8c\uff0c\u6703\u5617\u8a66\u6062\u5fa9\u539f\u672c\u64ad\u653e\u7684\u7bc0\u62cd\uff1b\u4e0d\u6703\u81ea\u52d5\u958b\u59cb\u5df2\u505c\u6b62\u6216\u975c\u97f3\u7684\u7bc0\u62cd\u3002": "On by default. After a headphone/output change or audio interruption, try to resume the metronome only if it was already playing. Stopped or muted playback is not started.", "\u7db2\u9801\u7121\u6cd5\u95dc\u9589\u8033\u6a5f\u7684\u914d\u6234\u5075\u6e2c\u3002\u82e5\u62ff\u4e0b\u55ae\u908a\u8033\u6a5f\u4ecd\u6703\u66ab\u505c\uff0c\u8acb\u5728\u8033\u6a5f\u6216\u7cfb\u7d71\u8a2d\u5b9a\u95dc\u9589\u300c\u81ea\u52d5\u8033\u90e8\u5075\u6e2c\uff0f\u53d6\u4e0b\u66ab\u505c\u300d\u3002": "A website cannot turn off headset wear detection. If removing one earbud still pauses audio, disable Automatic Ear Detection / Auto-pause in your headset or system settings.", "\u7121\u6cd5\u81ea\u52d5\u6062\u5fa9\u8072\u97f3\uff0c\u8acb\u78ba\u8a8d\u8033\u6a5f\u7684\u81ea\u52d5\u66ab\u505c\u8a2d\u5b9a\uff0c\u4e26\u91cd\u65b0\u555f\u7528\u672c\u6a5f\u8072\u97f3\u3002": "Audio could not resume automatically. Check your headset auto-pause settings, then re-enable local audio.", "\u7bc0\u62cd\u5668 \u2192 \u64ad\u653e\u8207\u5207\u6b4c\u6309\u9215": "Metronome \u2192 Playback and track controls", "\u653e\u5927\u5f8c\u4fdd\u7559 BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u6309\u9215\u3001\u6e2c\u901f\u3001\u76ee\u524d\u6b4c\u540d\u8207\u623f\u9593\u50b3\u8a71\u3002\u97f3\u7b26\u7d30\u5206\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\uff1b\u518d\u6309\u65b9\u6846\u5716\u793a\u6216 F \u53ef\u9084\u539f\uff0c\u4e0d\u5f71\u97ff\u64ad\u653e\u3002": "Stage view keeps BPM and +/\u2212 controls, compact beat markers, playback, larger previous/next song buttons, Tap tempo, the current song title and room Live talk. Restore the normal view to adjust subdivisions or volume. Press the frame icon or F to restore without changing playback.", "\u65b9\u6846\u5716\u793a\u958b\u555f\u73fe\u5834\u653e\u5927\u6a21\u5f0f\uff1a\u986f\u793a BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u5207\u6b4c\u6309\u9215\u8207\u6e2c\u901f\u3002\u50c5\u986f\u793a\u76ee\u524d\u6b4c\u540d\uff0c\u4e26\u4fdd\u7559\u623f\u9593\u50b3\u8a71\uff1b\u97f3\u7b26\u7d30\u5206\u3001\u62cd\u865f\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\u3002": "The frame icon opens stage view with BPM and +/\u2212 buttons, compact beat markers, playback, larger song-navigation buttons and Tap tempo. Only the current song title is shown, and room Live talk remains available. Restore the normal view to change subdivisions, time signature or volume.", "\u4e0a\u6392\u5169\u500b\u5927\u5716\u793a\u5207\u63db\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\uff0c\u4e0b\u65b9\u4f9d\u5e8f\u70ba\u958b\u59cb\uff0f\u505c\u6b62\u8207\u9ede\u6309\u6e2c\u901f\u3002\u9023\u9ede\u6e2c\u901f\u81f3\u5c11\u5169\u6b21\uff0c\u5373\u53ef\u4f30\u7b97 BPM\u3002": "The two large icons on the top row select the previous or next song. Start/Stop and Tap tempo each have their own row below. Tap at least twice to estimate your BPM." });
    ;
    const KEY = 'tempolive.ui-language.v1';
    let lang = 'zh-Hant';
    try {
        const saved = localStorage.getItem(KEY);
        if (saved === 'en') lang = saved;
        if (saved && saved !== lang) localStorage.setItem(KEY, lang);
    }
    catch (e) { }
    const rows = new Set(), byNode = new WeakMap(), mounted = new WeakSet(), documents = new Set(), listeners = new Set(), untranslated = new Set();
    let changes = 0, pruneQueued = false;
    const hasHan = s => /[\u3400-\u9fff]/.test(s);
    const replacements = Object.entries(dictionary).filter(([s]) => s.length >= 2 && !s.includes('${')).sort((a, b) => b[0].length - a[0].length);
    const patternKeys = replacements.map(([s]) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const combined = new RegExp(patternKeys.join('|'), 'g');
    const numberRules = [
        [/^(\d\d:\d\d) \u00b7 \u7b2c (\d+) \u5c0f\u7bc0$/, (_, clock, n) => `${clock} \u00b7 Bar ${n}`],
        [/^\u7b2c (\d+) \u62cd\uff1a(.+)\uff0c\u9ede\u9078\u5207\u63db$/, (_, n, s) => `Beat ${n}: ${t(s, 'en')}. Select to change.`],
        [/^\u9810\u5099 (\d+) \/ (\d+) \u5c0f\u7bc0$/, (_, n, total) => `Count-in ${n} / ${total} bars`],
        [/^\u5c07\u65bc ([\d.]+) \u79d2\u5f8c\u958b\u59cb$/, (_, n) => `Starts in ${n} s`],
        [/^\u5c07\u65bc ([\d.]+) \u79d2\u5f8c\u505c\u6b62$/, (_, n) => `Stops in ${n} s`],
        [/^(\d+) \u4eba\u5728\u623f\u9593$/, (_, n) => `${n} ${n === '1' ? 'person' : 'people'} in the room`],
        [/^(\d+) \u4f4d\u5718\u54e1$/, (_, n) => `${n} ${n === '1' ? 'bandmate' : 'bandmates'}`],
        [/^\u5269\u9918 (\d+) \u6b21\u6a5f\u6703$/, (_, n) => `${n} ${n === '1' ? 'life' : 'lives'} remaining`],
        [/^\u7b2c (\d+) \u95dc$/, (_, n) => `Level ${n}`],
        [/^\u6e96\u78ba\u7387: ([\d.]+)%$/, (_, n) => `Accuracy: ${n}%`],
        [/^([\d.]+)% \u5931\u6557$/, (_, n) => `${n}% | Miss`],
        [/^([\d.]+)% \u5b8c\u7f8e!$/, (_, n) => `${n}% | Perfect!`],
        [/^\u78ba\u5b9a\u522a\u9664\u300c([\s\S]*)\u300d\uff1f$/, (_, name) => `Delete "${name}"?`],
        [/^\u532f\u5165 (\d+) \u9996\u6b4c\u66f2\uff0c\u4e26\u53d6\u4ee3\u6b64\u700f\u89bd\u5668\u539f\u6709\u6b4c\u55ae\uff1f\u539f\u6b4c\u55ae\u8acb\u5148\u532f\u51fa\u5099\u4efd\u3002$/, (_, n) => `Import ${n} ${n === '1' ? 'song' : 'songs'} and replace this browser's setlist? Export the current setlist first.`],
        [/^\u5df2\u532f\u5165 (\d+) \u9996\u6b4c\u66f2\u3002$/, (_, n) => `Imported ${n} ${n === '1' ? 'song' : 'songs'}.`]
    ];
    function t(value, language = lang) {
        const s = String(value ?? '');
        if (!hasHan(s))
            return s;
        if (language !== 'en')
            return s;
        if (Object.prototype.hasOwnProperty.call(dictionary, s))
            return dictionary[s];
        const trimmed = s.trim();
        if (Object.prototype.hasOwnProperty.call(dictionary, trimmed))
            return s.slice(0, s.indexOf(trimmed)) + dictionary[trimmed] + s.slice(s.indexOf(trimmed) + trimmed.length);
        for (const [re, fn] of numberRules)
            if (re.test(s))
                return s.replace(re, fn);
        const out = s.replace(combined, key => dictionary[key]).replace(/\uff08/g, ' (').replace(/\uff09/g, ')').replace(/\uff1a/g, ': ').replace(/\uff0c/g, ', ').replace(/\u3002/g, '.').replace(/\u2026/g, '...').replace(/\uff5c/g, ' | ').replace(/\u300c/g, '"').replace(/\u300d/g, '"');
        if (hasHan(out))
            untranslated.add(s);
        return out;
    }
    function write(row) {
        let value;
        try {
            value = String(row.get() ?? '');
        }
        catch (e) {
            return;
        }
        if (row.type === 'text') {
            if (row.node.nodeValue !== value)
                row.node.nodeValue = value;
        }
        else if (row.type === 'content') {
            if (row.node.textContent !== value)
                row.node.textContent = value;
        }
        else if (row.node.getAttribute(row.type) !== value)
            row.node.setAttribute(row.type, value);
    }
    function remember(node, type, get, source) {
        let map = byNode.get(node);
        if (!map) {
            map = new Map();
            byNode.set(node, map);
        }
        let row = map.get(type);
        if (row) {
            row.get = get;
            row.source = source;
        }
        else {
            row = { node, type, get, source };
            map.set(type, row);
            rows.add(row);
        }
        write(row);
        if (++changes % 256 === 0 && !pruneQueued) {
            pruneQueued = true;
            queueMicrotask(() => { pruneQueued = false; for (const r of rows)
                if (!r.node.isConnected) {
                    rows.delete(r);
                    byNode.get(r.node)?.delete(r.type);
                } });
        }
        return node;
    }
    function set(node, value) { const source = String(value ?? ''); node.dataset.i18nDynamic = ''; return remember(node, 'content', () => t(source), source); }
    function bind(node, get) { node.dataset.i18nDynamic = ''; return remember(node, 'content', get, null); }
    function attr(node, key, value) { const source = String(value ?? ''); return remember(node, key, () => lang !== 'zh-Hant' && key === 'aria-label' && source === '\u95dc\u9589' ? ('Close') : t(source), source); }
    function bindAttr(node, key, get) { return remember(node, key, get, null); }
    function option(text, value) { const n = new Option('', value); if (typeof text === 'function')
        bind(n, text);
    else
        set(n, text); return n; }
    function mount(doc) {
        documents.add(doc);
        doc.documentElement.lang = lang;
        const walker = doc.createTreeWalker(doc.documentElement, NodeFilter.SHOW_TEXT);
        let n;
        while (n = walker.nextNode()) {
            if (mounted.has(n) || n.parentElement?.closest('script,style,template,[data-i18n-dynamic]'))
                continue;
            mounted.add(n);
            const source = n.nodeValue;
            if (!hasHan(source))
                continue;
            if (n.parentElement?.tagName === 'OPTION' && !n.parentElement.hasAttribute('value'))
                n.parentElement.value = n.parentElement.textContent;
            remember(n, 'text', () => t(source), source);
        }
        for (const node of doc.querySelectorAll('[title],[aria-label],[placeholder],[aria-valuetext]')) {
            for (const key of ['title', 'aria-label', 'placeholder', 'aria-valuetext']) {
                if (!node.hasAttribute(key) || byNode.get(node)?.has(key))
                    continue;
                const value = node.getAttribute(key);
                if (hasHan(value))
                    attr(node, key, value);
            }
        }
    }
    const instruments = { "\u92fc\u7434": "Piano", "\u9375\u76e4": "Keyboard", "\u6728\u5409\u4ed6": "Acoustic guitar", "\u96fb\u5409\u4ed6": "Electric guitar", "\u8c9d\u65af": "Bass", "\u9f13": "Drums", "\u4e3b\u9818": "Worship leader", "\u6b4c\u5531": "Vocals", "\u97f3\u63a7": "Sound engineer" };
    function personLabel(value, language = lang) {
        const s = String(value ?? '');
        if (language === 'zh-Hant')
            return s;
        const table = instruments;
        if (Object.prototype.hasOwnProperty.call(table, s))
            return table[s];
        const m = s.match(/^(.*) (\d+)$/);
        return m && Object.prototype.hasOwnProperty.call(table, m[1]) ? table[m[1]] + ' ' + m[2] : s;
    }
    function instrument(value, language = lang) { const s = String(value ?? ''); const table = instruments; return language !== 'zh-Hant' && Object.prototype.hasOwnProperty.call(table, s) ? table[s] : s; }
    function person(p, language = lang) {
        const name = String(p?.name || '');
        if (language === 'zh-Hant')
            return name;
        const table = instruments;
        if (typeof p?.instrument === 'string' && p.instrument) {
            const base = p.instrument;
            if (!Object.prototype.hasOwnProperty.call(table, base))
                return name;
            if (name === base)
                return table[base];
            if (name.startsWith(base + ' ') && /^\d+$/.test(name.slice(base.length + 1)))
                return table[base] + name.slice(base.length);
            return name;
        }
        return personLabel(name, language);
    }
    function song(s, language = lang) { return s?.sample && Object.values(sampleTitles).includes(s.name) ? t(s.name, language) : String(s?.name || ''); }
    const sampleTitles = { 'sample-1': '\u958b\u5834\u8b9a\u7f8e', 'sample-2': '\u5b89\u975c\u656c\u62dc', 'sample-3': '\u56de\u61c9\u8a69\u6b4c' };
    function refresh() { for (const doc of documents)
        doc.documentElement.lang = lang; for (const row of rows)
        if (row.node.isConnected)
            write(row); updateToggle(); }
    const languageItems = Object.freeze([
        { id: 'zh-Hant', code: 'TW', label: '\u7e41\u9ad4\u4e2d\u6587', htmlLang: 'zh-Hant' },
        { id: 'en', code: 'EN', label: 'English', htmlLang: 'en' }
    ]);
    const languageCode = () => languageItems.find(x => x.id === lang).code;
    const languageLabel = () => lang === 'en' ? 'Choose language' : '\u9078\u64c7\u8a9e\u8a00';
    let languageMenu = null, languageAnchor = null;
    function ensureLanguageMenu() {
        if (languageMenu)
            return languageMenu;
        languageMenu = document.createElement('div');
        languageMenu.id = 'languageMenu';
        languageMenu.className = 'language-menu';
        languageMenu.hidden = true;
        languageMenu.dataset.i18nDynamic = '';
        languageMenu.setAttribute('role', 'menu');
        languageMenu.setAttribute('popover', 'manual');
        for (const locale of languageItems) {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.language = locale.id;
            button.setAttribute('role', 'menuitemradio');
            button.setAttribute('tabindex', '-1');
            button.lang = locale.htmlLang;
            const code = document.createElement('span');
            code.className = 'language-option-code';
            code.textContent = locale.code;
            const name = document.createElement('span');
            name.className = 'language-option-name';
            name.textContent = locale.label;
            button.append(code, name);
            const check = document.createElement('span');
            check.className = 'language-option-check';
            check.textContent = '\u2713';
            check.setAttribute('aria-hidden', 'true');
            button.append(check);
            button.addEventListener('click', () => { const anchor = languageAnchor; closeLanguageMenu(false); change(locale.id); anchor?.focus({ preventScroll: true }); });
            languageMenu.append(button);
        }
        document.body.append(languageMenu);
        return languageMenu;
    }
    function placeLanguageMenu() {
        if (!languageMenu || languageMenu.hidden || !languageAnchor)
            return;
        const r = languageAnchor.getBoundingClientRect();
        const w = Math.min(236, window.innerWidth - 24), h = 176;
        languageMenu.style.width = w + 'px';
        languageMenu.style.left = Math.max(12, Math.min(window.innerWidth - w - 12, r.right - w)) + 'px';
        const y = r.bottom + 8 + h <= window.innerHeight - 12 ? r.bottom + 8 : Math.max(12, r.top - h - 8);
        languageMenu.style.top = y + 'px';
    }
    function closeLanguageMenu(returnFocus = true) {
        if (!languageMenu || languageMenu.hidden)
            return;
        try {
            if (languageMenu.matches(':popover-open'))
                languageMenu.hidePopover();
        }
        catch (e) { }
        languageMenu.hidden = true;
        const anchor = languageAnchor;
        languageAnchor = null;
        anchor?.setAttribute('aria-expanded', 'false');
        if (returnFocus && anchor?.isConnected && !anchor.closest('[hidden]'))
            anchor.focus({ preventScroll: true });
    }
    function openLanguageMenu(anchor = document.getElementById('languageBtn')) {
        if (!anchor)
            return;
        if (languageMenu && !languageMenu.hidden && languageAnchor === anchor) {
            closeLanguageMenu();
            return;
        }
        closeLanguageMenu(false);
        const menu = ensureLanguageMenu();
        languageAnchor = anchor;
        const coach = anchor.closest('#tourCoach');
        (coach || document.body).append(menu);
        menu.hidden = false;
        menu.setAttribute('aria-label', languageLabel());
        anchor.setAttribute('aria-expanded', 'true');
        for (const button of menu.querySelectorAll('[data-language]'))
            button.setAttribute('aria-checked', String(button.dataset.language === lang));
        placeLanguageMenu();
        try {
            menu.showPopover?.();
        }
        catch (e) { }
        menu.querySelector(`[data-language="${lang}"]`)?.focus({ preventScroll: true });
    }
    function updateToggle() {
        for (const id of ['languageBtn', 'tourLang']) {
            const b = document.getElementById(id);
            if (!b)
                continue;
            const code = b.querySelector('.language-code');
            if (code) {
                code.textContent = languageCode();
                code.lang = 'en';
            }
            else
                b.textContent = languageCode();
            b.title = languageLabel();
            b.setAttribute('aria-label', languageLabel());
            b.removeAttribute('aria-pressed');
            b.setAttribute('aria-haspopup', 'menu');
            b.setAttribute('aria-controls', 'languageMenu');
            if (b !== languageAnchor)
                b.setAttribute('aria-expanded', 'false');

        }
        if (languageMenu) {
            languageMenu.setAttribute('aria-label', languageLabel());
            for (const b of languageMenu.querySelectorAll('[data-language]'))
                b.setAttribute('aria-checked', String(b.dataset.language === lang));
        }
    }
    window.addEventListener('keydown', event => {
        if (!languageMenu || languageMenu.hidden)
            return;
        event.stopImmediatePropagation();
        const buttons = [...languageMenu.querySelectorAll('button')], i = buttons.indexOf(document.activeElement);
        if (event.key === 'Escape') {
            event.preventDefault();
            closeLanguageMenu();
            return;
        }
        if (event.key === 'Tab') {
            closeLanguageMenu(true);
            return;
        }
        if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (i + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
            buttons[next]?.focus();
        }
    }, true);
    document.addEventListener('pointerdown', event => { if (languageMenu && !languageMenu.hidden && !languageMenu.contains(event.target) && !languageAnchor?.contains(event.target))
        closeLanguageMenu(false); }, true);
    window.addEventListener('resize', placeLanguageMenu);
    window.addEventListener('scroll', () => { if (languageMenu && !languageMenu.hidden)
        closeLanguageMenu(false); }, true);
    window.addEventListener('pagehide', () => closeLanguageMenu(false));
    function change(next, persist = true) {
        const chosen = next === 'en' ? 'en' : 'zh-Hant';
        if (chosen === lang) {
            refresh();
            return;
        }
        lang = chosen;
        document.documentElement.lang = lang;
        if (persist)
            try {
                localStorage.setItem(KEY, lang);
            }
            catch (e) { }
        refresh();
        for (const fn of listeners)
            try {
                fn(lang);
            }
            catch (e) {
                console.warn('Language refresh failed', e);
            }
        refresh();
    }
    const api = Object.freeze({ t, set, bind, attr, bindAttr, option, mount, refresh, languageCode, languageLabel, openLanguageMenu, personLabel, person, instrument, song, get lang() { return lang; }, setLanguage: change, onChange: fn => { listeners.add(fn); return () => listeners.delete(fn); }, snapshot: () => ({ language: lang, version: '2.5.0-bilingual', untranslated: [...untranslated] }) });
    window.I18N = window.TempoliveI18n = api;
    document.documentElement.lang = lang;
    const initializeDocument = () => { mount(document); const button = document.getElementById('languageBtn'); if (button)
        button.addEventListener('click', () => openLanguageMenu(button)); refresh(); };
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', initializeDocument, { once: true });
    else
        queueMicrotask(initializeDocument);
})();
;
'use strict';
const CONFIG = Object.freeze({
    version: 1, storageKey: 'tw.metronome.v1', minBpm: 40, maxBpm: 300,
    meters: ['2/4', '3/4', '4/4', '5/4', '6/8', '7/8', '12/8'], maxSongs: 200,
    roomPrefix: 'tw-beat-v2-', roomLead: 1600, maxPeople: 12, syncRefreshMs: 60000,
    relay: { url: 'wss://public.cloud.shiftr.io', username: 'public', password: 'public', namespace: 'tw-metronome-202609-v2', connectTimeout: 8500, requestTimeout: 7000, maxReconnects: 2 }
});
const SYNC_CONFIG = Object.freeze({ version: 1, windowMs: 12000, maxSamples: 48,
    pingMs: 1000, burstMs: 15000, slewMsPerSecond: 8, retimeThresholdMs: 1,
    minLeadMs: 650, maxLeadMs: 7000, outputCapMs: 2000,
    outputSampleMs: 150, clockGuardMs: 70, manualLimitMs: 1000 });
const syncMedian = values => { const a = [...values].sort((a, b) => a - b); return a.length ? (a[Math.floor((a.length - 1) / 2)] + a[Math.floor(a.length / 2)]) / 2 : 0; };
function syncText(key) {
    const en = { change: 'Change at the shared time', waiting: 'Preparing the metronome...', cancel: 'Cancel start', timeout: 'Some members are not ready. Enable audio on their devices, then press Start again.', cancelled: 'Start cancelled.', heading: 'Sync and latency compensation', refresh: 'Recalibrate', note: 'Output timing is a browser estimate, not a measurement of headphone sound. Use the local time correction above for any remaining mismatch.', solo: 'Not in a room', host: 'Host clock', sampling: 'Sampling clock offset', tracking: 'Clock tracking', adjusting: 'Clock correction in progress', unstable: 'High timing uncertainty', output: 'Output timing', timestamp: 'Output timestamp', estimate: 'System estimate', partial: 'Partial estimate only', unavailable: 'No output estimate', off: 'Automatic output correction is off', network: 'Network', buffer: 'Command buffer', pending: 'Room changes apply together after the command buffer; solo controls stay immediate.', refreshed: 'Timing samples refreshed. Check the actual sound on your output device.' };
    const zh = { change: '\u8b8a\u66f4\u5c07\u65bc\u5171\u540c\u6642\u9593\u5957\u7528', waiting: '\u6b63\u5728\u555f\u7528\u7bc0\u62cd\u5668\u2026', cancel: '\u53d6\u6d88\u958b\u59cb', timeout: '\u90e8\u5206\u5718\u54e1\u5c1a\u672a\u5c31\u7dd2\uff0c\u8acb\u5148\u555f\u7528\u5404\u81ea\u88dd\u7f6e\u7684\u8072\u97f3\uff0c\u518d\u6309\u958b\u59cb\u3002', cancelled: '\u5df2\u53d6\u6d88\u958b\u59cb\u3002', heading: '\u540c\u6b65\u8207\u5ef6\u9072\u88dc\u511f', refresh: '\u91cd\u65b0\u6821\u6b63', note: '\u8f38\u51fa\u6642\u9593\u662f\u700f\u89bd\u5668\u4f30\u8a08\uff0c\u4e0d\u662f\u8033\u6a5f\u5be6\u969b\u767c\u8072\u7684\u91cf\u6e2c\u3002\u4ecd\u6709\u5dee\u7570\u6642\uff0c\u53ef\u7528\u4e0a\u65b9\u672c\u6a5f\u6642\u9593\u6821\u6b63\u5fae\u8abf\u3002', solo: '\u672a\u52a0\u5165\u623f\u9593', host: '\u4e3b\u6301\u4eba\u6642\u9418', sampling: '\u6821\u6642\u53d6\u6a23\u4e2d', tracking: '\u6301\u7e8c\u6821\u6642\u4e2d', adjusting: '\u6b63\u5728\u4fee\u6b63\u6642\u9593\u5dee', unstable: '\u6821\u6642\u4e0d\u78ba\u5b9a\u6027\u8f03\u9ad8', output: '\u97f3\u8a0a\u8f38\u51fa', timestamp: '\u8f38\u51fa\u6642\u9593\u6233', estimate: '\u7cfb\u7d71\u4f30\u8a08', partial: '\u50c5\u53d6\u5f97\u90e8\u5206\u4f30\u8a08', unavailable: '\u5c1a\u672a\u53d6\u5f97\u8f38\u51fa\u8cc7\u6599', off: '\u81ea\u52d5\u8f38\u51fa\u6821\u6b63\u5df2\u95dc\u9589', network: '\u7db2\u8def', buffer: '\u6307\u4ee4\u7de9\u885d', pending: '\u623f\u9593\u5167\u7684\u8abf\u6574\u6703\u7d93\u6307\u4ee4\u7de9\u885d\u5f8c\u540c\u6642\u751f\u6548\uff1b\u55ae\u4eba\u64cd\u4f5c\u4ecd\u7acb\u5373\u751f\u6548\u3002', refreshed: '\u5df2\u91cd\u65b0\u53d6\u6a23\u6642\u9593\u8cc7\u6599\uff0c\u8acb\u4ee5\u8f38\u51fa\u88dd\u7f6e\u7684\u5be6\u969b\u8072\u97f3\u78ba\u8a8d\u3002' };
    return (I18N.lang === 'en' ? en : zh)[key] || key;
}
const TEXT = Object.freeze({
    free: '自由練習', solo: '單人模式', host: '主持人', guest: '參與者',
    start: '開始節拍', stop: '停止播放', muted: '本機靜音', unmute: '恢復收聽',
    notStarted: '尚未開始', playing: '播放中', waiting: '等待開始', countIn: '預備拍',
    ready: '已就緒', syncing: '校時中', audioOff: '待啟用聲音', silent: '已靜音',
    sample1: '開場讚美', sample2: '安靜敬拜', sample3: '回應詩歌',
    sample: '範例', saved: '已儲存歌曲', nextBar: '變更將於小節交界套用',
    readyHint: '準備好了，從第一拍開始。',
    outputDefault: '系統預設（喇叭／耳機）',
    peerFailed: '無法連上中繼服務。請嘗試更換 Wi-Fi 或手機熱點，再按重試。公開服務也可能暫時無法使用。',
    lost: '與主持人的連線中斷，已停止播放。請重新加入房間。',
    strong: '重音', normal: '一般', rest: '靜音'
});
const $ = id => document.getElementById(id);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const wallNow = () => performance.timeOrigin + performance.now();
const clone = x => JSON.parse(JSON.stringify(x));
const cleanText = (v, n = 40) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, n);
function id() { return crypto.randomUUID ? crypto.randomUUID() : [...crypto.getRandomValues(new Uint32Array(3))].map(x => x.toString(16)).join(''); }
function defaultAccents(meter) { const [n, d] = meter.split('/').map(Number); return Array.from({ length: n }, (_, i) => i === 0 || (d === 8 && n % 3 === 0 && i % 3 === 0) ? 2 : 1); }
function validSettings(x, strict = false) {
    if (!x || typeof x !== 'object')
        throw Error('Invalid settings');
    const bpm = Number(x.bpm), note = Number(x.note), countIn = Number(x.countIn ?? 0);
    if (!Number.isFinite(bpm) || !CONFIG.meters.includes(x.meter) || ![4, 8, 16].includes(note) || ![0, 1, 2].includes(countIn) || (strict && (bpm < 40 || bpm > 300)))
        throw Error('Invalid rhythm');
    const n = Number(x.meter.split('/')[0]);
    const accents = Array.isArray(x.accents) && x.accents.length === n && x.accents.every(v => [0, 1, 2].includes(v)) ? [...x.accents] : defaultAccents(x.meter);
    return { bpm: clamp(Math.round(bpm), 40, 300), meter: x.meter, note, countIn, accents };
}
const DEFAULT_SETTINGS = { bpm: 120, meter: '4/4', note: 4, countIn: 0, accents: [2, 1, 1, 1] };
const SAMPLE_SONGS = [
    { id: 'sample-1', name: TEXT.sample1, sample: true, settings: { ...DEFAULT_SETTINGS, note: 8 } },
    { id: 'sample-2', name: TEXT.sample2, sample: true, settings: { ...DEFAULT_SETTINGS, bpm: 72 } },
    { id: 'sample-3', name: TEXT.sample3, sample: true, settings: { bpm: 96, meter: '4/4', note: 8, countIn: 0, accents: [2, 1, 1, 1] } }
];
const ACCENT_CARRY_LIMIT = Math.max(...CONFIG.meters.map(m => Number(m.split('/')[0])));
function isAccentList(value) {
    return Array.isArray(value) && value.length > 0 && value.length <= ACCENT_CARRY_LIMIT && value.every(level => level === 0 || level === 1 || level === 2);
}
function accentCarryFrom(accents) {
    const beats = isAccentList(accents) ? [...accents] : [2, 1, 1, 1];
    return { uniform: beats.every(level => level === beats[0]) ? beats[0] : null, beats };
}
function fitAccentCarry(meter, carry) {
    if (!CONFIG.meters.includes(meter))
        throw Error('Invalid meter');
    const count = Number(meter.split('/')[0]);
    return Array.from({ length: count }, (_, i) => carry.uniform !== null ? carry.uniform : (carry.beats[i] ?? 1));
}
function restoreAccentCarry(value, settings) {
    const fallback = accentCarryFrom(settings.accents);
    if (!value || typeof value !== 'object' || !isAccentList(value.beats) || ![null, 0, 1, 2].includes(value.uniform))
        return fallback;
    const candidate = { uniform: value.uniform, beats: [...value.beats] };
    const visible = fitAccentCarry(settings.meter, candidate);
    return visible.every((level, i) => level === settings.accents[i]) ? candidate : fallback;
}
function liveAccentsFor(meter) { return fitAccentCarry(meter, state.accentCarry); }
function rememberLiveAccents(accents) {
    if (!isAccentList(accents))
        return;
    const explicit = accentCarryFrom(accents);
    if (explicit.uniform !== null) {
        state.accentCarry = explicit;
        return;
    }
    const before = state.accentCarry;
    const count = Math.max(before.beats.length, accents.length);
    const beats = Array.from({ length: count }, (_, i) => before.uniform !== null ? before.uniform : (before.beats[i] ?? 1));
    accents.forEach((level, i) => { beats[i] = level; });
    state.accentCarry = { uniform: null, beats };
}
let storageProblem = false;
const AUDIO_TONES = Object.freeze({
    wood: { label: '木塊', ms: 70, description: '溫潤的木質敲擊，起音清楚、聲尾短促。' },
    digital: { label: '清晰電子', ms: 65, description: '清晰俐落的電子音，強弱拍以高低音區分。' },
    cowbell: { label: '牛鈴', ms: 105, description: '厚實的金屬共鳴，拍點明確、辨識度高。' },
    bell: { label: '短鈴', ms: 120, description: '明亮的短鈴聲，帶金屬層次，不使用長混響。' },
    marimba: { label: '馬林巴', ms: 110, description: '圓潤的木質共鳴，有音高與敲擊層次。' }
});
const AUDIO_POWER = Object.freeze({
    standard: { label: '標準', gain: 1.0, length: 1.0, hold: .06, decay: 4.0, normal: .84, sub: .68, description: '較自然的強弱與衰減，適合安靜練習。' },
    boost: { label: '加強', gain: 1.55, length: 1.35, hold: .19, decay: 1.85, normal: .97, sub: .86, description: '較高的發聲密度，弱拍與細分音更明顯。' }
});
const hasOwn = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const initial = { settings: clone(DEFAULT_SETTINGS), accentCarry: accentCarryFrom(DEFAULT_SETTINGS.accents), songs: clone(SAMPLE_SONGS), activeId: null, volume: 70, mute: false, tone: 'marimba', audioPower: 'boost', audioUiVersion: 14, latency: 0, autoLatency: true, keepAwake: true, continueAudio: true, localNote: 0, theme: 'light', screenFlash: false, name: '' };
let state = clone(initial);
try {
    const saved = JSON.parse(localStorage.getItem(CONFIG.storageKey) || 'null');
    if (saved && saved.version === 1) {
        state.settings = validSettings(saved.settings);
        state.accentCarry = restoreAccentCarry(saved.accentCarry, state.settings);
        if (Array.isArray(saved.songs) && saved.songs.length <= CONFIG.maxSongs) {
            state.songs = saved.songs.map(s => ({ id: cleanText(s.id, 64) || id(), name: cleanText(s.name) || TEXT.free, sample: !!s.sample, settings: validSettings(s.settings) }));
        }
        state.activeId = state.songs.some(s => s.id === saved.activeId) ? saved.activeId : null;
        state.volume = clamp(Number(saved.volume) || 0, 0, 100);
        state.tone = saved.audioUiVersion === 14 && hasOwn(AUDIO_TONES, saved.tone) ? saved.tone : 'marimba';
        state.audioPower = saved.audioPower === 'standard' ? 'standard' : 'boost';
        state.latency = clamp(Number(saved.latency) || 0, -SYNC_CONFIG.manualLimitMs, SYNC_CONFIG.manualLimitMs);
        state.autoLatency = saved.autoLatency !== false;
        state.keepAwake = saved.keepAwake !== false;
        state.continueAudio = saved.continueAudio !== false;
        state.localNote = [4, 8, 16].includes(saved.localNote) ? saved.localNote : 0;
        state.theme = saved.theme === 'dark' ? 'dark' : 'light';
        state.screenFlash = saved.screenFlash === true;
        state.name = cleanText(saved.name, 16);
    }
}
catch (e) {
    storageProblem = true;
}
let saveTimer, localSaveDirty = false, localSaveFailureNotified = false;
const localSaveStatus = { ok: null, lastSavedAt: null, error: '' };
function flushLocal({ quiet = false } = {}) {
    clearTimeout(saveTimer);
    saveTimer = undefined;
    if (!localSaveDirty)
        return localSaveStatus.ok !== false;
    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify({ ...state, version: 1, mute: false }));
        localSaveDirty = false;
        localSaveFailureNotified = false;
        localSaveStatus.ok = true;
        localSaveStatus.lastSavedAt = Date.now();
        localSaveStatus.error = '';
        return true;
    }
    catch (error) {
        localSaveStatus.ok = false;
        localSaveStatus.error = error?.name || 'StorageError';
        if (!quiet && !localSaveFailureNotified) {
            localSaveFailureNotified = true;
            toast('\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8cc7\u6599\uff0c\u8acb\u4f7f\u7528\u300c\u532f\u51fa\u6b4c\u55ae\u300d\u5099\u4efd\u3002');
        }
        return false;
    }
}
function saveLocal(immediate = false) {
    localSaveDirty = true;
    clearTimeout(saveTimer);
    if (immediate)
        return flushLocal();
    saveTimer = setTimeout(() => flushLocal(), 180);
}
document.addEventListener('visibilitychange', () => {
    if (document.hidden)
        flushLocal({ quiet: true });
    else if (localSaveDirty)
        flushLocal();
});
document.addEventListener('freeze', () => flushLocal({ quiet: true }));
let toastTimer;
function toast(message) {
    if ($('settingsDialog').open) {
        $('toast').classList.remove('visible');
        I18N.set($('settingsNotice'), message);
        $('settingsNotice').hidden = false;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => $('settingsNotice').hidden = true, 4600);
        return;
    }
    $('settingsNotice').hidden = true;
    I18N.set($('toast'), message);
    $('toast').classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 4600);
}
function setIcon(el, name) { const use = el.querySelector('use'); if (use)
    use.setAttribute('href', '#i-' + name); }
function titleNow() { return state.songs.find(s => s.id === state.activeId)?.name || TEXT.free; }
function metrics(settings) { const [n, d] = settings.meter.split('/').map(Number), beatQ = 4 / d, noteQ = 4 / settings.note, stepQ = Math.min(beatQ, noteQ); return { n, d, beatQ, noteQ, stepQ, stepMs: 60000 / settings.bpm * stepQ, barMs: 60000 / settings.bpm * n * beatQ, ticks: Math.round(n * beatQ / stepQ) }; }
let rev = 1;
let events = [{ rev: 1, at: 0, anchor: 0, playing: false, settings: clone(state.settings), title: titleNow(), countIn: 0, barBase: 0, runAt: 0 }];
function currentEvent(t = hostNow()) { let e = events[0]; for (const ev of events) {
    if (ev.at <= t)
        e = ev;
    else
        break;
} return e; }
function desiredEvent() { return events[events.length - 1]; }
function hostNow() { return wallNow() + (room.role === 'guest' ? room.offset : 0); }
const AUDIO_CONFIG = Object.freeze({ maxGain: 1, volumeExponent: 1, limiterKnee: .82, limiterCeiling: .97, resumeTimeout: 3000, bufferPeak: .92, maxBuffers: 128, editGuardSeconds: .012 });
function audioDeadline(promise, message) {
    let timer;
    return Promise.race([Promise.resolve(promise), new Promise((_, reject) => { timer = setTimeout(() => reject(Error(message)), AUDIO_CONFIG.resumeTimeout); })]).finally(() => clearTimeout(timer));
}
class AudioEngine {
    constructor() {
        this.gameOutputSuppressed = false;
        this.gameOutputGate = null;
        this.loops = new Map();
        this.loopSources = new Set();
        this.barBuffers = new Map();
        this.renderFloor = 0;
        this.totalLoops = 0;
        this.scheduling = false;
        this.ctx = null;
        this.master = null;
        this.limiter = null;
        this.entries = new Map();
        this.voices = new Set();
        this.worker = null;
        this.totalScheduled = 0;
        this.dropped = 0;
        this.noise = null;
        this.presence = null;
        this.buffers = new Map();
        this.previewVoices = [];
        this.levelNoticeShown = false;
        this.sessionMode = 'system';
        this.mediaGate = null;
        this.mediaGateContext = null;
        this.mediaGateDestination = null;
        this.mediaGateSource = null;
        this.mediaGateMode = 'idle';
        this.mediaGateNeeded = false;
        this.gateHoldUntil = 0;
        this.gatePlayPromise = null;
        this.resumePromise = null;
        this.recoverPromise = null;
    }
    configurePlaybackSession() {
        try {
            if (navigator.audioSession) {
                if (navigator.audioSession.type !== 'playback')
                    navigator.audioSession.type = 'playback';
                if (navigator.audioSession.type === 'playback') {
                    this.sessionMode = 'playback';
                    this.mediaGateNeeded = false;
                    return;
                }
            }
        }
        catch (e) { }
        const appleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        this.mediaGateNeeded = appleMobile && this.mediaGateMode !== 'unavailable';
        this.sessionMode = appleMobile ? 'legacy-media' : 'system';
    }
    disposeMediaGate() {
        const audio = this.mediaGate, source = this.mediaGateSource, destination = this.mediaGateDestination;
        this.mediaGate = null;
        this.mediaGateContext = null;
        this.mediaGateSource = null;
        this.mediaGateDestination = null;
        this.gatePlayPromise = null;
        this.mediaGateMode = 'idle';
        if (audio) {
            try {
                audio.pause();
                audio.srcObject = null;
                audio.removeAttribute('src');
                audio.load();
            }
            catch (_) { }
            audio.remove();
        }
        if (source) {
            try {
                source.stop();
            }
            catch (_) { }
            try {
                source.disconnect();
            }
            catch (_) { }
        }
        if (destination) {
            for (const track of destination.stream.getTracks())
                track.stop();
            try {
                destination.disconnect();
            }
            catch (_) { }
        }
    }
    createMediaGate() {
        const ctx = this.ctx;
        if (this.mediaGate && this.mediaGateContext === ctx && this.mediaGateDestination?.stream.active)
            return this.mediaGate;
        this.disposeMediaGate();
        const audio = document.createElement('audio');
        if (!ctx || ctx.state === 'closed' || typeof ctx.createMediaStreamDestination !== 'function' ||
            typeof ctx.createConstantSource !== 'function' || !('srcObject' in audio)) {
            this.mediaGateMode = 'unavailable';
            this.mediaGateNeeded = false;
            return null;
        }
        let destination = null, source = null;
        try {
            destination = ctx.createMediaStreamDestination();
            source = ctx.createConstantSource();
            source.offset.value = 0;
            source.connect(destination);
            source.start();
            audio.id = 'mobilePlaybackGate';
            audio.hidden = true;
            audio.setAttribute('aria-hidden', 'true');
            audio.setAttribute('playsinline', '');
            audio.setAttribute('webkit-playsinline', '');
            audio.preload = 'none';
            audio.loop = false;
            audio.muted = false;
            audio.volume = 1;
            audio.disableRemotePlayback = true;
            audio.srcObject = destination.stream;
            this.mediaGate = audio;
            this.mediaGateContext = ctx;
            this.mediaGateDestination = destination;
            this.mediaGateSource = source;
            this.mediaGateMode = 'live-stream';
            document.body.append(audio);
            window.TempoliveAudioContinuity?.bindGate(audio);
            audio.addEventListener('pause', () => { if (this.mediaGate === audio && (desiredEvent().playing || room.role === 'guest'))
                renderAudioStatus(); });
            audio.addEventListener('playing', () => { if (this.mediaGate === audio) {
                renderAudioStatus();
                this.schedule();
            } });
            return audio;
        }
        catch (error) {
            try {
                audio.pause();
                audio.srcObject = null;
                audio.remove();
            }
            catch (_) { }
            try {
                source?.stop();
                source?.disconnect();
            }
            catch (_) { }
            if (destination) {
                for (const track of destination.stream.getTracks())
                    track.stop();
                try {
                    destination.disconnect();
                }
                catch (_) { }
            }
            this.mediaGate = null;
            this.mediaGateContext = null;
            this.mediaGateDestination = null;
            this.mediaGateSource = null;
            this.mediaGateMode = 'unavailable';
            this.mediaGateNeeded = false;
            return null;
        }
    }
    openMediaGate() {
        const required = this.mediaGateNeeded, controls = window.TempoliveMediaControls;
        if (!required && !controls?.usesCarrier())
            return Promise.resolve();
        const gate = this.createMediaGate();
        if (!gate)
            return Promise.resolve();
        this.gateHoldUntil = wallNow() + 1500;
        if (this.gatePlayPromise)
            return this.gatePlayPromise;
        if (!this.mediaGate.paused)
            return Promise.resolve();
        let play;
        try {
            play = this.mediaGate.play();
        }
        catch (e) {
            return Promise.reject(e);
        }
        const pending = audioDeadline(play, '\u8acb\u518d\u9ede\u4e00\u6b21\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\uff0c\u5141\u8a31\u624b\u6a5f\u64ad\u653e\u3002');
        this.gatePlayPromise = pending;
        const clear = () => { if (this.gatePlayPromise === pending)
            this.gatePlayPromise = null; };
        pending.then(clear, clear);
        return pending;
    }
    isReady() { return !!(this.ctx && this.ctx.state === 'running' && (!this.mediaGateNeeded || (this.mediaGate && !this.mediaGate.paused))); }
    closeIdleMediaGate() {
        if (!this.mediaGate || this.mediaGate.paused || wallNow() < this.gateHoldUntil)
            return;
        if (room.role === 'guest' || room.role === 'connecting' || desiredEvent().playing || currentEvent().playing || this.voices.size || window.TempoliveBand?.snapshot()?.speaking)
            return;
        this.mediaGate.pause();
    }
    stopMediaGate() { this.gateHoldUntil = 0; this.mediaGate?.pause(); }
    restoreOutput() {
        if (!this.ctx || document.hidden)
            return;
        this.configurePlaybackSession();
        if (desiredEvent().playing || room.role === 'guest')
            this.ensure().then(() => { this.invalidate(); this.schedule(); room.sendLocalStatus(); }).catch(() => renderAudioStatus());
    }
    connectOutput() {
        this.limiter = this.ctx.createWaveShaper();
        const curve = new Float32Array(16385), knee = AUDIO_CONFIG.limiterKnee, span = AUDIO_CONFIG.limiterCeiling - knee;
        for (let i = 0; i < curve.length; i++) {
            const x = i * 2 / (curve.length - 1) - 1, abs = Math.abs(x);
            curve[i] = abs <= knee ? x : Math.sign(x) * (knee + span * Math.tanh((abs - knee) / span));
        }
        this.limiter.curve = curve;
        this.limiter.oversample = 'none';
        this.presence = this.ctx.createGain();
        this.presence.gain.value = AUDIO_POWER[state.audioPower].gain;
        this.presence.connect(this.limiter);
        this.limiter.connect(this.master);
        this.gameOutputGate = this.ctx.createGain();
        this.gameOutputGate.gain.value = this.gameOutputSuppressed ? 0 : 1;
        this.master.connect(this.gameOutputGate);
        this.gameOutputGate.connect(this.ctx.destination);
    }
    createContext() {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC)
            throw Error('此瀏覽器不支援 Web Audio。');
        const selectedSink = $('audioOutput')?.value || '';
        let ctx;
        try {
            ctx = new AC({ latencyHint: 'interactive', ...(selectedSink ? { sinkId: selectedSink } : {}) });
        }
        catch (error) {
            if (!selectedSink)
                throw error;
            ctx = new AC({ latencyHint: 'interactive' });
            if ($('audioOutput'))
                $('audioOutput').value = '';
        }
        this.ctx = ctx;
        this.resetOutputTiming();
        this.master = ctx.createGain();
        this.master.gain.value = 0;
        this.connectOutput();
        this.setVolume();
        ctx.addEventListener('statechange', () => { if (this.ctx !== ctx)
            return; if (ctx.state !== 'running') {
            this.stopAll();
            this.resetOutputTiming();
        } renderAudioStatus(); room.sendLocalStatus(); if (ctx.state === 'running')
            this.schedule(); });
        window.TempoliveAudioContinuity?.bindContext(ctx);
        ctx.addEventListener('sinkchange', () => { this.resetOutputTiming(); this.invalidate(); this.schedule(); room.sendLocalStatus(); });
        if (!this.worker) {
            try {
                const url = URL.createObjectURL(new Blob(['setInterval(function(){postMessage(1)},25)'], { type: 'application/javascript' }));
                this.worker = new Worker(url);
                this.worker.onmessage = () => this.schedule();
                URL.revokeObjectURL(url);
            }
            catch (e) {
                this.worker = setInterval(() => this.schedule(), 25);
            }
        }
    }
    async ensure() {
        this.configurePlaybackSession();
        if (!this.ctx || this.ctx.state === 'closed')
            this.createContext();
        const mediaReady = this.mediaGateNeeded ? this.openMediaGate() : this.openMediaGate().catch(() => { });
        if (this.ctx.state !== 'running' && !this.resumePromise) {
            const pending = audioDeadline(this.ctx.resume(), '\u700f\u89bd\u5668\u5c1a\u672a\u5141\u8a31\u64ad\u653e\uff0c\u8acb\u518d\u9ede\u4e00\u6b21\u958b\u59cb\u6216\u300c\u555f\u7528\u672c\u6a5f\u8072\u97f3\u300d\u3002');
            this.resumePromise = pending;
            const clear = () => { if (this.resumePromise === pending)
                this.resumePromise = null; };
            pending.then(clear, clear);
        }
        try {
            await Promise.all([mediaReady, this.resumePromise || Promise.resolve()]);
        }
        catch (e) {
            renderAudioStatus();
            throw e;
        }
        if (!this.isReady())
            throw Error('\u8acb\u518d\u9ede\u4e00\u6b21\u555f\u7528\u8072\u97f3\u3002');
        this.setVolume();
        this.warnOutputLevel();
        renderAudioStatus();
        return this.ctx;
    }
    recover() {
        if (this.recoverPromise)
            return this.recoverPromise;
        this.configurePlaybackSession();
        window.TempoliveBand?.cancelLocalSpeech?.();
        this.stopAll();
        this.cancelPreview();
        this.entries.clear();
        const old = this.ctx;
        this.disposeMediaGate();
        if (old) {
            this.ctx = null;
            this.master = null;
            this.limiter = null;
            this.presence = null;
            this.buffers.clear();
            this.barBuffers.clear();
            this.resumePromise = null;
            this.gatePlayPromise = null;
            try {
                old.close().catch(() => { });
            }
            catch (e) { }
        }
        const pending = this.ensure().then(ctx => { this.invalidate(); this.schedule(); room.sendLocalStatus(); return ctx; });
        this.recoverPromise = pending;
        const clear = () => { if (this.recoverPromise === pending)
            this.recoverPromise = null; };
        pending.then(clear, clear);
        return pending;
    }
    setGameOutputSuppressed(suppressed) {
        this.gameOutputSuppressed = !!suppressed;
        if (this.gameOutputSuppressed)
            window.TempoliveAudioContinuity?.cancel('game');
        if (!this.gameOutputGate || !this.ctx || this.ctx.state === 'closed')
            return;
        const gain = this.gameOutputGate.gain, time = this.ctx.currentTime, target = this.gameOutputSuppressed ? 0 : 1;
        const value = gain.value;
        gain.cancelScheduledValues(time);
        if (this.ctx.state === 'running') {
            gain.setValueAtTime(value, time);
            gain.linearRampToValueAtTime(target, time + .008);
        }
        else
            gain.setValueAtTime(target, time);
    }
    setVolume() {
        if (this.master)
            this.master.gain.setTargetAtTime(state.mute ? 0 : Math.pow(state.volume / 100, AUDIO_CONFIG.volumeExponent), this.ctx.currentTime, .012);
        if (this.presence)
            this.presence.gain.setTargetAtTime(AUDIO_POWER[state.audioPower].gain, this.ctx.currentTime, .02);
    }
    warnOutputLevel() {
        if (this.levelNoticeShown || state.mute || state.volume < 60)
            return;
        this.levelNoticeShown = true;
        toast('新版發聲更強；耳機請先降低音量，再逐步調整。');
    }
    resetOutputTiming() { this.outputClock = null; this.lastOutputSample = -Infinity; this.lastSchedulePerf = 0; }
    sampleOutputTiming(force = false) {
        const ctx = this.ctx;
        if (!ctx)
            return null;
        const p = performance.now();
        if (!force && this.outputClock?.context === ctx && p - (this.lastOutputSample || 0) < SYNC_CONFIG.outputSampleMs)
            return this.outputClock;
        this.lastOutputSample = p;
        const seconds = value => Number.isFinite(value) && value > 0 && value <= SYNC_CONFIG.outputCapMs / 1000 ? value : 0;
        const base = seconds(ctx.baseLatency), output = seconds(ctx.outputLatency);
        const reported = Math.min(SYNC_CONFIG.outputCapMs, (base + output) * 1000);
        let intercept = ctx.currentTime - p / 1000 - reported / 1000;
        let kind = output ? 'estimate' : base ? 'partial' : 'unavailable';
        if (ctx.state === 'running' && typeof ctx.getOutputTimestamp === 'function') {
            try {
                const t = ctx.getOutputTimestamp(), age = p - t.performanceTime;
                const queue = ctx.currentTime - (t.contextTime + age / 1000);
                if (Number.isFinite(t.contextTime) && Number.isFinite(t.performanceTime) && t.contextTime > 0 && t.performanceTime > 0 && age >= -50 && age < 2500 && queue >= -.025 && queue <= SYNC_CONFIG.outputCapMs / 1000) {
                    intercept = t.contextTime - t.performanceTime / 1000;
                    kind = 'timestamp';
                }
            }
            catch (_) { }
        }
        const old = this.outputClock;
        if (old?.context === ctx && old.kind === kind && Math.abs(intercept - old.intercept) < .05) {
            intercept = old.intercept + clamp(intercept - old.intercept, -.002, .002);
        }
        const mapLead = Math.max(0, (ctx.currentTime - (p / 1000 + intercept)) * 1000);
        const budget = Math.min(SYNC_CONFIG.outputCapMs, Math.max(reported, mapLead));
        this.outputClock = { context: ctx, intercept, kind, reportedMs: reported, budgetMs: budget, at: p };
        if (state.autoLatency && old?.context === ctx && Math.abs(old.intercept - intercept) > .00075)
            this.invalidate();
        return this.outputClock;
    }
    latencyMs() { return this.ctx && state.autoLatency ? (this.sampleOutputTiming()?.budgetMs || 0) : 0; }
    requiredLeadMs() { return Math.max(0, this.latencyMs() - state.latency) + Math.max(90, this.schedulerMarginMs || 90); }
    audioTime(nominal) {
        const targetPerf = nominal - (room.role === 'guest' ? room.offset : 0) - performance.timeOrigin + state.latency;
        if (state.autoLatency) {
            const c = this.sampleOutputTiming();
            if (c)
                return targetPerf / 1000 + c.intercept;
        }
        return this.ctx.currentTime + (targetPerf - performance.now()) / 1000;
    }
    clickBuffer(tone, accent, spacingMs) {
        const profile = AUDIO_POWER[state.audioPower], spec = AUDIO_TONES[tone], rate = this.ctx.sampleRate;
        const safeSpacing = Number.isFinite(spacingMs) && spacingMs > 0 ? spacingMs : 500;
        const durationMs = Math.max(12, Math.min(Math.round(spec.ms * profile.length), Math.floor(safeSpacing * .84)));
        const key = [tone, state.audioPower, accent ? 1 : 0, durationMs, rate].join(':');
        if (this.buffers.has(key))
            return this.buffers.get(key);
        const count = Math.max(16, Math.ceil(rate * durationMs / 1000)), buffer = this.ctx.createBuffer(1, count, rate), data = buffer.getChannelData(0), window = new Float32Array(count);
        const duration = (count - 1) / rate, hold = duration * profile.hold, release = Math.max(.002, duration - hold), tau = 2 * Math.PI;
        const attack = Math.min(.0015, duration * .06), tail = Math.min(.009, duration * .18);
        let sum = 0, weight = 0;
        const sin = (f, t, p = 0) => f < rate * .43 ? Math.sin(tau * f * t + p) : 0;
        const swept = (f, t) => { const bend = Math.log(.67) / .035, first = Math.min(t, .035); return tau * (f * (Math.exp(bend * first) - 1) / bend + Math.max(0, t - .035) * f * .67); };
        for (let i = 0; i < count; i++) {
            const t = i / rate;
            const hit = accent ? 1.18 : 1;
            let x = 0;
            switch (tone) {
                case 'wood': {
                    const phase = swept(accent ? 1480 : 960, t);
                    x = Math.sin(phase) + .17 * Math.sin(phase * 2.73) * Math.exp(-t / .018);
                    break;
                }
                case 'digital': {
                    const f = accent ? 1760 : 1175;
                    x = sin(f, t) + .08 * sin(f * 2, t);
                    break;
                }
                case 'cowbell': {
                    const f = accent ? 930 : 780, g = f * 1.484;
                    const square = h => sin(h, t) + sin(h * 3, t) / 3 + sin(h * 5, t) / 5 + sin(h * 7, t) / 7;
                    x = .68 * square(f) + .62 * square(g) * Math.exp(-t / .13);
                    break;
                }
                case 'bell': {
                    const f = accent ? 1960 : 1480;
                    x = sin(f, t) + .43 * sin(f * 2.756, t) * Math.exp(-t / .064) + .20 * sin(f * 1.498, t) * Math.exp(-t / .09) + .08 * sin(f * 4.07, t) * Math.exp(-t / .019);
                    break;
                }
                case 'marimba': {
                    const f = accent ? 1046.5 : 784;
                    x = sin(f, t) + .40 * sin(f * 3.93, t) * Math.exp(-t / .032) + .09 * sin(f * 9.4, t) * Math.exp(-t / .009);
                    break;
                }
            }
            const body = t <= hold ? 1 : Math.exp(-profile.decay * (t - hold) / release);
            const fadeIn = t < attack ? Math.sin(t / attack * Math.PI / 2) ** 2 : 1;
            const remaining = duration - t, fadeOut = remaining < tail ? Math.sin(Math.max(0, remaining) / tail * Math.PI / 2) ** 2 : 1;
            const w = fadeIn * fadeOut;
            window[i] = w;
            data[i] = x * body * w;
            sum += data[i];
            weight += w;
        }
        const dc = weight ? sum / weight : 0;
        let peak = 0;
        for (let i = 0; i < count; i++) {
            data[i] -= dc * window[i];
            peak = Math.max(peak, Math.abs(data[i]));
        }
        const gain = peak > AUDIO_CONFIG.bufferPeak / 10000 ? AUDIO_CONFIG.bufferPeak / peak : 1;
        for (let i = 0; i < count; i++)
            data[i] *= gain;
        data[0] = 0;
        data[count - 1] = 0;
        if (this.buffers.size >= AUDIO_CONFIG.maxBuffers)
            this.buffers.delete(this.buffers.keys().next().value);
        this.buffers.set(key, buffer);
        return buffer;
    }
    makeClick(when, level = 1, sub = false, spacingMs = 500) {
        if (level === 0)
            return { cancel: () => { }, when, end: when };
        const ctx = this.ctx, source = ctx.createBufferSource(), gain = ctx.createGain(), profile = AUDIO_POWER[state.audioPower];
        source.buffer = this.clickBuffer(state.tone, level === 2, spacingMs);
        gain.gain.value = (level === 2 ? 1 : profile.normal) * (sub ? profile.sub : 1);
        source.connect(gain);
        gain.connect(this.presence);
        const end = when + source.buffer.duration;
        let cleaned = false, voice;
        const cleanup = () => { if (cleaned)
            return; cleaned = true; source.disconnect(); gain.disconnect(); this.voices.delete(voice); };
        source.onended = cleanup;
        voice = { cancel: () => { try {
                source.stop();
            }
            catch (e) { } cleanup(); }, when, end };
        this.voices.add(voice);
        source.start(when);
        return voice;
    }
    cancelPreview() { for (const voice of this.previewVoices)
        voice.cancel(); this.previewVoices = []; }
    barBuffer(settings, pre = false) {
        const ctx = this.ctx, m = metrics(settings), rate = ctx.sampleRate;
        const key = [state.tone, state.audioPower, settings.bpm, settings.meter, settings.note, settings.accents.join(''), pre, rate].join(':');
        if (this.barBuffers.has(key))
            return this.barBuffers.get(key);
        const length = Math.max(1, Math.round(m.barMs * rate / 1000)), buffer = ctx.createBuffer(1, length, rate), out = buffer.getChannelData(0);
        const profile = AUDIO_POWER[state.audioPower];
        for (let tick = 0; tick < m.ticks; tick++) {
            const pos = tick * m.stepQ, beat = Math.min(m.n - 1, Math.floor((pos + 1e-6) / m.beatQ));
            const onBeat = Math.abs(pos / m.beatQ - Math.round(pos / m.beatQ)) < 1e-5;
            const onNote = pre ? onBeat : Math.abs(pos / m.noteQ - Math.round(pos / m.noteQ)) < 1e-5;
            const level = pre ? (beat === 0 ? 2 : 1) : settings.accents[beat];
            if (!onNote || !level)
                continue;
            const pcm = this.clickBuffer(state.tone, onBeat && level === 2, 60000 / settings.bpm * (pre ? m.beatQ : m.noteQ)).getChannelData(0);
            const gain = (onBeat && level === 2 ? 1 : profile.normal) * (onBeat ? 1 : profile.sub);
            const offset = Math.round(tick * m.stepMs * rate / 1000);
            for (let i = 0; i < pcm.length; i++)
                out[(offset + i) % length] += pcm[i] * gain;
        }
        if (this.barBuffers.size >= 16)
            this.barBuffers.delete(this.barBuffers.keys().next().value);
        this.barBuffers.set(key, buffer);
        return buffer;
    }
    retireLoop(loop, at) {
        if (loop.finished)
            return;
        const stop = Math.min(loop.stopAt, at);
        loop.stopAt = stop;
        try {
            const now = this.ctx.currentTime;
            if (stop > loop.when && stop > now + .004) {
                loop.gain.gain.cancelScheduledValues(Math.max(now, stop - .003));
                loop.gain.gain.setValueAtTime(1, Math.max(loop.when, now, stop - .003));
                loop.gain.gain.linearRampToValueAtTime(0, stop);
            }
            loop.source.stop(Math.max(now, stop));
        }
        catch (_) { }
    }
    invalidate(from = -Infinity) {
        if (!this.ctx)
            return;
        const ctx = this.ctx, cut = Number.isFinite(from) ? Math.max(ctx.currentTime + .006, this.audioTime(from)) : ctx.currentTime + .006;
        for (const loop of this.loopSources)
            if (loop.stopAt > cut)
                this.retireLoop(loop, cut);
        for (const [key, loop] of this.loops)
            if (loop.stopAt <= cut || loop.when >= cut)
                this.loops.delete(key);
        this.renderFloor = cut;
        this.entries.clear();
    }
    stopAll() {
        for (const loop of [...this.loopSources])
            this.retireLoop(loop, this.ctx?.currentTime || 0);
        this.loops.clear();
        this.renderFloor = 0;
        for (const voice of [...this.voices])
            voice.cancel();
        this.previewVoices = [];
        this.entries.clear();
    }
    schedule() {
        if (this.scheduling)
            return;
        this.scheduling = true;
        try {
            this.closeIdleMediaGate();
            if (desiredEvent().playing || currentEvent().playing)
                this.cancelPreview();
            if (!this.isReady() || (room.role === 'guest' && !room.synced) || room.role === 'connecting')
                return;
            room.advanceClock();
            this.sampleOutputTiming();
            const ctx = this.ctx, audioNow = ctx.currentTime, now = hostNow();
            const floor = Math.max(audioNow + .003, this.renderFloor || 0);
            for (let ei = 0; ei < events.length; ei++) {
                const ev = events[ei], limit = events[ei + 1]?.at ?? Infinity;
                if (!ev.playing || limit <= now - 100)
                    continue;
                const settings = localPlaybackSettings(ev.settings), m = metrics(settings);
                const preEnd = ev.anchor + ev.countIn * m.barMs;
                const parts = ev.countIn ? [[ev.at, Math.min(limit, preEnd), true], [Math.max(ev.at, preEnd), limit, false]] : [[ev.at, limit, false]];
                for (const [begin, end, pre] of parts) {
                    if (end <= begin || end <= now - 100)
                        continue;
                    const key = ev.rev + ':' + Number(pre) + ':' + settings.note;
                    if (this.loops.has(key))
                        continue;
                    const start = Math.max(floor, this.audioTime(begin)), stop = Number.isFinite(end) ? this.audioTime(end) : Infinity;
                    if (stop <= start + .001)
                        continue;
                    const buffer = this.barBuffer(settings, pre), cycle = m.barMs / 1000;
                    const offset = ((start - this.audioTime(ev.anchor)) % cycle + cycle) % cycle;
                    const source = ctx.createBufferSource(), gain = ctx.createGain();
                    source.buffer = buffer;
                    source.loop = true;
                    source.loopStart = 0;
                    source.loopEnd = buffer.duration;
                    source.playbackRate.value = buffer.duration / cycle;
                    source.connect(gain);
                    gain.connect(this.presence);
                    gain.gain.setValueAtTime(0, start);
                    gain.gain.linearRampToValueAtTime(1, start + .002);
                    const loop = { source, gain, key, when: start, stopAt: stop, finished: false, nominal: begin, anchor: ev.anchor, cycleMs: m.barMs, note: settings.note };
                    source.onended = () => { loop.finished = true; this.loopSources.delete(loop); if (this.loops.get(key) === loop)
                        this.loops.delete(key); try {
                        source.disconnect();
                        gain.disconnect();
                    }
                    catch (_) { } };
                    source.start(start, offset * buffer.duration / cycle);
                    if (Number.isFinite(stop))
                        source.stop(stop);
                    this.loops.set(key, loop);
                    this.loopSources.add(loop);
                    this.totalLoops++;
                }
            }
        }
        finally {
            this.scheduling = false;
        }
    }
    async test() {
        await this.ensure();
        if (state.mute || state.volume === 0) {
            toast('本機目前靜音，請先開啟音量。');
            return;
        }
        if (desiredEvent().playing || currentEvent().playing) {
            toast('正在播放目前音色；停止節拍後可單獨試聽，不會叠加額外拍點。');
            return;
        }
        this.cancelPreview();
        const at = this.ctx.currentTime + .05;
        this.previewVoices = [this.makeClick(at, 2, false, 320), this.makeClick(at + .32, 1, false, 320), this.makeClick(at + .64, 1, false, 320)];
    }
}
const engine = new AudioEngine();
const LOCAL_COPY = {
    'zh-Hant': { restore: '\u6062\u5fa9\u64ad\u653e', working: '\u6062\u5fa9\u4e2d\u2026', note: '\u672c\u6a5f\u97f3\u7b26', noteHint: '\u53ea\u8abf\u6574\u4f60\u807d\u5230\u7684\u7d30\u5206\uff0c\u4e0d\u6539\u8b8a\u5168\u5718\u901f\u5ea6\u8207\u5c0f\u7bc0\u3002', hold: '\u9023\u7dda\u66ab\u6642\u4e2d\u65b7\uff1a\u7e7c\u7e8c\u6700\u5f8c\u540c\u6b65\u7684\u7bc0\u62cd\uff0c\u91cd\u9023\u5f8c\u66f4\u65b0\u3002', paused: '\u4e3b\u6301\u4eba\u5df2\u66ab\u505c\uff1b\u672c\u6a5f\u8072\u97f3\u5df2\u5099\u59a5\u3002', ready: '\u5df2\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\uff0c\u4e0d\u5f71\u97ff\u5176\u4ed6\u5718\u54e1\u3002', needs: '\u672c\u6a5f\u97f3\u8a0a\u5df2\u4e2d\u65b7\uff0c\u8acb\u6309\u6062\u5fa9\u64ad\u653e\u3002', zero: '\u97f3\u91cf\u70ba 0\uff0c\u8acb\u8abf\u9ad8\u672c\u6a5f\u97f3\u91cf\u3002', system: '\u7cfb\u7d71\u4ecd\u4f54\u7528\u97f3\u8a0a\uff0c\u8acb\u7d50\u675f\u901a\u8a71\u6216\u5176\u4ed6\u97f3\u6e90\u5f8c\u518d\u6309\u6062\u5fa9\u64ad\u653e\u3002' },
    en: { restore: 'Restore playback', working: 'Restoring...', note: 'My subdivision', noteHint: 'Changes only your clicks, not the shared tempo or bar.', hold: 'Connection interrupted: keeping the last synchronized beat while reconnecting.', paused: 'The host has paused. Your audio is ready.', ready: 'Local audio restored. Other members are unchanged.', needs: 'Local audio interrupted. Choose Restore playback.', zero: 'Volume is zero. Raise your local volume.', system: 'Audio is still blocked by the system. End the call or other audio and try Restore playback again.' }
};
const localText = key => (LOCAL_COPY[I18N.lang] || LOCAL_COPY['zh-Hant'])[key];
function localPlaybackSettings(settings) { return ['host', 'guest'].includes(room.role) && [4, 8, 16].includes(state.localNote) ? { ...settings, note: state.localNote } : settings; }
function chooseLocalNote(note) {
    if (![4, 8, 16].includes(note) || room.role === 'connecting')
        return;
    if (['host', 'guest'].includes(room.role)) {
        state.localNote = note;
        engine.invalidate();
        engine.schedule();
        saveLocal();
        renderControls();
    }
    else
        requestSettings({ note });
}
let localRestoreBusy = false;
function renderRecoveryControl() { window.TempoliveRecoveryUI?.refresh(); }
async function recoverLocalPlayback({ allowSoloStart = true, report = true } = {}) {
    if (localRestoreBusy || engine.gameOutputSuppressed)
        return { outcome: 'busy' };
    if (!allowSoloStart && (!desiredEvent().playing || state.mute || state.volume === 0))
        return { outcome: 'not-requested' };
    localRestoreBusy = true;
    renderRecoveryControl();
    const generation = room.generation, wasPlaying = desiredEvent().playing;
    window.TempoliveAudioContinuity?.cancel('manual-recovery');
    try {
        await engine.recover();
        if (generation !== room.generation)
            return { outcome: 'cancelled' };
        if (!allowSoloStart && (!desiredEvent().playing || state.mute || state.volume === 0))
            return { outcome: 'not-requested' };
        state.mute = false;
        guestAudioRecoveryRequired = false;
        engine.setVolume();
        engine.schedule();
        room.kickRecovery();
        requestWake();
        renderAudio();
        renderControls();
        if (allowSoloStart && room.role === 'solo' && !wasPlaying)
            await startPlayback();
        if (report)
            toast(!state.volume ? localText('zero') : !desiredEvent().playing && room.role !== 'solo' ? localText('paused') : localText('ready'));
        return { outcome: 'restored' };
    }
    catch (_) {
        guestAudioRecoveryRequired = true;
        if (report)
            toast(localText('system'));
        return { outcome: 'error' };
    }
    finally {
        localRestoreBusy = false;
        renderRecoveryControl();
    }
}
let changeTimer;
function localLead() { return Math.max(220, engine.requiredLeadMs()); }
function hostLead() {
    let lead = Math.max(SYNC_CONFIG.minLeadMs, engine.requiredLeadMs() + 150);
    for (const member of room.clients.values()) {
        if (!member.hello || !member.conn.open || wallNow() - member.lastSeen > 4500 || member.timing && (!member.timing.ready || !member.timing.synced))
            continue;
        const t = member.timing, network = Math.max(member.rtt || 0, t?.rttTailMs || 0);
        const output = t?.leadMs ?? Math.max(550, engine.requiredLeadMs());
        lead = Math.max(lead, network * 1.5 + output + Math.min(300, t?.spreadMs || 0) + 180);
    }
    return clamp(Math.ceil(lead), SYNC_CONFIG.minLeadMs, SYNC_CONFIG.maxLeadMs);
}
function applyEvents(next) {
    let changedAt = Infinity;
    for (const old of events) {
        if (!next.some(n => n.rev === old.rev))
            changedAt = Math.min(changedAt, old.at);
    }
    for (const n of next) {
        if (!events.some(old => old.rev === n.rev))
            changedAt = Math.min(changedAt, n.at);
    }
    if (changedAt !== Infinity)
        engine.invalidate(changedAt);
    if (next.at(-1)?.playing && !desiredEvent().playing)
        window.TempoliveBand?.cancelNativeSpeech?.();
    events = next;
    engine.schedule();
    renderControls();
    requestWake();
}
function keepHistory(next, now = hostNow()) {
    next.sort((a, b) => a.at - b.at || a.rev - b.rev);
    let cut = 0;
    for (let i = 0; i < next.length; i++)
        if (next[i].at <= now - 4000)
            cut = i;
    return next.slice(cut).slice(-20);
}
function publish(next) { applyEvents(keepHistory(next)); room.remember(); if (room.role === 'host') {
    room.broadcastSnapshot();
    room.repeatSnapshot();
} }
function requestSettings(patch, { songChange = false, immediate = false, keepAccents = false } = {}) {
    if (room.role === 'guest' || room.role === 'connecting' || room.recovering)
        return;
    const meter = patch.meter ?? state.settings.meter;
    const accents = keepAccents ? liveAccentsFor(meter) : (patch.accents ?? (meter !== state.settings.meter ? liveAccentsFor(meter) : state.settings.accents));
    const nextSettings = validSettings({ ...state.settings, ...patch, accents });
    if (!keepAccents && hasOwn(patch, 'accents'))
        rememberLiveAccents(nextSettings.accents);
    state.settings = nextSettings;
    renderControls();
    saveLocal();
    clearTimeout(changeTimer);
    const keys = Object.keys(patch);
    const liveEdit = !songChange && !immediate && keys.length > 0 && keys.every(key => key === 'bpm' || key === 'accents' || key === 'note');
    if (liveEdit) {
        commitLiveSettings(patch);
        return;
    }
    const run = () => commitSettings(songChange);
    if (immediate)
        run();
    else
        changeTimer = setTimeout(run, 75);
}
function commitLiveSettings(patch) {
    if (room.role === 'guest' || room.role === 'connecting' || room.recovering)
        return;
    if (room.role === 'host' && room.clients.size) {
        commitRoomLiveSettings(patch);
        return;
    }
    const now = hostNow(), old = currentEvent(now), future = events.filter(e => e.at > now);
    const updateSettings = (previous) => {
        const next = clone(previous);
        if (hasOwn(patch, 'bpm'))
            next.bpm = state.settings.bpm;
        if (hasOwn(patch, 'accents') && previous.meter === state.settings.meter)
            next.accents = [...state.settings.accents];
        if (hasOwn(patch, 'note'))
            next.note = state.settings.note;
        return validSettings(next);
    };
    const settings = updateSettings(old.settings);
    const renderLead = engine.ctx?.state === 'running' ? Math.max(0, (engine.ctx.currentTime + AUDIO_CONFIG.editGuardSeconds - engine.audioTime(now)) * 1000) : 0;
    const pivot = now + renderLead;
    const anchor = old.playing ? pivot - (pivot - old.anchor) * old.settings.bpm / settings.bpm : now;
    const runAt = old.playing && now < old.runAt ? anchor + old.countIn * metrics(settings).barMs : old.runAt;
    const current = { ...old, rev: ++rev, at: now, anchor, runAt, settings, phaseId: hasOwn(patch, 'note') ? rev : (old.phaseId || old.rev) };
    const queued = future.map(ev => {
        const nextSettings = updateSettings(ev.settings);
        const nextAnchor = ev.at - (ev.at - ev.anchor) * ev.settings.bpm / nextSettings.bpm;
        return { ...ev, rev: ++rev, settings: nextSettings, anchor: nextAnchor, phaseId: hasOwn(patch, 'note') ? rev : ev.phaseId,
            runAt: ev.countIn ? nextAnchor + ev.countIn * metrics(nextSettings).barMs : ev.runAt };
    });
    publish([...events.filter(e => e.at <= now), current, ...queued]);
}
function commitRoomLiveSettings(patch) {
    const now = hostNow(), lead = hostLead();
    const slot = Math.max(100, Math.ceil(lead / 8)), at = Math.ceil((now + lead) / slot) * slot;
    const old = currentEvent(at);
    const update = previous => validSettings({ ...previous,
        ...(hasOwn(patch, 'bpm') ? { bpm: state.settings.bpm } : {}),
        ...(hasOwn(patch, 'note') ? { note: state.settings.note } : {}),
        ...(hasOwn(patch, 'accents') && previous.meter === state.settings.meter ? { accents: [...state.settings.accents] } : {}) });
    const settings = update(old.settings);
    const anchor = old.playing ? at - (at - old.anchor) * old.settings.bpm / settings.bpm : at;
    const next = { ...old, rev: ++rev, at, anchor, settings, syncEdit: true,
        runAt: old.playing && at < old.runAt ? anchor + old.countIn * metrics(settings).barMs : old.runAt,
        phaseId: hasOwn(patch, 'note') ? rev : (old.phaseId || old.rev) };
    const future = events.filter(e => e.at > at).map(ev => {
        const s = update(ev.settings), anchor = ev.at - (ev.at - ev.anchor) * ev.settings.bpm / s.bpm;
        return { ...ev, rev: ++rev, anchor, settings: s, phaseId: hasOwn(patch, 'note') ? rev : ev.phaseId,
            runAt: ev.countIn ? anchor + ev.countIn * metrics(s).barMs : ev.runAt };
    });
    publish([...events.filter(e => e.at < at), next, ...future]);
}
function commitSettings(songChange = false) {
    if (room.role === 'guest' || room.role === 'connecting' || room.recovering)
        return;
    const now = hostNow(), old = currentEvent(now), last = desiredEvent(), lead = room.role === 'host' ? hostLead() : localLead();
    let at = now + 12, playing = last.playing, anchor = at, countIn = 0, barBase = 0, runAt = at;
    if (playing) {
        if (!old.playing) {
            at = Math.max(last.at, now + lead);
            anchor = at;
            countIn = state.settings.countIn;
            runAt = at + metrics(state.settings).barMs * countIn;
        }
        else {
            const m = metrics(old.settings), boundaryMs = songChange ? m.barMs : 60000 / old.settings.bpm * m.beatQ;
            at = old.anchor + Math.ceil((now + lead - old.anchor) / boundaryMs) * boundaryMs;
            anchor = at;
            barBase = songChange ? 0 : Math.max(0, old.barBase + Math.floor((at - old.anchor) / m.barMs) - old.countIn);
            runAt = songChange ? at : old.runAt;
        }
    }
    const e = { rev: ++rev, at, anchor, playing, settings: clone(state.settings), title: titleNow(), countIn, barBase, runAt };
    publish([...events.filter(x => x.at < at), e]);
}
async function togglePlay() {
    if (room.role === 'guest') {
        if (guestAudioRecoveryRequired || !engine.isReady()) {
            await restoreGuestAudio();
            return;
        }
        if (state.mute) {
            try {
                await engine.ensure();
            }
            catch (e) {
                toast(e.message);
                return;
            }
            state.mute = false;
            engine.invalidate();
            engine.schedule();
        }
        else
            state.mute = true;
        engine.setVolume();
        renderAudio();
        renderControls();
        room.sendLocalStatus();
        return;
    }
    if (room.role === 'connecting')
        return;
    if (room.startPending) {
        room.cancelStart();
        renderControls();
        return;
    }
    clearTimeout(changeTimer);
    if (desiredEvent().playing) {
        stopTransport();
        return;
    }
    return startPlayback();
}
async function startPlayback({ fromMediaSession = false } = {}) {
    if (room.role === 'guest' || room.role === 'connecting' || (document.hidden && !fromMediaSession) || engine.gameOutputSuppressed)
        return;
    if (room.startPending)
        return;
    if (desiredEvent().playing) {
        if (!engine.isReady())
            try {
                await engine.ensure();
                engine.schedule();
            }
            catch (_) {
                toast(localText('needs'));
            }
        return;
    }
    clearTimeout(changeTimer);
    window.TempoliveBand?.cancelNativeSpeech?.();
    const generation = room.generation, token = ++room.startToken, role = room.role;
    room.startPending = true;
    renderControls();
    try {
        const audio = engine.ensure();
        if (role === 'host')
            audio.catch(() => { toast(localText('needs')); renderRecoveryControl(); });
        else
            await audio;
        if (token !== room.startToken || generation !== room.generation || room.role !== role)
            return;
        if (engine.gameOutputSuppressed)
            return;
        const at = hostNow() + (role === 'host' ? hostLead() : localLead());
        const e = { rev: ++rev, at, anchor: at, playing: true, settings: clone(state.settings), title: titleNow(), countIn: state.settings.countIn, barBase: 0, runAt: at + metrics(state.settings).barMs * state.settings.countIn };
        publish([...events.filter(x => x.at < at), e]);
    }
    catch (e) {
        if (token === room.startToken)
            toast(e.message);
    }
    finally {
        if (token === room.startToken) {
            room.startPending = false;
            renderControls();
        }
    }
}
async function restoreGuestAudio() { return recoverLocalPlayback(); }
function stopTransport() {
    room.cancelStart();
    window.TempoliveAudioContinuity?.cancel('stopped');
    clearTimeout(changeTimer);
    const now = hostNow(), at = now + (room.role === 'host' && room.clients.size ? hostLead() : 0);
    publish([...events.filter(x => x.at < at), { rev: ++rev, at, anchor: at, playing: false, settings: clone(state.settings), title: titleNow(), countIn: 0, barBase: 0, runAt: at }]);
    if (room.role !== 'host')
        engine.stopAll();
    clearScreenFlash();
    releaseWake();
}
function resetStopped(settings = state.settings) {
    window.TempoliveAudioContinuity?.cancel('reset');
    clearTimeout(changeTimer);
    engine.stopAll();
    clearScreenFlash();
    events = [{ rev: ++rev, at: 0, anchor: 0, playing: false, settings: clone(settings), title: titleNow(), countIn: 0, barBase: 0, runAt: 0 }];
    renderControls();
    releaseWake();
}
class SignalBus {
    constructor() { this.handlers = new Map(); }
    on(name, fn) { if (!this.handlers.has(name))
        this.handlers.set(name, []); this.handlers.get(name).push(fn); return this; }
    emit(name, ...args) { for (const fn of [...(this.handlers.get(name) || [])]) {
        try {
            fn(...args);
        }
        catch (error) {
            console.error('Isolated event handler:', name, error);
        }
    } return this; }
}
const mqttUtf8 = new TextEncoder(), mqttText = new TextDecoder();
function joinBytes(...parts) { const result = new Uint8Array(parts.reduce((n, p) => n + p.length, 0)); let at = 0; for (const part of parts) {
    result.set(part, at);
    at += part.length;
} return result; }
function mqttString(s) { const bytes = mqttUtf8.encode(s); if (bytes.length > 65535)
    throw Error('MQTT string too long'); return joinBytes(new Uint8Array([bytes.length >> 8, bytes.length & 255]), bytes); }
function mqttPacket(header, body = new Uint8Array()) {
    const bytes = [];
    let n = body.length;
    do {
        let v = n % 128;
        n = Math.floor(n / 128);
        if (n)
            v |= 128;
        bytes.push(v);
    } while (n);
    return joinBytes(new Uint8Array([header, ...bytes]), body);
}
function networkError(message, type = 'network') { const e = Error(message); e.type = type; return e; }
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
class MqttWire extends SignalBus {
    constructor() { super(); this.ws = null; this.ready = false; this.manual = false; this.buffer = new Uint8Array(); this.waiters = new Map(); this.serial = 0; this.lastRx = performance.now(); }
    async connect() {
        const cfg = CONFIG.relay;
        this.manual = false;
        return new Promise((resolve, reject) => {
            let settled = false;
            const settle = (error) => { if (settled)
                return; settled = true; clearTimeout(timer); this.rejectConnect = null; if (error)
                reject(error);
            else
                resolve(); };
            this.rejectConnect = e => settle(e);
            const timer = setTimeout(() => { settle(networkError(TEXT.peerFailed + ' [R01]')); this.close(); }, cfg.connectTimeout);
            let ws;
            try {
                ws = this.ws = new WebSocket(cfg.url, 'mqtt');
                ws.binaryType = 'arraybuffer';
            }
            catch (e) {
                settle(networkError(TEXT.peerFailed + ' [R02]'));
                return;
            }
            ws.onopen = () => {
                this.emit('progress', '正在確認中繼連線…');
                const flags = 2 | (cfg.username ? 128 : 0) | (cfg.password ? 64 : 0);
                const body = joinBytes(mqttString('MQTT'), new Uint8Array([4, flags, 0, 20]), mqttString('tm-' + id().replace(/-/g, '')), cfg.username ? mqttString(cfg.username) : new Uint8Array(), cfg.password ? mqttString(cfg.password) : new Uint8Array());
                try {
                    ws.send(mqttPacket(0x10, body));
                }
                catch (e) {
                    settle(networkError(TEXT.peerFailed + ' [R03]'));
                    this.close();
                }
            };
            this.onConnack = code => {
                if (code !== 0) {
                    settle(networkError('中繼服務拒絕連線（' + code + '）。請稍後重試。 [R04]'));
                    this.close();
                    return;
                }
                this.ready = true;
                this.lastRx = performance.now();
                settle();
                this.pingTimer = setInterval(() => { if (!this.ready)
                    return; if (performance.now() - this.lastRx > 30000) {
                    this.ws?.close();
                    return;
                } try {
                    this.send(mqttPacket(0xc0));
                }
                catch (e) {
                    this.ws?.close();
                } }, 7000);
            };
            ws.onmessage = e => { try {
                this.feed(new Uint8Array(e.data));
            }
            catch (error) {
                settle(networkError('中繼資料格式錯誤，請重試。 [R05]'));
                this.close();
                this.emit('close');
            } };
            ws.onerror = () => { settle(networkError(TEXT.peerFailed + ' [R06]')); };
            ws.onclose = () => { clearInterval(this.pingTimer); this.ready = false; settle(networkError(TEXT.peerFailed + ' [R07]')); for (const w of this.waiters.values())
                w.reject(networkError('Relay disconnected')); this.waiters.clear(); if (!this.manual)
                this.emit('close'); };
        });
    }
    send(bytes) { if (!this.ws || this.ws.readyState !== WebSocket.OPEN)
        throw networkError('Relay disconnected'); if (this.ws.bufferedAmount > 262144) {
        this.ws.close();
        throw networkError('Relay backpressure');
    } this.ws.send(bytes); }
    feed(bytes) {
        this.lastRx = performance.now();
        this.buffer = joinBytes(this.buffer, bytes);
        if (this.buffer.length > 262144)
            throw Error('Oversize MQTT frame');
        while (this.buffer.length >= 2) {
            let len = 0, mul = 1, i = 1, digit = 0;
            do {
                if (i >= this.buffer.length)
                    return;
                digit = this.buffer[i++];
                len += (digit & 127) * mul;
                mul *= 128;
                if (i > 5)
                    throw Error('Invalid MQTT length');
            } while (digit & 128);
            if (len > 131072)
                throw Error('MQTT payload too large');
            if (this.buffer.length < i + len)
                return;
            const h = this.buffer[0], body = this.buffer.slice(i, i + len);
            this.buffer = this.buffer.slice(i + len);
            const type = h >> 4;
            if (type === 2) {
                if (body.length !== 2)
                    throw Error('Invalid CONNACK');
                this.onConnack?.(body[1]);
            }
            else if (type === 9 || type === 11) {
                const pid = body[0] * 256 + body[1], w = this.waiters.get(pid);
                if (w) {
                    this.waiters.delete(pid);
                    if (type === 9 && (body.length < 3 || body[2] === 128))
                        w.reject(networkError('無法訂閱房間資料，請重試。 [R08]'));
                    else
                        w.resolve();
                }
            }
            else if (type === 3) {
                if (body.length < 2)
                    throw Error('Invalid PUBLISH');
                const size = body[0] * 256 + body[1];
                if (size + 2 > body.length)
                    throw Error('Invalid topic');
                const topic = mqttText.decode(body.slice(2, 2 + size));
                let at = 2 + size;
                const qos = (h >> 1) & 3;
                if (qos === 1) {
                    if (at + 2 > body.length)
                        throw Error('Invalid QoS1');
                    this.send(mqttPacket(0x40, body.slice(at, at + 2)));
                    at += 2;
                }
                else if (qos !== 0)
                    throw Error('Unsupported QoS');
                this.emit('message', topic, mqttText.decode(body.slice(at)));
            }
        }
    }
    command(header, topic, subscribe = true) {
        if (!this.ready)
            return Promise.reject(networkError('Relay not ready'));
        const pid = (this.serial = this.serial % 65535 + 1);
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => { this.waiters.delete(pid); reject(networkError('中繼沒有回應，請重試。 [R09]')); }, 4500);
            this.waiters.set(pid, { resolve: () => { clearTimeout(timer); resolve(); }, reject: e => { clearTimeout(timer); reject(e); } });
            try {
                this.send(mqttPacket(header, joinBytes(new Uint8Array([pid >> 8, pid & 255]), mqttString(topic), subscribe ? new Uint8Array([0]) : new Uint8Array())));
            }
            catch (e) {
                clearTimeout(timer);
                this.waiters.delete(pid);
                reject(e);
            }
        });
    }
    subscribe(topic) { return this.command(0x82, topic, true); }
    unsubscribe(topic) { return this.command(0xa2, topic, false); }
    publish(topic, data) { if (!this.ready)
        throw networkError('Relay not ready'); const body = mqttUtf8.encode(JSON.stringify(data)); if (body.length > 63000)
        throw Error('Room packet too large'); this.send(mqttPacket(0x30, joinBytes(mqttString(topic), body))); }
    close() {
        this.manual = true;
        clearInterval(this.pingTimer);
        this.rejectConnect?.(networkError('Connection cancelled', 'cancelled'));
        for (const w of this.waiters.values())
            w.reject(networkError('Connection cancelled', 'cancelled'));
        this.waiters.clear();
        try {
            if (this.ready)
                this.send(mqttPacket(0xe0));
        }
        catch (e) { }
        this.ready = false;
        try {
            this.ws?.close();
        }
        catch (e) { }
    }
}
class RelayConnection extends SignalBus {
    constructor(owner, peer, cid, remoteUid = '') { super(); this.owner = owner; this.peer = peer; this.cid = cid; this.remoteUid = remoteUid; this.open = false; this.closed = false; this.outgoing = false; this.sent = 0; this.received = 0; }
    begin() {
        this.outgoing = true;
        clearInterval(this.requestTimer);
        clearTimeout(this.requestTimeout);
        const request = () => { if (!this.closed && !this.open)
            this.owner.signal(this.peer, { kind: 'connect', cid: this.cid }); };
        request();
        this.requestTimer = setInterval(request, 700);
        this.requestTimeout = setTimeout(() => { if (this.open || this.closed)
            return; this.emit('error', networkError('已連上中繼，但找不到此房間。請確認四位代碼、主持人未關閉網頁，並確認全員都使用這一版。 [R10]', 'peer-unavailable')); this.close(); }, CONFIG.relay.requestTimeout);
    }
    activate(remoteUid) { if (this.closed)
        return; this.remoteUid = remoteUid; clearInterval(this.requestTimer); clearTimeout(this.requestTimeout); const wasOpen = this.open; this.open = true; if (!wasOpen)
        this.emit('open'); }
    send(data) { if (this.open && !this.closed)
        this.owner.signal(this.peer, { kind: 'data', cid: this.cid, toUid: this.remoteUid, seq: ++this.sent, data }); }
    close(notify = true) { if (this.closed)
        return; this.closed = true; this.open = false; clearInterval(this.requestTimer); clearTimeout(this.requestTimeout); if (notify)
        this.owner.signal(this.peer, { kind: 'close', cid: this.cid, toUid: this.remoteUid }); this.owner.connections.delete(this.cid); this.emit('close'); }
}
class RelayPeer extends SignalBus {
    constructor(peerId, restoredUid = '') {
        super();
        this.id = peerId;
        this.uid = restoredUid || id();
        this.isHost = peerId.startsWith(CONFIG.roomPrefix);
        this.connections = new Map();
        this.destroyed = false;
        this.disconnected = false;
        this.claimed = false;
        this.everOpened = false;
        this.starting = false;
        this.wire = null;
        queueMicrotask(() => this.start(false));
    }
    topic(peer = this.id) { return CONFIG.relay.namespace + '/in/' + peer; }
    signal(to, message) {
        if (!this.wire?.ready || this.destroyed)
            return;
        try {
            this.wire.publish(this.topic(to), { protocol: 'tm-relay-2', from: this.id, uid: this.uid, ...message });
        }
        catch (e) {
            console.warn('Relay send:', e);
            if (!this.starting && (!this.wire.ready || this.wire.ws?.readyState !== 1))
                this.handleDisconnect();
        }
    }
    async start(reconnecting) {
        if (this.starting || this.destroyed)
            return;
        this.starting = true;
        let failure;
        for (let attempt = 0; attempt <= 1; attempt++) {
            if (this.destroyed) {
                this.starting = false;
                return;
            }
            this.emit('progress', (reconnecting ? '連線中斷，正在重連' : '正在連接中繼服務') + '（' + (attempt + 1) + '/2）…');
            const old = this.wire;
            old?.close();
            const wire = this.wire = new MqttWire();
            wire.on('progress', s => this.emit('progress', s));
            wire.on('message', (topic, payload) => { if (this.wire === wire)
                this.receive(topic, payload); });
            wire.on('close', () => { if (this.wire === wire && !this.starting)
                this.handleDisconnect(); });
            try {
                await wire.connect();
                if (this.destroyed)
                    throw networkError('Cancelled', 'cancelled');
                await wire.subscribe(this.topic());
                if (this.isHost) {
                    let available = false;
                    for (let probe = 0; probe < 5 && !available; probe++) {
                        this.emit('progress', '已連上中繼，正在檢查四位代碼…');
                        this.busy = false;
                        this.claimed = false;
                        this.signal(this.id, { kind: 'probe' });
                        await delay(1000);
                        if (this.destroyed)
                            throw networkError('Cancelled', 'cancelled');
                        if (!this.busy) {
                            this.claimed = true;
                            this.signal(this.id, { kind: 'claim' });
                            await delay(550);
                        }
                        if (!wire.ready)
                            throw networkError(TEXT.peerFailed);
                        if (!this.busy) {
                            available = true;
                            break;
                        }
                        this.claimed = false;
                        if (reconnecting)
                            throw networkError('房間代碼已被其他主持人使用，請重新建立房間。', 'unavailable-id');
                        await wire.unsubscribe(this.topic());
                        this.id = CONFIG.roomPrefix + randomCode();
                        await wire.subscribe(this.topic());
                    }
                    if (!available)
                        throw networkError('房間代碼忙碌，請重試建立。', 'unavailable-id');
                }
                if (this.destroyed)
                    throw networkError('Cancelled', 'cancelled');
                this.disconnected = false;
                this.starting = false;
                this.everOpened = true;
                for (const c of this.connections.values())
                    if (!c.closed) {
                        if (c.outgoing) {
                            c.open = false;
                            c.begin();
                        }
                        else
                            c.open = true;
                    }
                this.emit('open', this.id);
                return;
            }
            catch (e) {
                failure = e;
                wire.close();
                if (this.destroyed || e.type === 'cancelled') {
                    this.starting = false;
                    return;
                }
                if (e.type === 'unavailable-id')
                    break;
                if (attempt < 1)
                    await delay(550);
            }
        }
        this.starting = false;
        this.emit('error', failure || networkError(TEXT.peerFailed));
    }
    handleDisconnect() {
        if (this.destroyed || this.disconnected)
            return;
        this.disconnected = true;
        for (const c of this.connections.values())
            c.open = false;
        this.emit('disconnected');
        this.reconnectTimer = setTimeout(() => this.reconnect(), 600);
    }
    reconnect() { if (!this.destroyed && !this.starting)
        this.start(true); }
    connect(peer) { const c = new RelayConnection(this, peer, id()); this.connections.set(c.cid, c); queueMicrotask(() => c.begin()); return c; }
    receive(topic, payload) {
        if (this.destroyed || topic.replace(/^\//, '') !== this.topic() || payload.length > 65000)
            return;
        let m;
        try {
            m = JSON.parse(payload);
        }
        catch (e) {
            return;
        }
        if (!m || m.protocol !== 'tm-relay-2' || m.uid === this.uid || typeof m.from !== 'string' || m.from.length > 64 || !/^[-a-zA-Z0-9]+$/.test(m.from) || typeof m.uid !== 'string' || m.uid.length > 64)
            return;
        if (m.toUid && m.toUid !== this.uid)
            return;
        if (m.kind === 'probe' && this.isHost && this.claimed) {
            this.signal(this.id, { kind: 'busy', toUid: m.uid });
            return;
        }
        if (m.kind === 'busy' && m.toUid === this.uid) {
            if (!this.everOpened || this.starting)
                this.busy = true;
            return;
        }
        if (m.kind === 'claim' && this.isHost) {
            if ((this.everOpened && !this.starting) || (this.claimed && this.uid < m.uid))
                this.signal(this.id, { kind: 'busy', toUid: m.uid });
            else if (this.claimed)
                this.busy = true;
            return;
        }
        if (typeof m.cid !== 'string' || m.cid.length > 64)
            return;
        let c = this.connections.get(m.cid);
        if (m.kind === 'connect' && this.isHost && this.claimed && !this.starting) {
            if (c && (c.peer !== m.from || c.remoteUid !== m.uid))
                return;
            if (!c) {
                if (this.connections.size >= CONFIG.maxPeople + 2)
                    return;
                c = new RelayConnection(this, m.from, m.cid, m.uid);
                this.connections.set(m.cid, c);
                this.emit('connection', c);
                c.activate(m.uid);
            }
            if (!c.open)
                c.activate(m.uid);
            this.signal(m.from, { kind: 'accepted', cid: m.cid, toUid: m.uid });
            return;
        }
        if (!c || c.peer !== m.from)
            return;
        if (m.kind === 'accepted' && c.outgoing) {
            if (c.remoteUid && c.remoteUid !== m.uid) {
                c.emit('error', networkError(TEXT.lost, 'peer-unavailable'));
                c.close();
                return;
            }
            c.activate(m.uid);
            return;
        }
        if (c.remoteUid !== m.uid || m.toUid !== this.uid)
            return;
        if (m.kind === 'data' && Number.isSafeInteger(m.seq) && m.seq > c.received) {
            c.received = m.seq;
            c.emit('data', m.data);
        }
        else if (m.kind === 'close')
            c.close(false);
    }
    destroy() { if (this.destroyed)
        return; clearTimeout(this.reconnectTimer); for (const c of [...this.connections.values()])
        c.close(); this.destroyed = true; this.wire?.close(); this.emit('close'); }
}
function randomCode() { return String(1000 + crypto.getRandomValues(new Uint32Array(1))[0] % 9000); }
function peerErrorMessage(e) { return cleanText(e?.message, 260) || TEXT.peerFailed; }
class Room {
    constructor() { this.role = 'solo'; this.code = ''; this.name = ''; this.peer = null; this.connection = null; this.clients = new Map(); this.offset = 0; this.samples = []; this.pendingPings = new Map(); this.synced = false; this.session = ''; this.generation = 0; this.connecting = false; this.recovering = false; this.signalOnline = true; this.roster = []; this.backup = null; this.lastSeen = 0; this.lastPing = 0; this.lastSyncBurst = 0; this.lastSnapshotVersion = 0; this.snapshotVersion = 0; this.acceptedSession = false; this.connectedAt = 0; this.rtt = null; this.spread = null; this.progress = ''; this.startToken = 0; this.startPending = false; this.clockTarget = 0; this.lastClockAdjust = wallNow(); this.lastRetimeOffset = 0; this.rttTail = 0; this.syncTimers = []; this.repeatTimers = []; setInterval(() => this.heartbeat(), 500); }
    remember() {
        if (!['host', 'guest'].includes(this.role) || !this.session || !this.peer)
            return;
        try {
            sessionStorage.setItem('tempolive.room.resume.v3', JSON.stringify({ version: 3, savedAt: Date.now(), role: this.role, name: this.name, code: this.code, session: this.session, peerId: this.peer.id, uid: this.peer.uid, offset: this.offset, synced: this.synced, events, sequence: this.snapshotVersion, lastSequence: this.lastSnapshotVersion, backup: this.backup }));
        }
        catch (_) { }
    }
    hold(reason = 'connection') {
        if (!['host', 'guest'].includes(this.role))
            return;
        this.recovering = true;
        this.progress = localText('hold');
        this.lastHold = reason;
        this.remember();
        renderRoom();
        renderRecoveryControl();
        engine.schedule();
    }
    kickRecovery() {
        if (!['host', 'guest'].includes(this.role) || this.remoteConflict)
            return;
        if (!this.peer || this.peer.destroyed)
            return;
        const t = wallNow();
        if (t - (this.lastReconnect || 0) < 2000)
            return;
        this.lastReconnect = t;
        if (!this.peer.wire?.ready) {
            this.peer.reconnect();
            return;
        }
        if (this.role === 'guest') {
            if (!this.connection || this.connection.closed || this.recovering && this.connection.open && t - this.lastSeen > 12000)
                this.connectGuest(this.generation);
            else if (!this.connection.open) {
                if (!this.connection.requestTimer)
                    this.connection.begin();
            }
            else {
                this.send(this.connection, this.packet('resync'));
                this.ping();
            }
        }
        else {
            this.recovering = false;
            this.broadcastSnapshot();
        }
    }
    connectGuest(generation, onJoin = null, onFailure = null) {
        if (generation !== this.generation || !this.peer || this.peer.destroyed)
            return;
        const previous = this.connection;
        this.connection = null;
        if (previous && !previous.closed)
            previous.close(false);
        const conn = this.peer.connect(CONFIG.roomPrefix + this.code);
        this.connection = conn;
        const current = () => generation === this.generation && this.connection === conn;
        conn.on('open', () => { if (current())
            this.send(conn, { app: 'tw-beat', v: 2, type: 'hello', name: this.name, audio: this.localAudioStatus(), timing: this.timingStatus() }); });
        conn.on('data', data => {
            if (!current() || data?.app !== 'tw-beat' || data.v !== 2)
                return;
            if (data.type === 'denied') {
                if (onFailure && !this.acceptedSession)
                    onFailure(networkError(cleanText(data.message, 160)));
                else {
                    this.hold('denied');
                    this.remoteConflict = true;
                }
                return;
            }
            if (data.type === 'welcome') {
                const first = !this.acceptedSession;
                if (!first && data.session !== this.session) {
                    this.hold('different-session');
                    this.remoteConflict = true;
                    return;
                }
                if (first) {
                    this.session = cleanText(data.session, 64);
                    if (!this.session)
                        return;
                    this.acceptedSession = true;
                    this.role = 'guest';
                    this.offset = 0;
                    this.clockTarget = 0;
                    this.lastRetimeOffset = 0;
                    this.synced = false;
                    this.samples = [];
                }
                this.lastSeen = wallNow();
                this.connectedAt = this.lastSeen;
                this.recovering = false;
                this.signalOnline = true;
                this.receiveSnapshot(data);
                this.roster = Array.isArray(data.roster) ? data.roster.slice(0, CONFIG.maxPeople) : [];
                onJoin?.();
                this.burstSync();
                this.remember();
                engine.schedule();
                renderRoom();
                renderControls();
                return;
            }
            this.receiveGuest(data);
        });
        conn.on('close', () => { if (!current())
            return; if (!this.acceptedSession)
            onFailure?.(networkError(TEXT.lost));
        else
            this.hold('peer-closed'); });
        conn.on('error', e => { if (!current())
            return; if (!this.acceptedSession)
            onFailure?.(e);
        else
            this.hold('peer-error'); });
    }
    send(conn, data) { try {
        if (conn?.open)
            conn.send(data);
    }
    catch (e) {
        console.warn('Room send failed');
    } }
    packet(type, extra = {}) { return { app: 'tw-beat', v: 2, type, session: this.session, ...extra }; }
    broadcast(data) { for (const c of this.clients.values())
        if (c.hello)
            this.send(c.conn, data); }
    snapshot() { return this.packet('snapshot', { sequence: ++this.snapshotVersion, events: clone(events) }); }
    broadcastSnapshot() { this.broadcast(this.snapshot()); }
    setProgress(message) { this.progress = message; if (this.connecting && $('roomDialog').open)
        I18N.set($('roomError'), message); if (this.recovering)
        renderRoom(); }
    async enter(role, name, code, resume = null) {
        this.cancelAttempt();
        const generation = ++this.generation;
        this.connecting = true;
        this.role = 'connecting';
        this.name = cleanText(name, 16);
        this.code = resume ? resume.code : role === 'host' ? randomCode() : code;
        this.backup = resume?.backup || { settings: clone(state.settings), activeId: state.activeId };
        this.remoteConflict = false;
        if (resume) {
            this.role = role;
            this.session = resume.session;
            this.acceptedSession = role === 'guest';
            this.offset = resume.offset || 0;
            this.clockTarget = this.offset;
            this.lastRetimeOffset = this.offset;
            this.synced = resume.synced === true || role === 'host';
            this.snapshotVersion = resume.sequence || 0;
            this.lastSnapshotVersion = resume.lastSequence || 0;
            events = resume.events;
            rev = Math.max(...events.map(e => e.rev)) + 1;
        }
        else
            resetStopped();
        renderRoom();
        renderControls();
        this.setProgress('正在連接中繼服務…');
        try {
            await new Promise((resolve, reject) => {
                let done = false, joined = false;
                const timer = setTimeout(() => fail(networkError('連線逾時，已停止等待。請確認全員使用新版，並嘗試更換網路後重試。 [R11]')), 29000);
                const success = () => { if (done || generation !== this.generation)
                    return; done = true; joined = true; clearTimeout(timer); this.connecting = false; resolve(); };
                const fail = e => { if (done)
                    return; done = true; clearTimeout(timer); reject(e); };
                this.cancelPending = () => fail(networkError('cancelled', 'cancelled'));
                this.peer = new RelayPeer(resume ? resume.peerId : role === 'host' ? CONFIG.roomPrefix + this.code : 'tw-beat-client-' + id(), resume?.uid || '');
                this.peer.on('progress', text => { if (generation === this.generation)
                    this.setProgress(text); });
                this.peer.on('open', peerId => {
                    if (generation !== this.generation)
                        return;
                    this.signalOnline = true;
                    this.recovering = false;
                    if (done) {
                        this.lastSeen = wallNow();
                        this.connectedAt = wallNow();
                        for (const c of this.clients.values())
                            c.lastSeen = wallNow();
                        if (this.role === 'guest') {
                            if (!this.connection || this.connection.closed)
                                this.connectGuest(generation);
                            else {
                                this.burstSync();
                                this.send(this.connection, this.packet('resync'));
                            }
                        }
                        else
                            this.broadcastSnapshot();
                        engine.invalidate();
                        engine.schedule();
                        renderRoom();
                        renderControls();
                        return;
                    }
                    this.connectedAt = wallNow();
                    if (role === 'host') {
                        this.code = peerId.slice(CONFIG.roomPrefix.length);
                        this.role = 'host';
                        this.session = resume ? resume.session : id();
                        this.synced = true;
                        this.offset = 0;
                        this.roster = [];
                        success();
                        this.updateRoster();
                        renderRoom();
                        renderControls();
                    }
                    else {
                        this.setProgress('中繼已連線，正在尋找房間 ' + this.code + '…');
                        this.connectGuest(generation, success, fail);
                    }
                });
                this.peer.on('connection', conn => { if (generation !== this.generation || this.role !== 'host') {
                    conn.on('open', () => conn.close());
                    return;
                } this.accept(conn, generation); });
                this.peer.on('error', e => { if (generation !== this.generation)
                    return; if (!joined)
                    fail(e);
                else
                    this.hold('relay-error'); });
                this.peer.on('disconnected', () => {
                    if (generation !== this.generation)
                        return;
                    this.signalOnline = false;
                    this.hold('relay-disconnected');
                });
                this.peer.on('close', () => { if (generation === this.generation && !joined)
                    fail(networkError(TEXT.lost)); });
            });
            if (generation !== this.generation)
                return false;
            this.cancelPending = null;
            renderRoom();
            renderControls();
            return true;
        }
        catch (e) {
            if (generation !== this.generation)
                return false;
            if (resume) {
                this.connecting = false;
                this.role = role;
                this.hold('restore-connection');
                return true;
            }
            this.leave(false);
            throw e;
        }
    }
    accept(conn, generation) {
        const entry = { conn, name: '', hello: false, audio: TEXT.audioOff, lastSeen: wallNow(), rtt: null, lastPong: 0, timing: null };
        if (this.clients.size >= CONFIG.maxPeople - 1 && !this.clients.has(conn.peer)) {
            conn.on('open', () => { this.send(conn, this.packet('denied', { message: '房間已達本版 12 人上限。' })); setTimeout(() => conn.close(), 200); });
            return;
        }
        const previous = this.clients.get(conn.peer);
        this.clients.set(conn.peer, entry);
        if (previous && previous.conn !== conn)
            previous.conn.close(false);
        conn.on('data', data => {
            if (generation !== this.generation || this.role !== 'host' || this.clients.get(conn.peer) !== entry || !data || data.app !== 'tw-beat' || data.v !== 2)
                return;
            entry.lastSeen = wallNow();
            if (data.type === 'hello') {
                this.readTiming(entry, data.timing);
                if (!entry.hello) {
                    entry.hello = true;
                    entry.name = cleanText(data.name, 16) || TEXT.guest;
                    entry.audio = cleanText(data.audio, 20);
                }
                this.send(conn, this.packet('welcome', { sequence: ++this.snapshotVersion, events: clone(events), roster: this.makeRoster() }));
                this.updateRoster();
            }
            else if (entry.hello && data.session === this.session) {
                if (data.type === 'ping' && Number.isFinite(data.t0) && typeof data.nonce === 'string' && wallNow() - entry.lastPong >= 30) {
                    const t1 = wallNow();
                    entry.lastPong = t1;
                    this.send(conn, this.packet('pong', { nonce: cleanText(data.nonce, 64), t0: data.t0, t1, t2: wallNow() }));
                }
                else if (data.type === 'status') {
                    this.readTiming(entry, data.timing);
                    entry.audio = cleanText(data.audio, 20);
                    entry.rtt = Number.isFinite(data.rtt) ? clamp(data.rtt, 0, 10000) : null;
                    this.updateRoster();
                }
                else if (data.type === 'resync') {
                    this.send(conn, this.snapshot());
                }
            }
        });
        const remove = () => { if (generation !== this.generation)
            return; if (this.clients.get(conn.peer) === entry) {
            this.clients.delete(conn.peer);
            this.updateRoster();
        } };
        conn.on('close', remove);
        conn.on('error', () => { try {
            conn.close();
        }
        catch (e) { } remove(); });
        setTimeout(() => { if (!entry.hello && this.clients.get(conn.peer) === entry) {
            conn.close();
            remove();
        } }, 10000);
    }
    receiveGuest(data) {
        if (this.role !== 'guest' || data?.session !== this.session)
            return;
        this.lastSeen = wallNow();
        this.recovering = false;
        this.signalOnline = true;
        if (data.type === 'snapshot')
            this.receiveSnapshot(data);
        else if (data.type === 'pong')
            this.pong(data);
        else if (data.type === 'sync-refresh') {
            this.burstSync();
            engine.resetOutputTiming();
            engine.invalidate();
            this.sendLocalStatus();
        }
        else if (data.type === 'roster') {
            this.roster = Array.isArray(data.people) ? data.people.slice(0, CONFIG.maxPeople) : [];
            renderRoom();
        }
        else if (data.type === 'bye')
            this.leave(true, '主持人已結束房間，節拍已停止。');
    }
    receiveSnapshot(data) {
        if (!Number.isSafeInteger(data.sequence) || data.sequence <= this.lastSnapshotVersion || !Array.isArray(data.events) || !data.events.length || data.events.length > 20)
            return;
        try {
            const next = data.events.map(e => { if (!e || !Number.isSafeInteger(e.rev) || ![e.at, e.anchor, e.runAt].every(Number.isFinite) || Math.abs(e.at) > 1e15 || Math.abs(e.anchor) > 1e15 || ![0, 1, 2].includes(e.countIn) || !Number.isFinite(e.barBase) || e.barBase < 0)
                throw Error('Bad snapshot'); return { rev: e.rev, at: e.at, anchor: e.anchor, playing: !!e.playing, title: cleanText(e.title) || TEXT.free, settings: validSettings(e.settings, true), countIn: e.countIn, barBase: Math.floor(e.barBase), runAt: e.runAt, phaseId: Number.isSafeInteger(e.phaseId) && e.phaseId > 0 ? e.phaseId : e.rev, syncEdit: e.syncEdit === true }; }).sort((a, b) => a.at - b.at || a.rev - b.rev);
            if (new Set(next.map(e => e.rev)).size !== next.length)
                return;
            this.lastSnapshotVersion = data.sequence;
            applyEvents(next);
            rev = Math.max(rev, ...next.map(e => e.rev));
            this.remember();
            renderRoom();
        }
        catch (e) {
            console.warn('Ignored invalid room snapshot');
        }
    }
    ping() {
        if (this.role !== 'guest' || !this.connection?.open || this.recovering)
            return;
        const t0 = wallNow(), nonce = id();
        this.pendingPings.set(nonce, t0);
        for (const [k, t] of this.pendingPings)
            if (t0 - t > 8000)
                this.pendingPings.delete(k);
        this.send(this.connection, this.packet('ping', { nonce, t0 }));
        this.lastPing = t0;
    }
    pong(data) {
        const t3 = wallNow(), t0 = this.pendingPings.get(data.nonce);
        this.pendingPings.delete(data.nonce);
        if (t0 === undefined || ![data.t1, data.t2].every(Number.isFinite) || data.t2 < data.t1)
            return;
        const rtt = (t3 - t0) - (data.t2 - data.t1), offset = ((data.t1 - t0) + (data.t2 - t3)) / 2;
        if (rtt < 0 || rtt > 3000 || !Number.isFinite(offset))
            return;
        this.samples = this.samples.filter(s => Number.isFinite(s.at) && t3 - s.at <= SYNC_CONFIG.windowMs);
        this.samples.push({ rtt, offset, at: t3 });
        if (this.samples.length > SYNC_CONFIG.maxSamples)
            this.samples.shift();
        const ranked = [...this.samples].sort((a, b) => a.rtt - b.rtt);
        const best = ranked.slice(0, Math.min(9, Math.max(3, Math.ceil(ranked.length * .4))));
        const middle = syncMedian(best.map(s => s.offset)), mad = syncMedian(best.map(s => Math.abs(s.offset - middle)));
        const stable = best.filter(s => Math.abs(s.offset - middle) <= Math.max(3, mad * 3));
        const offsets = stable.map(s => s.offset), target = syncMedian(offsets);
        this.rtt = Math.round(ranked[0].rtt);
        this.rttTail = ranked[Math.floor((ranked.length - 1) * .9)].rtt;
        this.spread = Math.round(Math.max(...offsets) - Math.min(...offsets));
        if (this.samples.length >= 5 && stable.length >= 3) {
            const wasSynced = this.synced;
            this.clockTarget = target;
            if (!wasSynced || !currentEvent().playing) {
                this.offset = target;
                this.lastRetimeOffset = target;
                engine.invalidate();
            }
            this.synced = true;
            this.lastGoodClockAt = t3;
            this.lastClockAdjust = t3;
            if (!wasSynced) {
                engine.schedule();
                toast('\u623f\u9593\u6821\u6642\u5b8c\u6210\uff0c\u6b63\u5728\u8ddf\u96a8\u4e3b\u6301\u4eba\u3002');
            }
            this.sendLocalStatus();
        }
        renderRoom();
        renderAudioStatus();
    }
    advanceClock() {
        if (this.role !== 'guest' || !this.synced || !Number.isFinite(this.clockTarget))
            return;
        const t = wallNow(), dt = clamp(t - (this.lastClockAdjust || t), 0, 500);
        this.lastClockAdjust = t;
        const limit = SYNC_CONFIG.slewMsPerSecond * dt / 1000;
        this.offset += clamp(this.clockTarget - this.offset, -limit, limit);
        if (Math.abs(this.offset - this.lastRetimeOffset) >= SYNC_CONFIG.retimeThresholdMs) {
            this.lastRetimeOffset = this.offset;
            engine.invalidate();
        }
    }
    burstSync() {
        this.lastSyncBurst = wallNow();
        for (const timer of this.syncTimers)
            clearTimeout(timer);
        this.syncTimers = [];
        this.pendingPings.clear();
        const generation = this.generation, session = this.session;
        for (let i = 0; i < 10; i++)
            this.syncTimers.push(setTimeout(() => { if (generation === this.generation && session === this.session)
                this.ping(); }, i * 150));
    }
    timingStatus() {
        const c = engine.sampleOutputTiming();
        return { version: SYNC_CONFIG.version, ready: engine.isReady() && !engine.gameOutputSuppressed && !document.hidden,
            synced: this.role !== 'guest' || (this.synced && wallNow() - (this.lastGoodClockAt || 0) < SYNC_CONFIG.windowMs),
            residualMs: this.role === 'guest' ? Math.abs((this.clockTarget || 0) - this.offset) : 0,
            leadMs: Math.ceil(engine.requiredLeadMs()), spreadMs: this.spread || 0, rttTailMs: this.rttTail || 0,
            source: state.autoLatency ? (c?.kind || 'unavailable') : 'off' };
    }
    readTiming(entry, t) {
        if (!t || t.version !== SYNC_CONFIG.version)
            return;
        const numeric = k => Number.isFinite(t[k]) && t[k] >= 0 ? t[k] : null;
        const lead = numeric('leadMs'), tail = numeric('rttTailMs'), spread = numeric('spreadMs'), residual = numeric('residualMs');
        if (lead === null || tail === null || spread === null || residual === null)
            return;
        entry.timing = { version: t.version, ready: t.ready === true, synced: t.synced === true,
            leadMs: clamp(lead, 0, 5000), rttTailMs: clamp(tail, 0, 3000), spreadMs: clamp(spread, 0, 3000), residualMs: clamp(residual, 0, 3000), at: wallNow() };
    }
    cancelStart() { this.startToken++; this.startPending = false; }
    repeatSnapshot() {
        for (const timer of this.repeatTimers)
            clearTimeout(timer);
        this.repeatTimers = [];
        const generation = this.generation, session = this.session;
        for (const ms of [80, 220])
            this.repeatTimers.push(setTimeout(() => {
                if (this.role === 'host' && this.generation === generation && this.session === session && !this.recovering)
                    this.broadcastSnapshot();
            }, ms));
    }
    localAudioStatus() { return !engine.isReady() ? TEXT.audioOff : state.mute || !state.volume ? TEXT.silent : this.role === 'guest' && !this.synced ? TEXT.syncing : TEXT.ready; }
    sendLocalStatus() { if (this.role === 'guest')
        this.send(this.connection, this.packet('status', { audio: this.localAudioStatus(), rtt: this.rtt, timing: this.timingStatus() }));
    else if (this.role === 'host')
        this.updateRoster(); }
    makeRoster() { return [{ name: this.name, role: 'host', audio: this.localAudioStatus() }, ...[...this.clients.values()].filter(c => c.hello).map(c => ({ name: c.name, role: 'guest', audio: c.audio }))]; }
    updateRoster() { if (this.role !== 'host')
        return; this.roster = this.makeRoster(); this.broadcast(this.packet('roster', { people: this.roster })); renderRoom(); }
    heartbeat() {
        const now = wallNow();
        this.advanceClock();
        if (this.recovering) {
            this.kickRecovery();
            return;
        }
        if (this.role === 'guest') {
            if (now - this.lastSeen > 12000) {
                this.hold('host-heartbeat');
                this.kickRecovery();
                return;
            }
            if (this.connection?.open && now - this.lastSyncBurst >= SYNC_CONFIG.burstMs)
                this.burstSync();
            if (now - this.lastPing >= SYNC_CONFIG.pingMs) {
                this.ping();
                this.sendLocalStatus();
            }
        }
        else if (this.role === 'host') {
            if (now - (this.lastHeartbeatSnapshot || 0) >= 1000) {
                this.lastHeartbeatSnapshot = now;
                this.broadcastSnapshot();
            }
            for (const [key, c] of [...this.clients])
                if (now - c.lastSeen > 20000) {
                    if (this.clients.get(key) !== c)
                        continue;
                    this.clients.delete(key);
                    try {
                        c.conn.close(false);
                    }
                    catch (_) { }
                    this.updateRoster();
                }
        }
        renderRecoveryControl();
    }
    resync() { if (this.role === 'guest') {
        this.samples = [];
        this.burstSync();
        this.send(this.connection, this.packet('resync'));
        toast('已重新取樣校時，不改變播放進度。');
    }
    else if (this.role === 'host') {
        this.broadcast(this.packet('sync-refresh'));
        this.broadcastSnapshot();
        toast('已重新傳送節奏狀態。');
    } }
    cancelAttempt() { if (this.connecting || this.role === 'connecting')
        this.leave(false); }
    leave(notify = true, message = '') {
        try {
            sessionStorage.removeItem('tempolive.room.resume.v3');
        }
        catch (_) { }
        this.cancelStart();
        for (const t of [...this.syncTimers, ...this.repeatTimers])
            clearTimeout(t);
        this.syncTimers = [];
        this.repeatTimers = [];
        const wasRole = this.role;
        this.generation++;
        this.cancelPending?.();
        this.cancelPending = null;
        this.connecting = false;
        this.recovering = false;
        if (wasRole === 'host')
            this.broadcast(this.packet('bye'));
        const p = this.peer;
        this.peer = null;
        this.connection = null;
        this.role = 'solo';
        this.clients.clear();
        if (this.backup && wasRole === 'guest') {
            state.settings = this.backup.settings;
            state.activeId = this.backup.activeId;
        }
        this.backup = null;
        this.code = '';
        this.session = '';
        this.offset = 0;
        this.clockTarget = 0;
        this.lastRetimeOffset = 0;
        this.lastGoodClockAt = 0;
        this.synced = false;
        this.samples = [];
        this.pendingPings.clear();
        this.rtt = null;
        this.roster = [];
        this.lastSnapshotVersion = 0;
        this.acceptedSession = false;
        this.signalOnline = true;
        resetStopped();
        renderRoom();
        renderControls();
        saveLocal();
        if (p)
            setTimeout(() => { try {
                p.destroy();
            }
            catch (e) { } }, 70);
        if (notify)
            toast(message || '已離開房間，回到單人模式。');
    }
}
const room = new Room();
let lastBeatLayout = '';
function renderBeatLayout(settings) {
    const locked = room.role === 'guest' || room.role === 'connecting' || room.recovering || settings.meter !== state.settings.meter;
    const layout = settings.meter + ':' + settings.accents.join(',') + ':' + locked;
    if (layout === lastBeatLayout)
        return;
    lastBeatLayout = layout;
    const track = $('beats');
    if (track.children.length !== settings.accents.length) {
        track.replaceChildren();
        settings.accents.forEach((_, i) => {
            const b = document.createElement('button');
            b.className = 'beat';
            I18N.set(b, i + 1);
            b.addEventListener('click', () => { const accents = [...state.settings.accents]; if (i >= accents.length)
                return; accents[i] = (accents[i] + 2) % 3; requestSettings({ accents }); });
            track.append(b);
        });
    }
    settings.accents.forEach((level, i) => {
        const b = track.children[i];
        b.dataset.level = level;
        b.disabled = locked;
        I18N.attr(b, 'aria-label', '第 ' + (i + 1) + ' 拍：' + [TEXT.rest, TEXT.normal, TEXT.strong][level] + '，點選切換');
    });
    lastVisualBeat = -2;
}
function renderControls() {
    const follower = room.role === 'guest', busy = room.role === 'connecting' || room.recovering, settings = follower ? desiredEvent().settings : state.settings;
    if (!follower)
        guestAudioRecoveryRequired = false;
    $('bpm').value = settings.bpm;
    $('bpmRange').value = settings.bpm;
    $('meter').value = settings.meter;
    $('countIn').value = settings.countIn;
    I18N.bind($('stageMeter'), () => settings.meter);
    I18N.bindAttr($('stageMeter'), 'aria-label', () => I18N.t('拍號') + ' ' + settings.meter);
    I18N.bindAttr($('stageMeter'), 'title', () => I18N.t('拍號') + ' ' + settings.meter);
    I18N.set($('tempoWord'), settings.bpm < 70 ? '慢板呼吸' : settings.bpm < 100 ? '從容前行' : settings.bpm < 140 ? '穩定律動' : settings.bpm < 190 ? '輕快推進' : '高速節奏');
    I18N.bind($('currentTitle'), () => { if (follower)
        return desiredEvent().title === TEXT.free ? I18N.t(TEXT.free) : desiredEvent().title; const song = state.songs.find(s => s.id === state.activeId); return song ? I18N.song(song) : I18N.t(TEXT.free); });
    I18N.bindAttr($('currentTitle'), 'title', () => $('currentTitle').textContent);
    for (const id of ['bpm', 'bpmRange', 'bpmMinus', 'bpmPlus', 'meter', 'countIn', 'tapBtn', 'saveCurrent', 'prevSong', 'nextSong', 'transportPrevSong', 'transportNextSong', 'freeMode'])
        $(id).disabled = follower || busy;
    document.querySelectorAll('[data-note]').forEach(b => { b.setAttribute('aria-pressed', String(Number(b.dataset.note) === localPlaybackSettings(settings).note)); b.disabled = room.role === 'connecting'; });
    I18N.bind($('noteLabel'), () => ['host', 'guest'].includes(room.role) ? localText('note') : I18N.t('音符細分'));
    if ($('localNoteHint')) {
        I18N.bind($('localNoteHint'), () => localText('noteHint'));
        $('localNoteHint').hidden = !['host', 'guest'].includes(room.role);
    }
    renderBeatLayout(currentEvent().playing ? currentEvent().settings : settings);
    I18N.set($('beatHint'), follower ? '節奏由主持人統一控制' : '點選拍點：重音 → 一般 → 靜音');
    const playing = desiredEvent().playing;
    const needsRecovery = follower && !state.mute && state.volume > 0 && (guestAudioRecoveryRequired || !engine.isReady());
    $('playBtn').disabled = room.role === 'connecting';
    setIcon($('playBtn'), follower ? (needsRecovery || state.mute ? 'volume' : 'muted') : (playing ? 'stop' : 'play'));
    $('playBtn').classList.toggle('audio-muted', follower && (needsRecovery || state.mute));
    I18N.set($('playBtn').querySelector('span'), follower ? (needsRecovery ? '恢復本機聲音' : state.mute ? TEXT.unmute : TEXT.muted) : (playing ? TEXT.stop : TEXT.start));
    I18N.bindAttr($('playBtn'), 'aria-label', () => $('playBtn').textContent.trim());
    I18N.set($('modeText'), follower ? '團隊收聽' : room.role === 'host' ? '房間主持' : busy ? '連線中' : TEXT.solo);
    if (room.startPending) {
        setIcon($('playBtn'), 'stop');
        I18N.bind($('playBtn').querySelector('span'), () => syncText('cancel'));
        $('playBtn').setAttribute('aria-label', syncText('cancel'));
    }
    renderAudioStatus();
    renderSongs();
    renderRecoveryControl();
    window.TempoliveMediaControls?.refresh();
}
function renderAudio() {
    if (!$('tone').options.length) {
        for (const [key, spec] of Object.entries(AUDIO_TONES))
            $('tone').append(I18N.option(spec.label, key));
    }
    $('audioPower').value = state.audioPower;
    I18N.set($('toneDescription'), AUDIO_TONES[state.tone].description);
    I18N.set($('audioPowerHint'), AUDIO_POWER[state.audioPower].description);
    $('volume').value = state.volume;
    $('volumeValue').value = state.volume + '%';
    I18N.set($('volumeValue'), state.volume + '%');
    $('tone').value = state.tone;
    $('latency').value = state.latency;
    $('latencyValue').value = state.latency;
    $('autoLatency').checked = state.autoLatency;
    $('keepAwake').checked = state.keepAwake;
    $('muteBtn').setAttribute('aria-pressed', String(state.mute));
    I18N.attr($('muteBtn'), 'aria-label', state.mute ? TEXT.unmute : TEXT.muted);
    setIcon($('muteBtn'), state.mute ? 'muted' : 'volume');
    const output = $('audioOutput').selectedOptions[0]?.textContent || TEXT.outputDefault;
    I18N.set($('audioSummary'), AUDIO_TONES[state.tone].label + ' · ' + AUDIO_POWER[state.audioPower].label);
    I18N.bindAttr($('audioSummary'), 'title', () => $('audioOutput').selectedOptions[0]?.textContent || I18N.t(TEXT.outputDefault));
}
function renderAudioStatus() {
    const follower = room.role === 'guest', needAudio = !engine.isReady() && (follower || desiredEvent().playing);
    if (follower && needAudio && !state.mute && state.volume > 0)
        guestAudioRecoveryRequired = true;
    window.TempoliveMediaControls?.refresh();
}
function renderSongs() {
    I18N.set($('songCount'), String(state.songs.length).padStart(2, '0'));
    const list = $('songList');
    list.replaceChildren();
    if (!state.songs.length) {
        const p = document.createElement('p');
        p.className = 'muted small';
        p.style.padding = '20px 8px';
        I18N.set(p, '還沒有歌曲，將目前的節奏存成第一首吧。');
        list.append(p);
    }
    state.songs.forEach((song, i) => {
        const li = document.createElement('li');
        li.className = 'song-item' + (song.id === state.activeId && room.role !== 'guest' ? ' selected' : '');
        const main = document.createElement('button');
        main.className = 'song-main';
        main.disabled = room.role === 'guest' || room.role === 'connecting' || room.recovering;
        I18N.bindAttr(main, 'aria-label', () => I18N.song(song) + ', ' + song.settings.bpm + ' BPM, ' + song.settings.meter);
        if (song.id === state.activeId)
            main.setAttribute('aria-current', 'true');
        const num = document.createElement('span');
        num.className = 'song-number';
        I18N.set(num, String(i + 1).padStart(2, '0'));
        const copy = document.createElement('span');
        copy.className = 'song-copy';
        const name = document.createElement('span');
        name.className = 'song-name';
        I18N.bind(name, () => I18N.song(song));
        const meta = document.createElement('span');
        meta.className = 'song-meta';
        I18N.set(meta, document.body.classList.contains('focus-mode') ? song.settings.bpm + ' BPM' : song.settings.bpm + ' BPM · ' + song.settings.meter + (song.sample ? ' · ' + TEXT.sample : ''));
        copy.append(name, meta);
        main.append(num, copy);
        main.addEventListener('click', () => selectSong(song.id, { autoPlay: true }));
        const edit = document.createElement('button');
        edit.className = 'icon-btn song-edit';
        I18N.bindAttr(edit, 'aria-label', () => I18N.t('編輯 ') + song.name);
        edit.innerHTML = '<svg><use href="#i-edit"/></svg>';
        edit.addEventListener('click', () => openSong(song.id));
        li.append(main, edit);
        list.append(li);
    });
    for (const id of ['prevSong', 'nextSong', 'transportPrevSong', 'transportNextSong'])
        $(id).disabled = state.songs.length === 0 || room.role === 'guest' || room.role === 'connecting' || room.recovering;
}
function renderRoom() {
    const live = room.role === 'host' || room.role === 'guest';
    $('roomIdle').hidden = live;
    $('roomLive').hidden = !live;
    $('createRoom').disabled = room.connecting;
    $('joinRoom').disabled = room.connecting;
    if (!live)
        return;
    I18N.set($('rolePill'), room.role === 'host' ? TEXT.host : TEXT.guest);
    I18N.set($('roomCode'), room.code);
    I18N.set($('roomHeading'), room.role === 'host' ? '我的團隊房間' : '已加入團隊房間');
    I18N.set($('roomConnection'), room.recovering ? (room.progress || '中繼中斷，重連中') : room.role === 'guest' && !room.synced ? '已連線，校時中' : '已連線 · 中繼同步');
    I18N.set($('memberCount'), (room.roster.length || 1) + ' 人在房間');
    $('memberList').replaceChildren();
    for (const person of room.roster) {
        const li = document.createElement('li');
        li.className = 'member';
        const avatar = document.createElement('span');
        avatar.className = 'avatar';
        I18N.bind(avatar, () => I18N.lang !== 'zh-Hant' ? (I18N.person(person).split(/\s+/).map(w => w[0]).join('').slice(0, 2) || 'P') : (cleanText(person.name, 1) || '人'));
        const name = document.createElement('span');
        name.className = 'member-name';
        I18N.bind(name, () => I18N.person(person) + (person.role === 'host' ? ' · ' + I18N.t(TEXT.host) : ''));
        const status = document.createElement('span');
        status.className = 'member-state';
        I18N.set(status, cleanText(person.audio, 20));
        li.append(avatar, name, status);
        $('memberList').append(li);
    }
    $('roomStats').hidden = room.role !== 'guest';
    I18N.set($('rttValue'), room.rtt === null ? '--' : room.rtt + ' ms');
    I18N.set($('syncValue'), !room.synced ? '校時中' : room.rtt > 150 || room.spread > 20 ? '網路波動' : '已校時');
    I18N.set($('connectionNote'), room.role === 'host' ? '四位數字是邀請碼，不是密碼。知道代碼的人可加入；關閉網頁會結束房間。' : '顯示的是網路往返延遲，不是耳機的實際聲音誤差。');
    I18N.set($('leaveRoom'), room.role === 'host' ? '結束房間' : '離開房間');
}
let lastVisualBeat = -1, lastVisualRev = -1, lastSecondText = '', lastInfo = '', lastStateText = '', wakeTick = 0;
const SCREEN_FLASH = Object.freeze({ minIntervalMs: 350, durationMs: 320, attackMs: 20, holdUntilMs: 140, darkPeak: .98, lightPeak: .94 });
const screenFlash = { key: '', lastPulse: -Infinity, pulseAt: -Infinity, peak: 0, count: 0, opacity: 0 };
function renderScreenFlashSetting() {
    $('screenFlashBtn').setAttribute('aria-checked', String(state.screenFlash));
    I18N.set($('screenFlashState'), state.screenFlash ? '\u5df2\u958b\u555f\uff0c\u50c5\u7bc0\u62cd\u5668\u5340\u584a\u767c\u5149' : '\u95dc\u9589\uff0c\u4e0d\u986f\u793a\u62cd\u9ede\u87a2\u5149');
}
function clearScreenFlash() {
    screenFlash.key = '';
    screenFlash.pulseAt = -Infinity;
    screenFlash.opacity = 0;
    $('beatScreenFlash').style.opacity = '0';
}
function updateScreenFlash(now, ev, perfNow = performance.now()) {
    const overlay = $('beatScreenFlash');
    if (!state.screenFlash || !ev.playing || !desiredEvent().playing || document.hidden || room.role === 'connecting' || (room.role === 'guest' && !room.synced) || $('rhythmGameDialog')?.open) {
        if (screenFlash.opacity || screenFlash.key)
            clearScreenFlash();
        return;
    }
    const m = metrics(ev.settings), beatMs = 60000 / ev.settings.bpm * m.beatQ;
    const elapsed = Math.max(0, now - ev.anchor), ordinal = Math.floor(elapsed / beatMs + 1e-7), beat = ordinal % m.n;
    const phaseId = ev.phaseId || ev.rev, key = phaseId + ':' + ordinal;
    if (key !== screenFlash.key) {
        screenFlash.key = key;
        const pre = ordinal < ev.countIn * m.n, level = pre ? (beat === 0 ? 2 : 1) : ev.settings.accents[beat];
        const q = beat * m.beatQ, onNote = pre || Math.abs(q / m.noteQ - Math.round(q / m.noteQ)) < 1e-6;
        const stride = Math.max(1, Math.ceil(SCREEN_FLASH.minIntervalMs / beatMs));
        const late = elapsed - ordinal * beatMs;
        if (level > 0 && onNote && ordinal % stride === 0 && late < Math.min(90, beatMs * .35) && perfNow - screenFlash.lastPulse >= SCREEN_FLASH.minIntervalMs) {
            screenFlash.lastPulse = perfNow;
            screenFlash.pulseAt = perfNow;
            screenFlash.peak = (state.theme === 'dark' ? SCREEN_FLASH.darkPeak : SCREEN_FLASH.lightPeak) * (level === 2 ? 1 : .78);
            screenFlash.count++;
        }
    }
    const age = perfNow - screenFlash.pulseAt, duration = SCREEN_FLASH.durationMs;
    let envelope = 0;
    if (age >= 0 && age < duration) {
        if (age < SCREEN_FLASH.attackMs)
            envelope = Math.sin(Math.PI * .5 * age / SCREEN_FLASH.attackMs) ** 2;
        else if (age <= SCREEN_FLASH.holdUntilMs)
            envelope = 1;
        else
            envelope = Math.cos(Math.PI * .5 * (age - SCREEN_FLASH.holdUntilMs) / (duration - SCREEN_FLASH.holdUntilMs)) ** 2;
    }
    const amount = envelope * screenFlash.peak;
    if (amount === 0 ? screenFlash.opacity !== 0 : Math.abs(amount - screenFlash.opacity) > .0001) {
        screenFlash.opacity = amount;
        overlay.style.opacity = String(amount);
    }
}
$('screenFlashBtn').addEventListener('click', () => {
    state.screenFlash = !state.screenFlash;
    clearScreenFlash();
    renderScreenFlashSetting();
    saveLocal();
});
document.addEventListener('visibilitychange', () => { if (document.hidden)
    clearScreenFlash(); });
function animate() {
    const now = hostNow(), ev = currentEvent(now), latest = desiredEvent(), pending = latest.at > now && latest.rev !== ev.rev;
    let beat = -1, status = TEXT.notStarted, info = TEXT.readyHint, counter = '00:00 · 第 0 小節';
    if (ev.playing && !(room.role === 'guest' && !room.synced)) {
        const m = metrics(ev.settings), elapsed = Math.max(0, now - ev.anchor), bar = Math.floor(elapsed / m.barMs), phase = (elapsed % m.barMs) / m.barMs;
        beat = Math.min(m.n - 1, Math.floor(phase * m.n));
        status = bar < ev.countIn ? TEXT.countIn : TEXT.playing;
        if (bar < ev.countIn) {
            info = '預備 ' + (bar + 1) + ' / ' + ev.countIn + ' 小節';
            counter = '預備拍 · ' + (beat + 1) + ' / ' + m.n;
        }
        else {
            const seconds = Math.max(0, Math.floor((now - ev.runAt) / 1000));
            counter = String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0') + ' · 第 ' + (bar - ev.countIn + ev.barBase + 1) + ' 小節';
            info = room.role === 'guest' ? '跟隨主持人 · ' + ev.settings.bpm + ' BPM' : ev.settings.bpm + ' BPM · ' + ev.settings.meter + ' · 四分音符為基準';
        }
        if ((elapsed % (m.barMs / m.n)) / (m.barMs / m.n) > .78)
            beat = -1;
    }
    if (pending) {
        const wait = Math.max(0, (latest.at - now) / 1000).toFixed(1);
        info = latest.playing ? (ev.playing ? (latest.syncEdit ? syncText('change') : TEXT.nextBar) + ' · ' + wait + ' 秒' : '將於 ' + wait + ' 秒後開始') : '將於 ' + wait + ' 秒後停止';
        if (!ev.playing)
            status = TEXT.waiting;
    }
    if (room.role === 'guest' && !room.synced) {
        status = TEXT.syncing;
        info = '正在校正裝置時間…';
        beat = -1;
    }
    if (room.recovering) {
        status = I18N.t('重連中');
        info = localText('hold');
    }
    if (room.startPending) {
        status = room.role === 'host' ? syncText('waiting') : TEXT.waiting;
        info = room.role === 'host' ? syncText('waiting') : TEXT.audioOff;
        beat = -1;
    }
    if (ev.rev !== lastVisualRev)
        renderBeatLayout(ev.playing ? ev.settings : (room.role === 'guest' ? latest.settings : state.settings));
    if (beat !== lastVisualBeat || ev.rev !== lastVisualRev) {
        const buttons = $('beats').children;
        for (let i = 0; i < buttons.length; i++)
            buttons[i].classList.toggle('active', i === beat);
        lastVisualBeat = beat;
        lastVisualRev = ev.rev;
    }
    if (lastSecondText !== counter) {
        I18N.set($('counter'), counter);
        lastSecondText = counter;
    }
    if (lastInfo !== info) {
        I18N.set($('transportInfo'), info);
        lastInfo = info;
    }
    if (lastStateText !== status) {
        I18N.set($('transportState'), status);
        lastStateText = status;
    }
    updateScreenFlash(now, ev);
    if (++wakeTick % 180 === 0 && desiredEvent().playing)
        requestWake();
    requestAnimationFrame(animate);
}
let editingSong = null, editingBase = null;
function selectSong(songId, { autoPlay = false } = {}) {
    if (room.role === 'guest' || room.role === 'connecting' || room.recovering)
        return;
    const song = state.songs.find(s => s.id === songId);
    if (!song)
        return;
    state.activeId = song.id;
    requestSettings(clone(song.settings), { songChange: true, immediate: true, keepAccents: true });
    if (autoPlay)
        return startPlayback();
}
function stepSong(direction) {
    if (!state.songs.length || room.role === 'guest' || room.role === 'connecting' || room.recovering)
        return;
    const count = state.songs.length, index = state.songs.findIndex(s => s.id === state.activeId);
    const target = index < 0 ? (direction > 0 ? 0 : count - 1) : (index + direction + count) % count;
    selectSong(state.songs[target].id);
}
function nextSong() { stepSong(1); }
function previousSong() { stepSong(-1); }
function openSong(songId = null, useCurrent = false) {
    if (!songId && state.songs.length >= CONFIG.maxSongs) {
        toast('歌單上限為 200 首，請先匯出備份並整理。');
        return;
    }
    editingSong = songId;
    const song = state.songs.find(s => s.id === songId);
    editingBase = clone(useCurrent ? state.settings : (song?.settings || state.settings));
    if (!song && !useCurrent) {
        editingBase.meter = '4/4';
        editingBase.note = 4;
        editingBase.countIn = 0;
        editingBase.accents = fitAccentCarry('4/4', accentCarryFrom(editingBase.accents));
    }
    I18N.set($('songDialogTitle'), song ? '編輯歌曲' : '新增歌曲');
    $('songName').value = song?.name || '';
    $('songBpm').value = editingBase.bpm;
    $('songMeter').value = editingBase.meter;
    $('songNote').value = editingBase.note;
    $('songCountIn').value = editingBase.countIn;
    $('deleteSong').hidden = !song;
    $('songOrder').hidden = !song;
    updateSongOrder();
    $('songDialog').showModal();
    setTimeout(() => $('songName').focus(), 20);
}
function updateSongOrder() { const index = state.songs.findIndex(s => s.id === editingSong); $('moveSongUp').disabled = index <= 0; $('moveSongDown').disabled = index < 0 || index === state.songs.length - 1; I18N.set($('songPosition'), (index + 1) + ' / ' + state.songs.length); }
function moveSong(delta) { const i = state.songs.findIndex(s => s.id === editingSong), j = i + delta; if (i < 0 || j < 0 || j >= state.songs.length)
    return; [state.songs[i], state.songs[j]] = [state.songs[j], state.songs[i]]; saveLocal(true); renderSongs(); updateSongOrder(); }
$('songForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = cleanText($('songName').value);
    if (!name) {
        $('songName').setCustomValidity(I18N.t('請輸入歌曲名稱'));
        $('songName').reportValidity();
        return;
    }
    const meter = $('songMeter').value, settings = validSettings({ bpm: Number($('songBpm').value), meter, note: Number($('songNote').value), countIn: Number($('songCountIn').value), accents: meter === editingBase.meter ? editingBase.accents : fitAccentCarry(meter, accentCarryFrom(editingBase.accents)) }, true);
    const song = { id: editingSong || id(), name, settings, sample: false }, index = state.songs.findIndex(s => s.id === editingSong);
    if (index >= 0)
        state.songs[index] = song;
    else
        state.songs.push(song);
    if (room.role !== 'guest' && room.role !== 'connecting' && !room.recovering) {
        state.activeId = song.id;
        requestSettings(settings, { immediate: true, songChange: index < 0, keepAccents: true });
    }
    const stored = saveLocal(true);
    renderSongs();
    $('songDialog').close();
    toast(stored ? TEXT.saved : '\u6b4c\u66f2\u5df2\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff0c\u4f46\u700f\u89bd\u5668\u7121\u6cd5\u5132\u5b58\uff1b\u8acb\u5148\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002');
});
$('songName').addEventListener('input', () => $('songName').setCustomValidity(I18N.t('')));
$('deleteSong').addEventListener('click', () => {
    const song = state.songs.find(s => s.id === editingSong);
    if (!song || !confirm(I18N.t('確定刪除「' + song.name + '」？')))
        return;
    state.songs = state.songs.filter(s => s.id !== editingSong);
    if (state.activeId === editingSong) {
        state.activeId = null;
        if (room.role !== 'guest')
            commitSettings();
    }
    const stored = saveLocal(true);
    renderControls();
    $('songDialog').close();
    toast(stored ? '\u5df2\u522a\u9664\u6b4c\u66f2\u3002' : '\u5df2\u5f9e\u76ee\u524d\u9801\u9762\u522a\u9664\uff0c\u4f46\u700f\u89bd\u5668\u672a\u80fd\u4fdd\u5b58\u8b8a\u66f4\uff1b\u8acb\u532f\u51fa\u6b4c\u55ae\u5099\u4efd\u3002');
});
$('moveSongUp').addEventListener('click', () => moveSong(-1));
$('moveSongDown').addEventListener('click', () => moveSong(1));
$('addSong').addEventListener('click', () => openSong());
$('saveCurrent').addEventListener('click', () => openSong(state.activeId, true));
$('prevSong').addEventListener('click', previousSong);
$('nextSong').addEventListener('click', nextSong);
$('transportNextSong').addEventListener('click', nextSong);
$('transportPrevSong').addEventListener('click', previousSong);
$('freeMode').addEventListener('click', () => { state.activeId = null; requestSettings({}, { immediate: true, songChange: true }); });
$('exportSongs').addEventListener('click', () => {
    const payload = { app: 'tw-metronome-setlist', version: 1, exportedAt: new Date().toISOString(), songs: state.songs };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'metronome-setlist-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    toast('已匯出歌單備份。');
});
$('importSongs').addEventListener('click', () => $('importFile').click());
$('importFile').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file)
        return;
    try {
        if (file.size > 2000000)
            throw Error('large');
        const data = JSON.parse(await file.text());
        if (data.app !== 'tw-metronome-setlist' || data.version !== 1 || !Array.isArray(data.songs) || data.songs.length > CONFIG.maxSongs)
            throw Error('format');
        const songs = data.songs.map(s => { const name = cleanText(s.name); if (!name)
            throw Error('name'); return { id: id(), name, sample: !!s.sample, settings: validSettings(s.settings, true) }; });
        if (!confirm(I18N.t('匯入 ' + songs.length + ' 首歌曲，並取代此瀏覽器原有歌單？原歌單請先匯出備份。')))
            return;
        state.songs = songs;
        state.activeId = null;
        if (room.role !== 'guest')
            commitSettings();
        const stored = saveLocal(true);
        renderControls();
        toast(stored ? '\u5df2\u532f\u5165 ' + songs.length + ' \u9996\u6b4c\u66f2\u3002' : '\u5df2\u532f\u5165\u6b4c\u55ae\uff0c\u4f46\u50c5\u4fdd\u7559\u5728\u76ee\u524d\u9801\u9762\uff1b\u8acb\u78ba\u8a8d\u700f\u89bd\u5668\u5141\u8a31\u5132\u5b58\u8cc7\u6599\u3002');
    }
    catch (e) {
        toast('無法匯入：請選擇由本節拍器匯出、2 MB 以下的有效 JSON 歌單。');
    }
});
$('playBtn').addEventListener('click', togglePlay);
(() => {
    const buttons = [$('bpmMinus'), $('bpmPlus')];
    let held = null, suppressed = null;
    const permitted = () => !document.hidden && !room.recovering &&
        (room.role === 'solo' || room.role === 'host') && !document.querySelector('dialog[open]') &&
        !document.body.classList.contains('tour-active');
    function finish(cancelClick = false) {
        if (!held)
            return;
        const previous = held;
        held = null;
        clearTimeout(previous.timer);
        previous.button.removeAttribute('data-tempo-holding');
        if (previous.repeated || cancelClick)
            suppressed = { button: previous.button, until: performance.now() + 900 };
        try {
            if (previous.button.hasPointerCapture?.(previous.pointerId))
                previous.button.releasePointerCapture(previous.pointerId);
        }
        catch (_) { }
    }
    function advance(button, direction, amount = 1) {
        if (button.disabled || !permitted())
            return false;
        const bpm = clamp(state.settings.bpm + direction * amount, CONFIG.minBpm, CONFIG.maxBpm);
        if (bpm === state.settings.bpm)
            return false;
        requestSettings({ bpm });
        return true;
    }
    function repeat() {
        const current = held;
        if (!current)
            return;
        if (current.button.disabled || !permitted()) {
            finish(true);
            return;
        }
        const duration = performance.now() - current.started;
        const amount = duration >= 2500 ? 5 : duration >= 1200 ? 2 : 1;
        const interval = duration >= 2500 ? 90 : duration >= 1200 ? 110 : 160;
        current.repeated = true;
        if (!advance(current.button, current.direction, amount)) {
            finish(true);
            return;
        }
        if (held === current)
            current.timer = setTimeout(repeat, interval);
    }
    buttons.forEach((button, index) => {
        const direction = index === 0 ? -1 : 1;
        button.style.setProperty('-webkit-touch-callout', 'none');
        const hint = () => I18N.lang === 'en' ?
            (direction > 0 ? 'Increase' : 'Decrease') + ' 1 BPM; hold to adjust faster' :
            (direction > 0 ? '\u589e\u52a0' : '\u6e1b\u5c11') + ' 1 BPM\uff0c\u9577\u6309\u53ef\u52a0\u901f\u8abf\u6574';
        I18N.bindAttr(button, 'aria-label', hint);
        I18N.bindAttr(button, 'title', () => hint() + " ");
        button.addEventListener('pointerdown', event => {
            if (event.button !== 0 || event.isPrimary === false || button.disabled || !permitted())
                return;
            finish(true);
            suppressed = null;
            held = { button, direction, pointerId: event.pointerId, started: performance.now(), repeated: false, timer: null };
            button.setAttribute('data-tempo-holding', '');
            held.timer = setTimeout(repeat, 350);
            try {
                button.setPointerCapture(event.pointerId);
            }
            catch (_) { }
        });
        button.addEventListener('pointermove', event => {
            if (!held || held.button !== button || held.pointerId !== event.pointerId)
                return;
            const rect = button.getBoundingClientRect(), margin = event.pointerType === 'touch' ? 6 : 0;
            if (event.clientX < rect.left - margin || event.clientX > rect.right + margin ||
                event.clientY < rect.top - margin || event.clientY > rect.bottom + margin)
                finish(true);
        });
        button.addEventListener('lostpointercapture', event => {
            if (held?.button === button && held.pointerId === event.pointerId)
                finish(true);
        });
        button.addEventListener('contextmenu', event => event.preventDefault());
        button.addEventListener('dragstart', event => event.preventDefault());
        button.addEventListener('click', event => {
            if (suppressed?.button === button && performance.now() <= suppressed.until && event.detail !== 0) {
                suppressed = null;
                event.preventDefault();
                return;
            }
            suppressed = null;
            advance(button, direction);
        });
    });
    document.addEventListener('pointerup', event => { if (held?.pointerId === event.pointerId)
        finish(); }, true);
    document.addEventListener('pointercancel', event => { if (held?.pointerId === event.pointerId)
        finish(true); }, true);
    document.addEventListener('visibilitychange', () => { if (document.hidden)
        finish(true); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape')
        finish(true); }, true);
    window.addEventListener('blur', () => finish(true));
    window.addEventListener('pagehide', () => finish(true));
})();
$('bpmRange').addEventListener('input', e => requestSettings({ bpm: Number(e.target.value) }));
function acceptBpm() { const raw = Number($('bpm').value); requestSettings({ bpm: Number.isFinite(raw) && raw > 0 ? clamp(raw, 40, 300) : state.settings.bpm }); }
$('bpm').addEventListener('change', acceptBpm);
$('bpm').addEventListener('keydown', e => { if (e.key === 'Enter') {
    acceptBpm();
    $('bpm').blur();
} });
$('meter').addEventListener('change', e => requestSettings({ meter: e.target.value }));
$('countIn').addEventListener('change', e => requestSettings({ countIn: Number(e.target.value) }));
document.querySelectorAll('[data-note]').forEach(b => b.addEventListener('click', () => chooseLocalNote(Number(b.dataset.note))));
let taps = [], tapReset;
function tapTempo() {
    if (room.role === 'guest' || room.role === 'connecting' || room.recovering)
        return;
    const now = performance.now();
    if (taps.length && now - taps[taps.length - 1] > 2200)
        taps = [];
    taps.push(now);
    if (taps.length > 7)
        taps.shift();
    $('tapBtn').classList.add('tapped');
    clearTimeout(tapReset);
    tapReset = setTimeout(() => $('tapBtn').classList.remove('tapped'), 100);
    if (taps.length >= 2) {
        const intervals = taps.slice(1).map((t, i) => t - taps[i]);
        const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        requestSettings({ bpm: clamp(Math.round(60000 / avg), 40, 300) });
    }
    else
        toast('再點一次測速，連續多點幾次更準確。');
}
$('tapBtn').addEventListener('click', tapTempo);
$('volume').addEventListener('input', e => { state.volume = Number(e.target.value); engine.setVolume(); saveLocal(); renderAudio(); room.sendLocalStatus(); });
$('muteBtn').addEventListener('click', () => { if (room.role === 'guest' && (guestAudioRecoveryRequired || !engine.isReady())) {
    restoreGuestAudio();
    return;
} state.mute = !state.mute; engine.setVolume(); if (!state.mute)
    engine.ensure().then(() => { engine.invalidate(); engine.schedule(); room.sendLocalStatus(); }).catch(e => toast(e.message)); renderAudio(); renderControls(); room.sendLocalStatus(); });
$('tone').addEventListener('change', e => { if (!hasOwn(AUDIO_TONES, e.target.value))
    return; state.tone = e.target.value; engine.cancelPreview(); engine.invalidate(); engine.schedule(); saveLocal(); renderAudio(); });
$('audioPower').addEventListener('change', e => { if (!hasOwn(AUDIO_POWER, e.target.value))
    return; state.audioPower = e.target.value; engine.cancelPreview(); engine.setVolume(); engine.invalidate(); engine.schedule(); saveLocal(); renderAudio(); if (state.audioPower === 'boost')
    toast('已切換加強，請從較低音量開始試聽。'); });
function setLatency(value) { state.latency = Math.round(clamp(Number(value) || 0, -SYNC_CONFIG.manualLimitMs, SYNC_CONFIG.manualLimitMs) / 5) * 5; engine.invalidate(); engine.schedule(); renderAudio(); saveLocal(); }
$('latency').addEventListener('input', e => setLatency(e.target.value));
$('latencyValue').addEventListener('change', e => setLatency(e.target.value));
$('autoLatency').addEventListener('change', e => { state.autoLatency = e.target.checked; engine.resetOutputTiming(); engine.invalidate(); engine.schedule(); saveLocal(); });
$('testAudio').addEventListener('click', () => engine.test().catch(e => toast(e.message)));
function currentTheme() {
    const visible = document.documentElement.dataset.theme;
    return visible === 'dark' || visible === 'light' ? visible : (state.theme === 'dark' ? 'dark' : 'light');
}
function renderThemeControls(theme = state.theme) {
    const dark = theme === 'dark';
    setIcon($('themeBtn'), dark ? 'moon' : 'sun');
    $('themeBtn').setAttribute('aria-checked', String(dark));
    I18N.attr($('themeBtn'), 'title', dark ? '切換淺色模式' : '切換深色模式');
    I18N.set($('themeState'), dark ? '目前使用深色外觀' : '目前使用淺色外觀');
}
function applyTheme() {
    const dark = state.theme === 'dark';
    document.documentElement.dataset.theme = state.theme;
    document.querySelector('meta[name="theme-color"]').content = dark ? '#191a18' : '#f7f7f5';
    renderThemeControls(state.theme);
}
$('themeBtn').addEventListener('click', () => {
    state.theme = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme();
    saveLocal(true);
});
function toggleFocus() {
    const focused = document.body.classList.toggle('focus-mode');
    const button = $('focusBtn');
    button.setAttribute('aria-pressed', String(focused));
    const label = focused ? '還原節拍器大小' : '放大節拍器區塊';
    I18N.attr(button, 'title', label);
    I18N.attr(button, 'aria-label', label);
    setIcon(button, focused ? 'restore-panel' : 'focus');
    renderSongs();
    window.TempoliveStageView?.layout();
    window.scrollTo({ top: 0, behavior: 'auto' });
}
$('focusBtn').addEventListener('click', toggleFocus);
$('helpBtn').addEventListener('click', () => $('helpDialog').showModal());
$('settingsBtn').addEventListener('click', () => {
    const panel = $('settingsDialog');
    if (panel.open)
        return;
    renderAudio();
    renderThemeControls(currentTheme());
    renderScreenFlashSetting();
    window.TempoliveAudioContinuity?.refreshSetting();
    $('settingsNotice').hidden = true;
    panel.showModal();
    panel.scrollTop = 0;
    $('settingsBtn').setAttribute('aria-expanded', 'true');
});
$('settingsDialog').addEventListener('keydown', event => {
    if (event.key !== 'Tab')
        return;
    const panel = $('settingsDialog');
    const controls = [...panel.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),a[href],[tabindex]:not([tabindex="-1"])')].filter(el => el.getClientRects().length);
    if (!controls.length)
        return;
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    }
    else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});
$('settingsDialog').addEventListener('close', () => {
    if ($('settingsDialog').open)
        return;
    $('settingsBtn').setAttribute('aria-expanded', 'false');
    $('settingsNotice').hidden = true;
    $('settingsBtn').focus({ preventScroll: true });
});
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => $(b.dataset.close).close()));
document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) {
    const r = d.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        d.close();
} }));
document.addEventListener('keydown', e => {
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey || document.querySelector('dialog[open]') || e.target.closest('input,select,textarea,[contenteditable=true]'))
        return;
    if (e.code === 'Space') {
        if (e.target.closest('button'))
            return;
        e.preventDefault();
        togglePlay();
    }
    else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        tapTempo();
    }
    else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        nextSong();
    }
    else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFocus();
    }
    else if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && room.role !== 'guest') {
        e.preventDefault();
        requestSettings({ bpm: state.settings.bpm + (e.key === 'ArrowUp' ? 1 : -1) * (e.shiftKey ? 5 : 1) });
    }
});
const supportsSink = () => !!((window.AudioContext || window.webkitAudioContext)?.prototype?.setSinkId && navigator.mediaDevices);
async function refreshDevices() {
    if (!navigator.mediaDevices?.enumerateDevices)
        return;
    const selected = $('audioOutput').value, devices = await navigator.mediaDevices.enumerateDevices(), outputs = devices.filter(d => d.kind === 'audiooutput' && d.deviceId && d.deviceId !== 'default');
    $('audioOutput').replaceChildren(I18N.option(TEXT.outputDefault, ''));
    outputs.forEach((d, i) => $('audioOutput').append(I18N.option(() => d.label || I18N.t('音訊裝置 ') + (i + 1), d.deviceId)));
    if (outputs.some(d => d.deviceId === selected))
        $('audioOutput').value = selected;
    else if (selected && engine.ctx?.setSinkId) {
        await engine.ctx.setSinkId('');
        toast('原輸出裝置已中斷，改用系統預設輸出。');
    }
    renderAudio();
}
$('chooseOutput').addEventListener('click', async () => {
    if (!supportsSink()) {
        I18N.set($('outputHint'), '此瀏覽器使用系統的音訊輸出。要用手機外放，請在控制中心選擇手機喇叭或中斷藍牙耳機，調高媒體音量，再點「試聽」。不需要耳機或麥克風權限即可播放。');
        toast('可使用手機喇叭；請確認系統輸出與媒體音量，再點試聽。');
        return;
    }
    try {
        await engine.ensure();
        if (navigator.mediaDevices.selectAudioOutput) {
            const out = await navigator.mediaDevices.selectAudioOutput();
            await engine.ctx.setSinkId(out.deviceId);
            engine.resetOutputTiming();
            await refreshDevices();
            if (![...$('audioOutput').options].some(o => o.value === out.deviceId))
                $('audioOutput').append(I18N.option(() => out.label || I18N.t('已選輸出'), out.deviceId));
            $('audioOutput').value = out.deviceId;
            engine.invalidate();
            renderAudio();
            toast('已切換音訊輸出。');
        }
        else
            $('permissionDialog').showModal();
    }
    catch (e) {
        toast('未切換輸出：請允許裝置權限，或改由系統選擇耳機。');
    }
});
$('grantDevicePermission').addEventListener('click', async () => {
    $('permissionDialog').close();
    let stream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        await refreshDevices();
        $('audioOutput').focus();
        toast('已更新裝置清單，請選擇要使用的輸出。');
    }
    catch (e) {
        toast('無法取得裝置清單，請改由系統選擇輸出。');
    }
    finally {
        stream?.getTracks().forEach(t => t.stop());
        engine.configurePlaybackSession();
        engine.restoreOutput();
    }
});
$('audioOutput').addEventListener('change', async () => { try {
    await engine.ensure();
    await engine.ctx.setSinkId($('audioOutput').value);
    engine.resetOutputTiming();
    engine.invalidate();
    engine.schedule();
    renderAudio();
    toast('已切換聲音輸出，請試聽確認。');
}
catch (e) {
    $('audioOutput').value = typeof engine.ctx?.sinkId === 'string' ? engine.ctx.sinkId : '';
    toast('無法切換輸出，原輸出保持不變。');
} });
if (navigator.mediaDevices?.addEventListener)
    navigator.mediaDevices.addEventListener('devicechange', () => refreshDevices().catch(() => { }).finally(() => { engine.resetOutputTiming(); engine.configurePlaybackSession(); window.TempoliveAudioContinuity?.check('devicechange'); }));
let wakeLock = null, wakePending = false;
let guestAudioRecoveryRequired = false;
function armGuestRecoveryOnReturn() {
    if (document.hidden)
        return;
    if (!engine.isReady() && desiredEvent().playing)
        guestAudioRecoveryRequired = true;
    window.TempoliveAudioContinuity?.check('foreground');
    room.kickRecovery();
    renderRecoveryControl();
}
async function requestWake() {
    if (!state.keepAwake || !desiredEvent().playing || document.hidden || wakeLock || wakePending)
        return;
    if (!navigator.wakeLock) {
        I18N.set($('wakeStatus'), ' · 此瀏覽器不支援');
        return;
    }
    wakePending = true;
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        if (!desiredEvent().playing || !state.keepAwake) {
            await releaseWake();
            return;
        }
        I18N.set($('wakeStatus'), ' · 已啟用');
        wakeLock.addEventListener('release', () => { wakeLock = null; I18N.set($('wakeStatus'), ''); });
    }
    catch (e) {
        I18N.set($('wakeStatus'), ' · 未取得權限');
    }
    finally {
        wakePending = false;
    }
}
async function releaseWake() { const lock = wakeLock; wakeLock = null; if (lock)
    try {
        await lock.release();
    }
    catch (e) { } I18N.set($('wakeStatus'), ''); }
$('keepAwake').addEventListener('change', e => { state.keepAwake = e.target.checked; saveLocal(); if (state.keepAwake)
    requestWake();
else
    releaseWake(); });
document.addEventListener('visibilitychange', () => { room.remember(); engine.schedule(); if (!document.hidden) {
    armGuestRecoveryOnReturn();
    requestWake();
    if (room.role === 'guest' && !room.recovering)
        room.burstSync();
    renderControls();
} });
window.addEventListener('focus', armGuestRecoveryOnReturn);
window.addEventListener('pageshow', armGuestRecoveryOnReturn);
window.addEventListener('online', () => { $('offlineBanner').hidden = true; });
window.addEventListener('offline', () => { $('offlineBanner').hidden = false; });
window.addEventListener('pagehide', () => { localSaveDirty = true; flushLocal({ quiet: true }); room.remember(); });
window.addEventListener('online', () => room.kickRecovery());
document.addEventListener('resume', () => { armGuestRecoveryOnReturn(); engine.schedule(); });
const ROOM_UI_COPY = Object.freeze({ "zh-Hant": { "create": "\u5efa\u7acb\u623f\u9593", "join": "\u52a0\u5165\u623f\u9593", "role": "\u6a02\u5668\uff0f\u89d2\u8272", "choose": "\u8acb\u9078\u64c7", "add": "\u65b0\u589e\u6a02\u5668\uff0f\u89d2\u8272", "code": "\u623f\u9593\u4ee3\u78bc", "codeHint": "4 \u4f4d\u6578\u5b57", "auto": "\u81ea\u52d5\u64ad\u5831", "test": "\u8a66\u807d", "custom": "\u6a02\u5668\uff0f\u89d2\u8272\u540d\u7a31", "confirm": "\u65b0\u589e" }, "en": { "create": "Create room", "join": "Join room", "role": "Instrument / role", "choose": "Select", "add": "Add instrument or role", "code": "Room code", "codeHint": "4-digit code", "auto": "Auto-read messages", "test": "Test voice", "custom": "Instrument / role name", "confirm": "Add" } });
function roomUiText(key) { return (ROOM_UI_COPY[I18N.lang] || ROOM_UI_COPY['zh-Hant'])[key]; }
let dialogRoomRole = 'host', roomFormBusy = false, roomDialogToken = 0;
function openRoomDialog(role) {
    roomDialogToken++;
    dialogRoomRole = role;
    roomFormBusy = false;
    I18N.set($('roomError'), '');
    $('roomSubmit').disabled = false;
    $('displayName').value = state.name;
    $('joinCode').value = '';
    $('joinCodeField').hidden = role !== 'guest';
    $('joinCode').required = role === 'guest';
    I18N.bind($('roomDialogTitle'), () => roomUiText(dialogRoomRole === 'host' ? 'create' : 'join'));
    I18N.bind($('roomSubmit'), () => roomUiText(dialogRoomRole === 'host' ? 'create' : 'join'));
    $('roomDialog').showModal();
    (role === 'guest' ? $('joinCode') : $('instrumentPicker')).focus({ preventScroll: true });
}
$('createRoom').addEventListener('click', () => openRoomDialog('host'));
$('joinRoom').addEventListener('click', () => openRoomDialog('guest'));
function normalizeCode(value) { return String(value).normalize('NFKC').replace(/[^0-9]/g, '').slice(0, 4); }
$('joinCode').addEventListener('input', e => { e.target.value = normalizeCode(e.target.value); });
$('joinCode').addEventListener('paste', e => { const text = e.clipboardData?.getData('text'); if (text !== undefined) {
    e.preventDefault();
    $('joinCode').value = normalizeCode(text);
} });
$('roomForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (roomFormBusy)
        return;
    const name = cleanText($('displayName').value, 16), code = normalizeCode($('joinCode').value);
    if (!name) {
        I18N.set($('roomError'), '請輸入暱稱。');
        return;
    }
    if (dialogRoomRole === 'guest' && !/^[0-9]{4}$/.test(code)) {
        I18N.set($('roomError'), '請輸入正確的四位數字代碼。');
        return;
    }
    if (!navigator.onLine) {
        I18N.set($('roomError'), '目前離線，請先連上網路。');
        return;
    }
    const token = ++roomDialogToken;
    roomFormBusy = true;
    $('roomSubmit').disabled = true;
    I18N.set($('roomSubmit'), '連線中…');
    I18N.set($('roomError'), '正在連接中繼服務…');
    state.name = name;
    saveLocal();
    engine.ensure().catch(() => { renderAudioStatus(); });
    try {
        const ok = await room.enter(dialogRoomRole, name, code);
        if (ok && token === roomDialogToken) {
            $('roomDialog').close();
            toast(dialogRoomRole === 'host' ? '房間已建立，請分享四位數字給團員。' : '已加入房間，開始校時。');
        }
    }
    catch (error) {
        if (token === roomDialogToken && $('roomDialog').open)
            I18N.set($('roomError'), peerErrorMessage(error));
    }
    finally {
        if (token === roomDialogToken) {
            roomFormBusy = false;
            $('roomSubmit').disabled = false;
            I18N.set($('roomSubmit'), dialogRoomRole === 'host' ? '重試建立' : '重試加入');
        }
    }
});
$('roomDialog').addEventListener('close', () => { roomDialogToken++; roomFormBusy = false; if (room.connecting)
    room.cancelAttempt(); });
$('leaveRoom').addEventListener('click', () => { if (room.role === 'host' && !confirm(I18N.t('結束房間將停止所有參與者的節拍，確定結束？')))
    return; room.leave(); });
$('copyCode').addEventListener('click', async () => {
    try {
        if (navigator.clipboard?.writeText)
            await navigator.clipboard.writeText(room.code);
        else {
            const area = document.createElement('textarea');
            area.value = room.code;
            area.style.position = 'fixed';
            area.style.opacity = '0';
            document.body.append(area);
            area.select();
            const copied = document.execCommand('copy');
            area.remove();
            if (!copied)
                throw Error('copy');
        }
        toast('已複製房間代碼：' + room.code);
    }
    catch (e) {
        toast('請手動複製代碼：' + room.code);
    }
});
$('resyncBtn').addEventListener('click', () => room.resync());
window.MetronomeDiagnostics = Object.freeze({ snapshot: () => ({ version: '2.1.7-stage-controls', role: room.role, code: room.code, synced: room.synced, recovering: room.recovering, offsetMs: room.offset, rttMs: room.rtt, settings: clone(room.role === 'guest' ? desiredEvent().settings : state.settings), playing: currentEvent().playing, desiredPlaying: desiredEvent().playing, events: clone(events), audioState: engine.ctx?.state || 'not-created', audioReady: engine.isReady(), audioSession: engine.sessionMode, masterGain: engine.master?.gain.value ?? 0, gameAudioSuppressed: engine.gameOutputSuppressed, gameOutputGain: engine.gameOutputGate?.gain.value ?? 1, audioPower: state.audioPower, screenFlash: state.screenFlash, screenFlashCount: screenFlash.count, tone: state.tone, volume: state.volume, bufferCount: engine.buffers.size, activeVoices: engine.voices.size, scheduledClicks: engine.totalScheduled, droppedClicks: engine.dropped, queued: engine.loops.size, renderer: 'audio-thread-bar-loop', scheduledLoops: engine.totalLoops, localNote: localPlaybackSettings(room.role === 'guest' ? desiredEvent().settings : state.settings).note, holdover: room.recovering, loopCount: engine.loopSources.size, localMute: state.mute, songCount: state.songs.length, relay: 'WSS', connectionStage: room.progress, localSave: { ...localSaveStatus, pending: localSaveDirty } }) });
applyTheme();
renderScreenFlashSetting();
renderControls();
renderAudio();
renderRoom();
$('offlineBanner').hidden = navigator.onLine;
if (!supportsSink()) {
    $('audioOutput').disabled = true;
    I18N.set($('chooseOutput'), '系統輸出說明');
}
if (storageProblem)
    setTimeout(() => toast('此瀏覽器的儲存資料無法讀取，已使用預設值。請使用歌單匯出備份。'), 300);
requestAnimationFrame(animate);
function restorePreviousRoom() {
    try {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (!['reload', 'back_forward'].includes(navigation?.type))
            return;
        const s = JSON.parse(sessionStorage.getItem('tempolive.room.resume.v3') || 'null');
        const invited = new URL(location.href).searchParams.get('room');
        if (invited !== null && (!/^\d{4}$/.test(invited) || invited !== s?.code)) return;
        if (!s || s.version !== 3 || Date.now() - s.savedAt > 6 * 3600000 || Date.now() < s.savedAt || !['host', 'guest'].includes(s.role) || !/^\d{4}$/.test(s.code) || !Array.isArray(s.events) || !s.events.length || s.events.length > 20)
            return;
        if (![s.peerId, s.uid, s.session].every(v => typeof v === 'string' && /^[-a-zA-Z0-9]{1,100}$/.test(v)))
            return;
        s.events = s.events.map(e => { if (!Number.isSafeInteger(e.rev) || ![e.at, e.anchor, e.runAt, e.barBase].every(Number.isFinite) || ![0, 1, 2].includes(e.countIn))
            throw Error('Invalid saved timeline'); return { ...e, title: cleanText(e.title), settings: validSettings(e.settings, true), playing: !!e.playing }; });
        if (!Number.isFinite(s.offset) || Math.abs(s.offset) > 86400000)
            return;
        room.enter(s.role, s.name, s.code, s).then(() => { engine.ensure().catch(() => renderRecoveryControl()); }).catch(() => renderRecoveryControl());
    }
    catch (error) {
        console.warn('Room resume unavailable', error);
    }
}
setTimeout(restorePreviousRoom, 0);
;
(() => {
    const openButton = document.getElementById('openRhythmGame');
    const dialog = document.getElementById('rhythmGameDialog');
    const closeButton = document.getElementById('closeRhythmGame');
    const frame = document.getElementById('rhythmGameFrame') || document.getElementById('rhythmGameFrameTemplate')?.content.querySelector('iframe');
    const loading = document.getElementById('rhythmGameLoading');
    const note = document.getElementById('rhythmActiveNotice');
    const volumeInput = document.getElementById('rhythmGameVolume');
    const volumeOutput = document.getElementById('rhythmGameVolumeValue');
    const volumeKey = 'tw.metronome.rhythm-game.volume.v1';
    let gameVolume = 100;
    try {
        const stored = localStorage.getItem(volumeKey);
        if (stored !== null && stored.trim() !== '' && Number.isFinite(Number(stored)))
            gameVolume = Math.max(0, Math.min(100, Math.round(Number(stored))));
    }
    catch (e) { }
    let loaded = false, loadingStarted = false;
    const bridge = () => { try {
        return frame.contentWindow?.RhythmGameBridge;
    }
    catch (e) {
        return null;
    } };
    function setGameVolume(value, persist = true) {
        const next = Number(value);
        if (!Number.isFinite(next))
            return;
        gameVolume = Math.max(0, Math.min(100, Math.round(next)));
        volumeInput.value = String(gameVolume);
        volumeOutput.value = gameVolume + '%';
        I18N.set(volumeOutput, gameVolume + '%');
        I18N.attr(volumeInput, 'aria-valuetext', gameVolume === 0 ? '靜音' : gameVolume + '%');
        bridge()?.volume(gameVolume);
        if (persist) {
            try {
                localStorage.setItem(volumeKey, String(gameVolume));
            }
            catch (e) { }
        }
    }
    volumeInput.addEventListener('input', () => setGameVolume(volumeInput.value));
    setGameVolume(gameVolume, false);
    let audioVisit = null, audioEpoch = 0, closing = false, lastAudioTransition = 'idle';
    const transportPlaying = () => !!(currentEvent().playing || desiredEvent().playing);
    function acquireMetronomeAudio(reason) {
        if (!dialog.open || closing)
            return;
        if (audioVisit)
            return;
        audioVisit = { id: ++audioEpoch, wasPlaying: transportPlaying(), wasMuted: state.mute, volume: state.volume, reason };
        lastAudioTransition = 'held';
        engine.setGameOutputSuppressed(true);
        note.hidden = !audioVisit.wasPlaying;
        if (!note.hidden)
            I18N.set(note, '已暫時關閉本機節拍聲。遊戲結束或返回後自動恢復；房間其他人的節拍不受影響。');
    }
    async function releaseMetronomeAudio(reason, silent = Promise.resolve()) {
        const visit = audioVisit;
        if (!visit)
            return;
        audioVisit = null;
        const epoch = ++audioEpoch;
        lastAudioTransition = 'releasing';
        const shouldWake = visit.wasPlaying && transportPlaying() && !state.mute && state.volume > 0 && !room.recovering && !document.hidden;
        let wake = Promise.resolve(), wakeError = null;
        if (shouldWake && !engine.isReady()) {
            try {
                wake = engine.ensure().catch(error => { wakeError = error; });
            }
            catch (error) {
                wakeError = error;
            }
        }
        try {
            await Promise.all([Promise.resolve(silent).catch(() => { }), wake]);
        }
        catch (e) { }
        if (epoch !== audioEpoch || audioVisit)
            return;
        engine.setGameOutputSuppressed(false);
        lastAudioTransition = reason;
        if (shouldWake && transportPlaying() && !room.recovering) {
            engine.schedule();
        }
        if (wakeError) {
            toast('瀏覽器尚未恢復節拍聲，請回主畫面重新啟用聲音。');
        }
        if (dialog.open) {
            note.hidden = !visit.wasPlaying;
            if (!note.hidden)
                I18N.set(note, transportPlaying() && !state.mute && state.volume > 0 && !wakeError ?
                    '遊戲已結束，已恢復本機節拍聲。再玩一次時會自動切換回遊戲聲音。' :
                    '遊戲已結束，保留目前的停止、靜音與音量設定。');
        }
    }
    function settleGameAudio(reason) {
        bridge()?.finishAudio?.();
        return releaseMetronomeAudio(reason);
    }
    function gameAudioSignal(action, source) {
        if (source !== frame.contentWindow || !dialog.open || closing)
            return false;
        if (action === 'begin') {
            acquireMetronomeAudio('game-start');
            return true;
        }
        if (action === 'complete') {
            const snapshot = bridge()?.snapshot();
            if (snapshot?.state !== 'GAME_OVER')
                return false;
            void settleGameAudio('game-complete');
            return true;
        }
        if (action === 'failed') {
            void settleGameAudio('game-start-failed');
            return true;
        }
        return false;
    }
    window.TempoliveGameAudio = Object.freeze({ signal: gameAudioSignal });
    function theme() { bridge()?.theme(document.documentElement.dataset.theme || 'light'); }
    function open() {
        if (dialog.open)
            return;
        closing = false;
        dialog.showModal();
        openButton.setAttribute('aria-expanded', 'true');
        acquireMetronomeAudio('game-open');
        if (!loadingStarted) {
            loadingStarted = true;
            try {
                frame.srcdoc = JSON.parse(document.getElementById('rhythmGameSource').textContent);
                if (!frame.isConnected)
                    document.getElementById('rhythmGameFrameTemplate').replaceWith(frame);
                I18N.attr(frame, 'title', '節奏記憶挑戰');
            }
            catch (error) {
                loadingStarted = false;
                I18N.set(loading, '遊戲無法載入，請重新開啟。');
                void releaseMetronomeAudio('load-failed');
            }
        }
        else if (loaded) {
            theme();
            bridge()?.show();
        }
        closeButton.focus({ preventScroll: true });
    }
    function close() {
        if (!dialog.open)
            return;
        closing = true;
        const silent = bridge()?.hide();
        dialog.close();
        void releaseMetronomeAudio('game-closed', silent);
    }
    openButton.addEventListener('click', open);
    closeButton.addEventListener('click', close);
    dialog.addEventListener('cancel', e => { e.preventDefault(); close(); });
    dialog.addEventListener('click', e => {
        if (e.target !== dialog)
            return;
        const r = dialog.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
            close();
    });
    dialog.addEventListener('close', () => {
        if (dialog.open)
            return;
        closing = true;
        const silent = bridge()?.hide();
        void releaseMetronomeAudio('game-closed', silent);
        openButton.setAttribute('aria-expanded', 'false');
        const snapshot = bridge()?.snapshot();
        if (snapshot) {
            const action = ['START', 'GAME_OVER'].includes(snapshot.state) ? '節奏小遊戲' : '繼續節奏挑戰';
            I18N.attr(openButton, 'title', action + (snapshot.highScore > 0 ? '｜最高 ' + snapshot.highScore + ' 分' : '') + "");
            I18N.attr(openButton, 'aria-label', action + "");
        }
        openButton.focus({ preventScroll: true });
    });
    frame.addEventListener('load', () => {
        if (!loadingStarted || !bridge())
            return;
        loaded = true;
        loading.hidden = true;
        setGameVolume(gameVolume, false);
        theme();
        if (dialog.open)
            bridge().show();
        else
            bridge().hide();
    });
    window.addEventListener('message', event => {
        if (event.source !== frame.contentWindow)
            return;
        if (event.data?.type === 'rhythm-game-close')
            close();
        else if (event.data?.type === 'rhythm-game-audio')
            gameAudioSignal(event.data.action, event.source);
    });
    new MutationObserver(theme).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('pagehide', () => { closing = true; audioVisit = null; audioEpoch++; engine.setGameOutputSuppressed(false); bridge()?.hide(); });
    window.MetronomeGameDiagnostics = Object.freeze({ snapshot: () => ({ integrationVersion: '1.17.1-game-audio-switch', metronomeBase: '1.17.1', loaded, open: dialog.open, gameVolume, localAudioHeld: engine.gameOutputSuppressed, previouslyPlaying: audioVisit?.wasPlaying ?? false, audioTransition: lastAudioTransition, game: bridge()?.snapshot() || null }) });
})();
;
(() => {
    'use strict';
    const C = Object.freeze({ version: 1, storageKey: 'tempolive.band.v1', ttl: 20000, receiptLife: 120000, maxHistory: 20, maxQueue: 4, minSendGap: 700, maxCustom: 12,
        instruments: ['鋼琴', '鍵盤', '木吉他', '電吉他', '貝斯', '鼓', '主領', '歌唱', '音控'],
        phrases: [{ id: 'fast', label: '太快', say: '慢一點', hint: '請慢一點' }, { id: 'slow', label: '太慢', say: '快一點', hint: '請快一點' }, { id: 'more', label: '多一點', say: '多一點', hint: '' }, { id: 'less', label: '少一點', say: '少一點', hint: '' }, { id: 'monitor-up', label: '監聽大', say: '監聽大一點', hint: '監聽大一點' }, { id: 'monitor-down', label: '監聽小', say: '監聽小一點', hint: '監聽小一點' }, { id: 'help', label: '要幫忙', say: '需要幫忙', hint: '' }] });
    const $b = id => document.getElementById(id), now = () => hostNow(), uid = () => id();
    const text = (v, n = 40) => String(v ?? '').normalize('NFKC').replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2066-\u2069]/g, '').trim().slice(0, n);
    const isId = v => typeof v === 'string' && /^[-a-zA-Z0-9]{1,80}$/.test(v);
    const MANDARIN_RATE = Object.freeze({ normal: 1.2, min: .9, max: 1.5, step: .05 });
    function mandarinVoice(voice) {
        const lang = String(voice?.lang || '').replace(/_/g, '-');
        return /^(?:zh|cmn)(?:-|$)/i.test(lang) && !/(?:^|-)(?:HK|MO|yue)(?:-|$)/i.test(lang) &&
            !/(?:cantonese|yue|espeak|festival|flite)/i.test(String(voice?.name || ''));
    }
    function pickMandarinVoice(voices, uri = '') {
        const usable = voices.filter(mandarinVoice), chosen = usable.find(v => v.voiceURI === uri);
        if (chosen)
            return chosen;
        const rank = v => { const lang = String(v.lang).replace(/_/g, '-'); return (/(?:^|-)TW(?:-|$)/i.test(lang) ? 100 : /Hant/i.test(lang) ? 70 : /^(?:zh|cmn)-(?:CN|Hans)/i.test(lang) ? 40 : 20) + (v.localService ? 8 : 0) + (/enhanced|premium|natural|\u589e\u5f37|\u512a\u8cea/i.test(v.name) ? 4 : 0); };
        return [...usable].sort((a, b) => rank(b) - rank(a))[0] || null;
    }
    const prefs = { zhVoiceRate: 1.2, instrument: '', customInstruments: [], customPhrases: [], autoSpeak: true, volume: 100, voiceURI: '', voiceEnURI: '' };
    try {
        const s = JSON.parse(localStorage.getItem(C.storageKey) || 'null');
        if (s) {
            prefs.instrument = text(s.instrument, 16);
            prefs.customInstruments = Array.isArray(s.customInstruments) ? [...new Set(s.customInstruments.map(x => text(x, 16)).filter(x => x && !C.instruments.includes(x)))].slice(0, 12) : [];
            prefs.customPhrases = Array.isArray(s.customPhrases) ? [...new Set(s.customPhrases.map(x => text(x)).filter(Boolean))].slice(0, 12) : [];
            prefs.autoSpeak = s.autoSpeak !== false;
            prefs.volume = Number.isFinite(s.volume) ? Math.min(100, Math.max(0, s.volume)) : 100;
            prefs.zhVoiceRate = Number.isFinite(s.zhVoiceRate) && s.zhVoiceRate >= .9 && s.zhVoiceRate <= 1.5 ? s.zhVoiceRate : 1.2;
            prefs.voiceURI = text(s.voiceURI, 240);
            prefs.voiceEnURI = text(s.voiceEnURI, 240);
            ;
        }
    }
    catch (e) { }
    let storageError = false;
    function save() { try {
        localStorage.setItem(C.storageKey, JSON.stringify(prefs));
    }
    catch (e) {
        storageError = true;
    } }
    const statusText = { pending: '等待送達', accepted: '主持人已接收', received: '已送達', queued: '已送達，等待播報', speaking: '正在播報', played: '裝置已完成播報', confirmed: '對方已確認', blocked: '已送達，語音未啟用', muted: '已送達，語音音量為零', disabled: '已送達，自動播報關閉', failed: '已送達，播報失敗', expired: '已送達，已逾播報時限', busy: '已送達，語音佇列已滿', unsupported: '對方需更新版本', offline: '對方離線／尚未確認送達', noack: '逾時未確認送達', interrupted: '裝置無法同時播放語音', rejected: '未送出' };
    let route = '', lastRender = '', targetSig = '', historySig = '', phraseSig = '', instrumentSig = '', lastStatusAt = 0, toastTimer;
    let selectedTarget = '', selectedPhrase = '', selectedInstrument = prefs.instrument, sendLock = 0, activeAlert = null, alertShownAt = 0, alertHideTimer = 0;
    let composerStep = 'targets', sending = false, focusEpoch = 0, customComposing = false, lastCompositionEnd = -Infinity;
    let session = '', inbox = [], outbox = [], ledger = new Map(), seen = new Map(), rate = new Map(), requests = new Map(), recipientIds = [];
    const currentId = () => room.peer?.id || '';
    const online = () => ['host', 'guest'].includes(room.role) && !room.recovering && !room.connecting && room.signalOnline && (room.role === 'host' || (room.connection?.open && room.synced));
    const allInstruments = () => [...C.instruments, ...prefs.customInstruments.filter(x => !C.instruments.includes(x))];
    const shortRole = name => name === '鼓' ? '鼓手' : name;
    const getPeople = () => Array.isArray(room.roster) ? room.roster.filter(p => isId(p.id)) : [];
    const self = () => getPeople().find(p => p.id === currentId()) || { id: currentId(), name: room.name || prefs.instrument, instrument: room.name || prefs.instrument };
    function messagePhrase(m, language = I18N.lang) { const preset = C.phrases.find(p => p.id === m.phraseId); return preset ? I18N.t(preset.say, language) : m.text; }
    function speakLabel(label, language, instrument) { if (language === 'zh-Hant')
        return shortRole(label); const name = I18N.person({ name: label, instrument }, language); return name.replace(/^Drums(?= |$)/, 'Drummer'); }
    function voiceLanguage(language = I18N.lang) { return language === 'en' ? 'en-US' : 'zh-TW'; }
    function voiceMatches(voice, language = I18N.lang) { return language === 'en' ? nativeVoiceAllowed(voice, language) : mandarinVoice(voice); }
    const safeMessage = m => m && isId(m.id) && isId(m.senderId) && typeof m.senderLabel === 'string' && typeof m.targetLabel === 'string' && typeof m.text === 'string' && m.text.length <= 40 && Array.isArray(m.targetIds) && m.targetIds.length <= CONFIG.maxPeople && m.targetIds.every(isId) && Number.isFinite(m.createdAt) && Number.isFinite(m.expiresAt) && m.expiresAt - m.createdAt <= C.ttl + 100;
    function notify(message) { if ($b('bandDialog').open) {
        I18N.set($b('bandInlineNotice'), message);
        $b('bandInlineNotice').hidden = false;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => $b('bandInlineNotice').hidden = true, 5000);
    }
    else
        toast(message); }
    function spoken(m) {
        if (I18N.lang === 'en')
            return nativeSpoken(m, I18N.lang);
        if (I18N.lang !== 'en') {
            const end = /[.!?。！？]$/.test(m.text) ? '' : '。';
            return shortRole(m.senderLabel) + '說：' + m.targetLabel + '，' + m.text + end;
        }
        const target = ['所有人', '全部人'].includes(m.targetLabel) ? 'Everyone' : I18N.person({ name: m.targetLabel, instrument: m.targetInstrument });
        return speakLabel(m.senderLabel, 'en', m.senderInstrument) + ' says: ' + target + ', ' + (messagePhrase(m, 'en').startsWith('I ') ? messagePhrase(m, 'en') : messagePhrase(m, 'en').replace(/^./, c => c.toLowerCase())) + '.';
    }
    function localMessage(m) { return { id: m.id, senderId: m.senderId, senderLabel: text(m.senderLabel, 24), targetLabel: text(m.targetLabel, 24), text: text(m.text), targetIds: [...m.targetIds], createdAt: m.createdAt, expiresAt: m.expiresAt, phraseId: C.phrases.some(p => p.id === m.phraseId) ? m.phraseId : 'custom', senderInstrument: text(m.senderInstrument || '', 16), targetInstrument: text(m.targetInstrument || '', 16) }; }
    function sendToHost(type, more) { if (room.role === 'guest' && room.connection?.open && !room.recovering)
        room.send(room.connection, room.packet(type, more)); }
    function deliver(id, type, data) { if (id === currentId()) {
        receivePacket({ type, ...data });
        return;
    } const entry = room.clients.get(id); if (entry?.hello && entry.conn.open)
        room.send(entry.conn, room.packet(type, data)); }
    function announceStatus() { const t = performance.now(); if (t - lastStatusAt < 150)
        return; lastStatusAt = t; if (room.role === 'guest')
        room.sendLocalStatus();
    else if (room.role === 'host')
        room.updateRoster(); }
    const LIVE_VOICE_REVISION = '2.5.0-english-native';
    const NATIVE_RATE = 1;
    function nativeVoiceAllowed(v, language) {
        const tag = String(v?.lang || '').replace(/_/g, '-');
        if (!new RegExp('^' + language + '(?:-|$)', 'i').test(tag))
            return false;
        return !/(?:espeak|festival|flite|formant|\b(?:albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|organ|trinoids|whisper|zarvox|wobble)\b)/i.test(String(v.name || '') + ' ' + String(v.voiceURI || ''));
    }
    function pickNativeVoice(voices, language, uri = '') {
        const available = voices.filter(v => nativeVoiceAllowed(v, language));
        const chosen = available.find(v => v.voiceURI === uri);
        if (chosen)
            return chosen;
        const locale = 'en-us';
        const score = v => {
            const name = String(v.name || '') + ' ' + String(v.voiceURI || '');
            return (v.localService ? 100 : 0) + (/premium|enhanced|natural|neural/i.test(name) ? 50 : 0) +
                (String(v.lang).replace(/_/g, '-').toLowerCase() === locale ? 30 : 0) +
                (v.default ? 5 : 0) + (/\b(?:Samantha|Anna)\b/i.test(name) ? 2 : 0);
        };
        return [...available].sort((a, b) => score(b) - score(a))[0] || null;
    }
    const NATIVE_TEST = Object.freeze({ en: 'Voice alerts are on. Please follow the beat.' });
    const NATIVE_PHRASES = Object.freeze({
        en: Object.freeze({ fast: 'please slow down', slow: 'please speed up', more: 'a little more, please', less: 'a little less, please', 'monitor-up': 'please turn up the monitor', 'monitor-down': 'please turn down the monitor', help: 'I need help' })
    });
    const NATIVE_ROLES = Object.freeze({
        en: ['pianist', 'keyboard player', 'acoustic guitarist', 'electric guitarist', 'bass player', 'drummer', 'worship leader', 'vocalist', 'sound engineer']
    });
    function nativeRole(label, explicit, language, from = false) {
        const raw = String(label || '').trim(), suffix = raw.match(/\s+(\d+)$/)?.[1] || '';
        let index = -1;
        for (const candidate of [explicit, label]) {
            const clean = String(candidate || '').trim().replace(/\s*\d+$/, '').replace(/\u624b$/, '');
            index = C.instruments.findIndex(x => x === clean || x === candidate);
            if (index >= 0)
                break;
        }
        if (index >= 0) {
            const role = (NATIVE_ROLES[language])[index] + (suffix ? ' ' + suffix : '');
            return language === 'en' && from ? 'the ' + role : role;
        }
        const guest = raw.match(/^(?:\u8a2a\u5ba2|guest|gast)\s*(\d*)$/i);
        const person = guest ? ('guest') + (guest[1] ? ' ' + guest[1] : '') : (I18N.person({ name: raw, instrument: explicit }, language) || ('band member'));
        return person;
    }
    function nativeSpoken(m, language) {
        const preset = C.phrases.find(p => p.id === m.phraseId) || C.phrases.find(p => p.say === m.text);
        const phrase = preset ? NATIVE_PHRASES[language][preset.id] : String(m.text || '').trim();
        const all = ['\u6240\u6709\u4eba', '\u5168\u90e8\u4eba'].includes(m.targetLabel);
        const target = all ? ('Everyone') : nativeRole(m.targetLabel, m.targetInstrument, language);
        const sender = nativeRole(m.senderLabel, m.senderInstrument, language, true);
        const targetText = target.replace(/^./, c => c.toLocaleUpperCase(language));
        const ending = /[.!?\u3002\uff01\uff1f]$/.test(phrase) ? '' : '.';
        return ('Message from ') + sender + '. ' + targetText + ', ' + phrase + ending;
    }
    const NATIVE_ERRORS = Object.freeze({
        en: { unavailable: 'This browser does not provide system speech. Your text messages are still available.', missing: 'No usable English voice is available. Select or install an English system voice, then tap Enable / Test. The old recordings will not be played.', empty: 'The voice message is empty.', start: 'Speech did not start. Tap Enable / Test and check the selected English voice.', blocked: 'Tap Enable / Test to allow speech playback.', failed: 'English speech failed. Try another English voice. Your text message remains available.', timeout: 'Speech timed out. Please test the selected voice again.', conflict: 'System speech conflicted with the local metronome. Only this voice alert was stopped; your text message remains visible.' }
    });
    class Speaker {
        constructor() { this.armed = false; this.problem = ''; this.voices = []; this.queue = []; this.active = null; this.counter = 0; this.refresh(); if (window.speechSynthesis?.addEventListener)
            window.speechSynthesis.addEventListener('voiceschanged', () => this.refresh()); }
        refresh() { try {
            this.voices = window.speechSynthesis?.getVoices() || [];
        }
        catch (e) {
            this.voices = [];
        } renderVoices(); }
        available(language = I18N.lang) { return !!(window.speechSynthesis && window.SpeechSynthesisUtterance); }
        voice(language = I18N.lang) { if (language === 'zh-Hant')
            return pickMandarinVoice(this.voices, prefs.voiceURI); return pickNativeVoice(this.voices, language, prefs.voiceEnURI); }
        status() { if (!this.available())
            return '不支援語音'; if (!prefs.autoSpeak)
            return '僅顯示文字'; if (!prefs.volume)
            return '語音靜音'; if (this.problem)
            return '需要重新試聽'; return this.armed ? '語音已啟用' : '待啟用語音'; }
        arm() {
            if (this.active)
                return;
            this.refresh();
            this.problem = '';
            const language = I18N.lang;
            if (language === 'zh-Hant') {
                engine.ensure().catch(() => renderRecoveryControl());
                this.enqueue({ test: true, text: '\u8a9e\u97f3\u63d0\u9192\u5df2\u555f\u7528\u3002\u8acb\u8ddf\u4e0a\u76ee\u524d\u7bc0\u62cd\u3002', language, speechRate: prefs.zhVoiceRate, expiresAt: now() + C.ttl }, true);
                return;
            }
            engine.ensure().catch(() => renderRecoveryControl());
            this.enqueue({ test: true, text: NATIVE_TEST[language], language, expiresAt: now() + C.ttl }, true);
        }
        enqueue(item, manual = false) {
            if (!this.available(item.language || I18N.lang)) {
                this.reject(item, 'failed', '此瀏覽器不支援語音合成，仍可接收文字。');
                return;
            }
            if (prefs.volume === 0) {
                this.reject(item, 'muted', '語音音量目前為零。');
                return;
            }
            if (!manual && !prefs.autoSpeak) {
                this.reject(item, 'disabled');
                return;
            }
            if (!manual && !this.armed) {
                this.reject(item, 'blocked');
                return;
            }
            if (!manual && now() > item.expiresAt) {
                this.reject(item, 'expired');
                return;
            }
            if (this.queue.length >= C.maxQueue) {
                this.reject(item, 'busy');
                return;
            }
            this.queue.push({ ...item, manual, language: item.language || I18N.lang, speechRate: item.speechRate ?? prefs.zhVoiceRate });
            if (item.id)
                receipt(item.id, 'queued');
            this.pump();
        }
        reject(item, state, message = '') { if (item.id)
            receipt(item.id, state); if (item.test || message) {
            this.problem = message || '語音無法播放';
            notify(this.problem);
        } renderVoiceState(); announceStatus(); }
        pumpMandarin(item) {
            const synth = window.speechSynthesis;
            if (!synth || !window.SpeechSynthesisUtterance) {
                this.reject(item, 'failed', '\u6b64\u700f\u89bd\u5668\u7121\u6cd5\u4f7f\u7528\u7cfb\u7d71\u570b\u8a9e\u3002\u4ecd\u4fdd\u7559\u5b8c\u6574\u6587\u5b57\uff0c\u4e0d\u6703\u6539\u64ad\u820a\u5408\u6210\u97f3\u6a94\u3002');
                setTimeout(() => this.pump(), 70);
                return;
            }
            this.refresh();
            const voice = this.voice('zh-Hant'), message = String(item.text || '').trim();
            if (!message || (this.voices.length && !voice)) {
                this.reject(item, 'failed', '\u88dd\u7f6e\u672a\u63d0\u4f9b\u53ef\u7528\u7684\u570b\u8a9e\u8072\u97f3\uff0c\u8acb\u5b89\u88dd\u6216\u9078\u64c7\u570b\u8a9e\u5f8c\u518d\u8a66\u807d\u3002');
                setTimeout(() => this.pump(), 70);
                return;
            }
            const utter = new SpeechSynthesisUtterance(message);
            utter.lang = voice?.lang || 'zh-TW';
            if (voice)
                utter.voice = voice;
            utter.rate = Math.min(MANDARIN_RATE.max, Math.max(MANDARIN_RATE.min, Number(item.speechRate) || MANDARIN_RATE.normal));
            utter.pitch = 1;
            utter.volume = prefs.volume / 100;
            const context = engine.ctx, job = { item, utter, mandarin: true, safe: false, started: false, done: false, timer: null, guardTimer: null, listener: null, context, finish: null };
            this.active = job;
            this.lastMandarin = { text: message, rate: utter.rate, language: utter.lang, voice: voice?.name || 'system-default', result: 'requested' };
            const finish = (status, reason = '') => {
                if (job.done || this.active !== job)
                    return;
                job.done = true;
                clearTimeout(job.timer);
                clearTimeout(job.guardTimer);
                context?.removeEventListener?.('statechange', job.listener);
                this.active = null;
                this.lastMandarin = { ...this.lastMandarin, result: status };
                if (status === 'played') {
                    this.armed = true;
                    this.problem = '';
                }
                else if (['failed', 'interrupted', 'blocked'].includes(status)) {
                    this.armed = false;
                    if (reason)
                        this.problem = reason;
                }
                if (['failed', 'interrupted'].includes(status)) {
                    const blocked = this.queue.filter(next => next.language === 'zh-Hant');
                    this.queue = this.queue.filter(next => next.language !== 'zh-Hant');
                    for (const next of blocked)
                        if (next.id)
                            receipt(next.id, 'blocked');
                }
                if (item.id)
                    receipt(item.id, status);
                if (item.test && reason)
                    notify(reason);
                renderVoiceState();
                announceStatus();
                setTimeout(() => this.pump(), 70);
            };
            job.finish = finish;
            function stopNative() { try {
                synth.cancel();
            }
            catch (_) { } }
            const guard = () => {
                if (job.done)
                    return;
                const wants = desiredEvent().playing && !state.mute && state.volume > 0 && !engine.gameOutputSuppressed;
                if (!wants || !context || context.state === 'running') {
                    clearTimeout(job.guardTimer);
                    job.guardTimer = null;
                    return;
                }
                if (job.guardTimer)
                    return;
                job.guardTimer = setTimeout(() => {
                    job.guardTimer = null;
                    if (job.done || context.state === 'running' || !desiredEvent().playing || state.mute)
                        return;
                    finish('interrupted', '\u7cfb\u7d71\u8a9e\u97f3\u8207\u672c\u6a5f\u7bc0\u62cd\u767c\u751f\u97f3\u8a0a\u885d\u7a81\uff0c\u5df2\u505c\u6b62\u672c\u6b21\u8a9e\u97f3\u4e26\u4fdd\u7559\u6587\u5b57\u3002\u5176\u4ed6\u5718\u54e1\u4e0d\u53d7\u5f71\u97ff\u3002');
                    stopNative();
                    window.TempoliveAudioContinuity?.check('speech-focus-released');
                }, 300);
            };
            job.listener = guard;
            context?.addEventListener?.('statechange', guard);
            utter.onstart = () => {
                if (job.done)
                    return;
                job.started = true;
                this.armed = true;
                this.problem = '';
                clearTimeout(job.timer);
                this.lastMandarin = { ...this.lastMandarin, result: 'speaking' };
                if (item.id)
                    receipt(item.id, 'speaking');
                renderVoiceState();
                announceStatus();
                guard();
                job.timer = setTimeout(() => { finish('failed', '\u7cfb\u7d71\u8a9e\u97f3\u64ad\u653e\u903e\u6642\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u3002'); stopNative(); }, Math.min(45000, Math.max(12000, message.length * 450 / utter.rate)));
            };
            utter.onend = () => finish(job.started ? 'played' : 'failed', job.started ? '' : '\u7cfb\u7d71\u672a\u78ba\u8a8d\u958b\u59cb\u64ad\u5831\uff0c\u8acb\u91cd\u65b0\u8a66\u807d\u3002');
            utter.onerror = e => finish('failed', e.error === 'not-allowed' ? '\u8acb\u5148\u6309\u300c\u555f\u7528\uff0f\u8a66\u807d\u300d\uff0c\u5141\u8a31\u7cfb\u7d71\u8a9e\u97f3\u64ad\u653e\u3002' : '\u7cfb\u7d71\u570b\u8a9e\u64ad\u5831\u5931\u6557\uff0c\u8acb\u9078\u64c7\u5176\u4ed6\u570b\u8a9e\u8072\u97f3\u5f8c\u518d\u8a66\u807d\u3002');
            job.timer = setTimeout(() => { finish('failed', '\u7cfb\u7d71\u8a9e\u97f3\u5c1a\u672a\u958b\u59cb\uff0c\u8acb\u91cd\u65b0\u555f\u7528\u6216\u9078\u64c7\u570b\u8a9e\u8072\u97f3\u3002'); stopNative(); }, 6500);
            try {
                if (synth.paused)
                    synth.resume();
                synth.speak(utter);
            }
            catch (_) {
                finish('failed', '\u7121\u6cd5\u555f\u7528\u7cfb\u7d71\u570b\u8a9e\uff0c\u4ecd\u53ef\u95b1\u8b80\u6587\u5b57\u8a0a\u606f\u3002');
            }
        }
        pumpNative(item) {
            const language = item.language, words = NATIVE_ERRORS[language], synth = window.speechSynthesis;
            const reject = reason => { this.armed = false; this.reject(item, 'failed', reason); setTimeout(() => this.pump(), 70); };
            if (!synth || !window.SpeechSynthesisUtterance) {
                reject(words.unavailable);
                return;
            }
            this.refresh();
            const voice = this.voice(language), message = String(item.text || '').trim();
            if (!message) {
                reject(words.empty);
                return;
            }
            if (this.voices.length && !voice) {
                reject(words.missing);
                return;
            }
            const utter = new SpeechSynthesisUtterance(message);
            utter.lang = voice?.lang || voiceLanguage(language);
            if (voice)
                utter.voice = voice;
            utter.rate = NATIVE_RATE;
            utter.pitch = 1;
            utter.volume = prefs.volume / 100;
            const context = engine.ctx, job = { item, utter, native: true, safe: false, started: false, done: false, timer: null, guardTimer: null, listener: null, context, finish: null };
            this.active = job;
            this.lastNative = { revision: LIVE_VOICE_REVISION, text: message, language, locale: utter.lang, voice: voice?.name || 'system-default', voiceURI: voice?.voiceURI || '', local: voice?.localService ?? null, rate: utter.rate, pitch: utter.pitch, result: 'requested' };
            const finish = (status, reason = '') => {
                if (job.done || this.active !== job)
                    return;
                job.done = true;
                clearTimeout(job.timer);
                clearTimeout(job.guardTimer);
                context?.removeEventListener?.('statechange', job.listener);
                this.active = null;
                this.lastNative = { ...this.lastNative, result: status };
                if (status === 'played') {
                    this.armed = true;
                    this.problem = '';
                }
                else if (['failed', 'interrupted', 'blocked'].includes(status)) {
                    this.armed = false;
                    if (reason)
                        this.problem = reason;
                }
                if (['failed', 'interrupted'].includes(status)) {
                    const blocked = this.queue.filter(next => next.language === language);
                    this.queue = this.queue.filter(next => next.language !== language);
                    for (const next of blocked)
                        if (next.id)
                            receipt(next.id, 'blocked');
                }
                if (item.id)
                    receipt(item.id, status);
                if (item.test && reason)
                    notify(reason);
                renderVoiceState();
                announceStatus();
                setTimeout(() => this.pump(), 70);
            };
            job.finish = finish;
            const stopNative = () => { try {
                synth.cancel();
            }
            catch (_) { } };
            const guard = () => {
                if (job.done)
                    return;
                const wants = desiredEvent().playing && !state.mute && state.volume > 0 && !engine.gameOutputSuppressed;
                if (!wants || !context || context.state === 'running') {
                    clearTimeout(job.guardTimer);
                    job.guardTimer = null;
                    return;
                }
                if (job.guardTimer)
                    return;
                job.guardTimer = setTimeout(() => {
                    job.guardTimer = null;
                    if (job.done || context.state === 'running' || !desiredEvent().playing || state.mute)
                        return;
                    finish('interrupted', words.conflict);
                    stopNative();
                    window.TempoliveAudioContinuity?.check('speech-focus-released');
                }, 300);
            };
            job.listener = guard;
            context?.addEventListener?.('statechange', guard);
            utter.onstart = () => {
                if (job.done)
                    return;
                job.started = true;
                this.armed = true;
                this.problem = '';
                clearTimeout(job.timer);
                this.lastNative = { ...this.lastNative, result: 'speaking' };
                if (item.id)
                    receipt(item.id, 'speaking');
                renderVoiceState();
                announceStatus();
                guard();
                job.timer = setTimeout(() => { finish('failed', words.timeout); stopNative(); }, Math.min(45000, Math.max(12000, message.length * 200)));
            };
            utter.onend = () => finish(job.started ? 'played' : 'failed', job.started ? '' : words.start);
            utter.onerror = e => finish('failed', e.error === 'not-allowed' ? words.blocked : words.failed);
            job.timer = setTimeout(() => { finish('failed', words.start); stopNative(); }, 8000);
            try {
                if (synth.paused)
                    synth.resume();
                synth.speak(utter);
            }
            catch (_) {
                finish('failed', words.failed);
            }
        }
        pump() {
            if (this.active || !this.queue.length)
                return;
            const item = this.queue.shift();
            if (!item.test && !item.manual && now() > item.expiresAt) {
                this.reject(item, 'expired');
                this.pump();
                return;
            }
            if (item.language === 'zh-Hant') {
                this.pumpMandarin(item);
                return;
            }
            if (item.language === 'en') {
                this.pumpNative(item);
                return;
            }
            this.reject(item, 'failed');
            setTimeout(() => this.pump(), 70);
        }
        cancel(reason = 'blocked') {
            const jobs = this.queue.splice(0);
            jobs.forEach(item => { if (item.id)
                receipt(item.id, reason); });
            if (this.active) {
                const active = this.active;
                active.finish(reason);
                if (active.safe) {
                    for (const source of active.sources)
                        try {
                            source.stop();
                        }
                        catch (_) { }
                }
                else
                    try {
                        window.speechSynthesis.cancel();
                    }
                    catch (_) { }
            }
        }
    }
    let speaker;
    speaker = new Speaker();
    function renderVoices() {
        if (typeof speaker === 'undefined')
            return;
        const select = $b('bandVoiceSelect'), previous = I18N.lang === 'en' ? prefs.voiceEnURI : prefs.voiceURI, voices = speaker.voices.filter(v => voiceMatches(v));
        select.replaceChildren(I18N.option(I18N.lang === 'en' ? 'Automatic English voice' : '自動選擇中文聲音', ''));
        for (const v of voices)
            select.append(I18N.option(() => v.name + ' · ' + v.lang + I18N.t(v.localService ? '（本機）' : '（可能需網路）'), v.voiceURI));
        select.value = voices.some(v => v.voiceURI === previous) ? previous : '';
        if (I18N.lang === 'en') {
            renderVoiceState();
            return;
        }
        const hint = speaker.available() ? (voices.length ? '中文語音使用系統輸出；不會跟隨網頁另外指定的音效卡。請先試聽確認。' : '裝置尚未列出中文語音；可先試聽，必要時安裝系統中文語音。') : '此瀏覽器不支援語音，仍可顯示收到的文字。';
        I18N.set($b('bandVoiceHint'), hint + ' 不使用麥克風。雲端語音可能由裝置服務處理文字；本機語音優先。');
    }
    function renderVoiceState() {
        I18N.set($b('bandVoiceStatus'), speaker.status() + (speaker.problem ? ' · ' + speaker.problem : ''));
        I18N.set($b('roomVoiceStatus'), speaker.status() + (speaker.problem ? ' ' + speaker.problem : ''));
        $b('roomVoiceStatus').hidden = !speaker.problem;
        $b('bandAutoSpeak').checked = prefs.autoSpeak;
        $b('roomAutoSpeak').checked = prefs.autoSpeak;
        $b('bandVoiceVolume').value = prefs.volume;
        I18N.set($b('bandVoiceVolumeValue'), prefs.volume + '%');
        $b('bandMandarinRateRow').hidden = I18N.lang !== 'zh-Hant';
        $b('bandMandarinRate').value = String(prefs.zhVoiceRate);
        $b('bandMandarinRateValue').textContent = prefs.zhVoiceRate.toFixed(2).replace(/0$/, '') + '\u00d7';
        I18N.bind($b('bandVoiceHint'), () => {
            if (I18N.lang === 'en') {
                const voice = speaker.voice('en');
                return 'English is spoken as a complete message at normal speed. Voice: ' + (voice ? voice.name + ' / ' + voice.lang : 'system default en-US') + '. Old recordings are disabled. Uses system audio output; a non-local voice may send text to the device speech service. Test with your actual headphones.';
            }
            const voice = speaker.voice('zh-Hant');
            return '\u4e2d\u6587\u6539\u7528\u88dd\u7f6e\u570b\u8a9e\u6574\u53e5\u64ad\u5831\uff0c\u512a\u5148\u53f0\u7063\u570b\u8a9e\uff0c\u4e0d\u4f7f\u7528\u820a\u4e2d\u6587\u97f3\u6a94\u3002' +
                '\u76ee\u524d\uff1a' + (voice ? voice.name + ' / ' + voice.lang : '\u7cfb\u7d71\u9810\u8a2d zh-TW') + '\u3002\u8a9e\u97f3\u8d70\u7cfb\u7d71\u8f38\u51fa\uff1b\u5075\u6e2c\u5230\u8207\u7bc0\u62cd\u885d\u7a81\u6642\u505c\u6b62\u672c\u6b21\u8a9e\u97f3\u4e26\u4fdd\u7559\u6587\u5b57\u3002\u975e\u672c\u6a5f\u8072\u97f3\u53ef\u80fd\u7531\u88dd\u7f6e\u670d\u52d9\u8655\u7406\u6587\u5b57\u3002';
        });
        if (activeAlert)
            paintAlert(activeAlert);
    }
    function decorateRoster(base, owner) {
        const source = [{ id: owner.peer?.id || '', instrument: owner.name, name: owner.name, role: 'host', audio: owner.localAudioStatus(), bandVersion: 1, voiceState: speaker.status() }, ...[...owner.clients.values()].filter(e => e.hello).map(e => ({ id: e.conn.peer, instrument: e.name, name: e.name, role: 'guest', audio: e.audio, bandVersion: e.bandVersion || 0, voiceState: e.bandVoice || '待啟用語音' }))];
        const counts = new Map(), position = new Map();
        for (const p of source)
            counts.set(p.instrument, (counts.get(p.instrument) || 0) + 1);
        for (const p of source) {
            const n = (position.get(p.instrument) || 0) + 1;
            position.set(p.instrument, n);
            if (counts.get(p.instrument) > 1)
                p.name = p.instrument + ' ' + n;
        }
        return source;
    }
    function hostSubmit(senderId, request) {
        if (room.role !== 'host' || room.recovering)
            return;
        const people = room.makeRoster(), sender = people.find(p => p.id === senderId), mid = request?.id;
        if (!sender || !isId(mid))
            return;
        const key = senderId + ':' + mid;
        const existing = ledger.get(key);
        if (existing) {
            statusToSender(existing);
            return;
        }
        const decline = reason => deliver(senderId, 'band-reject', { id: mid, reason });
        if ([...ledger.values()].some(r => r.data.id === mid && r.senderId !== senderId)) {
            decline('訊息識別碼重複，請重新傳送。');
            return;
        }
        if (!Number.isFinite(request.createdAt) || Math.abs(now() - request.createdAt) > C.ttl || now() - request.createdAt < -5000) {
            decline('訊息已過時，請重新傳送。');
            return;
        }
        if (now() - (rate.get(senderId) || 0) < C.minSendGap) {
            decline('傳送太密集，請稍等一下。');
            return;
        }
        const preset = C.phrases.find(p => p.id === request.phrase), message = preset?.say || (request.phrase === 'custom' ? text(request.text) : '');
        if (!message) {
            decline('請先選擇或輸入訊息。');
            return;
        }
        let targets = request.target === 'all' ? people.filter(p => p.id !== senderId) : people.filter(p => p.id === request.target && p.id !== senderId);
        if (!targets.length) {
            decline('對方已離開，或尚無其他團員。');
            return;
        }
        rate.set(senderId, now());
        const data = { id: mid, senderId, senderLabel: text(sender.name, 24), targetLabel: request.target === 'all' ? '所有人' : text(targets[0].name, 24), targetIds: targets.map(p => p.id), text: message, phraseId: preset?.id || 'custom', senderInstrument: text(sender.instrument || sender.name, 16), targetInstrument: request.target === 'all' ? '' : text(targets[0].instrument || targets[0].name, 16), createdAt: now(), expiresAt: now() + C.ttl };
        const record = { data, senderId, createdAt: now(), lastAttempt: now(), attempts: 1, targets: targets.map(p => ({ id: p.id, name: p.name, state: p.bandVersion >= 1 ? 'pending' : 'unsupported' })) };
        ledger.set(key, record);
        statusToSender(record);
        for (const target of record.targets)
            if (target.state !== 'unsupported')
                deliver(target.id, 'band-delivery', { message: data });
    }
    function statusToSender(record) { deliver(record.senderId, 'band-status', { id: record.data.id, message: record.data, targets: record.targets.map(x => ({ ...x })) }); }
    function hostReceipt(recipientId, packet) {
        if (room.role !== 'host' || !isId(packet?.id) || !isId(packet.senderId) || !Object.hasOwn(statusText, packet.status))
            return;
        if (!['received', 'queued', 'speaking', 'played', 'confirmed', 'blocked', 'muted', 'disabled', 'failed', 'expired', 'busy', 'interrupted'].includes(packet.status))
            return;
        const record = ledger.get(packet.senderId + ':' + packet.id);
        if (!record || now() - record.createdAt > C.receiptLife)
            return;
        const target = record.targets.find(t => t.id === recipientId);
        if (!target)
            return;
        if (target.state === 'confirmed')
            return;
        if (packet.status === 'received' && !['pending', 'noack', 'offline'].includes(target.state))
            return;
        target.state = packet.status;
    }
    function acknowledgeArrival(item) {
        const packet = { id: item.id, senderId: item.senderId, status: 'received' };
        if (room.role === 'host')
            hostReceipt(currentId(), packet);
        else
            sendToHost('band-receipt', packet);
    }
    function receipt(messageId, status) {
        const item = inbox.find(m => m.id === messageId);
        if (!item)
            return;
        item.status = status;
        if (status === 'received')
            acknowledgeArrival(item);
        if (activeAlert?.id === item.id)
            paintAlert(item);
    }
    function receivePacket(packet) {
        if (packet.type === 'band-delivery') {
            const m = packet.message;
            if (!safeMessage(m) || !m.targetIds.includes(currentId()) || m.senderId === currentId())
                return;
            const key = m.senderId + ':' + m.id;
            if (seen.has(key)) {
                const old = inbox.find(x => x.senderId === m.senderId && x.id === m.id);
                if (old)
                    acknowledgeArrival(old);
                return;
            }
            if (Math.abs(now() - m.createdAt) > C.receiptLife || m.createdAt > now() + 5000)
                return;
            seen.set(key, now());
            const item = { ...localMessage(m), status: 'received', confirmed: false, kind: 'received' };
            inbox.unshift(item);
            inbox = inbox.slice(0, C.maxHistory);
            receipt(item.id, 'received');
            showAlert(item);
            if (now() > item.expiresAt) {
                receipt(item.id, 'expired');
                return;
            }
            speaker.enqueue({ id: item.id, text: spoken(item), language: I18N.lang, expiresAt: item.expiresAt });
        }
        else if (packet.type === 'band-status') {
            const row = outbox.find(x => x.id === packet.id);
            if (!row || !safeMessage(packet.message) || packet.message.senderId !== currentId() || !Array.isArray(packet.targets) || packet.targets.length > CONFIG.maxPeople)
                return;
            row.accepted = true;
            row.message = localMessage(packet.message);
            row.targets = packet.targets.filter(t => isId(t.id) && Object.hasOwn(statusText, t.state)).map(t => ({ id: t.id, name: text(t.name, 24), state: t.state }));
            row.status = 'accepted';
            requests.delete(row.id);
        }
        else if (packet.type === 'band-reject') {
            const row = outbox.find(x => x.id === packet.id);
            if (row) {
                row.status = 'rejected';
                row.error = text(packet.reason, 100);
                requests.delete(row.id);
                notify(row.error);
            }
        }
    }
    function canCommunicate() { return online() && (room.role === 'host' || getPeople().some(p => p.role === 'host' && p.bandVersion >= 1)); }
    function drawerVisible() { return $b('bandDialog').open; }
    function setComposerStep(step, focus = false) {
        composerStep = step;
        $b('bandTargetStep').hidden = step !== 'targets';
        $b('bandPhraseStep').hidden = step !== 'phrases';
        I18N.set($b('bandStepStatus'), step === 'targets' ? '1 / 2' : '2 / 2');
        I18N.attr($b('bandStepStatus'), 'aria-label', step === 'targets' ? '第一步，共兩步' : '第二步，共兩步');
        updateSelection();
        updatePreview();
        if (focus) {
            $b('bandDrawerBody').scrollTop = 0;
            const epoch = ++focusEpoch;
            requestAnimationFrame(() => { if (epoch !== focusEpoch || !drawerVisible() || composerStep !== step)
                return; $b(step === 'targets' ? 'bandTargetTitle' : 'bandPhraseTitle').focus({ preventScroll: true }); });
        }
    }
    function resetComposer() {
        focusEpoch++;
        selectedTarget = '';
        selectedPhrase = '';
        composerStep = 'targets';
        sending = false;
        $b('bandCustomText').value = '';
        $b('bandCustomBox').hidden = true;
        $b('bandOptions').open = false;
        $b('bandInlineNotice').hidden = true;
        clearTimeout(toastTimer);
        setComposerStep('targets');
    }
    function chooseTarget(id) {
        if (!drawerVisible() || !canCommunicate() || sending)
            return;
        const other = getPeople().find(p => p.id === id && p.id !== currentId() && p.bandVersion >= 1);
        if (id !== 'all' && !other) {
            notify('對方已離開，請重新選擇。');
            return;
        }
        if (id === 'all' && !getPeople().some(p => p.id !== currentId() && p.bandVersion >= 1))
            return;
        selectedTarget = id;
        selectedPhrase = '';
        $b('bandCustomBox').hidden = true;
        $b('bandInlineNotice').hidden = true;
        setComposerStep('phrases', true);
    }
    function choosePhrase(id, event) {
        if (!drawerVisible() || composerStep !== 'phrases' || sending || event?.detail > 1)
            return;
        selectedPhrase = id;
        $b('bandCustomBox').hidden = id !== 'custom';
        updateSelection();
        updatePreview();
        if (id === 'custom') {
            $b('bandCustomText').focus();
            return;
        }
        makeRequest();
    }
    function makeRequest() {
        if (!drawerVisible() || composerStep !== 'phrases' || sending)
            return false;
        if (!canCommunicate()) {
            notify('房間尚未連線完成，請待連線恢復後再選擇短句。');
            return false;
        }
        const people = getPeople(), target = people.find(p => p.id === selectedTarget && p.id !== currentId());
        const validTarget = selectedTarget === 'all' ? people.some(p => p.id !== currentId() && p.bandVersion >= 1) : target?.bandVersion >= 1;
        if (!validTarget) {
            selectedTarget = '';
            selectedPhrase = '';
            setComposerStep('targets', true);
            notify('對方已離開，請重新選擇傳送對象。');
            return false;
        }
        let phrase = selectedPhrase, content = '';
        if (phrase === 'custom')
            content = text($b('bandCustomText').value);
        else if (phrase.startsWith('saved:')) {
            content = prefs.customPhrases[Number(phrase.slice(6))] || '';
            phrase = 'custom';
        }
        if (!C.phrases.some(p => p.id === phrase) && !(phrase === 'custom' && content)) {
            notify('請先選擇短句，或寫下自訂訊息。');
            return false;
        }
        if (performance.now() < sendLock) {
            notify('上一則剛送出，請稍後再選一次。');
            return false;
        }
        sending = true;
        sendLock = performance.now() + C.minSendGap;
        updatePreview();
        if (selectedPhrase === 'custom' && $b('bandSavePhrase').checked && content && !prefs.customPhrases.includes(content)) {
            prefs.customPhrases = [...prefs.customPhrases, content].slice(-C.maxCustom);
            save();
            renderPhrases();
        }
        const data = { id: uid(), target: selectedTarget, phrase, text: content, createdAt: now() };
        const phraseText = C.phrases.find(p => p.id === phrase)?.say || content;
        const row = { id: data.id, kind: 'sent', createdAt: now(), status: 'pending', accepted: false, message: { senderLabel: self().name, targetLabel: selectedTarget === 'all' ? '所有人' : target.name, text: phraseText }, targets: [] };
        outbox.unshift(row);
        outbox = outbox.slice(0, C.maxHistory);
        requests.set(data.id, { data, attempts: 1, at: now() });
        try {
            if (room.role === 'host')
                hostSubmit(currentId(), data);
            else
                sendToHost('band-send', { request: data });
            if (row.status === 'rejected')
                return false;
            $b('bandDialog').close();
            return true;
        }
        catch (e) {
            requests.delete(data.id);
            row.status = 'rejected';
            notify('傳話未能送出，請確認房間連線後再試。');
            return false;
        }
        finally {
            sending = false;
            setTimeout(updatePreview, C.minSendGap + 10);
        }
    }
    function replay(item) { if (!item)
        return; showAlert(item); speaker.refresh(); speaker.problem = ''; speaker.enqueue({ id: item.id, text: spoken(item), language: I18N.lang, expiresAt: now() + C.ttl }, true); }
    function showAlert(item, restartTimer = true) {
        if (restartTimer) {
            clearTimeout(alertHideTimer);
            alertShownAt = performance.now();
            alertHideTimer = setTimeout(hideAlert, 3000);
        }
        activeAlert = item;
        paintAlert(item);
        const alert = $b('bandAlert');
        const modal = [...document.querySelectorAll('dialog[open]')].at(-1), parent = modal || document.body;
        if (alert.parentElement !== parent) {
            try {
                if (alert.matches(':popover-open'))
                    alert.hidePopover();
            }
            catch (e) { }
            parent.append(alert);
        }
        if (alert.showPopover) {
            try {
                if (!alert.matches(':popover-open'))
                    alert.showPopover();
            }
            catch (e) {
                alert.classList.add('band-alert-fallback');
            }
        }
        else
            alert.classList.add('band-alert-fallback');
    }
    function hideAlert() { clearTimeout(alertHideTimer); alertHideTimer = 0; const alert = $b('bandAlert'); try {
        if (alert.matches(':popover-open'))
            alert.hidePopover();
    }
    catch (e) { } alert.classList.remove('band-alert-fallback'); activeAlert = null; }
    function paintAlert(item) {
        I18N.bind($b('bandAlertFrom'), () => I18N.person({ name: item.senderLabel, instrument: item.senderInstrument }) + I18N.t(' 傳給 ') + (['全部人', '所有人'].includes(item.targetLabel) ? I18N.t(item.targetLabel) : I18N.person({ name: item.targetLabel, instrument: item.targetInstrument })));
        I18N.bind($b('bandAlertText'), () => messagePhrase(item));
        const hints = { blocked: '語音尚未啟用，可點「再播一次」。', muted: '語音音量為零，請從 live傳話裡的語音設定調整。', disabled: '自動播報已關閉，可點「再播一次」。', failed: '語音未能播出，可再試一次。', expired: '此則訊息已過時，不會自動補播。', busy: '目前播報較多，可點「再播一次」。', interrupted: '此裝置的語音播報已中斷，請先確認聲音輸出。' };
        const hint = hints[item.status] || '';
        I18N.set($b('bandAlertHint'), hint);
        $b('bandAlertHint').hidden = !hint;
    }
    function renderTargets() {
        const people = getPeople(), me = currentId(), others = people.filter(p => p.id !== me), sig = JSON.stringify(others.map(p => [p.id, p.name, p.role, p.bandVersion]));
        if (sig === targetSig) {
            updatePreview();
            return;
        }
        targetSig = sig;
        const lost = selectedTarget && selectedTarget !== 'all' && !others.some(p => p.id === selectedTarget && p.bandVersion >= 1);
        if (lost) {
            selectedTarget = '';
            selectedPhrase = '';
            setComposerStep('targets', drawerVisible());
            if (drawerVisible())
                notify('對方已離開，請重新選擇對象。');
        }
        const node = $b('bandTargets');
        node.replaceChildren();
        const add = (id, label, sub, supported) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'band-tile';
            b.dataset.target = id;
            b.dataset.supported = supported ? 'true' : 'false';
            b.setAttribute('aria-pressed', String(selectedTarget === id));
            const title = document.createElement('span');
            I18N.bind(title, () => id === 'all' ? I18N.t(label) : I18N.person(others.find(p => p.id === id) || { name: label }));
            const hint = document.createElement('small');
            I18N.set(hint, sub);
            b.append(title, hint);
            b.addEventListener('click', () => chooseTarget(id));
            node.append(b);
        };
        add('all', '全部人', others.length + ' 位團員', others.some(p => p.bandVersion >= 1));
        for (const person of others)
            add(person.id, person.name, person.bandVersion >= 1 ? (person.role === 'host' ? '主持人' : '房間成員') : '需更新版本', person.bandVersion >= 1);
        I18N.set($b('bandTargetHint'), others.length ? '同樣的樂器會以編號區分；全部人不包含自己。' : '等待其他樂器加入房間。');
        updatePreview();
    }
    function updateSelection() { document.querySelectorAll('[data-target]').forEach(e => e.setAttribute('aria-pressed', String(e.dataset.target === selectedTarget))); document.querySelectorAll('[data-phrase]').forEach(e => e.setAttribute('aria-pressed', String(e.dataset.phrase === selectedPhrase))); }
    function renderPhrases() {
        const sig = JSON.stringify(prefs.customPhrases);
        if (sig === phraseSig)
            return;
        phraseSig = sig;
        const root = $b('bandPhrases');
        root.replaceChildren();
        const add = (id, label, hint = '') => { const b = document.createElement('button'); b.type = 'button'; b.className = 'band-tile'; b.dataset.phrase = id; b.setAttribute('aria-pressed', String(selectedPhrase === id)); const title = document.createElement('span'); I18N.bind(title, () => id.startsWith('saved:') ? label : I18N.t(label)); b.append(title); if (hint) {
            const sub = document.createElement('small');
            I18N.set(sub, hint);
            b.append(sub);
        } b.addEventListener('click', event => choosePhrase(id, event)); root.append(b); };
        for (const p of C.phrases)
            add(p.id, p.label, p.hint);
        prefs.customPhrases.forEach((value, i) => add('saved:' + i, value, '常用短句'));
        add('custom', '自訂訊息', '寫下想說的話');
        const list = $b('bandSavedPhrases');
        list.replaceChildren();
        prefs.customPhrases.forEach((value, index) => { const row = document.createElement('div'); row.className = 'band-saved-row'; const title = document.createElement('span'); I18N.bind(title, () => value); const remove = document.createElement('button'); remove.type = 'button'; I18N.set(remove, '移除'); I18N.bindAttr(remove, 'aria-label', () => I18N.t('移除常用短句：') + value); remove.addEventListener('click', () => { prefs.customPhrases.splice(index, 1); if (selectedPhrase.startsWith('saved:'))
            selectedPhrase = ''; save(); renderPhrases(); updatePreview(); }); row.append(title, remove); list.append(row); });
        updatePreview();
    }
    function updatePreview() {
        const ready = canCommunicate(), people = getPeople(), person = people.find(p => p.id === selectedTarget && p.id !== currentId());
        const validTarget = selectedTarget === 'all' ? people.some(p => p.id !== currentId() && p.bandVersion >= 1) : person?.bandVersion >= 1;
        const enabled = ready && !!validTarget && !sending && performance.now() >= sendLock;
        I18N.bind($b('bandSelectedTarget'), () => selectedTarget === 'all' ? I18N.t('全部人') : I18N.person(person));
        for (const b of $b('bandTargets').querySelectorAll('button'))
            b.disabled = !ready || sending || b.dataset.supported !== 'true';
        for (const b of $b('bandPhrases').querySelectorAll('button'))
            b.disabled = !enabled;
        const draft = text($b('bandCustomText').value);
        I18N.bind($b('bandDraftText'), () => draft || I18N.t('先寫下想說的話'));
        $b('bandDraftChoice').disabled = !enabled || !draft || selectedPhrase !== 'custom';
        $b('bandBack').disabled = sending;
    }
    function renderInstruments() {
        const instruments = allInstruments();
        if (!instruments.includes(selectedInstrument))
            selectedInstrument = '';
        const sig = JSON.stringify([instruments, selectedInstrument]);
        if (sig === instrumentSig)
            return;
        instrumentSig = sig;
        const picker = $b('instrumentPicker');
        picker.replaceChildren();
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.disabled = true;
        I18N.bind(placeholder, () => roomUiText('choose'));
        picker.append(placeholder);
        for (const value of instruments) {
            const option = document.createElement('option');
            option.value = value;
            I18N.bind(option, () => I18N.instrument(value));
            picker.append(option);
        }
        picker.value = selectedInstrument;
        $b('displayName').value = selectedInstrument;
    }
    function syncRoom() {
        const joined = ['host', 'guest'].includes(room.role), nextSession = joined ? room.session : '';
        if (nextSession !== session) {
            const previous = session;
            session = nextSession;
            if (previous) {
                speaker.cancel('blocked');
                inbox = [];
                outbox = [];
                ledger.clear();
                seen.clear();
                rate.clear();
                requests.clear();
                hideAlert();
                if (drawerVisible())
                    $b('bandDialog').close();
            }
            selectedTarget = '';
            selectedPhrase = '';
            targetSig = '';
            resetComposer();
        }
        document.body.classList.toggle('band-in-room', joined);
        $b('bandQuickOpen').hidden = !joined;
        if (!joined && drawerVisible())
            $b('bandDialog').close();
        I18N.bind($b('bandSelf'), () => joined ? I18N.person(self()) + I18N.t(' · 房間 ') + room.code : '');
        $b('bandConnectNote').hidden = canCommunicate();
        I18N.set($b('bandConnectNote'), joined ? '房間正在連線／校時，完成後即可傳話。' : '先從主畫面建立或加入房間。');
        if (online() && room.role === 'guest' && !getPeople().some(p => p.role === 'host' && p.bandVersion >= 1))
            I18N.set($b('bandConnectNote'), '主持人尚未啟用傳話功能，請全體更新後重新建立房間。');
        renderTargets();
        updatePreview();
    }
    function openPanel() {
        if (!['host', 'guest'].includes(room.role)) {
            notify('請先建立或加入房間，才能使用 live傳話。');
            return;
        }
        if (drawerVisible())
            return;
        resetComposer();
        targetSig = '';
        syncRoom();
        renderVoiceState();
        renderPhrases();
        $b('bandDialog').showModal();
        $b('bandDrawerBody').scrollTop = 0;
        document.body.classList.add('band-drawer-open');
        $b('bandQuickOpen').setAttribute('aria-expanded', 'true');
    }
    function tick() {
        if (room.recovering && speaker.active && !speaker.active.safe && !speaker.active.mandarin)
            speaker.cancel('blocked');
        const time = now();
        if (online()) {
            for (const [mid, r] of requests) {
                if (time - r.data.createdAt > C.ttl) {
                    requests.delete(mid);
                    const row = outbox.find(x => x.id === mid);
                    if (row && !row.accepted) {
                        row.status = 'noack';
                        notify('live傳話未能送出，請確認連線後再試。');
                    }
                }
                else if (r.attempts < 3 && time - r.at > 1400) {
                    r.at = time;
                    r.attempts++;
                    if (room.role === 'host')
                        hostSubmit(currentId(), r.data);
                    else
                        sendToHost('band-send', { request: r.data });
                }
            }
            if (room.role === 'host')
                for (const [key, r] of ledger) {
                    if (time - r.createdAt > C.receiptLife) {
                        ledger.delete(key);
                        continue;
                    }
                    if (r.attempts < 3 && time - r.lastAttempt > 1400 && time < r.data.expiresAt) {
                        r.lastAttempt = time;
                        r.attempts++;
                        for (const t of r.targets)
                            if (t.state === 'pending')
                                deliver(t.id, 'band-delivery', { message: r.data });
                    }
                    if (time >= r.data.expiresAt) {
                        let changed = false;
                        for (const t of r.targets)
                            if (t.state === 'pending') {
                                t.state = 'noack';
                                changed = true;
                            }
                    }
                }
        }
        for (const [key, t] of seen)
            if (time - t > C.receiptLife)
                seen.delete(key);
        if (activeAlert && performance.now() - alertShownAt >= 3000)
            hideAlert();
        updatePreview();
    }
    const originalSend = Room.prototype.send;
    Room.prototype.send = function (conn, data) { if (data?.type === 'hello' || data?.type === 'status')
        data = { ...data, band: { version: 1, voice: speaker.status() } }; return originalSend.call(this, conn, data); };
    const originalRoster = Room.prototype.makeRoster;
    Room.prototype.makeRoster = function () { return decorateRoster(originalRoster.call(this), this); };
    const originalAccept = Room.prototype.accept;
    Room.prototype.accept = function (conn, generation) {
        conn.on('data', data => {
            const entry = this.clients.get(conn.peer);
            if (generation !== this.generation || this.role !== 'host' || !entry || !data || data.app !== 'tw-beat' || data.v !== 2)
                return;
            if (data.type === 'hello' || (entry.hello && data.session === this.session && data.type === 'status')) {
                entry.bandVersion = data.band?.version === 1 ? 1 : 0;
                entry.bandVoice = text(data.band?.voice, 30) || '待啟用語音';
            }
            if (!entry.hello || entry.bandVersion !== 1 || data.session !== this.session)
                return;
            if (data.type === 'band-send')
                hostSubmit(conn.peer, data.request);
            else if (data.type === 'band-receipt')
                hostReceipt(conn.peer, data);
        });
        return originalAccept.call(this, conn, generation);
    };
    const originalReceive = Room.prototype.receiveGuest;
    Room.prototype.receiveGuest = function (data) { const result = originalReceive.call(this, data); if (this.role === 'guest' && data?.session === this.session && data.app === 'tw-beat' && data.v === 2 && ['band-delivery', 'band-status', 'band-reject'].includes(data.type))
        receivePacket(data); return result; };
    const originalRenderRoom = renderRoom;
    renderRoom = function () { const result = originalRenderRoom(); syncRoom(); return result; };
    for (const [id, key] of Object.entries({ instrumentPickerLabel: 'role', roomCodeLabel: 'code', roomAutoSpeakLabel: 'auto', roomVoiceTest: 'test', roomCustomLabel: 'custom', addInstrumentConfirm: 'confirm' }))
        I18N.bind($b(id), () => roomUiText(key));
    I18N.bindAttr($b('joinCode'), 'placeholder', () => roomUiText('codeHint'));
    I18N.bindAttr($b('roomInstrumentAdd'), 'aria-label', () => roomUiText('add'));
    I18N.bindAttr($b('roomInstrumentAdd'), 'title', () => roomUiText('add'));
    $b('instrumentPicker').addEventListener('change', () => {
        const value = $b('instrumentPicker').value;
        if (!allInstruments().includes(value))
            return;
        selectedInstrument = value;
        prefs.instrument = value;
        save();
        instrumentSig = '';
        renderInstruments();
        I18N.set($b('roomError'), '');
    });
    $b('roomInstrumentAdd').addEventListener('click', () => { $b('instrumentAddBox').hidden = false; $b('customInstrument').focus(); });
    for (const name of ['createRoom', 'joinRoom'])
        $b(name).addEventListener('click', () => { selectedInstrument = prefs.instrument; instrumentSig = ''; renderInstruments(); $b('instrumentAddBox').hidden = true; renderVoiceState(); });
    $b('roomForm').addEventListener('submit', event => {
        if (!selectedInstrument || !allInstruments().includes(selectedInstrument)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            I18N.set($b('roomError'), '請先選擇你的樂器或角色。');
            return;
        }
        $b('displayName').value = selectedInstrument;
        prefs.instrument = selectedInstrument;
        save();
        if (prefs.autoSpeak && !speaker.armed)
            speaker.arm();
    }, true);
    $b('addInstrumentConfirm').addEventListener('click', () => { const value = text($b('customInstrument').value, 16); if (!value || ['全部人', '所有人', '新增樂器'].includes(value)) {
        I18N.set($b('instrumentAddError'), '請輸入 1–16 字的樂器或角色名稱。');
        return;
    } if (!allInstruments().includes(value)) {
        if (prefs.customInstruments.length >= 12) {
            I18N.set($b('instrumentAddError'), '最多新增 12 個樂器。');
            return;
        }
        prefs.customInstruments.push(value);
    } selectedInstrument = value; prefs.instrument = value; save(); $b('customInstrument').value = ''; I18N.set($b('instrumentAddError'), ''); $b('instrumentAddBox').hidden = true; instrumentSig = ''; renderInstruments(); });
    $b('customInstrument').addEventListener('keydown', e => { if (e.key === 'Enter') {
        e.preventDefault();
        $b('addInstrumentConfirm').click();
    } });
    $b('bandQuickOpen').addEventListener('click', openPanel);
    $b('bandDialog').querySelector('[data-band-close]').addEventListener('click', () => $b('bandDialog').close());
    $b('bandDialog').addEventListener('close', () => {
        if (drawerVisible())
            return;
        resetComposer();
        document.body.classList.remove('band-drawer-open');
        $b('bandQuickOpen').setAttribute('aria-expanded', 'false');
        if (!$b('bandQuickOpen').hidden)
            $b('bandQuickOpen').focus({ preventScroll: true });
    });
    $b('bandDialog').addEventListener('click', e => { if (e.target === $b('bandDialog')) {
        const r = e.target.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
            e.target.close();
    } });
    $b('bandDialog').addEventListener('keydown', e => { if (e.key !== 'Tab')
        return; const controls = [...e.currentTarget.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),summary')].filter(el => { if (!el.getClientRects().length)
        return false; for (let p = el.parentElement; p && p !== e.currentTarget; p = p.parentElement)
        if (p.tagName === 'DETAILS' && !p.open && !p.querySelector('summary')?.contains(el))
            return false; return true; }); if (!controls.length)
        return; const first = controls[0], last = controls.at(-1); if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    }
    else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    } });
    $b('bandCustomText').addEventListener('input', updatePreview);
    $b('bandBack').addEventListener('click', () => { selectedTarget = ''; selectedPhrase = ''; $b('bandCustomBox').hidden = true; setComposerStep('targets', true); });
    $b('bandCustomText').addEventListener('compositionstart', () => { customComposing = true; });
    $b('bandCustomText').addEventListener('compositionend', () => { customComposing = false; lastCompositionEnd = performance.now(); updatePreview(); });
    $b('bandCustomText').addEventListener('keydown', event => { if (event.key === 'Enter' && (event.isComposing || customComposing || event.keyCode === 229 || performance.now() - lastCompositionEnd < 80))
        event.preventDefault(); });
    $b('bandCustomBox').addEventListener('submit', event => { event.preventDefault(); if (customComposing || performance.now() - lastCompositionEnd < 80)
        return; selectedPhrase = 'custom'; makeRequest(); });
    for (const id of ['bandEnableVoice', 'roomVoiceTest'])
        $b(id).addEventListener('click', () => speaker.arm());
    for (const id of ['bandAutoSpeak', 'roomAutoSpeak'])
        $b(id).addEventListener('change', e => { prefs.autoSpeak = e.target.checked; save(); if (!prefs.autoSpeak)
            speaker.cancel('disabled'); renderVoiceState(); announceStatus(); });
    $b('bandVoiceVolume').addEventListener('input', e => { prefs.volume = Number(e.target.value); save(); if (!prefs.volume)
        speaker.cancel('muted'); renderVoiceState(); announceStatus(); });
    $b('bandMandarinRate').addEventListener('input', e => { const n = Number(e.target.value); if (!Number.isFinite(n))
        return; prefs.zhVoiceRate = Math.round(Math.max(.9, Math.min(1.5, n)) * 20) / 20; save(); renderVoiceState(); });
    $b('bandVoiceSelect').addEventListener('change', e => { if (I18N.lang === 'en')
        prefs.voiceEnURI = e.target.value;
    else
        prefs.voiceURI = e.target.value; save(); speaker.armed = false; speaker.problem = ''; renderVoiceState(); announceStatus(); });
    $b('bandAlertClose').addEventListener('click', hideAlert);
    $b('bandAlertReplay').addEventListener('click', () => replay(activeAlert));
    document.addEventListener('visibilitychange', () => { if (document.hidden && speaker.active && !speaker.active.safe && !speaker.active.mandarin)
        speaker.cancel('blocked'); });
    window.addEventListener('pagehide', event => { if (!event.persisted)
        speaker.cancel('blocked'); hideAlert(); });
    new MutationObserver(changes => { if (activeAlert && changes.some(m => m.target.tagName === 'DIALOG'))
        showAlert(activeAlert, false); }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });
    window.TempoliveBand = Object.freeze({ version: '1.14-live-drawer', snapshot: () => ({ session, online: online(), drawerOpen: drawerVisible(), alertVisible: !!activeAlert, alertAutoHideMs: 3000, composerStep, selectedTarget, sending, instrument: prefs.instrument, self: currentId(), people: getPeople().map(p => ({ ...p })), volume: prefs.volume, voiceState: speaker.status(), autoSpeak: prefs.autoSpeak, queue: speaker.queue.length, speaking: !!speaker.active, received: inbox.map(m => ({ ...m })), sent: outbox.map(m => ({ ...m, targets: m.targets.map(t => ({ ...t })) })), localStorageAvailable: !storageError, customInstruments: [...prefs.customInstruments], customPhrases: [...prefs.customPhrases] }), open: openPanel, cancelLocalSpeech: () => speaker.cancel('interrupted'), cancelNativeSpeech: () => { if (speaker.active && !speaker.active.safe && !speaker.active.mandarin && !speaker.active.native)
            speaker.cancel('interrupted'); }, speechMode: () => ({ safe: !!speaker.active?.safe, revision: LIVE_VOICE_REVISION, mode: I18N.lang === 'zh-Hant' ? 'system-mandarin' : 'system-' + I18N.lang, rate: I18N.lang === 'zh-Hant' ? prefs.zhVoiceRate : NATIVE_RATE, lastMandarin: speaker.lastMandarin ? { ...speaker.lastMandarin } : null, lastNative: speaker.lastNative ? { ...speaker.lastNative } : null, selectedVoice: speaker.voice()?.name || null, selectedLocale: speaker.voice()?.lang || voiceLanguage(), loaded: false, bank: { disabled: true, reason: 'Legacy recordings are never played' } }) });
    I18N.onChange(() => { renderVoices(); renderVoiceState(); });
    renderInstruments();
    renderPhrases();
    renderVoices();
    renderVoiceState();
    syncRoom();
    setInterval(tick, 500);
})();
;
;
(() => {
    const dialog = document.getElementById('helpDialog');
    const scroller = document.getElementById('guideScroll');
    const helpButton = document.getElementById('helpBtn');
    const topics = [...dialog.querySelectorAll('.guide-topic')];
    helpButton.addEventListener('click', () => {
        topics.forEach(topic => topic.open = false);
        scroller.scrollTop = 0;
        helpButton.setAttribute('aria-expanded', 'true');
        document.getElementById('guideClose').focus({ preventScroll: true });
    });
    topics.forEach(topic => topic.addEventListener('toggle', () => {
        if (!topic.open)
            return;
        topics.forEach(other => { if (other !== topic)
            other.open = false; });
        requestAnimationFrame(() => {
            if (!dialog.open || !topic.open)
                return;
            const bounds = scroller.getBoundingClientRect(), head = topic.querySelector('summary').getBoundingClientRect();
            if (head.top < bounds.top + 8 || head.top > bounds.top + bounds.height * .3) {
                scroller.scrollTop += head.top - bounds.top - 12;
            }
        });
    }));
    dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab')
            return;
        const controls = [...dialog.querySelectorAll('button:not(:disabled),summary,a[href],[tabindex]:not([tabindex="-1"])')].filter(el => {
            if (!el.getClientRects().length)
                return false;
            for (let parent = el.parentElement; parent && parent !== dialog; parent = parent.parentElement) {
                if (parent.tagName === 'DETAILS' && !parent.open && !parent.querySelector('summary')?.contains(el))
                    return false;
            }
            return true;
        });
        if (!controls.length)
            return;
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
        else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });
    dialog.addEventListener('close', () => {
        if (dialog.open)
            return;
        helpButton.setAttribute('aria-expanded', 'false');
        helpButton.focus({ preventScroll: true });
    });
})();
;
(() => {
    'use strict';
    const byId = id => document.getElementById(id);
    const app = byId('tourWorkspace'), coach = byId('tourCoach'), stage = byId('tourStage');
    const scroller = byId('tourStageScroller'), preview = byId('tourPreview');
    const button = byId('tutorialBtn'), bodyText = byId('tourStepBody'), title = byId('tourStepTitle');
    const pair = (zh, en) => ({ zh, en }), pick = x => typeof x === 'string' ? x : (I18N.lang === 'en' ? x.en : x.zh);
    const copy = {
        entry: pair('\u64cd\u4f5c\u6559\u5b78', 'Guided tour'), close: pair('\u7d50\u675f\u6559\u5b78', 'Close tutorial'),
        prev: pair('\u4e0a\u4e00\u6b65', 'Back'), next: pair('\u4e0b\u4e00\u6b65', 'Next'), finish: pair('\u5b8c\u6210\u6559\u5b78', 'Finish tour'),
        jump: pair('\u8df3\u5230\u4e3b\u984c', 'Jump to'), readonly: pair('\u770b\u4e00\u904d\u5c31\u597d\uff1b\u6559\u5b78\u4e0d\u6703\u6539\u8a2d\u5b9a\u3001\u958b\u623f\u6216\u9001\u8a0a\u606f\u3002', 'Read along. The tour never changes settings, creates a room or sends a message.'),
        preview: pair('\u6559\u5b78\u793a\u610f', 'Teaching preview'), previewHint: pair('\u4e0d\u6703\u57f7\u884c\u64cd\u4f5c', 'No actions are performed'),
        chapter: [pair('\u5718\u968a\u5408\u4f5c', 'Play together'), pair('\u7bc0\u62cd\u8207\u6b4c\u55ae', 'Metronome & setlist'), pair('\u97f3\u8a0a\u8207\u5916\u89c0', 'Sound & appearance'), pair('\u66f4\u591a\u529f\u80fd', 'More features')],
        busy: pair('\u8acb\u5148\u95dc\u9589\u76ee\u524d\u8996\u7a97\uff0c\u518d\u958b\u555f\u64cd\u4f5c\u6559\u5b78\u3002', 'Close the current panel before starting the tour.')
    };
    const STEPS = [
        { id: 'rooms', group: 0, target: '#roomCard', title: pair('\u5148\u628a\u5718\u968a\u9023\u8d77\u4f86', 'Bring the band together'), body: pair('\u4e00\u4eba\u5efa\u7acb\u623f\u9593\u7576\u4e3b\u6301\u4eba\uff0c\u5176\u4ed6\u4eba\u7528\u56db\u4f4d\u4ee3\u78bc\u52a0\u5165\u3002\u5168\u54e1\u4f7f\u7528\u540c\u4e00\u7248\u672c\uff0c\u4e26\u4fdd\u6301\u7db2\u8def\u9023\u7dda\u3002', 'One person creates a room as host. Everyone else joins with the four-digit code. Use the same version and stay online.'), where: pair('\u4e3b\u756b\u9762 \u2192 \u5718\u968a\u623f\u9593', 'Main screen \u2192 Team room') },
        { id: 'join', group: 0, scene: 'join', title: pair('\u9078\u6a02\u5668\uff0c\u518d\u52a0\u5165', 'Choose your instrument'), body: pair('\u7528\u6a02\u5668\u6216\u89d2\u8272\u4ee3\u66ff\u66b1\u7a31\uff1b\u6c92\u6709\u7684\u53ef\u81ea\u5df1\u65b0\u589e\u3002\u53c3\u8207\u8005\u8f38\u5165\u4e3b\u6301\u4eba\u7d66\u7684\u4ee3\u78bc\uff0c\u52a0\u5165\u524d\u5148\u8a66\u807d\u8a9e\u97f3\u3002', 'Choose an instrument or role instead of a nickname, or add your own. Guests enter the host\u2019s code. Test voice playback before joining.'), where: pair('\u5efa\u7acb\u623f\u9593 / \u4ee3\u78bc\u52a0\u5165', 'Create room / Join with code') },
        { id: 'sync', group: 0, scene: 'sync', title: pair('\u4e00\u4eba\u63a7\u5236\uff0c\u5168\u5718\u8ddf\u62cd', 'One host, one shared beat'), body: pair('\u4e3b\u6301\u4eba\u63a7\u5236\u901f\u5ea6\u3001\u64ad\u653e\u8207\u5207\u6b4c\uff0c\u5718\u54e1\u5404\u81ea\u8abf\u8033\u6a5f\u97f3\u91cf\u3002\u6821\u6642\u4e0d\u7b49\u65bc\u96f6\u5ef6\u9072\uff0c\u6f14\u51fa\u524d\u8acb\u5148\u5be6\u6e2c\u3002', 'The host controls tempo, playback and song changes. Each member adjusts their own volume. Clock sync is not zero latency: test your setup before a performance.'), where: pair('\u5165\u623f\u5f8c \u2192 \u623f\u9593\u8cc7\u8a0a\u8207\u91cd\u65b0\u6821\u6642', 'After joining \u2192 Room status & Resync') },
        { id: 'talk-target', group: 0, scene: 'recipients', title: pair('\u73fe\u5834\u8981\u8aaa\u8a71\uff0c\u9ede\u5074\u908a', 'Need to tell someone?'), body: pair('\u5165\u623f\u5f8c\u624d\u6703\u51fa\u73fe live\u50b3\u8a71\u5074\u62c9\u9215\u3002\u5148\u9078\u6a02\u5668\u6216\u300c\u5168\u90e8\u4eba\u300d\uff1b\u540c\u6a23\u6a02\u5668\u6703\u4ee5\u7de8\u865f\u5340\u5206\u3002', 'After joining, open the live talk tab at the side. Pick an instrument or Everyone. Matching instruments are numbered so you can choose the right person.'), where: pair('\u5165\u623f\u5f8c \u2192 \u53f3\u5074 live\u50b3\u8a71', 'After joining \u2192 Side live talk tab') },
        { id: 'talk-message', group: 0, scene: 'phrases', title: pair('\u9ede\u77ed\u53e5\uff0c\u5c31\u81ea\u52d5\u50b3\u51fa', 'Tap a phrase to send'), body: pair('\u9078\u77ed\u53e5\u5c31\u9001\u51fa\u4e26\u6536\u8d77\uff0c\u4e0d\u7528\u518d\u78ba\u8a8d\u3002\u4e5f\u80fd\u81ea\u8a02\u8a0a\u606f\uff1b\u5148\u555f\u7528\u8a9e\u97f3\u8a66\u807d\uff0c\u50b3\u8a71\u4e0d\u6703\u4e3b\u52d5\u505c\u4e0b\u7bc0\u62cd\u3002', 'Tap a phrase and it sends immediately, then closes the panel. Add custom messages too. Enable and test voice first; live talk does not intentionally stop the metronome.'), where: pair('live\u50b3\u8a71 \u2192 \u77ed\u53e5 / \u8a9e\u97f3\u8a2d\u5b9a', 'Live talk \u2192 Phrases / Voice options') },
        { id: 'tempo', group: 1, target: '.tempo-zone', title: pair('\u5148\u6c7a\u5b9a\u901f\u5ea6', 'Set your tempo'), body: pair('\u8f38\u5165 40\u2013300 BPM\uff0c\u6216\u7528\u52a0\u6e1b\u9375\u3001\u6ed1\u687f\u8abf\u6574\u3002\u9019\u88e1\u7684 BPM \u4ee5\u56db\u5206\u97f3\u7b26\u70ba\u57fa\u6e96\uff1b\u4e0d\u7528\u505c\u4e0b\u4f86\u624d\u80fd\u6539\u901f\u5ea6\u3002', 'Enter 40\u2013300 BPM, or use the +/\u2212 buttons and slider. BPM uses the quarter note as its reference. Tempo can change during playback.'), where: pair('\u7bc0\u62cd\u5668 \u2192 BPM \u5927\u6578\u5b57', 'Metronome \u2192 BPM display') },
        { id: 'play-tap', group: 1, target: '.transport', title: pair('\u64ad\u653e\uff0c\u6216\u9ede\u51fa\u4f60\u7684\u901f\u5ea6', 'Play, or tap your tempo'), body: pair('\u4e0a\u6392\u5169\u500b\u5927\u5716\u793a\u5207\u63db\u4e0a\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\uff0c\u4e0b\u65b9\u4f9d\u5e8f\u70ba\u958b\u59cb\uff0f\u505c\u6b62\u8207\u9ede\u6309\u6e2c\u901f\u3002\u9023\u9ede\u6e2c\u901f\u81f3\u5c11\u5169\u6b21\uff0c\u5373\u53ef\u4f30\u7b97 BPM\u3002', 'The two large icons on the top row select the previous or next song. Start/Stop and Tap tempo each have their own row below. Tap at least twice to estimate your BPM.'), where: pair('\u7bc0\u62cd\u5668 \u2192 \u64ad\u653e\u8207\u5207\u6b4c\u6309\u9215', 'Metronome \u2192 Main controls') },
        { id: 'rhythm', group: 1, target: '.settings-grid', title: pair('\u8a2d\u5b9a\u6bcf\u5c0f\u7bc0\u600e\u9ebc\u6578', 'Choose how the beat is divided'), body: pair('\u62cd\u865f\u6c7a\u5b9a\u6bcf\u5c0f\u7bc0\u7684\u62cd\u6578\u8207\u97f3\u7b26\u55ae\u4f4d\u3002\u7d30\u5206\u53ef\u9078\u56db\u5206\u3001\u516b\u5206\u6216\u5341\u516d\u5206\uff1b\u958b\u59cb\u524d\u60f3\u5148\u6578\u62cd\uff0c\u5c31\u8a2d\u9810\u5099\u62cd\u3002', 'Time signature sets the beats and beat unit in each bar. Choose quarter-, eighth- or sixteenth-note subdivision. Add a count-in to hear a lead-in before starting.'), where: pair('\u62cd\u865f / \u97f3\u7b26\u7d30\u5206 / \u9810\u5099\u62cd', 'Time signature / Subdivision / Count-in') },
        { id: 'accents', group: 1, target: '#beats', title: pair('\u6bcf\u4e00\u62cd\u90fd\u53ef\u8abf\u8f15\u91cd', 'Set the accent of each beat'), body: pair('\u9ede\u62cd\u9ede\u53ef\u5207\u63db\u300c\u91cd\u97f3 \u2192 \u4e00\u822c \u2192 \u975c\u97f3\u300d\u3002\u5207\u6b4c\u4e0d\u6703\u91cd\u8a2d\u76ee\u524d\u7684\u8f15\u91cd\u97f3\uff1b\u62cd\u6578\u6539\u8b8a\u4e5f\u6703\u5ef6\u7e8c\u4f60\u7684\u9078\u64c7\u3002', 'Tap a beat to cycle Accented \u2192 Unaccented \u2192 Muted. Changing songs keeps your current accent choices, even when the number of beats changes.'), where: pair('BPM \u4e0b\u65b9 \u2192 \u62cd\u9ede\u65b9\u584a', 'Below BPM \u2192 Beat buttons') },
        { id: 'volume', group: 1, target: '.main-volume', title: pair('\u8abf\u81ea\u5df1\u807d\u5230\u7684\u97f3\u91cf', 'Adjust only your own volume'), body: pair('\u9019\u689d\u6ed1\u687f\u53ea\u5f71\u97ff\u9019\u53f0\u88dd\u7f6e\u7684\u7bc0\u62cd\u8072\uff0c\u4e0d\u6703\u6539\u5176\u4ed6\u5718\u54e1\u3002\u8a9e\u97f3\u50b3\u8a71\u548c\u5c0f\u904a\u6232\u6709\u5404\u81ea\u7684\u97f3\u91cf\u3002', 'This slider changes the metronome volume on this device only, not anyone else\u2019s. Live talk and the rhythm game each have their own volume control.'), where: pair('\u4e3b\u756b\u9762 \u2192 \u672c\u6a5f\u97f3\u91cf', 'Main screen \u2192 Local volume') },
        { id: 'setlist', group: 1, target: '#songList', title: pair('\u6b4c\u55ae\u5148\u6392\u597d\uff0c\u73fe\u5834\u5c11\u64cd\u4f5c', 'Prepare the setlist first'), body: pair('\u9ede\u6b4c\u540d\u6216\u524d\u4e00\u9996\uff0f\u4e0b\u4e00\u9996\u5207\u63db\u3002\u64ad\u653e\u4e2d\u5207\u6b4c\u6703\u63a5\u5728\u5c0f\u7bc0\u4ea4\u754c\uff0c\u4e0d\u6703\u7a81\u7136\u5f9e\u4e2d\u9593\u91cd\u4f86\u3002', 'Tap a song, Previous or Next to switch. During playback, song changes are scheduled at a bar boundary rather than restarting in the middle of a bar.'), where: pair('\u6b4c\u66f2\u6e05\u55ae \u2192 \u6b4c\u540d\u8207\u524d\u5f8c\u9996', 'Setlist \u2192 Songs & Previous / Next') },
        { id: 'save-song', group: 1, scene: 'song', title: pair('\u628a\u6b4c\u540d\u8207\u7bc0\u594f\u5b58\u8d77\u4f86', 'Save a song and its rhythm'), body: pair('\u65b0\u589e\u6216\u7de8\u8f2f\u6b4c\u66f2\uff0c\u53ef\u8a2d\u6b4c\u540d\u3001\u901f\u5ea6\u3001\u62cd\u865f\u8207\u6392\u5e8f\u3002\u4e3b\u756b\u9762\u81e8\u6642\u8abf\u597d\u5f8c\uff0c\u7528\u300c\u5132\u5b58\u76ee\u524d\u8a2d\u5b9a\u300d\u66f4\u65b0\u9019\u9996\u6b4c\u3002', 'Add or edit a song to set its name, tempo, time signature and order. After changing the live settings, use Save current settings to update that song\u2019s preset.'), where: pair('\u65b0\u589e\u6b4c\u66f2 / \u7de8\u8f2f / \u5132\u5b58\u76ee\u524d\u8a2d\u5b9a', 'Add song / Edit / Save current settings') },
        { id: 'backup', group: 1, target: '.song-tools', title: pair('\u63db\u88dd\u7f6e\u524d\uff0c\u5148\u5099\u4efd', 'Back up before changing devices'), body: pair('\u6b4c\u55ae\u8207\u500b\u4eba\u8a2d\u5b9a\u5b58\u5728\u9019\u500b\u700f\u89bd\u5668\uff0c\u4e0d\u6703\u81ea\u52d5\u96f2\u7aef\u540c\u6b65\u3002\u532f\u51fa\u53ef\u5099\u4efd\u6b4c\u55ae\uff1b\u532f\u5165\u6703\u53d6\u4ee3\u539f\u6b4c\u55ae\uff0c\u8acb\u5148\u7559\u4e00\u4efd\u3002', 'Setlists and preferences are stored in this browser, not synced to the cloud. Export a setlist backup first: importing replaces the current setlist.'), where: pair('\u6b4c\u55ae\u4e0b\u65b9 \u2192 \u532f\u51fa / \u532f\u5165', 'Below the setlist \u2192 Export / Import') },
        { id: 'appearance', group: 2, scene: 'appearance', title: pair('\u8b93\u756b\u9762\u66f4\u9069\u5408\u73fe\u5834', 'Make the screen easier to follow'), body: pair('\u65b9\u6846\u5716\u793a\u958b\u555f\u73fe\u5834\u653e\u5927\u6a21\u5f0f\uff1a\u986f\u793a BPM \u8207\u52a0\u6e1b\u9375\u3001\u7cbe\u7c21\u62cd\u9ede\u3001\u64ad\u653e\u3001\u5927\u578b\u5207\u6b4c\u6309\u9215\u8207\u6e2c\u901f\u3002\u50c5\u986f\u793a\u76ee\u524d\u6b4c\u540d\uff0c\u4e26\u4fdd\u7559\u623f\u9593\u50b3\u8a71\uff1b\u97f3\u7b26\u7d30\u5206\u3001\u62cd\u865f\u8207\u97f3\u91cf\u8acb\u9084\u539f\u5f8c\u8abf\u6574\u3002', 'The frame icon opens stage view with BPM and +/− buttons, compact beat markers, playback, larger song-navigation buttons and Tap tempo. Only the current song title is shown, and room Live talk remains available. Restore the normal view to change subdivisions, time signature or volume.'), where: pair('\u7bc0\u62cd\u5340\u65b9\u6846\u5716\u793a / \u8a2d\u5b9a \u2192 \u5916\u89c0', 'Metronome frame icon / Settings \u2192 Appearance') },
        { id: 'tones', group: 2, scene: 'tones', title: pair('\u9078\u4e00\u500b\u6e05\u695a\u7684\u62cd\u9ede\u8072', 'Choose a clear click sound'), body: pair('\u6709\u6728\u584a\u3001\u6e05\u6670\u96fb\u5b50\u3001\u725b\u9234\u3001\u77ed\u9234\u8207\u99ac\u6797\u5df4\u3002\u53ef\u9078\u6a19\u6e96\uff0f\u52a0\u5f37\u4e26\u8a66\u807d\uff1b\u6234\u8033\u6a5f\u6642\u5148\u964d\u97f3\u91cf\uff0c\u518d\u6162\u6162\u52a0\u5927\u3002', 'Choose Woodblock, Clear electronic, Cowbell, Short bell or Marimba. Try Standard or Boost and preview the sound. With headphones, start quietly and increase gradually.'), where: pair('\u8a2d\u5b9a \u2192 \u97f3\u8a0a\u8207\u85cd\u7259', 'Settings \u2192 Audio & Bluetooth') },
        { id: 'output', group: 2, scene: 'output', title: pair('\u5148\u78ba\u8a8d\u8072\u97f3\u5f9e\u54ea\u88e1\u51fa\u4f86', 'Check your audio output'), body: pair('\u85cd\u7259\u8033\u6a5f\u5148\u5728\u7cfb\u7d71\u914d\u5c0d\u3002\u8072\u97f3\u6bd4\u5225\u4eba\u6162\u6642\uff0c\u53ef\u8abf\u672c\u6a5f\u6642\u9593\u6821\u6b63\uff1b\u8acb\u4fdd\u6301\u7db2\u9801\u524d\u666f\uff0c\u56de\u4f86\u7121\u8072\u6642\u9ede\u6062\u5fa9\u8072\u97f3\u3002', 'Pair Bluetooth headphones in your system settings first. Use local timing calibration when audio is late. Keep the page in front; use Restore audio if sound is lost after returning.'), where: pair('\u8a2d\u5b9a \u2192 \u8f38\u51fa / \u6642\u9593\u6821\u6b63', 'Settings \u2192 Output / Timing calibration') },
        { id: 'game', group: 3, scene: 'game', title: pair('\u7a7a\u6a94\u73a9\u4e00\u4e0b\u7bc0\u594f\u8a18\u61b6', 'Try the rhythm game'), body: pair('\u9ede\u53f3\u4e0a\u89d2\u904a\u6232\uff0c\u5148\u807d\u793a\u7bc4\u518d\u6572\u56de\u4f86\u3002\u904a\u6232\u6709\u7368\u7acb\u97f3\u91cf\uff1b\u904a\u73a9\u6642\u66ab\u505c\u672c\u6a5f\u7bc0\u62cd\u8072\uff0c\u7d50\u675f\u5f8c\u4f9d\u539f\u72c0\u614b\u6062\u5fa9\u3002', 'Open the game at the top right, listen to a rhythm and tap it back. It has its own volume. During play, only your local metronome sound is held, then restored according to its previous state.'), where: pair('\u53f3\u4e0a\u89d2 \u2192 \u904a\u6232\u5716\u793a', 'Top right \u2192 Game icon') },
        { id: 'language-help', group: 3, target: '.header', title: pair('\u6e96\u5099\u597d\u4e86\uff0c\u56de\u4e3b\u756b\u9762\u8a66\u8a66', 'You\u2019re ready to go'), body: pair('TW / EN \u53ef\u5207\u63db\u8a9e\u8a00\uff0c\u554f\u865f\u53ef\u67e5\u5b8c\u6574\u8aaa\u660e\u3002\u7a7a\u767d\u9375\u64ad\u653e\u3001T \u6e2c\u901f\u3001N \u4e0b\u4e00\u9996\u3001F \u653e\u5927\uff1b\u4e4b\u5f8c\u53ef\u96a8\u6642\u518d\u958b\u555f\u6559\u5b78\u3002', 'Use TW / EN to switch languages and ? for the full guide. Shortcuts: Space for playback, T for tap tempo, N for next song and F to expand. Reopen this tour anytime.'), where: pair('\u53f3\u4e0a\u89d2\u8a9e\u8a00 / TEMPOLIVE \u65c1\u7684\u554f\u865f', 'Language at top right / ? beside TEMPOLIVE') }
    ];
    let active = false, index = 0, epoch = 0, focusTarget = null, returnState = null, resizeQueued = 0;
    const e = (tag, className, text) => { const node = document.createElement(tag); if (className)
        node.className = className; if (text !== undefined)
        node.textContent = pick(text); return node; };
    function svg(name) { const n = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); n.setAttribute('aria-hidden', 'true'); const use = document.createElementNS(n.namespaceURI, 'use'); use.setAttribute('href', '#' + name); n.append(use); return n; }
    function buttonLook(text, primary = false) { return e('span', 'btn' + (primary ? ' primary' : ''), text); }
    function tile(text, selected = false, hint = null) { const n = e('div', 'tour-demo-tile' + (selected ? ' selected' : '') + (hint ? ' tour-demo-phrase' : '')); n.append(e('span', '', text)); if (hint)
        n.append(e('small', '', hint)); return n; }
    function grid(items, selected = -1, two = false) { const n = e('div', 'tour-preview-grid' + (two ? ' two' : '')); items.forEach((t, i) => n.append(tile(t, i === selected))); return n; }
    function note(text) { return e('p', 'tour-sample-note', text); }
    function field(label, value) { const row = e('div'); row.append(e('label', 'field-label', label)); const x = e('input'); x.value = value; x.setAttribute('readonly', ''); x.tabIndex = -1; row.append(x); return row; }
    function sampleVolume(label, percent) { const row = e('div', 'tour-preview-volume'); row.append(e('span', '', label)); const input = e('input'); input.type = 'range'; input.min = 0; input.max = 100; input.value = percent; input.tabIndex = -1; row.append(input, e('output', '', percent + '%')); return row; }
    function cloneSafe(selector) { const original = document.querySelector(selector); if (!original)
        return e('div'); const n = original.cloneNode(true); for (const el of [n, ...n.querySelectorAll('*')]) {
        if (el.id)
            el.dataset.tourCopy = el.id;
        ['id', 'for', 'aria-labelledby', 'aria-describedby', 'aria-controls', 'data-close', 'data-note', 'data-target', 'data-phrase', 'autofocus', 'hidden'].forEach(a => el.removeAttribute(a));
        if (el.matches('input,button,select,textarea,a,summary'))
            el.tabIndex = -1;
        if (el.matches('button'))
            el.type = 'button';
    } return n; }
    const instruments = [pair('\u92fc\u7434', 'Piano'), pair('\u9375\u76e4', 'Keyboard'), pair('\u6728\u5409\u4ed6', 'Acoustic guitar'), pair('\u96fb\u5409\u4ed6', 'Electric guitar'), pair('\u8c9d\u65af', 'Bass'), pair('\u9f13', 'Drums'), pair('\u4e3b\u9818', 'Worship leader'), pair('\u6b4c\u5531', 'Vocals'), pair('\u97f3\u63a7', 'Sound engineer')];
    function renderScene(scene) {
        preview.replaceChildren();
        preview.inert = true;
        const titleText = STEPS[index].title;
        byId('tourSceneTitle').textContent = pick(titleText);
        preview.setAttribute('aria-label', pick(copy.preview) + ': ' + pick(titleText));
        if (scene === 'join') {
            preview.append(e('h3', '', pair('\u4ee3\u78bc\u52a0\u5165\u623f\u9593', 'Join a room')), e('label', 'field-label', pair('\u4f60\u7684\u6a02\u5668\uff0f\u89d2\u8272', 'Your instrument / role')), grid(instruments, 0), buttonLook(pair('+ \u65b0\u589e\u6a02\u5668', '+ Add an instrument')), e('label', 'field-label', pair('4 \u4f4d\u6578\u5b57\u623f\u9593\u4ee3\u78bc', '4-digit room code')), e('div', 'tour-preview-code', '4826'), buttonLook(pair('\u52a0\u5165\u4e26\u555f\u7528\u8072\u97f3', 'Join & enable audio'), true), note(pair('4826 \u662f\u6559\u5b78\u7bc4\u4f8b\uff0c\u4e0d\u662f\u5be6\u969b\u623f\u9593\u4ee3\u78bc\u3002', '4826 is an example, not a real room code.')));
        }
        else if (scene === 'sync') {
            preview.append(e('h3', '', pair('\u5718\u968a\u623f\u9593', 'Team room')), e('span', 'tour-demo-status', pair('\u6821\u6642\u5b8c\u6210\u5f8c\u8ddf\u96a8\u4e3b\u6301\u4eba', 'Follow the host after syncing')), e('div', 'tour-preview-code', '4826'));
            const members = e('div', 'tour-preview-members');
            [[pair('\u9f13', 'Drums'), pair('\u4e3b\u6301\u4eba', 'Host')], [pair('\u92fc\u7434', 'Piano'), pair('\u53c3\u8207\u8005', 'Participant')], [pair('\u97f3\u63a7', 'Sound engineer'), pair('\u53c3\u8207\u8005', 'Participant')]].forEach(([name, role]) => { const line = e('div', 'tour-preview-member'); line.append(e('strong', '', name), e('small', '', role)); members.append(line); });
            preview.append(members, buttonLook(pair('\u91cd\u65b0\u6821\u6642', 'Resync')), sampleVolume(pair('\u672c\u6a5f\u97f3\u91cf', 'Local volume'), 70), note(pair('\u623f\u9593\u6703\u5206\u4eab\u76ee\u524d\u7bc0\u594f\uff0c\u4e0d\u6703\u628a\u6574\u4efd\u6b4c\u55ae\u8907\u88fd\u7d66\u5225\u4eba\u3002', 'Rooms share the current rhythm, not everyone\u2019s complete setlist.')));
        }
        else if (scene === 'recipients') {
            preview.append(e('h3', '', pair('live\u50b3\u8a71', 'Live talk')), note(pair('\u53f3\u5074\u7684 live\u50b3\u8a71\u6309\u9215\uff0c\u5165\u623f\u5f8c\u624d\u51fa\u73fe\u3002', 'The live talk tab appears at the side only after joining a room.')), e('h4', '', pair('1 / 2 \u00b7 \u8981\u50b3\u7d66\u8ab0\uff1f', '1 / 2 \u00b7 Who is it for?')));
            const g = grid([pair('\u5168\u90e8\u4eba', 'Everyone'), pair('\u92fc\u7434 1', 'Piano 1'), pair('\u92fc\u7434 2', 'Piano 2'), pair('\u96fb\u5409\u4ed6', 'Electric guitar'), pair('\u6b4c\u5531', 'Vocals'), pair('\u97f3\u63a7', 'Sound engineer')], 1, true);
            g.firstElementChild.classList.add('wide');
            preview.append(g, note(pair('\u9019\u662f\u7bc4\u4f8b\u6210\u54e1\uff0c\u4e0d\u6703\u52a0\u5165\u771f\u5be6\u623f\u9593\u3002', 'These are example members. No real room is joined.')));
        }
        else if (scene === 'phrases') {
            preview.append(e('h3', '', pair('live\u50b3\u8a71', 'Live talk')), e('p', 'tour-demo-callout', pair('\u50b3\u7d66 \u00b7 \u92fc\u7434', 'To \u00b7 Piano')), e('h4', '', pair('2 / 2 \u00b7 \u60f3\u8aaa\u4ec0\u9ebc\uff1f', '2 / 2 \u00b7 What do you want to say?')));
            const g = e('div', 'tour-preview-grid two');
            [
                [pair('\u592a\u5feb', 'Too fast'), pair('\u8acb\u6162\u4e00\u9ede', 'Slow down')], [pair('\u592a\u6162', 'Too slow'), pair('\u8acb\u5feb\u4e00\u9ede', 'Speed up')], [pair('\u591a\u4e00\u9ede', 'More'), null], [pair('\u5c11\u4e00\u9ede', 'Less'), null], [pair('\u76e3\u807d\u5927', 'Monitor up'), null], [pair('\u76e3\u807d\u5c0f', 'Monitor down'), null], [pair('\u8981\u5e6b\u5fd9', 'Need help'), null], [pair('\u81ea\u8a02\u8a0a\u606f', 'Custom message'), null]
            ].forEach(([label, hint]) => g.append(tile(label, false, hint)));
            preview.append(g, e('div', 'tour-demo-callout', pair('\u9f13\u624b\u9078\u300c\u592a\u6162\u300d\uff1a\u300c\u9f13\u624b\u8aaa\uff0c\u92fc\u7434\uff0c\u5feb\u4e00\u9ede\u3002\u300d', 'Drums chooses Too slow: \u201cDrums says, Piano, speed up.\u201d')), e('h4', '', pair('\u8a9e\u97f3\u8207\u5e38\u7528\u77ed\u53e5', 'Voice & saved phrases')), buttonLook(pair('\u555f\u7528\uff0f\u8a66\u807d', 'Enable / test')), sampleVolume(pair('\u8a9e\u97f3\u97f3\u91cf', 'Voice volume'), 100), note(pair('\u9019\u88e1\u53ea\u8aaa\u660e\u64cd\u4f5c\uff0c\u4e0d\u6703\u64ad\u5831\u6216\u50b3\u9001\u8a0a\u606f\u3002', 'This preview never speaks or sends a message.')));
        }
        else if (scene === 'song') {
            preview.append(e('h3', '', pair('\u65b0\u589e\u6b4c\u66f2', 'Add song')), field(pair('\u6b4c\u66f2\u540d\u7a31', 'Song name'), pick(pair('\u672c\u9031\u958b\u5834\u8a69\u6b4c', 'Opening song'))));
            const g = e('div', 'tour-preview-grid two');
            g.append(field(pair('\u901f\u5ea6 BPM', 'Tempo BPM'), '96'), field(pair('\u62cd\u865f', 'Time signature'), '4/4'), field(pair('\u97f3\u7b26\u7d30\u5206', 'Subdivision'), pick(pair('\u516b\u5206\u97f3\u7b26', 'Eighth notes'))), field(pair('\u9810\u5099\u62cd', 'Count-in'), pick(pair('1 \u5c0f\u7bc0', '1 bar'))));
            preview.append(g, e('h4', '', pair('\u7de8\u8f2f\u6642\u4e5f\u80fd\u6392\u5e8f\u8207\u522a\u9664', 'Editing also lets you reorder or delete')), buttonLook(pair('\u5132\u5b58\u6b4c\u66f2', 'Save song'), true), note(pair('\u7bc4\u4f8b\u4e0d\u6703\u5beb\u5165\u4f60\u7684\u6b4c\u55ae\u3002', 'This example does not add anything to your setlist.')));
        }
        else if (scene === 'appearance') {
            preview.append(e('h3', '', pair('\u756b\u9762\u8207\u62cd\u9ede\u63d0\u793a', 'Display & beat cues')));
            const head = e('div', 'tour-demo-mini-head');
            head.append(e('span', '', pair('\u653e\u5927\uff0f\u7e2e\u5c0f\u7bc0\u62cd\u5668', 'Expand / restore the metronome')), cloneSafe('#focusBtn'));
            preview.append(head, cloneSafe('#settingsDialog .settings-appearance'), cloneSafe('#settingsDialog .settings-flash'), note(pair('\u87a2\u5149\u50c5\u51fa\u73fe\u5728\u7bc0\u62cd\u5340\u584a\uff1a\u6dfa\u8272\u6a21\u5f0f\u9ed1\u8272\uff0c\u6df1\u8272\u6a21\u5f0f\u767d\u8272\u3002\u9810\u8a2d\u95dc\u9589\uff0c\u6559\u5b78\u4e0d\u6703\u958b\u555f\u9583\u720d\u3002', 'Glow stays inside the metronome: black in light mode, white in dark mode. It is off by default; the tour will not enable it.')));
        }
        else if (scene === 'tones') {
            preview.append(e('h3', '', pair('\u7bc0\u62cd\u97f3\u8272', 'Click sound')), grid([pair('\u6728\u584a', 'Woodblock'), pair('\u6e05\u6670\u96fb\u5b50', 'Clear electronic'), pair('\u725b\u9234', 'Cowbell'), pair('\u77ed\u9234', 'Short bell'), pair('\u99ac\u6797\u5df4', 'Marimba')], 4, true), e('h4', '', pair('\u8f38\u51fa\u5f37\u5ea6', 'Output strength')), grid([pair('\u6a19\u6e96', 'Standard'), pair('\u52a0\u5f37', 'Boost')], -1, true), e('h4', '', pair('\u78ba\u8a8d\u8033\u6a5f\u5be6\u969b\u807d\u5230\u7684\u8072\u97f3', 'Check what you hear in your headphones')), buttonLook(pair('\u8a66\u807d\u97f3\u8272', 'Preview sound')), note(pair('\u793a\u610f\u756b\u9762\u4e0d\u767c\u8072\uff0c\u4e5f\u4e0d\u66f4\u6539\u4f60\u7684\u97f3\u8272\u3002', 'The teaching preview makes no sound and does not change your tone.')));
        }
        else if (scene === 'output') {
            preview.append(e('h3', '', pair('\u8072\u97f3\u8f38\u51fa\u8207\u6821\u6b63', 'Audio output & calibration')), e('label', 'field-label', pair('\u8072\u97f3\u8f38\u51fa\u88dd\u7f6e', 'Output device')), cloneSafe('#audioOutput'), note(pair('\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u9078\u64c7\u6642\uff0c\u4f7f\u7528\u7cfb\u7d71\u9810\u8a2d\u8033\u6a5f\uff0f\u5587\u53ed\u3002', 'When browser output selection is unavailable, use your system\u2019s headphones or speakers.')), cloneSafe('#settingsDialog .calibration'));
            preview.append(e('div', 'tour-demo-callout', pair('\u81ea\u52d5\u5ef6\u9072\u4f30\u8a08\uff0c\u4e0d\u7b49\u65bc\u5be6\u969b\u91cf\u6e2c\u3002\u4e5f\u53ef\u52fe\u9078\u300c\u64ad\u653e\u6642\u4fdd\u6301\u87a2\u5e55\u958b\u555f\u300d\uff0c\u4f46\u4ecd\u9700\u88dd\u7f6e\u652f\u63f4\u3002', 'Automatic output-latency estimates are not a measurement. Keep screen awake can also be enabled when supported by your device.')));
        }
        else if (scene === 'game') {
            preview.append(e('h3', '', pair('\u7bc0\u594f\u8a18\u61b6\u6311\u6230', 'Rhythm memory challenge')), sampleVolume(pair('\u904a\u6232\u97f3\u91cf', 'Game volume'), 100));
            const list = e('div', 'tour-preview-steps');
            [pair('\u5148\u807d\u7cfb\u7d71\u793a\u7bc4\u7684\u7bc0\u594f\u3002', 'Listen to the rhythm demonstration.'), pair('\u63db\u4f60\u6642\u9ede\u6309\u6216\u6309\u7a7a\u767d\u9375\uff0c\u6572\u51fa\u525b\u624d\u7684\u7bc0\u594f\u3002', 'When it is your turn, tap or press Space to repeat it.'), pair('\u6536\u8d77\u5f8c\u53ef\u7e7c\u7e8c\u6216\u91cd\u73a9\uff1b\u8fd4\u56de\u5f8c\u4f9d\u539f\u72c0\u614b\u6062\u5fa9\u7bc0\u62cd\u8072\u3002', 'Reopen to continue or restart. Returning restores the prior local metronome sound state.')].forEach((t, i) => { const row = e('div', 'tour-preview-line'); row.append(e('span', '', String(i + 1)), e('span', '', t)); list.append(row); });
            preview.append(list, e('div', 'tour-demo-callout', pair('10 \u95dc \u00b7 \u6bcf\u984c 4 \u62cd \u00b7 \u4fdd\u7559\u6700\u9ad8\u5206', '10 levels \u00b7 4 beats per question \u00b7 High-score record')), buttonLook(pair('\u958b\u59cb\u6311\u6230', 'Start challenge'), true), note(pair('\u9019\u662f\u6559\u5b78\u793a\u610f\uff0c\u4e0d\u6703\u958b\u59cb\u904a\u6232\u6216\u5207\u63db\u8072\u97f3\u3002', 'This is a teaching preview. It will not start the game or change audio.')));
        }
        scroller.scrollTop = 0;
    }
    function bounds(n) { const r = n.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom }; }
    function measure() {
        if (!active)
            return;
        const rect = coach.getBoundingClientRect();
        document.documentElement.style.setProperty('--tour-dock-height', Math.ceil(rect.height) + 'px');
    }
    function reveal() {
        if (!active || STEPS[index].scene)
            return;
        if (focusTarget)
            focusTarget.classList.remove('tour-focus');
        focusTarget = document.querySelector(STEPS[index].target);
        if (!focusTarget || !focusTarget.getClientRects().length)
            return;
        focusTarget.classList.add('tour-focus');
        const viewport = app.getBoundingClientRect(), r = focusTarget.getBoundingClientRect();
        const desired = r.height > viewport.height - 46 ? viewport.top + 22 : viewport.top + Math.max(20, (viewport.height - r.height) / 2);
        app.scrollTop += r.top - desired;
    }
    function layout(revealTarget = false) {
        if (!active)
            return;
        measure();
        if (revealTarget) {
            const token = epoch;
            requestAnimationFrame(() => { if (active && token === epoch)
                reveal(); });
        }
    }
    function texts() {
        button.title = pick(copy.entry) + "";
        button.setAttribute('aria-label', pick(copy.entry) + " ");
        byId('tourHeading').textContent = pick(copy.entry);
        byId('tourClose').title = pick(copy.close);
        byId('tourClose').setAttribute('aria-label', pick(copy.close));
        byId('tourLang').textContent = I18N.languageCode();
        byId('tourLang').setAttribute('aria-label', I18N.languageLabel());

        byId('tourJumpLabel').textContent = pick(copy.jump);
        byId('tourReadonly').textContent = pick(copy.readonly);
        byId('tourPreviewTag').textContent = pick(copy.preview);
        byId('tourPreviewHint').textContent = pick(copy.previewHint);
        byId('tourJump').replaceChildren();
        let current = -1, group;
        STEPS.forEach((step, i) => { if (current !== step.group) {
            current = step.group;
            group = e('optgroup');
            group.label = pick(copy.chapter[current]);
            byId('tourJump').append(group);
        } group.append(new Option((i + 1) + '. ' + pick(step.title), String(i))); });
    }
    function description(step) {
        if (window.MetronomeDiagnostics?.snapshot().role === 'guest' && step.id === 'play-tap') {
            return pair('\u623f\u9593\u7684\u901f\u5ea6\u8207\u958b\u59cb\uff0f\u505c\u6b62\u7531\u4e3b\u6301\u4eba\u63a7\u5236\u3002\u4f60\u7684\u4e2d\u9593\u6309\u9215\u53ea\u5207\u63db\u672c\u6a5f\u6536\u807d\uff1b\u6c92\u8072\u97f3\u6642\u53ef\u7528\u5b83\u6062\u5fa9\u672c\u6a5f\u8072\u97f3\u3002', 'In a room, the host controls tempo and Start/Stop. Your center button controls local listening only; use it to restore audio if this device goes silent.');
        }
        return step.body;
    }
    function render(focus = false) {
        if (!active)
            return;
        epoch++;
        const step = STEPS[index];
        if (focusTarget) {
            focusTarget.classList.remove('tour-focus');
            focusTarget = null;
        }
        byId('tourChapter').textContent = pick(copy.chapter[step.group]);
        title.textContent = pick(step.title);
        bodyText.textContent = pick(description(step));
        byId('tourLocation').textContent = pick(step.where);
        byId('tourCounter').textContent = (index + 1) + ' / ' + STEPS.length;
        byId('tourProgress').style.width = ((index + 1) / STEPS.length * 100) + '%';
        byId('tourJump').value = String(index);
        byId('tourPrevLabel').textContent = pick(copy.prev);
        byId('tourNextLabel').textContent = pick(index === STEPS.length - 1 ? copy.finish : copy.next);
        byId('tourPrev').disabled = index === 0;
        stage.hidden = !step.scene;
        if (step.scene)
            renderScene(step.scene);
        coach.querySelector('.tour-coach-scroll').scrollTop = 0;
        layout(true);
        if (focus) {
            title.focus({ preventScroll: true });
        }
    }
    function start() {
        if (active)
            return;
        if (document.querySelector('dialog[open]')) {
            toast(pick(copy.busy));
            return;
        }
        returnState = { x: window.scrollX, y: window.scrollY, focus: document.activeElement, headerInert: app.querySelector('header').inert, mainInert: app.querySelector('main').inert };
        active = true;
        index = 0;
        epoch++;
        coach.hidden = false;
        document.body.classList.add('tour-active');
        app.querySelector('header').inert = true;
        app.querySelector('main').inert = true;
        button.setAttribute('aria-expanded', 'true');
        texts();
        render();
        byId('tourNext').focus({ preventScroll: true });
    }
    function end(restoreFocus = true) {
        if (!active)
            return;
        active = false;
        epoch++;
        if (focusTarget)
            focusTarget.classList.remove('tour-focus');
        focusTarget = null;
        stage.hidden = true;
        coach.hidden = true;
        preview.replaceChildren();
        button.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('tour-active');
        const saved = returnState;
        returnState = null;
        app.querySelector('header').inert = saved?.headerInert;
        app.querySelector('main').inert = saved?.mainInert;
        document.documentElement.style.removeProperty('--tour-dock-height');
        app.scrollTop = 0;
        if (saved)
            window.scrollTo({ left: saved.x, top: saved.y, behavior: 'instant' });
        if (restoreFocus)
            button.focus({ preventScroll: true });
    }
    function go(next, focus = true) { if (!active)
        return; if (next >= STEPS.length) {
        end();
        return;
    } index = Math.max(0, next); render(focus); }
    button.addEventListener('click', start);
    byId('tourClose').addEventListener('click', () => end());
    byId('tourPrev').addEventListener('click', () => go(index - 1));
    byId('tourNext').addEventListener('click', () => go(index + 1));
    byId('tourJump').addEventListener('change', e => go(Number(e.target.value)));
    byId('tourLang').addEventListener('click', () => I18N.openLanguageMenu(byId('tourLang')));
    I18N.onChange(() => { texts(); if (active)
        render(false); });
    window.addEventListener('keydown', event => {
        if (!active)
            return;
        event.stopImmediatePropagation();
        if (event.key === 'Escape') {
            event.preventDefault();
            end();
            return;
        }
        if (event.key === 'Tab') {
            const controls = [...coach.querySelectorAll('button:not(:disabled),select:not(:disabled)')].filter(n => n.getClientRects().length);
            const i = controls.indexOf(document.activeElement);
            event.preventDefault();
            const next = event.shiftKey ? (i <= 0 ? controls.length - 1 : i - 1) : (i < 0 || i === controls.length - 1 ? 0 : i + 1);
            controls[next]?.focus();
            return;
        }
        if (!event.repeat && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('select,input,textarea')) {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                go(index + 1);
            }
            else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                go(index - 1);
            }
        }
    }, true);
    const observer = new ResizeObserver(() => { if (!active)
        return; cancelAnimationFrame(resizeQueued); resizeQueued = requestAnimationFrame(() => layout(false)); });
    observer.observe(coach);
    window.addEventListener('resize', () => { if (active)
        layout(true); });
    window.visualViewport?.addEventListener('resize', () => { if (active)
        layout(true); });
    new MutationObserver(() => { if (active && document.querySelector('dialog[open]'))
        end(false); }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });
    window.addEventListener('pagehide', () => end(false));
    window.TempoliveTutorial = Object.freeze({ start, close: () => end(), snapshot: () => ({ version: '2.1.3', active, index, step: STEPS[index].id, total: STEPS.length, language: I18N.lang, preview: active && !!STEPS[index].scene, coach: active ? bounds(coach) : null, viewport: active ? bounds(STEPS[index].scene ? stage : app) : null, target: active && focusTarget ? bounds(focusTarget) : null, steps: STEPS.map((s, i) => ({ index: i, id: s.id, group: s.group, preview: !!s.scene })) }) });
    I18N.bindAttr(stage, 'aria-label', () => pick(copy.preview));
    I18N.bindAttr(button, 'title', () => pick(copy.entry) + " ");
    I18N.bindAttr(button, 'aria-label', () => pick(copy.entry) + " ");
    I18N.bindAttr(byId('tourClose'), 'title', () => pick(copy.close));
    I18N.bindAttr(byId('tourClose'), 'aria-label', () => pick(copy.close));
    I18N.bindAttr(byId('tourLang'), 'aria-label', () => I18N.languageLabel());
    texts();
})();
;
(() => {
    const beats = document.getElementById('beats');
    let pending = 0, last = '';
    const transport = document.querySelector('.metro-card .transport');
    const normalControls = ['playBtn', 'transportPrevSong', 'transportNextSong', 'tapBtn'];
    const stageControls = ['playBtn', 'transportPrevSong', 'transportNextSong', 'tapBtn'];
    function syncTransportOrder() {
        const stage = document.body.classList.contains('focus-mode') && !document.body.classList.contains('tour-active');
        const nodes = (stage ? stageControls : normalControls).map(id => document.getElementById(id));
        if (!transport || nodes.some(node => !node) || nodes.every((node, i) => transport.children[i] === node))
            return;
        const focused = document.activeElement, retainFocus = transport.contains(focused);
        transport.append(...nodes);
        if (retainFocus && focused?.isConnected)
            focused.focus({ preventScroll: true });
    }
    const liveButton = document.getElementById('bandQuickOpen');
    const liveSlot = document.getElementById('stageLiveSlot');
    const liveHome = document.createComment('LIVE launcher home in normal view');
    if (liveButton)
        liveButton.before(liveHome);
    function syncStageLivePosition() {
        if (!liveButton || !liveSlot)
            return;
        const stage = document.body.classList.contains('focus-mode') && !document.body.classList.contains('tour-active');
        const joined = document.body.classList.contains('band-in-room');
        const docked = stage && joined;
        if (docked ? liveButton.parentElement === liveSlot : liveButton.previousSibling === liveHome)
            return;
        const retainFocus = document.activeElement === liveButton;
        if (docked)
            liveSlot.append(liveButton);
        else
            liveHome.after(liveButton);
        if (retainFocus && liveButton.getClientRects().length)
            liveButton.focus({ preventScroll: true });
    }
    function layout() {
        pending = 0;
        syncStageLivePosition();
        syncTransportOrder();
        if (!document.body.classList.contains('focus-mode') || document.body.classList.contains('tour-active'))
            return;
        const n = beats.children.length;
        if (!n)
            return;
        const r = beats.getBoundingClientRect(), gap = parseFloat(getComputedStyle(beats).gap) || 10;
        if (r.width <= 0 || r.height <= 0)
            return;
        let best = { score: Infinity, cols: 2, rows: 2, w: 100, h: 100 };
        for (let cols = 1; cols <= n; cols++) {
            const rows = Math.ceil(n / cols), w = (r.width - gap * (cols - 1)) / cols, h = (r.height - gap * (rows - 1)) / rows;
            if (w <= 0 || h <= 0)
                continue;
            const score = Math.abs(Math.log(w / h)) + (cols * rows - n) * .28;
            if (score < best.score)
                best = { score, cols, rows, w, h };
        }
        const font = Math.floor(Math.min(best.w, best.h) * .40), key = [n, best.cols, best.rows, font].join(':');
        if (key !== last) {
            last = key;
            beats.style.setProperty('--stage-cols', best.cols);
            beats.style.setProperty('--stage-rows', best.rows);
            beats.style.setProperty('--stage-font', font + 'px');
        }
    }
    function queue() { if (!pending)
        pending = requestAnimationFrame(layout); }
    new MutationObserver(queue).observe(beats, { childList: true });
    new MutationObserver(queue).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    if (window.ResizeObserver)
        new ResizeObserver(queue).observe(beats);
    window.addEventListener('resize', queue);
    window.visualViewport?.addEventListener('resize', queue);
    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape' || event.defaultPrevented || document.querySelector('dialog[open]') || document.querySelector('#languageMenu:not([hidden])') || document.body.classList.contains('tour-active'))
            return;
        if (document.body.classList.contains('focus-mode')) {
            event.preventDefault();
            toggleFocus();
            document.getElementById('focusBtn').focus({ preventScroll: true });
        }
    });
    window.TempoliveStageView = Object.freeze({ layout: queue, snapshot: () => ({ active: document.body.classList.contains('focus-mode'), columns: Number(beats.style.getPropertyValue('--stage-cols')), rows: Number(beats.style.getPropertyValue('--stage-rows')) }) });
    queue();
})();
;
(() => {
    const boundContexts = new WeakSet(), boundGates = new WeakSet();
    let timer = 0, busy = false, attempts = 0, episode = false, status = 'idle', lastReason = '', totalAttempts = 0;
    const wanted = () => state.continueAudio !== false && !!engine.ctx && desiredEvent().playing && !state.mute && state.volume > 0 && !engine.gameOutputSuppressed && room.role !== 'connecting' && (room.role !== 'guest' || room.synced);
    function cancel(reason = 'idle') { clearTimeout(timer); timer = 0; attempts = 0; episode = false; status = reason; }
    function check(reason = 'audio-state') {
        lastReason = reason;
        if (!wanted()) {
            cancel('not-requested');
            return;
        }
        if (engine.isReady()) {
            if (episode) {
                engine.resetOutputTiming();
                engine.invalidate();
                engine.schedule();
            }
            cancel('running');
            guestAudioRecoveryRequired = false;
            renderRecoveryControl();
            return;
        }
        if (busy || timer || engine.recoverPromise)
            return;
        if (['foreground', 'window-focus', 'system-audio-session', 'pageshow', 'devicechange'].includes(reason) && attempts >= 3)
            attempts = 0;
        if (navigator.audioSession?.state === 'interrupted') {
            status = 'waiting-for-system';
            renderRecoveryControl();
            return;
        }
        if (attempts >= 3) {
            status = 'manual-action-required';
            renderRecoveryControl();
            return;
        }
        episode = true;
        const context = engine.ctx, generation = room.generation;
        timer = setTimeout(async () => {
            timer = 0;
            if (!wanted() || context !== engine.ctx || generation !== room.generation)
                return;
            busy = true;
            attempts++;
            totalAttempts++;
            status = 'resuming';
            try {
                await engine.ensure();
                if (context === engine.ctx && wanted() && engine.isReady()) {
                    engine.resetOutputTiming();
                    engine.invalidate();
                    engine.schedule();
                    guestAudioRecoveryRequired = false;
                    cancel('running');
                }
            }
            catch (_) {
                status = 'retrying';
            }
            finally {
                busy = false;
                renderRecoveryControl();
                if (wanted() && !engine.isReady())
                    check('retry');
            }
        }, [120, 500, 1400][attempts] || 1400);
    }
    function bindContext(context) { if (!context || boundContexts.has(context))
        return; boundContexts.add(context); context.addEventListener('statechange', () => { if (context === engine.ctx)
        check('audio-state'); }); }
    function bindGate(gate) { if (!gate || boundGates.has(gate))
        return; boundGates.add(gate); gate.addEventListener('pause', () => check('media-pause')); gate.addEventListener('playing', () => check('media-playing')); }
    function refreshSetting() { document.getElementById('continueAudio').checked = state.continueAudio !== false; }
    document.getElementById('continueAudio').addEventListener('change', e => { state.continueAudio = e.target.checked; saveLocal(true); cancel(); check('enabled'); });
    document.addEventListener('visibilitychange', () => check(document.hidden ? 'background' : 'foreground'));
    navigator.audioSession?.addEventListener?.('statechange', () => check('system-audio-session'));
    window.addEventListener('focus', () => check('window-focus'));
    window.addEventListener('pageshow', () => check('pageshow'));
    for (const id of ['playBtn', 'muteBtn', 'volume'])
        document.getElementById(id).addEventListener(id === 'volume' ? 'input' : 'click', () => queueMicrotask(() => check('user-action')));
    window.TempoliveAudioContinuity = Object.freeze({ check, cancel, bindContext, bindGate, refreshSetting, snapshot: () => ({ enabled: state.continueAudio !== false, status, lastReason, attempts, totalAttempts, pending: !!timer, inFlight: busy }) });
    bindContext(engine.ctx);
    bindGate(engine.mediaGate);
    refreshSetting();
})();
;
(() => {
    'use strict';
    const BRAND = 'TEMPOLIVE';
    const ARTWORK = location.protocol === 'file:' ? './tempolive-cover.png' : '/TEMPOLIVE/tempolive-cover.png?v=launch-r1';
    const artSrc = (() => { try {
        return new URL(ARTWORK, document.baseURI).href;
    }
    catch (e) {
        return ARTWORK;
    } })();
    const COPY = Object.freeze({
        'zh-Hant': {
            heading: '\u9396\u5b9a\u756b\u9762\u54c1\u724c\u8cc7\u8a0a',
            subtitle: '\u9023\u7dda\u7bc0\u62cd\u5668',
            hint: '\u64ad\u653e\u6642\u63d0\u4f9b TEMPOLIVE \u540d\u7a31\u8207 Logo\uff1b\u5be6\u969b\u986f\u793a\u7531\u7cfb\u7d71\u6c7a\u5b9a\uff0c\u4ecd\u53ef\u80fd\u4fdd\u7559\u7db2\u7ad9\u4f86\u6e90\u3002',
            unsupported: '\u6b64\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u81ea\u8a02\u5a92\u9ad4\u8cc7\u8a0a\uff1b\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668\u64cd\u4f5c\u3002',
            rejected: '\u700f\u89bd\u5668\u76ee\u524d\u672a\u63a5\u53d7\u54c1\u724c\u8cc7\u8a0a\uff1b\u4e0d\u5f71\u97ff\u7bc0\u62cd\u5668\u64cd\u4f5c\u3002'
        },
        en: {
            heading: 'Lock-screen branding', subtitle: 'Connected metronome',
            hint: 'Provides the TEMPOLIVE name and logo during playback. Your system controls the final display and may still show the website address.',
            unsupported: 'This browser does not support custom media metadata. Metronome controls are unaffected.',
            rejected: 'The browser has not accepted the branding metadata. Metronome controls are unaffected.'
        }
    });
    const frame = document.getElementById('rhythmGameFrame') || document.getElementById('rhythmGameFrameTemplate')?.content.querySelector('iframe');
    const sessions = new WeakMap(), boundDocuments = new WeakSet();
    let writes = 0, lastError = '', pageExiting = false;
    const language = () => window.TempoliveI18n?.lang || document.documentElement.lang || 'zh-Hant';
    const copy = () => COPY[language()] || COPY['zh-Hant'];
    function api(win) { try {
        return win?.navigator?.mediaSession && typeof win.MediaMetadata === 'function' ? win.navigator.mediaSession : null;
    }
    catch (e) {
        return null;
    } }
    function paintHint() {
        const node = document.getElementById('mediaBrandingHint');
        if (node)
            node.textContent = api(window) ? (lastError ? copy().rejected : copy().hint) : copy().unsupported;
    }
    function writeMetadata(win, force = false) {
        const session = api(win);
        if (!session || pageExiting)
            return false;
        const subtitle = copy().subtitle;
        try {
            const metadata = session.metadata;
            const correct = metadata?.title === BRAND && metadata.artist === subtitle && metadata.album === '' && metadata.artwork?.some(image => image.src === artSrc);
            if (!force && correct)
                return true;
            session.metadata = new win.MediaMetadata({ title: BRAND, artist: subtitle, album: '', artwork: [{ src: artSrc, sizes: '512x512', type: 'image/png' }] });
            sessions.set(win, { title: BRAND, artist: subtitle, artwork: true });
            writes++;
            if (win === window)
                lastError = '';
            return true;
        }
        catch (error) {
            if (win === window)
                lastError = error?.name || 'MetadataError';
            return false;
        }
    }
    function gameWindow() { try {
        return frame?.contentDocument?.getElementById('start-btn') ? frame.contentWindow : null;
    }
    catch (e) {
        return null;
    } }
    function refresh(force = false) {
        writeMetadata(window, force);
        const game = gameWindow();
        if (game)
            writeMetadata(game, force);
        paintHint();
    }
    function bind(win) {
        let doc;
        try {
            doc = win.document;
        }
        catch (e) {
            return;
        }
        if (boundDocuments.has(doc))
            return;
        boundDocuments.add(doc);
        writeMetadata(win);
        for (const type of ['play', 'playing', 'loadedmetadata'])
            doc.addEventListener(type, () => writeMetadata(win, true), true);
        doc.addEventListener('click', event => {
            if (!event.target?.closest?.('button'))
                return;
            writeMetadata(win);
            queueMicrotask(() => { writeMetadata(win); paintHint(); });
        }, true);
    }
    function mount() {
        bind(window);
        const game = gameWindow();
        if (game)
            bind(game);
        const label = document.getElementById('mediaBrandingLabel');
        const hint = document.getElementById('mediaBrandingHint');
        if (window.TempoliveI18n) {
            if (label)
                TempoliveI18n.bind(label, () => copy().heading);
            if (hint)
                TempoliveI18n.bind(hint, () => api(window) ? (lastError ? copy().rejected : copy().hint) : copy().unsupported);
            TempoliveI18n.onChange(() => refresh(true));
        }
        else {
            if (label)
                label.textContent = copy().heading;
            paintHint();
        }
        refresh();
    }
    frame?.addEventListener('load', () => { const game = gameWindow(); if (game)
        bind(game); refresh(true); });
    document.addEventListener('visibilitychange', () => refresh(true));
    window.addEventListener('pageshow', () => { pageExiting = false; refresh(true); });
    window.addEventListener('pagehide', () => { pageExiting = true; });
    window.TempoliveMediaBranding = Object.freeze({
        refresh: () => refresh(true),
        snapshot: () => ({ version: '2.1.9-media-branding', supported: !!api(window), title: api(window)?.metadata?.title || '', artist: api(window)?.metadata?.artist || '', artwork: !!api(window)?.metadata?.artwork?.length, artworkSource: artSrc.startsWith('data:') ? 'embedded-png' : 'site-png', gameSupported: !!api(gameWindow()), writes, error: lastError })
    });
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', mount, { once: true });
    else
        mount();
})();
;
(() => {
    'use strict';
    const session = navigator.mediaSession;
    if (!session || typeof session.setActionHandler !== 'function')
        return;
    const registrations = {}, boundContexts = new WeakSet(), boundGates = new WeakSet();
    let serial = 0, pending = false, seenPlayback = false, queued = false, lastAction = '', lastError = '';
    let playTask = null, carrierAttemptAt = -Infinity, carrierPending = false, refreshTimer = 0, lastRequested = false;
    let timelineDirty = true, timelineMode = 'not-set', timelineState = '', timelineGate = null;
    let timelineMetadata = null, timelineWrites = 0, timelineError = '';
    const isGame = () => engine.gameOutputSuppressed || !!document.getElementById('rhythmGameDialog')?.open;
    const connectedRole = () => room.role === 'solo' || room.role === 'host' || room.role === 'guest';
    const requested = () => connectedRole() && !isGame() && !state.mute && state.volume > 0 &&
        (desiredEvent().playing || room.startPending || pending);
    const supported = () => !!registrations.play && !!registrations.pause;
    function updateTimeline() {
        if (typeof session.setPositionState !== 'function') {
            timelineMode = 'unavailable';
            timelineDirty = false;
            return;
        }
        if (isGame()) {
            timelineDirty = true;
            return;
        }
        if (!timelineDirty && timelineState === session.playbackState &&
            timelineMetadata === session.metadata && timelineGate === engine.mediaGate)
            return;
        timelineDirty = false;
        timelineState = session.playbackState;
        timelineMetadata = session.metadata;
        timelineGate = engine.mediaGate;
        try {
            session.setPositionState();
            timelineWrites++;
            timelineError = '';
            timelineMode = engine.mediaGateMode === 'live-stream' ? 'live-source-no-position' : 'no-position';
        }
        catch (error) {
            timelineMode = 'rejected';
            timelineError = error?.name || 'PositionStateError';
        }
    }
    function timelineChanged() { timelineDirty = true; refresh(); }
    function stopCarrier() {
        engine.stopMediaGate();
    }
    function reportError(error) {
        lastError = error?.name || 'AudioUnavailable';
        if (!document.hidden)
            toast(localText('system'));
        renderRecoveryControl();
    }
    function bindAudio() {
        const ctx = engine.ctx, gate = engine.mediaGate;
        if (ctx && !boundContexts.has(ctx)) {
            boundContexts.add(ctx);
            timelineDirty = true;
            ctx.addEventListener('statechange', refresh);
        }
        if (gate && !boundGates.has(gate)) {
            boundGates.add(gate);
            timelineDirty = true;
            for (const name of ['loadedmetadata', 'durationchange', 'play', 'playing', 'pause', 'ended', 'error', 'ratechange', 'seeked'])
                gate.addEventListener(name, timelineChanged);
        }
    }
    function synchronize() {
        queued = false;
        bindAudio();
        if (desiredEvent().playing || room.startPending)
            seenPlayback = true;
        const wants = requested(), wasRequested = lastRequested, ctx = engine.ctx;
        lastRequested = wants;
        if (!wants) {
            if (engine.mediaGate && !engine.mediaGate.paused && !engine.previewVoices.length &&
                !window.TempoliveBand?.snapshot()?.speaking && (wasRequested || wallNow() >= engine.gateHoldUntil))
                stopCarrier();
        }
        else if (ctx && ctx.state === 'running' && navigator.audioSession?.state !== 'interrupted') {
            if (!engine.mediaGate || engine.mediaGate.paused) {
                if (!carrierPending && performance.now() - carrierAttemptAt > 3000) {
                    carrierAttemptAt = performance.now();
                    carrierPending = true;
                    try {
                        Promise.resolve(engine.openMediaGate()).catch(() => { }).finally(() => {
                            carrierPending = false;
                            if (!requested())
                                stopCarrier();
                            refresh();
                        });
                    }
                    catch (_) {
                        carrierPending = false;
                    }
                }
            }
        }
        const playing = wants && engine.isReady() && navigator.audioSession?.state !== 'interrupted' &&
            (room.role !== 'guest' || room.synced);
        const playbackState = playing ? 'playing' : seenPlayback ? 'paused' : 'none';
        try {
            if (session.playbackState !== playbackState)
                session.playbackState = playbackState;
        }
        catch (error) {
            lastError = error?.name || 'PlaybackStateError';
        }
        updateTimeline();
    }
    function refresh() {
        if (queued)
            return;
        queued = true;
        queueMicrotask(synchronize);
    }
    function refreshSoon() {
        timelineDirty = true;
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(refresh, 80);
        refresh();
    }
    function play() {
        if (isGame() || !connectedRole())
            return Promise.resolve(false);
        if (playTask)
            return playTask;
        const token = ++serial, generation = room.generation, role = room.role;
        lastAction = 'play';
        lastError = '';
        pending = true;
        seenPlayback = true;
        if (state.volume === 0) {
            pending = false;
            if (!document.hidden)
                toast(localText('zero'));
            refresh();
            return Promise.resolve(false);
        }
        state.mute = false;
        engine.setVolume();
        window.TempoliveMediaBranding?.refresh();
        let task;
        try {
            if (role === 'guest') {
                const ready = (guestAudioRecoveryRequired && desiredEvent().playing) ? engine.recover() : engine.ensure();
                task = Promise.resolve(ready).then(() => {
                    if (token !== serial || generation !== room.generation || role !== room.role)
                        return false;
                    guestAudioRecoveryRequired = false;
                    engine.setVolume();
                    engine.schedule();
                    room.kickRecovery();
                    room.sendLocalStatus();
                    return true;
                });
            }
            else {
                task = Promise.resolve(startPlayback({ fromMediaSession: true })).then(() => token === serial && generation === room.generation && role === room.role && desiredEvent().playing);
            }
        }
        catch (error) {
            task = Promise.reject(error);
        }
        const tracked = task.catch(error => { if (token === serial)
            reportError(error); return false; }).finally(() => {
            if (playTask === tracked)
                playTask = null;
            if (token === serial)
                pending = false;
            if (!requested())
                stopCarrier();
            renderAudio();
            renderControls();
            refresh();
        });
        playTask = tracked;
        refresh();
        return tracked;
    }
    function pause() {
        if (isGame() || !connectedRole())
            return;
        ++serial;
        pending = false;
        playTask = null;
        lastAction = 'pause';
        lastError = '';
        seenPlayback = true;
        window.TempoliveAudioContinuity?.cancel('media-session-pause');
        if (room.role === 'guest') {
            state.mute = true;
            engine.setVolume();
            if (engine.ctx?.state === 'running')
                try {
                    engine.ctx.suspend().catch(() => { });
                }
                catch (_) { }
            room.sendLocalStatus();
        }
        else if (desiredEvent().playing || room.startPending) {
            stopTransport();
        }
        stopCarrier();
        renderAudio();
        renderControls();
        refreshSoon();
    }
    for (const [name, handler] of [['play', play], ['pause', pause], ['stop', pause]]) {
        try {
            session.setActionHandler(name, handler);
            registrations[name] = true;
        }
        catch (_) {
            registrations[name] = false;
        }
    }
    for (const name of ['seekbackward', 'seekforward', 'seekto', 'previoustrack', 'nexttrack']) {
        try {
            session.setActionHandler(name, null);
        }
        catch (_) { }
    }
    updateTimeline();
    for (const name of ['click', 'input'])
        document.addEventListener(name, refreshSoon, true);
    document.addEventListener('visibilitychange', refreshSoon);
    window.addEventListener('pageshow', refreshSoon);
    window.addEventListener('pagehide', () => { ++serial; pending = false; playTask = null; clearTimeout(refreshTimer); });
    navigator.audioSession?.addEventListener?.('statechange', refresh);
    const game = document.getElementById('rhythmGameDialog');
    if (game)
        new MutationObserver(refresh).observe(game, { attributes: true, attributeFilter: ['open'] });
    window.TempoliveMediaControls = Object.freeze({
        refresh, usesCarrier: supported,
        snapshot: () => ({ version: '2.4.6', supported: supported(), actions: { ...registrations },
            playbackState: session.playbackState, lastAction, error: lastError, pending,
            timelineMode, timelineWrites, timelineError,
            reportedDuration: null, carrierMode: engine.mediaGateMode,
            carrierDuration: engine.mediaGate?.duration === Infinity ? 'unbounded' : Number.isFinite(engine.mediaGate?.duration) ? engine.mediaGate.duration : null,
            carrierSeekableRanges: engine.mediaGate?.seekable?.length ?? 0,
            role: room.role, localMute: state.mute, carrierCreated: !!engine.mediaGate,
            carrierPlaying: !!engine.mediaGate && !engine.mediaGate.paused })
    });
    setInterval(refresh, 500);
    refresh();
})();
;
(() => {
    const standalone = () => navigator.standalone === true || !!window.matchMedia?.('(display-mode: standalone)').matches;
    window.TempoliveAppShell = Object.freeze({ snapshot: () => ({ release: 'app-r4-launch-isolation', standalone: standalone(), expectedIdentity: '/TEMPOLIVE/', manifestURL: document.querySelector('link[rel="manifest"]')?.href || '', appleCapable: document.querySelector('meta[name="apple-mobile-web-app-capable"]')?.content === 'yes', iconURLs: [...document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"]')].map(e => e.href), serviceWorkerAdded: !!window.TempoliveLaunchSafety?.snapshot().workerRegistered }) });
})();
;
window.TempoliveRuntimeRelease = "2.5.0-room-tools";
;
(() => {
    const panel = document.createElement('section');
    panel.className = 'calibration';
    panel.id = 'syncCompensationPanel';
    panel.dataset.i18nDynamic = '';
    panel.innerHTML = "<h3 style=\"display:flex;align-items:center;gap:8px;font-size:16px\"><span id=\"syncHeading\"></span></h3><p id=\"syncNetworkLine\" class=\"audio-explain\" style=\"margin-top:12px\"></p><p id=\"syncOutputLine\" class=\"audio-explain\"></p><p id=\"syncBufferLine\" class=\"audio-explain\"></p><p id=\"syncDetail\" class=\"audio-explain\" style=\"margin-top:10px\"></p><button type=\"button\" class=\"btn full\" id=\"syncRefresh\" style=\"margin-top:14px\"></button><p id=\"syncBoundary\" class=\"audio-explain\" style=\"margin-top:12px\"></p>";
    const target = document.querySelector('#audioPanel .audio-content');
    target.append(panel);
    for (const name of ['latency', 'latencyValue']) {
        const input = document.getElementById(name);
        input.min = '-1000';
        input.max = '1000';
    }
    const labels = document.querySelector('#latency').nextElementSibling?.children;
    if (labels?.length === 2)
        for (const label of labels)
            label.dataset.i18nDynamic = '';
    function snapshot() {
        const c = engine.outputClock, guest = room.role === 'guest';
        return { version: '2.3.0', role: room.role, networkOffsetMs: room.offset,
            clockTargetMs: guest ? room.clockTarget : 0, clockResidualMs: guest ? Math.abs(room.clockTarget - room.offset) : 0,
            rttMs: room.rtt, rttTailMs: room.rttTail || 0, clockSampleSpreadMs: room.spread, sampleCount: room.samples.length,
            networkSynced: room.synced, outputSource: state.autoLatency ? (c?.kind || 'unavailable') : 'off',
            reportedOutputMs: c?.reportedMs ?? null, localSchedulingLeadMs: Math.ceil(engine.requiredLeadMs()),
            manualCorrectionMs: state.latency, commandLeadMs: room.role === 'host' ? hostLead() : null, startPending: room.startPending,
            lateClicksSkipped: engine.dropped, acousticLatencyMeasured: false };
    }
    function paint() {
        if (labels?.length === 2) {
            labels[0].textContent = I18N.lang === 'zh-Hant' ? '\u63d0\u524d 1000 ms' : '1000 ms earlier';
            labels[1].textContent = I18N.lang === 'zh-Hant' ? '\u5ef6\u5f8c 1000 ms' : '1000 ms later';
        }
        const d = snapshot(), guest = room.role === 'guest';
        const key = room.role === 'solo' ? 'solo' : room.role === 'host' ? 'host' : !room.synced ? 'sampling' : d.clockResidualMs > 10 ? 'adjusting' : (room.spread || 0) > 20 ? 'unstable' : 'tracking';
        document.getElementById('syncHeading').textContent = syncText('heading');
        document.getElementById('syncNetworkLine').textContent = syncText('network') + ' | ' + syncText(key) + (guest && room.rtt !== null ? ' | RTT ' + room.rtt + ' ms' : '');
        document.getElementById('syncOutputLine').textContent = syncText('output') + ' | ' + syncText(d.outputSource) + (d.reportedOutputMs > 0 ? ' | ' + Math.round(d.reportedOutputMs) + ' ms' : '');
        const buffer = document.getElementById('syncBufferLine');
        buffer.hidden = room.role !== 'host';
        buffer.textContent = syncText('buffer') + ' | ' + d.commandLeadMs + ' ms';
        document.getElementById('syncDetail').textContent = syncText('pending');
        document.getElementById('syncBoundary').textContent = syncText('note');
        document.getElementById('syncRefresh').textContent = syncText('refresh');
    }
    document.getElementById('syncRefresh').addEventListener('click', async () => {
        const button = document.getElementById('syncRefresh');
        button.disabled = true;
        try {
            await engine.ensure();
            engine.resetOutputTiming();
            engine.sampleOutputTiming(true);
            engine.invalidate();
            engine.schedule();
            if (room.role !== 'solo')
                room.resync();
            room.sendLocalStatus();
            toast(syncText('refreshed'));
        }
        catch (e) {
            toast(e.message);
        }
        finally {
            button.disabled = false;
            paint();
        }
    });
    I18N.onChange(paint);
    document.getElementById('settingsBtn').addEventListener('click', paint);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) {
        engine.resetOutputTiming();
        engine.invalidate();
    } });
    setInterval(() => { if (document.getElementById('settingsDialog').open)
        paint(); }, 1000);
    window.TempoliveSync = Object.freeze({ snapshot });
    paint();
})();
(function () {
    function init() {
        'use strict';
        if (window.TempoliveSharePrompt)
            return;
        const reminderStyle = document.createElement('style');
        reminderStyle.id = 'tempolive-reminders-style';
        reminderStyle.textContent = "/* Production: scoped reminder styling. Existing metronome UI is unchanged. */\n#sharePromptDialog{box-sizing:border-box;inset:0;margin:auto;width:min(460px,calc(100vw - 32px));max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px);padding:0;border:1px solid var(--line);border-radius:26px;overflow:auto;background:var(--surface);color:var(--ink);font-family:inherit;box-shadow:0 24px 80px #0003;overscroll-behavior:contain;scrollbar-width:thin}\n#sharePromptDialog.sp-guide-open{width:min(540px,calc(100vw - 32px))}\n#sharePromptDialog::backdrop{background:#0005;backdrop-filter:blur(3px)}\n#sharePromptDialog .sp-head{display:flex;justify-content:space-between;align-items:center;padding:18px 22px 4px;gap:12px}\n#sharePromptDialog .sp-brand{display:flex;align-items:center;gap:9px;font-size:12px;font-weight:650;letter-spacing:.065em}\n#sharePromptDialog .sp-brand svg{width:25px;height:25px}\n#sharePromptDialog .sp-close{width:44px;height:44px;min-width:44px;min-height:44px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;color:var(--muted);background:transparent;border:0}\n#sharePromptDialog .sp-close:hover{background:var(--soft);color:var(--ink)}\n#sharePromptDialog .sp-content{padding:14px 28px 20px}\n#sharePromptDialog h2{font-size:28px;font-weight:700;line-height:1.42;letter-spacing:-.015em;margin:0 0 12px;overflow-wrap:anywhere;text-wrap:balance}\n#sharePromptDialog h2:focus{outline:none}\n#sharePromptDialog .sp-body{font-size:16px;line-height:1.85;color:var(--muted);margin:0 0 26px}\n#sharePromptDialog .sp-actions{display:flex;flex-direction:column;align-items:stretch;gap:8px}\n#sharePromptDialog .sp-main{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;min-height:68px;padding:16px 20px;border-radius:16px;font-size:22px;font-weight:650;line-height:1.45;background:var(--strong);color:var(--on-strong);border:1px solid var(--strong);text-align:center;text-decoration:none;letter-spacing:.01em;overflow-wrap:anywhere}\n#sharePromptDialog .sp-main:hover{opacity:.92}\n#sharePromptDialog .sp-main:active{transform:translateY(1px)}\n#sharePromptDialog .sp-main svg{width:26px;height:26px;flex-shrink:0}\n#sharePromptDialog .sp-later{align-self:center;display:inline-flex;align-items:center;justify-content:center;min-height:44px;min-width:88px;margin:0;padding:8px 16px;border:0;border-radius:10px;background:transparent;box-shadow:none;color:var(--muted);font-size:14px;font-weight:450;line-height:1.5;text-decoration:none;text-underline-offset:4px}\n#sharePromptDialog .sp-later:hover{color:var(--ink);text-decoration:underline}\n#sharePromptDialog .sp-privacy{font-size:12px;line-height:1.7;color:var(--muted);margin:12px 0 0;text-align:center}\n#sharePromptDialog .sp-status{font-size:14px;line-height:1.7;margin:12px 0 0;padding:10px 12px;border-radius:10px;background:var(--soft);color:var(--ink);overflow-wrap:anywhere}\n#sharePromptDialog .sp-manual{margin-top:12px}\n#sharePromptDialog .sp-manual label{display:block;font-size:13px;margin-bottom:6px;color:var(--muted)}\n#sharePromptDialog .sp-manual textarea{display:block;box-sizing:border-box;width:100%;min-width:0;font:inherit;font-size:16px;line-height:1.65;min-height:48px;padding:11px 12px;border:1px solid var(--line);border-radius:12px;background:var(--soft);color:var(--ink);resize:vertical;overflow-wrap:anywhere}\n#sharePromptDialog button,#sharePromptDialog a{touch-action:manipulation}\n#sharePromptDialog :is(button,a,select,summary,input):focus-visible{outline:3px solid var(--ink);outline-offset:3px}\n#sharePromptDialog .sp-platforms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;background:var(--soft);padding:5px;border-radius:14px;margin:0 0 14px}\n#sharePromptDialog .sp-platforms button{display:flex;align-items:center;justify-content:center;gap:6px;min-height:48px;padding:10px 4px;border-radius:10px;font-size:15px;font-weight:550;line-height:1.3;color:var(--muted);border:1px solid transparent;min-width:0}\n#sharePromptDialog .sp-platforms button[aria-selected=true]{background:var(--surface);color:var(--ink);border-color:var(--line);box-shadow:0 1px 3px #00000008}\n#sharePromptDialog .sp-platforms svg{width:18px;height:18px}\n#sharePromptDialog .sp-browser{margin-bottom:16px;display:flex;align-items:center;gap:10px}\n#sharePromptDialog .sp-browser label{font-size:13px;color:var(--muted);flex-shrink:0}\n#sharePromptDialog .sp-browser select{flex:1;min-width:0;font-size:16px;min-height:44px;padding:8px 12px}\n#sharePromptDialog .sp-guide-label{font-size:13px;color:var(--muted);font-weight:550;line-height:1.5;margin:2px 0 16px}\n#sharePromptDialog .sp-steps{list-style:none;margin:0;padding:0;display:grid;gap:18px}\n#sharePromptDialog .sp-steps li{display:flex;align-items:flex-start;gap:12px;min-width:0}\n#sharePromptDialog .sp-step-number{display:flex;align-items:center;justify-content:center;width:28px;height:28px;flex-shrink:0;border-radius:9px;background:var(--soft);border:1px solid var(--line);font-size:13px;line-height:1;font-variant-numeric:tabular-nums;font-weight:650;margin-top:1px}\n#sharePromptDialog .sp-step-copy{min-width:0}\n#sharePromptDialog .sp-step-copy h3{font-size:16px;font-weight:650;line-height:1.6;overflow-wrap:anywhere;margin:0 0 3px}\n#sharePromptDialog .sp-step-copy p{font-size:14px;line-height:1.75;color:var(--muted);overflow-wrap:anywhere;margin:0}\n#sharePromptDialog .sp-guide-notice{font-size:12px;line-height:1.7;border:1px solid var(--line);background:var(--soft);border-radius:11px;padding:10px 12px;margin:18px 0 14px;color:var(--ink)}\n#sharePromptDialog .sp-guide-actions{display:flex;flex-direction:column;align-items:stretch;gap:4px}\n#sharePromptDialog .sp-guide-actions .sp-main{min-height:56px;font-size:18px;padding:12px 14px;border-radius:14px}\n#sharePromptDialog .sp-guide-actions .sp-main svg{width:20px;height:20px}\n#sharePromptDialog .sp-guide-links{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}\n#sharePromptDialog .sp-guide-links button{font-size:13px;min-height:44px;color:var(--muted);text-decoration:underline;text-underline-offset:4px;padding:6px 10px}\n#sharePromptDialog .sp-help{border-top:1px solid var(--line);margin-top:12px;padding-top:4px;color:var(--muted)}\n#sharePromptDialog .sp-help summary{font-size:13px;min-height:44px;line-height:1.6;padding:12px 0;cursor:pointer}\n#sharePromptDialog .sp-help p{font-size:13px;line-height:1.8;margin:0 0 12px}\n#sharePromptDialog .sp-help a{display:inline-flex;align-items:center;min-height:44px;font-size:13px;text-underline-offset:4px;color:var(--ink)}\n#sharePromptDialog.sp-guide-open h2{font-size:25px}\n#sharePromptDialog.sp-guide-open .sp-body{font-size:14px;margin-bottom:17px}\n@media(max-width:390px){#sharePromptDialog .sp-head{padding:14px 14px 2px}#sharePromptDialog .sp-content{padding:10px 20px 16px}#sharePromptDialog h2{font-size:25px}#sharePromptDialog .sp-body{font-size:15px}#sharePromptDialog .sp-main{font-size:21px;min-height:66px;padding:14px}#sharePromptDialog.sp-guide-open h2{font-size:23px}#sharePromptDialog .sp-platforms button{font-size:14px;gap:4px}}\n@media(max-height:500px){#sharePromptDialog .sp-head{padding-top:8px}#sharePromptDialog .sp-content{padding-top:4px}#sharePromptDialog h2{font-size:23px}#sharePromptDialog .sp-body{margin-bottom:16px}}\n\n/* Rich invitation fallback; only visible if formatted copying is unavailable. */\n#sharePromptDialog #spCopyHint{margin:3px 0 0;font-size:12px}\n#sharePromptDialog .sp-rich-manual{margin-top:14px;padding:14px;border:1px solid var(--line);border-radius:14px;background:var(--soft)}\n#sharePromptDialog .sp-rich-label{font-size:12px;color:var(--muted);margin:0 0 10px}\n#sharePromptDialog .sp-rich-content{font-size:16px;line-height:1.7;overflow-wrap:anywhere;user-select:text;-webkit-user-select:text}\n#sharePromptDialog .sp-rich-content a{color:var(--ink);text-decoration:underline;text-underline-offset:3px;display:inline-block;padding-block:8px}\n#sharePromptDialog .sp-rich-content:focus-visible{outline:2px solid var(--ink);outline-offset:3px}\n\n/* Large reminder copy and readable body text. Other UI is unchanged. */\n#sharePromptDialog.sp-share-open .sp-body{font-size:18px;line-height:1.75;margin-bottom:20px;color:var(--ink)}\n#sharePromptDialog #spCopyHint{font-size:14px;line-height:1.75;text-align:left;margin:2px 0 0}\n#sharePromptDialog:not(.sp-share-open) .sp-dismiss-actions{margin-top:8px}\n#sharePromptDialog.sp-share-open #sharePromptLater{display:flex;margin:4px auto 0;font-size:14px;min-height:44px}\n#sharePromptDialog.sp-share-open .sp-status{font-size:16px;line-height:1.75}\n#sharePromptDialog.sp-share-open .sp-manual label,#sharePromptDialog .sp-rich-label{font-size:15px;line-height:1.6}\n#sharePromptDialog.sp-share-open .sp-manual textarea,#sharePromptDialog .sp-rich-content{font-size:18px;line-height:1.75}\n#sharePromptDialog .sp-rich-content>div{font-size:inherit!important;line-height:inherit!important}\n#sharePromptDialog .sp-rich-manual .sp-guide-links{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;margin-top:12px}\n#sharePromptDialog .sp-rich-manual .sp-guide-links button{display:block;width:100%;min-height:56px;border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:12px;font-size:17px;font-weight:550;line-height:1.6;color:var(--ink);text-decoration:none;overflow-wrap:anywhere}\n\n#sharePromptDialog.sp-share-open #spCopyHint{font-size:15px;line-height:1.7;text-align:center;margin:12px 0 6px;color:var(--muted)}\n@media(max-width:390px){#sharePromptDialog.sp-share-open .sp-body{font-size:17px}}\n\n/* v2.1.6: native sharing first, one secondary copy fallback below it. */\n#sharePromptDialog .sp-copy-backup{margin-top:18px;display:grid;gap:10px}\n#sharePromptDialog .sp-copy-backup #spCopyHint{margin:0;font-size:15px;line-height:1.65;color:var(--muted)}\n#sharePromptDialog .sp-copy-backup-button{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:58px;padding:12px 16px;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);font:inherit;font-size:19px;font-weight:600;line-height:1.5;overflow-wrap:anywhere}\n#sharePromptDialog .sp-copy-backup-button svg{width:23px;height:23px;flex-shrink:0}\n#sharePromptDialog .sp-copy-backup-button:hover:not(:disabled){background:var(--soft);border-color:var(--muted)}\n#sharePromptDialog .sp-copy-backup-button:active:not(:disabled){transform:translateY(1px)}\n#sharePromptDialog.sp-share-open .sp-dismiss-actions{margin-top:8px}";
        document.head.append(reminderStyle);
        const CONFIG = Object.freeze({
            installAtMs: 5 * 60 * 1000, shareAtMs: 10 * 60 * 1000,
            quietMs: 1800, startGuardMs: 4200, pollMs: 500, persistEveryMs: 5000,
            reminderGapMs: 30000,
            dailyKey: 'tempolive.reminders.daily.v1',
            shareURL: 'https://chien930207-cyber.github.io/TEMPOLIVE/index.html?share=line-v234'
        });
        const COPY = {
            "zh-Hant": {
                "title": "\u628a TEMPOLIVE \u5206\u4eab\u7d66\u5718\u54e1\uff1f",
                "body": "\u5c07\u9023\u7d50\u50b3\u7d66\u5718\u54e1\uff0c\u4e0b\u6b21\u6392\u7df4\u4e00\u8d77\u4f7f\u7528\u9023\u7dda\u7bc0\u62cd\u5668\u3002",
                "privacy": "\u53ea\u5206\u4eab\u9810\u8a2d\u4ecb\u7d39\u8207\u7db2\u7ad9\u9023\u7d50\uff0c\u4e0d\u5305\u542b\u4f60\u7684\u6b4c\u55ae\u6216\u623f\u9593\u8cc7\u8a0a\u3002",
                "later": "\u5148\u4e0d\u8981",
                "close": "\u95dc\u9589\u63d0\u9192",
                "share": "\u4e00\u9375\u5206\u4eab",
                "copy": "\u8907\u88fd\u5206\u4eab\u5167\u5bb9",
                "working": "\u8907\u88fd\u4e2d\u2026",
                "link": "TEMPOLIVE \u7db2\u7ad9\u9023\u7d50",
                "done": "\u5b8c\u6210",
                "copied": "\u5df2\u8907\u88fd\u4ecb\u7d39\u8207\u9023\u7d50\uff0c\u53ef\u4ee5\u8cbc\u7d66\u5718\u54e1\u3002",
                "cancelled": "\u5df2\u8fd4\u56de\u5206\u4eab\u63d0\u9192\u3002\u4e5f\u53ef\u4f7f\u7528\u4e0b\u65b9\u300c\u8907\u88fd\u5206\u4eab\u6587\u300d\u3002",
                "manual": "\u7121\u6cd5\u81ea\u52d5\u8907\u88fd\u3002\u8acb\u9577\u6309\u4e0b\u65b9\u9023\u7d50\uff0c\u6216\u4f7f\u7528 Ctrl/Cmd+C \u624b\u52d5\u8907\u88fd\u3002",
                "fallback": "\u6b64\u700f\u89bd\u5668\u7121\u6cd5\u958b\u555f\u5206\u4eab\u9078\u55ae\uff0c\u8acb\u4f7f\u7528\u4e0b\u65b9\u300c\u8907\u88fd\u5206\u4eab\u6587\u300d\u3002",
                "shareText": "\ud83d\udce2\u63a8\u85a6\u4f60\u8a66\u8a66 TEMPOLIVE \u9023\u7dda\u7bc0\u62cd\u5668\uff01\n\n\u53ef\u4ee5\u5132\u5b58\u6b4c\u55ae\u3001\u591a\u4eba\u540c\u6b65\u8ddf\u62cd\uff0c\u9084\u80fd\u7528 LIVE \u50b3\u8a71\u6e9d\u901a~",
                "installTitle": "\u5c07 TEMPOLIVE \u5132\u5b58\u5230\u684c\u9762",
                "installBody": "\u4f7f\u7528\u73fe\u6709 TEMPOLIVE Logo\uff0c\u5b89\u88dd\u5f8c\u5f9e\u4e3b\u756b\u9762\u958b\u555f\u3002",
                "install": "\u5132\u5b58\u5230\u684c\u9762",
                "installPrivacy": "\u7531\u4f60\u5728\u7cfb\u7d71\u8996\u7a97\u78ba\u8a8d\uff1b\u4e0d\u6703\u5728\u80cc\u666f\u81ea\u52d5\u5b89\u88dd\u3002",
                "guideTitle": "\u5c07 TEMPOLIVE \u5132\u5b58\u5230\u684c\u9762",
                "guideIntro": "\u5c31\u5728\u9019\u500b\u9801\u9762\u5b8c\u6210\u5b89\u88dd\uff0c\u4e0d\u9700\u8981\u958b\u555f\u53e6\u4e00\u500b\u7db2\u7ad9\u3002",
                "ios": "iOS",
                "android": "Android",
                "desktop": "\u7b46\u96fb",
                "platforms": "\u88dd\u7f6e\u6559\u5b78",
                "browserLabel": "\u4f7f\u7528\u7684\u700f\u89bd\u5668",
                "official": "\u958b\u555f\u6b63\u5f0f\u7db2\u7ad9",
                "officialHint": "\u4f7f\u7528\u73fe\u6709 TEMPOLIVE Logo\uff0c\u5b89\u88dd\u5f8c\u5f9e\u4e3b\u756b\u9762\u958b\u555f\u3002",
                "return": "\u8fd4\u56de\u7bc0\u62cd\u5668",
                "back": "\u8fd4\u56de\u63d0\u9192",
                "copyOfficial": "\u8907\u88fd\u9019\u500b\u9801\u9762\u7684\u7db2\u5740",
                "source": "\u67e5\u770b\u700f\u89bd\u5668\u5b98\u65b9\u8aaa\u660e",
                "saveCopied": "\u5df2\u8907\u88fd\u6b64\u9801\u7db2\u5740\u3002",
                "backup": "\u5207\u63db\u5230 App \u524d\u5148\u532f\u51fa\u91cd\u8981\u6b4c\u55ae\uff1b\u82e5 App \u6c92\u6709\u539f\u6b4c\u55ae\uff0c\u518d\u532f\u5165\u5099\u4efd\u3002",
                "missingOption": "\u627e\u4e0d\u5230\u9078\u9805\uff1f",
                "helpBody": "\u8acb\u96e2\u958b LINE\u3001Instagram \u7b49 App \u5167\u5efa\u700f\u89bd\u5668\uff0c\u6539\u5728 Safari\u3001Chrome \u6216 Edge \u958b\u555f\u6b63\u5f0f\u7db2\u7ad9\u3002\u9078\u55ae\u540d\u7a31\u6703\u4f9d\u7248\u672c\u7565\u6709\u4e0d\u540c\u3002",
                "shareFallbackHint": "\u4e0d\u652f\u63f4\u7cfb\u7d71\u5206\u4eab\u6642\uff0c\u6703\u6539\u70ba\u8907\u88fd\u4ecb\u7d39\u8207\u7db2\u7ad9\u9023\u7d50\u3002",
                "shareContent": "\u5206\u4eab\u5167\u5bb9",
                "manualShare": "\u7121\u6cd5\u81ea\u52d5\u8907\u88fd\u3002\u8acb\u9577\u6309\u4e0b\u65b9\u6587\u5b57\uff0c\u6216\u4f7f\u7528 Ctrl/Cmd+C \u8907\u88fd\u6574\u6bb5\u4ecb\u7d39\u8207\u9023\u7d50\u3002",
                "copyLinked": "\u8907\u88fd\u5206\u4eab\u6587",
                "copyOptionsTitle": "\u5206\u4eab\u4e0d\u5b8c\u6574\uff1f\u76f4\u63a5\u8907\u88fd\u8cbc\u4e0a",
                "copyRichDetail": "\u4e00\u6b21\u8907\u88fd\u4ecb\u7d39\u6587\u5b57\u8207\u300c\u7acb\u5373\u4f7f\u7528 TEMPOLIVE\u300d\u8d85\u9023\u7d50\u3002",
                "copyTextTitle": "\u8907\u88fd\u5206\u4eab\u5167\u6587",
                "copyTextDetail": "\u5b8c\u6574\u4ecb\u7d39\uff0b\u7db2\u5740\uff0c\u53ef\u76f4\u63a5\u8cbc\u5230\u8a0a\u606f",
                "copyRichDone": "\u5df2\u8907\u88fd\u5206\u4eab\u6587",
                "copyTextDone": "\u5df2\u8907\u88fd\u5206\u4eab\u5167\u6587",
                "useNow": "\u7acb\u5373\u4f7f\u7528 TEMPOLIVE",
                "richHint": "\u8cbc\u5230\u652f\u63f4\u683c\u5f0f\u7684\u90f5\u4ef6\uff0c\u53ef\u986f\u793a\u300c\u7acb\u5373\u4f7f\u7528 TEMPOLIVE\u300d\uff1b\u7d14\u6587\u5b57\u4ecb\u9762\u4ecd\u4fdd\u7559\u7db2\u5740\u3002",
                "richCopied": "\u5df2\u8907\u88fd\u5206\u4eab\u6587\uff0c\u53ef\u4ee5\u8cbc\u7d66\u5176\u4ed6\u4eba\u4e86\u3002",
                "richManual": "\u700f\u89bd\u5668\u672a\u5141\u8a31\u81ea\u52d5\u8907\u88fd\uff0c\u8acb\u9078\u53d6\u4e0b\u65b9\u5206\u4eab\u6587\u5f8c\u8907\u88fd\u3002",
                "richPreview": "\u5206\u4eab\u5167\u5bb9",
                "selectRich": "\u9078\u53d6\u5206\u4eab\u6587",
                "copyPlain": "\u6539\u8907\u88fd\u6587\u5b57\u8207\u7db2\u5740",
                "selectedRich": "\u5df2\u9078\u53d6\u3002\u8acb\u6309 Ctrl/Cmd+C\uff0c\u6216\u4f7f\u7528\u624b\u6a5f\u7684\u300c\u8907\u88fd\u300d\uff0c\u518d\u8cbc\u5230\u90f5\u4ef6\u5167\u6587\u3002",
                "sharing": "\u958b\u555f\u5206\u4eab\u4e2d\u2026",
                "backupHint": "\u5206\u4eab\u5167\u5bb9\u4e0d\u5b8c\u6574\uff1f\u53ef\u8907\u88fd\u5f8c\u76f4\u63a5\u8cbc\u4e0a\u3002",
                "shareReturned": "\u5df2\u8fd4\u56de\u5206\u4eab\u8996\u7a97\u3002\u82e5\u5c0d\u65b9 App \u672a\u4fdd\u7559\u4ecb\u7d39\u6216\u6587\u5b57\u8d85\u9023\u7d50\uff0c\u8acb\u7528\u4e0b\u65b9\u300c\u8907\u88fd\u5206\u4eab\u6587\u300d\u8cbc\u4e0a\u3002"
            },
            "en": {
                "title": "Share TEMPOLIVE with your band?",
                "body": "Send your bandmates the link and try the connected metronome together at your next rehearsal.",
                "privacy": "Only the preset introduction and website link are shared, not your setlist or room details.",
                "later": "Not now",
                "close": "Dismiss reminder",
                "share": "Share",
                "copy": "Copy invitation",
                "working": "Copying...",
                "link": "TEMPOLIVE website link",
                "done": "Done",
                "copied": "Introduction and link copied. You can paste them into a message to your bandmates.",
                "cancelled": "Back to the reminder. You can also use Copy invitation below.",
                "manual": "Automatic copying is unavailable. Touch and hold the link, or press Ctrl/Cmd+C to copy it.",
                "fallback": "The share menu is unavailable. Use Copy invitation below.",
                "shareText": "Try TEMPOLIVE, a connected metronome for your band!\nSave setlists, follow a shared beat on separate devices and send quick messages with LIVE Talk. Just open the link and try it together at your next rehearsal.",
                "installTitle": "Install TEMPOLIVE",
                "installBody": "Uses the existing TEMPOLIVE logo. Launch from your Home Screen after installation.",
                "install": "Save to device",
                "installPrivacy": "You confirm in the system dialog. Nothing is installed automatically.",
                "guideTitle": "Keep TEMPOLIVE on your device",
                "guideIntro": "Install this page directly. There is no need to open a different website.",
                "ios": "iOS",
                "android": "Android",
                "desktop": "Laptop",
                "platforms": "Device guides",
                "browserLabel": "Browser",
                "official": "Open the live website",
                "officialHint": "Uses the existing TEMPOLIVE logo. Launch from your Home Screen after installation.",
                "return": "Back to metronome",
                "back": "Back to reminder",
                "copyOfficial": "Copy this page address",
                "source": "Browser help",
                "saveCopied": "This page address was copied.",
                "backup": "Export important setlists before switching to the app. If they are missing there, import your backup.",
                "missingOption": "Cannot find the option?",
                "helpBody": "Open the live website in Safari, Chrome or Edge rather than an in-app browser such as LINE or Instagram. Menu wording varies by version.",
                "shareFallbackHint": "If system sharing is unavailable, the button copies the introduction and website link instead.",
                "shareContent": "Sharing message",
                "manualShare": "Automatic copying is unavailable. Touch and hold the text below, or press Ctrl/Cmd+C to copy the full introduction and link.",
                "copyLinked": "Copy invitation",
                "copyOptionsTitle": "Sharing incomplete? Copy and paste instead",
                "copyRichDetail": "Copy the introduction and the Use TEMPOLIVE link together.",
                "copyTextTitle": "Copy sharing message",
                "copyTextDetail": "Full introduction + URL, ready to paste",
                "copyRichDone": "Invitation copied",
                "copyTextDone": "Sharing message copied",
                "useNow": "Use TEMPOLIVE now",
                "richHint": "Formatted email can show \"Use TEMPOLIVE now\". Plain-text apps keep the website address.",
                "richCopied": "Invitation copied. Paste it into your message.",
                "richManual": "Automatic copying was not allowed. Select the invitation below and copy it.",
                "richPreview": "Invitation",
                "selectRich": "Select invitation",
                "copyPlain": "Copy text and URL instead",
                "selectedRich": "Content selected. Press Ctrl/Cmd+C or use Copy on your phone, then paste into the email body.",
                "sharing": "Opening share menu...",
                "backupHint": "Missing part of the message? Copy it and paste it instead.",
                "shareReturned": "Back from sharing. If the receiving app omitted the introduction or named link, use Copy invitation below and paste it."
            }
        };
        const GUIDES = {
            "zh-Hant": {
                "ios": {
                    "label": "iPhone / iPad \u00b7 Safari",
                    "steps": [
                        [
                            "\u7559\u5728\u76ee\u524d\u9019\u500b\u9801\u9762",
                            "\u4f7f\u7528\u76ee\u524d\u700f\u89bd\u5668\u7684\u9078\u55ae\u5b89\u88dd\u9019\u500b\u9801\u9762\u3002"
                        ],
                        [
                            "\u9ede\u300c\u5206\u4eab\u300d\uff0c\u9078\u300c\u52a0\u5165\u4e3b\u756b\u9762\u300d",
                            "\u5206\u4eab\u5716\u793a\u662f\u65b9\u6846\u4e0a\u7bad\u982d\uff1b\u67d0\u4e9b\u7248\u9762\u8981\u5148\u9ede\u300c\u66f4\u591a\u300d\u624d\u770b\u5f97\u5230\u3002"
                        ],
                        [
                            "\u78ba\u8a8d\u540d\u7a31\uff0c\u9ede\u300c\u52a0\u5165\u300d",
                            "\u5982\u679c\u6709\u300c\u4ee5\u7db2\u9801 App \u958b\u555f\u300d\uff08Open as Web App\uff09\uff0c\u8acb\u958b\u555f\u3002\u5b8c\u6210\u5f8c\u5f9e\u4e3b\u756b\u9762\u9ede TEMPOLIVE\u3002"
                        ]
                    ],
                    "note": "\u6c92\u770b\u5230\u300c\u52a0\u5165\u4e3b\u756b\u9762\u300d\uff1f\u5f80\u5206\u4eab\u6e05\u55ae\u5e95\u90e8\u627e\u300c\u7de8\u8f2f\u52d5\u4f5c\u300d\u3002\u820a\u7248 iOS \u6c92\u6709 Open as Web App \u958b\u95dc\u6642\uff0c\u76f4\u63a5\u9ede\u300c\u52a0\u5165\u300d\u3002"
                },
                "android": {
                    "label": "Android \u00b7 Chrome",
                    "steps": [
                        [
                            "\u7559\u5728\u76ee\u524d\u9019\u500b\u9801\u9762",
                            "\u4f7f\u7528\u76ee\u524d\u700f\u89bd\u5668\u7684\u9078\u55ae\u5b89\u88dd\u9019\u500b\u9801\u9762\u3002"
                        ],
                        [
                            "\u9ede\u53f3\u4e0a\u89d2 \u22ee \u958b\u555f\u9078\u55ae",
                            "\u9078\u300c\u52a0\u5165\u4e3b\u756b\u9762\u300d\uff0c\u518d\u9078\u300c\u5b89\u88dd\u300d\uff1b\u90e8\u5206\u7248\u672c\u76f4\u63a5\u986f\u793a\u300c\u5b89\u88dd\u61c9\u7528\u7a0b\u5f0f\u300d\u3002"
                        ],
                        [
                            "\u78ba\u8a8d\u5b89\u88dd\u6216\u52a0\u5165",
                            "\u4f9d\u756b\u9762\u6307\u793a\u5b8c\u6210\u5f8c\uff0c\u5230\u4e3b\u756b\u9762\u6216\u61c9\u7528\u7a0b\u5f0f\u6e05\u55ae\u627e TEMPOLIVE\u3002"
                        ]
                    ],
                    "note": "\u82e5\u53ea\u6709\u300c\u5efa\u7acb\u6377\u5f91\u300d\uff0c\u4ecd\u53ef\u52a0\u5165\u4e3b\u756b\u9762\uff0c\u4f46\u4e0d\u4e00\u5b9a\u4ee5\u7368\u7acb App \u8996\u7a97\u958b\u555f\u3002"
                },
                "chrome": {
                    "label": "\u7b46\u96fb / \u684c\u6a5f \u00b7 Chrome",
                    "steps": [
                        [
                            "\u7559\u5728\u76ee\u524d\u9019\u500b\u9801\u9762",
                            "\u4f7f\u7528\u76ee\u524d\u700f\u89bd\u5668\u7684\u9078\u55ae\u5b89\u88dd\u9019\u500b\u9801\u9762\u3002"
                        ],
                        [
                            "\u9078\u300c\u5c07\u9801\u9762\u5b89\u88dd\u70ba\u61c9\u7528\u7a0b\u5f0f\u300d",
                            "\u9ede\u53f3\u4e0a\u89d2 \u22ee \u2192\u300c\u6295\u653e\u3001\u5132\u5b58\u53ca\u5206\u4eab\u300d\uff1b\u4e5f\u53ef\u9ede\u7db2\u5740\u5217\u7684\u300c\u5b89\u88dd\u300d\u5716\u793a\uff08\u5982\u6709\uff09\u3002"
                        ],
                        [
                            "\u78ba\u8a8d\u5b89\u88dd\uff0c\u518d\u5efa\u7acb\u684c\u9762\u6377\u5f91",
                            "\u5b89\u88dd\u5f8c\u5728 chrome://apps \u5c0d TEMPOLIVE \u6309\u53f3\u9375\uff0c\u9078\u300c\u5efa\u7acb\u6377\u5f91\u300d\u8207\u653e\u7f6e\u4f4d\u7f6e\u3002"
                        ]
                    ],
                    "note": "\u82e5\u7121\u6cd5\u5b89\u88dd\uff0c\u53ef\u6539\u7528 Edge \u7684\u300c\u5c07\u6b64\u7db2\u7ad9\u5b89\u88dd\u70ba\u61c9\u7528\u7a0b\u5f0f\u300d\u3002"
                },
                "edge": {
                    "label": "\u7b46\u96fb / \u684c\u6a5f \u00b7 Edge",
                    "steps": [
                        [
                            "\u7559\u5728\u76ee\u524d\u9019\u500b\u9801\u9762",
                            "\u4f7f\u7528\u76ee\u524d\u700f\u89bd\u5668\u7684\u9078\u55ae\u5b89\u88dd\u9019\u500b\u9801\u9762\u3002"
                        ],
                        [
                            "\u9078\u300c\u5c07\u6b64\u7db2\u7ad9\u5b89\u88dd\u70ba\u61c9\u7528\u7a0b\u5f0f\u300d",
                            "\u9ede\u53f3\u4e0a\u89d2 \u00b7\u00b7\u00b7 \u2192\u300c\u66f4\u591a\u5de5\u5177\u300d\u2192\u300c\u61c9\u7528\u7a0b\u5f0f\u300d\u3002\u90e8\u5206\u7248\u672c\u76f4\u63a5\u986f\u793a\u300c\u61c9\u7528\u7a0b\u5f0f\u300d\u3002"
                        ],
                        [
                            "\u5b89\u88dd\u5f8c\u5efa\u7acb\u684c\u9762\u6377\u5f91",
                            "\u5230 edge://apps \u627e TEMPOLIVE\uff0c\u9078\u300c\u8a73\u7d30\u8cc7\u8a0a\u300d\u2192\u300c\u5efa\u7acb\u684c\u9762\u6377\u5f91\u300d\uff0c\u6216\u91d8\u9078\u5230\u5de5\u4f5c\u5217\u3002"
                        ]
                    ],
                    "note": "\u82e5\u662f\u516c\u53f8\u7ba1\u7406\u7684\u96fb\u8166\uff0c\u5b89\u88dd\u9078\u9805\u53ef\u80fd\u53d7\u5230\u9650\u5236\u3002"
                },
                "safari": {
                    "label": "Mac \u00b7 Safari\uff08macOS 14+\uff09",
                    "steps": [
                        [
                            "\u7559\u5728\u76ee\u524d\u9019\u500b\u9801\u9762",
                            "\u4f7f\u7528\u76ee\u524d\u700f\u89bd\u5668\u7684\u9078\u55ae\u5b89\u88dd\u9019\u500b\u9801\u9762\u3002"
                        ],
                        [
                            "\u9078\u300c\u6a94\u6848\u300d\u2192\u300c\u52a0\u5165 Dock \u4e2d\u300d",
                            "\u4e5f\u53ef\u9ede Safari \u5de5\u5177\u5217\u7684\u300c\u5206\u4eab\u300d\uff0c\u518d\u9078\u300c\u52a0\u5165 Dock \u4e2d\u300d\u3002"
                        ],
                        [
                            "\u540d\u7a31\u4fdd\u7559 TEMPOLIVE\uff0c\u9ede\u300c\u52a0\u5165\u300d",
                            "\u4e4b\u5f8c\u5f9e Dock \u6216\u300c\u61c9\u7528\u7a0b\u5f0f\u300d\u958b\u555f\uff0c\u4e0d\u9700\u6bcf\u6b21\u8f38\u5165\u7db2\u5740\u3002"
                        ]
                    ],
                    "note": "\u820a\u7248 macOS \u53ef\u6539\u7528 Chrome \u6216 Edge\u3002Dock \u5716\u793a\u4e0d\u7b49\u65bc\u684c\u9762\u6a94\u6848\uff0c\u4f46\u90fd\u53ef\u5feb\u901f\u958b\u555f\u3002"
                }
            },
            "en": {
                "ios": {
                    "label": "iPhone / iPad \u00b7 Safari",
                    "steps": [
                        [
                            "Stay on this page",
                            "Install TEMPOLIVE here; no switch to another website is needed."
                        ],
                        [
                            "Choose Share, then Add to Home Screen",
                            "Look for the square with an upward arrow. Some layouts put Share inside the More or page menu."
                        ],
                        [
                            "Keep the name and tap Add",
                            "Turn on Open as Web App if that switch appears. Then launch TEMPOLIVE from your Home Screen."
                        ]
                    ],
                    "note": "If Add to Home Screen is missing, look under Edit Actions at the bottom of the share sheet. Older iOS versions may not show Open as Web App; tap Add instead."
                },
                "android": {
                    "label": "Android \u00b7 Chrome",
                    "steps": [
                        [
                            "Stay on this page",
                            "Install TEMPOLIVE here; no switch to another website is needed."
                        ],
                        [
                            "Open the top-right three-dot menu",
                            "Choose Add to home screen, then Install. Some versions show Install app directly."
                        ],
                        [
                            "Confirm the installation or addition",
                            "Follow the system prompt, then find TEMPOLIVE on your Home Screen or in the app list."
                        ]
                    ],
                    "note": "If only Create shortcut is offered, it can add an icon, but it may open a regular browser tab rather than a standalone app."
                },
                "chrome": {
                    "label": "Laptop / desktop \u00b7 Chrome",
                    "steps": [
                        [
                            "Stay on this page",
                            "Install TEMPOLIVE here; no switch to another website is needed."
                        ],
                        [
                            "Choose Install page as app",
                            "Open the three-dot menu > Cast, save and share. You can also use the address-bar Install icon if it appears."
                        ],
                        [
                            "Install, then create a desktop shortcut",
                            "Open chrome://apps, right-click TEMPOLIVE, choose Create shortcut and select the location."
                        ]
                    ],
                    "note": "If installation is unavailable, try Install this site as an app in Edge."
                },
                "edge": {
                    "label": "Laptop / desktop \u00b7 Edge",
                    "steps": [
                        [
                            "Stay on this page",
                            "Install TEMPOLIVE here; no switch to another website is needed."
                        ],
                        [
                            "Choose Install this site as an app",
                            "Open the three-dot menu > More tools > Apps. Some versions list Apps directly."
                        ],
                        [
                            "Create a shortcut after installation",
                            "Open edge://apps, find TEMPOLIVE and select Details > Create desktop shortcut, or pin it to the taskbar."
                        ]
                    ],
                    "note": "A managed work computer may restrict app installation."
                },
                "safari": {
                    "label": "Mac \u00b7 Safari (macOS 14+)",
                    "steps": [
                        [
                            "Stay on this page",
                            "Install TEMPOLIVE here; no switch to another website is needed."
                        ],
                        [
                            "Choose File > Add to Dock",
                            "You can also choose Add to Dock from the toolbar Share menu."
                        ],
                        [
                            "Keep TEMPOLIVE as the name and click Add",
                            "Launch it from the Dock or Applications next time."
                        ]
                    ],
                    "note": "On older macOS versions, use Chrome or Edge. A Dock icon is not a desktop file, but provides quick access."
                }
            }
        };
        const SOURCES = Object.freeze({
            ios: 'https://support.apple.com/zh-tw/guide/iphone/iphea86e5236/ios',
            android: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=zh-Hant',
            chrome: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=zh-Hant',
            edge: 'https://support.microsoft.com/zh-tw/edge/install-manage-or-uninstall-apps-in-microsoft-edge',
            safari: 'https://support.apple.com/zh-tw/104996'
        });
        const ICONS = Object.freeze({
            share: '<path d="M12 16V3m-4 4 4-4 4 4M5 12v8h14v-8"/>',
            install: '<rect x="4" y="3" width="16" height="14" rx="2"/><path d="M8 21h8m-4-4v4M12 6v7m-3-3 3 3 3-3"/>',
            phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/>',
            desktop: '<rect x="4" y="3" width="16" height="14" rx="2"/><path d="M2 21h20l-2-4H4Z"/>',
            external: '<path d="M14 3h7v7m0-7L10 14M10 3H4v17h17v-7"/>'
        });
        const svg = k => '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[k] + '</svg>';
        const get = id => document.getElementById(id);
        const now = () => performance.now();
        const language = () => window.TempoliveI18n?.lang || document.documentElement.lang;
        const copy = () => COPY[language()] || COPY['zh-Hant'];
        const installation = window.TempoliveInstall;
        const installURL = installation.snapshot().appURL;
        const invitationText = () => copy().shareText + '\n\n' + copy().useNow;
        const shareMessage = () => invitationText() + '\n' + CONFIG.shareURL;
        const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[ch]));
        function shareHTML() {
            const lines = copy().shareText.split(/\r?\n/).map(line => escapeHTML(line)).join('<br>');
            return '<div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.7">' +
                '<p style="margin:0 0 16px">' + lines + '</p>' +
                '<p style="margin:0"><a href="' + escapeHTML(CONFIG.shareURL) +
                '" style="font-weight:600;text-decoration:underline">' + escapeHTML(copy().useNow) + '</a><br>' +
                '<a href="' + escapeHTML(CONFIG.shareURL) + '" style="text-decoration:underline;overflow-wrap:anywhere">' +
                escapeHTML(CONFIG.shareURL) + '</a></p></div>';
        }
        let openingPrompt = false;
        let lastClockMono = now(), lastClockWall = Date.now();
        let countingForeground = !document.hidden;
        const localDay = time => {
            const date = new Date(time);
            return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
        };
        const dayStart = time => { const date = new Date(time); date.setHours(0, 0, 0, 0); return date.getTime(); };
        const emptyDay = day => ({ version: 1, day, elapsedMs: 0, countedUntil: 0, shown: { install: false, share: false }, notBeforeMs: 0 });
        let daily = emptyDay(localDay(lastClockWall));
        let response = '', currentKind = 'share', view = 'prompt', statusKey = '';
        let lastActivity = now(), startGuardUntil = 0, lastPersist = now();
        let sharedPending = false, forceCopy = false, actionToken = 0;
        let nativePending = false, returningFromShare = false;
        let storageAvailable = true, priorFocus = null;
        let installedInThisTab = false;
        let richManual = false;
        const standaloneQuery = window.matchMedia?.('(display-mode: standalone)');
        const isStandalone = () => navigator.standalone === true || !!standaloneQuery?.matches || installedInThisTab;
        const ua = navigator.userAgent || '';
        const appleMobile = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        let platform = appleMobile ? 'ios' : /Android/i.test(ua) ? 'android' : 'desktop';
        let browser = /Edg\//.test(ua) ? 'edge' : /Macintosh/.test(ua) && !/Chrome|Chromium/.test(ua) ? 'safari' : 'chrome';
        function readDaily(day) {
            try {
                const saved = JSON.parse(localStorage.getItem(CONFIG.dailyKey) || 'null');
                storageAvailable = true;
                if (!saved || saved.version !== 1 || saved.day !== day)
                    return emptyDay(day);
                return { version: 1, day,
                    elapsedMs: Number.isFinite(saved.elapsedMs) ? Math.max(0, Math.min(saved.elapsedMs, 172800000)) : 0,
                    countedUntil: Number.isFinite(saved.countedUntil) ? saved.countedUntil : 0,
                    shown: { install: saved.shown?.install === true, share: saved.shown?.share === true },
                    notBeforeMs: Number.isFinite(saved.notBeforeMs) ? Math.max(0, saved.notBeforeMs) : 0 };
            }
            catch (_) {
                storageAvailable = false;
                return emptyDay(day);
            }
        }
        function syncDaily(write = false) {
            const mono = now(), wall = Date.now(), day = localDay(wall);
            const changed = day !== daily.day;
            if (changed)
                daily = emptyDay(day);
            const saved = readDaily(day);
            daily.elapsedMs = Math.max(daily.elapsedMs, saved.elapsedMs);
            daily.countedUntil = Math.max(daily.countedUntil, saved.countedUntil);
            daily.shown.install = daily.shown.install || saved.shown.install;
            daily.shown.share = daily.shown.share || saved.shown.share;
            daily.notBeforeMs = Math.max(daily.notBeforeMs, saved.notBeforeMs);
            if (countingForeground) {
                const delta = Math.max(0, Math.min(mono - lastClockMono, wall - lastClockWall, wall - dayStart(wall)));
                const from = Math.max(wall - delta, daily.countedUntil, dayStart(wall));
                daily.elapsedMs += Math.max(0, wall - from);
                daily.countedUntil = wall;
            }
            lastClockMono = mono;
            lastClockWall = wall;
            if (write) {
                try {
                    localStorage.setItem(CONFIG.dailyKey, JSON.stringify(daily));
                    storageAvailable = true;
                }
                catch (_) {
                    storageAvailable = false;
                }
                lastPersist = mono;
            }
            return changed;
        }
        syncDaily();
        const total = () => daily.elapsedMs;
        const nativeShare = () => window.isSecureContext && typeof navigator.share === 'function';
        const eligibleKind = () => {
            // Installation is now a small per-visit hint, never a timed modal.
            if (!daily.shown.share)
                return 'share';
            return null;
        };
        const nextThreshold = kind => kind === 'install' ? CONFIG.installAtMs : kind === 'share' ? CONFIG.shareAtMs : Infinity;
        const dialog = document.createElement('dialog');
        dialog.id = 'sharePromptDialog';
        dialog.setAttribute('aria-labelledby', 'sharePromptTitle');
        dialog.setAttribute('aria-describedby', 'sharePromptBody');
        dialog.innerHTML = `
      <div class="sp-head"><div class="sp-brand"><svg aria-hidden="true"><use href="#i-logo"/></svg><span>TEMPOLIVE</span></div><button type="button" class="sp-close" id="sharePromptClose"><svg aria-hidden="true"><use href="#i-close"/></svg></button></div>
      <div class="sp-content">
        <h2 id="sharePromptTitle" tabindex="-1"></h2><p class="sp-body" id="sharePromptBody"></p>
        <div id="spInstallIdentity" hidden style="display:flex;gap:12px;align-items:center;margin:0 0 16px"><img src="/TEMPOLIVE/apple-touch-icon.png" width="56" height="56" alt="TEMPOLIVE Logo" style="border-radius:12px;flex-shrink:0"><strong id="spInstallAppName" style="font-size:18px"></strong></div><p id="spInstallStatus" class="sp-guide-notice" role="status" aria-live="polite" hidden></p>
        <section id="sharePromptWelcome">
          <div class="sp-actions"><button type="button" id="sharePromptAccept" class="sp-main"><span id="sharePromptAcceptIcon" aria-hidden="true"></span><span id="sharePromptAcceptText"></span></button></div>
          <div id="spCopyRow" class="sp-copy-backup">
            <p id="spCopyHint"></p>
            <button type="button" id="spCopyInvitation" class="sp-copy-backup-button" aria-describedby="spCopyHint"><svg aria-hidden="true"><use href="#i-copy"/></svg><span id="spCopyInvitationText"></span></button>
          </div>
          <div class="sp-actions sp-dismiss-actions"><button type="button" id="sharePromptLater" class="sp-later"></button></div>
          <p class="sp-privacy" id="sharePromptPrivacy"></p>
        </section>
        <section id="spInstallGuide" hidden>
          <div class="sp-platforms" id="spPlatformTabs" role="tablist">
            <button type="button" id="spTabIos" role="tab" data-platform="ios" aria-controls="spGuidePanel">${svg('phone')}<span></span></button>
            <button type="button" id="spTabAndroid" role="tab" data-platform="android" aria-controls="spGuidePanel">${svg('phone')}<span></span></button>
            <button type="button" id="spTabDesktop" role="tab" data-platform="desktop" aria-controls="spGuidePanel">${svg('desktop')}<span></span></button>
          </div>
          <div id="spBrowserRow" class="sp-browser"><label for="spDesktopBrowser" id="spBrowserLabel"></label><select id="spDesktopBrowser"><option value="chrome">Chrome</option><option value="edge">Edge</option><option value="safari">Safari (Mac)</option></select></div>
          <div id="spGuidePanel" role="tabpanel"><p id="spGuideLabel" class="sp-guide-label"></p><ol id="spGuideSteps" class="sp-steps"></ol></div>
          <p id="spGuideNotice" class="sp-guide-notice"></p>
          <div class="sp-guide-actions"><button type="button" class="sp-main" id="spInstallNow" hidden>${svg('install')}<span></span></button><div class="sp-guide-links"><button type="button" id="spCopyOfficial"></button><button type="button" id="spBack"></button></div></div>
          <details class="sp-help" id="spGuideHelp"><summary id="spHelpTitle"></summary><p id="spGuideNote"></p><p id="spHelpBody"></p><p id="spBackupNote"></p><a id="spGuideSource" target="_blank" rel="noopener noreferrer"></a></details>
          <div class="sp-actions"><button type="button" id="spGuideDone" class="sp-later"></button></div>
        </section>
        <section id="spRichManual" class="sp-rich-manual" hidden aria-labelledby="spRichLabel">
          <p id="spRichLabel" class="sp-rich-label"></p>
          <div id="spRichContent" class="sp-rich-content" tabindex="0"></div>
          <div class="sp-guide-links"><button type="button" id="spSelectRich"></button></div>
        </section>
        <p id="sharePromptStatus" class="sp-status" role="status" aria-live="polite" hidden></p>
        <div class="sp-manual" id="sharePromptManual" hidden><label id="sharePromptLinkLabel" for="sharePromptLink"></label><textarea id="sharePromptLink" rows="5" readonly autocomplete="off" spellcheck="false"></textarea></div>
      </div>`;
        document.body.append(dialog);
        get('sharePromptLink').value = CONFIG.shareURL;
        get('spInstallAppName').textContent = installation.snapshot().name;
        function persist() { syncDaily(true); }
        function blockReason(ignoreQuiet = false) {
            if (document.hidden)
                return 'background';
            let app;
            try {
                app = window.MetronomeDiagnostics?.snapshot();
            }
            catch (_) {
                return 'loading';
            }
            if (!app)
                return 'loading';
            if (document.querySelector('#bpmMinus[data-tempo-holding],#bpmPlus[data-tempo-holding]'))
                return 'editing';
            if (app.role !== 'solo' || app.recovering)
                return 'room';
            if (app.playing || app.desiredPlaying)
                return 'playing';
            if (now() < startGuardUntil)
                return 'starting';
            if ([...document.querySelectorAll('dialog[open]')].some(el => el !== dialog))
                return 'panel';
            if (document.body.classList.contains('tour-active') || window.TempoliveTutorial?.snapshot()?.active)
                return 'panel';
            const menu = get('languageMenu');
            if (menu && !menu.hidden)
                return 'panel';
            const focus = document.activeElement;
            if (!dialog.contains(focus) && focus?.matches('input,textarea,select,[contenteditable="true"]'))
                return 'editing';
            if (!ignoreQuiet && now() - lastActivity < CONFIG.quietMs)
                return 'settling';
            return '';
        }
        function closePrompt(reason, restore = true) {
            if (!dialog.open)
                return;
            response = reason;
            actionToken++;
            sharedPending = false;
            nativePending = false;
            returningFromShare = false;
            syncDaily();
            daily.notBeforeMs = Math.max(daily.notBeforeMs, total() + CONFIG.reminderGapMs);
            dialog.close();
            view = 'prompt';
            persist();
            if (restore && !document.hidden && priorFocus?.isConnected && !document.querySelector('dialog[open]')) {
                try {
                    priorFocus.focus({ preventScroll: true });
                }
                catch (_) { }
            }
            paint();
        }
        function openPrompt(ignoreQuiet = false) {
            if (openingPrompt || dialog.open || blockReason(ignoreQuiet))
                return;
            openingPrompt = true;
            const show = () => {
                syncDaily(true);
                const kind = eligibleKind();
                if (!kind || dialog.open || total() < nextThreshold(kind) || total() < daily.notBeforeMs || blockReason(ignoreQuiet))
                    return false;
                currentKind = kind;
                view = 'prompt';
                priorFocus = document.activeElement;
                statusKey = '';
                forceCopy = false;
                richManual = false;
                nativePending = false;
                returningFromShare = false;
                get('sharePromptManual').hidden = true;
                get('spGuideHelp').open = false;
                paint();
                try {
                    dialog.showModal();
                }
                catch (_) {
                    return false;
                }
                daily.shown[kind] = true;
                response = 'shown';
                persist();
                get('sharePromptTitle').focus({ preventScroll: true });
                paint();
                return true;
            };
            if (navigator.locks?.request) {
                navigator.locks.request('tempolive-daily-reminder-display', { ifAvailable: true }, lock => lock ? show() : false)
                    .catch(() => show()).finally(() => { openingPrompt = false; });
            }
            else {
                try {
                    show();
                }
                finally {
                    openingPrompt = false;
                }
            }
        }
        function requestInstall() {
            if (sharedPending)
                return;
            const info = installation.snapshot();
            if (info.standalone || info.installReported) {
                closePrompt('already-installed');
                return;
            }
            if (!info.canPrompt) {
                showGuide();
                return;
            }
            const token = ++actionToken;
            sharedPending = true;
            statusKey = '';
            const task = installation.request();
            paint();
            Promise.resolve(task).then(result => {
                if (token !== actionToken || !dialog.open)
                    return;
                sharedPending = false;
                response = 'install-' + result.outcome;
                if (result.outcome === 'dismissed' || result.outcome === 'error')
                    showGuide();
                else
                    paint();
            });
        }
        function showGuide() {
            view = 'guide';
            statusKey = '';
            response = 'guide-opened';
            richManual = false;
            get('sharePromptManual').hidden = true;
            get('spGuideHelp').open = false;
            paint();
            dialog.scrollTop = 0;
            get('sharePromptTitle').focus({ preventScroll: true });
        }
        function paintGuide() {
            const t = copy(), key = platform === 'desktop' ? browser : platform;
            const guide = (GUIDES[language()] || GUIDES['zh-Hant'])[key];
            get('spPlatformTabs').setAttribute('aria-label', t.platforms);
            for (const b of dialog.querySelectorAll('[data-platform]')) {
                const active = b.dataset.platform === platform;
                b.setAttribute('aria-selected', String(active));
                b.tabIndex = active ? 0 : -1;
                b.querySelector('span').textContent = t[b.dataset.platform];
                if (active)
                    get('spGuidePanel').setAttribute('aria-labelledby', b.id);
            }
            get('spBrowserRow').hidden = platform !== 'desktop';
            get('spBrowserLabel').textContent = t.browserLabel;
            get('spDesktopBrowser').value = browser;
            get('spGuideLabel').textContent = guide.label;
            const steps = get('spGuideSteps');
            steps.replaceChildren();
            guide.steps.forEach((step, i) => {
                const li = document.createElement('li'), n = document.createElement('span'), block = document.createElement('div');
                n.className = 'sp-step-number';
                n.textContent = String(i + 1);
                n.setAttribute('aria-hidden', 'true');
                block.className = 'sp-step-copy';
                const h = document.createElement('h3'), p = document.createElement('p');
                h.textContent = step[0];
                p.textContent = step[1];
                block.append(h, p);
                li.append(n, block);
                steps.append(li);
            });
            get('spGuideNotice').textContent = t.officialHint;
            get('spInstallNow').querySelector('span').textContent = installation.text().installNow;
            get('spInstallNow').hidden = !installation.snapshot().canPrompt;
            get('spInstallNow').disabled = sharedPending;
            get('spCopyOfficial').textContent = t.copyOfficial;
            get('spBack').textContent = t.back;
            get('spHelpTitle').textContent = t.missingOption;
            get('spGuideNote').textContent = guide.note;
            get('spHelpBody').textContent = t.helpBody;
            get('spBackupNote').textContent = t.backup;
            get('spGuideSource').textContent = t.source;
            get('spGuideSource').href = SOURCES[key];
            get('spGuideDone').textContent = t.return;
        }
        function paint() {
            const t = copy(), guide = view === 'guide', install = currentKind === 'install';
            dialog.classList.toggle('sp-guide-open', guide);
            dialog.classList.toggle('sp-share-open', !guide && !install);
            get('sharePromptWelcome').hidden = guide;
            get('spInstallGuide').hidden = !guide;
            get('sharePromptTitle').textContent = guide ? t.guideTitle : install ? t.installTitle : t.title;
            get('sharePromptBody').textContent = guide ? t.guideIntro : install ? t.installBody : t.body;
            get('sharePromptPrivacy').textContent = install ? t.installPrivacy : t.privacy;
            get('sharePromptLater').textContent = ['copied', 'richCopied'].includes(statusKey) ? t.done : t.later;
            get('sharePromptClose').setAttribute('aria-label', t.close);
            const installState = installation.snapshot(), installText = installation.text();
            get('spInstallIdentity').hidden = !install;
            get('spInstallStatus').hidden = !install;
            get('spInstallStatus').textContent = installState.message;
            get('sharePromptAcceptText').textContent = install ? (installState.standalone || installState.installReported ? installText.back : installState.busy ? installText.busy : installState.canPrompt ? installText.installNow : installState.code === 'ios' ? installText.iosButton : installText.instructions) : nativePending ? t.sharing : t.share;
            get('sharePromptAcceptIcon').innerHTML = svg(install ? 'install' : 'share');
            get('sharePromptAccept').disabled = sharedPending;
            get('sharePromptAccept').title = install ? t.installPrivacy : t.share;
            get('spCopyRow').hidden = guide || install;
            get('spCopyInvitationText').textContent = sharedPending && !nativePending ? t.working : statusKey === 'richCopied' ? t.copyRichDone : t.copyLinked;
            get('spCopyInvitation').disabled = sharedPending;
            get('spCopyInvitation').title = t.copyRichDetail;
            get('spCopyHint').textContent = t.backupHint;
            const showRich = richManual && !guide && !install;
            get('spRichManual').hidden = !showRich;
            get('spRichLabel').textContent = t.richPreview;
            get('spSelectRich').textContent = t.selectRich;
            get('spSelectRich').disabled = sharedPending;
            if (showRich) {
                const markup = shareHTML(), preview = get('spRichContent');
                if (preview.dataset.content !== markup) {
                    preview.innerHTML = markup;
                    preview.dataset.content = markup;
                }
            }
            get('sharePromptLinkLabel').textContent = guide ? t.link : t.shareContent;
            const manualText = guide ? installURL : shareMessage();
            if (get('sharePromptLink').value !== manualText)
                get('sharePromptLink').value = manualText;
            get('sharePromptLink').rows = guide ? 2 : 5;
            get('sharePromptStatus').hidden = !statusKey;
            get('sharePromptStatus').textContent = t[statusKey] || '';
            if (guide)
                paintGuide();
        }
        function tick() {
            const changedDay = syncDaily();
            if (changedDay && dialog.open)
                closePrompt('new-day', false);
            if (dialog.open && !sharedPending) {
                const blocked = blockReason(true);
                if (blocked && blocked !== 'editing' && !((view === 'guide' || returningFromShare) && blocked === 'background'))
                    closePrompt('interrupted', false);
            }
            const next = eligibleKind();
            if (!dialog.open && next && total() >= nextThreshold(next) && total() >= daily.notBeforeMs)
                openPrompt();
            if (now() - lastPersist >= CONFIG.persistEveryMs)
                persist();
        }
        function noteActivity(event) {
            if (dialog.contains(event.target))
                return;
            lastActivity = now();
            if (event.target?.closest?.('#playBtn,#unlockAudio,.song-main') || (event.type === 'keydown' && event.code === 'Space' && !event.target?.closest?.('input,textarea,select,button')))
                startGuardUntil = now() + CONFIG.startGuardMs;
        }
        for (const type of ['pointerdown', 'keydown', 'input', 'click'])
            document.addEventListener(type, noteActivity, { capture: true, passive: true });
        document.addEventListener('visibilitychange', () => {
            syncDaily(true);
            countingForeground = !document.hidden;
            if (document.hidden) {
                if (dialog.open && !sharedPending && view !== 'guide' && !returningFromShare)
                    closePrompt('interrupted', false);
            }
            else {
                lastActivity = now();
            }
        });
        window.addEventListener('pagehide', () => { syncDaily(true); countingForeground = false; });
        window.addEventListener('pageshow', () => { syncDaily(); countingForeground = !document.hidden; lastActivity = now(); });
        window.addEventListener('storage', event => { if (event.key === CONFIG.dailyKey)
            syncDaily(); });
        window.addEventListener('appinstalled', () => { installedInThisTab = true; });
        for (const id of ['sharePromptLater', 'sharePromptClose', 'spGuideDone'])
            get(id).addEventListener('click', () => closePrompt('later'));
        dialog.addEventListener('cancel', e => { e.preventDefault(); closePrompt('later'); });
        dialog.addEventListener('click', e => { if (e.target !== dialog)
            return; const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
            closePrompt('later'); });
        dialog.addEventListener('keydown', e => {
            if (e.key === 'Tab') {
                const items = [...dialog.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),summary,a[href]')].filter(el => el.tabIndex >= 0 && el.getClientRects().length && ![...el.closest('details:not([open])')?.querySelectorAll(':scope > :not(summary)') || []].some(p => p.contains(el)));
                const first = items[0], last = items.at(-1);
                if (first && e.shiftKey && (document.activeElement === first || document.activeElement === get('sharePromptTitle'))) {
                    e.preventDefault();
                    last.focus();
                }
                else if (last && !e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
            if (e.key !== 'Escape')
                e.stopPropagation();
        });
        for (const b of dialog.querySelectorAll('[data-platform]')) {
            b.addEventListener('click', () => { platform = b.dataset.platform; paintGuide(); });
            b.addEventListener('keydown', e => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key))
                    return;
                e.preventDefault();
                e.stopPropagation();
                const buttons = [...dialog.querySelectorAll('[data-platform]')], i = buttons.indexOf(b);
                const n = e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
                platform = buttons[n].dataset.platform;
                paintGuide();
                buttons[n].focus();
            });
        }
        get('spDesktopBrowser').addEventListener('change', e => { browser = e.target.value; paintGuide(); });
        get('spBack').addEventListener('click', () => { view = 'prompt'; statusKey = ''; get('sharePromptManual').hidden = true; paint(); dialog.scrollTop = 0; get('sharePromptTitle').focus({ preventScroll: true }); });
        get('sharePromptLink').addEventListener('click', e => e.currentTarget.select());
        async function copyLink(token, forGuide = false) {
            richManual = false;
            const content = forGuide ? installURL : shareMessage();
            let timer;
            try {
                if (!navigator.clipboard?.writeText || !window.isSecureContext)
                    throw Error('clipboard unavailable');
                await Promise.race([navigator.clipboard.writeText(content), new Promise((_, reject) => { timer = setTimeout(() => reject(Error('copy timeout')), 6000); })]);
                if (token !== actionToken || !dialog.open)
                    return;
                sharedPending = false;
                statusKey = forGuide ? 'saveCopied' : 'copied';
                response = 'copied';
                paint();
            }
            catch (_) {
                if (token !== actionToken || !dialog.open)
                    return;
                sharedPending = false;
                forceCopy = true;
                statusKey = forGuide ? 'manual' : 'manualShare';
                get('sharePromptManual').hidden = false;
                paint();
                get('sharePromptLink').focus({ preventScroll: false });
                get('sharePromptLink').select();
            }
            finally {
                clearTimeout(timer);
            }
        }
        get('spCopyOfficial').addEventListener('click', () => { if (sharedPending)
            return; const token = ++actionToken; sharedPending = true; statusKey = ''; paint(); copyLink(token, true); });
        function selectRichContent() {
            const target = get('spRichContent'), selection = window.getSelection();
            if (!target || !selection)
                return;
            target.focus({ preventScroll: true });
            const range = document.createRange();
            range.selectNodeContents(target);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        function writeCopyEvent(event) {
            if (!dialog.open || !richManual || get('spRichManual').hidden || !event.clipboardData)
                return;
            const selection = window.getSelection(), target = get('spRichContent');
            if (!selection || selection.isCollapsed || !target.contains(selection.anchorNode) || !target.contains(selection.focusNode))
                return;
            event.clipboardData.setData('text/html', shareHTML());
            event.clipboardData.setData('text/plain', shareMessage());
            event.preventDefault();
        }
        document.addEventListener('copy', writeCopyEvent);
        function legacyRichCopy() {
            if (typeof document.execCommand !== 'function')
                return false;
            richManual = true;
            paint();
            const selection = window.getSelection(), ranges = [];
            if (selection)
                for (let i = 0; i < selection.rangeCount; i++)
                    ranges.push(selection.getRangeAt(i).cloneRange());
            const active = document.activeElement;
            let handled = false;
            const capture = event => {
                if (!event.clipboardData)
                    return;
                event.clipboardData.setData('text/html', shareHTML());
                event.clipboardData.setData('text/plain', shareMessage());
                event.preventDefault();
                handled = true;
            };
            document.addEventListener('copy', capture, true);
            try {
                selectRichContent();
                return document.execCommand('copy') && handled;
            }
            catch (_) {
                return false;
            }
            finally {
                document.removeEventListener('copy', capture, true);
                if (selection) {
                    selection.removeAllRanges();
                    for (const range of ranges)
                        try {
                            selection.addRange(range);
                        }
                        catch (_) { }
                }
                if (active?.isConnected)
                    try {
                        active.focus({ preventScroll: true });
                    }
                    catch (_) { }
            }
        }
        async function copyRichInvitation(token) {
            let timer;
            try {
                const modern = window.isSecureContext && navigator.clipboard?.write && typeof window.ClipboardItem === 'function';
                const supports = !window.ClipboardItem?.supports || window.ClipboardItem.supports('text/html');
                if (modern && supports) {
                    const item = new ClipboardItem({
                        'text/html': new Blob([shareHTML()], { type: 'text/html' }),
                        'text/plain': new Blob([shareMessage()], { type: 'text/plain' })
                    });
                    await Promise.race([navigator.clipboard.write([item]), new Promise((_, reject) => { timer = setTimeout(() => reject(Error('copy timeout')), 6000); })]);
                }
                else if (!legacyRichCopy())
                    throw Error('formatted clipboard unavailable');
                if (token !== actionToken || !dialog.open)
                    return;
                sharedPending = false;
                richManual = false;
                statusKey = 'richCopied';
                response = 'rich-copied';
                paint();
            }
            catch (_) {
                if (token !== actionToken || !dialog.open)
                    return;
                sharedPending = false;
                richManual = true;
                statusKey = 'richManual';
                paint();
            }
            finally {
                clearTimeout(timer);
            }
        }
        get('spSelectRich').addEventListener('click', () => { selectRichContent(); statusKey = 'selectedRich'; paint(); });
        get('spCopyInvitation').addEventListener('click', () => {
            if (sharedPending || currentKind !== 'share' || view !== 'prompt')
                return;
            const token = ++actionToken;
            nativePending = false;
            sharedPending = true;
            statusKey = '';
            richManual = false;
            get('sharePromptManual').hidden = true;
            paint();
            copyRichInvitation(token);
        });
        get('sharePromptAccept').addEventListener('click', () => {
            if (sharedPending)
                return;
            if (currentKind === 'install') {
                requestInstall();
                return;
            }
            if (currentKind !== 'share' || view !== 'prompt')
                return;
            if (!nativeShare()) {
                statusKey = 'fallback';
                response = 'share-unavailable';
                paint();
                get('spCopyInvitation').focus({ preventScroll: false });
                return;
            }
            const token = ++actionToken;
            sharedPending = true;
            nativePending = true;
            returningFromShare = true;
            statusKey = '';
            richManual = false;
            get('sharePromptManual').hidden = true;
            paint();
            const finish = (status, result) => {
                if (token !== actionToken || !dialog.open)
                    return;
                sharedPending = false;
                nativePending = false;
                statusKey = status;
                response = result;
                paint();
            };
            let promise;
            try {
                promise = navigator.share({ title: copy().useNow, text: invitationText(), url: CONFIG.shareURL });
            }
            catch (error) {
                finish(error?.name === 'AbortError' ? 'cancelled' : 'fallback', 'share-unavailable');
                return;
            }
            Promise.resolve(promise).then(() => {
                finish('shareReturned', 'share-handed-off');
            }).catch(error => {
                finish(error?.name === 'AbortError' ? 'cancelled' : 'fallback', error?.name === 'AbortError' ? 'share-cancelled' : 'share-unavailable');
            });
        });
        get('spInstallNow').addEventListener('click', requestInstall);
        installation.onChange(paint);
        window.TempoliveI18n?.onChange(paint);
        window.TempoliveSharePrompt = Object.freeze({
            snapshot: () => {
                syncDaily();
                const next = eligibleKind(), at = nextThreshold(next);
                return { version: '2.5.0-bottom-install-share10', day: daily.day,
                    installAtMs: null, installMode: 'bottom-hint', shareAtMs: CONFIG.shareAtMs,
                    foregroundMs: Math.floor(total()), nextAtMs: Number.isFinite(at) ? at : null,
                    remainingMs: next ? Math.max(0, Math.ceil(Math.max(at, daily.notBeforeMs) - total())) : null,
                    nextKind: next, shownToday: { ...daily.shown }, shownCount: Number(daily.shown.install) + Number(daily.shown.share),
                    shown: daily.shown.install || daily.shown.share, open: dialog.open, currentKind, view, platform, browser, response,
                    blockedBy: blockReason(), storageAvailable, sharing: sharedPending, shareURL: CONFIG.shareURL, standalone: isStandalone() };
            }
        });
        paint();
        setInterval(tick, CONFIG.pollMs);
    }
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', init, { once: true });
    else
        init();
})();

/* TEMPOLIVE 2.5.0: local correction, scoped invitations, quiet install hint.
   No shared transport, song, microphone, service-worker scope or foreign data writes. */
(() => {
  'use strict';
  const RELEASE = '2.5.0-room-tools';
  const W = {
    'zh-Hant': {
      sync:'\u8033\u6a5f\u540c\u6b65', earlier:'\u63d0\u65e9', later:'\u5ef6\u5f8c', reset:'\u6b78\u96f6',
      only:'\u53ea\u8abf\u6574\u81ea\u5df1\u7684\u8072\u97f3',
      guide:'\u5c0d\u7167\u4e3b\u6301\u4eba\u7684\u8072\u97f3\uff1a\u6162\u4e86\u6309\u63d0\u65e9\uff0c\u5feb\u4e86\u6309\u5ef6\u5f8c\u3002',
      copy:'\u8907\u88fd\u9023\u7d50', share:'\u5206\u4eab\u623f\u9593', copied:'\u5df2\u8907\u88fd\u623f\u9593\u9023\u7d50',
      manual:'\u8acb\u9577\u6309\u8907\u88fd\u4e0b\u65b9\u9023\u7d50', cancelled:'\u5df2\u53d6\u6d88\u5206\u4eab',
      shared:'\u5df2\u958b\u555f\u5206\u4eab', link:'\u623f\u9593\u9080\u8acb\u9023\u7d50',
      invite:'\u4e00\u8d77\u52a0\u5165 TEMPOLIVE\uff0c\u623f\u865f ',
      invalid:'\u623f\u9593\u9023\u7d50\u7121\u6548\uff0c\u8acb\u78ba\u8a8d 4 \u4f4d\u623f\u865f\u3002',
      occupied:'\u8acb\u5148\u96e2\u958b\u76ee\u524d\u623f\u9593\uff0c\u518d\u958b\u555f\u9080\u8acb\u3002',
      install:'\u52a0\u5165\u4e3b\u756b\u9762', installDetail:'\u52a0\u5165\u5f8c\u6703\u5728\u624b\u6a5f\u684c\u9762\u986f\u793a\u5716\u793a\uff0c\u4e0b\u6b21\u9ede\u4e00\u4e0b\u5c31\u80fd\u958b\u555f\u3002', installDetailDesktop:'\u5b89\u88dd\u5f8c\u53ef\u5f9e\u61c9\u7528\u7a0b\u5f0f\u6e05\u55ae\u958b\u555f\uff0c\u4e0b\u6b21\u4f7f\u7528\u66f4\u65b9\u4fbf\u3002', close:'\u95dc\u9589\u63d0\u793a', done:'\u77e5\u9053\u4e86',
      ios:'\u5728 Safari \u9ede\u300c\u5206\u4eab\u300d\u2192\u300c\u52a0\u5165\u4e3b\u756b\u9762\u300d\u3002',
      android:'\u5728 Chrome \u9ede\u300c\u22ee\u300d\u2192\u300c\u5b89\u88dd\u61c9\u7528\u7a0b\u5f0f\u300d\u6216\u300c\u52a0\u5165\u4e3b\u756b\u9762\u300d\u3002',
      desktop:'\u5728 Chrome\uff0fEdge \u7684\u7db2\u5740\u5217\u6216\u9078\u55ae\u4e2d\u9078\u64c7\u300c\u5b89\u88dd TEMPOLIVE\u300d\u3002',
      inapp:'\u8acb\u5148\u7528 Safari \u6216 Chrome \u958b\u555f\u6b64\u9801\uff0c\u518d\u52a0\u5165\u4e3b\u756b\u9762\u3002',
      local:'\u8acb\u5f9e TEMPOLIVE \u7dda\u4e0a\u7db2\u5740\u958b\u555f\uff0c\u518d\u52a0\u5165\u4e3b\u756b\u9762\u3002',
      wait:'\u8acb\u5728\u7cfb\u7d71\u8996\u7a97\u78ba\u8a8d',
      nativeFail:'\u672a\u80fd\u958b\u555f\u5b89\u88dd\u8996\u7a97\uff0c\u8acb\u4f9d\u4e0b\u65b9\u65b9\u5f0f\u64cd\u4f5c\u3002'
    },
    en: {
      sync:'Headphone sync', earlier:'Earlier', later:'Later', reset:'Reset', only:'This device only',
      guide:'Listen to the host: late? Earlier. Ahead? Later.', copy:'Copy link', share:'Share room',
      copied:'Room link copied', manual:'Press and hold the link to copy', cancelled:'Sharing cancelled',
      shared:'Share action completed', link:'Room invitation link', invite:'Join my TEMPOLIVE room: ',
      invalid:'Invalid room link. Check the 4-digit room code.', occupied:'Leave your current room before opening this invitation.',
      install:'Add to Home Screen', installDetail:'Adds a Home Screen icon. Tap it to open next time.', installDetailDesktop:'Open it from your apps next time, without finding the website again.', close:'Dismiss hint', done:'Got it',
      ios:'In Safari, choose Share > Add to Home Screen.',
      android:'In Chrome, choose the menu > Install app or Add to Home Screen.',
      desktop:'In Chrome or Edge, choose Install TEMPOLIVE from the address bar or browser menu.',
      inapp:'Open this page in Safari or Chrome first, then add it to your Home Screen.',
      local:'Open the online TEMPOLIVE address first to install the app.',
      wait:'Confirm in the system dialog',nativeFail:'The install dialog did not open. Use the steps below.'
    }
  };
  const words=()=>W[I18N.lang]||W['zh-Hant'];
  const connected=()=>['host','guest'].includes(room.role);
  const icon=name=>'<svg aria-hidden="true"><use href="#i-'+name+'"/></svg>';

  // One collapsed row next to playback, also reachable in stage view.
  const sync=document.createElement('details');
  sync.id='quickSync'; sync.hidden=true; sync.dataset.i18nDynamic='';
  sync.innerHTML='<summary id="quickSyncToggle">'+icon('headphones')+'<span id="quickSyncLabel"></span><output id="quickSyncSummary"></output>'+icon('chevron')+'</summary>'+
    '<div class="quick-sync-body"><div class="quick-sync-stepper"><button type="button" class="btn" id="syncEarlier"></button><output id="quickSyncValue" aria-live="polite"></output><button type="button" class="btn" id="syncLater"></button></div>'+
    '<input type="range" id="quickSyncRange" min="-1000" max="1000" step="5" value="0" aria-describedby="quickSyncHelp">'+
    '<div class="quick-sync-footer"><span id="quickSyncOnly"></span><button type="button" class="text-btn" id="quickSyncReset"></button></div><p id="quickSyncHelp"></p></div>';
  $('transportInfo').insertAdjacentElement('afterend',sync);
  const valueText=()=>state.latency===0?'0 ms':(state.latency<0?words().earlier:words().later)+' '+Math.abs(state.latency)+' ms';
  function paintSync(){
    sync.hidden=!connected();
    if(!connected())sync.open=false;
    const w=words();
    $('quickSyncLabel').textContent=w.sync; $('quickSyncSummary').textContent=valueText();
    $('quickSyncValue').textContent=(state.latency>0?'+':'')+state.latency+' ms';
    $('quickSyncRange').value=String(state.latency);
    $('quickSyncRange').setAttribute('aria-label',w.sync+' (ms)');
    $('quickSyncRange').setAttribute('aria-valuetext',valueText());
    $('syncEarlier').textContent=w.earlier+' 10 ms'; $('syncLater').textContent=w.later+' 10 ms';
    $('syncEarlier').disabled=state.latency<=-SYNC_CONFIG.manualLimitMs;
    $('syncLater').disabled=state.latency>=SYNC_CONFIG.manualLimitMs;
    $('quickSyncReset').textContent=w.reset;
    $('quickSyncOnly').textContent=w.only;
    $('quickSyncHelp').textContent=w.guide;
  }
  function adjust(value){
    if(!connected()||!Number.isFinite(Number(value)))return;
    // Existing scheduler applies the sign to AudioContext timing and phase.
    // setLatency writes only local state. It never changes room.events or BPM.
    setLatency(value); paintSync();
  }
  $('syncEarlier').addEventListener('click',()=>adjust(state.latency-10));
  $('syncLater').addEventListener('click',()=>adjust(state.latency+10));
  $('quickSyncReset').addEventListener('click',()=>adjust(0));
  $('quickSyncRange').addEventListener('input',event=>adjust(Number(event.target.value)));
  sync.addEventListener('keydown',event=>{if([' ','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))event.stopPropagation();});
  const priorRenderAudio=renderAudio;
  renderAudio=function(){const result=priorRenderAudio();paintSync();return result;};

  const invite=document.createElement('div'); invite.id='roomInvite';invite.dataset.i18nDynamic='';
  invite.innerHTML='<div class="room-invite-actions"><button type="button" class="btn" id="copyRoomLink">'+icon('copy')+'<span></span></button><button type="button" class="btn primary" id="shareRoomLink">'+icon('share')+'<span></span></button></div><p id="roomInviteStatus" role="status" aria-live="polite" hidden></p><input type="text" id="roomInviteManual" readonly hidden>';
  $('roomCode').closest('.room-code-box').insertAdjacentElement('afterend',invite);
  let inviteCode='',sharing=false;
  function roomLink(){
    if(!connected()||!/^\d{4}$/.test(room.code))return '';
    const url=new URL('https://chien930207-cyber.github.io/TEMPOLIVE/index.html');
    url.searchParams.set('room',room.code);return url.href;
  }
  function inviteStatus(text){$('roomInviteStatus').hidden=!text;$('roomInviteStatus').textContent=text;}
  function paintInvite(){
    invite.hidden=!connected();
    $('copyRoomLink').querySelector('span').textContent=words().copy;
    $('shareRoomLink').querySelector('span').textContent=words().share;
    $('roomInviteManual').setAttribute('aria-label',words().link);
    if(inviteCode!==room.code){inviteCode=room.code;inviteStatus('');$('roomInviteManual').hidden=true;}
    $('copyRoomLink').disabled=!roomLink();$('shareRoomLink').disabled=!roomLink()||sharing;
  }
  async function copyLink(){
    const link=roomLink();if(!link)return;
    const code=room.code;
    try{
      if(!navigator.clipboard?.writeText)throw Error('Clipboard unavailable');
      await navigator.clipboard.writeText(link);
      if(code!==room.code)return;
      inviteStatus(words().copied);$('roomInviteManual').hidden=true;
    }catch(_){
      if(code!==room.code)return;
      const field=$('roomInviteManual');field.value=link;field.hidden=false;field.focus({preventScroll:true});field.select();field.setSelectionRange(0,link.length);
      // execCommand is only a fallback inside the original user action; report
      // success only if the browser actually reports a successful copy.
      let copied=false;try{copied=document.execCommand('copy');}catch(_){}
      inviteStatus(copied?words().copied:words().manual);
      if(copied){field.hidden=true;$('copyRoomLink').focus({preventScroll:true});}
    }
  }
  $('copyRoomLink').addEventListener('click',copyLink);
  $('roomInviteManual').addEventListener('click',event=>event.target.select());
  $('shareRoomLink').addEventListener('click',()=>{
    const link=roomLink();if(!link||sharing)return;
    if(typeof navigator.share!=='function'){copyLink();return;}
    const code=room.code;let job;
    try{job=navigator.share({title:'TEMPOLIVE',text:words().invite+code,url:link});}
    catch(error){if(error?.name==='AbortError')inviteStatus(words().cancelled);else copyLink();return;}
    sharing=true;paintInvite();
    Promise.resolve(job).then(()=>{if(code===room.code)inviteStatus(words().shared);}).catch(error=>{
      if(code!==room.code)return;
      if(error?.name==='AbortError')inviteStatus(words().cancelled);else copyLink();
    }).finally(()=>{sharing=false;paintInvite();});
  });
  const priorRenderRoom=renderRoom;
  renderRoom=function(){const result=priorRenderRoom();paintSync();paintInvite();return result;};

  // Invitations prefill a code, never auto-join or turn on audio without a tap.
  function invitationFromURL(){try{const p=new URL(location.href).searchParams;return p.has('room')?p.get('room'):null;}catch(_){return null;}}
  function openInvitation(){
    const code=invitationFromURL();if(code===null)return;
    if(!/^\d{4}$/.test(code)){toast(words().invalid);return;}
    if(room.role!=='solo'){
      if(room.code!==code)toast(words().occupied);
      return;
    }
    openRoomDialog('guest');$('joinCode').value=code;
    $('instrumentPicker').focus({preventScroll:true});
  }
  // Existing resume task runs first, so an invited URL cannot replace a room
  // that is already being restored. No query is treated as a redirect target.
  setTimeout(openInvitation,0);

  const hint=document.createElement('aside');hint.id='installHint';hint.dataset.i18nDynamic='';hint.hidden=true;
  hint.innerHTML='<button type="button" id="installHintAction" aria-labelledby="installHintTitle" aria-describedby="installHintDescription">'+icon('plus')+'<span class="install-hint-copy"><span id="installHintTitle"></span><span id="installHintDescription"></span></span></button><button type="button" id="installHintClose">'+icon('close')+'</button>';
  document.body.append(hint);
  // Reserve the measured banner height, including wrapped text and larger fonts.
  const updateHintSpace=()=>{
    if(!hint.hidden)document.documentElement.style.setProperty('--tempolive-install-hint-height',Math.ceil(hint.getBoundingClientRect().height)+'px');
  };
  if(typeof ResizeObserver==='function')new ResizeObserver(updateHintSpace).observe(hint);
  else window.addEventListener('resize',updateHintSpace);
  const guide=document.createElement('dialog');guide.id='quickInstallGuide';guide.dataset.i18nDynamic='';guide.setAttribute('aria-labelledby','quickInstallTitle');
  guide.innerHTML='<div class="dialog-head"><h2 id="quickInstallTitle"></h2><button type="button" class="icon-btn" id="quickInstallClose">'+icon('close')+'</button></div><div class="dialog-body"><p id="quickInstallBenefit"></p><p id="quickInstallSteps"></p><button type="button" class="btn full" id="quickInstallDone"></button></div>';
  document.body.append(guide);
  let dismissed=false,installBusy=false,installAccepted=false,paintQueued=false;
  const ua=navigator.userAgent||'';
  const apple=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  function guideText(){
    if(location.protocol==='file:')return words().local;
    if(/Line\/|FBAN|FBAV|Instagram|MicroMessenger/i.test(ua))return words().inapp;
    return apple?words().ios:/Android/.test(ua)?words().android:words().desktop;
  }
  function paintHint(){
    const w=words(),installation=window.TempoliveInstall?.snapshot();
    const editing=document.activeElement?.matches('input,textarea,select,[contenteditable="true"]');
    const hidden=dismissed||installAccepted||installation?.standalone||installation?.installReported||document.hidden||
      !!document.querySelector('dialog[open]')||sync.open||document.body.classList.contains('tour-active')||document.body.classList.contains('focus-mode')||editing;
    hint.hidden=!!hidden;document.body.classList.toggle('has-install-hint',!hidden);
    const benefit=apple||/Android/.test(ua)?w.installDetail:w.installDetailDesktop;
    $('installHintTitle').textContent=installBusy?w.wait:w.install;
    $('installHintDescription').textContent=benefit;
    $('quickInstallBenefit').textContent=benefit;
    $('installHintAction').disabled=installBusy;
    $('installHintClose').setAttribute('aria-label',w.close);
    $('quickInstallTitle').textContent=w.install;$('quickInstallClose').setAttribute('aria-label',w.close);
    $('quickInstallSteps').textContent=guideText();$('quickInstallDone').textContent=w.done;
    updateHintSpace();
  }
  function queueHint(){if(paintQueued)return;paintQueued=true;requestAnimationFrame(()=>{paintQueued=false;paintHint();});}
  function openGuide(){paintHint();if(!guide.open)guide.showModal();$('quickInstallDone').focus({preventScroll:true});queueHint();}
  $('installHintClose').addEventListener('click',()=>{dismissed=true;paintHint();});
  $('installHintAction').addEventListener('click',()=>{
    const installer=window.TempoliveInstall;
    if(!installer?.snapshot().canPrompt){openGuide();return;}
    // request() calls the genuine install prompt synchronously in this tap.
    installBusy=true;const job=installer.request();paintHint();
    Promise.resolve(job).then(result=>{
      if(result.outcome==='accepted'){installAccepted=true;dismissed=true;}
      else if(result.outcome==='dismissed'){dismissed=true;}
      else openGuide();
    }).catch(openGuide).finally(()=>{installBusy=false;paintHint();});
  });
  for(const name of ['quickInstallClose','quickInstallDone'])$(name).addEventListener('click',()=>guide.close());
  guide.addEventListener('close',()=>{queueHint();if(!dismissed&&!document.querySelector('dialog[open]'))$('installHintAction').focus({preventScroll:true});});
  guide.addEventListener('click',event=>{if(event.target!==guide)return;const r=guide.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)guide.close();});
  new MutationObserver(queueHint).observe(document.body,{attributes:true,attributeFilter:['class']});
  new MutationObserver(queueHint).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
  for(const type of ['focusin','focusout','visibilitychange'])document.addEventListener(type,queueHint);
  window.addEventListener('pageshow',queueHint);window.visualViewport?.addEventListener('resize',queueHint);
  window.TempoliveInstall?.onChange(queueHint);
  I18N.onChange(()=>{paintSync();paintInvite();paintHint();});
  window.TempoliveRoomTools=Object.freeze({snapshot:()=>({release:RELEASE,language:I18N.lang,languages:['zh-Hant','en'],connected:connected(),manualCorrectionMs:state.latency,correctionStepMs:10,rangeStepMs:5,limitMs:SYNC_CONFIG.manualLimitMs,roomURL:roomLink(),inviteCode:invitationFromURL(),installHintVisible:!hint.hidden,installHintDismissed:dismissed,acousticLatencyMeasured:false})});
  paintSync();paintInvite();paintHint();
})();
