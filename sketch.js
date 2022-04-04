// Ball variables
let xBall = 250;
let yBall = 200;
let diameterBall = 15;
let radius = diameterBall / 2;

// Ball Speed Variables
let speedXBall = 8;
let speedYBall = 8;

// My rect variables
let xmyRacket = 5;
let heightmyRacket = 100;
let ymyRacket = 150
let widthmyRacket = 15;


function setup() {
  createCanvas(500, 400);
}

// Most important function of the game
function draw() {
  background(0);
  showBall();
  speedBall();
  validateEdgeColision();
  myRacket();
  movemyRacket();
  checkColisionmyRacket();
 
}


// Function for Draw the ball
function showBall() {
  circle(xBall,yBall,diameterBall);

}

// Function for speed control of the ball
function speedBall() {
  xBall += speedXBall;
  yBall += speedYBall;
  
}


// Function for check the ball hits the edge
function validateEdgeColision() {
  
  //* width is the right side limit or X
  //*  xBall + radius > width is the outside of the ball 
  if (xBall + radius > width || xBall - radius < 0){
    speedXBall *= -1;
  }
  
  //* height is the down limit or Y
  if (yBall + radius > height || yBall - radius < 0){
    speedYBall *= -1
  }
}

// My Rect, i.e, the who I control
function myRacket(){
//    rect(xmyRacket,ymyRacket,widthmyRacket,heightmyRacket);
    rect(xmyRacket,ymyRacket,widthmyRacket,heightmyRacket);
}

function movemyRacket(){
  if (keyIsDown(UP_ARROW)){
    ymyRacket -= 5
  }
  
    if (keyIsDown(DOWN_ARROW)){
    ymyRacket += 5
  }
}

// check colision between my racket and ball

//----> Falta completar o resto da aula. A partir do minuto 4 mais ou menos.
function checkColisionmyRacket(){
  if (xBall - radius < xmyRacket + widthmyRacket && yBall - radius < ymyRacket + heightmyRacket){
       speedXBall *= -1
  }
}