import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('My test Func', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const mouseArea = tree.children[1];

  //console.log(' TREE !!! ' + JSON.stringify(mouseArea));

  mouseArea.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();


  mouseArea.props.onMouseLeave();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});