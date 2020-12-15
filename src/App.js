import React from "react";
import Home from './pages/home'
import Users from './pages/users'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalStyle from './styles';
import './assets/styles/icon-font.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}