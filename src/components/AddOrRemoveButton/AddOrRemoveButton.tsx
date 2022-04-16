import React from "react";
import { addProduct, removeProduct } from "features/cart/CartSlice";
import { IProduct } from "types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ChangeQuantityForm from "components/ChangeQuantityForm";

import "./AddOrRemoveButton.css";

function AddOrRemoveButton({ product }: { product: IProduct }) {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addProduct(product));
  };

  const remove = () => {
    dispatch(removeProduct(product));
    if (product.quantity === 1) {
      toast.success("Produto removido do carrinho");
    }
  };

  return (
    <div className="buttons-container">
      <button onClick={add}>➕</button>
      <ChangeQuantityForm product={product} />
      <button onClick={remove}>➖</button>
    </div>
  );
}

export default AddOrRemoveButton;
