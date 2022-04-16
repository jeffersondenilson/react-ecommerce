import React from "react";
import { useSelector } from "react-redux";

import Product from "components/Product";
import Navbar from "components/Navbar";
import { selectTotalPrice } from "features/cart/CartSlice";
import { RootState, store } from "store/store";

import { IProduct } from "types";
import toBRLCurrency from "utils/toBRLCurrency";

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
          <h2>Total: {toBRLCurrency(total)}</h2>
          {products.map((product: IProduct) => {
            const subtotal = product.price * (product.quantity || 0);

            return (
              <div key={product.id}>
                {/* <AddOrRemoveButton product={product} /> */}
                <Product product={product} buttonType="addOrRemove" />
                <div>Subtotal: {toBRLCurrency(subtotal)}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
