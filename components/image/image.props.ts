import { ImageSourcePropType } from 'react-native';

export interface ImageProps {
  source: ImageSourcePropType;
  shape?: 'rectangle' | 'circle' | 'triangle';
  width?: number;
  height?: number;
}
