# Quy tắc của trang Bếp Cô Kỹ

Tệp này bắt đầu bằng dấu gạch dưới nên không hiện trên trang, chỉ nằm trong kho để Cô Kỹ và người giúp việc (kể cả Claude) làm cho thống nhất. Bản kinh nghiệm kỹ thuật chi tiết nằm trong Project "BepCoKy Web": `claude/ban-giao-nen-tang-chung-bepcoky.md`.

## Tên và chữ
- Viết đúng: **Kỹ** (dấu ngã), **Cô Kỹ**, **Bếp Cô Kỹ**. Không viết "Kỳ", "Ky".
- Bỏ dấu kiểu mới: dấu đặt ở chữ o, u trong các vần oa, oe, uy (ví dụ khỏe, hòa, tùy, thủy). Chép chữ từ Facebook/Word xong thì chạy công cụ chuẩn hóa dấu.

## Chủ đề và giọng văn
- Người vợ, người mẹ ở nhà chăm gia đình, hai bên nội ngoại; mê nấu, bán món nhà làm; chăm sức khỏe, nhà cửa, cây cối; thích đi đây đó.
- Giọng văn lấy từ bài Facebook thật của Cô Kỹ: xưng **"em"**, gọi người đọc "các bác, các mom, chị em"; chồng là "ông chủ". Kể chuyện có thoại, hài tự trào, câu ngắn, emoji vừa phải.
- Ba điều giữ: thử thật, nấu thật, chia sẻ thật. Chỉ viết điều đã làm, đã dùng, đã trải qua.
- Không hứa chữa bệnh, không dùng "trị dứt", "đảm bảo 100%".

## Bài viết
- Nhật ký bếp lấy từ `bai-viet.js`. Bài cũ từ Facebook ghi **đúng ngày đăng gốc** (trường `ngay`), không bịa ngày, không bịa bài.
- Bài sức khỏe, làm đẹp, kiểm chứng: nói theo trải nghiệm cá nhân hoặc khuyến cáo chính thống, ghi nguồn khi dùng kiến thức người khác.
- Bài có link mua hàng: ghi rõ là link tiếp thị Shopee, dùng `rel="sponsored noopener"` (trang tự gắn khi điền vào `gioi-thieu.js`).
- Gửi bản nháp xem trước và được duyệt rồi mới đẩy lên.

## Đặt món
- Trang chỉ tạo tin nhắn để khách tự gửi qua Zalo; Cô Kỹ gọi lại xác nhận rồi mới làm. Trang không thu tiền, không lưu thông tin khách.

## Không làm (kho này công khai)
- Không đưa ảnh các con, ảnh chụp tin nhắn, giấy tờ tùy thân, địa chỉ nhà, số điện thoại hay danh sách đơn của khách.
- Không xóa bài cũ, chỉ sửa hoặc bổ sung.
- Không chép nguyên văn hay lấy ảnh của người khác.
- Số tài khoản ngân hàng/VietQR (mục Mời trà sữa) chỉ đưa lên khi Cô Kỹ đồng ý.

## Việc định kỳ
- Mỗi tuần: xem bài mới đã lên trang, link Zalo/Shopee còn chạy.
- Mỗi tháng: tải bản sao lưu (Code › Download ZIP).
- Mỗi năm: xem lại phần Về em, thông tin liên hệ, gia hạn tên miền.

## Cập nhật 27/11/2026
- **Nhật ký bếp**: 164 bài trong `bai-viet.js`; 145 bài nhập từ ảnh chụp Facebook (thư mục `Cac bai viet cu/_md` trên máy anh Dũng), ảnh ở `img/fb/<tên tệp gốc>-NN.jpg` (rộng tối đa 900 px). Không đưa bài có trẻ em, chuyện riêng, bình luận người khác.
- **Học tiếng Anh**: kho từ `tu-vung.js` (~1.700 từ/câu, 45 chủ đề – thêm từ theo dạng `word=nghĩa;`), logic `tieng-anh.js`: mỗi lần tải trang 5 từ mới theo thứ tự xáo riêng từng máy, tiến độ lưu localStorage (`ckEn.*`). Ô "Từ tiếng Anh hôm nay" ở đầu trang.
- **Em làm thế nào** (`#em-lam`): 6 thẻ ảnh thật – sửa trực tiếp trong `index.html`.
- **Dải ảnh chạy** dưới căn bếp: mảng `R` trong khối script "dải ảnh thật" của `index.html`.
- Giá trên thẻ món (`g` trong mảng `P`) là giá Cô Kỹ đăng gần nhất – sửa khi giá đổi.
