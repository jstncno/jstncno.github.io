import fs from 'fs';
import path from 'path';

import { bundleMDX } from 'mdx-bundler';

import { POSTS_DIR } from './constants';

export type MarkdownPost = {
  pid: string;
  code: string,
  frontmatter: {[key: string]: any},
};

export function walkdir(dir: string): string[] {
  return fs.readdirSync(dir).flatMap(p => {
    const filepath = path.join(dir, p);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) return walkdir(filepath);
    else if (stats.isFile()) return filepath;
    return '';
  });
}

export function scandir(dir: string, target: string): string | undefined {
  return walkdir(dir).find(p => path.basename(p) === target);
}

export function getAllPostIds(): string[] {
  return walkdir(POSTS_DIR)
    .map(p => path.basename(p))
    .filter(p => p.endsWith('.mdx'))
    .map(p => p.replace(/\.mdx$/, ''));
}

export function getPostMarkdown(pid: string): string {
  const filepath = scandir(POSTS_DIR, `${pid}.mdx`);
  if (!filepath || !fs.existsSync(filepath)) throw new Error(`No such file or directory: ${filepath}`);
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
  const {code, frontmatter} = await bundleMDX(md, {cwd: process.cwd()});
  return {pid, code, frontmatter};
}
