(function(){
const fine=matchMedia('(pointer:fine)').matches;
addEventListener('pointermove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')},{passive:true});
addEventListener('scroll',()=>{const h=document.getElementById('hdr');h&&h.classList.toggle('sm',scrollY>60)},{passive:true});
window.AOFX=function(){
if(fine)document.querySelectorAll('.card').forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`};c.onmouseleave=()=>{c.style.transform=''}});
if(fine)document.querySelectorAll('.btn').forEach(b=>{b.onmousemove=e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.25}px)`};b.onmouseleave=()=>{b.style.transform=''}});
const h=document.querySelector('.hero');if(h&&!h.dataset.sp){h.dataset.sp=1;for(let i=0;i<18;i++){const s=document.createElement('i');s.className='spark';s.style.left=Math.random()*100+'%';s.style.animationDelay=Math.random()*6+'s';s.style.animationDuration=4+Math.random()*5+'s';h.appendChild(s)}}
const hv=document.querySelector('.hv img');if(hv)addEventListener('scroll',()=>{hv.style.transform=`scale(1.08) translateY(${Math.min(scrollY,600)*.08}px)`},{passive:true});
};
})();
