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

export async function getAllPosts(): Promise<MarkdownPost[]> {
  return Promise.all(getAllPostIds().map(pid => getPost(pid)))
    .then(posts => posts.sort((post1, post2) =>
        post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
}

export async function getPost(pid: string): Promise<MarkdownPost> {
  const md = getPostMarkdown(pid);
  const {code, frontmatter} = await bundleMDX(md);
  return {pid, code, frontmatter};
}
