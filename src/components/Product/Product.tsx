import React from "react";
import AddOrRemoveButton from "components/AddOrRemoveButton";
import AddToCartButton from "components/AddToCartButton";

import { IProduct } from "types";
import toBRLCurrency from "utils/toBRLCurrency";

import "./Product.css";

interface ProductProps {
  product: IProduct;
  buttonType: "addToCart" | "addOrRemove";
}

function Product({ product, buttonType }: ProductProps) {
  const calcSubtotal = () => product.price * (product.quantity || 0);

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
        {buttonType === "addOrRemove" && (
          <>
            <AddOrRemoveButton product={product} />
            <div style={{ fontWeight: "bold" }}>
              Subtotal: {toBRLCurrency(calcSubtotal())}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Product;
