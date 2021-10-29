import React from 'react';
import Image from 'next/image';
import { getMDXComponent } from 'mdx-bundler/client'

import Article from '@jstncno/lib/layouts/Article';
import { Chips, PublishDate, TitleLink } from '@jstncno/lib/components/typography';
import { getAllPosts, getPost, MarkdownPost } from '@jstncno/lib/utils';

type Params = {
  params: {
    pid: string
  },
};

export default function HelloWorld({code, frontmatter}: MarkdownPost) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Article>
      <header>
        <TitleLink href="#">{frontmatter.title}</TitleLink>
        <div className="flex my-7">
          {frontmatter.author?.picture &&
            <Image src={frontmatter.author.picture} width={48} height={48} />
          }
          <span className="ml-5">
            <PublishDate date={new Date(frontmatter.date)} />
          </span>
        </div>
        <div className="-mt-5 mb-5">
          <Chips tags={frontmatter.tags ?? []} />
        </div>
      </header>
      <section className="text-primary dark:text-primary-dark">
        <Component />
      </section>
    </Article>
  );
}

export async function getStaticProps({ params }: Params) {
  const {code, frontmatter} = await getPost(params.pid);
  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          pid: post.pid,
        },
      }
    }),
    fallback: false,
  }
}
