/* Bếp Cô Kỹ – service worker (26/11/2026)
   Để trang cài lên điện thoại thành ỨNG DỤNG (không chỉ lối tắt) và mở được khi mất mạng.
   - Trang, chữ, danh sách bài (html, js, css, json, manifest): lấy MẠNG TRƯỚC → bài mới hiện ngay;
     mất mạng mới dùng bản đã lưu.
   - Ảnh, phông chữ: dùng bản đã lưu cho nhanh, đồng thời tải bản mới về thay.
   - Không đụng tới địa chỉ ngoài (Zalo, YouTube, máy đếm, Worker bếp nghỉ) và trang quan-ly.
   Đổi cách lưu thì tăng PHIEN_BAN. */
const PHIEN_BAN = 'bepcoky-2026-11-28a';
const LUU_SAN = ['./', 'index.html', 'bai-viet.js', 'tin-moi.js', 'menu-do-vat.js', 'manifest.webmanifest',
  'favicon.svg', 'img/icon-192.png', 'img/icon-512.png', 'img/icon-maskable-512.png', 'img/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(PHIEN_BAN).then(c => Promise.all(LUU_SAN.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== PHIEN_BAN).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith('/quan-ly')) return;
  const laAnh = /\.(png|jpe?g|webp|gif|svg|ico|woff2?|ttf)$/i.test(url.pathname);
  if (laAnh) {
    e.respondWith(caches.open(PHIEN_BAN).then(c => c.match(req).then(hit => {
      const moi = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || moi;
    })));
    return;
  }
  e.respondWith(fetch(req).then(r => {
    if (r.ok) { const cp = r.clone(); caches.open(PHIEN_BAN).then(c => c.put(req, cp)); }
    return r;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || (req.mode === 'navigate' ? caches.match('./') : Response.error()))));
});
