import React from 'react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

type HrefGetter = (tag: string) => string;

export interface ChipsProps {
  tags?: string[];
  href?: string | HrefGetter;
  iconLeft?: IconType;
  iconRight?: IconType;
  onClick?: (tag: string) => void;
}

const Chips: React.FC<ChipsProps> = props => {
  const { tags, href, iconLeft, iconRight, onClick } = props;
  const _href = typeof href === 'string' ? (_: string) => href : href;
  const getHref = (tag: string): string => _href ? _href(tag) :
    `/posts?tags=${encodeURIComponent(tag)}`;

  return (
    <div className="flex flex-row flex-wrap whitespace-nowrap my-2">
      {tags && !!tags.length && Array.from(new Set(tags)).map((tag, idx) => (
        <div className="bg-chip text-xs text-primary-dark px-3 py-1 rounded-3xl my-1 mr-1" key={idx}>
          <NextLink
            href={getHref(tag)}
            className="flex"
            onClick={() => onClick && onClick(tag)}>

            {iconLeft && React.createElement(iconLeft, {
              className: 'block h-4 w-4 mr-1 -ml-1',
            })}
            {tag}
            {iconRight && React.createElement(iconRight, {
              className: 'block h-4 w-4 ml-1 -mr-1',
            })}

          </NextLink>
        </div>
      ))}
    </div>
  );
}
export default Chips;
