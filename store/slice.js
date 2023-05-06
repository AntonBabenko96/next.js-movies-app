import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    cart: [],
    inCart: false,
  },
  reducers: {
    addToCart(state, { payload }) {
      state.cart = [...state.cart, payload];
      state.inCart = true;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart(state, action) {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.inCart = state.cart.length > 0;
        state.cart = state.cart.map((item) =>
          item.id === id ? { ...item, inCart: false } : item
        );
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    loadCart(state) {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      if (cartData.length > 0) {
        state.cart = cartData;
        state.inCart = true;
      }
    },
  },
});

export const { addToCart, deleteFromCart, loadCart } = moviesSlice.actions;
export default moviesSlice.reducer;
