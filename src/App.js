import Home from "./component/Home";
import MovieDetails from './component/TopBar/MovieDetails';
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="container mt-2" style={{ marginTop: 40 }}>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path={`/home/id`}>
          <MovieDetails/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
