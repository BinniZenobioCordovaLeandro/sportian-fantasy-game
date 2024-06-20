import React from 'react';
import { Image } from './image';

export default {
  title: 'Image',
  component: Image,
};

export const Default = () => <Image source={{uri: "https://pngimg.com/d/rick_morty_PNG35.png"}} />;
export const Circle = () => <Image source={{uri: "https://pngimg.com/d/rick_morty_PNG35.png"}} />;
export const Triangle = () => <Image source={{uri: "https://pngimg.com/d/rick_morty_PNG35.png"}} />;
