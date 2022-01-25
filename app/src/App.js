import Header from './components/Header';
import NewNoteInput from './components/NewNoteInput';
import NoteFooterActions from './components/NoteFooterActions';
import NotesGrid from './components/NotesGrid';
import Sidebar from './components/Sidebar';
import logo from './logo.svg';

const notes = [
  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nemo, aspernatur totam architecto ipsum molestias.',
];

function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex h-[calc(100vh - 16rem)]'>
        <Sidebar />
        <div className='flex flex-col items-center flex-grow'>
          <NewNoteInput />
          <NotesGrid notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
