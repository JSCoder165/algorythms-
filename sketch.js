var car, truck
var rock, rubber
function setup() {
  createCanvas(800, 800)
//car = createSprite(1, 400, 80, 80);
//truck = createSprite(1, 400, 60, 60);
rock = createSprite(600, 400, 60, 60);
rubber = createSprite(400, 400, 60, 60);
rubber.velocityX = 2
}

function draw() {
background("blue");
//car.x = mouseX
//car.y = mouseY
drawSprites()
bouncy(rubber, rock)
}

function changecolor(moving, fixed){
  if(moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
    moving.y - fixed.y < moving.height/2 + fixed.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
  moving.shapeColor = "red"
  fixed.shapeColor = "orange"
  
    }
  else{
    moving.shapeColor = "grey";
    fixed.shapeColor = "grey";
  }
}


function bouncy(moving, fixed){
if(moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2){
moving.velocityX = moving.velocityX * (-1)
fixed.velocityX = fixed.velocityX * (-1)

}

if(moving.y - fixed.y < moving.height/2 + fixed.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
moving.velocityY = moving.velocityY * (-1)
fixed.velocityY = fixed.velocityY * (-1)

}

}

