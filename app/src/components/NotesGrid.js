import React from 'react';
import Note from './Note';
import Masonry from '@mui/lab/Masonry';
export default function NotesGrid({ notes, gridView }) {
  return (
    <Masonry columns={gridView ? 3 : 1} spacing={1}>
      {notes.map((note, id) => (
        <Note key={id}>{note}</Note>
      ))}
    </Masonry>
  );
}
