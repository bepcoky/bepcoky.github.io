/**
 * Bếp Cô Kỹ – trạng thái "Bếp đang nghỉ" (Cloudflare Worker riêng: bep-trang-thai, dùng chung D1 bep-dem)
 * GET  /status                                   -> {nghi:false|true, loi:"...", den:"2026-12-01", ts:...}
 * POST /status/set {pin, nghi, loi, den}         -> lưu trạng thái (cần mã PIN)
 * POST /status/pin {pin, pinMoi}                 -> đổi mã PIN (4–12 chữ số)
 * Mã PIN mặc định 114115116 (chỉ lưu dạng băm SHA-256). Sai 5 lần -> khóa 15 phút.
 * Binding: D1 tên biến DB. Bảng tự tạo lần đầu.
 */
const ok = o => { try { const h = new URL(o).hostname; return h === 'bepcoky.com' || h.endsWith('.bepcoky.com') || h === 'bepcoky.github.io' || h === 'localhost' || h === '127.0.0.1'; } catch (e) { return false; } };
const cors = o => ({ 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin', ...(ok(o) ? { 'Access-Control-Allow-Origin': o } : {}) });
const json = (d, o, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...cors(o) } });
const bam = async s => [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode('bepcoky:' + s)))].map(b => b.toString(16).padStart(2, '0')).join('');
async function bang(db) {
  await db.prepare('CREATE TABLE IF NOT EXISTS bep_status (id INTEGER PRIMARY KEY, nghi INTEGER, loi TEXT, den TEXT, ts INTEGER, pin TEXT, sai INTEGER, khoa INTEGER)').run();
  await db.prepare('INSERT OR IGNORE INTO bep_status (id,nghi,loi,den,ts,pin,sai,khoa) VALUES (1,0,"","",0,?,0,0)').bind(await bam('114115116')).run();
  return db.prepare('SELECT * FROM bep_status WHERE id=1').first();
}
export default {
  async fetch(req, env) {
    const o = req.headers.get('Origin') || '', u = new URL(req.url), now = Date.now();
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(o) });
    const r = await bang(env.DB);
    if (u.pathname === '/status' && req.method === 'GET') return json({ nghi: !!r.nghi, loi: r.loi || '', den: r.den || '', ts: r.ts }, o);
    if (req.method !== 'POST' || !ok(o)) return json({ loi: 'khong-duoc-phep' }, o, 403);
    let b = {}; try { b = await req.json(); } catch (e) {}
    if (r.khoa > now) return json({ loi: 'tam-khoa', con: Math.ceil((r.khoa - now) / 60000) }, o, 429);
    if (await bam(String(b.pin || '')) !== r.pin) {
      const sai = (r.sai || 0) + 1;
      await env.DB.prepare('UPDATE bep_status SET sai=?, khoa=? WHERE id=1').bind(sai >= 5 ? 0 : sai, sai >= 5 ? now + 15 * 60000 : 0).run();
      return json({ loi: 'sai-pin', conLan: Math.max(0, 5 - sai) }, o, 401);
    }
    if (u.pathname === '/status/set') {
      const loi = String(b.loi || '').slice(0, 200), den = /^\d{4}-\d{2}-\d{2}$/.test(b.den || '') ? b.den : '';
      await env.DB.prepare('UPDATE bep_status SET nghi=?, loi=?, den=?, ts=?, sai=0 WHERE id=1').bind(b.nghi ? 1 : 0, loi, den, now).run();
      return json({ ok: true, nghi: !!b.nghi, loi, den, ts: now }, o);
    }
    if (u.pathname === '/status/pin') {
      const m = String(b.pinMoi || '');
      if (!/^\d{4,12}$/.test(m)) return json({ loi: 'pin-moi-khong-hop-le' }, o, 400);
      await env.DB.prepare('UPDATE bep_status SET pin=?, sai=0 WHERE id=1').bind(await bam(m)).run();
      return json({ ok: true }, o);
    }
    return json({ loi: 'khong-co' }, o, 404);
  }
};
