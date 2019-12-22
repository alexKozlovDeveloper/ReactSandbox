import React from 'react';
import { hydrate } from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, window.PRELOADED_STATE)

console.log(window.PRELOADED_STATE, "window.PRELOADED_STATE")
console.log(store, "store")

const root = (
    <App Router={BrowserRouter} store={store} />
);

hydrate(root, document.getElementById('root'));