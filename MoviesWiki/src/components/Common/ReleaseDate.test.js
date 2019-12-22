import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ReleaseDate from './ReleaseDate';

configure({ adapter: new Adapter() });

test('ItemReleaseDate rendering test', () => {
  const releaseDate = 'someReleaseDate';

  const component = shallow(<ReleaseDate releaseDate={releaseDate} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});
