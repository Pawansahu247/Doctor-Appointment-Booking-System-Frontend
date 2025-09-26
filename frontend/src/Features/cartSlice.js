// src/Features/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // Using an object for the cart allows for easy access and updates
    cart: {}, 
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const { medicine_id } = product;
      if (state.cart[medicine_id]) {
        state.cart[medicine_id].quantity += 1;
      } else {
        state.cart[medicine_id] = { ...product, quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      delete state.cart[productId];
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      if (state.cart[productId]) {
        state.cart[productId].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      if (state.cart[productId] && state.cart[productId].quantity > 1) {
        state.cart[productId].quantity -= 1;
      } else {
        // Remove the item from the cart if quantity is 1 or less
        delete state.cart[productId];
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;