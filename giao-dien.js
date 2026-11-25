/* =====================================================================
   GIAO DIỆN MƯỢT – Bếp Cô Kỹ
   1. Ảnh hiện dần: trong lúc tải, khung ảnh hiện sẵn màu chủ đạo của chính ảnh đó
      (bảng MAU bên dưới, dựng bằng _cong-cu/mau_anh.py), tải xong ảnh mờ dần hiện ra.
   2. Bấm ảnh để xem to (ảnh trong các mục Về em, Nội ngoại, Nhà & vườn, Sống khỏe, Đi đây đó),
      vuốt hoặc bấm mũi tên để xem ảnh kế, Esc để đóng.
   3. Bộ ảnh trong bài Nhật ký: thêm mũi tên trái/phải và chấm đếm ảnh.
   4. Thanh menu dài: mép phải mờ dần khi còn mục bị khuất.
   Tắt hết hiệu ứng chuyển động nếu máy đặt "giảm chuyển động".
   ===================================================================== */
(function () {
  var MAU = {"bua-toi-muon.jpg":"6f524876716d","cha-nem.jpg":"7c674f8a7356","di-choi-vom-cay.jpg":"687d5792997e","gia-vi-pho.jpg":"7a7f61846c66","hanh-phi-1.jpg":"786635bb824e","hanh-phi-2.jpg":"c8ab8da76b3f","kien-thuc/chao-loi-giua.jpg":"5849405f4c42","kien-thuc/may-xay-de-con-moi.jpg":"8d89976a71a1","kien-thuc/may-xay-de-mon.jpg":"56534f605751","kien-thuc/oc-buou-nhoi.jpg":"8a836a81805a","kien-thuc/pheu-loc-chop-non.jpg":"dcdcdbf3eee9","kien-thuc/ranh-tren-luoi-dao.jpg":"726c6348443b","kien-thuc/tap-de-lich-su.jpg":"706f6d666563","kien-thuc/tap-de.jpg":"a1a0a379787b","nau-dau-pho.jpg":"88816d5a4e31","pate-1.jpg":"80824b917d52","pate-2.jpg":"72634e9e8a72","pizza-1.jpg":"7e684a846e54","pizza-2.jpg":"a8856a927865","sap-tet.jpg":"78937d67793d","song-chung-voi-thuoc.jpg":"a5b3ac4d4442","thit-chung-1.jpg":"6f7d51af8868","thit-chung-10-nam-sau.jpg":"738b43968b4e","thit-chung-2.jpg":"706b3a978476","thit-chung-3.jpg":"4e5740afacab","thuong-hai-dem.jpg":"4d4b599a7863","thuong-hai-ngay.jpg":"aeaeac868579","tinh-dau-pho.jpg":"90ac3f938e3e","tom-boc-non.jpg":"ad9270b08a68","trung-nuong.jpg":"84827b686560","trung-ran-la.jpg":"9d9e787a6f4d","ve-que-1.jpg":"5c644085896a","ve-que-2.jpg":"65664e898069","ve-que-3.jpg":"6d7166aa9485","vuon-nha.jpg":"95937c81827d","xoi-10-nam-truoc.jpg":"8b7b667b7264","xoi-vo.jpg":"d1b210e5bf09"};
  var doc = document, root = doc.documentElement;
  root.classList.add('js-anh');

  /* ---------- kiểu dáng (tự chèn, dùng chung cho mọi trang) ---------- */
  var st = doc.createElement('style');
  st.textContent = [
    '.js-anh img.anh{background-size:cover;transition:opacity .5s ease,filter .5s ease,transform .6s ease}',
    '.js-anh img.anh:not(.ok){opacity:.01;filter:blur(6px);transform:scale(1.015)}',
    ':is(.prod,.post,.kc,.card,.gear figure,.tiles figure,.rv){overflow:hidden}',
    ':is(.prod,.post,.kc,.card,.gear figure.has) img.ok{transition:transform .6s cubic-bezier(.2,.7,.3,1),opacity .55s,filter .7s}',
    '@media(hover:hover){:is(.prod,.post,.kc,.card,.gear figure.has):hover img.ok{transform:scale(1.045)}}',
    'img.bam-xem{cursor:zoom-in}',
    'img.bam-xem:focus-visible{outline:3px solid #c62a1e;outline-offset:3px}',
    '.xem{position:fixed;inset:0;z-index:9999;background:rgba(18,9,5,.92);display:grid;place-items:center;animation:xem-in .25s ease}',
    '.xem[hidden]{display:none}',
    '.xem figure{margin:0;max-width:min(94vw,1100px);display:flex;flex-direction:column;align-items:center;gap:10px}',
    '.xem img{max-width:100%;max-height:82vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5);opacity:0;transform:scale(.97);transition:opacity .3s,transform .35s}',
    '.xem img.ok{opacity:1;transform:none}',
    '.xem figcaption{color:#f6e9dc;font:500 15px/1.4 "Be Vietnam Pro",system-ui,sans-serif;text-align:center;padding:0 50px}',
    '.xem button{position:absolute;width:48px;height:48px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;font:400 30px/1 system-ui,sans-serif;cursor:pointer;display:grid;place-items:center;transition:background .2s}',
    '.xem button:hover,.xem button:focus-visible{background:rgba(255,255,255,.3)}',
    '.xem-x{top:14px;right:14px}.xem-t{left:12px;top:50%;margin-top:-24px}.xem-s{right:12px;top:50%;margin-top:-24px}',
    '.xem.mot .xem-t,.xem.mot .xem-s{display:none}',
    '@media(max-width:600px){.xem-t,.xem-s{top:auto;bottom:22px;margin:0}.xem-t{left:calc(50% - 64px)}.xem-s{right:calc(50% - 64px)}.xem img{max-height:72vh}}',
    '.xem-d{position:absolute;top:22px;left:0;right:0;text-align:center;margin:0;color:#f6e9dc;font:500 14px "Be Vietnam Pro",sans-serif;pointer-events:none}',
    'html.xem-mo{overflow:hidden}',
    '@keyframes xem-in{from{opacity:0}to{opacity:1}}',
    '.gnav{display:flex;align-items:center;justify-content:center;gap:12px;padding:10px 0 0}',
    '.gnav[hidden]{display:none}',
    '.gnav button{width:40px;height:40px;border-radius:50%;border:0;background:var(--paper,#fff3e1);color:inherit;font:400 24px/1 system-ui,sans-serif;cursor:pointer}',
    '.g-c{display:flex;gap:6px}.g-c i{width:8px;height:8px;border-radius:50%;background:currentColor;opacity:.25;transition:opacity .2s,transform .2s}.g-c i.on{opacity:.9;transform:scale(1.25)}',
    'dialog .gal{scroll-behavior:smooth}',
    '@media(prefers-reduced-motion:reduce){.js-anh img.anh,.xem,.xem img,:is(.prod,.post,.kc,.card) img.ok{transition:none!important;animation:none!important;transform:none!important;filter:none!important}}'
  ].join('');
  doc.head.appendChild(st);

  /* ---------- 1. ảnh hiện dần ---------- */
  function ten(img) {
    var s = img.getAttribute('src') || '';
    var i = s.indexOf('img/'); return i < 0 ? '' : s.slice(i + 4).split('?')[0];
  }
  function chuan(img) {
    if (img.dataset.anh) return; img.dataset.anh = '1';
    if (img.closest('.qr, .nh, svg, .appcard')) return;
    img.decoding = 'async';
    var m = MAU[ten(img)];
    if (m) img.style.backgroundImage = 'linear-gradient(#' + m.slice(0, 6) + ',#' + m.slice(6) + ')';
    if (img.complete && img.naturalWidth) { img.classList.add('anh', 'ok'); return; }
    img.classList.add('anh');
    var xong = function () { img.classList.add('ok'); };
    img.addEventListener('load', xong, { once: true });
    img.addEventListener('error', xong, { once: true });
  }
  function quet(n) { (n.tagName === 'IMG' ? [n] : n.querySelectorAll ? n.querySelectorAll('img') : []).forEach(chuan); }
  quet(doc);
  var hen = 0;
  new MutationObserver(function (ds) { ds.forEach(function (d) { d.addedNodes.forEach(function (n) { if (n.nodeType === 1) quet(n); }); }); clearTimeout(hen); hen = setTimeout(function () { window.__danhDau && window.__danhDau(); }, 120); })
    .observe(doc.body, { childList: true, subtree: true });

  /* ---------- 2. xem ảnh to ---------- */
  var VUNG = '.about .photos, .gpics, .strip, .health, .rail, .pol, .tiles, main figure';
  var hop = doc.createElement('div');
  hop.className = 'xem'; hop.hidden = true; hop.setAttribute('role', 'dialog'); hop.setAttribute('aria-modal', 'true'); hop.setAttribute('aria-label', 'Xem ảnh');
  hop.innerHTML = '<button class="xem-x" type="button" aria-label="Đóng">×</button><button class="xem-t" type="button" aria-label="Ảnh trước">‹</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure><button class="xem-s" type="button" aria-label="Ảnh sau">›</button><p class="xem-d"></p>';
  doc.body.appendChild(hop);
  var hImg = hop.querySelector('img'), hCap = hop.querySelector('figcaption'), hDem = hop.querySelector('.xem-d');
  var bo = [], vt = 0, truoc = null;
  function hien(i) {
    vt = (i + bo.length) % bo.length; var a = bo[vt];
    hImg.classList.remove('ok'); hImg.src = a.currentSrc || a.src; hImg.alt = a.alt;
    hCap.textContent = a.alt || ''; hDem.textContent = bo.length > 1 ? (vt + 1) + ' / ' + bo.length : '';
    hop.classList.toggle('mot', bo.length < 2);
  }
  hImg.addEventListener('load', function () { hImg.classList.add('ok'); });
  function mo(img) {
    var vung = img.closest(VUNG); var sec = img.closest('section') || doc.body;
    bo = [].slice.call((vung && vung.closest('section') || sec).querySelectorAll('img')).filter(laXemDuoc);
    truoc = doc.activeElement; hop.hidden = false; root.classList.add('xem-mo');
    hien(Math.max(0, bo.indexOf(img))); hop.querySelector('.xem-x').focus();
  }
  function dong() { hop.hidden = true; root.classList.remove('xem-mo'); if (truoc && truoc.focus) truoc.focus(); }
  function laXemDuoc(img) {
    return img.closest(VUNG) && !img.parentElement.closest('a, button, [role=button], dialog, .xem, .cmp, .qr, .card') && !(img.complete && img.naturalWidth === 0);
  }
  doc.addEventListener('click', function (e) {
    var img = e.target.closest && e.target.closest('img');
    if (img && laXemDuoc(img)) { e.preventDefault(); mo(img); }
  });
  doc.addEventListener('keydown', function (e) {
    if (hop.hidden) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName === 'IMG' && laXemDuoc(e.target)) { e.preventDefault(); mo(e.target); }
      return;
    }
    if (e.key === 'Escape') dong(); else if (e.key === 'ArrowLeft') hien(vt - 1); else if (e.key === 'ArrowRight') hien(vt + 1);
  });
  hop.querySelector('.xem-x').onclick = dong;
  hop.querySelector('.xem-t').onclick = function () { hien(vt - 1); };
  hop.querySelector('.xem-s').onclick = function () { hien(vt + 1); };
  hop.addEventListener('click', function (e) { if (e.target === hop || e.target.tagName === 'FIGURE') dong(); });
  var x0 = null;
  hop.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  hop.addEventListener('touchend', function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) hien(vt + (dx < 0 ? 1 : -1));
  });
  // đánh dấu ảnh bấm được để có con trỏ và đọc được bằng bàn phím
  function danhDau() {
    doc.querySelectorAll(VUNG).forEach(function (v) {
      v.querySelectorAll('img').forEach(function (img) {
        if (img.parentElement.closest('a, button, [role=button], dialog, .cmp, .qr, .card') || img.dataset.xem) return;
        img.dataset.xem = '1'; img.tabIndex = 0; img.classList.add('bam-xem'); img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Xem ảnh to: ' + (img.alt || ''));
      });
    });
  }
  window.__danhDau = danhDau; danhDau();

  /* ---------- 3. bộ ảnh trong hộp bài viết ---------- */
  var gal = doc.getElementById('dlgG');
  if (gal) {
    var khung = gal.parentNode, nav = doc.createElement('div');
    nav.className = 'gnav';
    nav.innerHTML = '<button type="button" class="g-t" aria-label="Ảnh trước">‹</button><span class="g-c"></span><button type="button" class="g-s" aria-label="Ảnh sau">›</button>';
    khung.insertBefore(nav, gal.nextSibling);
    var cham = nav.querySelector('.g-c');
    var so = function () { return gal.querySelectorAll('img').length; };
    var dang = function () { return Math.round(gal.scrollLeft / Math.max(1, gal.clientWidth)); };
    var veNav = function () {
      var n = so(); nav.hidden = n < 2; if (n < 2) return;
      var k = dang(); var s = '';
      for (var i = 0; i < n; i++) s += '<i' + (i === k ? ' class="on"' : '') + '></i>';
      cham.innerHTML = s;
    };
    var toi = function (d) { gal.scrollTo({ left: (dang() + d) * gal.clientWidth, behavior: 'smooth' }); };
    nav.querySelector('.g-t').onclick = function () { toi(-1); };
    nav.querySelector('.g-s').onclick = function () { toi(1); };
    gal.addEventListener('scroll', function () { clearTimeout(gal._t); gal._t = setTimeout(veNav, 80); }, { passive: true });
    new MutationObserver(function () { gal.scrollLeft = 0; veNav(); }).observe(gal, { childList: true });
    veNav();
  }

  /* ---------- 4. menu dài mờ mép ---------- */
  var mn = doc.querySelector('.menu');
  if (mn) {
    var kt = function () {
      mn.classList.toggle('tran', mn.scrollWidth > mn.clientWidth + 2);
      mn.classList.toggle('cuoi', mn.scrollLeft + mn.clientWidth >= mn.scrollWidth - 4);
    };
    mn.addEventListener('scroll', kt, { passive: true }); addEventListener('resize', kt); kt();
  }
})();
