/* TEMPOLIVE launch-r2-bilingual: confined to /TEMPOLIVE/; network only, no CacheStorage.
   Never unregister, read, write or delete sibling-app caches or application data.
   A browser/OS shortcut bound to another app still needs to be recreated. */
'use strict';
const ROOT = '/TEMPOLIVE/';
const OWN_BASE = new URL(ROOT,self.location.origin);
const EXPECTED_SCOPE = OWN_BASE.href;
const ENTRY_PATHS = new Set([ROOT,ROOT+'index.html',ROOT+'live.html',ROOT+'tempolive.html',ROOT+'tempolive-interface.html']);
const CORRECT_SCOPE = self.registration.scope === EXPECTED_SCOPE && new URL(self.location.href).pathname === ROOT+'tempolive-launch-sw.js';
if (CORRECT_SCOPE) {
  self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
  self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
  self.addEventListener('fetch',event=>{
    const request=event.request;
    const url=new URL(request.url);
    if(request.method!=='GET' || url.origin!==OWN_BASE.origin || !url.pathname.startsWith(ROOT))return;
    if(request.mode==='navigate' && ENTRY_PATHS.has(url.pathname))event.respondWith(loadEntry(url));
  });
}
async function loadEntry(from) {
  const target=new URL('index.html',OWN_BASE);
  target.search=from.search;
  try {
    // Never follow an accidental redirect into a different application.
    const response=await fetch(target.href,{cache:'no-store',redirect:'manual',credentials:'same-origin',headers:{Accept:'text/html'}});
    if(!response.ok || response.type==='opaqueredirect' || response.redirected)throw new Error('Invalid entry response');
    if(response.url && new URL(response.url).pathname!==ROOT+'index.html')throw new Error('Wrong entry path');
    const source=await response.clone().text();
    const isTempolive=/<meta\b(?=[^>]*\bname\s*=\s*["']application-name["'])(?=[^>]*\bcontent\s*=\s*["']TEMPOLIVE["'])[^>]*>/i.test(source) && /<title[^>]*>\s*TEMPOLIVE(?:\s|<)/i.test(source);
    if(!isTempolive)throw new Error('Wrong application content');
    return response;
  } catch(error) {
    // Fail closed instead of displaying another application's HTML. Do not loop.
    return safeError();
  }
}
function safeError() {
  const text='<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>TEMPOLIVE</title><meta name="application-name" content="TEMPOLIVE"><style>body{font:16px/1.7 system-ui,sans-serif;max-width:32rem;margin:12vh auto;padding:24px;background:#f7f7f5;color:#20211f}h1{font-size:24px}a{display:inline-block;padding:12px 20px;border:1px solid;border-radius:12px;color:inherit}small{display:block;margin-top:20px;opacity:.7}</style></head><body><h1>TEMPOLIVE</h1><p>\u76ee\u524d\u7121\u6cd5\u78ba\u8a8d\u6b63\u78ba\u7684 TEMPOLIVE \u9801\u9762\u3002\u8acb\u78ba\u8a8d\u7db2\u8def\u8207\u7db2\u7ad9\u66f4\u65b0\u5df2\u5b8c\u6210\uff0c\u518d\u8a66\u4e00\u6b21\u3002</p><p>Unable to verify the TEMPOLIVE page. Check your connection and deployment, then retry.</p><a href="/TEMPOLIVE/index.html?launch-retry=1">\u91cd\u65b0\u958b\u555f TEMPOLIVE</a><small>launch-r2-bilingual \u00b7 No app data was deleted.</small></body></html>';
  return new Response(text,{status:503,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Tempolive-Launch':'blocked-or-offline'}});
}
