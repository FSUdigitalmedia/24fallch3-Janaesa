let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 1;  // speed in X direction
let y1Speed = 2; // speed in Y direction
let d1 = 40;      // diameter of the ball

let x2 = 150;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 1;  // speed in X direction
let y2Speed = 2; // speed in Y direction
let d2 = 40;      // diameter of the ball

let x3 = 300;     // x position of the ball
let y3 = 0;       // y position of the ball
let x3Speed = 1;  // speed in X direction
let y3Speed = 2; // speed in Y direction
let d3 = 40;      // diameter of the ball

let x4 = 170;     // x position of the ball
let y4 = 0;       // y position of the ball
let x4Speed = 1;  // speed in X direction
let y4Speed = 2; // speed in Y direction
let d4 = 40;      // diameter of the ball

let x5 = 250;     // x position of the ball
let y5 = 7;       // y position of the ball
let x5Speed = 1;  // speed in X direction
let y5Speed = 2; // speed in Y direction
let d5 = 40;      // diameter of the ball



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 1000, 1000); // Changed color to light blue!
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;

  fill(248,152,128)
  ellipse(x1, y1, d1);
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;

  fill(248,152,128)
  ellipse(x2, y2, d2);

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x3 > width || x3 < 0) {
    x3Speed = x3Speed * -1;  
  }
  x3 = x3 + x3Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y3 > width || y3 < 0) {
    y3Speed = y3Speed * -1;  
  }
  y3 = y3 + y3Speed;

  fill(0,128,128)
  ellipse(x3, y3, d3);

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x4 > width || x4 < 0) {
    x4Speed = x4Speed * -1;  
  }
  x4 = x4 + x4Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y4 > width || y4 < 0) {
    y4Speed = y4Speed * -1;  
  }
  y4 = y4 + y4Speed;

  fill(255,255,0)
  ellipse(x4, y4, d4);

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x5 > width || x5 < 0) {
    x5Speed = x5Speed * -1;  
  }
  x5 = x5 + x5Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y5 > width || y5 < 0) {
    y5Speed = y5Speed * -1;  
  }
  y5 = y5 + y5Speed;

  fill(248,152,128)
  ellipse(x2, y2, d2);
}

function mouseClicked() {
  if (fill === 0) {
    value = 255;
  } else {
    fill = 0;
  }
 //erases all circles once canvas is clicked
}
  
    
 
