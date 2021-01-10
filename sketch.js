
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;
var wire1;
var bob2;
var roof,wire2,bob3,wire3,bob4,wire4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/4,width/2,20);


bobStartX = width/2;
bobStartY = height/4+500;
bobDiameter = 70;
bob1 = new Bob(bobStartX,bobStartY,bobDiameter);
wire1 = new Wire(roof.body,bob1.body,0,0);
bob2 = new Bob(bobStartX+bobDiameter,bobStartY,bobDiameter)
wire2 = new Wire(roof.body,bob2.body,bobDiameter,0);
bob3 = new Bob(bobStartX-bobDiameter,bobStartY,bobDiameter);
wire3 = new Wire(roof.body,bob3.body,-bobDiameter,0);
bob4 = new Bob(bobStartX-bobDiameter*2,bobStartY,bobDiameter);
wire4 = new Wire(roof.body,bob4.body,bobDiameter*-2,0);
bob5 = new Bob(bobStartX-bobDiameter*-2,bobStartY,bobDiameter);
wire5 = new Wire(roof.body,bob5.body,bobDiameter*2,0);
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  roof.display();
  wire4.display();
  wire3.display();
  wire1.display();
  wire2.display();
  wire5.display();

  bob1.display();
  bob3.display();
  bob2.display();
  bob4.display();
  bob5.display();
  
  //console.log(Bob1.body.position);

  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:85,y:-85});
  
  }
}








