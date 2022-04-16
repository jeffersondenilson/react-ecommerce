import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { IProduct } from "types";

const initialState: IProduct[] = [
  /*   {
    id: 312,
    name: "Super Mario Odyssey",
    price: 197.88,
    score: 100,
    image: "super-mario-odyssey.png",
    quantity: 2,
  },
  {
    id: 501,
    name: "Horizon Zero Dawn",
    price: 115.8,
    score: 290,
    image: "horizon-zero-dawn.png",
    quantity: 1,
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
    changeProductQuantity: (state, action) => {
      const { product, amount } = action.payload;
      const newAmount = Number(amount);
      const productIndex = state.findIndex((p) => p.id === product.id);

      if (productIndex !== -1 && !isNaN(newAmount)) {
        if (newAmount === 0) {
          state.splice(productIndex, 1);
        } else {
          state[productIndex].quantity = newAmount;
        }
      }
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct, changeProductQuantity } =
  cartSlice.actions;

export const selectTotalPrice = (state: RootState) =>
  state.cart.reduce((acc: number, product: IProduct) => {
    return acc + product.price * (product.quantity || 0);
  }, 0);
