import { useRef, useState } from 'react';

import NoteFooterActions from './NoteFooterActions';
import NewNoteActions from './actions/NewNoteActions';
import PinAction from './actions/PinAction';
import useClickOutside from '.././hooks/useClickOutside';
import MoreIcon from '@mui/icons-material/MoreVert';
import {
  Button,
  Container,
  IconButton,
  InputBase,
  TextareaAutosize,
} from '@mui/material';
import { bgcolor, Box, palette } from '@mui/system';
import UndoAction from './actions/UndoAction';
import RedoActions from './actions/RedoActions';
export default function NewNoteInput() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useClickOutside(containerRef, () => setIsOpen(false));
  const handleShowInput = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <Container
      sx={{ boxShadow: 3, borderRadius: 3, width: '50%', p: 1 }}
      ref={containerRef}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <form
          style={{
            flexGrow: 1,
          }}>
          {isOpen && (
            <InputBase
              type='text'
              placeholder='Title'
              className='text-gray-700 placeholder:text-gray-900 placeholder:font-semibold focus:outline-none'
            />
          )}
          <TextareaAutosize
            onClick={handleShowInput}
            aria-label='new note text area'
            placeholder='Take a note ...'
            rows={1}
            style={{
              width: '100%',
              resize: 'none',
              appearance: 'none',
              border: 0,
              outline: 0,
            }}
            className='new-note_placeholder'
          />
        </form>
        {isOpen ? <PinAction position='relative' /> : <NewNoteActions />}
      </Box>

      {isOpen ? (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <NoteFooterActions />
            <UndoAction />
            <RedoActions />
            <Button onClick={handleShowInput} sx={{ color: 'gray' }}>
              close
            </Button>
          </Box>
        </>
      ) : null}
    </Container>
  );
}
