import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './MenuState';
import gridViewReducer from './GridState';
import NoteReducer from './NoteState';
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    gridView: gridViewReducer,
    note: NoteReducer,
  },
});
