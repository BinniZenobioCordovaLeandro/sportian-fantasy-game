import * as React from 'react';
import { ImageProps } from './image.props';
import { ImageContainer } from './image.presets';

export const Image = (props: ImageProps) => {
  return <ImageContainer {...props} />;
};
