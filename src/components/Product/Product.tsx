import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "features/cart/CartSlice";

import { IProduct } from "types";

import cartIcon from "assets/cart-icon.svg";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addProduct(product));
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <div>{product.score}</div>
      <div>
        <img src={require(`assets/${product.image}`)} alt={product.image} />
      </div>
      <div>
        <button onClick={add}>
          <img src={cartIcon} alt="add to cart" />
        </button>
      </div>
    </div>
  );
}

export default Product;
