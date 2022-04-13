import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "types";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product: IProduct = action.payload;
      state.push(product);
    },
  },
});

export default cartSlice.reducer;

export const { addProduct } = cartSlice.actions;
