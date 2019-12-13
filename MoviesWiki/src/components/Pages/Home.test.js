import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import rootReducer from '../../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from "./Home";

configure({ adapter: new Adapter() });

test('Home rendering test', () => {

    const store = createStore(rootReducer)

    const component = shallow(<Provider store={store}><Home /></Provider>);
    expect(shallowToJson(component)).toMatchSnapshot();
});

