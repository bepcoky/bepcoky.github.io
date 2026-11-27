from playwright.sync_api import sync_playwright
import os
W=os.getcwd()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--allow-file-access-from-files'])
    pg=b.new_page(viewport={'width':1200,'height':630})
    pg.goto('file://'+W+'/og.html');pg.wait_for_timeout(800)
    pg.locator('#s').screenshot(path='out/og.png')
    for name,src,sz,tr in [('icon-192','bo',192,1),('icon-512','bo',512,1),('icon-maskable-192','mask',192,0),('icon-maskable-512','mask',512,0),('apple-touch-icon','vuong',180,0),('f48','favicon',48,1),('f32','favicon',32,1),('f16','favicon',16,1),('logo-128','bo',128,1),('prev512','vuong',512,0)]:
        pg.set_viewport_size({'width':sz,'height':sz})
        pg.set_content(f'<html><body style="margin:0;background:transparent"><img src="file://{W}/out/{src}.svg" style="width:{sz}px;height:{sz}px;display:block"></body></html>')
        pg.wait_for_timeout(150)
        pg.screenshot(path=f'out/{name}.png',omit_background=bool(tr))
    b.close()
