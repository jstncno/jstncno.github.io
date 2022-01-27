import { GetStaticPropsContext } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import BackgroundGraphic from '@jstncno/lib/components/background-graphic/BackgroundGraphic';
import { getAllPosts, MarkdownPost } from '@jstncno/lib/utils';
import Chips from '@jstncno/lib/components/chips/Chips';
import { Hero, H2, P, PublishDate, TitleLink, Code } from '@jstncno/lib/components/typography';
import profilePic from '@jstncno/public/assets/jstncno-profile.png';

const MAX_RECENT_POSTS = 20;
const MAX_MOST_POPULAR = 20;

export default function App({allPosts}: {allPosts: MarkdownPost[]}) {
  const tags = allPosts.flatMap(post => post.frontmatter.tags ?? []);
  return (
    <div className="flex flex-col justify-center mt-16 md:mt-26">
      <Head>
        <title>JSTNCNO Dev Blog</title>
        <meta name="description" content="Justin Cano's Software Development Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundGraphic />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
        <main className="md:col-span-6 lg:col-start-2 lg:col-span-3">
          <section className="mb-16">
            <Hero>DEV BLOG</Hero>
            <div className="items-center mt-6 md:mt-0 grid grid-cols-3 grid-rows-1 gap-x-4">
              <div className="col-start-1 max-w-164px lg:hidden">
                <Image src={profilePic} priority layout="responsive" />
              </div>
              <div className="text-sm col-start-2 col-end-6 lg:col-start-1 lg:text-base">
                <P>
                  Hi there! My name is Justin and I enjoy building things for the
                  web. This is my developer playground, where I experiment with
                  {' '}<Code>code</Code>{' '}
                  and blog about my experiences.
                </P>
              </div>
            </div>
          </section>

          <H2>Recent</H2>

          {allPosts.slice(0, MAX_RECENT_POSTS).map((post, idx) => (
            <section className="mt-12 mb-7" key={idx}>
              <TitleLink href={`/blog/${post.pid}`}>
                {post.frontmatter.title}
              </TitleLink>
              <PublishDate date={new Date(post.frontmatter.publishDate ?? Date.now())} />
              <P>{post.frontmatter.excerpt}</P>
              <Chips tags={post.frontmatter.tags} />
            </section>
          ))}
        </main>

        <aside className="md:col-span-6 lg:col-start-5 lg:col-span-1">
          <div className="grid grid-rows-3">
            <section className="hidden lg:block row-start-1 w-2/3 text-center lg:text-left">
              <Image src={profilePic} width={196} height={196} />
            </section>
            {/* TODO (jstncno): Determine "popularity" metric */}
            {/* <section className="row-start-1 lg:row-start-2">
              <H2>Most Popular</H2>
              <ul className="mx-5 mt-2 list-disc font-bold font-mono text-primary dark:text-primary-dark hover:underline">
                {allPosts.slice(0, MAX_MOST_POPULAR).map((post, idx) => (
                  <li key={idx}>
                    <Link href={`/blog/${post.pid}`}>
                      {post.frontmatter.title}
                    </Link>
                  </li>))}
              </ul>
            </section> */}
            <section>
              <H2>By Category</H2>
              <Chips tags={tags} />
            </section>
          </div>
        </aside>
      </div>

    </div>
  );
}


export async function getStaticProps(context: GetStaticPropsContext) {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}

