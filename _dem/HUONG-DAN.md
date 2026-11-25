# Bật bộ đếm truy cập cho bepcoky.com (bep-dem)

Làm một lần trên Cloudflare (tài khoản đang giữ tên miền bepcoky.com), khoảng 10 phút:

1. **Storage & Databases → D1 → Create** → tên `bep-dem` → mở Console, dán toàn bộ `schema.sql`, bấm Execute.
2. **Workers & Pages → Create → Worker** → tên `bep-dem` → Deploy → **Edit code** → xóa mã mẫu, dán toàn bộ `worker.js` → Deploy.
3. Worker `bep-dem` → **Settings → Bindings → Add → D1 database**: tên biến `DB`, chọn `bep-dem` → Deploy lại.
4. **Settings → Triggers → Cron**: `0 18 * * *` (dọn dữ liệu cũ lúc 1 giờ sáng giờ VN).
5. Thử: mở `https://bep-dem.<tên-tài-khoản>.workers.dev/stats?site=home` → thấy `{"today":0,...}` là được.
6. Mở `cau-hinh.js` trong kho, điền `counterUrl: 'https://bep-dem.<tên-tài-khoản>.workers.dev'`, đẩy lên.
7. Sửa dòng Quyền riêng tư ở chân trang nếu cần (đã ghi sẵn: bộ đếm không lưu IP, tên, email).

Bộ đếm không lưu IP, tên hay email; mỗi máy chỉ có một mã ngẫu nhiên do trình duyệt tự tạo.
Thư mục `_dem/` bắt đầu bằng dấu gạch dưới nên GitHub Pages không đăng ra ngoài.
