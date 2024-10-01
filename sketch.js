let x = 0; // Posición inicial de la pelota

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(135, 206, 235); // Cielo azul claro
  // Cambiar el color del fondo en función de la posición de la pelota
  let bgColor = map(x, 0, width, 40, 250); // Mapea la posición de la pelota a un valor de color entre 0 y 255
  background(bgColor, 125, 200); // Fondo cambia de color

  // Dibujar la pelota
  fill(255, 204, 0);
  noStroke();
  ellipse(x, height / 2, 70, 70); // Pelota

  // Movimiento de la pelota de izquierda a derecha
  x += 2;

  // Si la pelota sale de la pantalla, reiniciar posición
  if (x > width) {
    x = 0;
  }

  // Dibujar el sol
  fill(255, 204, 0);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80); // Sol

  // Dibujar el mar
  fill(0, 119, 190);
  rect(0, (height * 3) / 4, width, height / 4); // Mar
}
