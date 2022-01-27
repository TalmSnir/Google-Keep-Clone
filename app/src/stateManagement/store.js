import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './MenuState';
export const store = configureStore({
  reducer: { menu: menuReducer },
});
