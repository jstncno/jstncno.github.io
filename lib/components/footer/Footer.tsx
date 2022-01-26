
import Logo from '@jstncno/lib/components/logo/Logo';
import { Link } from '@jstncno/lib/components/typography';
import { SOCIAL_MEDIA } from '@jstncno/lib/constants';

export default function Footer(): JSX.Element {
  return (
    <div className="grid grid-cols-6 grid-rows-3 w-full border-t border-gray-200 dark:border-gray-800 md:grid-rows-2">
      <div className="col-span-6 text-center mt-4 md:col-start-2 md:col-span-2 md:text-left md:mt-12 md:row-span-1">
        <Logo />
      </div>
      <div className="col-span-6 text-center md:col-start-4 md:col-span-2 md:mt-16 md:row-span-2 lg:col-start-5 lg:col-span-1">
        <ul>
          <li className="text-primary dark:text-primary-dark mb-2">
            <b>Links</b>
          </li>
          {SOCIAL_MEDIA.map(({href, name}, idx) => (
            <li key={idx}>
              <Link href={href} target="_blank">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6 text-primary dark:text-primary-dark text-center text-sm mt-16 mb-8 md:row-start-2 md:col-start-2 md:text-left md:col-span-2 md:row-span-1">
        © 2022-present Justin Cano. All Rights Reserved.
      </div>
    </div>
  );
}
