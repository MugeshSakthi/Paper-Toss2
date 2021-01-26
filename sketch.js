
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperImg;
var paperSprite,dustbinSprite,dustBinImg;

function preload(){

    paperImg=loadImage("paper.png");
	dustBinImg=loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(200,560,20);
	
	ground = new Ground(400,600,800,20);

	leftDustbin = new dustBin(550,500,20,150);
	bottomDustbin = new dustBin(610,580,100,20);
	rightDustbin = new dustBin(670,500,20,150);
	
	paperSprite=createSprite(20,20,20,20);
	paperSprite.addImage(paperImg);
	paperSprite.scale=0.3;
	
	dustbinSprite=createSprite(610,500);
	dustbinSprite.addImage(dustBinImg);
	dustbinSprite.scale=0.6; 
	
	Engine.run(engine);

}


function draw() {
rectMode(CENTER);

background("white");

Engine.update(engine);

paper.display();
ground.display();
leftDustbin.display();
bottomDustbin.display();
rightDustbin.display();

paperSprite.x=paper.body.position.x;
paperSprite.y=paper.body.position.y;

drawSprites();

}

function keyPressed(){

  if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-48});

  }

}
