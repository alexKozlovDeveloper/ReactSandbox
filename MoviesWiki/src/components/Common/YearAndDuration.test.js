import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import YearAndDuration from "./YearAndDuration";

configure({adapter: new Adapter()});

test('YearAndDuration rendering test', () => {

    var year = "someYear";
    var duration = "someDuration";

    const component = shallow(<YearAndDuration year={year} duration={duration}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

