(()=>{
const vp=document.getElementById('mapViewport'),pts=new Map();let d0=0,z0=1;
const apply=()=>{const c=document.getElementById('mapCanvas');c.style.translate=`${tx}px ${ty}px`;c.style.transform=`scale(${zoom})`;document.getElementById('zoomValue').textContent=`${Math.round(zoom*100)}%`};
const dist=()=>{const [a,b]=[...pts.values()];return Math.hypot(a.x-b.x,a.y-b.y)};
vp.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pts.size===2){dragging=false;moved=99;d0=dist();z0=zoom}},true);
vp.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pts.size!==2)return;const r=vp.getBoundingClientRect(),[a,b]=[...pts.values()],cx=(a.x+b.x)/2-r.left-r.width/2,cy=(a.y+b.y)/2-r.top-r.height/2,next=Math.max(.75,Math.min(4,z0*dist()/d0));tx=cx-((cx-tx)/zoom)*next;ty=cy-((cy-ty)/zoom)*next;zoom=next;apply()},true);
const up=e=>{pts.delete(e.pointerId);if(pts.size===1){const p=[...pts.values()][0];startX=p.x-tx;startY=p.y-ty;dragging=true}};
vp.addEventListener('pointerup',up,true);vp.addEventListener('pointercancel',up,true);
document.getElementById('dungeonList').addEventListener('click',e=>{if(innerWidth<=860&&e.target.closest('.dungeon-item'))document.getElementById('sidebar').classList.remove('open')});
if(innerWidth<=860){zoom=1.8;apply()}
})();
