/* =====================================================================
   TIN MỚI + LOA THÔNG BÁO (26/11/2026)
   - Bảng "Tin mới" trên tường căn bếp: bấm vào → 5 bài mới nhất tỏa ra (dùng menu-do-vat.js).
     Chấm đỏ đếm số bài mới mà máy này chưa xem (bài trong 14 ngày gần nhất).
   - Loa: bài nào trong bai-viet.js có trường  loa:"lời kêu gọi"  (và tùy chọn  loaDen:"YYYY-MM-DD",
     mặc định 3 ngày sau ngày đăng) thì trong thời hạn đó trang chủ hiện cái loa:
       · loa rung + sóng âm cạnh bảng Tin mới,
       · nút tròn "📣 Đang nhận đơn" nổi góc dưới bên trái, bấm ra lời nhắn + nút Đọc bài / Đặt món,
       · ô "📣 Đang nhận đơn" đầu dãy chip dưới căn bếp.
     Bếp đang nghỉ (trang quan-ly) thì loa tự ẩn.
   Cần: index.html đặt window.CK_BAI (danh sách bài đã xếp mới → cũ, có key) và window.moBai(key).
   ===================================================================== */
(function () {
  'use strict';
  var L = window.CK_BAI || [];
  if (!L.length) return;
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var now = new Date(), homNay = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  function cong(d, n) { var t = new Date(d + 'T12:00:00'); t.setDate(t.getDate() + n); return t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate()); }
  function ngan(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).trim() + '…' : s; }
  function ddmm(d) { return d ? d.slice(8, 10) + '/' + d.slice(5, 7) : ''; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---- Tin mới: nhánh cho menu tỏa ---- */
  var moi = L.slice(0, 5);
  window.TIN_MOI_NHANH = function () {
    var ds = [['📒', 'Nhật ký bếp', '#nhat-ky']];
    moi.forEach(function (p) { ds.push([p.loa ? '📣' : '🆕', ngan(p.t, 26) + (p.d ? ' · ' + ddmm(p.d) : ''), '#bai=' + p.key, p.img[0] ? 'img/' + p.img[0] : '']); });
    return ds;
  };
  // số bài chưa xem: mới hơn bài đã xem lần trước, trong 14 ngày
  var daXem = store('ckTinXem') || '', han = cong(homNay, -14), chuaXem = 0;
  for (var i = 0; i < L.length && i < 9; i++) { var p = L[i]; if (!p.d || p.d < han || p.key === daXem) break; chuaXem++; }
  var bang = document.getElementById('tinMoiBang'), dem = document.getElementById('tinMoiDem'), chip = document.getElementById('tin-moi');
  function capNhatDem() {
    if (dem) { dem.style.display = chuaXem ? '' : 'none'; var t = dem.querySelector('text'); if (t) t.textContent = chuaXem; }
    if (bang) bang.classList.toggle('co-tin', chuaXem > 0);
    if (chip) chip.innerHTML = '🔔 Tin mới' + (chuaXem ? ' <b>' + chuaXem + '</b>' : '');
  }
  capNhatDem();
  var sub = document.getElementById('tinMoiSub');
  if (sub && L[0].d) sub.textContent = 'Bài mới ' + ddmm(L[0].d);
  window.daXemTinMoi = function () { store('ckTinXem', L[0].key); chuaXem = 0; capNhatDem(); };
  if (chip) chip.addEventListener('click', function (e) {
    e.preventDefault(); var g = document.querySelector('#kitchen [data-go="#tin-moi"]');
    if (g) { g.scrollIntoView({ block: 'center' }); setTimeout(function () { g.dispatchEvent(new MouseEvent('click', { bubbles: true })); }, 450); }
  });

  /* ---- Loa ---- */
  var loa = null;
  for (var j = 0; j < L.length; j++) {
    var q = L[j]; if (!q.loa || !q.d) continue;
    var den = /^\d{4}-\d{2}-\d{2}$/.test(q.loaDen || '') ? q.loaDen : cong(q.d, 3);
    if (q.d <= homNay && homNay <= den) { loa = q; break; }
  }
  if (!loa) return;
  document.body.classList.add('co-loa');
  var loaSvg = document.getElementById('loaBep'); if (loaSvg) loaSvg.style.display = '';
  var daNghe = store('ckLoaXem') === loa.key;
  var nut = document.createElement('div');
  nut.className = 'loa-noi' + (daNghe ? '' : ' moi');
  nut.innerHTML = '<button type="button" class="loa-nut" aria-expanded="false" aria-controls="loaThe"><span class="loa-ic" aria-hidden="true">📣</span><span class="loa-chu">Đang nhận đơn</span></button>' +
    '<div class="loa-the" id="loaThe" role="dialog" aria-label="Cô Kỹ thông báo" hidden>' +
    '<button type="button" class="loa-x" aria-label="Đóng">×</button>' +
    '<p class="loa-dau">📣 Cô Kỹ thông báo</p><p class="loa-loi">' + esc(loa.loa) + '</p>' +
    '<button type="button" class="loa-bai">' + (loa.img[0] ? '<img src="img/' + esc(loa.img[0]) + '" alt="">' : '') + '<span>' + esc(ngan(loa.t, 60)) + '<small>' + ddmm(loa.d) + ' · bấm để đọc bài</small></span></button>' +
    '<a class="btn loa-dat" href="#dat-hang">🛒 Đặt món ngay</a></div>';
  document.body.appendChild(nut);
  var nutB = nut.querySelector('.loa-nut'), the = nut.querySelector('.loa-the');
  function mo(o) {
    the.hidden = !o; nutB.setAttribute('aria-expanded', o);
    if (o) { nut.classList.remove('moi'); store('ckLoaXem', loa.key); }
  }
  nutB.addEventListener('click', function () { mo(the.hidden); });
  nut.querySelector('.loa-x').addEventListener('click', function () { mo(false); nutB.focus(); });
  nut.querySelector('.loa-bai').addEventListener('click', function () { mo(false); window.moBai && window.moBai(loa.key); });
  nut.querySelector('.loa-dat').addEventListener('click', function () { mo(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !the.hidden) mo(false); });
  if (loaSvg) {
    loaSvg.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); mo(true); });
    loaSvg.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); mo(true); } });
  }
  var chips = document.querySelector('.scene .chips');
  if (chips) { var c = document.createElement('a'); c.href = '#dat-hang'; c.className = 'chip-loa'; c.textContent = '📣 Đang nhận đơn'; c.addEventListener('click', function (e) { e.preventDefault(); mo(true); }); chips.insertBefore(c, chips.firstChild); }
})();
