#!/usr/bin/env python3
"""Dựng mục Kiến thức bếp của bepcoky.com.

Nguồn:  kien-thuc/_nguon/<slug>.md  (đầu tệp có khối --- ... --- ghi thông tin bài)
Ra:     kien-thuc/<slug>.html, kien-thuc/index.html, kien-thuc.js (trang chủ đọc), dòng sitemap.

Chạy:   python3 _cong-cu/dung_kien_thuc.py      (cần: pip install markdown)

Khối đầu bài:
  slug, tieu_de, muc (dung-cu | an-toan | nguyen-lieu | ruou-bia | nuoc-mam | gia-vi),
  anh, chu_thich_anh, anh2, chu_thich_anh2 (ảnh để trong img/kien-thuc/),
  tom_tat, ngay (YYYY-MM-DD), link (khóa trong lien-ket.js, cách nhau dấu phẩy), tham_khao.
Trong thân bài, chỗ ghi {{mua}} là nơi hiện nút Shopee (không ghi thì nút ở cuối bài).
Thêm chuyên mục mới: thêm một dòng vào MUC bên dưới.
"""
import glob, html, json, os, re, unicodedata
import markdown

GOC = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MUC = [  # khóa, tên, biểu tượng, lời giới thiệu
    ('dung-cu', 'Dụng cụ bếp', '🔪', 'Dao, chảo, nồi, tạp dề… dùng đúng thì bền, mua đúng thì đỡ tiền.'),
    ('an-toan', 'An toàn thực phẩm', '🛡️', 'Những điều nhà mình nên biết để ăn ngon mà vẫn yên tâm.'),
    ('nguyen-lieu', 'Nguyên liệu & món', '🥬', 'Vì sao các cụ nấu thế – nhìn bằng con mắt bếp nhà.'),
    ('ruou-bia', 'Rượu – bia', '🍶', 'Em không thích rượu bia, nhưng tìm hiểu để biết mà giới thiệu cho các bác. Uống để thưởng thức chứ đừng để say, đã uống rượu bia thì không lái xe. Tìm hiểu sâu hơn ở ứng dụng Thưởng thức rượu bia (đang phát triển, sắp mở tại ruoubia.bepcoky.com).'),
    ('nuoc-mam', 'Nước mắm', '🐟', 'Sắp có: độ đạm, mắm truyền thống – mắm công nghiệp, cách chọn.'),
    ('gia-vi', 'Gia vị', '🌶️', 'Sắp có: tiêu, hồi, quế, thảo quả… mua ở đâu, cất thế nào.'),
]
TEN = {k: t for k, t, _, _ in MUC}
NFC = lambda s: unicodedata.normalize('NFC', s)
e = lambda s: html.escape(s or '', quote=True)


def doc(p):
    s = NFC(open(p, encoding='utf-8').read())
    m = re.match(r'---\n(.*?)\n---\n(.*)', s, re.S)
    meta = {}
    for line in m.group(1).splitlines():
        k, _, v = line.partition(':')
        meta[k.strip()] = v.strip()
    # markdown cần một dòng trống trước danh sách – tự chèn cho người viết đỡ nhớ
    dong, ra = m.group(2).split('\n'), []
    for l in dong:
        if re.match(r'(-|\d+\.) ', l) and ra and ra[-1].strip() and not re.match(r'(-|\d+\.) ', ra[-1]):
            ra.append('')
        ra.append(l)
    meta['than'] = '\n'.join(ra)
    meta['links'] = [x.strip() for x in meta.get('link', '').split(',') if x.strip()]
    return meta


def ngay_vn(d):
    y, m, dd = d.split('-'); return f'{int(dd)}/{int(m)}/{y}'


CSS = open(os.path.join(GOC, '_cong-cu', 'kien-thuc.css'), encoding='utf-8').read()


