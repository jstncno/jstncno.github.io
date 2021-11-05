import fs from 'fs';
import path from 'path';

import { bundleMDX } from 'mdx-bundler';

import { POSTS_DIR } from './constants';

export type MarkdownPost = {
  pid: string;
  code: string,
  frontmatter: {[key: string]: any},
};

export function getAllPostIds(): string[] {
  return fs.readdirSync(POSTS_DIR)
    .filter(p => p.endsWith('.mdx'))
    .map(p => p.replace(/\.mdx$/, ''));
}

export function getPostMarkdown(pid: string): string {
  const filepath = path.join(POSTS_DIR, `${pid}.mdx`);
  return fs.readFileSync(filepath, 'utf-8').trim();
}

export async function getAllPosts(publishedOnly = true): Promise<MarkdownPost[]> {
  const posts = await Promise.all(getAllPostIds().map(pid => getPost(pid)))
    .then(posts => posts.sort((post1, post2) =>
        post1.frontmatter.publishDate > post2.frontmatter.publishDate ? -1 : 1));
  if (!publishedOnly) return posts;
  return posts.filter(post => post.frontmatter.published);
}

export async function getPost(pid: string): Promise<MarkdownPost> {
  const md = getPostMarkdown(pid);
  const {code, frontmatter} = await bundleMDX(md);
  return {pid, code, frontmatter};
}
