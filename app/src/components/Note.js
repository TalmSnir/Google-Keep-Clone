import { useState } from 'react';
import NoteFooterActions from './NoteFooterActions';
import PinAction from './PinAction';
import SelectNoteAction from './SelectNoteAction';
export default function Note({ children }) {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(isHover => !isHover);
  };
  return (
    <article
      className='shadow-md hover:shadow-lg p-8 rounded-lg w-80 max-w-full relative pb-12 text-small'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      {children}
      {isHover && (
        <>
          <NoteFooterActions
            className={'absolute bottom-0 left-0 right-0 h-8 px-4'}
          />
          <SelectNoteAction />
          <PinAction />
        </>
      )}
    </article>
  );
}
