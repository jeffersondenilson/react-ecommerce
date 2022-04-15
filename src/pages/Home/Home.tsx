import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Product from "components/Product";
import Navbar from "components/Navbar";
import { addProduct } from "features/cart/CartSlice";

import { IProduct } from "types";
import cartIcon from "assets/cart-icon.svg";
import products from "assets/products.json";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div>
        <h1>Produtos</h1>
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
