import { useRef } from 'react';

import sketch from '@jstncno/sketches/background-polygons/sketch';
import { useSketch } from '@jstncno/lib/hooks';
import styles from './BackgroundGraphic.module.scss';

export default function BackgroundGraphic() {
  const ref = useRef(null);

  useSketch(sketch, ref);
  return <div className={styles.container} ref={ref}></div>;
}
