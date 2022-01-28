import React from 'react';
import Note from './Note';
import Masonry from '@mui/lab/Masonry';
import { useSelector } from 'react-redux';
export default function NotesGrid({ notes }) {
  const isGridView = useSelector(state => state.gridView.isGridView);
  return (
    <Masonry
      columns={isGridView ? 3 : 1}
      spacing={1}
      sx={{ placeContent: isGridView ? '' : 'center' }}>
      {notes.map((note, id) => (
        <Note key={id}>{note}</Note>
      ))}
    </Masonry>
  );
}
