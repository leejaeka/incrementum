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

let mockData = {
  users: [
    {
      name: 'Truman H.',
      uid: 0,
      goal: 100,

      totalSavings: 0,
      totalTrees: 0,

      // [timestamp, amount]
      savings: [
        [1613882938, 5]
      ],

      friends: [1]
    },

    {
      name: 'ABC A.',
      uid: 1,

      totalSavings: 0,
      totalTrees: 0,
      totalFriends: 0,

      // [timestamp, amount]
      savings: [
        [1613882938, 5]
      ],

      friends: [0]
    }
  ]

}


const App = () => {
  const [open, setOpen] = useState(false)
  const [isAuthenticated, setAuth] = useState(false)
  const [session, setSession] = useState(false)
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState(mockData.users[0])

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log("isauthenticated triggered")
    const cachedUser = localStorage.getItem('session')
    if (Boolean(cachedUser) !== isAuthenticated) {
      setAuth(Boolean(cachedUser));
      setSession(JSON.parse(cachedUser) || []);
    }
  }, [isAuthenticated]);


  return (
    <Router>
      <div>
        <Nav open={open} handleOpen={handleOpen} setUser={setSession} isAuthenticated={isAuthenticated}
             setModal={setModal}
             setAuth={setAuth}/>
        <Switch>
          <Route exact path="/savings">
            <SavingsPage isAuthenticated={isAuthenticated}/>
          </Route>
          <Route exact path="/profile">
            <ProfilePage isAuthenticated={isAuthenticated} session={session}/>
          </Route>
          <Route exact path="/leaderboard">
            <LeaderboardPage isAuthenticated={isAuthenticated}/>
          </Route>
          <Route path="/home">
            {isAuthenticated ? <Home user={user} setUser={setUser}/> : <Redirect to='/'/>}
          </Route>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to='/home'/> :
                <LandingPage setAuth={setAuth} modal={modal} setModal={setModal} session={session}/>}
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
