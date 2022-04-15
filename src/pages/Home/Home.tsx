import React from "react";

import Product from "components/Product";
import Navbar from "components/Navbar";

import { IProduct } from "types";
import productsList from "assets/products.json";
import AddToCartButton from "components/AddToCartButton";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Produtos</h1>
        <div>
          {productsList.map((product: IProduct) => {
            return (
              <div key={product.id}>
                <Product product={product} />
                <AddToCartButton product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
