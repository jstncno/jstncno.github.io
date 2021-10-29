import path from 'path';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const POSTS_DIR = path.join(process.cwd(), '_posts');

export const SOCIAL_MEDIA = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/jstncno',
    icon: FaTwitter,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jstncno',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/justincano',
    icon: FaLinkedin,
  },
];
