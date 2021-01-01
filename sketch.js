
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var basket1;
var basket2;
var basket3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,690,1200,20)
	ball1=new Ball(200,200,29);
	basket1=new Basket(900,670,200,20);
	basket2=new Basket(800,630,20,100);
	basket3=new Basket(1000,630,20,100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background(0);

  ball1.display();
  ground.display();
  basket1.display();
  basket2.display();
  basket3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.position,{x:85,y:-85})
	}

}


