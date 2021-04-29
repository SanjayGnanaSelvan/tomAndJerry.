
var tom, jerry
var garden

var tomImg1, jerryImg1
var tomImg2, jerryImg2
var tomImg3, jerryImg3
var gardenImg



    function preload(){
        gardenImg = loadImage("images/garden.png");
        tomImg1 = loadImage("images/cat1.png");
        tomImg2= loadAnimation("images/cat2.png", "images/cat3.png");
        tomImg3 = loadImage("images/cat4.png");
        
        jerryImg1 = loadImage("images/mouse1.png")
        jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
        jerryImg3 = loadAnimation("images/mouse4.png");
        
        
      }
      


function setup(){
    createCanvas(1000,800);
    // Moving background
    garden=createSprite(500,400);
    garden.addImage(gardenImg);
    
    tom = createSprite(670,600);
    tom.addAnimation("tom_standing", tomImg1);
    tom.scale=0.2;

    jerry = createSprite(150,600);
    jerry.addAnimation("jerry", jerryImg3)
    jerry.scale = 0.1;

}


function draw() {
    background(0);
  
    //if(jerry.isTouching(tom)){
    //    tom.changeAnimation("tomCollided", tomImg3)
    //   tom.velocityX = 0;
    //   jerry.changeAnimation(jerryImg1);
    //}

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.changeAnimation("tomCollided", tomImg3)
        tom.velocityX = 0;
        jerry.changeAnimation(jerryImg1);
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Distance: "+ distance,900,30);
}


function keyPressed(){

    if(keyCode === LEFT_ARROW) { 
        tom.velocityX = -1;
        tom.addAnimation("tom_running", tomImg2)
        tom.changeAnimation("tom_running");
        
      }

      if(keyCode === RIGHT_ARROW) { 
        jerry.addAnimation("jerry_teasing", jerryImg2)
        jerry.changeAnimation("jerry_teasing");
        jerry.frameDelay = 25;
      }

}