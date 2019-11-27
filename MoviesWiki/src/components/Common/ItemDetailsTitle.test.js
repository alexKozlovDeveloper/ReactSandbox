import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ItemDetailsTitle from "./ItemDetailsTitle";

configure({adapter: new Adapter()});

test('ItemDetailsTitle rendering test', () => {

    var title = "someTitle";

    const component = shallow(<ItemDetailsTitle title={title} />);
    expect(shallowToJson(component)).toMatchSnapshot();
 });

