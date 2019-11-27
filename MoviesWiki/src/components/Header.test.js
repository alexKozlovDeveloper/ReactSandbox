import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Header from "./Header";

configure({adapter: new Adapter()});

test('Header rendering test', () => {

    var headerConfig = {
        title: "Find Your Movies",
        searchConfig: {
            placeHolder: "Quentin Tarantino",
            buttonText: "Search",
            searchFilter: {
                title: "Search by",
                selectedIndex: "0",
                options: ["Title", "Genre"]
            }
        }
    }

    const component = shallow(<Header config={headerConfig}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

