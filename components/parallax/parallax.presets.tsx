import styled from "styled-components";
import Animated from 'react-native-reanimated';
import { ThemedView as BaseThemedView } from '../themed-view/themed-view';


export const ThemedView = styled(BaseThemedView)`
  flex: 1;
`;

export const Header = styled(Animated.View)`
  height: 250px;
  overflow: hidden;
`;

export const Content = styled(BaseThemedView)`
  flex: 1;
  padding: 32px;
  gap: 16px;
  overflow: hidden;
`;