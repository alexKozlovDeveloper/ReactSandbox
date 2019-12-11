import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistConfig = {
    key: 'root',
    storage: storage
};

const pReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger()

const store = createStore(pReducer, undefined, applyMiddleware(logger));
const persistor = persistStore(store);

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById("root")
);