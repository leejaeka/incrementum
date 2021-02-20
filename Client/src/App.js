import './App.css';
import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Nav from './components/Nav.js';
import LandingPage from './components/LandingPage.js';
import Garden from "./components/Garden";
import Questionnaire from "./components/Questionnaire";
import Stats2 from "./components/Stats2";
import Stats from "./components/Stats";

const App = () => {
  const [ open, setOpen ] = useState(false)
  const [isAuthenticated, setAuth] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Router>
      <div>
        <Nav open={open} handleOpen={handleOpen} isAuthenticated={isAuthenticated}/>
        <Switch>
          <Route exact path="/questionnaire">
            <Questionnaire/>
          </Route>
          <Route exact path="/stats">
            <Stats/>
          </Route>
          <Route exact path="/stats2">
            <Stats2/>
          </Route>
          <Route exact path="/garden">
            <Garden/>
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route path="/home">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
