class Chain{
    constructor(body1, point2){
        var chainOptions={
            bodyA:body1,
            pointB:point2,
            stiffness:0.05,
            length:600
        }
    this.chain=Constraint.create(chainOptions);
    World.add(myWorld, this.chain)
    this.pointB = point2;
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5);
        stroke("cyan");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
