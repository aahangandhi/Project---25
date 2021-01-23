const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,crumpledPaper;
var bin;
var lady, ladyImg
var groundDisplay;
var dustbin, dustbinImg

function preload(){
    ladyImg = loadImage("ladypickingupgarbage.png");
    dustbinImg = loadImage("dustbingreen.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
   dustbin = createSprite(957,500,50,50);
   dustbin.addImage(dustbinImg);
   dustbin.scale = 0.5;

    ground = new Ground();
    groundDisplay = createSprite(600,585,1200,15)
    groundDisplay.shapeColor = "yellow"

    crumpledPaper = new Paper(350,540,20,20);

   
    lady = createSprite(150,350,50,50);
    lady.addImage(ladyImg)
    lady.scale = 1;


    binPart1 = new Dustbin(890,490,10,150);
    binPart2 = new Dustbin(890,630,145,10);
    binPart3 = new Dustbin(1024,490,10,150);
    binPart4 = new Dustbin(1024,490,10,150);
    
}

function draw(){
    background("orange");
    Engine.update(engine);

    
    stroke("green");
    text("Help this lady throw the paper ball in the Dustbin by clicking the Up Arrow",400,20);

    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
    binPart4.display(); 
 
    console.log(crumpledPaper.x);
    console.log("y = "+crumpledPaper.y);

    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:23,y:-23});
    }
}