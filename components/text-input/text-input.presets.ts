import { border } from "@/constants/border";
import { spacing } from "@/constants/spacing";
import styled from "styled-components/native";

export const TextInputContainer = styled.TextInput`
  border: ${border[2]}px solid black;
  padding: ${spacing[3]}px;
  margin: ${spacing[3]}px;
  background-color: #f0f0f0;
  width: 200px;
`;