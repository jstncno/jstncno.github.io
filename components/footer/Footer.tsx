import Logo from '@jstncno/components/logo/Logo';
import { Link } from '@jstncno/components/typography';

export default function Footer(): JSX.Element {
  return (
    <div className="grid grid-cols-6 grid-rows-3 w-full border-t border-gray-200 dark:border-gray-800 md:grid-rows-2">
      <div className="col-span-6 text-center mt-4 md:col-start-2 md:col-span-2 md:text-left md:mt-12 md:row-span-1">
        <Logo />
      </div>
      <div className="col-span-6 text-center md:col-start-4 md:col-span-2 md:mt-16 md:row-span-2">
        <ul>
          <li className="text-primary dark:text-primary-dark mb-2">
            <b>Links</b>
          </li>
          <li>
            <Link href="https://twitter.com/jstncno" target="_blank">
              Twitter
            </Link>
          </li>
          <li>
            <Link href="https://github.com/jstncno" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/justincano" target="_blank">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-6 text-center text-sm mt-16 mb-8 md:row-start-2 md:col-start-2 md:text-left md:col-span-2 md:row-span-1">
        © 2021-present Justin Cano. All Rights Reserved.
      </div>
    </div>
  );
}
