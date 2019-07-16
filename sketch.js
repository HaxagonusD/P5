let bubbleArray = [];

function setup() {
  fill(100);
  createCanvas(400, 400);
}

function draw() {
  background(100);
  fill(255);
  ellipse(200, 350, 50, 50);

  for (let i = 0; i < bubbleArray.length; i++) {
    bubbleArray[i].draw();
  }
  bubbleArray.forEach(item => {
    item.move();
  });
  bubbleArray.push(new Bubble(200, 350, 50, 50));
  console.log(bubbleArray);
}

function mouseClicked() {}

class Bubble {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.diameter = 50;
  }

  move() {
    this.x += random(-10, 10);
    this.y += random(-1, -5);
  }

  draw() {
    let mappedY = map(this.y, 0, 600, 100, 255);
    fill(mappedY);
    noStroke();
    ellipse(this.x, this.y, this.width, this.height);
  }
}
