#!/usr/bin/env python3
"""Dựng các trang bài kiểm chứng của bepcoky.com từ tệp nguồn markdown.

Nguồn: kiem-chung/_nguon/<slug>.md (thư mục bắt đầu bằng "_" nên GitHub Pages không đăng), dạng:
    ---
    tieu_de: Tiêu đề bài
    mo_ta: Một câu tóm tắt (thẻ trên trang chủ, mô tả khi chia sẻ)
    ngay: 26/11/2026
    thu_tu: 10            (số nhỏ đứng trước trong danh sách)
    khuyen_nghi: dung | can | on | (để trống với bài hướng dẫn)
    ---
    Thân bài markdown (bảng, danh sách, link). Link sang bài khác: [chữ](<slug>.html)

Chạy ở gốc kho:  python3 tools/kiem_chung.py
Làm ra: kiem-chung/<slug>.html cho mọi nguồn; cập nhật khối danh sách trên index.html (giữa hai dấu
<!-- KIEM-CHUNG:BAT-DAU --> ... <!-- KIEM-CHUNG:KET-THUC -->) và các dòng kiem-chung trong sitemap.xml.
Cần: pip install markdown
"""
import html, os, re, sys, unicodedata
import markdown

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'kiem-chung', '_nguon')
OUT = os.path.join(ROOT, 'kiem-chung')
APP_URL = os.environ.get('SOI_URL', 'https://soi.bepcoky.com/')   # ứng dụng Soi cùng Cô Kỹ (đổi tại đây nếu địa chỉ thay đổi)
SITE = 'https://bepcoky.com'
CSS = open(os.path.join(ROOT, 'tools', 'kiem-chung.css'), encoding='utf-8').read()
KN = {'dung': 'Chưa nên mua', 'can': 'Cân nhắc kỹ', 'on': 'Mua được nếu đúng nhu cầu'}

# dấu kiểu mới: hoà -> hòa, tuỳ -> tùy (chỉ khi là cuối âm tiết)
_M = {'oà': 'òa', 'oá': 'óa', 'oả': 'ỏa', 'oã': 'õa', 'oạ': 'ọa', 'oè': 'òe', 'oé': 'óe', 'oẻ': 'ỏe', 'oẽ': 'õe', 'oẹ': 'ọe',
      'uỳ': 'ùy', 'uý': 'úy', 'uỷ': 'ủy', 'uỹ': 'ũy', 'uỵ': 'ụy'}
_P = re.compile(r'(?<![qQ])(' + '|'.join(_M) + r')(?![a-zA-Zàáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])')
def viet(s): return _P.sub(lambda m: _M[m.group(1)], unicodedata.normalize('NFC', s))

def doc_nguon():
    bai = []
    for f in sorted(os.listdir(SRC)):
        if not f.endswith('.md'): continue
        t = viet(open(os.path.join(SRC, f), encoding='utf-8').read())
        m = re.match(r'---\n(.*?)\n---\n(.*)', t, re.S)
        if not m: sys.exit(f'{f}: thiếu phần --- đầu tệp')
        meta = dict(re.findall(r'^(\w+):\s*(.*)$', m.group(1), re.M))
        for k in ('tieu_de', 'mo_ta', 'ngay', 'thu_tu'):
            if not meta.get(k): sys.exit(f'{f}: thiếu {k}')
        meta['slug'] = f[:-3]; meta['than'] = m.group(2).strip(); meta['thu_tu'] = int(meta['thu_tu'])
        bai.append(meta)
    return sorted(bai, key=lambda b: (b['thu_tu'], b['slug']))

