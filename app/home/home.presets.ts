import { spacing } from "@/constants/spacing";
import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: red;
`;

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: ${spacing[5]}px;
`;

export const ConfigBar = styled.View`
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: ${spacing[5]}px;
`;

export const NavigationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${spacing[5]}px;
`;
