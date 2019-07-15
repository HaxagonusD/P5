let bubbleArray = [];

function setup() {
  fill(100);
  createCanvas(400, 400);
}

function draw() {
  background(100);
  for (let i = 0; i < bubbleArray.length; i++) {
    bubbleArray[i].draw();
  }
  bubbleArray.forEach(bubble => {
    bubble.move();
  });
}

function mouseClicked() {
  bubbleArray.push(new Bubble(mouseX, mouseY, 50, 50));
}

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
    ellipse(this.x, this.y, this.width, this.height);
  }
}
