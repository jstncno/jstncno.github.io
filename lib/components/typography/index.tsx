import React from 'react';
import NextLink from 'next/link';

import styles from './styles.module.scss';
import Callout from './Callout';
import HorizontalRule from './HorizontalRule';

export const Hero: React.FC = ({children}) => {
  return (
    <h1 className={styles.hero + " font-mono text-primary dark:text-primary-dark font-bold leading-tight xl:leading-loose mb-3 md:mb-0"}>
      {children}
    </h1>
  );
};

export const H1: React.FC = ({children}) => {
  return (
    <h1 className="font-mono text-primary dark:text-primary-dark text-5xl font-bold">
      {children}
    </h1>
  );
};

export const H2: React.FC = ({children}) => {
  return (
    <h2 className="h2 text-secondary dark:text-secondary-dark text-4xl font-semibold mt-7 mb-3">
      {children}
    </h2>
  );
};

export const H3: React.FC = ({children}) => {
  return (
    <h3 className="h3 text-tertiary dark:text-tertiary-dark text-xl font-bold mt-7 mb-3">
      {children}
    </h3>
  );
};

export const P: React.FC = ({children}) => {
  return (
    <p className="font-sans mb-5 text-primary dark:text-primary-dark md:pr-5">
      {children}
    </p>
  );
};

export const TitleLink: React.FC<{href: string}> = ({children, href}) => {
  return (
    <NextLink href={href} className="hover:underline">
      <H1>{children}</H1>
    </NextLink>
  );
};

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
};

export const Link: React.FC<{href: string, target?: string}> = (props) => {
  const {children, href, target} = props;
  const color = 'text-primary dark:text-primary-dark';
  const hover = 'hover:text-secondary dark:hover:text-secondary-dark';
  const active = 'active:text-tertiary dark:active:text-tertiary-dark';
  const visited = 'visited:text-tertiary dark:visited:text-tertiary-dark';
  const cls = [color, hover, active, visited, 'underline'].join(' ');
  return (
    <a href={href}
      target={target ?? "_blank"}
      className={cls}>
      {children}
    </a>
  );
};

export const Pre: React.FC = props => {
  return (
    <pre className="rounded-md bg-code-background-light dark:bg-code-background-dark p-5 overflow-x-auto" {...props} />
  );
};

export const Code: React.FC = ({children, ...props}) => {
  return (
    <code className="font-mono text-primary dark:text-primary-dark bg-code-background-light dark:bg-code-background-dark rounded-md mb-3 md:mb-0 p-1 overflow-x-auto" {...props}>
      {children}
    </code>
  );
};

export const OrderedList: React.FC = ({children, ...props}) => {
  return (
    <ol className="list-decimal ml-8" {...props}>
      {children}
    </ol>
  );
};

export const UnorderedList: React.FC = ({children, ...props}) => {
  return (
    <ol className="list-disc ml-8" {...props}>
      {children}
    </ol>
  );
};

export const ListItem: React.FC = ({children, ...props}) => {
  return (
    <li className="last:mb-4" {...props}>
      {children}
    </li>
  );
};

export {Callout, HorizontalRule};
