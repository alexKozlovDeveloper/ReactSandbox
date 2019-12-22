import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

import { StaticRouter } from 'react-router-dom';

// const preloadedState = {
//   title: "from server"
// }

const preloadedState = { TitleReducer: { title: 'from server-state' } }

function renderHTML(html, State) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};



    const htmlString = renderToString(<App Router={StaticRouter} context={context} location={req.url} store={store}/>);

    res.send(renderHTML(htmlString));
  };
}