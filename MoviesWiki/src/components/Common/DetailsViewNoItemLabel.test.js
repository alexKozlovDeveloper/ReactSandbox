import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import DetailsViewNoItemLabel from "./DetailsViewNoItemLabel";

configure({adapter: new Adapter()});

test('DetailsViewNoItemLabel rendering test', () => {
    const component = shallow(<DetailsViewNoItemLabel />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

