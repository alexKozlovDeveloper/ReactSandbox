import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// import { PersistGate } from 'redux-persist/lib/integration/react';

// const persistConfig = {
//  key: 'root',
//  storage: storage,
//  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };

//const pReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(pReducer);
// const persistor = persistStore(store);
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
    , document.getElementById("root")
);