import { createSlice } from "@reduxjs/toolkit";
import { Product } from "types";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product: Product = action.payload;
      state.push(product);
    },
  },
});

export default cartSlice.reducer;

export const actions = cartSlice.actions;
