import React from 'react';
import { hydrate } from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = (
  <App Router={BrowserRouter}/>
);

hydrate(root, document.getElementById('root'));