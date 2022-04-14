import React from "react";

import { IProduct } from "types";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <div>{product.score}</div>
      <div>
        <img src={require(`assets/${product.image}`)} alt={product.image} />
      </div>
    </div>
  );
}

export default Product;
