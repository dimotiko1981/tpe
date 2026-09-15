
const gradeLabels = {
  all:"Όλες", a:"Α΄", b:"Β΄", g:"Γ΄", d:"Δ΄", e:"Ε΄", st:"ΣΤ΄"
};

function updateClock(){
  const now = new Date();
  const date = document.getElementById("liveDate");
  const time = document.getElementById("liveTime");
  if(date){
    date.textContent = now.toLocaleDateString("el-GR",{
      weekday:"long", day:"numeric", month:"long", year:"numeric"
    });
  }
  if(time){
    time.textContent = now.toLocaleTimeString("el-GR",{hour:"2-digit",minute:"2-digit"});
  }
}
updateClock();
setInterval(updateClock,1000);

let activeGrade = "all";

function applyFilter(grade){
  activeGrade = grade;
  const cards = [...document.querySelectorAll(".card[data-grades]")];
  let shown = 0;

  cards.forEach(card=>{
    const grades = card.dataset.grades.split(",");
    const visible = grade === "all" || grades.includes(grade);
    card.classList.toggle("hidden",!visible);
    if(visible){
      shown++;
      const link = card.getAttribute("href").split("?")[0];
      card.setAttribute("href", grade === "all" ? link : `${link}?grade=${grade}`);
    }
  });

  document.querySelectorAll(".grade-btn").forEach(btn=>{
    btn.setAttribute("aria-pressed",btn.dataset.grade === grade ? "true":"false");
  });

  const empty = document.getElementById("emptyState");
  if(empty) empty.classList.toggle("show",shown===0);
}

document.querySelectorAll(".grade-btn").forEach(btn=>{
  btn.addEventListener("click",()=>applyFilter(btn.dataset.grade));
});

const params = new URLSearchParams(location.search);
const initialGrade = params.get("grade");
if(initialGrade && gradeLabels[initialGrade]){
  applyFilter(initialGrade);
}else{
  applyFilter("all");
}

// Category page: show selected grade if present
const gradeNote = document.getElementById("selectedGrade");
if(gradeNote && initialGrade && gradeLabels[initialGrade]){
  gradeNote.textContent = `Επιλεγμένη τάξη: ${gradeLabels[initialGrade]} Δημοτικού`;
}

// Lightweight animated tech-circuit background
(function(){
  const canvas = document.getElementById("circuitCanvas");
  if(!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w=0,h=0,dpr=1,nodes=[],raf=0;

  function nodeCount(){
    if(innerWidth < 620) return 14;
    if(innerWidth < 900) return 20;
    return 30;
  }

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = innerWidth; h = innerHeight;
    canvas.width = Math.floor(w*dpr);
    canvas.height = Math.floor(h*dpr);
    canvas.style.width = w+"px";
    canvas.style.height = h+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
    nodes = Array.from({length:nodeCount()},()=>({
      x:Math.random()*w,
      y:Math.random()*h,
      vx:(Math.random()-.5)*0.16,
      vy:(Math.random()-.5)*0.16,
      r:1.8+Math.random()*2.2
    }));
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.lineWidth=1;

    for(const n of nodes){
      n.x += n.vx; n.y += n.vy;
      if(n.x<0 || n.x>w) n.vx*=-1;
      if(n.y<0 || n.y>h) n.vy*=-1;
    }

    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist=Math.hypot(dx,dy);
        if(dist<150){
          ctx.strokeStyle=`rgba(15,158,145,${0.15*(1-dist/150)})`;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }

    for(const n of nodes){
      ctx.fillStyle="rgba(16,59,85,.26)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle="rgba(85,199,218,.18)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r+5,0,Math.PI*2);
      ctx.fill();
    }
    raf=requestAnimationFrame(draw);
  }

  let resizeTimer;
  addEventListener("resize",()=>{
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(resize,140);
  },{passive:true});

  resize();
  draw();
})();
