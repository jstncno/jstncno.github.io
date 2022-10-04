import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import styles from './SplashPage.module.scss';
import Greeting from './Greeting';
import Loader from './Loader';
import PhotoCredits from './PhotoCredits';


export default function SplashPage() {
  const [photo, setPhoto] = useState<Basic|null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (photo) return;
    fetch('/api/unsplash/random-photo')
      .then(resp => resp.json())
      .then(data => setPhoto(data));
  }, []);

  function initialize() {
    setLoaded(true);
  }

  const backgroundPhoto = photo &&
    <Image src={photo.urls.full} layout="fill"
      objectFit="cover"
      width={photo.width} height={photo.height}
      onLoadingComplete={initialize} />;

  const photoCredits = photo &&
    <PhotoCredits
      photograher={photo.user.username}
      photographerUrl={photo.urls.full} />;

  return <>
    <Loader hide={loaded} />
    {backgroundPhoto}
    <div className={styles.overlay}></div>
    <div className={styles.copy}>
      <Greeting />
    </div>
    {photoCredits}
  </>;
}
