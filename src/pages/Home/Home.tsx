import React from "react";

import Product from "components/Product";
import Navbar from "components/Navbar";

import { IProduct } from "types";
import productsList from "assets/products.json";

import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Produtos</h1>
        <div className="products">
          {productsList.map((product: IProduct) => {
            return (
              <div key={product.id} style={{ display: "flex" }}>
                <Product product={product} buttonType="addToCart" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
