import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
export default function RedoActions() {
  return (
    <Tooltip title='redo'>
      <IconButton>
        <RedoOutlinedIcon fontSize='small' />
      </IconButton>
    </Tooltip>
  );
}
