/* =========================================================
   HỌC TIẾNG ANH CÙNG CÔ KỸ – mỗi lần tải trang là 5 từ mới
   - Kho từ ở tu-vung.js (~1.700 từ, cụm từ, câu).
   - Thứ tự xáo riêng cho từng máy, nhớ trong localStorage: ghé 1 lần/ngày
     là ~5 từ/ngày ≈ 1.800 từ/năm, đủ mục tiêu 1.000–2.000 từ.
   - Không gửi gì đi đâu, chỉ lưu trên máy người đọc.
   ========================================================= */
(function(){
  const TV = window.TU_VUNG || {};
  const ALL = [], seenKey = new Set();
  Object.keys(TV).forEach(t => TV[t].split(';').forEach(x => {
    const i = x.indexOf('='); if (i < 1) return;
    const en = x.slice(0, i).trim(), vi = x.slice(i + 1).trim(), k = en.toLowerCase();
    if (!en || !vi || seenKey.has(k)) return; seenKey.add(k); ALL.push({en, vi, t});
  }));
  const N = ALL.length; if (!N) return;
  window.EN_ALL = ALL;

  /* --- lưu trữ an toàn (có máy chặn localStorage) --- */
  const mem = {};
  const get = (k, d) => { try { const v = localStorage.getItem('ckEn.' + k); return v === null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } };
  const set = (k, v) => { try { localStorage.setItem('ckEn.' + k, JSON.stringify(v)); } catch (e) { mem[k] = v; } };

  /* --- thứ tự xáo cố định theo hạt giống của máy --- */
  let seed = get('seed', 0); if (!seed) { seed = 1 + Math.floor(Math.random() * 2147483646); set('seed', seed); }
  const rnd = (() => { let s = seed; return () => (s = s * 16807 % 2147483647) / 2147483647; })();
  const order = ALL.map((_, i) => i);
  for (let i = N - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }

  const BATCH = 5, GOAL = 1500;
  let pos = get('pos', 0);
  const learned = new Set(get('learned', []));
  const today = new Date().toISOString().slice(0, 10);
  const days = get('days', []); if (!days.includes(today)) { days.push(today); if (days.length > 400) days.shift(); set('days', days); }

  const takeBatch = () => { const b = []; for (let k = 0; k < BATCH; k++) b.push(order[(pos + k) % N]); pos += BATCH; set('pos', pos); return b; };
  let batch = takeBatch();                 // mỗi lần tải trang: 5 từ mới
  const seenCount = () => Math.min(pos, N);

  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const say = t => { try { const u = new SpeechSynthesisUtterance(t); u.lang = 'en-US'; u.rate = .85; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} };
  const $ = s => document.querySelector(s);

  function streak() { // số ngày học liên tiếp tính đến hôm nay
    const s = new Set(days); let n = 0; const d = new Date();
    for (;;) { const k = d.toISOString().slice(0, 10); if (!s.has(k)) break; n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function card(i, cls) {
    const w = ALL[i], on = learned.has(i);
    return `<div class="enw ${cls || ''}${on ? ' ok' : ''}" data-i="${i}">
      <span class="ent">${esc(w.t)}</span>
      <button type="button" class="enf" aria-label="Lật xem nghĩa"><b>${esc(w.en)}</b><span class="env">${esc(w.vi)}</span><small>Chạm để xem nghĩa</small></button>
      <div class="enb"><button type="button" class="ens" aria-label="Nghe đọc ${esc(w.en)}">🔊 Nghe</button><button type="button" class="enk" aria-pressed="${on}">${on ? '✓ Đã thuộc' : 'Thuộc rồi'}</button></div>
    </div>`;
  }
  function stats() {
    const L = learned.size, S = seenCount(), pct = Math.min(100, Math.round(L / GOAL * 100)), st = streak();
    const vong = pos >= N ? ` · đã đi hết một vòng kho (${N} từ), đang ôn vòng ${Math.floor(pos / N) + 1}` : '';
    return `<div class="enstat"><div class="enbar" role="progressbar" aria-valuemin="0" aria-valuemax="${GOAL}" aria-valuenow="${L}"><i style="width:${pct}%"></i></div>
      <p>Đã gặp <b>${S}</b> từ · đã thuộc <b>${L}</b>/${GOAL} từ mục tiêu năm · học liền <b>${st}</b> ngày${vong}.</p>
      <p class="small">Mỗi lần mở trang em đưa 5 từ mới. Ghé bếp mỗi ngày một lần là cả năm được chừng 1.800 từ – đủ đi chợ, đi chơi, nói chuyện với con cháu rồi các mom ạ 😜</p></div>`;
  }
  function review() {
    const pool = []; const upto = Math.max(0, Math.min(pos - BATCH, N));
    for (let k = 0; k < upto; k++) { const i = order[k]; if (!learned.has(i)) pool.push(i); }
    const r = []; while (r.length < 3 && pool.length) r.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return r;
  }
  function draw() {
    const box = $('#enDaily'); if (!box) return;
    const rv = review();
    box.innerHTML = `<div class="enhead"><h4>5 từ mới hôm nay</h4><button type="button" class="btn ghost" id="enNext">5 từ mới nữa</button></div>
      <div class="enrow">${batch.map(i => card(i)).join('')}</div>
      ${rv.length ? `<h4 class="enrv">Ôn lại từ đã gặp</h4><div class="enrow">${rv.map(i => card(i, 'rv')).join('')}</div>` : ''}
      <div class="row"><button type="button" class="btn ghost" id="enQuick">Đố nhanh từ đã học</button><span class="note" id="enQOut" aria-live="polite"></span></div>
      ${stats()}`;
  }
  function quiz() {
    const out = $('#enQOut'); const S = seenCount(); const pool = [];
    for (let k = 0; k < Math.max(S, BATCH); k++) pool.push(order[k % N]);
    const a = pool[Math.floor(Math.random() * pool.length)]; const opts = [a];
    while (opts.length < 3) { const r = order[Math.floor(Math.random() * N)]; if (!opts.includes(r)) opts.push(r); }
    opts.sort(() => Math.random() - .5);
    out.innerHTML = `“${esc(ALL[a].vi)}” tiếng Anh là gì? ` + opts.map(o => `<button type="button" class="qa" data-ok="${o === a}">${esc(ALL[o].en)}</button>`).join(' ');
  }
  document.addEventListener('click', e => {
    const box = $('#enDaily'); if (!box || !box.contains(e.target)) return;
    const w = e.target.closest('.enw'), i = w ? +w.dataset.i : -1;
    if (e.target.closest('.enf')) w.classList.toggle('flip');
    else if (e.target.closest('.ens')) say(ALL[i].en);
    else if (e.target.closest('.enk')) {
      learned.has(i) ? learned.delete(i) : learned.add(i); set('learned', [...learned]);
      const on = learned.has(i); w.classList.toggle('ok', on); const b = w.querySelector('.enk'); b.textContent = on ? '✓ Đã thuộc' : 'Thuộc rồi'; b.setAttribute('aria-pressed', on);
      box.querySelector('.enstat').outerHTML = stats();
    }
    else if (e.target.id === 'enNext') { batch = takeBatch(); draw(); teaser(); }
    else if (e.target.id === 'enQuick') quiz();
    else if (e.target.closest('.qa')) { const b = e.target.closest('.qa'); say(b.textContent); b.classList.add(b.dataset.ok === 'true' ? 'ok' : 'no'); if (b.dataset.ok === 'true') b.insertAdjacentText('afterend', ' Đúng rồi, giỏi quá!'); }
  });
  /* ô nhỏ trên đầu trang: 1 từ của hôm nay */
  function teaser() {
    const t = $('#enTeaser'); if (!t) return; const w = ALL[batch[0]];
    t.innerHTML = `<span class="lab">Từ tiếng Anh hôm nay</span> <b>${esc(w.en)}</b> <span class="vi">= ${esc(w.vi)}</span> <button type="button" class="tsay" aria-label="Nghe đọc">🔊</button> <a href="#cung-ngoai-ngu">Học 5 từ →</a>`;
    t.hidden = false;
    t.querySelector('.tsay').onclick = () => say(w.en);
  }
  /* chủ đề cho thẻ lật cũ: mỗi lần mở lấy 12 từ ngẫu nhiên của chủ đề */
  window.EN_TOPICS = (() => { const o = {}; Object.keys(TV).forEach(t => { const L = ALL.filter(w => w.t === t).map(w => [w.en, w.vi]); for (let i = L.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [L[i], L[j]] = [L[j], L[i]]; } o[t] = L.slice(0, 12); }); return o; })();
  const start = () => { draw(); teaser(); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
