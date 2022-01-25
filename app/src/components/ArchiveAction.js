import React from 'react';
import { ArchiveIcon } from '@heroicons/react/outline';
import { Menu } from '@headlessui/react';

const links = [
  'delete note',
  'add label',
  'add drawing',
  'make a copy',
  'show checkboxes',
  'copy to google docs',
];

export default function ArchiveAction() {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='rounded-full hover:bg-gray-100 p-2 focus-visible:outline-gray-400 focus-visible:outline-1 focus-visible:outline'>
        <span className='sr-only'>more actions</span>
        <ArchiveIcon className='h-4  aspect-square' aria-hidden={true} />
      </Menu.Button>
      <Menu.Items className='shadow-lg flex flex-col absolute top-full left-0 pb-4 pt-8 rounded-lg focus:outline-none'>
        <header>
          <span className='px-4 pb-4 inline-block'>Reminders:</span>
        </header>
        {links.map(link => (
          <Menu.Item key={link}>
            {({ active }) => (
              <a
                className={`${active && 'bg-gray-100'} px-8 py-4 w-max `}
                href={link}>
                {link}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
