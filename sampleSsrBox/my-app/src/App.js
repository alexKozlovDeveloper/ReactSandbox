import React, { Component } from 'react';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import { StaticRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {

  render() {
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
                  <Link to="/invalidLinkPath">404</Link>
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
}

export default App;
