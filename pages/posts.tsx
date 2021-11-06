import React, { useState } from 'react';
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router';

import Article from '@jstncno/lib/layouts/Article';
import { getAllPosts, MarkdownPost } from '@jstncno/lib/utils';
import Chips from '@jstncno/lib/components/chips/Chips';
import SearchBar from '@jstncno/lib/components/search-bar/SearchBar';
import { H1, H2, P, PublishDate, TitleLink } from '@jstncno/lib/components/typography';


const MAX_POSTS_PER_PAGE = 15;

interface PostsProps {
  publishedPosts: MarkdownPost[],
}

const Posts: React.FC<PostsProps> = ({ publishedPosts }) => {
  const router = useRouter();
  const { tags } = router.query;
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = publishedPosts.flatMap(post => post.frontmatter.tags ?? []);
  const availableTags = new Set(allTags.filter(tag => !selectedTags.includes(tag)));

  function intersects(a: string[], b: string[]): boolean {
    const intersection = new Set([...a].filter(x => b.includes(x)));
    return intersection.size > 0;
  }
  const postsByTags = selectedTags.length === 0 ? publishedPosts :
      publishedPosts.filter(post =>
        intersects(selectedTags, post.frontmatter.tags ?? []))
        .slice(0, MAX_POSTS_PER_PAGE);

  const onSelectedTagsChange = (tags: Set<string>) =>
    setSelectedTags(Array.from(tags));

  return (
    <Article>
      <H1>Browse by tag</H1>

      <SearchBar allTags={availableTags} queryParam={tags}
        onSelectedTagsChange={onSelectedTagsChange} />

      <H2>Posts</H2>

      <div className="articles">
        {postsByTags.map((post, idx) => (
          <section className="mt-12 mb-7 first:mt-5" key={idx}>
            <TitleLink href={`/blog/${post.pid}`}>
              {post.frontmatter.title}
            </TitleLink>
            <PublishDate date={new Date(post.frontmatter.publishDate ?? Date.now())} />
            <P>{post.frontmatter.excerpt}</P>
            <Chips tags={post.frontmatter.tags} href="#" />
            <hr className="mt-3 last:hidden" />
          </section>
        ))}
      </div>
    </Article>
  );
};
export default Posts;


export async function getStaticProps(context: GetStaticPropsContext) {
  const publishedPosts = await getAllPosts();
  return {
    props: {
      publishedPosts,
    },
  };
}
