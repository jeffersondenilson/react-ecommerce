import React from "react";
import { useSelector } from "react-redux";

import Product from "components/Product";
import Navbar from "components/Navbar";
import { selectTotalPrice } from "features/cart/CartSlice";
import { RootState, store } from "store/store";
import AddOrRemoveButton from "components/AddOrRemoveButton";

import { IProduct } from "types";

function Cart() {
  const products = useSelector((state: RootState) => state.cart);
  const total = selectTotalPrice(store.getState());

  return (
    <div>
      <Navbar />
      <h1>Carrinho</h1>
      {products.length === 0 && <div>Seu carrinho está vazio.</div>}

      {products.length > 0 && (
        <div>
          <h2>Total: {total}</h2>
          {products.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <AddOrRemoveButton product={product} />
                <Product product={product} key={product.id} />
                <div>Subtotal: {product.price * (product.quantity || 0)}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
