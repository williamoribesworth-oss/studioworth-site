/* WORTH — site interactions (OnePage editorial) */
(function(){
  // ---- nav solid on scroll
  const nav=document.querySelector('.nav');
  const onScroll=()=>{ if(nav) nav.classList.toggle('solid',window.scrollY>40); };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  // ---- split headings into words (mask rise, staggered)
  document.querySelectorAll('.am').forEach(el=>{
    const text=el.textContent.trim();
    el.textContent='';
    text.split(/\s+/).forEach((word,i)=>{
      const mask=document.createElement('span'); mask.className='w';
      const inner=document.createElement('span');
      inner.textContent=word;
      inner.style.transitionDelay=(i*0.055)+'s';
      mask.appendChild(inner); el.appendChild(mask);
      el.appendChild(document.createTextNode(' '));
    });
  });

  // ---- reveal on scroll
  const io=new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.16,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv, .am').forEach(el=>io.observe(el));

  // ---- coverflow 3D (Nossos trabalhos) — clicável, não automático
  const cover=document.querySelector('[data-cover]');
  if(cover){
    const cards=[...cover.querySelectorAll('.cover-card')];
    const dotsWrap=cover.parentElement.querySelector('.cover-dots');
    let active=Math.floor(cards.length/2);
    let dots=[];
    if(dotsWrap){
      cards.forEach((_,i)=>{const d=document.createElement('i');d.addEventListener('click',()=>{active=i;render();});dotsWrap.appendChild(d);});
      dots=[...dotsWrap.children];
    }
    function render(){
      cards.forEach((c,i)=>{
        const o=i-active, ao=Math.abs(o);
        c.style.transform=`translate(-50%,-50%) translateX(${o*60}%) translateZ(${-ao*210}px) rotateY(${o*-31}deg) scale(${o===0?1.04:0.9})`;
        c.style.opacity = ao>2 ? 0 : 1;
        c.style.zIndex = 100-ao;
        c.style.pointerEvents = ao>2 ? 'none' : 'auto';
        c.classList.toggle('active',o===0);
      });
      dots.forEach((d,i)=>d.classList.toggle('on',i===active));
    }
    cards.forEach((c,i)=>{
      c.addEventListener('click',(e)=>{ if(i!==active){ e.preventDefault(); active=i; render(); } });
    });
    const next=cover.querySelector('.cnext');
    const prev=cover.querySelector('.cprev');
    if(next) next.addEventListener('click',()=>{active=Math.min(cards.length-1,active+1);render();});
    if(prev) prev.addEventListener('click',()=>{active=Math.max(0,active-1);render();});
    // drag / swipe
    let sx=null;
    cover.addEventListener('pointerdown',e=>sx=e.clientX);
    window.addEventListener('pointerup',e=>{
      if(sx===null)return; const dx=e.clientX-sx; sx=null;
      if(dx<-40&&active<cards.length-1){active++;render();}
      else if(dx>40&&active>0){active--;render();}
    });
    render();
  }

  // ---- services: hover troca a imagem da moldura
  const svx=document.querySelector('.svc-x');
  if(svx){
    const fImg=svx.querySelector('.svc-frame img');
    const fCap=svx.querySelector('.svc-frame .fcap');
    svx.querySelectorAll('.svc-row').forEach(row=>{
      row.addEventListener('mouseenter',()=>{
        if(fImg && row.dataset.img){ fImg.style.opacity=0;
          setTimeout(()=>{ fImg.src=row.dataset.img; fImg.style.opacity=1; },180); }
        if(fCap) fCap.textContent=row.dataset.name||'';
      });
    });
  }

  // ---- feed shuffle
  const fg=document.querySelector('[data-shuffle]');
  if(fg){
    const items=[...fg.children];
    for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));fg.appendChild(items[j]);items.splice(j,1);}
    items.forEach(it=>fg.appendChild(it));
  }

  // ---- chips + form (Web3Forms)
  document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('on')));
  const form=document.querySelector('form[data-web3]');
  if(form){
    const hidden=form.querySelector('input[name="Interesse"]');
    const chips=[...form.querySelectorAll('.chip')];
    const syncChips=()=>{ if(hidden) hidden.value=chips.filter(c=>c.classList.contains('on')).map(c=>c.textContent.trim()).join(', '); };
    chips.forEach(c=>c.addEventListener('click',syncChips));
    form.addEventListener('submit',async(e)=>{
      e.preventDefault(); syncChips();
      const btn=form.querySelector('button[type=submit]');
      const original=btn.innerHTML; btn.disabled=true; btn.textContent='Enviando…';
      try{
        const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
        const data=await res.json();
        if(data.success){
          btn.textContent='Recebido ✓';
          form.reset(); chips.forEach(c=>c.classList.remove('on')); syncChips();
        }else{
          btn.textContent='Erro — tente de novo'; btn.disabled=false;
          setTimeout(()=>{btn.innerHTML=original;},2600);
        }
      }catch(err){
        btn.textContent='Sem conexão — tente de novo'; btn.disabled=false;
        setTimeout(()=>{btn.innerHTML=original;},2600);
      }
    });
  }
})();
