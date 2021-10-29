import NextLink from 'next/link';

import styles from './styles.module.scss';

export function Hero({children}: {children: string}): JSX.Element {
  return (
    <h1 className={styles.hero + " font-mono text-primary dark:text-primary-dark font-bold leading-tight md:leading-loose mb-3 md:mb-0"}>
      {children}
    </h1>
  );
}

export function H1({children}: {children: string}): JSX.Element {
  return (
    <h1 className="font-mono text-primary dark:text-primary-dark text-5xl font-bold">
      {children}
    </h1>
  );
}

export function H2({children}: {children: string}): JSX.Element {
  return (
    <h2 className="text-secondary dark:text-secondary-dark text-4xl font-semibold md:my-5 md:mb-3">
      {children}
    </h2>
  );
}

export function P({children}: {children: string | (string | JSX.Element)[]}): JSX.Element {
  return (
    <p className="font-sans text-primary dark:text-primary-dark md:pr-5">
      {children}
    </p>
  );
}

export function TitleLink({children, href}: {children: string, href: string}): JSX.Element {
  return (
    <NextLink href={href}>
      <a className="hover:underline"><H1>{children}</H1></a>
    </NextLink>
  );
}

export function PublishDate({date}: {date: Date}): JSX.Element {
  const dateStr = date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <h3 className="text-tertiary dark:text-tertiary-dark font-bold my-2">
      {dateStr}
    </h3>
  );
}

export function Chips({tags}: {tags?: string[]}): JSX.Element {
  return (
    <div className="flex flex-row">
      {tags && !!tags.length && Array.from(new Set(tags)).map((tag, idx) => (
        <div className="bg-chip text-xs text-primary-dark px-3 py-1 rounded-3xl my-2 mr-2" key={idx}>
          <NextLink href="#">
            <a>{tag}</a>
          </NextLink>
        </div>
      ))}
    </div>
  );
}

export function Link({children, href, target}: {children: string | JSX.Element, href: string, target?: string}): JSX.Element {
  const color = 'text-primary dark:text-primary-dark';
  const hover = 'hover:text-secondary dark:hover:text-secondary-dark';
  const active = 'active:text-tertiary dark:active:text-tertiary-dark';
  const visited = 'visited:text-tertiary dark:visited:text-tertiary-dark';
  const cls = [color, hover, active, visited, 'underline'].join(' ');
  return (
    <a href={href}
      target={target ?? "_self"}
      className={cls}>
      {children}
    </a>
  );
}
