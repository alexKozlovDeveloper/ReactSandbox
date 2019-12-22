import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ResultsCount from './ResultsCount';

configure({ adapter: new Adapter() });

test('ResultsCount rendering test', () => {
  const count = 'someCount';
  const title = 'someTitle';

  const component = shallow(<ResultsCount count={count} title={title} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});
