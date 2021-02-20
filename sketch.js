const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin, paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
  
	dustbin = new Dustbin(550,620,20,100);
	dustbin2 = new Dustbin(610,660,100,20);
	dustbin3 =new Dustbin(670,620,20,100);
	paper = new Paper(100,610,10);
	ground = new Ground(400,680,800,20);
    
	
  World.add(world,ground);		
}


function draw() {
	background("blue");
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  dustbin.display();
  paper.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{
		x:12,
		y:-12
	});
	paper.collide
	}
}
	




