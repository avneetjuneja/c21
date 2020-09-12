function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200,20,20);
  rect1 = createSprite(50,50,50,50);
  rect2 =createSprite(750,50,50,50);
  rect3 =createSprite(780,350,50,50);
  rect4 = createSprite(50,30,50,50);
  rect5 = createSprite(140,350,50,50);
  rect6 = createSprite(140,30,50,50);
  rect1.shapeColor = "blue";
  rect2.shapeColor = "yellow";
  rect5.shapeColor = "pink";
  rect6.shapeColor = "purple";
  rect1.velocityX = 5;
  rect2.velocityX = -7;
  rect5.velocityY = -6;
  rect6.velocityY = 4;
}

function draw() {
  background(0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,rect3)) {
    movingrect.shapeColor = "red";
    rect3.shapeColor = "red";
  }

else{
  movingrect.shapeColor = "green";
  rect3.shapeColor = "green";
}
if(isTouching(movingrect,rect4)) {
  movingrect.shapeColor = "red";
  rect4.shapeColor = "red";
}

else{
movingrect.shapeColor = "green";
rect4.shapeColor = "green";
}
if(isTouching(movingrect,fixedrect)) {
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}

else{
movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
}
bounceOff(rect1,rect2);
bounceOff(rect5,rect6);


  drawSprites();
}
