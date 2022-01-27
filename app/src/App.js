import { useState } from 'react';
import Header from './components/Header';
import NewNoteInput from './components/NewNoteInput';

import NotesGrid from './components/NotesGrid';
import Sidebar from './components/Sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';
const notes = [
  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nemo, aspernatur totam architecto ipsum molestias.',
];

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuIconPressed, setMenuIconPressed] = useState(false);
  const [gridView, setGridView] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Header {...{ showMenu, setShowMenu, setMenuIconPressed }} />
          <Box sx={{ display: 'flex', flexGrow: 1, gap: '2rem' }}>
            <Sidebar
              {...{
                showMenu,
                setShowMenu,
                menuIconPressed,
                setMenuIconPressed,
              }}
            />
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexGrow: 1,
                gap: '2rem',
                marginInline: 'auto',
              }}>
              <NewNoteInput />
              <Routes>
                <Route
                  path='/'
                  element={
                    <NotesGrid notes={notes} gridView={gridView} />
                  }></Route>
              </Routes>
            </Container>
          </Box>
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
