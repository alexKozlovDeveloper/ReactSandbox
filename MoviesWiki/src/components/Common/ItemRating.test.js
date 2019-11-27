import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemRating from "./ItemRating";

configure({adapter: new Adapter()});

test('ItemRating rendering test', () => {

    var rating = "someRating";

    const component = shallow(<ItemRating rating={rating} />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

