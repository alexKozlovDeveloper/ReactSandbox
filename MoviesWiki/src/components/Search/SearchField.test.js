import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import SearchField from "./SearchField";

configure({ adapter: new Adapter() });

test('SearchField rendering test', () => {

    var placeholder = 'some placeholder';

    const component = shallow(<SearchField placeholder={placeholder} />);
    expect(shallowToJson(component)).toMatchSnapshot();
});

