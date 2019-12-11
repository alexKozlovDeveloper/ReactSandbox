import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Title from "./Title";

configure({ adapter: new Adapter() });

test('Title rendering test', () => {

    var title = "someTitle";

    const component = shallow(<Title title={title} />);
    expect(shallowToJson(component)).toMatchSnapshot();
});

