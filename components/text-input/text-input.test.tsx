import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { TextInput } from './text-input';

describe('TextInput', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    renderer.create(<TextInput placeholder="Search" />);
  });
});