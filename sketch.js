// Ball variables
let xBall = 250;
let yBall = 200;
let diameterBall = 25;
let radius = diameterBall / 2;

// Ball Speed Variables
let speedXBall = 6;
let speedYBall = 6;

// My rect variables
let xmyRacket = 5;
let heightRacket = 100;
let ymyRacket = 150
let widthRacket = 15;

//Openent rect variables
let xOpponentRect = 480 
let yOpponentRect = 150
let moveYOpponentRect;

// Scoreboard variables
let opponentPoints = 0;
let myPoints = 0;



function setup() {
  createCanvas(500, 400);
}

// Most important function of the game
function draw() {
  background(0);
  showBall();
  speedBall();
  validateEdgeColision();
  showRacket(xmyRacket,ymyRacket);
  movemyRacket();
  //checkColisionmyRacket();
  showRacket(xOpponentRect,yOpponentRect);
  moveOpponentRacket();
  rectCollide(xmyRacket,ymyRacket);
  rectCollide(xOpponentRect,yOpponentRect);
  showScoreboard();
  pointsCount();

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

// Show any Rect if you set x and y parameters 
function showRacket(x,y){
    rect(x,y,widthRacket,heightRacket);
}

// move my rect up and down
function movemyRacket(){
  if (keyIsDown(UP_ARROW)){
    ymyRacket -= 5
  }
  
    if (keyIsDown(DOWN_ARROW)){
    ymyRacket += 5
  }
}

// check colision between my racket and ball


function checkColisionmyRacket(){
  if (xBall - radius < xmyRacket + widthRacket && yBall - radius < ymyRacket + heightRacket){
       speedXBall *= -1
  }
}

// collideRectCircle is a library function.
// This function returns True or False for
// colision between circle and Rect

function rectCollide(x,y){
  collided = 
  collideRectCircle(x,y,widthRacket,heightRacket, xBall, yBall, radius)
  
  if(collided){
    speedXBall *= -1
  }
}

function moveOpponentRacket(){
  moveYOpponentRect = yBall - yOpponentRect - widthRacket / 2 - 70
  yOpponentRect += moveYOpponentRect
  
  }

// show scoreboard count
function showScoreboard(){
  stroke(255)
  textAlign(CENTER);
  fill(color(217,236,67))
  rect(120,10,40,20)
  rect(350,10,40,20)
  fill(255);
  textSize(16);
  text(opponentPoints,140,25);
  text(myPoints, 370,25);
}

// function of point counting
function pointsCount(){
  if (xBall + radius > 499){
    opponentPoints += 1
  }
    if (xBall - radius < 1){
    myPoints += 1
  }
}




