import styles from './PhotoCredits.module.scss';

export interface PhotoCreditsProps {
  photograher: string;
  photographerUrl: string;
}

export default function PhotoCredits(props: PhotoCreditsProps) {
  const {photograher, photographerUrl} = props;

  return (
    <div className={styles.copy}>
      <div id='photo-credits'>
        Photo by <a href={photographerUrl}>{photograher}</a>
        <br />
        via <a href="http://www.unsplash.com">Unsplash</a>.
      </div>
    </div>
  );
}
