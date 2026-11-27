(function(){
  if (document.getElementById('alamehan-tc-pill')) return;
  var p = String(location.pathname || '').replace(/\\/g, '/');
  var inIframe = window.self !== window.top;
  var inV2Subpage = p.indexOf('/atoz-mind/v2/pages/') !== -1;

  if (inIframe && !inV2Subpage) return;

  var isRepo = location.protocol === 'file:' && p.indexOf('/release/') === -1;
  var idxPos = p.indexOf('/archive/early-labs/');
  var depth = 1;
  if (idxPos !== -1) {
    var rel = p.slice(idxPos + '/archive/early-labs/'.length);
    depth = Math.max(0, rel.split('/').length - 1);
  }
  var prefix = depth === 0 ? './' : '../'.repeat(depth);
  var v5Href = prefix + (isRepo ? '../../WORKSHOP.html' : '../../index.html');
  var labsHref = prefix + 'index.html';

  var st = document.createElement('style');
  st.id = 'alamehan-tc-style';
  st.textContent =
    '#alamehan-tc-pill,#alamehan-tc-pill *{box-sizing:border-box;font-family:Figtree,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.2}' +
    '#alamehan-tc-pill{position:fixed;right:14px;bottom:14px;z-index:2147483640;display:flex;align-items:center;gap:8px;flex-wrap:wrap;max-width:calc(100vw - 28px);padding:6px 10px 6px 12px;border-radius:999px;background:rgba(15,23,42,.92);color:#f8fafc;border:1px solid rgba(148,163,184,.28);box-shadow:0 12px 32px -8px rgba(2,6,23,.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-size:12px}' +
    '#alamehan-tc-pill .atc-meta{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;font-weight:600;color:#e2e8f0}' +
    '#alamehan-tc-pill .atc-dot{width:7px;height:7px;border-radius:50%;background:#38bdf8;flex:none}' +
    '#alamehan-tc-pill a.atc-chip{display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 10px;border-radius:999px;text-decoration:none;font-size:11px;font-weight:700;color:#e2e8f0;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);transition:background .15s,color .15s;white-space:nowrap}' +
    '#alamehan-tc-pill a.atc-chip:hover{background:rgba(255,255,255,.2);color:#fff}' +
    '#alamehan-tc-pill a.atc-back{display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:999px;text-decoration:none;font-size:11px;font-weight:700;color:#fff;background:#2563eb;white-space:nowrap;transition:background .15s}' +
    '#alamehan-tc-pill a.atc-back:hover{background:#1d4ed8}' +
    '#alamehan-tc-pill button.atc-close{appearance:none;border:0;width:22px;height:22px;padding:0;border-radius:50%;background:transparent;color:#94a3b8;font-size:15px;cursor:pointer;display:inline-grid;place-items:center}' +
    '#alamehan-tc-pill button.atc-close:hover{background:rgba(255,255,255,.14);color:#fff}' +
    '#alamehan-tc-toast{position:fixed;left:50%;bottom:64px;transform:translateX(-50%);z-index:2147483645;padding:7px 14px;border-radius:999px;background:rgba(15,23,42,.95);color:#f8fafc;border:1px solid rgba(148,163,184,.32);font:600 12px/1.3 Figtree,system-ui,-apple-system,"Segoe UI",sans-serif;pointer-events:none;opacity:0;transition:opacity .18s}' +
    '#alamehan-tc-toast.show{opacity:1}' +
    '@media(max-width:540px){#alamehan-tc-pill{border-radius:16px;right:10px;bottom:10px;max-width:calc(100vw - 20px);padding:8px 10px}}';
  document.head.appendChild(st);

  var toast = document.createElement('div');
  toast.id = 'alamehan-tc-toast';
  document.body.appendChild(toast);
  var tTimer = null;
  window.__elabsToast = function(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(tTimer);
    tTimer = setTimeout(function(){ toast.classList.remove('show'); }, 2400);
  };

  var bar = document.createElement('aside');
  bar.id = 'alamehan-tc-pill';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Early Labs Archive Navigation');

  if (inIframe && inV2Subpage) {
    bar.innerHTML =
      '<span class="atc-meta"><span class="atc-dot" aria-hidden="true"></span><span>ATOZ Mind v2</span></span>' +
      '<a class="atc-back" href="../index.html">← All Topics</a>' +
      '<button type="button" class="atc-close" aria-label="Hide bar" title="Hide">×</button>';
  } else {
    bar.innerHTML =
      '<span class="atc-meta"><span class="atc-dot" aria-hidden="true"></span><span>Early Labs · 2021–2022</span></span>' +
      (inV2Subpage ? '<a class="atc-chip" href="../index.html">← Menu v2</a>' : '') +
      '<a class="atc-chip" href="' + labsHref + '">← Early Labs</a>' +
      '<a class="atc-back" href="' + v5Href + '">Portfolio V5</a>' +
      '<button type="button" class="atc-close" aria-label="Hide archive bar" title="Hide">×</button>';
  }
  bar.querySelector('button.atc-close').onclick = function(){ bar.remove(); };
  document.body.appendChild(bar);

  document.addEventListener('click', function(ev){
    var a = ev.target && ev.target.closest ? ev.target.closest('a') : null;
    if (!a) return;
    var h = a.getAttribute('href');
    if (h === '#') {
      ev.preventDefault();
      window.__elabsToast('This topic was marked Upcoming in the 2021–2022 archive.');
    }
  });
})();
