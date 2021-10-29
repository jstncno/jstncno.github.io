import { ThemeProvider } from 'next-themes';

import Footer from '@jstncno/lib/components/footer/Footer';
import Navbar from '@jstncno/lib/components/navbar/Navbar';

export default function AppShell({children}: {children?: JSX.Element | JSX.Element[]}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="flex flex-col justify-center mt-16 md:mt-28">
        <Navbar />
        {children instanceof Array ? [...children] : children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
