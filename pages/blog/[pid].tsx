import React, { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script'
import { getMDXComponent } from 'mdx-bundler/client';


import Article from '@jstncno/lib/layouts/Article';
import Chips from '@jstncno/lib/components/chips/Chips';
import { Callout, Code, H1, H2, H3, Link, ListItem, OrderedList, P, Pre, PublishDate, UnorderedList, TitleLink, HorizontalRule } from '@jstncno/lib/components/typography';
import { getAllPosts, getPost, MarkdownPost } from '@jstncno/lib/utils';

declare namespace Prism {
  function highlightAll(): void;
}

type Params = {
  params: {
    pid: string
  },
};

export default function BlogPost({code, frontmatter}: MarkdownPost) {
  function highlightAll() {
    if (typeof Prism === 'undefined') setTimeout(highlightAll, 250);
    else Prism.highlightAll();
  }

  useEffect(() => {
    highlightAll();
  }, []);

  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Article>

      <>
        <title>JSTNCNO Dev Blog{frontmatter.title ? ` - ${frontmatter.title}` : ''}</title>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/prism.min.js" integrity="sha512-pSVqGtpGygQlhN8ZTHXx1kqkjQr30eM+S6OoSzhHGTjh6DKdfy7WZlo1DNO9bhtM0Imf6xNLznZ7iVC2YUMwJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/components/prism-core.min.js" integrity="sha512-NC2WFBzw/SdbWrzG0C+sg3iv1OITcQKsUitDcYKfOp9vxe92zpNlRc5Ad3q81kAp8Ff/fDV8pZQxdCCeyFdgLw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/plugins/autoloader/prism-autoloader.min.js" integrity="sha512-GP4x8UWxWyh4BMbyJGOGneiTbkrWEF5izsVJByzVLodP8CuJH/n936+yQDMJJrOPUHLgyPbLiGw2rXmdvGdXHA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="description" content={frontmatter.excerpt} />
      </>

      <header>
        <TitleLink href="#">{frontmatter.title}</TitleLink>
        <div className="flex my-7">
          {frontmatter.author?.picture &&
            <Image src={frontmatter.author.picture}
              alt="Profile picture"
              width={48} height={48} />
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
          blockquote: Callout as React.FC,
          ol: OrderedList as React.FC,
          ul: UnorderedList as React.FC,
          li: ListItem as React.FC,
          hr: HorizontalRule as React.FC,
        }} />
      </section>
    </Article>
  );
}

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
};

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
};
