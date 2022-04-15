import React from "react";
import { addProduct } from "features/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "types";

import cartIcon from "assets/cart-icon.svg";
import { RootState } from "store/store";

function AddToCartButton({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  const productInCart = useSelector((state: RootState) =>
    state.cart.find((p) => p.id === product.id)
  );

  return (
    <div>
      {productInCart && <span>{productInCart.quantity}</span>}
      <button onClick={() => dispatch(addProduct(product))}>
        <img src={cartIcon} alt="add to cart" />
      </button>
    </div>
  );
}

export default AddToCartButton;
