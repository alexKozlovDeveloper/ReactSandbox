import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import DetailsTitle from "./DetailsTitle";

configure({ adapter: new Adapter() });

test('DetailsTitle rendering test', () => {

    var title = "someTitle";

    const component = shallow(<DetailsTitle title={title} />);
    expect(shallowToJson(component)).toMatchSnapshot();
});

