let corCeu = 135;
let direcao = 1;
let solY = 100;
let subindo = false;
let gotas = [];
let chovendo = true;       // chuva inicial ligada
let florAtiva = true;      // mostrar emogi na posição do mouse 

function setup() {
  createCanvas(windowWidth, windowHeight);

  // cria gotas iniciais
  for (let i = 0; i < 100; i++) {
    gotas.push({ x: random(width), y: random(height) });
  }
}

function draw() {
  // 🌤️ 1) céu dinâmico
  background(corCeu, 206, 235);
  corCeu += direcao * 0.2;
  if (corCeu > 180 || corCeu < 70) direcao *= -1;

  // 🌞 2) sol subindo/descendo
  if (subindo) solY -= 0.3;
  else solY += 0.3;
  if (solY > 180 || solY < 60) subindo = !subindo;

  // coordenadas para casa
  let cx = width / 2;
  let cy = height / 2;

  // 🌱 chão
  fill("green");
  rect(0, cy + 150, width, height - cy - 150);

  // 🏠 paredes
  fill(210, 180, 140);
  square(cx - 100, cy - 50, 200);

  // teto
  fill(150, 75, 0);
  triangle(cx - 110, cy - 50, cx + 110, cy - 50, cx, cy - 130);

  // porta
  fill(139, 69, 19);
  rect(cx - 20, cy + 50, 40, 80);

  // janelas
  fill(173, 216, 230);
  quad(cx - 80, cy - 10, cx - 40, cy - 10, cx - 40, cy + 30, cx - 80, cy + 30);
  quad(cx + 40, cy - 10, cx + 80, cy - 10, cx + 80, cy + 30, cx + 40, cy + 30);

  // sol
  fill("yellow");
  ellipse(width - 100, solY, 100, 100);

  // flores estáticas
  stroke("red");
  strokeWeight(5);
  point(cx - 200, cy + 180);
  point(cx - 150, cy + 200);
  point(cx + 180, cy + 190);
  point(cx + 120, cy + 210);
  point(cx + 250, cy + 180);

  // sorriso
  noFill();
  stroke("orange");
  strokeWeight(4);
  arc(cx, cy + 50, 60, 40, PI, TWO_PI);

  // 🌸 flor que segue o mouse
  if (florAtiva) {
    textSize(75);
    text("🌺", mouseX, mouseY);
  }

  // 🌧️ 3) CHUVA (CONDICIONAL)
  if (chovendo) {
    stroke(173, 216, 230);
    strokeWeight(2);
    for (let g of gotas) {
      line(g.x, g.y, g.x, g.y + 10);
      g.y += 5;
      if (g.y > height) {
        g.y = random(-50, 0);
        g.x = random(width);
      }
    }
  }
}

// 🖱️ 4) Clique do mouse → liga/desliga chuva
function mousePressed() {
  chovendo = !chovendo;
}

// ⌨️ 5) teclas para interatividade
function keyPressed() {

  // tecla F → desliga flor animada
  if (key === 'f' || key === 'F') {
    florAtiva = !florAtiva;
  }

  // tecla N → noite
  if (key === 'n' || key === 'N') {
    corCeu = 40;
  }

  // tecla D → dia
  if (key === 'd' || key === 'D') {
    corCeu = 135;
  }

  // tecla S → para o sol
  if (key === 's' || key === 'S') {
    subindo = false;
  }

  // tecla U → sol volta a subir
  if (key === 'u' || key === 'U') {
    subindo = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
