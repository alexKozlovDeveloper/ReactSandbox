import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemYearAndDuration from "./ItemYearAndDuration";

configure({adapter: new Adapter()});

test('ItemYearAndDuration rendering test', () => {

    var year = "someYear";
    var duration = "someDuration";

    const component = shallow(<ItemYearAndDuration year={year} duration={duration}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

