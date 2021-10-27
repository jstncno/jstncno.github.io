import Image from 'next/image';
import { useTheme } from 'next-themes'

import logoLight from '@jstncno/public/jstncno-light.png';
import logoDark from '@jstncno/public/jstncno-dark.png';

export default function Logo(): JSX.Element {
  const {theme} = useTheme();
  const logo = theme === 'dark' ? logoDark : logoLight;
  return (
    <Image src={logo} alt="jstncno.dev" width={96} height={54} />
  );
}