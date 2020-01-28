import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

import SignInSignUp from "./pages/auth/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/FireBase.utils";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(onSnapshot => {
          this.setState({
            currentUser: {
              id: onSnapshot.id,
              ...onSnapshot.data()
            }
          });
          console.log(this.state);
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscriebeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInSignUp} />
            <Route exact path="/shop" component={ShopPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
