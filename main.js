let arrayBullets = [];
let shots = 0;
let profileDropped = false;

function setup() {
    createCanvas(1280, 720);
    angleMode(DEGREES);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    translate(width / 2, height / 2);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    //place holder for profile drop
    if (!profileDropped) {
        drawIntroMessage();
        return;
    }

    handlePhases();

    for (let i = arrayBullets.length - 1; i >= 0; i--) {
        arrayBullets[i].update();
        if (arrayBullets[i].isExpired() && !arrayBullets[i].isExpired()) {
            arrayBullets.splice(i, 1);
        }
    }
}
