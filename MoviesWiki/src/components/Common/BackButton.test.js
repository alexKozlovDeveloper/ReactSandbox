import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import BackButton from "./BackButton";

configure({adapter: new Adapter()});

test('BackButton rendering test', () => {

    var buttonText = "someButtonText";

    const output = shallow(<BackButton buttonText={buttonText} />);
    expect(shallowToJson(output)).toMatchSnapshot();
 });

