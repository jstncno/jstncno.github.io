
export default class Vector {
  get size(): number {
    return this.coords.length;
  }

  constructor(public readonly coords: number[]) {}

  get(idx: number): number {
    return this.coords[idx];
  }

  add(other: Vector): Vector {
    if (this.size != other.size) throw `input shapes do not match`;
    const coords = this.coords.map((n: number, i: number) => n + other.get(i));
    return new Vector(coords);
  }
}
