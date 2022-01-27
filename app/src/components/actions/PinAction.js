import React from 'react';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { IconButton } from '@mui/material';
export default function PinAction(position) {
  return (
    <IconButton
      sx={{
        position: position,
        top: '0.5rem',
        right: '0.5rem',
      }}
      aria-label='select note'>
      <PushPinOutlinedIcon fontSize='medium' color='dark' />
    </IconButton>
  );
}
