import React from 'react';
import Image from 'next/image';
import { getMDXComponent } from 'mdx-bundler/client'

import Article from '@jstncno/lib/layouts/Article';
import Chips from '@jstncno/lib/components/chips/Chips';
import { Code, H1, H2, H3, Link, P, Pre, PublishDate, TitleLink } from '@jstncno/lib/components/typography';
import { getAllPosts, getPost, MarkdownPost } from '@jstncno/lib/utils';

type Params = {
  params: {
    pid: string
  },
};

const BlogPost: React.FC<MarkdownPost> = ({code, frontmatter}) => {
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
            <PublishDate date={new Date(frontmatter.publishDate)} />
          </span>
        </div>
        <div className="-mt-5 mb-5">
          <Chips tags={frontmatter.tags ?? []} />
        </div>
      </header>
      <section className="text-primary dark:text-primary-dark">
        <Component components={{
          h1: H1 as React.FC,
          h2: H2 as React.FC,
          h3: H3 as React.FC,
          p: P as React.FC,
          a: Link as React.FC,
          pre: Pre as React.FC,
          code: Code as React.FC,
        }} />
      </section>
    </Article>
  );
}
export default BlogPost;

export const getStaticProps = async ({ params }: Params) => {
  const {pid} = params;
  const {code, frontmatter} = await getPost(pid);
  if (!frontmatter.published) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export const getStaticPaths = async () => {
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
