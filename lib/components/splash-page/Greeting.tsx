import styles from './Greeting.module.scss';


export default function Greeting() {
  return <div className={styles.container}>
    <div className={styles.hello}>Hi there.</div>
    <div className={styles.greeting}>
      Welcome to my site! My name is Justin, and I
      currently work as an Technical Lead on the
      Experience Studio Team @ <a href="https://www.google.com/">Google</a>,
      building software for Experience Centers.
    </div>
  </div>;
}