import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes'

import logoLight from '@jstncno/public/assets/jstncno-light.png';
import logoDark from '@jstncno/public/assets/jstncno-dark.png';

export default function Logo(): JSX.Element {
  const {theme} = useTheme();
  const logo = theme === 'dark' ? logoDark : logoLight;
  return (
    (<Link href="/">

      <Image src={logo} alt="jstncno.dev" width={96} height={54} />

    </Link>)
  );
}
