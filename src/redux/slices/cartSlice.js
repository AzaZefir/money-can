import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItems = state.cartItems.find((item) => item.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItem: (state, action) => {
      state.cartItems.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
