import React from "react";
import { addProduct, removeProduct } from "features/cart/CartSlice";
import { IProduct } from "types";
import { useDispatch } from "react-redux";

function AddOrRemoveButton({ product }: { product: IProduct }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "inline-flex" }}>
      <button onClick={() => dispatch(addProduct(product))}>+</button>
      {/* <input type="text" value={product.quantity} /> */}
      <div>{product.quantity}</div>
      <button onClick={() => dispatch(removeProduct(product))}>-</button>
    </div>
  );
}

export default AddOrRemoveButton;
