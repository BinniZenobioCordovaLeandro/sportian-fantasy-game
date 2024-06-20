import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Image } from './image';

describe('Image', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders correctly', () => {
    renderer.create(<Image source={1} />);
  });
});
