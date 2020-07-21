
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
	pendulum=Bodies.circle(300,200,20,{"restitution":0.8,"friction":1});
	World.add(world,pendulum);
	
	hanger = Bodies.rectangle (350,100,250,40,{isStatic:true})
World.add(world,hanger)

var options={
	bodyA:hanger,
	bodyB:pendulum,
	length:100,
	stiffness:0.04

}
string=Constraint.create(options);
World.add(world,string)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background('blue');
  rect(hanger.position.x,hanger.position.y,600,40)
  ellipse(pendulum.position.x,pendulum.position.y,60,60)

  rect(ground.position.x,ground.position.y,width,10)
  line(hanger.position.x,hanger.position.y,pendulum.position.x,pendulum.position.y)
  
  drawSprites();
 
}
function mouseDragged (){

	Matter.Body.setPosition(pendulum,{x:mouseX,y:mouseY})
	
}


