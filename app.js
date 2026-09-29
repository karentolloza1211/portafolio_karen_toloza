const urls = {
  email: 'karentolloza1211@gmail.com',
  github: 'https://github.com/karentolloza1211',
  repos: 'https://github.com/karentolloza1211?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/karen-toloza-3b482b304/',
  cv: 'https://drive.google.com/file/d/1IJlIua9XryCxrJGuD7miTXvb5Njm1Mh-/view?usp=drive_link'
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const iconPaths = {
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M20 15a8 8 0 0 1-11-11A8 8 0 1 0 20 15Z"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  close:'<path d="M5 5l14 14M19 5 5 19"/>',
  github:'<path d="M9 19c-4 1-4-2-6-2m12 4v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.8 4.8 0 0 0 18.4 6 4.5 4.5 0 0 0 18.3 3S17.2 2.7 15 4.3a11 11 0 0 0-6 0C6.8 2.7 5.7 3 5.7 3A4.5 4.5 0 0 0 5.6 6 4.8 4.8 0 0 0 4.3 9.3c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 9 17.6V21"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/>',
  pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  up:'<path d="m5 14 7-7 7 7M12 7v14"/>',
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  file:'<path d="M6 2h8l4 4v16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 0v5h5M8 12h8M8 16h8"/>',
  linkedin:'<rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v8M7 7v.1M11 18v-8h3v1.5a3 3 0 0 1 5 2.5v4M14 13v5"/>'
};
const icon = name => `<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${iconPaths[name]}</svg></span>`;
const external = (url, label, cls='btn') => `<a class="${cls}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const heading = (title, subtitle) => `<div class="section-heading reveal"><h2>${escapeHTML(title)}</h2><p>${escapeHTML(subtitle)}</p></div>`;
let lang = localStorage.getItem('karen-lang') === 'en' ? 'en' : 'es';
let theme = localStorage.getItem('karen-theme') === 'light' ? 'light' : 'dark';
function applyTheme(){document.documentElement.classList.toggle('dark', theme==='dark')}
applyTheme();
function render(){
  const t=translations[lang]; document.documentElement.lang=lang;
  const nav=[['inicio',t.nav.home],['sobre-mi',t.nav.about],['aprendizaje',t.nav.learning],['habilidades',t.nav.skills],['proyectos',t.nav.projects],['contacto',t.nav.contact]];
  document.getElementById('app').innerHTML=`
  <header id="header"><nav class="wrap" aria-label="Principal"><a href="#inicio" class="brand"><span class="gradient-text">Karen</span> Toloza</a><div class="navlinks">${nav.map(([id,label])=>`<a href="#${id}">${escapeHTML(label)}</a>`).join('')}</div><div class="nav-actions"><button class="icon-btn lang" id="lang" aria-label="Cambiar idioma / Switch language">${icon('globe')} ${lang==='es'?'EN':'ES'}</button><button class="icon-btn" id="theme" aria-label="${theme==='dark'?'Modo claro':'Modo oscuro'}" title="${theme==='dark'?'Modo claro':'Modo oscuro'}">${icon(theme==='dark'?'sun':'moon')}</button><button class="icon-btn menu-btn" id="menu" aria-label="Menú" aria-expanded="false">${icon('menu')}</button></div></nav></header>
  <main>
  <section class="hero" id="inicio"><div class="wrap hero-layout"><div><span class="eyebrow">✦ ${escapeHTML(t.hero.role)}</span><h1>Karen Sugey<br><span class="gradient-text">Toloza Ortiz</span></h1><p class="role muted">${escapeHTML(t.hero.role2)}</p><p class="quote muted">${escapeHTML(t.hero.quote)}</p><p class="intro muted">${escapeHTML(t.hero.desc)}</p><p class="location muted">${icon('pin')} ${escapeHTML(t.hero.location)}</p><div class="actions"><a class="btn primary" href="#proyectos">${icon('arrow')} ${escapeHTML(t.hero.ctaProjects)}</a>${external(urls.github,icon('github')+' '+escapeHTML(t.hero.ctaGithub))}${external(urls.cv,icon('file')+' '+escapeHTML(t.hero.ctaCv))}</div></div><div class="portrait" role="img" aria-label="Monograma KT de Karen Toloza"><div class="portrait-inner"><strong class="gradient-text">KT</strong><small>Karen Toloza</small></div></div></div></section>
  <section id="sobre-mi"><div class="wrap">${heading(t.about.title,t.about.subtitle)}<div class="grid two"><div class="card reveal"><p>${escapeHTML(t.about.p1)}</p><p>${escapeHTML(t.about.p2)}</p><div class="actions" style="margin-top:25px">${external(urls.github,icon('github')+' GitHub')}${external(urls.linkedin,icon('linkedin')+' LinkedIn')}</div></div><div class="grid">${t.about.traits.map(x=>`<article class="card reveal"><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.desc)}</p></article>`).join('')}</div></div><div class="cycle reveal">${t.about.cycle.map((x,i)=>`${i?'<b>→</b>':''}<span>${escapeHTML(x)}</span>`).join('')}</div></div></section>
  <section id="aprendizaje"><div class="narrow">${heading(t.process.title,t.process.subtitle)}${t.process.steps.map((x,i)=>`<button class="step ${i===0?'active':''}" type="button"><span class="number">${escapeHTML(x.n)}</span><span><strong>${escapeHTML(x.title)}</strong><small>${escapeHTML(x.desc)}</small></span></button>`).join('')}</div></section>
  <section><div class="wrap">${heading(t.interests.title,t.interests.subtitle)}<div class="grid three">${t.interests.items.map((x,i)=>`<article class="card reveal"><div class="interest-mark" aria-hidden="true">${['⌘','◇','▤','≡','▥','✳','{ }','✦','▣'][i]}</div><h3>${escapeHTML(x.title)}</h3><p>${escapeHTML(x.desc)}</p></article>`).join('')}</div></div></section>
  <section id="habilidades"><div class="wrap">${heading(t.skills.title,t.skills.subtitle)}<div class="grid three">${['applied','practicing','learning'].map(level=>`<article class="card reveal"><span class="skill-label">${escapeHTML(t.skills.categories[level])}</span><ul class="skill-list">${t.skills.items.filter(x=>x.level===level).map(x=>`<li>${escapeHTML(x.name)}</li>`).join('')}</ul></article>`).join('')}</div></div></section>
  <section id="proyectos"><div class="wrap">${heading(t.projects.title,t.projects.subtitle)}<div class="grid three">${t.projects.items.map(x=>`<article class="card project reveal"><div class="project-banner"></div><div class="project-body"><h3>${escapeHTML(x.name)}</h3><p>${escapeHTML(x.desc)}</p><div class="tags">${x.tech.map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div><div class="learned"><b>${escapeHTML(t.projects.learningTag)}</b><p>${escapeHTML(x.learned)}</p></div>${external(x.url,icon('github')+' '+escapeHTML(t.projects.viewGithub))}</div></article>`).join('')}</div><div class="center">${external(urls.repos,escapeHTML(t.projects.viewAll)+' '+icon('arrow'),'btn primary')}</div></div></section>
  <section class="feature-band"><div class="narrow"><h2 class="gradient-text">${escapeHTML(t.githubCta.title)}</h2><p>${escapeHTML(t.githubCta.desc)}</p>${external(urls.repos,icon('github')+' '+escapeHTML(t.githubCta.button),'btn primary')}</div></section>
  <section><div class="narrow resume-band"><div class="resume-copy"><h2>${escapeHTML(t.cv.title)}</h2><p>${escapeHTML(t.cv.desc)}</p></div><div class="actions">${external(urls.cv,icon('file')+' '+escapeHTML(t.cv.view))}${external(urls.cv,escapeHTML(t.cv.download)+' '+icon('arrow'),'btn primary')}</div></div></section>
  <section id="contacto"><div class="narrow">${heading(t.contact.title,t.contact.subtitle)}<div class="grid two"><div>${[[`mailto:${urls.email}`,icon('mail'),urls.email],[urls.github,icon('github'),'GitHub'],[urls.linkedin,icon('linkedin'),'LinkedIn']].map(([url,ico,label])=>`<a class="card contact-link" href="${escapeHTML(url)}" ${url.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${ico}<strong>${escapeHTML(label)}</strong></a>`).join('')}</div><form id="contact-form" class="card"><label for="name">${escapeHTML(t.contact.name)}</label><input id="name" name="name" maxlength="100" placeholder="${escapeHTML(t.contact.namePh)}" required><label for="email">${escapeHTML(t.contact.email)}</label><input id="email" name="email" type="email" maxlength="255" placeholder="${escapeHTML(t.contact.emailPh)}" required><label for="message">${escapeHTML(t.contact.message)}</label><textarea id="message" name="message" maxlength="1000" placeholder="${escapeHTML(t.contact.messagePh)}" required></textarea><button class="btn primary" type="submit">${icon('mail')} ${escapeHTML(t.contact.send)}</button><p class="note">${escapeHTML(t.contact.note)}</p></form></div></div></section>
  </main><footer><div class="wrap footer-inner"><div><p><strong>${escapeHTML(t.footer.made)}</strong></p><small>${escapeHTML(t.footer.rights)}</small></div><div class="socials">${external(urls.github,icon('github'),'icon-btn')}${external(urls.linkedin,icon('linkedin'),'icon-btn')}<a class="icon-btn" href="mailto:${urls.email}" aria-label="Correo">${icon('mail')}</a></div></div></footer><a id="top" class="icon-btn" href="#inicio" aria-label="${escapeHTML(t.backTop)}" title="${escapeHTML(t.backTop)}">${icon('up')}</a>`;
  document.querySelector('#lang').onclick=()=>{lang=lang==='es'?'en':'es';localStorage.setItem('karen-lang',lang);render()};
  document.querySelector('#theme').onclick=()=>{theme=theme==='dark'?'light':'dark';localStorage.setItem('karen-theme',theme);applyTheme();render()};
  document.querySelector('#menu').onclick=()=>{const header=document.querySelector('#header');const open=header.classList.toggle('open');document.querySelector('#menu').setAttribute('aria-expanded',String(open));document.querySelector('#menu').innerHTML=icon(open?'close':'menu')};
  document.querySelectorAll('.navlinks a').forEach(a=>a.onclick=()=>document.querySelector('#header').classList.remove('open'));
  document.querySelectorAll('.step').forEach(el=>el.onclick=()=>{document.querySelector('.step.active')?.classList.remove('active');el.classList.add('active')});
  document.querySelector('#contact-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent(`Portafolio — ${String(f.get('name')).slice(0,100)}`);const body=encodeURIComponent(`${String(f.get('message')).slice(0,1000)}\n\n${f.get('name')}\n${f.get('email')}`);window.location.href=`mailto:${urls.email}?subject=${subject}&body=${body}`};
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  syncScroll();
}
function syncScroll(){document.querySelector('#header').classList.toggle('scrolled',scrollY>24);document.querySelector('#top').classList.toggle('visible',scrollY>500)}
window.addEventListener('scroll',syncScroll,{passive:true});
render();
