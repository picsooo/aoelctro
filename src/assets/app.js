(function(){
const A=window.AO,S=A.shop,IMG='../img/',V=document.body.dataset.v;
const st={get(k,d){try{const v=localStorage.getItem('ao_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('ao_'+k,JSON.stringify(v))}catch(e){}}};
let L=st.get('lang','ar'),cart=st.get('cart',[]);
const T={
home:["الرئيسية","Accueil"],shop:["المتجر","Boutique"],about:["المحل","Le magasin"],contact:["اتصل بنا","Contact"],
search:["ابحث عن جهاز، علامة...","Rechercher un appareil, une marque…"],
heroK:["غرداية · توصيل لـ 58 ولاية","Ghardaïa · Livraison 58 wilayas"],
heroT:["كل ما يحتاجه منزلك<br>في مكان واحد","Tout ce dont votre maison a besoin,<br>au même endroit"],
heroP:["أجهزة كهرومنزلية أصلية بضمان، أسعار مدروسة، و الدفع عند الاستلام.","Électroménager d'origine garanti, prix justes, paiement à la livraison."],
cta1:["تسوق الآن","Voir la boutique"],cta2:["اطلب عبر واتساب","Commander sur WhatsApp"],
cats:["الأقسام","Nos rayons"],best:["الأكثر طلباً","Les plus demandés"],all:["عرض الكل","Tout voir"],
r1:["توصيل لـ 58 ولاية","Livraison 58 wilayas"],r1s:["مجاني داخل غرداية","Gratuite à Ghardaïa"],
r2:["الدفع عند الاستلام","Paiement à la livraison"],r2s:["تدفع لما تستلم","Vous payez à réception"],
r3:["ضمان حتى 24 شهر","Garantie jusqu'à 24 mois"],r3s:["على أغلب الأجهزة","Sur la plupart des produits"],
r4:["خدمة ما بعد البيع","Service après-vente"],r4s:["قطع غيار متوفرة","Pièces disponibles"],
add:["أضف إلى السلة","Ajouter au panier"],buy:["اشتري الآن","Acheter maintenant"],wa:["اطلب عبر واتساب","Commander via WhatsApp"],
out:["نفذت الكمية","Rupture de stock"],notify:["أعلمني عند التوفر","M'avertir du retour"],
cart:["سلة المشتريات","Votre panier"],empty:["السلة فارغة","Votre panier est vide"],sub:["المجموع","Sous-total"],order:["إتمام الطلب","Commander"],
ship:["التوصيل","Livraison"],total:["الإجمالي","Total"],free:["مجاني","Offert"],
name:["الاسم و اللقب","Nom et prénom"],tel:["رقم الهاتف","Téléphone"],wil:["الولاية","Wilaya"],com:["البلدية","Commune"],adr:["العنوان","Adresse"],note:["ملاحظة (اختياري)","Note (facultatif)"],
m1:["توصيل للمنزل","À domicile"],m2:["مكتب التوصيل","Point relais"],m3:["الاستلام من المحل","Retrait au magasin"],
confirm:["تأكيد الطلب","Confirmer la commande"],cod:["الدفع عند الاستلام — لا حاجة لبطاقة بنكية","Paiement à la livraison — aucune carte requise"],
okT:["شكراً، تم تسجيل طلبك!","Merci, votre commande est enregistrée !"],okP:["سنتصل بك خلال ساعات لتأكيد الطلب.","Nous vous appelons dans quelques heures pour confirmer."],
okW:["أرسل الطلب على واتساب","Envoyer aussi sur WhatsApp"],back:["مواصلة التسوق","Continuer mes achats"],
specs:["المميزات","Caractéristiques"],model:["الموديل","Modèle"],qty:["الكمية","Quantité"],rel:["قد يعجبك أيضاً","Vous aimerez aussi"],
sort:["ترتيب","Trier"],s0:["الأحدث","Nouveautés"],s1:["السعر: الأقل","Prix croissant"],s2:["السعر: الأعلى","Prix décroissant"],
allc:["الكل","Tout"],res:["منتج","produits"],none:["لا توجد نتائج","Aucun résultat"],
guideT:["كيفاش تختار مدفأة الغاز؟","Bien choisir son chauffage à gaz"],guideP:["دليل تقريبي حسب مساحة الغرفة — يتغير حسب العزل و ارتفاع السقف.","Guide indicatif selon la surface — varie selon l'isolation et la hauteur sous plafond."],
storeT:["زورونا في المحل","Venez nous voir en magasin"],storeP:["نعمل بصمت و نستمتع بما نقدمه لكم.","Nous travaillons en silence et prenons plaisir à vous servir."],
promoT:["الطابونة العصرية","La tabouna moderne"],promoP:["فور تلمسان مع سطح رخامي — توصيل مجاني في غرداية","Four Tlemcen et plan marbre — livraison offerte à Ghardaïa"],
note0:["الأسعار إرشادية — نموذج تجريبي","Prix indicatifs — maquette de démonstration"],
hours:["كل يوم من 8:30 إلى 19:00 — الجمعة بعد الظهر","Tous les jours 8h30–19h — vendredi après-midi"],
errTel:["رقم هاتف غير صحيح","Numéro invalide (05/06/07 + 8 chiffres)"],errReq:["هذا الحقل مطلوب","Champ obligatoire"],
added:["تمت الإضافة إلى السلة","Ajouté au panier"],prom:["عروض","Promo"],nw:["جديد","Nouveau"],ht:["مطلوب","Top vente"],
};
const t=k=>T[k]?T[k][L=='ar'?0:1]:k,nm=p=>L=='ar'?p.ar:p.fr,cn=c=>L=='ar'?c.ar:c.fr;
const fmt=n=>'\u2066'+n.toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g,' ')+' DA\u2069';
const P=id=>A.p.find(x=>x.id==id),$=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const img=k=>IMG+k+(k.startsWith('c_')?'.webp':'.jpg');
const badge=p=>p.stock===0?`<span class="bdg out">${t('out')}</span>`:p.tag?`<span class="bdg t-${p.tag}">${t(p.tag=='promo'?'prom':p.tag=='new'?'nw':'ht')}</span>`:'';
function card(p,i){const d=p.old?Math.round((1-p.pr/p.old)*100):0;
return `<article class="card rv" style="--i:${i||0}"><a href="#/p/${p.id}" class="ph wm ${p.im[0].startsWith('c_')?'cut':''}">${badge(p)}<img loading="lazy" src="${img(p.im[0])}" alt="${esc(p.fr)}">${p.im[1]?`<img loading="lazy" class="alt" src="${img(p.im[1])}" alt="">`:''}</a>
<div class="cb"><span class="br">${esc(p.b)}</span><a href="#/p/${p.id}" class="nm">${esc(nm(p))}</a>
<div class="pr"><b>${fmt(p.pr)}</b>${p.old?`<s>${fmt(p.old)}</s><em>-${d}%</em>`:''}</div>
<button class="add" data-add="${p.id}" ${p.stock===0?'disabled':''}>${p.stock===0?t('out'):t('add')}</button></div></article>`}
const waLink=m=>`https://wa.me/${S.wa}?text=${encodeURIComponent(m)}`;
function header(){
$('#hdr').innerHTML=`<div class="topbar"><span>🚚 ${t('r1')} · ${t('r1s')}</span><span>📞 <a href="tel:${S.telI}">${S.tel}</a></span><span class="tb-note">${t('note0')}</span></div>
<div class="nav"><a href="#/" class="logo"><img src="${img('logo')}" alt="AO Electro"><span><b>AO</b> Electro<small>${L=='ar'?'أجهزة كهرومنزلية':'Électroménager'}</small></span></a>
<form class="srch" id="sf"><input id="q" type="search" placeholder="${t('search')}" autocomplete="off"><button aria-label="ok">⌕</button><div id="sug" class="sug"></div></form>
<nav class="links"><a href="#/">${t('home')}</a><a href="#/shop">${t('shop')}</a><a href="#/about">${t('about')}</a></nav>
<button class="lang" id="lb">${L=='ar'?'FR':'ع'}</button><button class="cbtn" id="cb" aria-label="cart">🛒<i id="cc">0</i></button></div>
<div class="catbar">${A.cats.map(c=>`<a href="#/shop?c=${c.id}">${V=='1'?'':c.ic+' '}${cn(c)}</a>`).join('')}</div>`;
$('#lb').onclick=()=>{L=L=='ar'?'fr':'ar';st.set('lang',L);boot()};
$('#cb').onclick=()=>openCart(1);
$('#sf').onsubmit=e=>{e.preventDefault();location.hash='#/shop?q='+encodeURIComponent($('#q').value)};
$('#q').oninput=e=>{const v=e.target.value.trim().toLowerCase();const r=v.length<2?[]:A.p.filter(p=>(p.fr+p.ar+p.b).toLowerCase().includes(v)).slice(0,5);
$('#sug').innerHTML=r.map(p=>`<a href="#/p/${p.id}"><img src="${img(p.im[0])}" alt=""><span>${esc(nm(p))}<b>${fmt(p.pr)}</b></span></a>`).join('');$('#sug').classList.toggle('on',r.length>0)};
document.addEventListener('click',e=>{if(!e.target.closest('#sf'))$('#sug')&&$('#sug').classList.remove('on')});
}
function footer(){$('#ftr').innerHTML=`<div class="fg"><div><div class="logo"><img src="${img('logo')}" alt=""><span><b>AO</b> Electro</span></div><p>${L=='ar'?'كل ما يحتاجه منزلك في مكان واحد':"Tout pour la maison, au même endroit"}</p></div>
<div><h4>${t('shop')}</h4>${A.cats.map(c=>`<a href="#/shop?c=${c.id}">${cn(c)}</a>`).join('')}</div>
<div><h4>${t('contact')}</h4><a href="tel:${S.telI}">📞 ${S.tel}</a><a href="${waLink('السلام عليكم')}" target="_blank" rel="noopener">💬 WhatsApp</a><a href="mailto:${S.mail}">✉️ ${S.mail}</a><a href="${S.fb}" target="_blank" rel="noopener">Facebook</a></div>
<div><h4>${t('about')}</h4><p>📍 ${L=='ar'?S.addr_ar:S.addr_fr}</p><p>🕘 ${t('hours')}</p></div></div>
<div class="fb2"><span>© ${new Date().getFullYear()} AO Electro — Ghardaïa</span><span>${t('note0')} · Webminds</span></div>`}
function home(){const f=A.p.filter(p=>p.tag),tb=P('tabouna');
const gz=[[10000,'40 – 60'],[12000,'50 – 70'],[14000,'60 – 80'],[16000,'70 – 90']];
const ehero=`<section class="ehero"><div class="eh-txt"><span class="kick">${t('heroK')}</span><h1>${t('heroT')}</h1><p>${t('heroP')}</p>
<div class="ctas"><a href="#/shop" class="btn">${t('cta1')}</a><a class="btn ghost" target="_blank" rel="noopener" href="${waLink(L=='ar'?'السلام عليكم':'Bonjour')}">${t('cta2')}</a></div>
<ul class="eh-meta"><li><b>58</b><span>${L=='ar'?'ولاية توصيل':'wilayas livrées'}</span></li><li><b>24</b><span>${L=='ar'?'شهر ضمان':'mois de garantie'}</span></li><li><b>COD</b><span>${L=='ar'?'الدفع عند الاستلام':'paiement à la livraison'}</span></li></ul></div>
<div class="eh-vis"><span class="disc"></span><img class="e1" src="${img('c_886445432')}" alt=""><img class="e2" src="${img('c_905724499')}" alt=""><img class="e3" src="${img('c_808451331')}" alt=""><span class="tagp">Tirex 4 en 1 <b>${fmt(46000)}</b></span></div></section>`;
if(V=='1')return ehero+homeRest();
return `<section class="hero"><div class="hx"><span class="kick">${t('heroK')}</span><h1>${t('heroT')}</h1><p>${t('heroP')}</p>
<div class="ctas"><a href="#/shop" class="btn">${t('cta1')}</a><a class="btn ghost" target="_blank" rel="noopener" href="${waLink(L=='ar'?'السلام عليكم، أريد الاستفسار عن':'Bonjour, je souhaite un renseignement sur')}">${t('cta2')}</a></div>
<div class="brands">${['Condor','Midea','Brandt','Bomann','Sonashi','Géant','Ariston','Atlas','Nardi','Cobra'].map(b=>`<span>${b}</span>`).join('')}</div></div>
<div class="hv wm"><img src="${img('cover')}" alt=""><div class="hcard"><img src="${img('888450738')}" alt=""><div><small>Géant · 11 KW</small><b>${fmt(42500)}</b></div></div></div></section>
${V=='2'?`<div class="marq"><div>${Array(2).fill(A.cats.map(c=>`<span>${c.ic} ${cn(c)}</span>`).join('')+`<span>🚚 ${t('r1')}</span><span>💵 ${t('r2')}</span>`).join('')}</div></div>`:''}
<section class="reas">${[['🚚','r1','r1s'],['💵','r2','r2s'],['🛡️','r3','r3s'],['🔧','r4','r4s']].map(r=>`<div class="rv"><i>${r[0]}</i><b>${t(r[1])}</b><small>${t(r[2])}</small></div>`).join('')}</section>
<section class="sec"><div class="sh"><h2>${t('cats')}</h2></div><div class="cats">${A.cats.map((c,i)=>{const p=A.p.find(x=>x.cat==c.id),ck=c.im||p.im[0];const n=A.p.filter(x=>x.cat==c.id).length;return `<a href="#/shop?c=${c.id}" class="cat rv" style="--i:${i}"><span class="ci wm ${ck.startsWith('c_')?'cut':''}"><img loading="lazy" src="${img(ck)}" alt=""></span><b>${cn(c)}</b><small>${n} ${t('res')}</small></a>`}).join('')}</div></section>
<section class="sec"><div class="sh"><h2>${t('best')}</h2><a href="#/shop">${t('all')} →</a></div><div class="grid">${f.map(card).join('')}</div></section>
<section class="promo wm"><img loading="lazy" class="${tb.im[0].startsWith('c_')?'pcut':''}" src="${img(tb.im[0])}" alt=""><div><span class="kick">-${Math.round((1-tb.pr/tb.old)*100)}%</span><h2>${t('promoT')}</h2><p>${t('promoP')}</p><div class="pr"><b>${fmt(tb.pr)}</b><s>${fmt(tb.old)}</s></div><a href="#/p/tabouna" class="btn">${t('buy')}</a></div></section>
<section class="sec"><div class="sh"><h2>${V=='1'?'':'🔥 '}${cn(A.cats[0])}</h2><a href="#/shop?c=chauffage">${t('all')} →</a></div><div class="grid">${A.p.filter(p=>p.cat=='chauffage').slice(0,4).map(card).join('')}</div></section>
<section class="guide rv"><div><h2>${t('guideT')}</h2><p>${t('guideP')}</p></div><table>${gz.map(g=>`<tr><td>${g[0].toLocaleString('fr-FR')} kcal/h</td><td>→</td><td><b>${g[1]} m²</b></td></tr>`).join('')}</table><p class="warn">⚠️ ${L=='ar'?'التهوية و كاشف أول أكسيد الكربون ضروريان.':'Aération et détecteur de CO indispensables.'}</p></section>
<section class="sec"><div class="sh"><h2>${V=='1'?'':'💧 '}${cn(A.cats[1])}</h2><a href="#/shop?c=eau">${t('all')} →</a></div><div class="grid">${A.p.filter(p=>p.cat=='eau').map(card).join('')}</div></section>
${storeBlock()}`}
function homeRest(){const tb=P('tabouna'),f=A.p.filter(p=>p.tag);const gz=[[10000,'40 – 60'],[12000,'50 – 70'],[14000,'60 – 80'],[16000,'70 – 90']];return `
${V=='2'?`<div class="marq"><div>${Array(2).fill(A.cats.map(c=>`<span>${c.ic} ${cn(c)}</span>`).join('')+`<span>🚚 ${t('r1')}</span><span>💵 ${t('r2')}</span>`).join('')}</div></div>`:''}
<section class="reas">${[['🚚','r1','r1s'],['💵','r2','r2s'],['🛡️','r3','r3s'],['🔧','r4','r4s']].map(r=>`<div class="rv"><i>${r[0]}</i><b>${t(r[1])}</b><small>${t(r[2])}</small></div>`).join('')}</section>
<section class="sec"><div class="sh"><h2>${t('cats')}</h2></div><div class="cats">${A.cats.map((c,i)=>{const p=A.p.find(x=>x.cat==c.id),ck=c.im||p.im[0];const n=A.p.filter(x=>x.cat==c.id).length;return `<a href="#/shop?c=${c.id}" class="cat rv" style="--i:${i}"><span class="ci wm ${ck.startsWith('c_')?'cut':''}"><img loading="lazy" src="${img(ck)}" alt=""></span><b>${cn(c)}</b><small>${n} ${t('res')}</small></a>`}).join('')}</div></section>
<section class="sec"><div class="sh"><h2>${t('best')}</h2><a href="#/shop">${t('all')} →</a></div><div class="grid">${f.map(card).join('')}</div></section>
<section class="promo wm"><img loading="lazy" class="${tb.im[0].startsWith('c_')?'pcut':''}" src="${img(tb.im[0])}" alt=""><div><span class="kick">-${Math.round((1-tb.pr/tb.old)*100)}%</span><h2>${t('promoT')}</h2><p>${t('promoP')}</p><div class="pr"><b>${fmt(tb.pr)}</b><s>${fmt(tb.old)}</s></div><a href="#/p/tabouna" class="btn">${t('buy')}</a></div></section>
<section class="sec"><div class="sh"><h2>${V=='1'?'':'🔥 '}${cn(A.cats[0])}</h2><a href="#/shop?c=chauffage">${t('all')} →</a></div><div class="grid">${A.p.filter(p=>p.cat=='chauffage').slice(0,4).map(card).join('')}</div></section>
<section class="guide rv"><div><h2>${t('guideT')}</h2><p>${t('guideP')}</p></div><table>${gz.map(g=>`<tr><td>${g[0].toLocaleString('fr-FR')} kcal/h</td><td>→</td><td><b>${g[1]} m²</b></td></tr>`).join('')}</table><p class="warn">⚠️ ${L=='ar'?'التهوية و كاشف أول أكسيد الكربون ضروريان.':'Aération et détecteur de CO indispensables.'}</p></section>
<section class="sec"><div class="sh"><h2>${V=='1'?'':'💧 '}${cn(A.cats[1])}</h2><a href="#/shop?c=eau">${t('all')} →</a></div><div class="grid">${A.p.filter(p=>p.cat=='eau').map(card).join('')}</div></section>
${storeBlock()}`}
function storeBlock(){return `<section class="store"><div class="st-g"><div class="st-img wm"><img loading="lazy" src="${img('cover')}" alt="AO Electro Ghardaïa"></div>
<div class="st-txt"><span class="kick">${t('about')}</span><h2>${t('storeT')}</h2><p>${t('storeP')}</p>
<ul><li>📍 ${L=='ar'?S.addr_ar:S.addr_fr}</li><li>🕘 ${t('hours')}</li><li>📞 <a href="tel:${S.telI}">${S.tel}</a></li></ul>
<a class="btn ghost" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Gharda%C3%AFa">${L=='ar'?'الاتجاهات':'Itinéraire'}</a></div></div></section>`}
function shop(qs){const c=qs.get('c')||'',q=(qs.get('q')||'').toLowerCase(),so=qs.get('s')||'0',b=qs.get('b')||'';
let r=A.p.filter(p=>(!c||p.cat==c)&&(!b||p.b==b)&&(!q||(p.fr+p.ar+p.b).toLowerCase().includes(q)));
if(so=='1')r.sort((a,b)=>a.pr-b.pr);if(so=='2')r.sort((a,b)=>b.pr-a.pr);
const brands=[...new Set(A.p.filter(p=>!c||p.cat==c).map(p=>p.b))].filter(x=>x!='—');
const u=(k,v)=>{const n=new URLSearchParams(qs);v?n.set(k,v):n.delete(k);return '#/shop?'+n};
const cc=A.cats.find(x=>x.id==c);
return `<section class="shopw"><div class="crumb"><a href="#/">${t('home')}</a> / ${cc?cn(cc):t('shop')}${q?` / « ${esc(q)} »`:''}</div>
<h1>${cc?(V=='1'?'':cc.ic+' ')+cn(cc):t('shop')}</h1>
<div class="chips"><a href="${u('c','')}" class="${!c?'on':''}">${t('allc')}</a>${A.cats.map(x=>`<a href="${u('c',x.id)}" class="${c==x.id?'on':''}">${V=='1'?'':x.ic+' '}${cn(x)}</a>`).join('')}</div>
<div class="tools"><span>${r.length} ${t('res')}</span><div><select id="fb"><option value="">${L=='ar'?'كل العلامات':'Toutes marques'}</option>${brands.map(x=>`<option ${x==b?'selected':''}>${esc(x)}</option>`).join('')}</select>
<select id="fs">${['s0','s1','s2'].map((k,i)=>`<option value="${i}" ${so==i?'selected':''}>${t(k)}</option>`).join('')}</select></div></div>
<div class="grid">${r.length?r.map(card).join(''):`<p class="none">${t('none')}</p>`}</div></section>`}
function prod(id){const p=P(id);if(!p)return shop(new URLSearchParams());const sp=L=='ar'?p.sa:p.s,c=A.cats.find(x=>x.id==p.cat);
const rel=A.p.filter(x=>x.cat==p.cat&&x.id!=p.id).slice(0,4);
return `<section class="pd"><div class="crumb"><a href="#/">${t('home')}</a> / <a href="#/shop?c=${c.id}">${cn(c)}</a> / ${esc(nm(p))}</div>
<div class="pdg"><div class="gl"><div class="main wm ${p.im[0].startsWith('c_')?'cut':''}" id="mi">${badge(p)}<img id="mimg" src="${img(p.im[0])}" alt="${esc(p.fr)}"></div>${p.im.length>1?`<div class="th">${p.im.map((k,i)=>`<button data-im="${k}" class="${i?'':'on'} ${k.startsWith('c_')?'cut':''}"><img loading="lazy" src="${img(k)}" alt=""></button>`).join('')}</div>`:''}</div>
<div class="info"><span class="br">${esc(p.b)}</span><h1>${esc(nm(p))}</h1><div class="pr big"><b id="pp">${fmt(p.pr)}</b>${p.old?`<s>${fmt(p.old)}</s>`:''}</div>
<p class="stk ${p.stock===0?'no':''}">${p.stock===0?'● '+t('out'):'● '+(L=='ar'?'متوفر في المحل':'En stock à Ghardaïa')}</p>
${p.v?`<div class="opt"><label>${t('model')}</label><div class="vs">${p.v.map((x,i)=>`<button class="${i?'':'on'}" data-v="${i}">${esc(x)}</button>`).join('')}</div></div>`:''}
<div class="opt"><label>${t('qty')}</label><div class="qt"><button data-q="-1">−</button><span id="qv">1</span><button data-q="1">+</button></div></div>
<div class="acts">${p.stock===0?`<a class="btn" target="_blank" rel="noopener" href="${waLink((L=='ar'?'أعلموني عند توفر ':'Prévenez-moi du retour de ')+p.fr)}">${t('notify')}</a>`:`<button class="btn" id="ba">${t('add')}</button><button class="btn dark" id="bb">${t('buy')}</button>`}</div>
<a class="wab" target="_blank" rel="noopener" href="${waLink((L=='ar'?'السلام عليكم، أريد طلب: ':'Bonjour, je souhaite commander : ')+p.fr+' — '+fmt(p.pr))}">💬 ${t('wa')}</a>
<h3>${t('specs')}</h3><ul class="sp">${sp.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
<div class="mini">${[['🚚','r1','r1s'],['💵','r2','r2s'],['🛡️','r3','r3s']].map(r=>`<div><i>${r[0]}</i><span><b>${t(r[1])}</b><small>${t(r[2])}</small></span></div>`).join('')}</div></div></div>
${rel.length?`<div class="sh"><h2>${t('rel')}</h2></div><div class="grid">${rel.map(card).join('')}</div>`:''}</section>`}
function vprice(p,vi){if(!p.v||!vi)return p.pr;const m=p.v[vi].match(/\+([\d ]+)/);return p.pr+(m?parseInt(m[1].replace(/ /g,'')):0)}
function bindProd(id){const p=P(id);let vi=0,q=1;
document.querySelectorAll('[data-im]').forEach(b=>b.onclick=()=>{$('#mimg').src=img(b.dataset.im);$('#mi').classList.toggle('cut',b.dataset.im.startsWith('c_'));document.querySelectorAll('[data-im]').forEach(x=>x.classList.toggle('on',x==b))});
document.querySelectorAll('button[data-v]').forEach(b=>b.onclick=()=>{vi=+b.dataset.v;document.querySelectorAll('button[data-v]').forEach(x=>x.classList.toggle('on',x==b));$('#pp').textContent=fmt(vprice(p,vi))});
document.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{q=Math.max(1,Math.min(9,q+ +b.dataset.q));$('#qv').textContent=q});
const go=o=>{addCart(p.id,vi,q);if(o)location.hash='#/checkout';else openCart(1)};
$('#ba')&&($('#ba').onclick=()=>go(0));$('#bb')&&($('#bb').onclick=()=>go(1));
const m=$('#mi');m&&(m.onmousemove=e=>{const r=m.getBoundingClientRect();m.style.setProperty('--x',(e.clientX-r.left)/r.width*100+'%');m.style.setProperty('--y',(e.clientY-r.top)/r.height*100+'%')})}
function addCart(id,vi,q){const k=id+'|'+(vi||0),e=cart.find(x=>x.k==k);e?e.q=Math.min(9,e.q+q):cart.push({k,id,vi:vi||0,q});save();toast(t('added'))}
function save(){st.set('cart',cart);const n=cart.reduce((a,b)=>a+b.q,0);$('#cc').textContent=n;$('#cc').classList.toggle('on',n>0)}
const line=x=>{const p=P(x.id);return {p,u:vprice(p,x.vi),vn:p.v?p.v[x.vi].replace(/ \(.*\)/,''):''}};
const subT=()=>cart.reduce((a,x)=>a+line(x).u*x.q,0);
function openCart(o){const d=$('#cart');d.classList.toggle('on',!!o);$('#ov').classList.toggle('on',!!o);if(!o)return;
d.innerHTML=`<div class="ch"><h3>${t('cart')}</h3><button id="cx">✕</button></div>${cart.length?`<div class="cl">${cart.map((x,i)=>{const l=line(x);return `<div class="ci2"><img src="${img(l.p.im[0])}" alt=""><div><b>${esc(nm(l.p))}</b>${l.vn?`<small>${esc(l.vn)}</small>`:''}<span>${fmt(l.u)}</span><div class="qt sm"><button data-cq="${i}|-1">−</button><span>${x.q}</span><button data-cq="${i}|1">+</button><button class="rm" data-rm="${i}">🗑</button></div></div></div>`}).join('')}</div>
<div class="cf"><div class="row"><span>${t('sub')}</span><b>${fmt(subT())}</b></div><a href="#/checkout" class="btn full" id="cgo">${t('order')}</a><small>💵 ${t('cod')}</small></div>`:`<p class="none">🛒<br>${t('empty')}</p><a href="#/shop" class="btn" id="cgo">${t('cta1')}</a>`}`;
$('#cx').onclick=()=>openCart(0);$('#cgo')&&($('#cgo').onclick=()=>openCart(0));
d.querySelectorAll('[data-cq]').forEach(b=>b.onclick=()=>{const[i,s]=b.dataset.cq.split('|');cart[i].q=Math.max(1,Math.min(9,cart[i].q+ +s));save();openCart(1)});
d.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.rm,1);save();openCart(1)})}
function fee(w,m){if(m==2||w=='Ghardaïa')return 0;return m==1?500:900}
function checkout(){if(!cart.length)return `<section class="co"><p class="none">${t('empty')}</p><a href="#/shop" class="btn">${t('cta1')}</a></section>`;
return `<section class="co"><h1>${t('order')}</h1><div class="cog"><form id="cof" novalidate>
<div class="fl"><label>${t('name')} *</label><input name="n" required></div>
<div class="fl"><label>${t('tel')} *</label><input name="t" type="tel" inputmode="tel" placeholder="06 xx xx xx xx" required></div>
<div class="two"><div class="fl"><label>${t('wil')} *</label><select name="w" required>${A.wilayas.map((w,i)=>`<option value="${w}" ${w=='Ghardaïa'?'selected':''}>${String(i+1).padStart(2,'0')} — ${w}</option>`).join('')}</select></div>
<div class="fl"><label>${t('com')} *</label><input name="c" required></div></div>
<div class="fl"><label>${t('ship')}</label><div class="modes">${['m1','m2','m3'].map((k,i)=>`<label><input type="radio" name="m" value="${i}" ${i?'':'checked'}><span>${t(k)}</span></label>`).join('')}</div></div>
<div class="fl" id="adrw"><label>${t('adr')}</label><input name="a"></div>
<div class="fl"><label>${t('note')}</label><textarea name="o" rows="2"></textarea></div>
<button class="btn full big">${t('confirm')}</button><p class="cod">💵 ${t('cod')}</p></form>
<aside class="sum"><h3>${t('cart')}</h3>${cart.map(x=>{const l=line(x);return `<div class="si"><span class="th1"><img src="${img(l.p.im[0])}" alt=""><i>${x.q}</i></span><span>${esc(nm(l.p))}${l.vn?`<small>${esc(l.vn)}</small>`:''}</span><b>${fmt(l.u*x.q)}</b></div>`}).join('')}
<div class="row"><span>${t('sub')}</span><b>${fmt(subT())}</b></div><div class="row"><span>${t('ship')}</span><b id="fee"></b></div><div class="row tot"><span>${t('total')}</span><b id="tot"></b></div></aside></div></section>`}
function bindCo(){const F=$('#cof');if(!F)return;const f=F.elements;const up=()=>{const fe=fee(f.w.value,+f.m.value);$('#fee').textContent=fe?fmt(fe):t('free');$('#tot').textContent=fmt(subT()+fe);$('#adrw').style.display=f.m.value=='0'?'':'none'};
F.onchange=up;up();
F.onsubmit=e=>{e.preventDefault();let ok=true;F.querySelectorAll('.err').forEach(x=>x.remove());
const er=(el,m)=>{ok=false;el.insertAdjacentHTML('afterend',`<small class="err">${m}</small>`)};
['n','c'].forEach(k=>{if(!f[k].value.trim())er(f[k],t('errReq'))});
const tel=f.t.value.replace(/\D/g,'').replace(/^213/,'0');if(!/^0[567]\d{8}$/.test(tel))er(f.t,t('errTel'));
if(!ok)return;const fe=fee(f.w.value,+f.m.value),no='AO-'+Date.now().toString().slice(-6);
const msg=`🛒 ${L=='ar'?'طلب جديد':'Nouvelle commande'} ${no}\n${cart.map(x=>{const l=line(x);return `• ${l.p.fr}${l.vn?' ('+l.vn+')':''} x${x.q} = ${fmt(l.u*x.q)}`}).join('\n')}\n${t('ship')}: ${fe?fmt(fe):t('free')}\n${t('total')}: ${fmt(subT()+fe)}\n— ${f.n.value} · ${tel}\n${f.w.value}, ${f.c.value} ${f.a.value}\n${f.o.value}`;
st.set('last',{no,msg});cart=[];save();location.hash='#/ok'}}
function ok(){const l=st.get('last',{no:'',msg:''});return `<section class="okp"><div class="chk">✓</div><h1>${t('okT')}</h1><p class="no">N° <b>${esc(l.no)}</b></p><p>${t('okP')}</p>
<div class="ctas"><a class="btn wa" target="_blank" rel="noopener" href="${waLink(l.msg)}">💬 ${t('okW')}</a><a class="btn ghost" href="#/shop">${t('back')}</a></div></section>`}
function about(){return `<section class="ab"><span class="kick">AO Electro · Ghardaïa</span><h1>${L=='ar'?'كل ما يحتاجه منزلك في مكان واحد':'Tout ce dont votre maison a besoin'}</h1>
<p class="lead">${L=='ar'?'محل للأجهزة الكهرومنزلية في قلب غرداية: تدفئة، سخانات ماء، غسالات، أجهزة المطبخ… من أشهر العلامات (Condor، Midea، Brandt، Bomann، Sonashi، Géant، Ariston) مع الضمان و خدمة ما بعد البيع و التوصيل لكل الولايات.':"Magasin d'électroménager au cœur de Ghardaïa : chauffage, chauffe-eau, lave-linge, cuisine… des grandes marques (Condor, Midea, Brandt, Bomann, Sonashi, Géant, Ariston), avec garantie, SAV et livraison dans toutes les wilayas."}</p>
<div class="reas">${[['🚚','r1','r1s'],['💵','r2','r2s'],['🛡️','r3','r3s'],['🔧','r4','r4s']].map(r=>`<div><i>${r[0]}</i><b>${t(r[1])}</b><small>${t(r[2])}</small></div>`).join('')}</div></section>${storeBlock()}`}
function route(){const h=location.hash.slice(1)||'/',[pa,q]=h.split('?'),qs=new URLSearchParams(q||''),seg=pa.split('/').filter(Boolean);
const v=$('#view');let html;
if(!seg.length)html=home();else if(seg[0]=='shop')html=shop(qs);else if(seg[0]=='p')html=prod(seg[1]);else if(seg[0]=='checkout')html=checkout();else if(seg[0]=='ok')html=ok();else if(seg[0]=='about')html=about();else html=home();
v.innerHTML=html;window.scrollTo(0,0);
if(seg[0]=='p')bindProd(seg[1]);if(seg[0]=='checkout')bindCo();
if(seg[0]=='shop'){const go=(k,val)=>{const n=new URLSearchParams(qs);val?n.set(k,val):n.delete(k);location.hash='#/shop?'+n};$('#fs').onchange=e=>go('s',e.target.value);$('#fb').onchange=e=>go('b',e.target.value)}
document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#/'+(seg[0]||'')));
reveal();if(window.AOFX)window.AOFX()}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.rv').forEach(el=>io.observe(el))}
let tt;function toast(m){const e=$('#toast');e.textContent='✓ '+m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),1800)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){e.preventDefault();addCart(b.dataset.add,0,1);if(V=='2'){b.classList.add('pop');setTimeout(()=>b.classList.remove('pop'),500)}}});
$('#ov').onclick=()=>openCart(0);
document.querySelectorAll('img').forEach(()=>{});
document.addEventListener('error',e=>{if(e.target.tagName=='IMG'){e.target.style.visibility='hidden'}},true);
function boot(){document.documentElement.lang=L;document.documentElement.dir=L=='ar'?'rtl':'ltr';header();footer();save();route()}
window.addEventListener('hashchange',route);boot();
const fl=$('#fwa');fl&&(fl.href=waLink('السلام عليكم AO Electro'));
})();
