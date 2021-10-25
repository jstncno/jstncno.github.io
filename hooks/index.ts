import { MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
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

export function useSketch(s: (sketch: p5) => void, ref: MutableRefObject<HTMLElement|null>): p5 | null{
  let sketch = null;
  useEffect(() => {
    if (!ref.current) return;
    const p5js = require('p5');
    sketch = new p5js(s, ref.current);
  }, [ref]);
  return sketch;
}


export function useTheme(): ['light' | 'dark' | null, React.Dispatch<SetStateAction<"light" | "dark" | null>>] {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  function persistTheme(th: SetStateAction<"light" | "dark" | null>) {
    const t = th ?? getMediaQueryTheme();
    if (localStorage) localStorage.setItem('theme', t.valueOf().toString());
    return setTheme(t);
  }

  function getMediaQueryTheme(): 'light' | 'dark' {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    return mq.matches ? 'light' : 'dark';
  }

  function getPersistedTheme(): 'light' | 'dark' {
    if (!localStorage) return getMediaQueryTheme();
    const th = localStorage.getItem('theme') as 'light' | 'dark'
    return th ?? getMediaQueryTheme();
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
    function handleChange(light: any) {
      return light.matches ? setTheme('light') : setTheme('dark');
    }
    setTheme(getPersistedTheme());
    lightThemeMq.addEventListener('change', handleChange);
    return () => lightThemeMq.removeEventListener('change', handleChange);
  }, []);

  // if (typeof window === 'undefined') return [null, null];

  return [theme, persistTheme];
}
