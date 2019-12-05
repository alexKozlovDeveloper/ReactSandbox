import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Description from "./Description";

configure({adapter: new Adapter()});

test('Description rendering test', () => {

    var description = "someDescription";

    const component = shallow(<Description description={description} />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