def khung(tieu_de, mo_ta, url, anh_og, than, ve='../'):
    return f'''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(tieu_de)} – Bếp Cô Kỹ</title>
<meta name="description" content="{e(mo_ta)}">
<link rel="canonical" href="https://bepcoky.com/{url}">
<meta name="theme-color" content="#A8231A">
<link rel="icon" href="{ve}favicon.ico?v=3" sizes="48x48">
<link rel="icon" href="{ve}favicon.svg?v=3" type="image/svg+xml">
<link rel="apple-touch-icon" href="{ve}img/apple-touch-icon.png?v=3">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Bếp Cô Kỹ">
<meta property="og:locale" content="vi_VN">
<meta property="og:url" content="https://bepcoky.com/{url}">
<meta property="og:title" content="{e(tieu_de)}">
<meta property="og:description" content="{e(mo_ta)}">
<meta property="og:image" content="https://bepcoky.com/{anh_og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<header><div class="nav"><a class="logo" href="{ve}">Bếp Cô Kỹ<small>Ăn với cơm thôi cũng phải đẹp</small></a><a class="back" href="{ve}kien-thuc/">Kiến thức bếp</a></div></header>
<main class="wrap">
{than}
</main>
<footer><div class="wrap"><small>© 2026 Trần Thị Kỹ · bepcoky.com · <a href="{ve}#mien-tru">Miễn trừ trách nhiệm</a> · Zalo <a href="https://zalo.me/0342668311" target="_blank" rel="noopener">0342.668.311</a> · <a href="https://www.facebook.com/tran.ky.794" target="_blank" rel="noopener">Facebook Trần Thị Kỹ</a></small></div></footer>
<script src="{ve}lien-ket.js"></script>
<script src="{ve}giao-dien.js"></script>
</body>
</html>
'''


def hinh(ten, chu):
    if not ten: return ''
    return f'<figure><img src="../img/kien-thuc/{e(ten)}" alt="{e(chu)}" loading="lazy"><figcaption>{e(chu)}</figcaption></figure>'


