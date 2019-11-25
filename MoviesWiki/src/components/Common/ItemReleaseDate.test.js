import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemReleaseDate from "./ItemReleaseDate";

configure({adapter: new Adapter()});

test('ItemReleaseDate rendering test', () => {

    var releaseDate = "someReleaseDate";

    const output = shallow(<ItemReleaseDate releaseDate={releaseDate} />);
    expect(shallowToJson(output)).toMatchSnapshot();
 });

