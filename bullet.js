class Bullet{
    constructor(x, y, direction, speed, acceleration, curve, ttl, sprite = null) {
        this.x = x;
        this.y = y;
        this.direction = direction; // in degrees
        this.speed = speed;
        this.acceleration = acceleration;
        this.curve = curve;
        this.ttl = ttl; //time to live
        this.tick = 0;
        this.sprite = sprite;
    }

    spawn() {
        strokeWeight(5);
        stroke(255);
        point(this.x, this.y);
    }

    update() {
        this.tick++;

        this.direction += this.curve;
        this.speed += this.acceleration;

        const rad = this.direction * Math.PI / 180;
        const dirX = Math.cos(rad);
        const dirY = -Math.sin(rad);

        this.x += dirX * this.speed;
        this.y += dirY * this.speed;

        const offscreen = ( this.x < -width / 2 || this.x > width / 2 || this.y < -height / 2 || this.y > height / 2);
        if (this.tick > this.ttl || offscreen) {
            this.markedForRemoval = true;
            return;
        }

        this.draw();
    }

    draw() {
        console.log("draw running");
        if (this.sprite) {
            imageMode(CENTER);
            image(this.sprite, this.x, this.y);
        } else {
            strokeWeight(4);
            stroke(25, 100, 255);
            point(this.x, this.y);
        }
    }

    isExpired() {
        return this.markedForRemoval;
    }
}