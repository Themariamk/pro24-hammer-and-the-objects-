class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius,  options);
      //this.width = width;
      //this.height = height;

     this.radius=radius 
     //Bodies.circle(x, y, radius, options, [maxSides])
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
     // rotate(angle);
      ellipseMode(RADIUS);
      fill("darkblue");
      ellipse(0, 0, this.radius, this.radius);   
      pop();
    }
  };