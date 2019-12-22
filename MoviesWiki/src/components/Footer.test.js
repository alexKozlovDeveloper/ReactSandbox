import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({ adapter: new Adapter() });

test('Footer rendering test', () => {
  const footerConfig = {
    title: 'Copyright © 2019 AkTest',
  };

  const component = shallow(<Footer config={footerConfig} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});
