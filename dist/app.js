(() => {
'use strict';
const header=document.querySelector('.header'),menu=document.querySelector('.menu-toggle');
const nodes=[...document.querySelectorAll('[data-zh][data-en]')],navLinks=[...document.querySelectorAll('#navigation a')];
let currentLang='zh';
function updateDisclosureLabels(){document.querySelectorAll('details').forEach(d=>{const label=d.querySelector('.expand-label > span');if(label)label.textContent=currentLang==='en'?(d.open?'Close':'Read more'):(d.open?'收起':'展开');});}
function closeMenu(){header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');}
function setLanguage(next,persist=false){const lang=next==='en'?'en':'zh';currentLang=lang;document.documentElement.lang=lang==='zh'?'zh-CN':'en';for(const el of nodes)el.innerHTML=el.dataset[lang];document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));document.querySelector('#navigation').setAttribute('aria-label',lang==='zh'?'主要导航':'Main navigation');updateDisclosureLabels();window.dispatchEvent(new CustomEvent('portfolio-language',{detail:{lang}}));document.title=lang==='zh'?'张子墨 · Zimmer Zhang — 产品运营':'Zimmer Zhang — Product Operations';if(persist){try{localStorage.setItem('zimmer-editorial-language',lang);}catch{}const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);}}
let initial=new URLSearchParams(location.search).get('lang');if(!initial){try{initial=localStorage.getItem('zimmer-editorial-language');}catch{}}setLanguage(initial||'zh');
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>setLanguage(el.dataset.lang,true)));
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';header.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('menu-open')){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#"]');if(!link)return;closeMenu();const target=document.getElementById(link.getAttribute('href').slice(1));if(target instanceof HTMLDetailsElement)target.open=true;});
function revealHash(){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target instanceof HTMLDetailsElement){target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}}
window.addEventListener('hashchange',revealHash);revealHash();document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',updateDisclosureLabels));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;navLinks.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-15% 0px -65% 0px',threshold:0});document.querySelectorAll('section[id]').forEach(el=>observer.observe(el));}
})();
