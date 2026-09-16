
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

// Stronger visible cheerful animated robotics background
(function(){
  const canvas = document.getElementById("circuitCanvas");
  if(!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let w=0,h=0,dpr=1,nodes=[],icons=[],rings=[],tick=0;

  const iconSet = ["🤖","⚙️","💡","🧩","💻","⌨️","🖱️","🔧","🔩","⭐","🛠️","🚀"];
  const colors = [
    [15,158,145],[85,199,218],[249,115,22],[236,72,153],[124,58,237],[250,204,21]
  ];

  function counts(){
    if(innerWidth < 620) return {nodes:10, icons:8, rings:8};
    if(innerWidth < 900) return {nodes:15, icons:11, rings:10};
    return {nodes:22, icons:16, rings:12};
  }

  function rand(min,max){ return min + Math.random()*(max-min); }
  function pick(arr){ return arr[Math.floor(Math.random()*arr.length)] }

  function makeNode(){
    return {
      x: Math.random()*w,
      y: Math.random()*h,
      vx: rand(-0.14,0.14),
      vy: rand(-0.14,0.14),
      r: rand(2,3.5)
    };
  }

  function makeIcon(i){
    return {
      glyph: iconSet[i % iconSet.length],
      x: Math.random()*w,
      y: Math.random()*h,
      size: rand(34,60),
      vy: rand(0.18,0.34),
      vx: rand(-0.10,0.10),
      sway: rand(0.6,1.4),
      phase: Math.random()*Math.PI*2,
      rot: rand(-0.2,0.2),
      spin: rand(-0.0035,0.0035),
      alpha: rand(0.22,0.36)
    };
  }

  function makeRing(){
    const c = pick(colors);
    return {
      x: Math.random()*w,
      y: Math.random()*h,
      r: rand(22,48),
      vy: rand(0.08,0.16),
      vx: rand(-0.05,0.05),
      alpha: rand(0.08,0.14),
      color: c
    };
  }

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = innerWidth;
    h = innerHeight;
    canvas.width = Math.floor(w*dpr);
    canvas.height = Math.floor(h*dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr,0,0,dpr,0,0);

    const c = counts();
    nodes = Array.from({length:c.nodes}, makeNode);
    icons = Array.from({length:c.icons}, (_,i)=>makeIcon(i));
    rings = Array.from({length:c.rings}, makeRing);
  }

  function drawNodes(){
    for(const n of nodes){
      n.x += n.vx;
      n.y += n.vy;
      if(n.x<0||n.x>w) n.vx *= -1;
      if(n.y<0||n.y>h) n.vy *= -1;
    }

    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i], b=nodes[j];
        const dist=Math.hypot(a.x-b.x, a.y-b.y);
        if(dist<180){
          ctx.strokeStyle = `rgba(15,158,145,${0.22*(1-dist/180)})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }

    for(const n of nodes){
      ctx.fillStyle = "rgba(16,59,85,.34)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fill();

      ctx.fillStyle = "rgba(85,199,218,.24)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r+8,0,Math.PI*2);
      ctx.fill();
    }
  }

  function drawRings(){
    for(const r of rings){
      r.y -= r.vy;
      r.x += r.vx;
      if(r.y < -70){ r.y = h + 70; r.x = Math.random()*w; }

      ctx.strokeStyle = `rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.alpha})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(r.x,r.y,r.r,0,Math.PI*2);
      ctx.stroke();
    }
  }

  function drawIcons(){
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for(const ic of icons){
      ic.y -= ic.vy;
      ic.x += ic.vx + Math.sin(tick + ic.phase) * 0.35 * ic.sway;
      ic.rot += ic.spin;

      if(ic.y < -80){
        ic.y = h + 80;
        ic.x = Math.random()*w;
      }

      ctx.save();
      ctx.translate(ic.x, ic.y);
      ctx.rotate(ic.rot);
      ctx.globalAlpha = ic.alpha;
      ctx.font = `${ic.size}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`;
      ctx.shadowColor = "rgba(16,59,85,.16)";
      ctx.shadowBlur = 10;
      ctx.fillText(ic.glyph,0,0);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  function draw(){
    tick += 0.014;
    ctx.clearRect(0,0,w,h);
    drawRings();
    drawNodes();
    drawIcons();
    requestAnimationFrame(draw);
  }

  let timer;
  addEventListener("resize",()=>{
    clearTimeout(timer);
    timer = setTimeout(resize,150);
  },{passive:true});

  resize();
  draw();
})();

// Global reset of EVAGELAK EDU LAB progress
const resetProgressBtn = document.getElementById("resetProgressBtn");
if(resetProgressBtn){
  resetProgressBtn.addEventListener("click",()=>{
    if(!confirm("Θέλεις να μηδενιστεί όλη η πρόοδος των δραστηριοτήτων;")) return;
    localStorage.removeItem("starHuntLevel");
    localStorage.removeItem("evagelak_star_hunt_level");
    const keys=[];
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      if(k && k.startsWith("evagelak_")) keys.push(k);
    }
    keys.forEach(k=>localStorage.removeItem(k));
    alert("Η πρόοδος μηδενίστηκε.");
    location.reload();
  });
}
