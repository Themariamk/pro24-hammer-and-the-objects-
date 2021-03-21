const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine, world;
var hammer;
var ground;
var stone;
var rubber;
var gold;
var sand1,sand2,sand3,sand4,sand5;
var sand6,sand7,sand8,sand9,sand10;
var sand11

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	hammer= new Hammer(10,100) 
	stone = new Stone(600,650,120,120);
	ground= new Ground(600,height,1500,20)
	rubber= new Rubber(80, 650, 45);
	gold = new Gold(450,680,95,70);
	
	sand1=new Sand(100,650,5);
	sand2=new Sand(110,650,5);
	sand3=new Sand(120,650,5);
	sand4=new Sand(130,650,5);
	sand5=new Sand(140,650,5);
	sand6=new Sand(150,650,5);
	sand7=new Sand(160,650,5);
	sand8=new Sand(170,650,5);
	sand9=new Sand(180,650,5);
	sand10=new Sand(190,650,5);
	sand11=new Sand(200,650,5);
	sand12=new Sand(210,650,5);


	//Create the Bodies Here.


	//Engine.run(engine);    //check output
                              
}


function draw() {
  //rectMode(CENTER);
  
  
  background("lightblue"); 
  Engine.update(engine);    
  hammer.display();
  stone.display();
  rubber.display();
  gold.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();

  
  
  //drawSprites();
 
}



