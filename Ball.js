class Ball {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      friction: 0.5,
      restitution: 0.3,
      density: 1.3,



    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world, this.body)
  }
  display() {
    var ballPos = this.body.position;
    push()
    translate(ballPos.x, ballPos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255, 0, 255);
    ellipse(0, 0, this.r, this.r);

    pop()


  }
};
