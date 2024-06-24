import { Text } from "@/components/text/text";
import { border } from "@/constants/border";
import { spacing } from "@/constants/spacing";
import styled from "styled-components/native";

export const Body = styled.View`
  display: block;
  background-color: #f0f0f0;
`;

export const Row = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  padding: ${spacing[5]}px;
`;

export const ImageWrapper = styled.View`
  align-items: center;
`;

export const Section = styled.View`
  margin: ${spacing[2]}px;
  padding: ${spacing[5]}px;
  background-color: ${({ theme }) => theme.card};
  border-radius: ${spacing[2]}px;
  border: ${border[2]}px solid ${({ theme }) => theme.text};
`;

export const Title = styled(Text)`
  padding: ${spacing[5]}px;
`;

export const Detail = styled(Text)`
  padding: ${spacing[2]}px;
  font-decoration: underline;
`;
