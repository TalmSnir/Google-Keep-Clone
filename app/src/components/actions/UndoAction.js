import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
export default function UndoAction() {
  return (
    <Tooltip title='undo'>
      <IconButton>
        <UndoOutlinedIcon fontSize='small' />
      </IconButton>
    </Tooltip>
  );
}
