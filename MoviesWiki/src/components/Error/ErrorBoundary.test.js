import React from 'react';
import sinon from 'sinon';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ErrorBoundary from './ErrorBoundary';
import Rating from '../Common/Rating';

configure({ adapter: new Adapter() });

describe('ErrorBoundary component', () => {
  it('Rendering test', () => {
    const component = mount(<ErrorBoundary>
            <div>ak test</div>
        </ErrorBoundary>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Rendering test with error', () => {
    const spy = sinon.spy();

    const component = shallow(<ErrorBoundary spy={spy}><Rating rating="9"/></ErrorBoundary>);

    const error = new Error('Test Error!');

    component.find(Rating).simulateError(error);

    expect(component.state().hasError === true).toBe(true);
  });
});
