import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Shared Context
import UserContext, { userReducer, userInitialState } from "./context/UserContext";

// Screens
import Home from "./screens/Home";

export default () => {

  // Stores
  const [userState, userDispatch] = React.useReducer(userReducer, userInitialState);

  return (
    <UserContext.Provider value={{ state: userState, dispatch: userDispatch }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}