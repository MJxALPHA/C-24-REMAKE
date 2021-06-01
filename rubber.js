class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.R = radius;
      
      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle);
      ellipseMode(RADIUS);
      fill(52,50,50);
      ellipse(0, 0, this.R, this.R);
      pop();
    }
  };
  