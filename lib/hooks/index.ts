import { MutableRefObject, useEffect, useState } from 'react';
import type p5 from 'p5';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  if (typeof window === 'undefined') return null;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (!window.innerWidth || !window.innerHeight) return;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [window]);

  return windowSize;
}

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
