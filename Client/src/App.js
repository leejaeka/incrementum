import './App.css';
import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Nav from './components/Nav.js';
import LandingPage from './components/LandingPage.js';
import Garden from "./components/Garden";
import Questionnaire from "./components/Questionnaire";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import Home from "./Home";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import SavingsPage from "./SavingsPage";
import LeaderboardPage from "./LeaderboardPage";
import ProfilePage from "./ProfilePage";
import {Redirect} from 'react-router-dom'


const App = () => {
  const [ open, setOpen ] = useState(false)
  const [isAuthenticated, setAuth] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log("isauthenticated triggered")
    if (Boolean(localStorage.getItem('session')) !== isAuthenticated) {
      setAuth(Boolean(localStorage.getItem('session')));
    }
  }, [isAuthenticated]);


  return (
    <Router>
      <div>
        <Nav open={open} handleOpen={handleOpen} isAuthenticated={isAuthenticated} setAuth={setAuth}/>
        <Switch>
          <Route exact path="/questionnaire">
            <Questionnaire/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/savings">
            <SavingsPage isAuthenticated={isAuthenticated}/>
          </Route>
          <Route exact path="/overview">
            <Overview/>
          </Route>
          <Route exact path="/profile">
            <ProfilePage isAuthenticated={isAuthenticated}/>
          </Route>
          <Route exact path="/leaderboard">
            <LeaderboardPage isAuthenticated={isAuthenticated}/>
          </Route>
          <Route path="/home">
            {isAuthenticated ? <Home/> :<Redirect to='/'/>}
          </Route>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to='/home'/> :<LandingPage/>}
          </Route>
          <Route path="/">
            <Redirect to='/'/>    {/* Redirect invalid paths */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
