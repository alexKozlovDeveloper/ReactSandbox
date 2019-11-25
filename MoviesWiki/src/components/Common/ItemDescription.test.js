import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemDescription from "./ItemDescription";

configure({adapter: new Adapter()});

test('ItemDescription rendering test', () => {

    var description = "someDescription";

    const output = shallow(<ItemDescription description={description} />);
    expect(shallowToJson(output)).toMatchSnapshot();
 });

