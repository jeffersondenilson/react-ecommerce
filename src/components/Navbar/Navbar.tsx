import React from "react";
import { Link } from "react-router-dom";
import { RootState } from "store/store";

import "./Navbar.css";
import Pill from "components/Pill";
import { useSelector } from "react-redux";
import { IProduct } from "types";

function Navbar() {
  const productsCount = useSelector((state: RootState) =>
    state.cart.reduce((acc: number, product: IProduct) => {
      return acc + (product.quantity || 0);
    }, 0)
  );

  return (
    <nav>
      <div style={{ marginLeft: "16px" }}>
        <Link to="/">Produtos</Link>
      </div>
      <div className="cart-link">
        <Link to="/cart">Carrinho</Link>
        {productsCount > 0 && <Pill value={productsCount} />}
      </div>
    </nav>
  );
}

export default Navbar;
