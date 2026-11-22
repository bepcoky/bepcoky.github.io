/* Bếp Cô Kỹ – nút thả tim, chia sẻ và đếm lượt xem.
   CÁCH BẬT ĐẾM LƯỢT XEM VÀ SỐ TIM:
   1. Đăng ký miễn phí tại goatcounter.com, chọn một mã (ví dụ: bepcoky).
   2. Trong Settings của GoatCounter, bật "Allow adding visitor counts on your website".
   3. Điền mã vào dòng CODE bên dưới (giữa hai dấu nháy), lưu file và tải lên GitHub.
   Chưa điền mã thì trang vẫn chạy bình thường, chỉ chưa hiện số đếm. */
(function () {
  var CODE = ''; // <-- điền mã GoatCounter vào đây, ví dụ 'bepcoky'
  var page = location.pathname;
  var base = CODE ? 'https://' + CODE + '.goatcounter.com' : '';

  // Đếm lượt xem cho mọi trang
  if (CODE) {
    var s = document.createElement('script');
    s.async = true;
    s.dataset.goatcounter = base + '/count';
    s.src = 'https://gc.zgo.at/count.v5.js';
    document.head.appendChild(s);
  }

  var box = document.getElementById('tuong-tac');
  if (!box) return; // chỉ bài viết mới có thanh này

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  function getCount(path, done) {
    if (!CODE) return done(null);
    fetch(base + '/counter/' + encodeURIComponent(path) + '.json')
      .then(function (r) { return r.ok ? r.json() : { count: '0' }; })
      .then(function (j) { done(j.count); })
      .catch(function () { done(null); });
  }

  // Thả tim (mỗi thiết bị thả một lần)
  var key = 'tim:' + page;
  var liked = false;
  try { liked = localStorage.getItem(key) === '1'; } catch (e) {}
  var heart = el('button', 'tt-nut');
  heart.type = 'button';
  var likeCount = null;
  function drawHeart() {
    heart.textContent = (liked ? '♥ Đã thả tim' : '♡ Thả tim') + (likeCount !== null ? ' · ' + likeCount : '');
    heart.setAttribute('aria-pressed', liked ? 'true' : 'false');
  }
  drawHeart();
  heart.addEventListener('click', function () {
    if (liked) return;
    liked = true;
    try { localStorage.setItem(key, '1'); } catch (e) {}
    if (CODE) {
      new Image().src = base + '/count?p=' + encodeURIComponent('/tim' + page) +
        '&t=' + encodeURIComponent('Thả tim') + '&rnd=' + Math.random().toString(36).slice(2, 7);
      var n = parseInt(String(likeCount || '0').replace(/\D/g, ''), 10) || 0;
      likeCount = String(n + 1);
    }
    drawHeart();
  });
  box.appendChild(heart);

  // Chia sẻ
  if (navigator.share) {
    var sh = el('button', 'tt-nut', 'Chia sẻ');
    sh.type = 'button';
    sh.addEventListener('click', function () {
      navigator.share({ title: document.title, url: location.href }).catch(function () {});
    });
    box.appendChild(sh);
  }
  var fb = el('a', 'tt-nut', 'Chia sẻ Facebook');
  fb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href);
  fb.target = '_blank';
  fb.rel = 'noopener';
  box.appendChild(fb);

  var cp = el('button', 'tt-nut', 'Sao chép link');
  cp.type = 'button';
  cp.addEventListener('click', function () {
    function ok() { cp.textContent = 'Đã sao chép'; setTimeout(function () { cp.textContent = 'Sao chép link'; }, 2000); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(location.href).then(ok, function () { window.prompt('Sao chép link này:', location.href); });
    } else {
      window.prompt('Sao chép link này:', location.href);
    }
  });
  box.appendChild(cp);

  // Số lượt xem và số tim
  if (CODE) {
    var views = el('span', 'tt-xem');
    box.appendChild(views);
    getCount(page, function (c) { if (c !== null) views.textContent = c + ' lượt xem'; });
    getCount('/tim' + page, function (c) { if (c !== null) { likeCount = c; drawHeart(); } });
  }
})();
