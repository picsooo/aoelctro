(function(){
const d=document;
d.addEventListener('contextmenu',e=>{if(!(e.target.closest&&e.target.closest('input,textarea,select')))e.preventDefault()});
d.addEventListener('dragstart',e=>{if(e.target.tagName==='IMG')e.preventDefault()});
})();
