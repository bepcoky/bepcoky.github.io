/* =====================================================================
   LIÊN KẾT MUA HÀNG (Shopee tiếp thị liên kết) – Bếp Cô Kỹ
   ---------------------------------------------------------------------
   Sửa link ở ĐÂY là mọi bài kiến thức dùng link đó tự đổi theo.
   - Đổi link:    sửa phần url:'...'
   - Bỏ link:     để url:''  → nút tự ẩn, bài viết vẫn hiện bình thường.
   - Nút tìm kiếm: thêm tim:true (url là trang tìm kiếm Shopee, không phải link tiếp thị).
   - Thêm link:   thêm một dòng mới, rồi ghi tên khóa vào dòng "link:" của bài
                  (tệp kien-thuc/_nguon/<bài>.md), cách nhau bằng dấu phẩy.
   Không cần dựng lại trang khi chỉ đổi link.
   ===================================================================== */
window.LIEN_KET = {
  'sa-tuoi':    { ten: 'Sả tươi',                         url: 'https://s.shopee.vn/8pnMgVe1u8' },
  'chao':       { ten: 'Chảo loại các chef hay dùng',      url: 'https://s.shopee.vn/1qdmVo4zhl' },
  'rua-chen-1': { ten: 'Dụng cụ rửa chén (gợi ý 1)',       url: 'https://s.shopee.vn/2BGYnXpACs' },
  'rua-cong':   { ten: 'Cọ rửa lỗ thoát nước bồn rửa',     url: 'https://s.shopee.vn/8fU2XVZIMs' },
  'rua-chen-2': { ten: 'Dụng cụ rửa chén (gợi ý 2)',       url: 'https://s.shopee.vn/906sw83iaf' },
  'pheu-chop-non': { ten: '🔍 Tìm đúng phễu chóp nón (chinois)', tim: true,
                  url: 'https://shopee.vn/search?keyword=ph%E1%BB%85u%20l%E1%BB%8Dc%20ch%C3%B3p%20n%C3%B3n%20inox' },
  'pheu-loc':   { ten: 'Phễu lọc inox loại thường (xài tạm)', url: 'https://s.shopee.vn/6L6EgwLebo' },
  'tap-de':     { ten: 'Tạp dề vải bạt dây chéo lưng',     url: '' }
};

/* Vẽ khung "Mua ở đâu" vào mọi chỗ có <div class="mua" data-links="khoa1,khoa2"> */
(function () {
  function ve() {
    document.querySelectorAll('.mua[data-links]').forEach(function (box) {
      var ds = box.dataset.links.split(',').map(function (k) { return k.trim(); })
        .map(function (k) { return window.LIEN_KET[k]; })
        .filter(function (x) { return x && x.url; });
      if (!ds.length) { box.hidden = true; return; }
      box.innerHTML = '<p class="mua-t">🛒 Chị em tham khảo ở Shopee</p><div class="mua-l">' +
        ds.map(function (x) {
          return '<a class="btn" href="' + x.url + '" target="_blank" rel="noopener sponsored">' + x.ten + '</a>';
        }).join('') +
        '</div><p class="mua-n">Link tiếp thị liên kết: chị em mua qua đây giá không đổi, em được sàn trả chút hoa hồng để nuôi trang. Giá và hàng có thể thay đổi theo người bán.' +
        (ds.some(function (x) { return x.tim; }) ? ' Nút có kính lúp 🔍 là trang tìm kiếm của Shopee để chị em tự chọn đúng loại.' : '') + '</p>';
      box.hidden = false;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ve); else ve();
})();
