class Bullet{
    constructor(x, y, direction, speed, acceleration, curve, ttl, sprite = null) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.acceleration = acceleration;
        this.curve = curve;
        this.ttl = ttl;
        this.tick = 0;
        this.sprite = sprite;
    }
}