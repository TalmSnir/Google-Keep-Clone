import { createSlice } from '@reduxjs/toolkit';

const initialState = { isPinned: false, bgColor: '' };
const NoteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    togglePinNote: state => {
      state.isPinned = !state.isPinned;
    },
    setBackgroundColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const { togglePinNote, setBackgroundColor } = NoteSlice.actions;
export default NoteSlice.reducer;
