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

function drawIntroMessage() {
    fill(255);
    textSize(24);
    text("Under construction :)", 0, 0); // Placeholder for profile drop
}

function handlePhases() {
    shots++;
    //test pattern every 60 frames
    if (shots % 60 === 0) {
        generateTestPattern();
    }
}

function generateTestPattern() {
    const patternArray = 3;
    const bulletsPerArray = 12;
    const baseAngle = frameCount % 360;

    for (let i = 0; i < patternArray; i++) {
        for (let j = 0; j < bulletsPerArray; j++) {
            const direction = baseAngle + (i * 45) + (j * (360 / bulletsPerArray));
            const speed = 2;
            const acceleration = 0;
            const curve = 0;
            const ttl = 300;

            let b = new Bullet(0, 0, direction, speed, acceleration, curve, ttl);
            b.spawn();
            arrayBullets.push(b);
            console.log("Bullet created:", b);
        }
    }
}