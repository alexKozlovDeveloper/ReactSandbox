import React from 'react';
import { mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

import DetailsView from './DetailsView';

configure({ adapter: new Adapter() });

test('ItemDetails rendering test', () => {
  const item = {
    title: 'Interstellar 4',
    releaseDate: '2017',
    image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
    genre: 'action 4',
    rating: 7.2,
    duration: 145,
    description: 'is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.',
  };

  const defaultStore = {
    moviesReducer: {
      selectedItem: item,
    },
  };

  const store = createStore(rootReducer, defaultStore);

  const component = mount(<Provider store={store}>
        <DetailsView item={item} />
    </Provider>);
  expect(shallowToJson(component)).toMatchSnapshot();
});

test('ItemDetails noItem rendering test', () => {
  const defaultStore = {
    moviesReducer: {
      selectedItem: null,
    },
  };

  const store = createStore(rootReducer, defaultStore);

  const component = mount(<Provider store={store}>
        <DetailsView />
    </Provider>);
  expect(shallowToJson(component)).toMatchSnapshot();
});
