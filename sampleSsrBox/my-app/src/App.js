import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/abcffffff">404</Link>
              </li>
            </ul>
          </div>

          <div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>

          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
