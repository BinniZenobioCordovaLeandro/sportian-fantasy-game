import * as React from 'react';
import { TextProps } from './text.props';
import { useThemeColor } from '@/hooks/useThemeColor';
import { DefaultSemiBoldText, DefaultText, LinkText, SubtitleText, TitleText } from './text.presets';

export function Text({
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: TextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  let Component;
  switch (type) {
    case 'title':
      Component = TitleText;
      break;
    case 'defaultSemiBold':
      Component = DefaultSemiBoldText;
      break;
    case 'subtitle':
      Component = SubtitleText;
      break;
    case 'link':
      Component = LinkText;
      break;
    default:
      Component = DefaultText;
  }

  return <Component style={{ color }} {...rest} />;
}