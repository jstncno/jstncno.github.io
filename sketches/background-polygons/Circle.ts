import type p5 from 'p5';

import Vector from './Vector';

export default class Circle {
  get x(): number {
    return this.coords.get(0);
  }

  get y(): number {
    return this.coords.get(1);
  }

  get r(): number {
    return this.coords.get(2);
  }

  constructor(
    private readonly p5: p5,
    private readonly coords: Vector,
    public color: string = '#D3D3D3') {}

  draw(size?: number) {
    size = size ?? this.r;
    this.p5.noStroke();
    this.p5.fill(this.color);
    this.p5.ellipse(this.x, this.y, size, size);
  }

  edges() {
    return (
      this.x + this.r >= this.p5.width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= this.p5.height ||
      this.y - this.r <= 0
    );
  }
}
