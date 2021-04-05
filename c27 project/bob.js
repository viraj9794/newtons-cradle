class Bob{
    constructor(x, y, radius) {
        var options = { 
            restitution:1,
            friction:0.1,
            density:5
        }
      this.body = Bodies.circle(x,y,radius,options);
     // this.image = loadImage("bob.png");
        World.add(myWorld, this.body);
        this.radius = radius;

      }
      display(){
        push();
        fill("red")
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
    }