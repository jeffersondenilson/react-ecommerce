import React, { SyntheticEvent, useState } from "react";
import {
  addProduct,
  removeProduct,
  changeProductQuantity,
} from "features/cart/CartSlice";
import { IProduct } from "types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import "./AddOrRemoveButton.css";

function AddOrRemoveButton({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<string | number>(product.quantity || 0);

  const add = () => {
    dispatch(addProduct(product));
  };

  const remove = () => {
    dispatch(removeProduct(product));
    if (product.quantity === 1) {
      toast.success("Produto removido do carrinho");
    }
  };

  const changeQuantity = (e: SyntheticEvent) => {
    e.preventDefault();

    if (amount === "") {
      setAmount(product.quantity || 0);
      return;
    }

    dispatch(changeProductQuantity({ product, amount }));
    if (amount === "0") {
      toast.success("Produto removido do carrinho");
    }
  };

  const resetAmount = () => {
    setAmount(product.quantity || 0);
  };

  return (
    <div className="buttons-container">
      <button onClick={add}>➕</button>
      <form onSubmit={changeQuantity}>
        <input
          className="product-count"
          type="number"
          value={amount}
          onBlur={resetAmount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <button onClick={remove}>➖</button>
    </div>
  );
}

export default AddOrRemoveButton;
