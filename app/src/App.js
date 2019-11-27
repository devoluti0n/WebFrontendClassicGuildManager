import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.scss";
import "bulma/css/bulma.css"

// Shared Context
import UserContext, { userReducer, userInitialState } from "./context/UserContext";

// Screens
import Home from "./screens/Home";
import Login from "./screens/Login";

// Component
import Header from "./components/Header";


export default () => {
  const [userState, userDispatch] = React.useReducer(userReducer, userInitialState);

  return (
    <UserContext.Provider value={{ state: userState, dispatch: userDispatch }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}