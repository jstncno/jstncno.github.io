import styles from './PhotoCredits.module.scss';

const UNSPLASH_BASE_URL = 'http://www.unsplash.com';

export interface PhotoCreditsProps {
  photograher: string;
  photoId: string;
}

export default function PhotoCredits(props: PhotoCreditsProps) {
  const {photograher, photoId} = props;
  const photographerUrl = new URL(`/@${photograher}`, UNSPLASH_BASE_URL);
  const photoUrl = new URL(`/photos/${photoId}`, UNSPLASH_BASE_URL);

  return (
    <div className={styles.copy}>
      <div className={styles.photoCredits}>
        Photo by <a href={photographerUrl.href} target='_blank'>
          {photograher}
        </a>
        <br />
        via <a href={photoUrl.href} target='_blank'>Unsplash</a>.
      </div>
    </div>
  );
}
