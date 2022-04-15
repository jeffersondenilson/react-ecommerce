import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "components/Product";
import Navbar from "components/Navbar";
import {
  addProduct,
  removeProduct,
  selectTotalPrice,
} from "features/cart/CartSlice";
import { RootState, store } from "store/store";

import { IProduct } from "types";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart);
  const total = selectTotalPrice(store.getState());

  return (
    <div>
      <Navbar />
      <h1>Carrinho</h1>
      <h2>Total: {total}</h2>
      <div>
        {products.length === 0 ? (
          <div>Seu carrinho está vazio.</div>
        ) : (
          products.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <div style={{ display: "inline-flex" }}>
                  <button onClick={() => dispatch(addProduct(product))}>
                    +
                  </button>
                  {/* <input type="text" value={product.quantity} /> */}
                  <div>{product.quantity}</div>
                  <button onClick={() => dispatch(removeProduct(product))}>
                    -
                  </button>
                </div>
                <Product product={product} key={product.id} />
                <div>Subtotal: {product.price * (product.quantity || 0)}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
