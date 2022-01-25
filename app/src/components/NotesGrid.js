import React from 'react';
import Note from './Note';

export default function NotesGrid({ notes }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 grid-flow-col-dense'>
      {notes.map((note, id) => (
        <Note key={id}>{note}</Note>
      ))}
    </section>
  );
}
