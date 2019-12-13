import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import rootReducer from '../../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import ItemBody from "./ItemBody";
import styles from "../../styles/ItemBody.css"

configure({ adapter: new Adapter() });

test('ItemBody rendering test', () => {

    const store = createStore(rootReducer)

    const component = shallow(<Provider store={store}><ItemBody /></Provider>);
    expect(shallowToJson(component)).toMatchSnapshot();
});

test('ItemBody click test', () => {

    var item = {
        id: '99',
        title: "Interstellar 4",
        releaseDate: "2017",
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
        genres: ["action 4"],
        rating: 7.2,
        duration: 145,
        description: "is a 2014 British-American epic science fiction film directed and produced by Christopher Nolan. ... Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.",
    }

    const mockCallBack = jest.fn();

    const store = createStore(rootReducer)

    const component = mount(<Router><Provider store={store}><ItemBody item={item} updateSelectedItemFunc={mockCallBack}/></Provider></Router>);

    component.findWhere(n => n.prop('to') === '/film/99').simulate('click');
    //component.find(Link).simulate('click');

    //expect(mockCallBack.mock.calls.length).toEqual(1);
});

