/* WORTH — site interactions + i18n PT/EN */
(function(){
  /* =========================================================
     i18n — dicionário PT → EN (o HTML é PT por padrão)
     ========================================================= */
  const T = {
    // nav / global
    "Orçamento":"Get a quote",
    // hero
    "Construímos marcas que valem mais":"We build brands worth more",
    // intro
    "Estúdio criativo de branding.":"A creative branding studio.",
    "Damos forma ao valor — onde a marca encontra a percepção e vira algo que as pessoas":"We give value its form — where a brand meets perception and becomes something people",
    "reconhecem, lembram e desejam.":"recognize, remember and desire.",
    // work
    "01 — Portfólio":"01 — Portfolio",
    "Nossos trabalhos":"Our work",
    "Ver case":"View case",
    "Trabalhe com a gente":"Work with us",
    "Identidade · Embalagens":"Identity · Packaging",
    "Identidade · Social":"Identity · Social",
    "Identidade · Ilustração":"Identity · Illustration",
    "Confeitaria artesanal":"Artisanal confectionery",
    "Energia em movimento":"Energy in motion",
    "Embalagens":"Packaging","Banco de Imagens":"Image Bank",
    "Tipografia":"Typography","Ilustração":"Illustration","Papelaria":"Stationery","Paleta":"Palette",
    "Transformamos o afeto de uma cozinha caseira em uma marca reconhecível à primeira mordida.":"We turned the warmth of a home kitchen into a brand recognizable at first bite.",
    "Uma identidade vibrante e elétrica, feita para mobilizar, reunir e colocar gente em ação.":"A vibrant, electric identity built to mobilize, gather and put people into action.",
    "Uma marca orgânica que respira natureza, lentidão e cuidado — um convite ao descanso.":"An organic brand that breathes nature, slowness and care — an invitation to rest.",
    // philosophy
    "02 — Filosofia":"02 — Philosophy",
    "A percepção cria valor — e a percepção pode ser projetada com intenção.":"Perception creates value — and perception can be designed with intention.",
    "Intenção":"Intention",
    "Nada é por acaso. Cada elemento carrega propósito.":"Nothing is by chance. Every element carries purpose.",
    "Forma":"Form",
    "Traduzimos ideias em algo visível, coerente e desejável.":"We translate ideas into something visible, coherent and desirable.",
    "Sistema":"System",
    "Não desenhamos peças. Desenhamos a lógica que as gera.":"We don't design pieces. We design the logic that generates them.",
    "Valor":"Value",
    "O resultado: marcas que valem — e que duram.":"The result: brands that are worth it — and that last.",
    // services
    "03 — Serviços":"03 — Services",
    "O que fazemos":"What we do",
    "Identidade Visual":"Visual Identity",
    "Criamos marcas que traduzem propósito, posicionamento e personalidade em uma identidade visual memorável — com a construção da marca e um brandbook completo para orientar sua aplicação em todos os pontos de contato.":"We create brands that translate purpose, positioning and personality into a memorable visual identity — including the brand build and a complete brandbook to guide its use across every touchpoint.",
    "Sistema de Design de Marca":"Brand Design System",
    "Desenvolvemos sistemas visuais que organizam e conectam todos os elementos da marca: tipografia, cores, padrões, grids, iconografia e diretrizes, estruturados para garantir consistência e escalabilidade.":"We develop visual systems that organize and connect every brand element: typography, color, patterns, grids, iconography and guidelines — structured for consistency and scalability.",
    "Banco de Imagens com IA":"AI Image Bank",
    "Produzimos bancos de imagens exclusivos com inteligência artificial — cenários, pessoas, produtos e composições alinhados à identidade da marca, com produção visual praticamente ilimitada.":"We produce exclusive image banks with artificial intelligence — scenes, people, products and compositions aligned to the brand identity, with virtually unlimited visual production.",
    "Criamos conceitos visuais para campanhas, lançamentos, eventos e ações promocionais. Key visuals que fortalecem a percepção da marca e garantem unidade em todos os materiais.":"We create visual concepts for campaigns, launches, events and promotions — key visuals that strengthen brand perception and ensure unity across every material.",
    "Sites & Landing Pages":"Websites & Landing Pages",
    "Projetamos experiências digitais que unem design, estratégia e performance — websites e landing pages alinhados aos objetivos da marca e às necessidades de conversão.":"We design digital experiences that unite design, strategy and performance — websites and landing pages aligned to brand goals and conversion needs.",
    "Apresentações Corporativas":"Corporate Presentations",
    "Transformamos informações em apresentações claras, estratégicas e visualmente impactantes — narrativas que ajudam marcas, equipes e líderes a comunicar melhor suas ideias.":"We turn information into clear, strategic and visually striking presentations — narratives that help brands, teams and leaders communicate their ideas better.",
    "Filmes & Conteúdo com IA":"AI Films & Content",
    "Produzimos vídeos, animações e conteúdos audiovisuais com IA integrada à direção criativa — uma nova forma de criar filmes de alta qualidade com mais agilidade e possibilidades.":"We produce videos, animation and audiovisual content with AI integrated into creative direction — a new way to make high-quality films with more agility and possibility.",
    "Design de Embalagens":"Packaging Design",
    "Desenvolvemos embalagens que unem estratégia, estética e presença de marca — soluções que valorizam o produto, fortalecem o posicionamento e geram destaque no ponto de venda.":"We develop packaging that unites strategy, aesthetics and brand presence — solutions that elevate the product, strengthen positioning and stand out at the point of sale.",
    // feed
    "04 — Estúdio em movimento":"04 — Studio in motion",
    "No dia a dia":"Day to day",
    "Bastidores, processos e últimos trabalhos. Um fluxo constante, sem ordem fixa — como a criação acontece.":"Behind the scenes, process and latest work. A constant flow, no fixed order — the way creation happens.",
    "Nota do estúdio":"Studio note","Em construção":"In progress",
    "Menos, melhor. Sempre.":"Less, but better. Always.",
    "Percepção cria valor.":"Perception creates value.",
    "Novos casos em breve.":"New cases soon.",
    "Estudo de luz":"Light study","Tratamento de imagem":"Image treatment",
    "Curadoria de referências":"Reference curation","Construção de símbolo":"Symbol construction",
    "Silhueta e contraste":"Silhouette & contrast","Tokens e componentes":"Tokens & components",
    "Grid e composição":"Grid & composition","Paleta e atmosfera":"Palette & atmosphere",
    "Estudo de movimento":"Motion study","No estúdio":"In the studio","Prancheta":"Drawing board",
    "Em movimento":"In motion","Construção":"Build","Composição":"Composition","Estudo":"Study","Detalhe":"Detail",
    // contact
    "05 — Vamos conversar":"05 — Let's talk",
    "Conte qual é o próximo desafio":"Tell us your next challenge",
    "Nome":"Name","Empresa":"Company","E-mail":"Email","Telefone":"Phone",
    "Interesse":"Interest","Sobre o projeto":"About the project",
    "Design de Marca":"Brand Design",
    "Enviar pedido":"Send request",
    "Respondemos em até 2 dias úteis.":"We reply within 2 business days.",
    "Obrigado!":"Thank you!","Vamos entrar em contato.":"We'll be in touch.",
    "Recebemos sua mensagem e respondemos em até 2 dias úteis.":"We got your message and will reply within 2 business days.",
    "Marcas não acontecem. São projetadas.":"Brands don't happen. They're designed.",
    "Rio Grande do Sul, BR — Atendimento global":"Rio Grande do Sul, BR — Global service",
    // placeholders
    "Seu nome":"Your name","Marca / empresa":"Brand / company",
    "voce@email.com":"you@email.com","Conte o que sua marca precisa...":"Tell us what your brand needs...",
    // footer
    "Navegação":"Navigation","Contato":"Contact","Serviços":"Services",
    "Estúdio criativo de branding. Construindo marcas que valem mais.":"A creative branding studio. Building brands worth more.",
    // ---- case pages
    "Voltar aos trabalhos":"Back to work",
    "Case · Identidade Visual":"Case · Visual Identity",
    "Case · Identidade & Social":"Case · Identity & Social",
    "Case · Identidade & Ilustração":"Case · Identity & Illustration",
    "Doce como estar em casa.":"Sweet like being home.",
    "Mais que um nome, um chamado.":"More than a name, a calling.",
    "Resting Place — um convite ao descanso.":"Resting Place — an invitation to rest.",
    "Cliente":"Client","Entrega":"Deliverables","Ano":"Year",
    "Identidade · Embalagens · Banco de imagens · Brandbook":"Identity · Packaging · Image bank · Brandbook",
    "Identidade · Direção de Arte · Social · Merch":"Identity · Art Direction · Social · Merch",
    "Identidade · Ilustração · Direção de Arte":"Identity · Illustration · Art Direction",
    "A Casa Li nasceu da cozinha de Liandra Oribes — bolos, brownies e tortas feitos à mão, com o afeto de quem recebe em casa. O desafio foi transformar esse carinho artesanal em uma marca reconhecível à primeira mordida.":"Casa Li was born in Liandra Oribes' kitchen — cakes, brownies and pies made by hand, with the warmth of someone welcoming you home. The challenge was to turn that artisanal care into a brand recognizable at first bite.",
    "Criamos uma identidade calorosa e doméstica: um logotipo manuscrito que respira proximidade, uma paleta de azul sereno e creme, e um conjunto de ícones — xícaras, batedores, flores e corações — que contam a história de uma confeitaria feita com as mãos.":"We created a warm, homey identity: a handwritten logotype that breathes closeness, a palette of serene blue and cream, and a set of icons — cups, whisks, flowers and hearts — that tell the story of a confectionery made by hand.",
    "O sistema se estende às embalagens (caixas, potes e sacolas), à comunicação e a um banco de imagens próprio dos produtos, garantindo que cada ponto de contato carregue o mesmo aconchego. O resultado é uma marca que entrega mais do que o doce: entrega a sensação de estar em casa.":"The system extends to packaging (boxes, jars and bags), communication and a dedicated product image bank, ensuring every touchpoint carries the same coziness. The result is a brand that delivers more than the sweet: it delivers the feeling of being home.",
    "Agir é energia em movimento — uma marca feita para mobilizar, reunir e colocar gente em ação, com a vibração de um evento e a urgência de um manifesto.":"Agir is energy in motion — a brand made to mobilize, gather and put people into action, with the vibe of an event and the urgency of a manifesto.",
    "Construímos uma identidade vibrante e expansiva: um símbolo dinâmico, uma paleta neon de verdes, azuis e magentas, e uma tipografia firme (Neutral Face + Archivo Grotesk) que sustenta mensagens de impacto.":"We built a vibrant, expansive identity: a dynamic symbol, a neon palette of greens, blues and magentas, and bold typography (Neutral Face + Archivo Grotesk) that carries high-impact messaging.",
    "O sistema foi pensado para viver no mundo real e nas telas — do merch da equipe (camisetas STAFF, pulseiras) aos templates de redes sociais — sempre com a mesma pegada elétrica. Uma marca que não pede licença: ela chama para a ação.":"The system was designed to live in the real world and on screens — from team merch (STAFF tees, wristbands) to social templates — always with the same electric edge. A brand that doesn't ask permission: it calls to action.",
    "Sunem Resting Place é um convite ao descanso — uma marca que respira natureza, lentidão e cuidado. Um lugar para chegar, respirar e recarregar.":"Sunem Resting Place is an invitation to rest — a brand that breathes nature, slowness and care. A place to arrive, breathe and recharge.",
    "Desenhamos uma identidade orgânica e acolhedora: ilustrações botânicas feitas à mão, uma paleta terrosa de terracota, verde-folha e areia, e uma tipografia suave que transmite serenidade.":"We designed an organic, welcoming identity: hand-drawn botanical illustrations, an earthy palette of terracotta, leaf green and sand, and a soft typography that conveys serenity.",
    "Cada elemento foi pensado para evocar a sensação de ficar — da papelaria às embalagens. Uma marca calma, natural e atemporal, como o descanso que ela representa.":"Every element was designed to evoke the feeling of staying — from stationery to packaging. A calm, natural and timeless brand, like the rest it represents.",
    "Próximo · Agir":"Next · Agir","Próximo · Sunem":"Next · Sunem","Próximo · Casa Li":"Next · Casa Li"
  };

  function translateTextNodes(root,en){
    const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
      if(!n.nodeValue.trim())return NodeFilter.FILTER_REJECT;
      const p=n.parentNode; if(!p)return NodeFilter.FILTER_REJECT;
      const tag=p.nodeName;
      if(tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT')return NodeFilter.FILTER_REJECT;
      if(p.closest&&p.closest('.am'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    const nodes=[];while(w.nextNode())nodes.push(w.currentNode);
    nodes.forEach(n=>{
      if(n.__pt===undefined)n.__pt=n.nodeValue;
      const key=n.__pt.trim();
      if(en){const t=T[key];if(t!=null)n.nodeValue=n.__pt.replace(key,t);}
      else n.nodeValue=n.__pt;
    });
  }
  function applyLang(lang){
    const en=(lang==='en');
    document.querySelectorAll('.am').forEach(el=>{
      if(el.__ampt===undefined)el.__ampt=el.textContent.trim();
      const pt=el.__ampt; el.textContent= en?(T[pt]||pt):pt;
    });
    translateTextNodes(document.body,en);
    document.querySelectorAll('[placeholder]').forEach(el=>{
      if(el.__ph===undefined)el.__ph=el.getAttribute('placeholder');
      el.setAttribute('placeholder', en?(T[el.__ph]||el.__ph):el.__ph);
    });
    document.documentElement.lang= en?'en':'pt-BR';
  }

  /* ---- entrada animada: split palavra a palavra ---- */
  function splitAm(el){
    const text=el.textContent.trim(); el.textContent='';
    text.split(/\s+/).forEach((word,i)=>{
      const mask=document.createElement('span');mask.className='w';
      const inner=document.createElement('span');inner.textContent=word;
      inner.style.transitionDelay=(i*0.055)+'s';
      mask.appendChild(inner);el.appendChild(mask);el.appendChild(document.createTextNode(' '));
    });
  }
  const splitAmAll=()=>document.querySelectorAll('.am').forEach(splitAm);

  /* ---- aplica idioma salvo, depois split ---- */
  let lang = localStorage.getItem('worth-lang')||'pt';
  applyLang(lang);
  splitAmAll();

  /* ---- seletor de idioma ---- */
  function updateLangUI(){
    document.querySelectorAll('.langtog .lt').forEach(s=>s.classList.toggle('on', s.dataset.l===lang));
  }
  updateLangUI();
  const tog=document.querySelector('.langtog');
  if(tog){
    tog.addEventListener('click',()=>{
      lang = lang==='en'?'pt':'en';
      localStorage.setItem('worth-lang',lang);
      applyLang(lang);
      splitAmAll();
      document.querySelectorAll('.am').forEach(el=>el.classList.add('in'));
      updateLangUI();
    });
  }

  /* ---- nav solid on scroll ---- */
  const nav=document.querySelector('.nav');
  const onScroll=()=>{ if(nav) nav.classList.toggle('solid',window.scrollY>40); };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  /* ---- reveal ---- */
  const io=new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.14,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv, .am').forEach(el=>io.observe(el));

  /* ---- intro: carrossel 3D automático ---- */
  const rota=document.querySelector('[data-rota]');
  if(rota){
    const cards=[...rota.querySelectorAll('.rota-card')];const N=cards.length;let active=0;
    const render=()=>{cards.forEach((c,i)=>{let o=i-active;if(o>N/2)o-=N;if(o<-N/2)o+=N;const ao=Math.abs(o);
      c.style.transform=`translate(-50%,-50%) translateX(${o*56}%) translateZ(${-ao*170}px) rotateY(${o*-26}deg) scale(${o===0?1:.84})`;
      c.style.opacity=ao>2?0:(o===0?1:.5);c.style.zIndex=100-ao;});};
    render();let timer=setInterval(()=>{active=(active+1)%N;render();},2600);
    rota.addEventListener('mouseenter',()=>clearInterval(timer));
    rota.addEventListener('mouseleave',()=>{timer=setInterval(()=>{active=(active+1)%N;render();},2600);});
  }

  /* ---- stacking cards (Nossos trabalhos): profundidade ao empilhar ---- */
  const stack=document.querySelector('[data-stack]');
  if(stack && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    const cards=[...stack.querySelectorAll('.stk-card')];
    let ticking=false;
    const update=()=>{
      ticking=false;
      cards.forEach((card,i)=>{
        const next=cards[i+1];
        if(!next){card.style.transform='';return;}
        const pin=parseFloat(getComputedStyle(card).top)||0;
        const h=card.offsetHeight||1;
        // quanto o próximo card já cobriu este (0 → 1)
        const covered=Math.min(1,Math.max(0,(pin+h-next.getBoundingClientRect().top)/h));
        const s=1-covered*0.05;
        card.style.transform=`scale(${s}) translateY(${covered*-10}px)`;
        card.style.opacity=1-covered*0.18;
      });
    };
    const onScrollStack=()=>{if(!ticking){ticking=true;requestAnimationFrame(update);}};
    window.addEventListener('scroll',onScrollStack,{passive:true});
    window.addEventListener('resize',onScrollStack);
    update();
  }

  /* ---- coverflow 3D ---- */
  const cover=document.querySelector('[data-cover]');
  if(cover){
    const cards=[...cover.querySelectorAll('.cover-card')];
    const dotsWrap=cover.parentElement.querySelector('.cover-dots');
    let active=Math.floor(cards.length/2);let dots=[];
    if(dotsWrap){cards.forEach((_,i)=>{const d=document.createElement('i');d.addEventListener('click',()=>{active=i;render();});dotsWrap.appendChild(d);});dots=[...dotsWrap.children];}
    function render(){cards.forEach((c,i)=>{const o=i-active,ao=Math.abs(o);
      c.style.transform=`translate(-50%,-50%) translateX(${o*60}%) translateZ(${-ao*210}px) rotateY(${o*-31}deg) scale(${o===0?1.04:0.9})`;
      c.style.opacity=ao>2?0:1;c.style.zIndex=100-ao;c.style.pointerEvents=ao>2?'none':'auto';c.classList.toggle('active',o===0);});
      dots.forEach((d,i)=>d.classList.toggle('on',i===active));}
    cards.forEach((c,i)=>c.addEventListener('click',(e)=>{if(i!==active){e.preventDefault();active=i;render();}}));
    const next=cover.querySelector('.cnext'),prev=cover.querySelector('.cprev');
    if(next)next.addEventListener('click',()=>{active=Math.min(cards.length-1,active+1);render();});
    if(prev)prev.addEventListener('click',()=>{active=Math.max(0,active-1);render();});
    let sx=null;cover.addEventListener('pointerdown',e=>sx=e.clientX);
    window.addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;sx=null;
      if(dx<-40&&active<cards.length-1){active++;render();}else if(dx>40&&active>0){active--;render();}});
    render();
  }

  /* ---- services: moldura com mídia (vídeo/img) auto-rotação + hover ---- */
  const svx=document.querySelector('.svc-x');
  if(svx){
    const fImg=svx.querySelector('.svf-img');const fVid=svx.querySelector('.svf-vid');const fCap=svx.querySelector('.fcap');
    const rows=[...svx.querySelectorAll('.svc-row')];
    function show(row){
      if(!row)return; const media=row.dataset.media, type=row.dataset.mtype;
      if(fCap)fCap.textContent=row.dataset.name||'';
      if(type==='video'&&fVid){
        if(fVid.getAttribute('src')!==media)fVid.src=media;
        fImg.style.opacity=0; fVid.style.opacity=1; fVid.play().catch(()=>{});
      }else if(fImg){
        if(fVid){fVid.style.opacity=0; try{fVid.pause();}catch(e){}}
        if(fImg.getAttribute('src')!==media){fImg.style.opacity=0;setTimeout(()=>{fImg.src=media;fImg.style.opacity=1;},160);}
        else fImg.style.opacity=1;
      }
    }
    let idx=0;
    const tick=()=>{idx=(idx+1)%rows.length;show(rows[idx]);};
    let timer=setInterval(tick,2800);
    rows.forEach((row,i)=>{
      row.addEventListener('mouseenter',()=>{clearInterval(timer);idx=i;show(row);});
      row.addEventListener('mouseleave',()=>{if(!rows.some(r=>r.classList.contains('open'))){clearInterval(timer);timer=setInterval(tick,2800);}});
      row.addEventListener('click',()=>{
        const wasOpen=row.classList.contains('open');
        rows.forEach(r=>r.classList.remove('open'));
        if(!wasOpen)row.classList.add('open');
        clearInterval(timer); idx=i; show(row);
      });
    });
    show(rows[0]);
  }

  /* ---- box de vidro seguindo o cursor (CTA por seção) ---- */
  const cta=document.querySelector('.cursor-cta');
  if(cta && matchMedia('(hover:hover) and (pointer:fine)').matches){
    const box=cta.querySelector('.cca-box');
    let mx=innerWidth/2,my=innerHeight/2,tx=mx,ty=my;
    document.querySelectorAll('[data-cta]').forEach(sec=>{
      sec.addEventListener('mouseenter',()=>{box.textContent=(lang==='en'&&sec.dataset.ctaEn)?sec.dataset.ctaEn:sec.dataset.cta;cta.classList.add('show');});
      sec.addEventListener('mouseleave',()=>cta.classList.remove('show'));
    });
    window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;},{passive:true});
    (function loop(){tx+=(mx-tx)*.2;ty+=(my-ty)*.2;cta.style.transform=`translate(${tx}px,${ty}px)`;requestAnimationFrame(loop);})();
  }

  /* ---- lightbox do feed (clicar abre a imagem) ---- */
  const lb=document.getElementById('lightbox');
  if(lb){
    const lbImg=lb.querySelector('img');
    const open=(src)=>{lbImg.src=src;lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';};
    const close=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';};
    document.querySelectorAll('.feed-item').forEach(item=>{
      const img=item.querySelector('img'); if(!img)return;
      item.addEventListener('click',e=>{e.preventDefault();open(img.currentSrc||img.src);});
    });
    lb.addEventListener('click',close);
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  }

  /* ---- feed shuffle ---- */
  const fg=document.querySelector('[data-shuffle]');
  if(fg){const items=[...fg.children];for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));fg.appendChild(items[j]);items.splice(j,1);}items.forEach(it=>fg.appendChild(it));}

  /* ---- chips + form (Web3Forms) ---- */
  document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('on')));
  const form=document.querySelector('form[data-web3]');
  if(form){
    const hidden=form.querySelector('input[name="Interesse"]');
    const chips=[...form.querySelectorAll('.chip')];
    const syncChips=()=>{ if(hidden) hidden.value=chips.filter(c=>c.classList.contains('on')).map(c=>c.textContent.trim()).join(', '); };
    chips.forEach(c=>c.addEventListener('click',syncChips));
    form.addEventListener('submit',async(e)=>{
      e.preventDefault(); syncChips();
      const btn=form.querySelector('button[type=submit]');const original=btn.innerHTML;btn.disabled=true;btn.textContent='…';
      try{
        const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
        const data=await res.json();
        if(data.success){form.reset();form.style.display='none';const ty=form.parentElement.querySelector('.thankyou');if(ty)ty.hidden=false;}
        else{btn.textContent='Erro';btn.disabled=false;setTimeout(()=>{btn.innerHTML=original;},2400);}
      }catch(err){btn.textContent='Erro';btn.disabled=false;setTimeout(()=>{btn.innerHTML=original;},2400);}
    });
  }
})();
