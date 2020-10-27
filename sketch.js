var fixedRect, movingRect;
var obj1,obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  obj2=createSprite(200,500,50,50);
  obj2.shapeColor="green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1=createSprite(200,200,20,40)
  obj1.shapeColor="green"
  obj1.velocityY=2;
  obj2.velocityY=-2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obj1)){
    movingRect.shapeColor = "red";
    obj1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  
bounceOff(obj1,obj2)
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
      
    }
   if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY=object1.velocityY*(-1)
      object2.velocityY=object2.velocityY*(-1)
    }
}
