class Shooter{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(252, 5, 38);
        stroke(249, 241, 9);
        strokeWeight(6);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}