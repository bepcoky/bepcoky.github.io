# Biểu tượng ứng dụng Bếp Cô Kỹ (26/11/2026)

Nền đỏ như nhãn hũ thịt chưng, đĩa kem với logo nhãn (vạch xanh, bát cam, đôi đũa), chữ "Cô Kỹ" (Be Vietnam Pro 900).

- `icon.html` – bản vẽ SVG. Tham số `?rx=112` bo góc, `?k=.84` thu nhỏ nội dung cho bản maskable.
- Dựng lại: `npm i @fontsource/be-vietnam-pro` trong thư mục này, mở bằng Playwright 512×512, chụp `#s` (nền trong suốt).
- Tệp ra: `img/icon-192.png`, `img/icon-512.png` (bo góc), `img/icon-maskable-192/512.png` (Android), `img/apple-touch-icon.png` (180, vuông – iPhone tự bo).
- Đổi biểu tượng thì tăng `?v=` trong `index.html`, `manifest.webmanifest`, các trang con và `_cong-cu/dung_kien_thuc.py`, `tools/kiem_chung.py`.
