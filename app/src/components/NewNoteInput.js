import { useState } from 'react';

import NoteFooterActions from './NoteFooterActions';
import NewNoteActions from './NewNoteActions';
import PinAction from './PinAction';
import IconButton from './IconButton';
import { CheckCircleIcon } from '@heroicons/react/outline';
export default function NewNoteInput() {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowInput = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <div className='shadow-lg w-1/2 mx-auto rounded-lg p-4 flex '>
      <form className='flex flex-col gap-2 flex-grow' onClick={handleShowInput}>
        {isOpen && (
          <input
            type='text'
            placeholder='Title'
            className='text-gray-700 placeholder:text-gray-900 placeholder:font-semibold focus:outline-none'
          />
        )}

        <textarea
          placeholder='Take a note ...'
          className='focus:outline-none placeholder:text-gray-900 placeholder:font-semibold '></textarea>
      </form>
      <NewNoteActions />
      {isOpen ? (
        <>
          <PinAction />

          <div className='flex justify-between items-center'>
            <NoteFooterActions />
            <IconButton tooltip='undo' icon={CheckCircleIcon} />
            <IconButton tooltip='redo' icon={CheckCircleIcon} />
            <button onClick={handleShowInput}>close</button>
          </div>
        </>
      ) : null}
    </div>
  );
}
