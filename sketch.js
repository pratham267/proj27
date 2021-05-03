
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.render;
const Constraint = Matter.Constraint;

var Roof;
var bob1,bob2,bob3,bob4,bob5;
var rop1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  
 
	engine = Engine.create();
	world = engine.world;


  Roof=new roof(width/2,height/4,width/7,20); 

  bobDiameter=40;

  startbobPositionX=width/2;
  startbobPositionY=height/4;

	
	bob1=new bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);

  


  rop1=new rop(bob1.body,Roof.body,-bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Roof.display();
  bob1.display();
  rop1.display();
  drawSprites();
 
}



