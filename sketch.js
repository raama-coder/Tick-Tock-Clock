
var hr, mi, sc
var hrHand, miHand, scHand
var hrAngle, miAngle, scAngle
var centerX,centerY

function setup() {
  createCanvas(800,800);

  centerX=width/2
  centerY=height/2

}

function draw() {
  background("black");  

  mapTime()
  clockArc(scAngle, "red", 200, 5)
  clockArc(miAngle, "yellow", 175, 7)
  clockArc(hrAngle, "aqua", 150, 9)

  //angleMode(DEGREES)

  rotateClockHands(scAngle, "red", 200, 5)
  rotateClockHands(miAngle, "yellow", 175, 7)
  rotateClockHands(hrAngle, "aqua", 150, 9)

  textSize(36)
  fill("white")
  text("Time: "+hr+":"+mi+":"+sc,100,100)
}

function mapTime(){
  hr=hour()
  mi=minute()
  sc=second()

  if(hr>=12){
    hr=hour()%12
  }

  hrAngle=map(hr,0,12,-90,270)
  miAngle=map(mi,0,60,-90,270)
  scAngle=map(sc,0,60,-90,270)
}

function rotateClockHands(angle, color, size, sW){
  let v = p5.Vector.fromAngle(radians(angle), size);
  let vx = v.x;
  let vy = v.y;

  push();
  translate(centerX, centerY);
  noFill();
  stroke(color);
  strokeWeight(sW)
  line(0, 0, vx, vy);
  pop();
}

function clockArc(angle, color, size, sW){
    push()
    stroke(color)
    strokeWeight(sW)
    noFill();
    arc(centerX, centerY, size*3, size*3, radians(-90), radians(angle), OPEN)
    pop()

}