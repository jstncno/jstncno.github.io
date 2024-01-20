import { MutableRefObject, useEffect, useState } from 'react';
import type p5 from 'p5';

export function useSketch(
  s: (sketch: p5) => void,
  ref: MutableRefObject<HTMLElement|null>,
): p5 | null{
  let sketch = null;
  useEffect(() => {
    if (!ref.current) return;
    const p5js = require('p5');
    sketch = new p5js(s, ref.current);
  }, [ref]);
  return sketch;
}
