import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home';
import GlobalStyle from './styles';
import './assets/styles/icon-font.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/movies">
 
          </Route>
          <Route path="/series">
 
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}