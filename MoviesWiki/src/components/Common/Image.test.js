import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Image from "./Image";

configure({ adapter: new Adapter() });

test('Image rendering test', () => {

    var image = "someImage";

    const component = shallow(<Image image={image} />);
    expect(shallowToJson(component)).toMatchSnapshot();
});

