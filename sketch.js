
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground;
var box1,box2;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600, height, 1200, 20);
	World.add(world,ground);
	ball1 = new Ball(80,700,40);
	box1 = new Box(600,840,100,PI/2)
	box2 = new Box(800,840,100,PI/2)
}



function draw() {
  
  background(0);
  ground.display()
  ball1.display()
  box1.display()
  box2.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:70,y:-70});
	}
}


