import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import SearchButton from "./SearchButton";

configure({adapter: new Adapter()});

test('SearchButton rendering test', () => {

    var buttonText = 'some text';

    const component = shallow(<SearchButton buttonText={buttonText}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

