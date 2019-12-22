import React from 'react';
import { mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {
  Response, Request, Headers, fetch,
} from 'whatwg-fetch';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../../reducers';

import MovieView from './MovieView';

configure({ adapter: new Adapter() });

const moviesList = [{
  title: 'Interstellar',
  releaseDate: '2014',
  image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
  genre: 'action',
  rating: 7.2,
  duration: 145,
  description: 'is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.',
}, {
  title: 'Interstellar 2',
  releaseDate: '2015',
  image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
  genre: 'action2',
  rating: 7.2,
  duration: 145,
  description: 'is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.',
}, {
  title: 'Interstellar 3',
  releaseDate: '2016',
  image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
  genre: 'action 3',
  rating: 7.2,
  duration: 145,
  description: 'is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.',
}];

const selectedItem = {
  title: 'Interstellar',
  releaseDate: '2014',
  image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
  genres: ['action'],
  rating: 7.2,
  duration: 145,
};

test('MovieView rendering test', () => {
  const defaultStore = {
    moviesReducer: {
      movies: moviesList,
      isLoaded: true,
      selectedItem,
    },
  };

  global.Response = Response;
  global.Request = Request;
  global.Headers = Headers;
  global.fetch = fetch;

  const match = {
    params: {
      id: '99',
    },
  };

  const store = createStore(rootReducer, defaultStore);

  const component = mount(<Router><Provider store={store}><MovieView match={match}/></Provider></Router>);
  expect(shallowToJson(component)).toMatchSnapshot();
});

test('MovieView spinner rendering test', () => {
  const defaultStore = {
    moviesReducer: {
      movies: null,
      isLoaded: false,
      selectedItem,
    },
  };

  global.Response = Response;
  global.Request = Request;
  global.Headers = Headers;
  global.fetch = fetch;

  const store = createStore(rootReducer, defaultStore);

  const match = {
    params: {
      id: '99',
    },
  };

  const component = mount(<Router><Provider store={store}><MovieView match={match}/></Provider></Router>);
  expect(shallowToJson(component)).toMatchSnapshot();
});
