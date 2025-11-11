function setup() {
    createCanvas(4000, 400);
}   //define valores padrão do projeto//

function draw() {

    //circulo

    background(135, 206, 235);
    fill("yellow")  //define a cor de qualquer forma na tela//
    stroke("orange")    //Define a cor usada para desenhar pontos, linhas e contornos de formas.//
    strokeWeight(20)  //largura do traço//
    circle(200, 50, 50);
    
     // Elipse

     fill("white"); 
     noStroke(); // sem contorno
     ellipse(100, 100, 80, 50); 
}
    

