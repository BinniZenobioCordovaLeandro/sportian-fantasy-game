import * as React from "react";
import { ButtonProps } from "./button.props";
import { ButtonContainer } from "./button.presets";
import { Text } from "../text/text";

export const Button = (props: ButtonProps) => {
    return (
        <ButtonContainer onPress={props.onPress}>
            <Text>{props.children}</Text>
        </ButtonContainer>
    );
};