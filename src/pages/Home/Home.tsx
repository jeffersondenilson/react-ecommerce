import React from "react";
import { Link } from "react-router-dom";

import Product from "components/Product";

import { useDispatch } from "react-redux";
import { addProduct } from "features/cart/CartSlice";

import { IProduct } from "types";
import cartIcon from "assets/cart-icon.svg";
import products from "assets/products.json";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>E-commerce</h1>
      <Link to="/cart">Ver Carrinho</Link>
      <div>
        <h2>Produtos</h2>
        <div>
          {products.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <Product product={product} />
                <div>
                  <button onClick={() => dispatch(addProduct(product))}>
                    <img src={cartIcon} alt="add to cart" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
