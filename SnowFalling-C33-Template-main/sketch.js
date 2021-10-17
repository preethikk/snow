const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
  snow1=new Snow(200,30,20,30)
  snow2=new Snow(200,30,20,30)
  snow3=new Snow(30,30,20,30)
  snow4=new Snow(35,30,20,30)
  snow5=new Snow(200,30,20,30)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()

  drawSprites();
}