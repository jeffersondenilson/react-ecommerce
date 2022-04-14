import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "pages/Home";
import Cart from "pages/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
