import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import MyContext from "./MyContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import ProductsView from "./views/ProductsView";
import ProductView from "./views/ProductView";
import Auth from "./views/Auth/Auth";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  return (
    <Router>
      <MyContext.Provider value={[productsInCart, setProductsInCart]}>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/productsView">Products</Link>
              </li>
              <li>
                <Link to="/Auth">Register/Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/productsView">
              <ProductsView />
            </Route>
            <Route path="/Auth">
              <Auth />
            </Route>
            <Route path="/productView/:id">
              <ProductView />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </MyContext.Provider>
    </Router>
  );
}
export default App;
