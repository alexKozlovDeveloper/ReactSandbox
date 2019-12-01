import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const defaultStore = {
    titleReducers: [{
          title: "defa"
        }]
    }



const store = createStore(rootReducer, defaultStore)

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);