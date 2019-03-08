import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Hello } from '../src';

Enzyme.configure({ adapter: new Adapter() });

test('Hello component', () => {
  const hello = Enzyme.shallow(<Hello name="test" />);

  expect(hello.hasClass('starter-hello')).toBe(true);
  expect(hello.text()).toBe('Hello, test!');
});
