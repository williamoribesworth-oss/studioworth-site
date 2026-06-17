(function () {
  var KEY = 'worth-consent';
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}

  function apply(granted) {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
    }
  }

  function save(granted) {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch (e) {}
    apply(granted);
  }

  if (stored === 'granted' || stored === 'denied') { return; }

  function buildBanner() {
    var css = '\
.worth-cookie{position:fixed;left:0;right:0;bottom:0;z-index:99999;display:flex;gap:18px;\
align-items:center;justify-content:center;flex-wrap:wrap;padding:16px clamp(16px,3.4vw,44px);\
background:#161616;border-top:1px solid rgba(255,255,255,.13);\
font-family:"Inter",system-ui,-apple-system,sans-serif;color:#f2f2f2;\
transform:translateY(100%);transition:transform .6s cubic-bezier(.22,.61,.36,1)}\
.worth-cookie.show{transform:translateY(0)}\
.worth-cookie p{margin:0;font-size:13px;line-height:1.5;max-width:620px;color:#cfcfd2}\
.worth-cookie a{color:#f2f2f2;text-decoration:underline;text-underline-offset:2px}\
.worth-cookie .acts{display:flex;gap:10px;flex-shrink:0}\
.worth-cookie button{font-family:inherit;font-size:12px;letter-spacing:.04em;text-transform:uppercase;\
padding:10px 18px;border-radius:5px;cursor:pointer;border:1px solid rgba(255,255,255,.25);\
background:transparent;color:#f2f2f2;transition:background .25s,color .25s}\
.worth-cookie button:hover{background:rgba(255,255,255,.1)}\
.worth-cookie button.ok{background:#f2f2f2;color:#161616;border-color:#f2f2f2}\
.worth-cookie button.ok:hover{background:#fff}\
@media(max-width:640px){.worth-cookie{flex-direction:column;align-items:flex-start;gap:12px}\
.worth-cookie .acts{width:100%}.worth-cookie button{flex:1}}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'worth-cookie';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Aviso de cookies');
    bar.innerHTML = '\
<p>Usamos cookies de analytics para entender como o site é usado e melhorar a experiência. \
Você pode aceitar ou recusar.</p>\
<div class="acts">\
<button type="button" class="no">Recusar</button>\
<button type="button" class="ok">Aceitar</button>\
</div>';
    document.body.appendChild(bar);
    setTimeout(function () { bar.classList.add('show'); }, 40);

    function close(granted) {
      save(granted);
      bar.classList.remove('show');
      setTimeout(function () { bar.remove(); }, 600);
    }
    bar.querySelector('.ok').addEventListener('click', function () { close(true); });
    bar.querySelector('.no').addEventListener('click', function () { close(false); });
  }

  if (document.body) { buildBanner(); }
  else { document.addEventListener('DOMContentLoaded', buildBanner); }
})();
