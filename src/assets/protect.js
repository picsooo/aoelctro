(function(){
const d=document,b=()=>d.body;
['contextmenu','dragstart','selectstart','copy','cut'].forEach(ev=>d.addEventListener(ev,e=>{if(!(e.target.closest&&e.target.closest('input,textarea,select')))e.preventDefault()}));
d.addEventListener('keydown',e=>{const k=(e.key||'').toLowerCase(),c=e.ctrlKey||e.metaKey;
if(k=='f12'||(c&&['s','u','p','c'].includes(k)&&!(k=='c'&&e.target.closest&&e.target.closest('input,textarea')))||(c&&e.shiftKey&&['i','j','c','k'].includes(k))||(e.metaKey&&e.altKey&&['i','j','c','u'].includes(k))){e.preventDefault();e.stopPropagation();return false}
if(k=='printscreen'){hide(1);try{navigator.clipboard.writeText('© Maquette Webminds')}catch(_){}setTimeout(()=>hide(0),1500)}},true);
d.addEventListener('keyup',e=>{if((e.key||'').toLowerCase()=='printscreen'){hide(1);try{navigator.clipboard.writeText('© Maquette Webminds')}catch(_){}setTimeout(()=>hide(0),1500)}});
function hide(on){b()&&b().classList.toggle('shield',!!on)}
window.addEventListener('blur',()=>hide(1));window.addEventListener('focus',()=>hide(0));
d.addEventListener('visibilitychange',()=>hide(d.hidden));
const desk=()=>matchMedia('(pointer:fine)').matches&&innerWidth>900;
setInterval(()=>{if(!desk())return;const o=(outerWidth-innerWidth>170)||(outerHeight-innerHeight>200);b()&&b().classList.toggle('devt',o)},800);
setInterval(()=>{const t=performance.now();debugger;if(performance.now()-t>120&&b())b().classList.add('devt')},1500);
})();
