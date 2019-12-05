import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import rootReducer from '../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ItemDetails from "./ItemDetails";

configure({adapter: new Adapter()});

test('ItemDetails rendering test', () => {

    var item = {
        title: "Interstellar 4",
        releaseDate: "2017",
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",        
        genre: "action 4",
        rating: 7.2,
        duration: 145,
        description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
    }

    var defaultStore = {
        moviesReducer: {
            selectedItem: item
        }
    }

    const store = createStore(rootReducer, defaultStore)

    const component = shallow(<Provider store={store}>
                                <ItemDetails item={item}/>
                              </Provider>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

