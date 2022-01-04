import {spawnSync} from 'child_process';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { bundleMDX } from 'mdx-bundler';

import { POSTS_DIR } from '../lib/constants';
import { getPostMarkdown } from '../lib/utils';

function commitMessage(pid: string) {
  return `Published "${pid}.mdx" 🎉`;
}

function printUsage() {
  console.log('\n\nUsage: ts-node -O \'{"module": "commonjs"}\' ' +
              'scripts/publish.ts <pid>\n');
  console.log('\tpid\tID of post (listed in _posts/) to publish\n');
}

async function main() {
  const pid = process.argv[2];
  if (!pid) {
    printUsage();
    console.error('\nMissing required field: Post ID');
    return;
  }

  const filepath = path.join(POSTS_DIR, `${pid}.mdx`);
  if (!fs.existsSync(filepath)) {
    printUsage();
    console.error(`\nFile not found: ${filepath}`);
    console.error(`Post "${pid}" does not exist.`);
    return;
  }

  const md = getPostMarkdown(pid);
  const bundle = await bundleMDX(md);

  if (bundle.frontmatter.published) {
    console.warn('Post already published.')
    console.warn('Exiting.');
    return;
  }
  bundle.frontmatter.published = true;
  bundle.frontmatter.publishDate = (new Date()).toISOString();
  const frontmatter = `---\n${yaml.dump(bundle.frontmatter)}---\n`;
  fs.writeFileSync(filepath, frontmatter + bundle.matter.content);

  const commitMsg = commitMessage(pid);
  const command = 'git';
  const args = ['commit', filepath, '-m', commitMsg];
  const debugMsg = [command, ...args].join(' ');
  const out = spawnSync('git', ['commit', filepath, '-m', commitMsg]);
  if (out.status == null) {
    console.error(`Error running command:\n\t${debugMsg}`);
    return;
  } else if (out.status > 0) {
    console.log(out.stdout.toString('utf-8'));
    console.log(out.stderr.toString('utf-8'));
    console.error(`Error running command:\n\t${debugMsg}`);
    return;
  }
}

main();
