let corCeu = 135;
let direcao = 1;
let solY = 100;
let subindo = false;
let gotas = [];
let chovendo = true;
let florAtiva = true;
let flores = [
  { dx: -200, dy: 180 },
  { dx: -150, dy: 200 },
  { dx: 180, dy: 190 },
  { dx: 120, dy: 210 },
  { dx: 250, dy: 180 }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    gotas.push({ x: random(width), y: random(height) });
  }
}

function draw() {
  desenhaCeu();
  animaSol();
  desenhaChao();
  desenhaCasa();
  desenhaFlores();
  desenhaSorriso();
  desenhaFlorMouse();
  desenhaChuva();
}

function desenhaCeu() {
  background(corCeu, 206, 235);
  corCeu += direcao * 0.2;
  if (corCeu > 180 || corCeu < 70) direcao *= -1;
}

function animaSol() {
  if (subindo) solY -= 0.3;
  else solY += 0.3;
  if (solY > 180 || solY < 60) subindo = !subindo;
  fill("yellow");
  ellipse(width - 100, solY, 100, 100);
}

function desenhaChao() {
  let cy = height / 2;
  fill("green");
  rect(0, cy + 150, width, height - cy - 150);
}

function desenhaCasa() {
  let cx = width / 2;
  let cy = height / 2;
  fill(210, 180, 140);
  square(cx - 100, cy - 50, 200);
  fill(150, 75, 0);
  triangle(cx - 110, cy - 50, cx + 110, cy - 50, cx, cy - 130);
  fill(139, 69, 19);
  rect(cx - 20, cy + 50, 40, 80);
  fill(173, 216, 230);
  quad(cx - 80, cy - 10, cx - 40, cy - 10, cx - 40, cy + 30, cx - 80, cy + 30);
  quad(cx + 40, cy - 10, cx + 80, cy - 10, cx + 80, cy + 30, cx + 40, cy + 30);
}

function desenhaFlores() {
  let cx = width / 2;
  let cy = height / 2;
  stroke("red");
  strokeWeight(5);
  for (let i = 0; i < flores.length; i++) {
    point(cx + flores[i].dx, cy + flores[i].dy);
  }
}

function desenhaSorriso() {
  let cx = width / 2;
  let cy = height / 2;
  noFill();
  stroke("orange");
  strokeWeight(4);
  arc(cx, cy + 50, 60, 40, PI, TWO_PI);
}

function desenhaFlorMouse() {
  if (florAtiva) {
    textSize(75);
    text("🌺", mouseX, mouseY);
  }
}

function desenhaChuva() {
  if (chovendo) {
    stroke(173, 216, 230);
    strokeWeight(2);
    for (let i = 0; i < gotas.length; i++) {
      line(gotas[i].x, gotas[i].y, gotas[i].x, gotas[i].y + 10);
      gotas[i].y += 5;
      if (gotas[i].y > height) {
        gotas[i].y = random(-50, 0);
        gotas[i].x = random(width);
      }
    }
  }
}

function mousePressed() {
  chovendo = !chovendo;
}

function keyPressed() {
  if (key === 'f' || key === 'F') florAtiva = !florAtiva;
  if (key === 'n' || key === 'N') corCeu = 40;
  if (key === 'd' || key === 'D') corCeu = 135;
  if (key === 's' || key === 'S') subindo = false;
  if (key === 'u' || key === 'U') subindo = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
