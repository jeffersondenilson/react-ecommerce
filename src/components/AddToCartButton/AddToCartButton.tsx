import React from "react";
import { addProduct } from "features/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "types";

import cartIcon from "assets/cart-icon.svg";
import { RootState } from "store/store";
import { toast } from "react-toastify";

import "./AddToCartButton.css";
import Pill from "components/Pill";

function AddToCartButton({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  const productInCart = useSelector((state: RootState) =>
    state.cart.find((p) => p.id === product.id)
  );

  const addToCart = () => {
    dispatch(addProduct(product));
    toast.success("Produto adicionado ao carrinho");
  };

  return (
    <div className="cart-button-container">
      {productInCart && <Pill value={productInCart.quantity} />}
      <button className="cart-button" onClick={addToCart}>
        <img src={cartIcon} alt="add to cart" />
      </button>
    </div>
  );
}

export default AddToCartButton;
