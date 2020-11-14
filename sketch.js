var playerImg;
var coinImg1;
var coinImg2;
var coinImg3;

var edges;

function preload(){
playerImg = loadImage("pictures/striker.png");	
coinImg1 = loadImage("pictures/redcoin.png")
coinImg2 = loadImage("pictures/whitecoin.png");
coinImg3 = loadImage("pictures/blackcoin.png");
}

function setup(){

// making the boders of the game
topboard = createSprite(200,0,400,20);
bottomboard = createSprite(200,400,400,20);
rightboard = createSprite(0,200,20,400);
leftboard = createSprite(400,200,20,400);


// making striker of the game 
player = createSprite(200,320);
player.addImage(playerImg);
player.scale = 0.6;

coin1 = createSprite(210,200);
coin1.addImage(coinImg2);
coin1.scale = 0.09;
coin2 = createSprite(170,200);
coin2.addImage(coinImg2);
coin2.scale = 0.09;
coin3 = createSprite(240,200);
coin3.addImage(coinImg3);
coin3.scale = 0.09;
coin4 = createSprite(195,200);
coin4.addImage(coinImg3);
coin4.scale = 0.09;


edges = createEdgeSprites();

}

function draw() {

//the background for the game  
background(rgb(237, 161, 90));
player.velocityX = 0;
player.velocityY = 0;



//this is the code snippet for the movement of the player left 
// and right
if(keyDown(RIGHT_ARROW)){
player.velocityX = 5;  
}
if(keyDown(LEFT_ARROW)){
player.velocityX = -5;  
}
//making the striker move forward when the space bar is pressed
if(keyDown("space")){
player.velocityY = -5; 
}
//making the coins bounce of with the striker 
if(player.isTouching(coin1)){
coin1.bounceOff(player);
}
if(player.isTouching(coin2)){
coin2.bounceOff(player);
}

if(player.isTouching(coin3)){
coin3.bounceOff(player);
}
if(player.isTouching(coin4)){
coin4.bounceOff(player);
}



//making the striker and the other coin bouce of the board edges
createEdgeSprites();
coin1.bounceOff(edges);
coin2.bounceOff(edges);
coin2.bounceOff(coin1);
coin3.bounceOff(edges);
coin4.bounceOff(edges);
coin3.bounceOff(coin4);
player.bounceOff(edges);


//this is the code to make the carrom board lines in the game 
fill(0);
strokeWeight(5);
var line1 = line(50,350,350,350);  
var line2 = line(50,50,350,50);  
var line3 = line(50,50,50,350);
var line4 = line(350,50,350,350); 

// this is to make the circle in the center of the game
noFill();
stroke(0);
ellipse(200,200,100,100);

//the carrom pockets  
noStroke();
fill("red");
var pocket1 = ellipse(10,10,50,50);  
var pocket2= ellipse(390,10,50,50);
var pocket3 = ellipse(10,390,50,50);  
var pocket4 = ellipse(390,390,50,50);


// the boder's colors are the below code snippet  
topboard.shapeColor = "black";
bottomboard.shapeColor = "black";  
rightboard.shapeColor = "black"; 
leftboard.shapeColor = "black";
  
drawSprites();
}
