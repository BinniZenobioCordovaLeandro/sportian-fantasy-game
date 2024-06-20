import { spacing } from "@/constants/spacing";
import styled from "styled-components/native";
import { ImageProps } from "./image.props";
import { radius } from "@/constants/radius";

export const DEFAULT_DIMENSION_IMAGE = 200;

export const ImageContainer = styled.Image`
  padding: ${spacing[2]}px;
  border-radius: ${radius[2]}px;
  justify-content: center;
  align-items: center;
  ${(props: ImageProps) =>
    props.shape === "rectangle" &&
    `
      border-radius: ${radius[2]}px;
      width: ${props.width ?? "100%"}px;
      height: ${props.height ?? props.width ?? "100%"}px;
    `}
  ${(props: ImageProps) =>
    props.shape === "circle" &&
    `
      width: ${props.width ? props.width * 0.8 : DEFAULT_DIMENSION_IMAGE}px;
      height: ${props.width ? props.width * 0.8 : DEFAULT_DIMENSION_IMAGE}px;
      border-radius: ${props.width ?? 200}px;
    `}
`;
