import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from "./App";

configure({adapter: new Adapter()});

test('App rendering test', () => {

    const component = shallow(<App />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