def trang(b, tat_ca):
    url = f"{SITE}/kiem-chung/{b['slug']}.html"
    t, d = html.escape(b['tieu_de']), html.escape(b['mo_ta'])
    body = markdown.markdown(b['than'], extensions=['tables', 'sane_lists'])
    khac = ''.join(f'<li><a href="{x["slug"]}.html">{html.escape(x["tieu_de"])}</a></li>' for x in tat_ca if x['slug'] != b['slug'])
    return f'''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t} – Bếp Cô Kỹ</title>
<meta name="description" content="{d}">
<link rel="canonical" href="{url}">
<meta name="theme-color" content="#A8231A">
<link rel="icon" href="/favicon.ico?v=3" sizes="48x48">
<link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml">
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png?v=3">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Bếp Cô Kỹ">
<meta property="og:locale" content="vi_VN">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:image" content="{SITE}/img/og/bepcoky.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<header><div class="nav"><a class="logo" href="/">Bếp Cô Kỹ<small>Ăn với cơm thôi cũng phải đẹp</small></a><a class="back" href="/#cung-thong-tin">Kiểm chứng thông tin</a></div></header>
<main class="wrap">
<p class="crumb"><a href="/">Trang chủ</a> › <a href="/#cung-thong-tin">Kiểm chứng thông tin</a> › Chậm lại một nhịp</p>
<article>
<p class="tag">Chậm lại một nhịp trước khi xuống tiền</p>
<h1>{t}</h1>
<p class="meta">Trần Thị Kỹ · {html.escape(b['ngay'])}</p>
{body}
<aside class="note">
<p><b>Lưu ý:</b> Bài viết là trải nghiệm và tìm hiểu của em, tổng hợp từ nhãn sản phẩm, trang bán và tài liệu y khoa công khai, không thay lời khuyên của bác sĩ, dược sĩ. Người đang dùng thuốc, có bệnh, mang thai, cho con bú hỏi bác sĩ trước khi dùng bất cứ sản phẩm nào.</p>
<p><b>Công khai:</b> em cũng bán hàng nhà làm online, nhưng bài này không nhận tiền hay quà của hãng hoặc người bán nào. Thấy chỗ nào em viết chưa đúng, các mom nhắn em để em sửa.</p>
</aside>
<section class="app">
<img src="/img/soi-icon-192.png" alt="" width="64" height="64">
<div><h2>Bạn muốn tự kiểm chứng?</h2>
<p>Hãy tải ứng dụng <b>Soi cùng Cô Kỹ</b> về dùng: chụp ảnh quảng cáo, nhãn sản phẩm hay bài "món này chữa bệnh kia", ứng dụng đọc chữ rồi chỉ ra chỗ cần cẩn thận. Chạy ngay trên điện thoại, ảnh không gửi đi đâu, dùng được cả khi không có mạng.</p>
<p><a class="btn" href="{APP_URL}">Mở và tải ứng dụng</a></p></div>
</section>
</article>
<section class="more">
<h2>Xem thêm</h2>
<ul>{khac}</ul>
<p class="cta"><a class="btn" href="{APP_URL}">Tự soi bằng ứng dụng</a> <a class="btn ghost" href="https://www.facebook.com/tran.ky.794" target="_blank" rel="noopener">Facebook của em</a> <a class="btn ghost" href="/#moi-tra-sua">Mời em ly trà sữa</a></p>
</section>
</main>
<footer><div class="wrap"><small>© 2026 Trần Thị Kỹ · bepcoky.com · <a href="/#mien-tru">Miễn trừ trách nhiệm</a> · Zalo <a href="https://zalo.me/0342668311" target="_blank" rel="noopener">0342.668.311</a> · <a href="https://www.facebook.com/tran.ky.794" target="_blank" rel="noopener">Facebook Trần Thị Kỹ</a></small></div></footer>
</body>
</html>
'''

def danh_sach(bai):
    the = ''.join(f'<a class="ck" href="kiem-chung/{b["slug"]}.html"><b>{html.escape(b["tieu_de"])}</b><span>{html.escape(b["mo_ta"])}</span></a>' for b in bai)
    return f'<!-- KIEM-CHUNG:BAT-DAU --><div class="cks">{the}</div><!-- KIEM-CHUNG:KET-THUC -->'

def main():
    bai = doc_nguon()
    for b in bai:
        open(os.path.join(OUT, b['slug'] + '.html'), 'w', encoding='utf-8').write(trang(b, bai))
    p = os.path.join(ROOT, 'index.html'); s = open(p, encoding='utf-8').read()
    s2, n = re.subn(r'<!-- KIEM-CHUNG:BAT-DAU -->.*?<!-- KIEM-CHUNG:KET-THUC -->', lambda m: danh_sach(bai), s, flags=re.S)
    if not n: sys.exit('index.html: không thấy dấu <!-- KIEM-CHUNG:BAT-DAU -->')
    open(p, 'w', encoding='utf-8').write(s2)
    p = os.path.join(ROOT, 'sitemap.xml'); s = open(p, encoding='utf-8').read()
    s = re.sub(r'  <url><loc>https://bepcoky\.com/kiem-chung/[^<]*</loc>.*?</url>\n', '', s)
    dong = ''.join(f'  <url><loc>{SITE}/kiem-chung/{b["slug"]}.html</loc><lastmod>{"-".join(reversed(b["ngay"].split("/")))}</lastmod></url>\n' for b in bai)
    open(p, 'w', encoding='utf-8').write(s.replace('</urlset>', dong + '</urlset>'))
    print(f'Đã dựng {len(bai)} bài:', ', '.join(b['slug'] for b in bai))

if __name__ == '__main__':
    main()
