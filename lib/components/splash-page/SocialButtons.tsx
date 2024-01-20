import styles from './SocialButtons.module.scss';

interface SocialContactButton {
  name: string;
  fontAwesomeName: string;
  link: string;
}

const SOCIAL_CONTACT_BUTTONS: SocialContactButton[] = [
  {
    'name' : 'email',
    'fontAwesomeName' : 'fa-envelope',
    'link' : 'mailto:jcano001@ucr.edu'
  },
  {
    'name' : 'linkedin',
    'fontAwesomeName' : 'fa-linkedin-square',
    'link' : 'http://linkedin.com/in/justincano'
  },
  {
    'name' : 'github',
    'fontAwesomeName' : 'fa-github-square',
    'link' : 'http://github.com/jstncno'
  },
  {
    'name' : 'location',
    'fontAwesomeName' : 'fa-location-arrow',
    'link' : 'https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA/@37.8791999,-122.4203375,8z/data=!3m1!4b1!4m2!3m1!1s0x808583a3a688d7b5:0x8c891b8457461fa9'
  },
];


export default function SocialButtons() {
  return (
    <div className={styles.container}>
      {SOCIAL_CONTACT_BUTTONS.map((data, i) => {
        const {name, fontAwesomeName, link} = data;
        const fontAwesome = `fa ${fontAwesomeName} fa-4x`;
        return <span key={i}>
          <a href={link} target="_blank" rel="noreferrer">
            <i className={fontAwesome + ' ' + styles.fa} aria-hidden='true'></i>
          </a>
        </span>;
      })}
    </div>
  );
}
