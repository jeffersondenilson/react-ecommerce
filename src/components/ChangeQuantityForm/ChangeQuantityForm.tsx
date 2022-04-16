import { changeProductQuantity } from "features/cart/CartSlice";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { IProduct } from "types";

import "./ChangeQuantityForm.css";

interface ChangeQuantityFormProps {
  product: IProduct;
}

function ChangeQuantityForm({ product }: ChangeQuantityFormProps) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<string | number>(product.quantity || 0);

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

  useEffect(() => {
    resetAmount();
  }, [product]);

  return (
    <form onSubmit={changeQuantity}>
      <input
        className="product-count"
        type="number"
        value={amount}
        onBlur={resetAmount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </form>
  );
}

export default ChangeQuantityForm;
