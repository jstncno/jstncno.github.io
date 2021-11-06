import classnames from 'classnames';

export const dropdown = (hidden = true) => classnames(
  'absolute',
  'bg-background',
  'dark:bg-background-dark',
  'text-primary',
  'dark:text-primary-dark',
  'top-0',
  'left-0',
  hidden ? 'border-0' : 'border-2',
  'border-gray-300',
  'rounded-lg',
  'w-full',
  'overflow-y-scroll',
  'transition-all',
  'duration-300',
  hidden ? 'max-h-0' : 'max-h-4/5 lg:max-h-3/5',
);

export const dropdownListItem = (hovered = false) => classnames(
  'px-1',
  'py-2',
  'border-gray-300',
  'border-b',
  'last:border-0',
  'hover:bg-secondary',
  'hover:text-primary-dark',
  'dark:hover:text-primary',
  'dark:hover:bg-secondary-dark',
  hovered ? 'bg-secondary text-primary-dark dark:bg-secondary dark:hover:text-primary' : 'bg-background text-primary',
);
