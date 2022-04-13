import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "types";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product: IProduct =
        state.find((product) => product.id === action.payload.id) ||
        action.payload;

      if (product.quantity === undefined) {
        product.quantity = 0;
        state.push(product);
      } else {
        product.quantity++;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addProduct } = cartSlice.actions;
