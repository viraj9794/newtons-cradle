const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var myEngine, myWorld, b1, b2, b3, b4, b5, b6, b7, holder, c1, c2, c3, c4, c5, c6, c7;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.
	//ball isstatic true

	holder= new Roof(500, 25, 1000, 50)

	b1=new Bob(500, 400, 50);
	b2=new Bob(600, 400, 50);
	b3=new Bob(700, 400, 50);
	b4=new Bob(400, 400, 50);
	b5=new Bob(300, 400, 50);
	b6=new Bob(800, 400, 50);
	b7=new Bob(200, 400, 50);

	c1=new Chain(b1.body,{x: 500, y:25});
	c2=new Chain(b2.body,{x: 600, y:25});
	c3=new Chain(b3.body,{x: 700, y:25});
	c4=new Chain(b4.body,{x: 400, y:25});
	c5=new Chain(b5.body,{x: 300, y:25});
	c6=new Chain(b6.body,{x: 800, y:25});
	c7=new Chain(b7.body,{x: 200, y:25});
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  Engine.update(myEngine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  holder.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  drawSprites();
}
function mouseDragged(){
        Matter.Body.setPosition(b7.body, {x: mouseX , y: mouseY});
}