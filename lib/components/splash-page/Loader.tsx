import styles from './Loader.module.scss';

export interface LoaderProps {
  hide?: boolean;
}

export default function Loader(props: LoaderProps) {
  const {hide} = props;
  const hidden = hide ? styles.hidden : '';
  return <div className={styles.container + ' ' + hidden}>
    <div className={styles.loader}>
      {Array.from(Array(9)).map((_, i) =>
        <div key={i} className={styles.cube}></div>
      )}
    </div>
  </div>;
}