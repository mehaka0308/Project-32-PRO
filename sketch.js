const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,base,ground1,ground2,polygonimg,polygon,slingshot,background;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25; 
var score = 0;
var backgroundImg;
var bimg = "day.png";

function preload(){
  getBackgroundImage();
  polygonimg = loadImage("polygon.png");
  bimg = loadImage("day.png");
  bimg = loadImage("night.png");
}

function setup(){
  createCanvas(900,500);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  polygon = Bodies.circle(50,200,30);
  World.add(world,polygon);

  base = new Ground(0,490,800,10)

  ground1 = new Ground(400,450,290,10);
  ground2 = new Ground(700,200,210,10);

  slingshot = new Slingshot(this.polygon,{x:100,y:200})

  block1 = new Block(280,420,40,50);
  block2 = new Block(320,420,40,50);
  block3 = new Block(360,420,40,50);
  block4 = new Block(400,420,40,50);
  block5 = new Block(440,420,40,50);
  block6 = new Block(480,420,40,50);
  block7 = new Block(520,420,40,50);

  block8 = new Block(320,370,40,50);
  block9 = new Block(360,370,40,50);
  block10 = new Block(400,370,40,50);
  block11 = new Block(440,370,40,50);
  block12 = new Block(480,370,40,50);

  block13 = new Block(360,320,40,50);
  block14 = new Block(400,320,40,50);
  block15 = new Block(440,320,40,50);

  block16 = new Block(400,270,40,50);

  block17 = new Block(620,180,40,50);
  block18 = new Block(660,180,40,50);
  block19 = new Block(700,180,40,50);
  block20 = new Block(740,180,40,50);
  block21 = new Block(780,180,40,50);

  block22 = new Block(660,150,40,50);
  block23 = new Block(700,150,40,50);
  block24 = new Block(740,150,40,50);

  block25 = new Block(700,100,40,50);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

  textFont("Jokerman");
  textSize(24);
  stroke("black");
  text("Drag the hexagonal stone and release it, to launch it towards the blocks",30,30 )
  text("Score = "+score,100,100)

  fill(238,130,238);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(30,144,255);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block22.display();
  block23.display();
  block24.display();

  fill(0,255,127)
  block13.display();
  block14.display();
  block15.display();
  block25.display();

  fill(255,69,0)
  block16.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block22.score();
  block23.score();
  block24.score();
  block13.score();
  block14.score();
  block15.score();
  block25.score();
  block16.score();

  slingshot.display();
  ground1.display();
  ground2.display();

  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
} 

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon,{x:100,y:200}) 
	  slingshot.attach(this.polygon);
	}
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour >= 06 && hour <= 18){
    bimg = "day.png";
  } 
  else{
    bimg = "night.png";
  }

  backgroundImg = loadImage(bimg);
 // console.log(backgroundImg);
}