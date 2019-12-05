import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Spinner from "./Spinner";

configure({adapter: new Adapter()});

test('Spinner rendering test', () => {

    const component = shallow(<Spinner/>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

