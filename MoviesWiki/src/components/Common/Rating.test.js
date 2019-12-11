import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Rating from "./Rating";

configure({ adapter: new Adapter() });

test('Rating rendering test', () => {

    var rating = "someRating";

    const component = shallow(<Rating rating={rating} />);
    expect(shallowToJson(component)).toMatchSnapshot();
});

