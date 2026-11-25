// Ứng dụng đã chuyển sang https://soi.bepcoky.com/ – service worker cũ tự gỡ để máy đã cài không bị kẹt bản cũ.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({type: 'window'})) c.navigate('https://soi.bepcoky.com/');
})()));
