import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import NoItemLabel from "./NoItemLabel";

configure({adapter: new Adapter()});

test('NoItemLabel rendering test', () => {

    const component = shallow(<NoItemLabel />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

