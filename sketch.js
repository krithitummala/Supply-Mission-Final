var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	
	rectMode(CENTER);
	
    engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,60);
	groundSprite.shapeColor=color(255)


	

	
    packageBody = Bodies.circle(400 , 200 , 5 , {isStatic:true,restitution:0.9});
	World.add(world,packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(100, 650, width, 60 , {isStatic:true} );
 	World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  //rect(packageBody.position.x,packageBody.position.y,5,10);
  
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
 
}


function keyPressed(){

	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	  }
}
