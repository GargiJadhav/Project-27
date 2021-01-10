class Wire
{
constructor(bodyA,bodyB,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;
    var Coption = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY},
    stiffness:0.02,
    length:400};
    this.wire = Constraint.create(Coption);
	World.add(world,this.wire);


}
display(){

var pointA = this.wire.bodyA.position;
var pointB = this.wire.bodyB.position;

var anchor1X = pointA.x+this.offsetX;
var anchor1Y = pointA.y+this.offsetY;
var anchor2X = pointB.x;
var anchor2Y = pointB.y;




strokeWeight(2);
line(anchor1X,anchor1Y,anchor2X,anchor2Y);

}




}