import { useRef } from 'react';

import styles from './BackgroundGraphic.module.scss';
import sketch from '../../sketches/background-polygons/sketch';
import { useSketch } from '../../hooks';

export default function BackgroundGraphic() {
  const ref = useRef(null);
  useSketch(sketch, ref);
  return <div className={styles.container} ref={ref}></div>;
}
