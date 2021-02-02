import React from "react";
import Login from './pages/login';
import Home from './pages/home';
import Series from './pages/series';
import Movies from './pages/movies';
import MovieDetails from './pages/movieDetails';
import SerieDetails from "./pages/serieDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GlobalStyle from './styles';
import './assets/styles/icon-font.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router history={hashHistory}>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
          <Route path="/series/details/:id">
            <SerieDetails />
          </Route>
          <Route path="/movies/details/:id">
            <MovieDetails />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}