import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './text';

describe('Text component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    renderer.create(<Text type="link" />);
  });
});
