import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';
export default function SelectNoteAction() {
  return (
    <IconButton
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        transform: 'translate(-50%,-50%)',
      }}
      aria-label='select note'>
      <CheckCircleIcon fontSize='small' color='dark' />
    </IconButton>
  );
}
