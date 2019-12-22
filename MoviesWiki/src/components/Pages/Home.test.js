import React from 'react';
import { mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  Response, Request, Headers, fetch,
} from 'whatwg-fetch';

import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../../reducers';

import Home from './Home';

configure({ adapter: new Adapter() });

test('Home rendering test', () => {
  const store = createStore(rootReducer);

  const resultsBodyConfig = {
    itemsPerRow: 4,
    resultSortConfig: {
      title: 'Sort by',
      options: [{
        title: 'Release date',
        value: 'release_date',
      }, {
        title: 'Rating',
        value: 'vote_average',
      }],
    },
    resultsCountConfig: {
      title: 'movies found',
    },
  };
  const headerConfig = {
    title: 'Find Your Movies',
    searchConfig: {
      placeHolder: 'The Godfather',
      buttonText: 'Search',
      searchFilter: {
        title: 'Search by',
        options: [{
          title: 'Title',
          value: 'title',
        }, {
          title: 'Genre',
          value: 'genres',
        }],
      },
    },
  };

  global.Response = Response;
  global.Request = Request;
  global.Headers = Headers;
  global.fetch = fetch;

  const component = mount(<Router><Provider store={store}><Home resultsBodyConfig={resultsBodyConfig} headerConfig={headerConfig}/></Provider></Router>);
  expect(shallowToJson(component)).toMatchSnapshot();
});
