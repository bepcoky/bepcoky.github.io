"""Cập nhật bảng màu nền ảnh (MAU) trong giao-dien.js.
Chạy sau khi thêm/đổi ảnh trong img/:  python3 _cong-cu/mau_anh.py
Mỗi ảnh lấy 2 màu trung bình (nửa trên, nửa dưới) để khung ảnh hiện sẵn màu khi đang tải.
Kèm tùy chọn --lam-net: làm nét nhẹ + lưu JPEG progressive (chỉ khi không nặng hơn ảnh gốc 2%)."""
import glob, json, os, re, sys
from PIL import Image, ImageStat, ImageFilter, ImageEnhance

GOC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(GOC)
anh = sorted(glob.glob('img/*.jpg') + glob.glob('img/kien-thuc/*.jpg'))

if '--lam-net' in sys.argv:
    for f in anh:
        im = Image.open(f).convert('RGB'); s0 = os.path.getsize(f)
        im2 = ImageEnhance.Color(im.filter(ImageFilter.UnsharpMask(radius=1.0, percent=45, threshold=3))).enhance(1.03)
        if max(im2.size) > 820: im2.thumbnail((820, 820), Image.LANCZOS)
        for q in (84, 80, 77):
            im2.save('/tmp/_x.jpg', 'JPEG', quality=q, progressive=True, optimize=True)
            if os.path.getsize('/tmp/_x.jpg') <= s0 * 1.02:
                os.replace('/tmp/_x.jpg', f); print('làm nét', f, q); break

mau = {}
for f in anh:
    im = Image.open(f).convert('RGB'); w, h = im.size
    def tb(box):
        r, g, b = [int(x) for x in ImageStat.Stat(im.crop(box).resize((6, 6))).mean]
        return '%02x%02x%02x' % (r, g, b)
    mau[os.path.relpath(f, 'img').replace(os.sep, '/')] = tb((0, 0, w, h // 2)) + tb((0, h // 2, w, h))

p = 'giao-dien.js'
s = open(p, encoding='utf-8').read()
s = re.sub(r'var MAU = \{.*?\};', 'var MAU = ' + json.dumps(mau, separators=(',', ':')) + ';', s, count=1, flags=re.S)
open(p, 'w', encoding='utf-8').write(s)
print('Đã cập nhật màu cho', len(mau), 'ảnh')
