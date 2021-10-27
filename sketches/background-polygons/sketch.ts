import type p5 from 'p5';

import Circle from './Circle';
import Vector from './Vector';
import { drawTriangles, setGradientMask } from './utils';

const sketch = (sketch: p5) => {
  let circles: Circle[];
  let gray: p5.Color;
  let transparent: p5.Color;
  let maxPoints: number;

  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight*0.9);
    circles = [];
    maxPoints = Math.min(sketch.width / 3, 500);
    gray = sketch.color(125, 125, 125);
    transparent = sketch.color(255, 255, 255);
    transparent.setAlpha(0);
  };

  sketch.draw = () => {
    sketch.background(255);

    while (circles.length < maxPoints) {
      var newC = newCircle();
      if (newC !== null) {
        circles.push(newC);
      }
    }

    const points = circles.map(cir => new Vector([cir.x, cir.y]));

    drawTriangles(sketch, points, gray, transparent);
    setGradientMask(sketch);

    sketch.noLoop();
  };

  function newCircle() {
    const x = sketch.random(-0.75*sketch.width, 1.25*sketch.width);
    const y = sketch.random(-0.75*sketch.height, 1.25*sketch.height);
    const r = sketch.random(2, 16);
    let valid = true;
    for (var i = 0; i < circles.length; i++) {
      var circle = circles[i];
      var d = sketch.dist(x, y, circle.x, circle.y);
      if (d < r + circle.r) {
        valid = false;
        break;
      }
    }
    if (!valid) return null;
    const coords = new Vector([x, y, r]);
    return new Circle(sketch, coords);
  }
};

export default sketch;
