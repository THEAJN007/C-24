
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(200,200,20);
  paper.shapeColor = color(0,255,0);
  ground = new Ground(600,395,1200,10);

  side1 = createSprite(800,height-60,20,100);
  side1.shapeColor = color(128,0,0);
  side2 = createSprite(900,height-20,200,20);
  side2.shapeColor =  color(128,0,0);
  side3 = createSprite(1000,height-60,20,100);
  side3.shapeColor  = color(128,0,0);
	

  side1body = Bodies.rectangle(800,height-60,20,100 , {isStatic:true});
	World.add(world, side1body);
	side2body = Bodies.rectangle(900,height-20,200,20, {isStatic:true});
  World.add(world, side2body);
	side3body = Bodies.rectangle(1000,height-60,20,100, {isStatic:true});
  World.add(world, side3body);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  side1.x= side1body.position.x 
  side2.y= side1body.position.y 

  side2.x= side2body.position.x 
  side2.y= side2body.position.y 

  side3.x= side3body.position.x 
  side3.y= side3body.position.y 
  
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-90})
}
}

