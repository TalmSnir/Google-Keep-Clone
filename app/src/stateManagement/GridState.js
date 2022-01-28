import { createSlice } from '@reduxjs/toolkit';

const initialState = { isGridView: true };
const gridStateSlice = createSlice({
  name: 'gridView',
  initialState,
  reducers: {
    toggleGridView: state => {
      state.isGridView = !state.isGridView;
    },
  },
});

export const { toggleGridView } = gridStateSlice.actions;
export default gridStateSlice.reducer;
