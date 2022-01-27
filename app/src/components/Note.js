import { useState } from 'react';
import NoteFooterActions from './NoteFooterActions';
import PinAction from './actions/PinAction';
import SelectNoteAction from './actions/SelectNoteAction';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
export default function Note({ children }) {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(isHover => !isHover);
  };
  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      raised={isHover}
      sx={{ position: 'relative', overflow: 'visible' }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          title
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {children}
        </Typography>
      </CardContent>
      <CardActions sx={{ visibility: `${isHover ? 'visible' : 'hidden'}` }}>
        <NoteFooterActions />
        <SelectNoteAction />
        <PinAction position='absolute' />
      </CardActions>
    </Card>
  );
}

// 'absolute bottom-0 left-0 right-0 h-8 px-4'
// shadow-md hover:shadow-lg p-8 rounded-lg w-80 max-w-full relative pb-12 text-small
