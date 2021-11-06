import React from 'react';
import NextLink from 'next/link';

import styles from './styles.module.scss';

export const Hero: React.FC = ({children}) => {
  return (
    <h1 className={styles.hero + " font-mono text-primary dark:text-primary-dark font-bold leading-tight xl:leading-loose mb-3 md:mb-0"}>
      {children}
    </h1>
  );
}

export const H1: React.FC = ({children}) => {
  return (
    <h1 className="font-mono text-primary dark:text-primary-dark text-5xl font-bold">
      {children}
    </h1>
  );
}

export const H2: React.FC = ({children}) => {
  return (
    <h2 className="h2 text-secondary dark:text-secondary-dark text-4xl font-semibold mt-7 mb-3">
      {children}
    </h2>
  );
}

export const P: React.FC = ({children}) => {
  return (
    <p className="font-sans text-primary dark:text-primary-dark md:pr-5">
      {children}
    </p>
  );
}

export const TitleLink: React.FC<{href: string}> = ({children, href}) => {
  return (
    <NextLink href={href}>
      <a className="hover:underline"><H1>{children}</H1></a>
    </NextLink>
  );
}

export const PublishDate: React.FC<{date: Date}> = ({date}) => {
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

export const Link: React.FC<{href: string, target?: string}> = (props) => {
  const {children, href, target} = props;
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
