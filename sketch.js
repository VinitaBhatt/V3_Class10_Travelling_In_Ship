var sea,seaImage;
var ship, shipAnimation;
function preload(){
  seaImage = loadImage("sea.png");
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale = 0.25;
  sea.velocityX = -2;

  ship = createSprite(100,300);
  ship.addAnimation("ship_travelling", shipAnimation);
  ship.scale=0.15;
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x = sea.width/8;
  }
  drawSprites();
}