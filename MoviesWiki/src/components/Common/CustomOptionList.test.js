import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import CustomOptionList from "./CustomOptionList";

configure({adapter: new Adapter()});

test('CustomOptionList rendering test', () => {

    var config = {
        title: "Search by",
        selectedIndex: "0",
        options: ["Title", "Genre"]
    }

    const output = shallow(<CustomOptionList config={config} />);
    expect(shallowToJson(output)).toMatchSnapshot();
 });

