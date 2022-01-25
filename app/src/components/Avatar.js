import React from 'react';
import clsx from 'clsx';
export default function Avatar({
  className,
  src,
  alt = 'avatar',
  size = 'md',
  statusIcon,
  border,
}) {
  const classNames = clsx('rounded-full  aspect-square', {
    relative: statusIcon,
    'h-6': size === 'xs',
    'h-8': size === 'sm',
    'h-10': size === 'md',
    'h-12': size === 'lg',
    'h-14': size === 'xl',
    'h-16': size === '2xl',
    'border border-primary-600': border,
    className,
  });
  const statusClassNames = clsx(
    'aspect-square h-2 rounded-full absolute top-full left-full -translate-x-full -translate-y-full border border-white',
    {
      'bg-success-500': statusIcon === 'online',
      'bg-danger-500': statusIcon === 'offline',
    }
  );
  if (statusIcon) {
    return (
      <div className={classNames}>
        <img src={src} alt={alt} className='rounded-full' />
        <span className={statusClassNames}></span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={classNames} />;
}
