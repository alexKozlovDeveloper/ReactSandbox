import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemGenre from "./ItemGenre";

configure({adapter: new Adapter()});

test('ItemGenre rendering test', () => {

    var genre = "someGenre";

    const component = shallow(<ItemGenre genre={genre} />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

