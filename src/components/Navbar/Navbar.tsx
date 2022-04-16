import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div style={{ marginLeft: "16px" }}>
        <Link to="/">Produtos</Link>
      </div>
      <div>
        <Link to="/cart">Carrinho</Link>
      </div>
    </nav>
  );
}

export default Navbar;
