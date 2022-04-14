import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "components/Product";
import { addProduct, removeProduct } from "features/cart/CartSlice";

import { IProduct } from "types";
import { RootState } from "store/store";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h1>Carrinho</h1>
      <div>
        {products.length === 0 ? (
          <div>
            Seu carrinho está vazio. <Link to="/">Ver produtos</Link>
          </div>
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
                <Product product={product} key={product.id} />;
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
