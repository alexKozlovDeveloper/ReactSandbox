import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemImage from "./ItemImage";

configure({adapter: new Adapter()});

test('ItemImage rendering test', () => {

    var image = "someImage";

    const component = shallow(<ItemImage image={image} />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

