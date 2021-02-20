import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Nav from './components/Nav.js';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
      </div>
    </Router>
  );
}

export default App;
