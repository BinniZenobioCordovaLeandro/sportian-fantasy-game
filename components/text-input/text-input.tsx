import * as React from "react";
import { TextInputProps } from "./text-input.props";
import { TextInputContainer } from "./text-input.presets";

export const TextInput = (props: TextInputProps) => {
  const { value, onChangeText, placeholder } = props;
  return (
    <TextInputContainer
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};
