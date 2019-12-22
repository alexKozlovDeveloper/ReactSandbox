import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Genre from './Genre';

configure({ adapter: new Adapter() });

test('Genre rendering test', () => {
  const genre = 'someGenre';

  const component = shallow(<Genre genre={genre} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});
