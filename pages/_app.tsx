import '../styles/prism-tomorrow.min.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import AppShell from '@jstncno/lib/layouts/AppShell';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
export default MyApp;
