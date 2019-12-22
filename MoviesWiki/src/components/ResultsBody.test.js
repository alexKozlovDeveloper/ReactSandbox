import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import ResultsBody from './ResultsBody';

configure({ adapter: new Adapter() });

test('ResultsBody rendering test', () => {
  const resultsBodyConfig = {
    itemsPerRow: 4,
    resultSortConfig: {
      title: 'Sort by',
      selectedIndex: '1',
      options: ['Release date', 'Rating'],
    },
    resultsCountConfig: {
      title: 'movies found',
    },
  };

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

  const defaultStore = {
    moviesReducer: {
      movies: moviesList,
      isLoaded: true,
      error: null,
      sortBy: 'vote_average',
    },
  };


  const store = createStore(rootReducer, defaultStore);

  const component = shallow(<Provider store={store}><ResultsBody items={moviesList} config={resultsBodyConfig} /></Provider>);
  expect(shallowToJson(component)).toMatchSnapshot();
});
