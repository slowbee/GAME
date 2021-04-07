var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadImage("fairy.png","fairyImage1.png","fairyImage2.png");
    sound = loadSound("JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fairy = createSprite(400,550,40,40)
	fairy.addImage(fairyImg)
	fairy.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(keyDown("left_arrow")){

	fairy.velocityX = -5;
	sound.play()
  }
  else{

	fairy.velocityX = 0;

  }

  if(keyDown("right_arrow")){

	fairy.velocityX = 5;
	sound.play()
  }
  else{

	fairy.velovityX = 0;
  }

  if(star.y > 470 && starBody.position.y > 470){
Matter.Body.setStatic(starBody,true);

  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
