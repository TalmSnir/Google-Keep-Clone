import { useState } from 'react';
import NoteFooterActions from './NoteFooterActions';
import PinAction from './actions/PinAction';
import SelectNoteAction from './actions/SelectNoteAction';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
export default function Note({ children }) {
  const [isHover, setIsHover] = useState(false);
  const isPinned = useSelector(state => state.note.isPinned);
  const noteBgColor = useSelector(state => state.note.bgColor);
  const handleHover = () => {
    setIsHover(isHover => !isHover);
  };
  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      raised={isHover}
      sx={{
        position: 'relative',
        overflow: 'visible',
        maxWidth: '700px',
        backgroundColor: `${noteBgColor}`,
      }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          title
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {children}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ visibility: `${isHover || isPinned ? 'visible' : 'hidden'}` }}>
        <NoteFooterActions />
        <SelectNoteAction />
        <PinAction position='absolute' />
      </CardActions>
    </Card>
  );
}

// 'absolute bottom-0 left-0 right-0 h-8 px-4'
// shadow-md hover:shadow-lg p-8 rounded-lg w-80 max-w-full relative pb-12 text-small
