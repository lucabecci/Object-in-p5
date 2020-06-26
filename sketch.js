var circ = {
  x: 0,
  y: 200,
  diameter: 50,
  r: 20,
  g: 50,
  b: 20,
  speedX: 5
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 250, 100);
  //ELLIPSE
  fill(circ.r,circ.g,circ.b);
  ellipse(circ.x,circ.y,circ.diameter,circ.diameter);
  
  circ.x = circ.x + circ.speedX;
  if(circ.x >= width || circ.x <= 0){
    circ.speedX = circ.speedX * -1
    circ.r  = 0  + .9;
    circ.g  = 0  + 2;
    circ.b  = 0 + .4;
  }
  
  circ.r  = circ.r  + .9;
  circ.g  = circ.g  + 2;
  circ.b  = circ.b  + .4;
}
