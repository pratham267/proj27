class rop{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rop=Constraint.create(options);
        World.add(world,this.rop);
    }
    display(){
        var pointA=this.rop.bodyA.position;
        var pointB=this.rop.bodyB.position;
        strokeWeigth(2);
        
        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;
        fill(0);
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}