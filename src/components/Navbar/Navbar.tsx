import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">E-commerce</Link>
      </div>
      <div>
        <Link to="/">Produtos</Link>
      </div>
      <div>
        <Link to="/cart">Carrinho</Link>
      </div>
    </nav>
  );
}

export default Navbar;
