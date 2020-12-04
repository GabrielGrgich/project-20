
var speed, weight;

var car, wall;

function setup() {
  createCanvas(1600,400);

 car =  createSprite(50,200,50,50);

 wall = createSprite(1500,200,30,height/2);
 wall.shapeColor = (80,80,80);

 speed=random(55,90);
  weight=random(400,1500);
  car.velocityX =  speed;
}

function draw() {
  background(4,6,7);  

  

  if (wall.x-car.x < (car.width+wall.width)/2)  {

    car.velocityX = 0;
    var deformation=0.5 * weight * speed * speed/22509;

     if (deformation>180) {
       //bad
       console.log(deformation);
      car.shapeColor = "red";
      }

        if (deformation<180 && deformation>100) {
        //ok
        console.log(deformation);
        car.shapeColor = "yellow";
        }

          if (deformation<100 ) {
          //great
          console.log(deformation);
          car.shapeColor = "green";
          }

  }

  drawSprites();
}
