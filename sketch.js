var frect,mrect ;
function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(200, 200, 30, 50);
  frect.shapeColor="green";
  mrect.shapeColor="green";
  frect.debug=true;
  mrect.debug=true;
}

function draw() {
  background(255,255,255);
 mrect.x=World.mouseX;
 mrect.y=World.mouseY;
 console.log("horizontal distance"+(frect.x - mrect.x))
if((frect.x - mrect.x) < (frect.width/2 + mrect.width/2) &&
(mrect.x - frect.x) < (frect.width/2 + mrect.width/2) &&
(mrect.y - frect.y) < (frect.height/2 + mrect.height/2) &&
(frect.y - mrect.y) < (frect.height/2 + mrect.height/2) 
){
  console.log("touching");
  frect.shapeColor="red";
  mrect.shapeColor="red";
}
else{
  frect.shapeColor="green";
  mrect.shapeColor="green";
}
  drawSprites();
}