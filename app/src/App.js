import { useState } from 'react';
import Header from './components/Header';
import NewNoteInput from './components/NewNoteInput';
import NoteFooterActions from './components/NoteFooterActions';
import NotesGrid from './components/NotesGrid';
import Sidebar from './components/Sidebar';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const notes = [
  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nemo, aspernatur totam architecto ipsum molestias.',
];

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuIconPressed, setMenuIconPressed] = useState(false);
  return (
    <BrowserRouter>
      <div className='flex flex-col h-full'>
        <Header {...{ showMenu, setShowMenu, setMenuIconPressed }} />
        <div className='flex flex-grow gap-8'>
          <Sidebar
            {...{ showMenu, setShowMenu, menuIconPressed, setMenuIconPressed }}
          />
          <div className='flex flex-col items-center flex-grow p-8'>
            <NewNoteInput />
            <Routes>
              <Route path='/' element={<NotesGrid notes={notes} />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
