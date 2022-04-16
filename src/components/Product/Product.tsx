import AddToCartButton from "components/AddToCartButton";
import React from "react";

import { IProduct } from "types";
import toBRLCurrency from "utils/toBRLCurrency";

import "./Product.css";

interface ProductProps {
  product: IProduct;
  buttonType: "addToCart" | "addOrRemove";
}

function Product({ product, buttonType }: ProductProps) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={require(`assets/${product.image}`)} alt={product.image} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div>
          <span style={{ fontSize: "large", margin: "2px" }}>⭐</span>
          {product.score}
        </div>
        <div className="product-price">{toBRLCurrency(product.price)}</div>
        {buttonType === "addToCart" && <AddToCartButton product={product} />}
      </div>
    </div>
  );
}

export default Product;
