import React from "react";
<<<<<<< HEAD
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
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home';
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
import GlobalStyle from './styles';
import './assets/styles/icon-font.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
<<<<<<< HEAD
=======
      <div>
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
<<<<<<< HEAD
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
=======
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
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
    </>
  );
}