import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from "./pages/homePage/HomePage";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
