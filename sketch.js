var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var apple
   var leaf


   var select_sprites=Math.round(random(1,2))

   if(frameCount % 80 == 0){
if(select_sprites==1){
    function spawnApples() {
  apple=createSprite(random(50,350),40,10,10)
apple.addImage("App",appleImg)
  apple.velocityY=10
  apple.lifetime=40
}
}
else{
   function spawnLeaves() {
     leaf=createSprite(random(50,350),40,10,10)
     leaf.addImage("Lea",leafImg)
     leaf.velocityY=10
     leaf.lifetime=40
   }
  }
}








  drawSprites();
}