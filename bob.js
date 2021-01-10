class Bob
{
constructor(x,y,radius){
    var options = {isStatic:true,stiffness:0.02};
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
    

  
  

}
display(){
var pos = this.body.position;

fill("pink");
push();
translate(pos.x,pos.y);
ellipse(0,0,this.radius);
pop();
}

}
