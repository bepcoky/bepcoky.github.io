/* =====================================================================
   Bấm đồ vật trong căn bếp → các nhánh tỏa ra thành vòng tròn quanh đồ vật
   (cách làm theo trang nguyenducdungvn.github.io, 26/11/2026).
   Sửa nhánh: sửa danh sách NHANH bên dưới. Khóa là id góc (data-go của đồ vật).
   Mỗi nhánh: [biểu tượng, chữ, đường dẫn]. Đường dẫn '#bai-hat:<mã video>' sẽ mở và phát bài hát.
   Nhánh cuối luôn là "Vào góc …" (nút vàng) – tự thêm.
   ===================================================================== */
(function () {
  'use strict';
  var NHANH = {
    'vuon': [['🌿', 'Nhà & vườn', '#vuon'], ['🥬', 'Nguyên liệu & món', 'kien-thuc/#nguyen-lieu'], ['🐌', 'Ốc bươu nhồi', 'kien-thuc/oc-buou-nhoi.html'], ['🍚', 'Vo gạo nhẹ tay', 'kien-thuc/vo-gao.html']],
    'noi-ngoai': [['👨‍👩‍👧‍👦', 'Nội ngoại', '#noi-ngoai'], ['🎵', 'Bài hát về em', '#bai-hat'], ['💞', 'Bước chung một đời', '#bai-hat:p8jLZq9B_s0'], ['🙏', 'Những điều em tin', '#triet-ly']],
    'di-day-di-do': [['🧭', 'Đi đây đó', '#di-day-di-do'], ['☁️', 'Anh yêu nắng hay yêu em?', '#bai-hat:r6IUzZCaynQ'], ['🍃', 'Thở đi nhẹ một kiếp người', '#bai-hat:VtI6BtRhSJE'], ['🌍', 'Trái đất này ta đến một lần thôi', '#bai-hat:jYRa-MkkHow']],
    'gian-hang': [['🫙', 'Gian hàng', '#gian-hang'], ['🛒', 'Đặt Cô Kỹ làm', '#dat-hang'], ['🔎', 'Soi cùng Cô Kỹ', 'https://soi.bepcoky.com/'], ['🛡️', 'Kiểm chứng trước khi mua', '#cung-thong-tin']],
    've-em': [['👩‍🍳', 'Về em', '#ve-em'], ['🍽️', 'Hôm nay ăn gì?', '#cung-an-gi'], ['📒', 'Nhật ký bếp', '#nhat-ky'], ['😂', 'Vợ là sếp – chồng là nhất', '#bai-hat:5JOihj8f0yc']],
    'moi-tra-sua': [['🧋', 'Mời Cô Kỹ ly trà sữa', '#moi-tra-sua'], ['❓', 'Hướng dẫn', '#huong-dan'], ['📲', 'Cài lên điện thoại', '#cai-dat']],
    'cung-co-ky': [['📖', 'Kiến thức bếp', '#kien-thuc'], ['🍳', 'Cùng nấu ăn', '#cung-nau-an'], ['🗣️', 'Học ngoại ngữ', '#cung-ngoai-ngu'], ['💄', 'Làm đẹp', '#cung-lam-dep'], ['🛍️', 'Đồ em dùng', '#cung-do-dung']],
    'nhat-ky': [['📒', 'Nhật ký bếp', '#nhat-ky'], ['🍳', 'Chảo lồi giữa', 'kien-thuc/chao-loi-giua.html'], ['🔪', 'Rãnh trên lưỡi dao', 'kien-thuc/ranh-tren-luoi-dao.html'], ['🧽', 'Miếng rửa chén', 'kien-thuc/mieng-rua-chen.html'], ['🥣', 'Phễu lọc chóp nón', 'kien-thuc/pheu-loc-chop-non.html']],
    'song-khoe': [['🌿', 'Sống khỏe', '#song-khoe'], ['🐟', 'Gỏi cá & sán lá gan', 'kien-thuc/goi-ca-san-la-gan.html'], ['🥤', 'Máy xay & vi nhựa', 'kien-thuc/may-xay-vi-nhua.html'], ['🔎', 'Soi cùng Cô Kỹ', 'https://soi.bepcoky.com/']]
  };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var layer = null, lastSpot = null, ignoreScroll = 0;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function di(href) {
    var m = /^#bai-hat:(.+)$/.exec(href);
    if (m && window.phatBaiHat) { window.phatBaiHat(m[1]); return true; }
    var el = href.charAt(0) === '#' && document.getElementById(href.slice(1));
    if (el) {
      if (href.indexOf('#cung-') === 0 && href !== '#cung-co-ky') { location.hash = href; return true; }
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); history.replaceState(null, '', href); return true;
    }
    return false;
  }
  function close(back) {
    if (!layer) return; var l = layer; layer = null; l.classList.remove('open');
    document.removeEventListener('keydown', onKey, true);
    setTimeout(function () { l.remove(); }, reduce ? 0 : 260);
    if (back && lastSpot) lastSpot.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(true); return; }
    if (!layer) return;
    var its = Array.prototype.slice.call(layer.querySelectorAll('.rm-item, .rm-close')), i = its.indexOf(document.activeElement);
    if (e.key === 'Tab') { e.preventDefault(); its[(i + (e.shiftKey ? -1 : 1) + its.length) % its.length].focus(); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); its[(i + 1) % its.length].focus(); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); its[(i - 1 + its.length) % its.length].focus(); }
  }
  function open(spot) {
    close(); lastSpot = spot;
    var id = (spot.getAttribute('data-go') || '').replace('#', ''), ds = NHANH[id] || [];
    var ten = (spot.getAttribute('aria-label') || '').split('–').pop().trim();
    var items = ds.slice(1).map(function (x) { return { ic: x[0], t: x[1], href: x[2] }; });
    items.push(ds[0] ? { ic: ds[0][0], t: 'Vào góc ' + ds[0][1], href: ds[0][2], corner: true } : { ic: '📍', t: 'Vào góc ' + ten, href: '#' + id, corner: true });
    var obj = spot.querySelector('.lift') || spot;
    var r0 = obj.getBoundingClientRect(), c0 = r0.top + r0.height / 2, small = innerWidth < 600, base = small ? 100 : 130, gap = small ? 96 : 118;
    if (c0 > innerHeight - base - 100 || c0 < base + 100) { ignoreScroll = Date.now() + 800; window.scrollTo({ top: scrollY + c0 - innerHeight / 2, behavior: 'instant' }); }
    var r = obj.getBoundingClientRect(), room = spot.closest('svg').getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2, n = items.length;
    var dirA = Math.atan2(room.top + room.height / 2 - cy, room.left + room.width / 2 - cx);
    var free = Math.min(cx, innerWidth - cx, cy, innerHeight - cy);
    var full = n >= 3 && free > Math.max(base, n * gap / (2 * Math.PI)) + 70;
    var span = full ? Math.PI * 2 : Math.PI * (n > 4 ? 1.15 : 1);
    var R = full ? Math.max(base, n * gap / (2 * Math.PI)) : Math.max(base, (n - 1) * gap / span);
    var pos = items.map(function (it, i) {
      var a = full ? dirA - Math.PI / 2 + i * (Math.PI * 2 / n) : dirA - span / 2 + (n === 1 ? span / 2 : i * span / (n - 1));
      return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
    });
    var xs = pos.map(function (p) { return p[0]; }), ys = pos.map(function (p) { return p[1]; });
    var mx = small ? 70 : 80, minX = Math.min.apply(null, xs), maxX = Math.max.apply(null, xs), minY = Math.min.apply(null, ys), maxY = Math.max.apply(null, ys);
    var dx = minX < mx ? mx - minX : maxX > innerWidth - mx ? innerWidth - mx - maxX : 0, dy = minY < 50 ? 50 - minY : maxY > innerHeight - 64 ? innerHeight - 64 - maxY : 0;
    pos = pos.map(function (p) { return [p[0] + dx, p[1] + dy]; });
    layer = document.createElement('div'); layer.className = 'rm'; layer.setAttribute('role', 'dialog'); layer.setAttribute('aria-label', ten + ': chọn nhánh');
    var h = '<div class="rm-dim"></div><button type="button" class="rm-close" style="left:' + cx + 'px;top:' + cy + 'px" aria-label="Đóng">×</button>';
    items.forEach(function (it, i) {
      h += '<a class="rm-item' + (it.corner ? ' corner' : '') + '" href="' + esc(it.href.replace(/^#bai-hat:.*/, '#bai-hat')) + '" data-h="' + esc(it.href) + '"' + (/^https?:/.test(it.href) ? ' target="_blank" rel="noopener"' : '') +
        ' style="--x:' + (pos[i][0] - cx).toFixed(0) + 'px;--y:' + (pos[i][1] - cy).toFixed(0) + 'px;left:' + cx + 'px;top:' + cy + 'px;transition-delay:' + (reduce ? 0 : i * 35) + 'ms">' +
        '<span class="rm-ic" aria-hidden="true">' + it.ic + '</span><span class="rm-t">' + esc(it.t) + '</span></a>';
    });
    layer.innerHTML = h; document.body.appendChild(layer);
    layer.querySelector('.rm-dim').addEventListener('click', function () { close(true); });
    layer.querySelector('.rm-close').addEventListener('click', function () { close(true); });
    layer.querySelectorAll('.rm-item').forEach(function (a) {
      a.addEventListener('click', function (e) { var hr = a.getAttribute('data-h'); close(); if (hr.charAt(0) === '#' && di(hr)) e.preventDefault(); });
    });
    requestAnimationFrame(function () { requestAnimationFrame(function () { if (layer) layer.classList.add('open'); }); });
    document.addEventListener('keydown', onKey, true);
    setTimeout(function () { var f = layer && layer.querySelector('.rm-item'); f && f.focus(); }, reduce ? 0 : 120);
  }
  addEventListener('scroll', function () { if (layer && Date.now() > ignoreScroll) close(); }, { passive: true });
  addEventListener('resize', function () { if (layer) close(); });
  document.querySelectorAll('#kitchen .hot').forEach(function (g) {
    var id = (g.getAttribute('data-go') || '').replace('#', '');
    if (!NHANH[id]) return;
    g.setAttribute('aria-haspopup', 'dialog');
    var on = function (e) { e.preventDefault(); e.stopImmediatePropagation(); open(g); };
    g.addEventListener('click', on, true);
    g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') on(e); }, true);
  });
})();
