import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Footer from '@jstncno/lib/components/footer/Footer';
import BackgroundGraphic from '@jstncno/lib/components/background-graphic/BackgroundGraphic';
import Navbar from '@jstncno/lib/components/navbar/Navbar';
import { Chips, Hero, H2, P, PublishDate, TitleLink } from '@jstncno/lib/components/typography';
import profilePic from '@jstncno/public/jstncno-profile.png';

const Home: NextPage = () => (
  <div className="flex flex-col justify-center mt-16 md:mt-32">
    <Head>
      <title>JSTNCNO</title>
      <meta name="description" content="Justin Cano's Dev Blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BackgroundGraphic />
    <Navbar />

    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
      <main className="md:col-span-6 lg:col-start-2 lg:col-span-3">
        <section className="mb-16">
          <Hero>DEV BLOG</Hero>
          <div className="mt-6 md:mt-0 grid grid-cols-3 grid-rows-1 gap-x-4">
            <div className="col-start-1 md:hidden">
              <Image src={profilePic} layout="responsive" />
            </div>
            <div className="text-sm col-start-2 col-end-6 md:col-start-1 md:text-base">
              <P>
                Hi there, my name is Justin and I build things for the web.
                Welcome to my blog, where I ocassionally write about my
                experiences as a software developer.
              </P>
            </div>
          </div>
        </section>
        <H2>Recent</H2>
        {/* TODO: dynamically populate w/ components */}
        <section className="mt-12 mb-7">
          <TitleLink href="#">Lorem ipsum dolor sit amet</TitleLink>
          <PublishDate date={new Date()} />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ultricies tristique nulla aliquet enim tortor. Odio facilisis mauris
            sit amet massa vitae tortor condimentum.
          </P>
          <Chips tags={['React', 'TypeScript']} />
        </section>
        <section className="mt-12 mb-7">
          <TitleLink href="#">Lorem ipsum dolor sit amet</TitleLink>
          <PublishDate date={new Date()} />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ultricies tristique nulla aliquet enim tortor. Odio facilisis mauris
            sit amet massa vitae tortor condimentum.
          </P>
          <Chips tags={['React', 'TypeScript']} />
        </section>
      </main>

      <aside className="md:col-span-6 lg:col-start-5 lg:col-span-2">
        <div className="grid grid-rows-3">
          <section className="hidden lg:block row-start-1 w-2/3 text-center lg:text-left">
            <Image src={profilePic} width={196} height={196} />
          </section>
          <section className="row-start-1 lg:row-start-2">
            <H2>Most Popular</H2>
            <ul className="mx-5 list-disc font-bold font-mono text-primary dark:text-primary-dark">
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </section>
          <section className="row-start-2 lg:row-start-3">
            <H2>By Category</H2>
            <Chips tags={['React', 'TypeScript']} />
          </section>
        </div>
      </aside>
    </div>

    <Footer />
  </div>
);

export default Home;
