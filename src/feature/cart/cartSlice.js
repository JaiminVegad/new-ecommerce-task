import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrement: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },

    // ✅ NEW: Remove single item completely
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    // ✅ NEW: Clear entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
