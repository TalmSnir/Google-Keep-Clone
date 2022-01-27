import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
export default function ChangeGridViewAction() {
  const [gridView, setGridView] = useState(true);
  const handleChangeView = () => {
    setGridView(view => !view);
  };
  return (
    <IconButton
      size='large'
      aria-label='change grid view'
      onClick={handleChangeView}>
      {gridView ? (
        <GridViewOutlinedIcon />
      ) : (
        <ViewAgendaOutlinedIcon size='lg' />
      )}
    </IconButton>
  );
}
