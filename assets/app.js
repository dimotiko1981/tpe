
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

// Visible cheerful animated robotics background
(function(){
  const canvas = document.getElementById("circuitCanvas");
  if(!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let w=0,h=0,dpr=1,nodes=[],icons=[],bubbles=[],tick=0;

  const iconSet = ["🤖","⚙️","💡","🧩","💻","⌨️","🖱️","🔧","🔩","⭐"];

  function getCounts(){
    if(innerWidth < 620) return {nodes:10, icons:7, bubbles:6};
    if(innerWidth < 900) return {nodes:16, icons:10, bubbles:8};
    return {nodes:24, icons:15, bubbles:11};
  }

  function makeIcon(i){
    return {
      glyph: iconSet[i % iconSet.length],
      x: Math.random()*w,
      y: Math.random()*h,
      size: 28 + Math.random()*26,
      speedY: 0.16 + Math.random()*0.24,
      speedX: (Math.random()-.5)*0.13,
      sway: 0.5 + Math.random()*1.1,
      phase: Math.random()*Math.PI*2,
      rot: (Math.random()-.5)*0.18,
      spin: (Math.random()-.5)*0.0018,
      alpha: 0.24 + Math.random()*0.18
    };
  }

  function makeBubble(){
    const palette = [
      [15,158,145],
      [85,199,218],
      [249,115,22],
      [236,72,153],
      [124,58,237],
      [250,204,21]
    ];
    return {
      x:Math.random()*w,
      y:Math.random()*h,
      r:16+Math.random()*30,
      vx:(Math.random()-.5)*0.08,
      vy:-0.06-Math.random()*0.10,
      c:palette[Math.floor(Math.random()*palette.length)],
      alpha:.07+Math.random()*.07
    };
  }

  function resize(){
    dpr=Math.min(devicePixelRatio||1,1.5);
    w=innerWidth;
    h=innerHeight;
    canvas.width=Math.floor(w*dpr);
    canvas.height=Math.floor(h*dpr);
    canvas.style.width=w+"px";
    canvas.style.height=h+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);

    const c=getCounts();
    nodes=Array.from({length:c.nodes},()=>({
      x:Math.random()*w,
      y:Math.random()*h,
      vx:(Math.random()-.5)*0.12,
      vy:(Math.random()-.5)*0.12,
      r:2+Math.random()*2.5
    }));
    icons=Array.from({length:c.icons},(_,i)=>makeIcon(i));
    bubbles=Array.from({length:c.bubbles},()=>makeBubble());
  }

  function drawCircuits(){
    for(const n of nodes){
      n.x+=n.vx;n.y+=n.vy;
      if(n.x<0||n.x>w)n.vx*=-1;
      if(n.y<0||n.y>h)n.vy*=-1;
    }

    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j];
        const dist=Math.hypot(a.x-b.x,a.y-b.y);
        if(dist<170){
          ctx.strokeStyle=`rgba(15,158,145,${0.18*(1-dist/170)})`;
          ctx.lineWidth=1.2;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }

    for(const n of nodes){
      ctx.fillStyle="rgba(16,59,85,.32)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fill();

      ctx.fillStyle="rgba(85,199,218,.16)";
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r+7,0,Math.PI*2);
      ctx.fill();
    }
  }

  function drawBubbles(){
    for(const b of bubbles){
      b.x+=b.vx;
      b.y+=b.vy;
      if(b.y<-50){b.y=h+50;b.x=Math.random()*w;}
      if(b.x<-50)b.x=w+50;
      if(b.x>w+50)b.x=-50;

      ctx.fillStyle=`rgba(${b.c[0]},${b.c[1]},${b.c[2]},${b.alpha})`;
      ctx.beginPath();
      ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
      ctx.fill();
    }
  }

  function drawIcons(){
    ctx.textAlign="center";
    ctx.textBaseline="middle";

    for(const f of icons){
      f.y-=f.speedY;
      f.x+=f.speedX + Math.sin(tick+f.phase)*0.18*f.sway;
      f.rot+=f.spin;

      if(f.y<-55){
        f.y=h+55;
        f.x=Math.random()*w;
      }
      if(f.x<-55)f.x=w+55;
      if(f.x>w+55)f.x=-55;

      ctx.save();
      ctx.translate(f.x,f.y);
      ctx.rotate(f.rot);
      ctx.globalAlpha=f.alpha;
      ctx.font=`${f.size}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`;
      ctx.shadowColor="rgba(16,59,85,.10)";
      ctx.shadowBlur=5;
      ctx.fillText(f.glyph,0,0);
      ctx.restore();
    }
    ctx.globalAlpha=1;
  }

  function draw(){
    tick+=0.012;
    ctx.clearRect(0,0,w,h);
    drawBubbles();
    drawCircuits();
    drawIcons();
    requestAnimationFrame(draw);
  }

  let timer;
  addEventListener("resize",()=>{
    clearTimeout(timer);
    timer=setTimeout(resize,150);
  },{passive:true});

  resize();
  draw();
})();
