import './App.css';
import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Nav from './components/Nav.js';
import Home from './components/Home.js';

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
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
