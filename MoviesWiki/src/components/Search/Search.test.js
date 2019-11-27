import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Search from "./Search";

configure({adapter: new Adapter()});

test('Search rendering test', () => {

    var searchConfig = {
        placeHolder: "Quentin Tarantino",
        buttonText: "Search",
        searchFilter: {
            title: "Search by",
            selectedIndex: "0",
            options: ["Title", "Genre"]
        }
    }

    const component = shallow(<Search config={searchConfig}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

