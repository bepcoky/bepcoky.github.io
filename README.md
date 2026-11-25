# Bếp Cô Kỹ – bepcoky.com

Trang của Trần Thị Kỹ (Cô Kỹ), nội trợ ở Hải Phòng: món nhà làm, chuyện bếp, chuyện nhà và các góc học cùng chị em.

- Địa chỉ chính: https://bepcoky.com (tệp `CNAME`)
- Quy tắc viết và làm trang: xem `_QUY-TAC.md`

## Các tệp
| Tệp | Dùng để |
|---|---|
| `index.html` | Trang chủ (một trang, có các mục theo `#`) |
| `bai-viet.js` | Kho bài Nhật ký bếp – thêm bài chỉ cần sửa tệp này |
| `gioi-thieu.js` | Đồ Cô Kỹ dùng & bài giới thiệu, link tiếp thị Shopee |
| `img/` | Ảnh (tên không dấu); `img/og/` ảnh chia sẻ 1200×630 |
| `manifest.webmanifest` | Cho phép cài trang lên điện thoại |
| `sitemap.xml`, `robots.txt` | Cho Google |
| `404.html` | Trang báo lỗi khi gõ sai địa chỉ |

## Thêm một bài vào Nhật ký bếp (làm ngay trên web GitHub)
1. Mở tệp `bai-viet.js` → bấm biểu tượng cây bút (Edit).
2. Chép một khối `{ ... },` có sẵn, dán lên đầu danh sách, sửa:
   - `ngay`: ngày đăng gốc trên Facebook, dạng `"2023-05-14"`
   - `muc`: `bep` · `ban` · `nha` · `noingoai` · `vuon` · `khoe` · `di`
   - `tieuDe`, `noiDung` (đặt giữa hai dấu `` ` ``), `anh` (tên ảnh đã tải vào `img/`)
3. Bấm **Commit changes**. Khoảng 1–2 phút sau trang tự cập nhật.

## Mở xem trên máy
Mở thẳng `index.html` bằng trình duyệt là xem được, không cần cài gì.

## Ứng dụng Soi cùng Cô Kỹ (`soi/`)
Ứng dụng cài được lên điện thoại (PWA) tại https://soi.bepcoky.com/ (mã nguồn: kho riêng `bepcoky/soi`; `bepcoky.com/soi/` chỉ còn trang chuyển hướng): chụp ảnh hoặc dán chữ quảng cáo, nhãn sản phẩm, bài "món này chữa bệnh" → đọc chữ ngay trên máy (Tesseract.js, tiếng Việt + Anh) → soi theo bộ quy tắc.
- Sửa, thêm dấu hiệu: `soi/rules.js` (mẫu viết cho chữ **không dấu, chữ thường**). Bộ máy: `soi/engine.js`. Giao diện: `soi/index.html`, `soi/app.js`.
- Sửa xong **tăng số `SHELL` trong `soi/sw.js`** (vd `soi-shell-v2`) để điện thoại nhận bản mới.
- Ảnh của người dùng không tải lên đâu, không lưu trên trang.

## Viết bài kiểm chứng mới
Nguồn từng bài ở `kiem-chung/_nguon/<slug>.md` (phần đầu `tieu_de`, `mo_ta`, `ngay`, `thu_tu`, `khuyen_nghi`). Chạy `pip install markdown && python3 tools/kiem_chung.py` để dựng `kiem-chung/<slug>.html`, cập nhật danh sách trên trang chủ (giữa dấu `KIEM-CHUNG:BAT-DAU/KET-THUC`) và `sitemap.xml`. Quy trình đầy đủ: skill `viet-bai-kiem-chung-bepcoky`.

## Kiến thức bếp (từ 26/11/2026)
- Bài viết: `kien-thuc/_nguon/<tên-bài>.md` (đầu tệp có khối `---` ghi tiêu đề, chuyên mục, ảnh, tóm tắt, link). Ảnh để trong `img/kien-thuc/`.
- Dựng trang: `pip install markdown` rồi `python3 _cong-cu/dung_kien_thuc.py` → sinh `kien-thuc/*.html`, `kien-thuc.js`, thêm dòng `sitemap.xml`.
- Chuyên mục: sửa danh sách `MUC` trong `_cong-cu/dung_kien_thuc.py` (đã có sẵn Rượu – bia, Nước mắm, Gia vị ở trạng thái “sắp có”).
- **Link Shopee:** chỉ sửa `lien-ket.js` (để `url:''` là nút tự ẩn). Không cần dựng lại trang.
- Lời chào trang chủ: thêm câu trong `loi-chao.js`. Lịch âm – tuần trăng: `lich.js`.
- Bộ đếm: Worker `bep-dem` (https://bep-dem.nddzungx.workers.dev, D1 `bep-dem`) đã chạy từ 26/11/2026; địa chỉ ở `cau-hinh.js`. Hướng dẫn dựng lại: `_dem/HUONG-DAN.md`.

## Bài hát về em, nhánh đồ vật, lịch đầu trang (26/11/2026)
- Bài hát: thêm/sửa trong `bai-hat.js` (mã video YouTube + tên + nhóm). Video chỉ tải khi người xem bấm.
- Bấm đồ vật trong căn bếp → các nhánh tỏa ra: sửa danh sách `NHANH` trong `menu-do-vat.js` (nhánh đầu là “Vào góc…”, nhánh `#bai-hat:<mã>` mở và phát bài hát).
- Lịch dương/âm, tuần trăng, lượt ghé: dòng chữ bên phải tiêu đề (`#today` trong `index.html`).

## Mời trà sữa và ảnh (cập nhật 26/11/2026)
- `tra-sua.js`: mục Mời trà sữa – khách chọn ly rồi bấm logo app ngân hàng, app tự mở qua link VietQR (dl.vietqr.io). Đổi tài khoản nhận ở biến `TK` đầu tệp.
- `giao-dien.js`: ảnh hiện dần (nền màu chủ đạo trong lúc tải), bấm ảnh để xem to, mũi tên cho bộ ảnh bài viết, menu dài mờ mép. Thêm/đổi ảnh trong `img/` thì chạy `python3 _cong-cu/mau_anh.py` (thêm `--lam-net` để làm nét nhẹ ảnh mới).
