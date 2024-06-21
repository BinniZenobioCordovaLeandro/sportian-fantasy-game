import styled from "styled-components/native";
import { StyledViewProps } from "./themed-view.props";

export const StyledView = styled.View<StyledViewProps>`
background-color: ${(props) => props.backgroundColor};
`;