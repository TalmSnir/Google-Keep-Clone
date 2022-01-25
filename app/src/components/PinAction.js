import { FlagIcon } from '@heroicons/react/outline';
import React from 'react';

export default function PinAction() {
  return (
    <button className='absolute top-0 right-0 -translate-x-4 translate-y-4'>
      <span className='sr-only'>select note</span>
      <FlagIcon className='h-4 aspect-square' aria-hidden={true} />
    </button>
  );
}
