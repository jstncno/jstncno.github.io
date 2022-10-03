import { useRouter } from 'next/router';

import '../styles/prism-tomorrow.min.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

import AppShell from '@jstncno/lib/layouts/AppShell';
import SplashPage from '@jstncno/lib/components/splash-page/SplashPage';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const component = (
    window.location.hostname.startsWith('blog.') ||
    router.pathname !== '/'
  ) ? <AppShell>
        <Component {...pageProps} />
      </AppShell> :
      <SplashPage />;
  return component;
}
export default MyApp;
