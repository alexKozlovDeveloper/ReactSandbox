import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemBody from "./ItemBody";

configure({adapter: new Adapter()});

test('ItemBody rendering test', () => {

    const component = shallow(<ItemBody />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

