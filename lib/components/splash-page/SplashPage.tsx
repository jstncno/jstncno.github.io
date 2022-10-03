import { useEffect, useState } from 'react';
import Image from 'next/image'

import styles from './SplashPage.module.scss';
import Greeting from './Greeting';
import PhotoCredits from './PhotoCredits';
import { Basic } from 'unsplash-js/dist/methods/photos/types';


export interface SplashPageProps {
  onLoad?: Function;
}

export default function SplashPage(props: SplashPageProps) {
  const [photo, setPhoto] = useState<Basic|null>(null);
  useEffect(() => {
    if (photo) return;
    fetch('/api/unsplash/random-photo')
      .then(resp => resp.json())
      .then(data => setPhoto(data));
  }, []);

  if (!photo) return <></>;

  console.log(photo);

  return <>
    <Image src={photo.urls.full} layout="fill"
      objectFit="cover"
      width={photo.width} height={photo.height}
      onLoad={ev => props.onLoad && props.onLoad(ev)} />
    <div className={styles.overlay}></div>
    <div className={styles.copy}>
      <Greeting />
    </div>
    <PhotoCredits
      photograher={photo.user.username}
      photographerUrl={photo.urls.full} />
  </>;
}
