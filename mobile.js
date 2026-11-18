(()=>{
const vp=document.getElementById('mapViewport'),pts=new Map();let d0=0,z0=1;
const apply=()=>{const c=document.getElementById('mapCanvas');c.style.translate=`${tx}px ${ty}px`;c.style.transform=`scale(${zoom})`;document.getElementById('zoomValue').textContent=`${Math.round(zoom*100)}%`};
const dist=()=>{const [a,b]=[...pts.values()];return Math.hypot(a.x-b.x,a.y-b.y)};
vp.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pts.size===2){dragging=false;moved=99;d0=dist();z0=zoom}},true);
vp.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pts.size!==2)return;const r=vp.getBoundingClientRect(),[a,b]=[...pts.values()],cx=(a.x+b.x)/2-r.left-r.width/2,cy=(a.y+b.y)/2-r.top-r.height/2,next=Math.max(.75,Math.min(4,z0*dist()/d0));tx=cx-((cx-tx)/zoom)*next;ty=cy-((cy-ty)/zoom)*next;zoom=next;apply()},true);
const up=e=>{pts.delete(e.pointerId);if(pts.size===1){const p=[...pts.values()][0];startX=p.x-tx;startY=p.y-ty;dragging=true}};
vp.addEventListener('pointerup',up,true);vp.addEventListener('pointercancel',up,true);
document.getElementById('dungeonList').addEventListener('click',e=>{if(innerWidth<=860&&e.target.closest('.dungeon-item'))document.getElementById('sidebar').classList.remove('open')});
const baseRender=renderPanel;let lastKey=null;
renderPanel=function(){const p=document.getElementById('detailPanel'),c=p.querySelector('.detail-content'),sc=c?c.scrollTop:0,key=selected&&selected.id;baseRender();document.querySelector('.app-shell').classList.toggle('picking',!!routeMode);if(!selected){p.classList.remove('minimized');return}const n=p.querySelector('.detail-content');if(n&&key===lastKey)n.scrollTop=sc;lastKey=key;const t=activeTab==='route'&&routeTarget?routeTarget:currentTarget(),b=document.createElement('button');b.className='sheet-bar';b.innerHTML=`<span class="sheet-grip"></span><span class="sheet-title">${activeTab==='route'?'Rota até ':''}<b>${t.name}</b></span><span class="sheet-chev">⌃</span>`;p.prepend(b)};
document.getElementById('detailPanel').addEventListener('click',e=>{if(e.target.closest('.sheet-bar'))e.currentTarget.classList.toggle('minimized')});
const bs=startRoute;startRoute=function(){bs.apply(this,arguments);if(innerWidth<=860)document.getElementById('detailPanel').classList.add('minimized')};
const bf=finishRoute;finishRoute=function(){bf.apply(this,arguments);document.getElementById('detailPanel').classList.remove('minimized')};if(innerWidth<=860){zoom=1.8;apply()}
})();
