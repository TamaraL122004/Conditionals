let x = 0; // Posición horizontal del sol
let y = 0; //Posición vertical

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(135, 206, 235); // Cielo azul
  // Cambiar el color del fondo en función de la posición del sol
  let bgColor = map(x, 0, width, 40, 250); // Mapea la posición del sol
  background(bgColor, 200, 210); // Fondo cambia de color

  // sol
  fill(255, 204, 0);
  noStroke();
  ellipse(x, y, 100, 100); // sol

  // Movimiento del sol de izquierda a derecha
  x += 2;

  // Si el sol sale de la pantalla, reiniciar posición
  if (x > width) {
    x = 0;
  }

  // Movimiento en forma de parábola
  let a = 0.003; // Factor que define la curvatura de la parábola
  y = a * pow(x - width / 2, 2) + 100; // Parábola hacia abajo

  //  punto
  fill(255, 154, 200);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20); // Sol

  //  mar
  fill(50, 100, 240);
  rect(0, (height * 3) / 4, width, height / 4); // Mar

  //nubes
  fill(255);
  ellipse(150, 80, 60);

  fill(255);
  ellipse(120, 90, 60);

  fill(255);
  ellipse(180, 90, 60);

  fill(255);
  ellipse(150, 100, 60);

  //nube 2
  fill(255);
  ellipse(1000, 180, 60);

  fill(255);
  ellipse(970, 190, 60);

  fill(255);
  ellipse(1030, 190, 60);

  fill(255);
  ellipse(1000, 200, 60);
}
