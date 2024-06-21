import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyledView } from "./themed-view.presets";
import { ThemedViewProps } from "./themed-view.props";

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <StyledView
      style={style}
      backgroundColor={backgroundColor}
      {...otherProps}
    />
  );
}
