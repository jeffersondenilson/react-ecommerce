import React from "react";
import products from "assets/products.json";
import { Product } from "./types";

function App() {
  return (
    <div>
      <h1>E-commerce</h1>
      <div>
        <h2>Produtos</h2>
        <div>
          {products.map((product: Product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <div>{product.price}</div>
              <div>{product.score}</div>
              <div>
                <img src={`assets/${product.image}`} alt={product.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
