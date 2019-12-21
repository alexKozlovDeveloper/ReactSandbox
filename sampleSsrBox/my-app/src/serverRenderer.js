import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import './index.css';

import { StaticRouter } from 'react-router-dom';

function renderHTML(html) {
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
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};

    const htmlString = renderToString(<App Router={StaticRouter} context={context} location={req.url}/>);

    res.send(renderHTML(htmlString));
  };
}