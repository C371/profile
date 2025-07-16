let bullets = [];

function setup() {
  createCanvas(1280, 720);
  angleMode(DEGREES);
  bullets.push(new Bullet(0, 0, 0, 3, 0, 0, 600)); // Right-moving bullet
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let b of bullets) {
    b.update();
  }
}
