var blueballoon,blueballoon_image, bbGroup,
    
    
    greenballon,greenballoon_image,gbGroup,
    
    
    pinkballon,pinkballoon_image,pbGroup,
    
    
    redballon,redballoon_image,rbGroup;
    
var  ground,ground_image,   ground2,ground2_image;

var bow,bow_image;

var arrow,arrow_image,arrowGroup,asound;

var score=0,bsound;

function preload(){
 //load your images here 
 
  asound=loadSound("arrow sound.mp3");
  bsound=loadSound("balloon.mp3");
  
  ground_image=loadImage("background0.png");
  
  ground2_image=loadImage("background0.png");
  
  blueballoon_image=loadImage("blue_balloon0.png");
  blueballoon2_image=loadImage("blue_balloon0.png");
  blueballoon3_image=loadImage("blue_balloon0.png");
  blueballoon4_image=loadImage("blue_balloon0.png");
  
  pinkballoon_image=loadImage("pink_balloon0.png");
  pinkballoon2_image=loadImage("pink_balloon0.png");
  
  redballoon_image=loadImage("red_balloon0.png");
  redballoon2_image=loadImage("red_balloon0.png");
  redballoon3_image=loadImage("red_balloon0.png");
  redballoon4_image=loadImage("red_balloon0.png");
  redballoon5_image=loadImage("red_balloon0.png");
  redballoon6_image=loadImage("red_balloon0.png");
  redballoon7_image=loadImage("red_balloon0.png");
  
  greenballoon_image=loadImage("green_balloon0.png");
  greenballoon2_image=loadImage("green_balloon0.png");
  greenballoon3_image=loadImage("green_balloon0.png");
  greenballoon4_image=loadImage("green_balloon0.png");
  greenballoon5_image=loadImage("green_balloon0.png");
  
  bow_image=loadImage("bow0.png");
  
  arrow_image=loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(405, 380);
  
  //add code here
  ground=createSprite(205,180,600,20);
  ground.addImage("image",ground_image);
  
  ground2=createSprite(604,180,600,20);
  ground2.addImage("image",ground2_image);
  
  bow=createSprite(380,240,2,2);
  bow.addImage("image",bow_image);

  bbGroup=new Group();
  gbGroup=new Group();
  rbGroup=new Group();
  pbGroup=new Group();
  arrowGroup=new Group();
  
}

function draw() {
  
  background(212);


  //add code here
  
  if(arrowGroup.isTouching(rbGroup)){
    
   rbGroup.destroyEach();
   arrowGroup.destroyEach();
    bsound.play();
    score=score+1;
}
  
    if(arrowGroup.isTouching(gbGroup)){
    
   gbGroup.destroyEach();
   arrowGroup.destroyEach();
      bsound.play();
    score=score+2;
}
  
    if(arrowGroup.isTouching(bbGroup)){
    
   bbGroup.destroyEach();
   arrowGroup.destroyEach();
      bsound.play();
    score=score+3;
}
  
    if(arrowGroup.isTouching(pbGroup)){
    
   pbGroup.destroyEach();
   arrowGroup.destroyEach();
      bsound.play();
    score=score+4;
}
  
  
  createEdgeSprites();

 if(mouseIsPressed){
   
   createArrow();
   
 }
  
  
  bow.y=mouseY;
  
  
  ground.velocityX=-3;
  ground2.velocityX=-3;

  
if(ground.x<=-197){
  
  ground.x=597;
  
}

  
  if(ground2.x<=-197){
  
  ground2.x=597;
  
}
  

  
  // make the balloon moving
  
  selectballoon();
  
  
  drawSprites();
  
  text("score:"+score,350,15);
}

function selectballoon(){

  var selectballoon=Math.round(random(1,4));
  console.log(selectballoon);
  
if(frameCount%80 === 0){
  
  if(selectballoon==1){
    redballoon();
  }else if(selectballoon==2){
    greenballoon();
  }else if(selectballoon==3){
    blueballoon();
  }else if(selectballoon==4){
    pinkballoon();
    }
  }  
  
  drawSprites();
  
  
}

function redballoon(){
  
red_balloon=createSprite
(0,Math.round(random(20,370)), 10, 10);
  
  red_balloon.lifetime=150;
  red_balloon.velocityX=3;  
  red_balloon.addImage("Image",redballoon_image);
  red_balloon.scale = 0.1;
  red_balloon.lifetime=130;
  red_balloon.setCollider("rectangle",0,-100,400,600);
  
  rbGroup.add(red_balloon);
  
}

function greenballoon(){
  
green_balloon=createSprite
(0,Math.round(random(20,300)), 10, 10);
  
  green_balloon.lifetime=150;
  green_balloon.velocityX=3;  
  green_balloon.addImage("Image",greenballoon_image);
  green_balloon.scale = 0.1;
  green_balloon.lifetime=130;
  green_balloon.setCollider("rectangle",0,-90,400,600);
  
  gbGroup.add(green_balloon);
  
}

function blueballoon(){
  
blue_balloon=createSprite
(0,Math.round(random(20,240)), 10, 10);
  
  blue_balloon.lifetime=150;
  blue_balloon.velocityX=3;  
  blue_balloon.addImage("Image",blueballoon_image);
  blue_balloon.scale = 0.1;
  blue_balloon.lifetime=130;
  blue_balloon.setCollider("rectangle",0,-20,400,500);
  
 bbGroup.add(blue_balloon);
  
}

function pinkballoon(){
  
pink_balloon=createSprite
(0,Math.round(random(20,180)), 10, 10);
 
  
  pink_balloon.lifetime=150;
  pink_balloon.velocityX=3;  
  
   pink_balloon.addImage("Image",pinkballoon_image);
  pink_balloon.lifetime=140;
  pink_balloon.setCollider("rectangle",0,-10,40,40);
  
  pbGroup.add(pink_balloon);
  
}

function createArrow(){
  
  arrow=createSprite(320,bow.Y=mouseY,5,10);
  arrow.addImage("image",arrow_image);
  arrow.velocityX=-6;
  arrow.scale=0.3;
  arrowGroup.add(arrow);
  arrow.lifetime=50;
  asound.play();
  arrow.setCollider("rectangle",0,0,240,20);
  
  
 return arrow;
  
}
