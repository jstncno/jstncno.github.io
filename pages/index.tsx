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
  return (<>
    Hello, world!
  </>);
}


export async function getStaticProps(context: GetStaticPropsContext) {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}

