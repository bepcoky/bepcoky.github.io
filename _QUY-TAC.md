# Quy tắc của trang Bếp Cô Kỹ

Tệp này bắt đầu bằng dấu gạch dưới nên không hiện ra trên trang web, chỉ nằm trong kho GitHub để Cô Kỹ và người giúp việc (kể cả Claude) làm cho thống nhất. Bản hướng dẫn chi tiết nằm trong sổ tay "Bếp Cô Kỹ: Sổ tay vận hành".

## Chủ đề và giọng văn
- Chủ đề: "Người vợ, người mẹ đảm đang, sống khoẻ và đẹp từ chính căn bếp nhà mình".
- Ba điều giữ: thử thật, nấu thật, chia sẻ thật. Chỉ viết điều đã làm, đã dùng, đã trải qua.
- Bếp là trục chính. Du lịch, sức khoẻ, làm đẹp là nhánh phụ và nên nối về bếp (ăn gì ở chuyến đi, ăn gì cho da đẹp).
- Giọng văn: Cô Kỹ xưng "mình", gần gũi, câu ngắn, từ ngữ đời thường. Không hứa chữa bệnh, không dùng từ "trị", "đảm bảo".
- Tiếng Việt có dấu đầy đủ.

## Bản đồ thư mục
- `/` trang chủ · `/vao-bep/` (công thức: `cong-thuc/`, `meo-nau/`, `thuc-don-tuan/`) · `/di-dau-an-gi/` · `/khoe-moi-ngay/` · `/dep-tu-nhien/` · `/do-co-ky-dung/` · `/ve-co-ky/` · `/dang-ky/` · `/anh/` (ảnh) · `/tat-ca-bai-viet.html` (mục lục).
- Mỗi bài là một file `.html` riêng, tên không dấu, viết thường, nối bằng gạch ngang, ví dụ `ca-kho-to.html`.
- Link nội bộ luôn bắt đầu bằng dấu `/` (ví dụ `/vao-bep/cong-thuc/nem.html`).

## Mỗi bài viết phải có
1. Tiêu đề, ngày đăng, ảnh (tự chụp, tên không dấu, đặt trong `/anh/`, có chữ mô tả `alt`).
2. Bài công thức: Nguyên liệu, Cách làm, Câu chuyện của món này, Mẹo của Cô Kỹ, Nguồn tham khảo.
3. Dòng đường dẫn các cấp ở đầu bài (Trang chủ › Chuyên mục).
4. Thanh tương tác `<div id="tuong-tac" class="tuong-tac"></div>` ở cuối bài.
5. Bài sức khoẻ hoặc làm đẹp: nói theo kinh nghiệm cá nhân, không khẳng định y khoa, ghi nguồn khi dùng kiến thức người khác.
6. Bài có link mua hàng: ghi rõ link tiếp thị liên kết (nếu có), dùng `rel="sponsored noopener"`.

## Mỗi lần thêm bài mới phải làm đủ 3 việc
1. Tạo file bài trong đúng thư mục (sao chép từ `mau-bai-viet.html`).
2. Thêm một dòng vào đầu mục "Bài viết mới" ở `index.html`, bỏ bớt dòng cũ nhất ở đó khi danh sách quá 6 dòng.
3. Thêm một dòng vào mục chuyên mục tương ứng và vào `tat-ca-bai-viet.html` (đúng năm). Không xoá bài cũ.

## Không làm
- Không xoá bài cũ, chỉ sửa hoặc bổ sung.
- Không chép nguyên văn hay lấy ảnh của người khác.
- Không đăng số tài khoản ngân hàng, giấy tờ tùy thân, địa chỉ nhà.
- Không nhận thanh toán hay đặt hàng trực tiếp trên trang.
- Không hứa hẹn chữa bệnh.

## Việc định kỳ
- Mỗi tuần: kiểm tra bài mới đã lên trang và link hoạt động.
- Mỗi tháng: tải bản sao lưu (Code › Download ZIP), xem lượt xem trong GoatCounter.
- Mỗi năm: thêm khối "Năm mới" trong `tat-ca-bai-viet.html`, xem lại trang Về Cô Kỹ và thông tin liên hệ.
