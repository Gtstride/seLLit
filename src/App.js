import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from "./pages/homePage/HomePage";
import ShopPage from './pages/shop/ShopPage'

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
