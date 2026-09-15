
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

const gradeNote = document.getElementById("selectedGrade");
if(gradeNote && initialGrade && gradeLabels[initialGrade]){
  gradeNote.textContent = `Επιλεγμένη τάξη: ${gradeLabels[initialGrade]} Δημοτικού`;
}

// Cheerful animated background: circuits + floating happy elements
(function(){
  const canvas = document.getElementById("circuitCanvas");
  if(!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w=0,h=0,dpr=1,nodes=[],floaters=[],raf=0,tick=0;

  function nodeCount(){
    if(innerWidth < 620) return 12;
    if(innerWidth < 900) return 18;
    return 28;
  }

  function floaterCount(){
    if(innerWidth < 620) return 10;
    if(innerWidth < 900) return 14;
    return 18;
  }

  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)] }

  function makeFloater(){
    const types = ["star","gear","dot","spark"];
    return {
      type: pick(types),
      x: Math.random()*w,
      y: Math.random()*h,
      size: 10 + Math.random()*18,
      speed: 0.15 + Math.random()*0.35,
      sway: 0.3 + Math.random()*0.9,
      angle: Math.random()*Math.PI*2,
      rotation: Math.random()*Math.PI*2,
      vr: (Math.random()-.5)*0.02,
      color: pick([
        "rgba(15,158,145,0.20)",
        "rgba(85,199,218,0.22)",
        "rgba(249,115,22,0.18)",
        "rgba(236,72,153,0.16)",
        "rgba(124,58,237,0.16)",
        "rgba(250,204,21,0.18)"
      ])
    };
  }

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = innerWidth;
    h = innerHeight;
    canvas.width = Math.floor(w*dpr);
    canvas.height = Math.floor(h*dpr);
    canvas.style.width = w+"px";
    canvas.style.height = h+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);

    nodes = Array.from({length:nodeCount()},()=>({
      x:Math.random()*w,
      y:Math.random()*h,
      vx:(Math.random()-.5)*0.14,
      vy:(Math.random()-.5)*0.14,
      r:1.8+Math.random()*2.2
    }));

    floaters = Array.from({length:floaterCount()},()=>makeFloater());
  }

  function drawStar(x,y,r,rot,color){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.fillStyle = color;
    ctx.beginPath();
    for(let i=0;i<5;i++){
      const a1 = (i*2*Math.PI)/5 - Math.PI/2;
      const a2 = a1 + Math.PI/5;
      ctx.lineTo(Math.cos(a1)*r, Math.sin(a1)*r);
      ctx.lineTo(Math.cos(a2)*(r*0.45), Math.sin(a2)*(r*0.45));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawGear(x,y,r,rot,color){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1.4, r*0.11);
    for(let i=0;i<8;i++){
      ctx.rotate(Math.PI/4);
      ctx.beginPath();
      ctx.moveTo(r*0.75,0);
      ctx.lineTo(r*1.05,0);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(0,0,r*0.72,0,Math.PI*2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,r*0.22,0,Math.PI*2);
    ctx.stroke();
    ctx.restore();
  }

  function drawSpark(x,y,r,rot,color){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1.2, r*0.10);
    for(let i=0;i<4;i++){
      ctx.beginPath();
      ctx.moveTo(-r*0.9,0);
      ctx.lineTo(r*0.9,0);
      ctx.stroke();
      ctx.rotate(Math.PI/4);
    }
    ctx.restore();
  }

  function drawDot(x,y,r,color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill();
  }

  function draw(){
    tick += 0.01;
    ctx.clearRect(0,0,w,h);
    ctx.lineWidth = 1;

    // circuits
    for(const n of nodes){
      n.x += n.vx;
      n.y += n.vy;
      if(n.x<0 || n.x>w) n.vx*=-1;
      if(n.y<0 || n.y>h) n.vy*=-1;
    }

    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist=Math.hypot(dx,dy);
        if(dist<150){
          ctx.strokeStyle = `rgba(15,158,145,${0.13*(1-dist/150)})`;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }

    for(const n of nodes){
      ctx.fillStyle = "rgba(16,59,85,.20)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle = "rgba(85,199,218,.14)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r+5,0,Math.PI*2);
      ctx.fill();
    }

    // cheerful floating elements
    for(const f of floaters){
      f.y -= f.speed;
      f.x += Math.sin(tick + f.angle + f.y*0.01) * f.sway * 0.35;
      f.rotation += f.vr;

      if(f.y < -40){
        f.y = h + 30;
        f.x = Math.random()*w;
      }

      if(f.type === "star"){
        drawStar(f.x, f.y, f.size*0.55, f.rotation, f.color);
      } else if(f.type === "gear"){
        drawGear(f.x, f.y, f.size*0.55, f.rotation, f.color);
      } else if(f.type === "spark"){
        drawSpark(f.x, f.y, f.size*0.45, f.rotation, f.color);
      } else {
        drawDot(f.x, f.y, f.size*0.28, f.color);
      }
    }

    raf = requestAnimationFrame(draw);
  }

  let resizeTimer;
  addEventListener("resize",()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize,140);
  },{passive:true});

  resize();
  draw();
})();
