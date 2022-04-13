import React from "react";
import Product from "components/Product";

import { IProduct } from "./types";
import products from "assets/products.json";

function App() {
  return (
    <div>
      <h1>E-commerce</h1>
      <div>
        <h2>Produtos</h2>
        <div>
          {products.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
