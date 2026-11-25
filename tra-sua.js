/* =====================================================================
   MỜI CÔ KỸ LY TRÀ SỮA – bấm logo app ngân hàng là app tự mở
   ---------------------------------------------------------------------
   Dùng link mở app của VietQR (dl.vietqr.io/pay): với nhiều app, số tài khoản,
   số tiền và lời nhắn được điền sẵn; app nào chưa hỗ trợ thì chỉ mở app lên,
   trang đã chép sẵn số tài khoản để khách dán vào.
   Đổi tài khoản nhận: sửa TK bên dưới (ma = mã ngân hàng viết thường theo VietQR).
   Danh sách app: lấy trực tiếp từ api.vietqr.io theo Android/iPhone;
   không lấy được thì dùng danh sách DU_PHONG.
   ===================================================================== */
(function () {
  var TK = { so: '342668311', ma: 'vib', ten: 'TRAN THI KY' };
  var VE = 'https://bepcoky.com/#moi-tra-sua';
  var DU_PHONG = [
    ['vcb', 'Vietcombank', 'VCB'], ['mb', 'MB Bank', 'MB'], ['tcb', 'Techcombank', 'TCB'],
    ['bidv', 'BIDV', 'BIDV'], ['icb', 'VietinBank', 'ICB'], ['vba', 'Agribank', 'VBA'],
    ['acb', 'ACB', 'ACB'], ['tpb', 'TPBank', 'TPB'], ['vpb', 'VPBank', 'VPB'],
    ['stb', 'Sacombank', 'STB'], ['ocb', 'OCB', 'OCB'], ['msb', 'MSB', 'MSB'],
    ['hdb', 'HDBank', 'HDB'], ['shb', 'SHB', 'SHB']
  ].map(function (a) { return { id: a[0], ten: a[1], ma: a[2], logo: 'https://api.vietqr.io/img/' + a[2] + '.png' }; });
  var HIEN = 11; // số app hiện sẵn, còn lại nằm sau nút "Xem thêm"

  var $ = function (s) { return document.querySelector(s); };
  var sec = $('#moi-tra-sua'); if (!sec) return;
  var luoi = $('#teaBanks'), bao = $('#teaOk'), cupV = 35000, apps = DU_PHONG;
  var laMayTinh = window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches && !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  var laIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var nho = ''; try { nho = localStorage.getItem('bep-app-nh') || ''; } catch (e) {}

  function loiNhan() { return ('Tra sua Co Ky ' + cupV / 1000 + 'k').slice(0, 25); }
  function link(id) {
    return 'https://dl.vietqr.io/pay?app=' + encodeURIComponent(id) + '&ba=' + TK.so + '@' + TK.ma +
      '&am=' + cupV + '&tn=' + encodeURIComponent(loiNhan()) + '&bn=' + encodeURIComponent(TK.ten) +
      '&url=' + encodeURIComponent(VE);
  }
  function tien(v) { return v.toLocaleString('vi-VN') + 'đ'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function ve() {
    var ds = apps.slice();
    if (nho) ds.sort(function (a, b) { return (b.id === nho) - (a.id === nho); });
    luoi.innerHTML = ds.map(function (a, i) {
      return '<a class="nh' + (i >= HIEN ? ' them' : '') + (a.id === nho ? ' nho' : '') + '" data-id="' + esc(a.id) + '" data-ten="' + esc(a.ten) +
        '" href="' + link(a.id) + '" rel="nofollow noopener"><span class="nh-l"><img src="' + esc(a.logo) +
        '" alt="" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement(\'b\'),{textContent:\'' +
        esc(a.ma || a.id).toUpperCase().slice(0, 4).replace(/'/g, '') + '\'}))"></span><span class="nh-t">' + esc(a.ten) + '</span>' +
        (a.id === nho ? '<i>lần trước</i>' : '') + '</a>';
    }).join('') + (ds.length > HIEN ? '<button type="button" class="nh nh-them" id="teaThem"><span class="nh-l"><b>+' + (ds.length - HIEN) + '</b></span><span class="nh-t">App khác</span></button>' : '');
    var th = $('#teaThem');
    if (th) th.addEventListener('click', function () { luoi.classList.add('mo'); th.remove(); });
  }
  function capNhatLink() {
    luoi.querySelectorAll('a.nh').forEach(function (a) { a.href = link(a.dataset.id); });
    var t = $('#teaTien'); if (t) t.textContent = tien(cupV);
    var n = $('#teaMsg'); if (n) n.textContent = loiNhan();
  }

  luoi.addEventListener('click', function (e) {
    var a = e.target.closest('a.nh'); if (!a) return;
    try { localStorage.setItem('bep-app-nh', a.dataset.id); } catch (er) {}
    try { navigator.clipboard && navigator.clipboard.writeText(TK.so); } catch (er) {}
    bao.hidden = false;
    bao.innerHTML = 'Đang mở <b>' + esc(a.dataset.ten) + '</b>… Em đã chép sẵn số tài khoản <b>' + TK.so +
      '</b> (VIB). App nào chưa tự điền thì chị em dán số vào, chọn ngân hàng <b>VIB</b>, nhập <b>' + tien(cupV) +
      '</b> là xong. Cảm ơn ạ 🥰🥰🥰';
  });

  sec.querySelectorAll('.opts button').forEach(function (b) {
    b.addEventListener('click', function () {
      sec.querySelectorAll('.opts button').forEach(function (o) { o.setAttribute('aria-checked', o === b); });
      cupV = +b.dataset.v;
      var f = $('#teaFill');
      if (f) f.setAttribute('d', cupV === 25000 ? 'M48 140 h104 l-9 98 q-1 8 -10 8 h-66 q-9 0 -10 -8z' : cupV === 35000 ? 'M46 110 h108 l-11 128 q-1 8 -10 8 h-66 q-9 0 -10 -8z' : 'M44 84 h112 l-13 154 q-1 8 -10 8 h-66 q-9 0 -10 -8z');
      capNhatLink();
    });
  });

  function chep(btn, chu, xong) {
    btn.addEventListener('click', function () {
      var ok = function () { var c = btn.textContent; btn.textContent = xong; setTimeout(function () { btn.textContent = c; }, 2200); };
      if (navigator.clipboard) navigator.clipboard.writeText(chu()).then(ok, function () { btn.textContent = chu(); });
      else btn.textContent = chu();
    });
  }
  chep($('#accCopy'), function () { return TK.so; }, 'Đã chép ✓');
  chep($('#teaCopy'), loiNhan, 'Đã chép ✓');

  if (laMayTinh) { sec.classList.add('pc'); var d = $('#teaMore'); if (d) d.open = true; }
  ve(); capNhatLink();

  /* Lấy danh sách app mới nhất theo hệ điều hành (sắp theo lượt cài) */
  if (!laMayTinh && window.fetch) {
    fetch('https://api.vietqr.io/v2/' + (laIOS ? 'ios' : 'android') + '-app-deeplinks')
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var ds = j && (j.apps || j.data);
        if (!ds || !ds.length) return;
        ds = ds.filter(function (a) { return a.appId && a.appName; })
          .sort(function (a, b) { return (b.autofill || 0) - (a.autofill || 0) || (b.monthlyInstall || 0) - (a.monthlyInstall || 0); });
        apps = ds.map(function (a) { return { id: a.appId, ten: a.appName, logo: a.appLogo }; });
        ve(); capNhatLink();
      }).catch(function () {});
  }
})();