def dung():
    bai = sorted((doc(p) for p in glob.glob(os.path.join(GOC, 'kien-thuc', '_nguon', '*.md'))),
                 key=lambda b: (b['ngay'], b['slug']), reverse=True)
    for b in bai:
        than = markdown.markdown(b['than'], extensions=['sane_lists'])
        mua = f'<div class="mua" data-links="{e(",".join(b["links"]))}" hidden></div>' if b['links'] else ''
        than = than.replace('<p>{{mua}}</p>', mua) if '{{mua}}' in than else than + mua
        # chèn ảnh thứ hai sau đoạn mở đầu
        if b.get('anh2'):
            than = than.replace('</p>', '</p>' + hinh(b['anh2'], b.get('chu_thich_anh2', '')), 1)
        cung = [x for x in bai if x['muc'] == b['muc'] and x['slug'] != b['slug']][:4]
        khac = ''.join(f'<li><a href="{x["slug"]}.html">{e(x["tieu_de"])}</a></li>' for x in cung)
        noi = f'''<p class="crumb"><a href="../">Trang chủ</a> › <a href="./">Kiến thức bếp</a> › <a href="./#{b['muc']}">{e(TEN[b['muc']])}</a></p>
<article>
<p class="tag">{e(TEN[b['muc']])}</p>
<h1>{e(b['tieu_de'])}</h1>
<p class="meta">Trần Thị Kỹ · {ngay_vn(b['ngay'])}</p>
{hinh(b.get('anh'), b.get('chu_thich_anh', ''))}
{than}
<div class="note"><p><b>Em tham khảo:</b> {e(b.get('tham_khao', ''))}</p><p>Kinh nghiệm và kiến thức bếp nhà, em viết lại theo cách hiểu của em – không thay lời khuyên của bác sĩ, chuyên gia dinh dưỡng. Thấy chỗ nào chưa đúng, các bác nhắn em sửa nhé.</p></div>
{f'<div class="more"><h2>Cùng chuyên mục</h2><ul>{khac}</ul></div>' if khac else ''}
<div class="cta"><a class="btn" href="./">Xem mọi bài kiến thức</a><a class="btn ghost" href="../#dat-hang">Đặt món Cô Kỹ làm</a></div>
</article>'''
        anh_og = 'img/kien-thuc/' + b['anh'] if b.get('anh', '').endswith('.jpg') else 'img/og/bepcoky.jpg'
        open(os.path.join(GOC, 'kien-thuc', b['slug'] + '.html'), 'w', encoding='utf-8').write(
            khung(b['tieu_de'], b['tom_tat'], f'kien-thuc/{b["slug"]}.html', anh_og, noi))

    # trang danh sách
    the = []
    for k, t, ic, gt in MUC:
        ds = [x for x in bai if x['muc'] == k]
        the.append(f'<section id="{k}"><h2>{ic} {e(t)}</h2><p class="lead2">{e(gt)}</p>' + (
            '<div class="cards">' + ''.join(
                f'<a class="card" href="{x["slug"]}.html">' + (f'<img src="../img/kien-thuc/{e(x["anh"])}" alt="" loading="lazy">' if x.get('anh') else '') +
                f'<b>{e(x["tieu_de"])}</b><span>{e(x["tom_tat"])}</span></a>' for x in ds) + '</div>'
            if ds else '<p class="soon">Em đang tìm hiểu, sắp có bài các bác nhé.</p>') + '</section>')
    chips = ''.join(f'<a href="#{k}">{ic} {e(t)}</a>' for k, t, ic, _ in MUC)
    noi = f'''<p class="crumb"><a href="../">Trang chủ</a> › Kiến thức bếp</p>
<h1>Kiến thức bếp của Cô Kỹ</h1>
<p class="lead2">Những điều em đọc, em hỏi, em thử rồi kể lại bằng giọng bếp nhà: dụng cụ, an toàn thực phẩm, nguyên liệu – và sắp tới là rượu, bia, nước mắm, gia vị.</p>
<nav class="chips" aria-label="Chuyên mục">{chips}</nav>
{''.join(the)}'''
    open(os.path.join(GOC, 'kien-thuc', 'index.html'), 'w', encoding='utf-8').write(
        khung('Kiến thức bếp', 'Kiến thức bếp nhà kể theo giọng Cô Kỹ: dụng cụ, an toàn thực phẩm, nguyên liệu, rượu bia, nước mắm, gia vị.', 'kien-thuc/', 'img/og/bepcoky.jpg', noi))

    # dữ liệu cho trang chủ
    ds = [{k: b.get(k, '') for k in ('slug', 'tieu_de', 'muc', 'anh', 'tom_tat', 'ngay')} for b in bai]
    muc = [{'k': k, 't': t, 'ic': ic} for k, t, ic, _ in MUC]
    open(os.path.join(GOC, 'kien-thuc.js'), 'w', encoding='utf-8').write(
        '/* Tự sinh bởi _cong-cu/dung_kien_thuc.py – đừng sửa tay, sửa bài trong kien-thuc/_nguon/ rồi chạy lại. */\n'
        f'window.KIEN_THUC_MUC = {json.dumps(muc, ensure_ascii=False)};\n'
        f'window.KIEN_THUC = {json.dumps(ds, ensure_ascii=False, indent=0)};\n')

    # sitemap
    sm = os.path.join(GOC, 'sitemap.xml'); s = open(sm, encoding='utf-8').read()
    s = re.sub(r'\s*<url><loc>https://bepcoky.com/kien-thuc/[^<]*</loc>.*?</url>', '', s, flags=re.S)
    them = ''.join(f'\n  <url><loc>https://bepcoky.com/kien-thuc/{u}</loc><lastmod>{d}</lastmod></url>'
                   for u, d in [('', max(b['ngay'] for b in bai))] + [(b['slug'] + '.html', b['ngay']) for b in bai])
    s = s.replace('</urlset>', them + '\n</urlset>')
    open(sm, 'w', encoding='utf-8').write(s)
    print(f'Đã dựng {len(bai)} bài kiến thức.')


if __name__ == '__main__':
    dung()
