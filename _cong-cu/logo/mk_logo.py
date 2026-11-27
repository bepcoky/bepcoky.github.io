import sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
F='node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-%s-800-normal.woff'
fonts=[TTFont(F%'latin'),TTFont(F%'vietnamese')]
def text_path(s,x,y,size,anchor='middle'):
    # returns path d, laid out using hmtx advances
    items=[];adv=0
    for ch in s:
        for f in fonts:
            cm=f.getBestCmap()
            if ord(ch) in cm:
                g=cm[ord(ch)];items.append((f,g,adv));adv+=f['hmtx'][g][0];break
        else: raise SystemExit('missing '+ch)
    upm=fonts[0]['head'].unitsPerEm;sc=size/upm
    x0=x-adv*sc/2 if anchor=='middle' else x
    pen=SVGPathPen(None)
    for f,g,a in items:
        gs=f.getGlyphSet()
        tp=TransformPen(pen,(sc,0,0,-sc,x0+a*sc,y))
        gs[g].draw(tp)
    return pen.getCommands()
def logo(rx=0,k=0.9,size=200):
    d=text_path('CÔ KỸ',100,153,27)
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D9472F"/><stop offset="1" stop-color="#A8231A"/></linearGradient></defs><rect width="200" height="200" rx="{rx}" fill="url(#g)"/><g transform="translate(100 104) scale({k}) translate(-100 -100)"><path d="M100 114 C100 92 97 72 100 52" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round"/><path transform="translate(100 64) rotate(-30) scale(1.8)" d="M0 0 C6 -14 22 -18 30 -16 C28 -6 18 6 0 0 Z" fill="#9ADBBB"/><path transform="translate(99 84) scale(-1 1) rotate(-20) scale(1.5)" d="M0 0 C6 -14 22 -18 30 -16 C28 -6 18 6 0 0 Z" fill="#3DBE8B"/><path transform="translate(100 95) scale(1.35)" d="M0 16 C-20 2 -16 -14 0 -6 C16 -14 20 2 0 16 Z" fill="#F2A93B"/><path transform="translate(152 40) scale(1.15)" d="M0 -18 L5 -5 L18 0 L5 5 L0 18 L-5 5 L-18 0 L-5 -5 Z" fill="#F2A93B"/><path transform="translate(170 72) scale(.6)" d="M0 -18 L5 -5 L18 0 L5 5 L0 18 L-5 5 L-18 0 L-5 -5 Z" fill="#FBE3C0"/><path d="M34 116 H166 A66 58 0 0 1 34 116 Z" fill="#fff"/><rect x="80" y="170" width="40" height="9" rx="4.5" fill="#fff"/><path d="{d}" fill="#C8352A"/></g></svg>'''
import os
os.makedirs('out',exist_ok=True)
open('out/favicon.svg','w').write(logo(rx=40))
open('out/vuong.svg','w').write(logo(rx=0))
open('out/bo.svg','w').write(logo(rx=44))
open('out/mask.svg','w').write(logo(rx=0,k=0.74))
