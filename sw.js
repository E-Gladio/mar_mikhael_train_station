importScripts('content.js');
const V = 'heritage-v1'; // change this number whenever you edit content or audio
const FILES = ['./', 'index.html', 'content.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png']
  .concat(self.SECTIONS.map(s => s.audio).filter(Boolean));
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== V).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
async function ranged(req, res) { // Safari needs byte ranges for audio
  const b = await res.arrayBuffer();
  const m = /bytes=(\d+)-(\d*)/.exec(req.headers.get('range'));
  const s = +m[1], e = m[2] ? +m[2] : b.byteLength - 1;
  return new Response(b.slice(s, e + 1), {status: 206, headers: {
    'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
    'Content-Range': `bytes ${s}-${e}/${b.byteLength}`}});
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => {
    if (r) return req.headers.has('range') ? ranged(req, r) : r;
    return fetch(req).catch(() => req.mode === 'navigate' ? caches.match('index.html') : Response.error());
  }));
});
