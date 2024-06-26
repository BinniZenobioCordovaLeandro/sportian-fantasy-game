import { border } from "@/constants/border";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const {
  width: SCREEN_WIDTH,
} = Dimensions.get('window');

const isMobile = SCREEN_WIDTH < 768;

export const CharacterContainer = styled.View`
  margin: ${spacing[3]}px;
  border-radius: ${radius[2]}px;
  justify-content: space-between;
  align-items: center;
  border-width: ${border[2]}px;
  overflow: hidden;
  width: 200px;
  height: 300px;
  ${
    isMobile && `
      width: 100%;
      height: 300px;
    `
  }
`;

export const ImageWrapper = styled.View`
  position: relative;
  top: -50px;
  margin-bottom: -90px;
`;

export const BodyWrapper = styled.View`
  width: 100%;
  overflow: hidden;
  max-height: 100px;
  padding: ${spacing[3]}px 0px;
  align-items: center;
`;

export const ActionWrapper = styled.View`
  justify-content: space-around;
  padding: ${spacing[3]}px 0px;
`;
