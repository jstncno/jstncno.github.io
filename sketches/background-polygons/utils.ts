import Delaunator from 'delaunator';
import type p5 from 'p5';

import Vector from './Vector';

export function edgesOfTriangle(t: number): number[] {
  return [3 * t, 3 * t + 1, 3 * t + 2];
}


export function drawTriangles(sketch: p5, points: Vector[], from: p5.Color, to: p5.Color) {
  const pts = points.map(p => [p.get(0), p.get(1)]);
  const delaunay = Delaunator.from(pts);

  for (let t = 0; t < delaunay.triangles.length / 3; t++) {
    const [[ax, ay], [bx, by], [cx, cy]] = pointsOfTriangle(delaunay, t)
      .map(p => pts[p]);
    const [_, y] = circumcenter([ax, ay], [bx, by], [cx, cy]);
    const ratio = y / sketch.height;
    const color = sketch.lerpColor(from, to, ratio);
    sketch.fill(color);
    sketch.triangle(ax, ay, bx, by, cx, cy);
  }
}

export function pointsOfTriangle(delaunay: Delaunator<number[][]>, t: number) {
  return edgesOfTriangle(t)
    .map(e => delaunay.triangles[e]);
}

function circumcenter(a: number[], b: number[], c: number[]): number[] {
  const ad = a[0] * a[0] + a[1] * a[1];
  const bd = b[0] * b[0] + b[1] * b[1];
  const cd = c[0] * c[0] + c[1] * c[1];
  const D = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  return [
      1 / D * (ad * (b[1] - c[1]) + bd * (c[1] - a[1]) + cd * (a[1] - b[1])),
      1 / D * (ad * (c[0] - b[0]) + bd * (a[0] - c[0]) + cd * (b[0] - a[0])),
  ];
}

export function setGradient(sketch: p5, x: number, y: number, w: number, h: number, c1: p5.Color, c2: p5.Color) {
  // Top to bottom gradient
  sketch.noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = sketch.map(i, y, y + h, 0, 1);
    let c = sketch.lerpColor(c1, c2, inter);
    sketch.stroke(c);
    sketch.line(x, i, x + w, i);
  }
}

export function setGradientMask(sketch: p5) {
  const drawingContext = sketch.drawingContext as CanvasRenderingContext2D;
  drawingContext.globalCompositeOperation = "destination-out";
  const gradient = drawingContext.createLinearGradient(0, 0, 0, sketch.height);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.9, "rgba(255, 255, 255, 1.0)");
  drawingContext.fillStyle = gradient;
  drawingContext.fillRect(0, 0, sketch.width, sketch.height);
}
