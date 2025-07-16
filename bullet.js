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

    update() {
    this.direction += this.curve;
    this.speed += this.acceleration;

    const rad = this.direction * Math.PI / 180;
    const dx = Math.cos(rad);
    const dy = -Math.sin(rad);

    this.x += dx * this.speed;
    this.y += dy * this.speed;

    ellipse(this.x, this.y, 10, 10);
    }
}