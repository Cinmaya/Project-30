const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var holder,ball,ground;
var platform1,platform2;
var polygon;
var slingShot;
var polygonImg;

function preload(){
    polygonImg=loadImage("polygon.png");
  }

function setup() {
createCanvas(900,400);

engine=Engine.create()
world=engine.world;
Engine.run(engine);

ground=new Ground(450,390,900,20);
platform1=new Platform(390,300,250,10);
platform2=new Platform(600,200,190,10);

  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  
  box8 = new Box(330,235,30,40);
  box9=  new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  
  box16 = new Box(390,155,30,40);

boxA=new Box(540,170,30,40);
boxB=new Box(570,170,30,40);
boxC=new Box(600,170,30,40);
boxD=new Box(630,170,30,40);
boxE=new Box(660,170,30,40);

boxF=new Box(570,130,30,40);
boxG=new Box(600,130,30,40);
boxH=new Box(630,130,30,40);

boxI=new Box(600,90,30,40);

polygon= Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background("white");

  ground.display();
  platform1.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  boxA.display();
  boxB.display();
  boxC.display();
  boxD.display();
  boxE.display();
  boxF.display();
  boxG.display();
  boxH.display();
  boxI.display();
  
  imageMode(CENTER)
  image(polygonImg ,polygon.position.x,polygon.position.y,30,30);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}