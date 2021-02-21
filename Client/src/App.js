import './App.css';
import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Nav from './components/Nav.js';
import LandingPage from './components/LandingPage.js';
import Questionnaire from "./components/Questionnaire";
import Overview from "./components/Overview";
import Home from "./Home";
import SavingsPage from "./SavingsPage";
import LeaderboardPage from "./LeaderboardPage";
import ProfilePage from "./ProfilePage";


const App = () => {
  const [open, setOpen] = useState(false)
  const [isAuthenticated, setAuth] = useState(false)
  const [user, setUser] = useState(false)
  const [modal, setModal] = useState(false)


  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log("isauthenticated triggered")
    const cachedUser = localStorage.getItem('session')
    if (Boolean(cachedUser) !== isAuthenticated) {
      // setAuth(Boolean(cachedUser));
      // setUser(JSON.parse(cachedUser) || []);
    }
  }, [isAuthenticated]);


  return (
    <Router>
      <div>
        <Nav open={open} handleOpen={handleOpen} setUser={setUser} isAuthenticated={isAuthenticated} setModal={setModal}
             setAuth={setAuth}/>
        <Switch>
          <Route exact path="/questionnaire">
            <Questionnaire/>
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
            <LeaderboardPage isAuthenticated={isAuthenticated} user={user}/>
          </Route>
          <Route path="/home">
            {isAuthenticated ? <Home/> : <Redirect to='/'/>}
          </Route>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to='/home'/> :
                <LandingPage setAuth={setAuth} user={user} modal={modal} setModal={setModal}/>}
          </Route>
          <Route path="/">
            <Redirect to='/'/> {/* Redirect invalid paths */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
