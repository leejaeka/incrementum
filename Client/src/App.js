import './App.css';
import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Nav from './components/Nav.js';
import LandingPage from './components/LandingPage.js';
import Home from "./Home";
import SavingsPage from "./SavingsPage";
import LeaderboardPage from "./LeaderboardPage";
import ProfilePage from "./ProfilePage";


const App = () => {
  const [open, setOpen] = useState(false)
  const [isAuthenticated, setAuth] = useState(false)
  const [user, setUser] = useState(false)
  const [modal, setModal] = useState(false)
  // const [user, setUser] = useState(mockData.users[0])

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const cachedUser = localStorage.getItem('session')
    if (Boolean(cachedUser) !== isAuthenticated) {
      setAuth(Boolean(cachedUser));
      setUser(JSON.parse(cachedUser) || []);
    }
  }, [isAuthenticated]);


  return (
    <Router>
      <div>
        <Nav open={open} handleOpen={handleOpen} setUser={setUser} isAuthenticated={isAuthenticated}
             setModal={setModal}
             setAuth={setAuth}/>
        <Switch>
          <Route exact path="/savings">
            <SavingsPage isAuthenticated={isAuthenticated} user={user}/>
          </Route>
          <Route exact path="/profile">
            <ProfilePage setAuth={setAuth} isAuthenticated={isAuthenticated} user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/leaderboard">
            <LeaderboardPage isAuthenticated={isAuthenticated} user={user}/>
          </Route>
          <Route exact path="/">
            {isAuthenticated ?  <Home setAuth={setAuth} user={user} setUser={setUser}/> :
                <LandingPage setAuth={setAuth} modal={modal} setModal={setModal} user={user} setUser={setUser}/>}
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
