import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "types";

const initialState: IProduct[] = [
  /* {
    id: 312,
    name: "Super Mario Odyssey",
    price: 197.88,
    score: 100,
    image: "super-mario-odyssey.png",
    quantity: 2,
  }, */
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product: IProduct =
        state.find((product) => product.id === action.payload.id) ||
        action.payload;

      if (product.quantity === undefined) {
        product.quantity = 1;
        state.push(product);
      } else {
        product.quantity++;
      }
    },
    removeProduct: (state, action) => {
      const product: IProduct =
        state.find((product) => product.id === action.payload.id) ||
        action.payload;

      if (product.quantity && product.quantity > 1) {
        product.quantity--;
      } else {
        const productIndex = state.findIndex(
          (product) => product.id === action.payload.id
        );
        state.splice(productIndex, 1);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct } = cartSlice.actions;
