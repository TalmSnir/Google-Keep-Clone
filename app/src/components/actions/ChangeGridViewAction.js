import React from 'react';
import { IconButton } from '@mui/material';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGridView } from '../../stateManagement/GridState';
export default function ChangeGridViewAction() {
  const dispatch = useDispatch();
  const isGridView = useSelector(state => state.gridView.isGridView);

  return (
    <IconButton
      size='large'
      aria-label='change grid view'
      onClick={() => dispatch(toggleGridView())}>
      {isGridView ? (
        <GridViewOutlinedIcon />
      ) : (
        <ViewAgendaOutlinedIcon fontSize='medium' />
      )}
    </IconButton>
  );
}
