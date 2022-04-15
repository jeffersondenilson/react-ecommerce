import React from "react";
import { addProduct } from "features/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "types";

import cartIcon from "assets/cart-icon.svg";
import { RootState } from "store/store";
import { toast } from "react-toastify";

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
    <div>
      {productInCart && <span>{productInCart.quantity}</span>}
      <button onClick={addToCart}>
        <img src={cartIcon} alt="add to cart" />
      </button>
    </div>
  );
}

export default AddToCartButton;
