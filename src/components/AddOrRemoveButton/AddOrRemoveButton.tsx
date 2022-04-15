import React from "react";
import { addProduct, removeProduct } from "features/cart/CartSlice";
import { IProduct } from "types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
    <div style={{ display: "inline-flex" }}>
      <button onClick={add}>+</button>
      {/* <input type="text" value={product.quantity} /> */}
      <div>{product.quantity}</div>
      <button onClick={remove}>-</button>
    </div>
  );
}

export default AddOrRemoveButton;
