var starkTower;
var loki;
var septer,sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8;
var database;
var tony,bruce,nat,clint,captian,thor;
var imimg,himg,natimg,clintimg,capimg,timg;
var sanimg;

var gamestate = 0;
var playerCount;
var allPlayers;
var form, player, game;


function preload(){
  starkTower = loadImage("images/ST.png");
  loki = loadImage("images/loki.png");
   septer= loadImage("images/septer.png");
  sanimg = loadImage("images/san.png");


   imimg = loadImage("images/ironman.png");
   himg = loadImage("images/hulk.png");
   natimg = loadImage("images/nat.png");
  clintimg = loadImage("images/clint.png");
  capimg = loadImage("images/cap.png");
  timg = loadImage("images/thor.png");

}

function setup() {
createCanvas(800,800);
database = firebase.database();

 
 game= new Game();
 game.getState();
 game.start();
  
}



function draw() {
 

 if(playerCount === 2){
  game.update(1);
}
if(gamestate === 1){
  clear();
  game.play();
console.log('gamestateis1')
  starktower=createSprite(350, 120, 5, 5);
  starktower.addImage("starktower",starkTower);
  starktower.scale=0.2;

 tst=createSprite(200, 70, 5, 5);
  tst.addImage("tst",sanimg);
  tst.scale=0.2;

  loki1=createSprite(50, 750, 5, 5);
  loki1.addImage("loki",loki);
 loki1.scale=0.3;

  loki2=createSprite(150, 750, 5, 5);
  loki2.addImage("loki",loki);
 loki2.scale=0.3;

 loki3=createSprite(250, 750, 5, 5);
  loki3.addImage("loki",loki);
 loki3.scale=0.3;

 loki4=createSprite(350, 750, 5, 5);
  loki4.addImage("loki",loki);
 loki4.scale=0.3;

 loki5=createSprite(450, 750, 5, 5);
  loki5.addImage("loki",loki);
 loki5.scale=0.3;

 loki6=createSprite(550, 750, 5, 5);
  loki6.addImage("loki",loki);
 loki6.scale=0.3;

 loki7=createSprite(650, 750, 5, 5);
 loki7.addImage("loki",loki);
loki7.scale=0.3;

loki8=createSprite(750, 750, 5, 5);
 loki8.addImage("loki",loki);
loki8.scale=0.3;

  septer1();
 septer2();
 septer3();
 septer4();
 septer5();
 septer6();
 septer7();
 septer8();
 drawSprites();
}
if(gamestate === 2){
  game.end();
}


  
}

function septer1(){
  if (World.frameCount%70===0){
    sp1 = createSprite(50, 750, 5, 5);
    sp1.velocityY=random(-6,-4);
     sp1.addImage("sp",septer);
 sp1.scale=0.1;
   }
  }

  function septer2(){

    if (World.frameCount%60===0){
      sp2 = createSprite(150, 750, 5, 5);
      sp2.velocityY=random(-6,-4);
       sp2.addImage("sp",septer);
   sp2.scale=0.1;
     }
  }

  function septer3(){
    if (World.frameCount%40===0){
      sp3 = createSprite(250, 750, 5, 5);
      sp3.velocityY=random(-6,-4);
       sp3.addImage("sp",septer);
   sp3.scale=0.1;
     }
  }

  function septer4(){
    if (World.frameCount%20===0){
      sp4 = createSprite(350, 750, 5, 5);
       sp4.velocityY=random(-6,-4);
       sp4.addImage("sp",septer);
   sp4.scale=0.1;
     }
  }

  function septer5(){
    if (World.frameCount%70===0){
      sp5= createSprite(450, 750, 5, 5);
      sp5.velocityY=random(-6,-4);
       sp5.addImage("sp",septer);
   sp5.scale=0.1;
     }
  } 

  function septer6(){
    if (World.frameCount%50===0){
      sp6= createSprite(550, 750, 5, 5);
      sp6.velocityY=random(-6,-4);
       sp6.addImage("sp",septer);
   sp6.scale=0.1;
     }
  } 
  
  function septer7(){
    if (World.frameCount%80===0){
      sp7= createSprite(650, 750, 5, 5);
      sp7.velocityY=random(-6,-4);
       sp7.addImage("sp",septer);
   sp7.scale=0.1;
     }
  } 

  function septer8(){
    if (World.frameCount%30===0){
      sp8= createSprite(750, 750, 5, 5);
      sp8.velocityY=random(-6,-4);
       sp8.addImage("sp",septer);
   sp8.scale=0.1;
     }  
  } 


