import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './Home.module.scss';
import BackgroundGraphic from '../components/background-graphic/BackgroundGraphic';
import Navbar from '../components/navbar/Navbar';
import { H1, H2 } from '../components/typography';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>JSTNCNO</title>
      <meta name="description" content="Justin Cano's Dev Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BackgroundGraphic />
    <Navbar />

    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <main className="md:col-span-5 lg:col-start-2 lg:col-span-2">
        <H2>Recent</H2>
        {/* TODO: dynamically populate w/ components */}
        <section>
          <H1>Lorem ipsum dolor sit amet</H1>
        </section>
      </main>
      <aside className="md:col-span-5 lg:col-start-4">
        <div className="grid grid-rows-2">
          <section className="row-start-1">
            <H2>Most Popular</H2>
            <ul className="mx-5 list-disc font-bold font-mono text-primary dark:text-primary-dark">
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </section>
          <section className="row-start-2">
            <H2>By Category</H2>
          </section>
        </div>
      </aside>
    </div>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
