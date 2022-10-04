import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import styles from './SplashPage.module.scss';
import Loader from './Loader';
import PhotoCredits from './PhotoCredits';
import SocialButtons from './SocialButtons';


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
    <PhotoCredits photograher={photo.user.username} photoId={photo.id} />;

  return <>
    <Head>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Arvo|Rokkitt|Slabo+27px|Poppins|Questrial|Raleway|" />
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
        crossOrigin="anonymous" />
    </Head>
    <Loader hide={loaded} />
    {backgroundPhoto}
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <div className={styles.hello}>Hi there.</div>
      <div className={styles.greeting}>
        Welcome to my site! My name is Justin, and I
        currently work as an Technical Lead on the
        Experience Studio Team @ <a href="https://www.google.com/">Google</a>,
        building software systems for Google Experience Centers.
        <SocialButtons />
      </div>
      {photoCredits}
    </div>
  </>;
}
