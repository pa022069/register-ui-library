import { configureStore } from '@reduxjs/toolkit';
import template from './slices/templateSlice';

export const store = configureStore({
  reducer: {
    template,
  },
  devTools: true,
});
