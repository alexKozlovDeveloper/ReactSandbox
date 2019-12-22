import React, { Component } from 'react';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import 'isomorphic-fetch';
import 'babel-polyfill';
import { hot } from 'react-hot-loader';

import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';


//import { StaticRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Route, Switch, Link } from 'react-router-dom'


//const store = createStore(rootReducer)
//

const App = ({ Router, location, context, store }) => (
<Provider store={store}>
  <Router location={location} context={context}>
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
</Provider>
)

export default hot(module)(App);
