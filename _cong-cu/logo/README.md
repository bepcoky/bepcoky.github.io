# Biểu tượng Bếp Cô Kỹ – logo E1c "Bát nuôi mầm lấp lánh" (28/11/2026)

Đồng bộ với kênh YouTube Bếp Cô Kỹ (@bepcoky). Nguồn gốc: `D:\New App 2026\Bep co Ky Web\Youtube Bep Co Ky\Nhan-dien\` (Bep-Co-Ky-logo-E1_vuong.svg, 00-DINH-VI-va-NHAN-DIEN-chot.md).

- Quy cách: ô vuông nền đỏ chuyển #D9472F → #A8231A; bát cơm trắng chữ "CÔ KỸ" (Be Vietnam Pro 800, đỏ #C8352A); hạt – tim cam #F2A93B; mầm hai lá #3DBE8B/#9ADBBB; sao ✦ #F2A93B + #FBE3C0.
- `mk_logo.py` – dựng SVG sạch (chữ đã đổi thành nét, không phụ thuộc phông): `favicon.svg` (bo 40), bản vuông, bản bo 44, bản maskable (nội dung 0,74). Cần `npm i @fontsource/be-vietnam-pro @fontsource/lora` cùng thư mục.
- `render.py` – chụp Playwright ra `img/icon-192/512.png` (bo góc, nền trong), `img/icon-maskable-192/512.png`, `img/apple-touch-icon.png` (180, vuông), favicon 16/32/48 → `favicon.ico`; `og.html` → `img/og/bepcoky.jpg` (1200×630, ảnh chia sẻ mặc định).
- `the-youtube.html` – ảnh bìa bài "Bếp Cô Kỹ có kênh YouTube" (`img/youtube-bepcoky-01.webp`, 800×600).
- `logo-e1c-vuong.svg` – bản vuông để in/dùng nơi khác.
- Đầu trang chủ dùng `favicon.svg` 40×40 cạnh chữ "Bếp Cô Kỹ".
- Đổi biểu tượng thì tăng `?v=` (hiện **v=3**) trong mọi trang, `manifest.webmanifest`, `_cong-cu/dung_kien_thuc.py`, `tools/kiem_chung.py`, và tăng `PHIEN_BAN` trong `sw.js`.
- Bản cũ (26/11, đĩa kem bát đũa + chữ "Cô Kỹ"): `icon.html` – còn trong lịch sử git commit `617d87b`.
