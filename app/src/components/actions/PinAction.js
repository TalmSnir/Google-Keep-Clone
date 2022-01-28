import React from 'react';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { togglePinNote } from '../../stateManagement/NoteState';
export default function PinAction(position) {
  const dispatch = useDispatch();
  const isPinned = useSelector(state => state.note.isPinned);
  return (
    <IconButton
      sx={{
        position: position,
        top: '0.5rem',
        right: '0.5rem',
      }}
      aria-label='select note'
      onClick={() => dispatch(togglePinNote())}>
      {isPinned ? (
        <PushPinIcon fontSize='medium' color='dark' />
      ) : (
        <PushPinOutlinedIcon fontSize='medium' color='dark' />
      )}
    </IconButton>
  );
}
