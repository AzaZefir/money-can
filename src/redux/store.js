import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import filter from './slices/filterSlice';


export const store = configureStore({
  reducer: {
    filter,
    cart: cartSlice
  },
});
