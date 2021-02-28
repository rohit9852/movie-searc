import Home from "./component/Home";
import MovieDetails from './component/TopBar/MovieDetails';
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import './App.css';
// import DarkMode from "./component/TopBar/DarkMode";

function App() {
  // Todo:
    // const [ toId, setId ] = useState('tt0371746');
    // function getId(id) {
    //   setId(id);
    // };

  return (
    <BrowserRouter>
    <div className="container mt-2" style={{ marginTop: 40 }}>
      <Switch>
        <Route exact path="/">
          <Home 
          // getId={getId}
          />
        </Route>
        <Route path={`/home/id`}>
          <MovieDetails
            // toId={toId}
          />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
