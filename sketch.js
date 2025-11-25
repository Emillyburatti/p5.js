let corCeu = 135;
let direcao = 1;
let solY = 100;
let subindo = false;
let gotas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 100; i++) {
      gotas.push({ x: random(width), y: random(height) });
    }
}

function draw() {
    background(corCeu, 206, 235);
    corCeu += direcao * 0.2;
    if (corCeu > 180 || corCeu < 70) direcao *= -1;

    if (subindo) solY -= 0.3;
    else solY += 0.3;
    if (solY > 180 || solY < 60) subindo = !subindo;

    let cx = width / 2;
    let cy = height / 2;

    fill("green");
    rect(0, cy + 150, width, height - cy - 150);

    fill(210, 180, 140);
    square(cx - 100, cy - 50, 200);

    fill(150, 75, 0);
    triangle(cx - 110, cy - 50, cx + 110, cy - 50, cx, cy - 130);

    fill(139, 69, 19);
    rect(cx - 20, cy + 50, 40, 80);

    fill(173, 216, 230);
    quad(cx - 80, cy - 10, cx - 40, cy - 10, cx - 40, cy + 30, cx - 80, cy + 30);
    quad(cx + 40, cy - 10, cx + 80, cy - 10, cx + 80, cy + 30, cx + 40, cy + 30);

    fill("yellow");
    ellipse(width - 100, solY, 100, 100);

    stroke("red");
    strokeWeight(5);
    point(cx - 200, cy + 180);
    point(cx - 150, cy + 200);
    point(cx + 180, cy + 190);
    point(cx + 120, cy + 210);
    point(cx + 250, cy + 180);

    noFill();
    stroke("orange");
    strokeWeight(4);
    arc(cx, cy + 50, 60, 40, PI, TWO_PI);

    textSize(75);
    text("🌺", mouseX, mouseY);

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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
