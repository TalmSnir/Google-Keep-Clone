import clsx from 'clsx';
import React from 'react';

const sizes = {
  xs: 'h-4',
  sm: 'h-5 ',
  md: 'h-6',
  lg: 'h-7',
  xl: 'h-8',
};
export default function IconButton({
  children,
  onClick,
  className,
  disabled,
  tooltip,
  size = 'sm',
  icon: Icon,
  ...rest
}) {
  let classNames = clsx(
    'rounded-full hover:bg-gray-100 p-2 focus-visible:outline-gray-400 focus-visible:outline-1 focus-visible:outline',
    className
  );
  let iconSize = sizes[size];
  return (
    <button
      onClick={onClick}
      className={classNames}
      {...rest}
      disabled={disabled}>
      <span className='sr-only'>{tooltip}</span>
      <Icon className={`aspect-square ${iconSize}`} aria-hidden={true} />
      {children}
    </button>
  );
}
