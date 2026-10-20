(function(){
const ok=/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(CA);
const buy=ok?'https://jup.ag/swap/SOL-'+CA:'https://jup.ag';
document.querySelectorAll('.ca-val').forEach(e=>e.textContent=CA);
document.querySelectorAll('.xlink').forEach(a=>a.href=X_LINK);
document.querySelectorAll('.social').forEach(a=>a.href=SOCIAL_LINK);
document.querySelectorAll('.buy').forEach(a=>{a.href=buy;a.target='_blank';a.rel='noopener'});
document.querySelectorAll('.copy').forEach(b=>b.onclick=()=>{const done=()=>{b.textContent='COPIED ♥';setTimeout(()=>b.textContent='COPY',1500)};
if(navigator.clipboard)navigator.clipboard.writeText(CA).then(done,fb);else fb();function fb(){const t=document.createElement('textarea');t.value=CA;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();done()}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
})();
