let img;
let pos; // Posição da imagem
let vel; // Velocidade/Movimento

function preload() {
  img = loadImage('flores.jpg'); // Imagem de teste
}

function setup() {
  createCanvas(600, 400);
  pos = createVector(width / 2, height / 2); // Começa no centro
  vel = createVector(0, 0);
  imageMode(CENTER);
}

function draw() {
  background(240);

  // 1. Criar um vetor para a posição do rato
  let mouse = createVector(mouseX, mouseY);

  // 2. Calcular a distância entre a imagem e o rato
  let distRato = p5.Vector.dist(pos, mouse);

  // 3. Se o rato estiver perto (ex: menos de 100 pixels)
  if (distRato < 100) {
    // Cria uma força que aponta do rato para a imagem (fuga)
    let fuge = p5.Vector.sub(pos, mouse);
    fuge.setMag(5); // Define a "velocidade" da fuga
    pos.add(fuge);
  }

  // Manter a imagem dentro do ecrã (opcional)
  pos.x = constrain(pos.x, 0, width);
  pos.y = constrain(pos.y, 0, height);

  // Desenhar a imagem
  image(img, pos.x, pos.y, 60, 60);
}