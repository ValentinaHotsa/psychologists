import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const DropDownContainer = styled.div`
  position: relative;
  width: 300px;
`;

export const DropdownHeader = styled.div`
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background: ${theme.colors.lightGreen};
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  overflow-y: auto;
  border: none;
  z-index: 1000;
`;

export const DropdownList = styled.ul``;
