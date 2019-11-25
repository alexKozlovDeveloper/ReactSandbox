import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemTitle from "./ItemTitle";

configure({adapter: new Adapter()});

test('ItemTitle rendering test', () => {

    var title = "someTitle";

    const output = shallow(<ItemTitle title={title} />);
    expect(shallowToJson(output)).toMatchSnapshot();
 });

