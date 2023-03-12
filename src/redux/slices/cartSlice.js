import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
        );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id:newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 4,
          totalPrice: newItem.price,
          textile: newItem.textile,
          sizes: newItem.sizes,

        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
      );

      console.log(state.totalQuantity)
      console.log(state.cartItems)
      console.log(newItem)
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
