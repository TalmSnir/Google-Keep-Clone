import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
export default function SelectNoteAction() {
  return (
    <button className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'>
      <span className='sr-only'>select note</span>
      <CheckCircleIcon className='h-4 aspect-square' aria-hidden={true} />
    </button>
  );
}
