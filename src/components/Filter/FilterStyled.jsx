import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const FilterContainer = styled.div`
  margin-bottom: 32px;
  span {
    color: ${theme.colors.secondGray};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  width: 226px;
`;

export const DropdownHeader = styled.div`
  margin-top: 8px;
  color: ${theme.colors.white};
  font-size: 16px;
  border-radius: 14px;
  border: none;
  background: ${theme.colors.green};
  margin-bottom: 8px;
  cursor: pointer;
  width: 226px;
  height: 48px;
  padding-left: 18px;
  padding-right: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 14px;
    height: 7px;
    stroke: ${theme.colors.white};
    fill: transparent;
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  overflow-y: auto;
  border: none;
  z-index: 1000;
  border-radius: 14px;
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  background: rgb(255, 255, 255);
`;

export const DropdownList = styled.ul`
  color: rgba(25, 26, 21, 0.3);
  font-size: 16px;
  line-height: 20px;

  li {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 18px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: ${theme.colors.lightGreen};
      color: ${theme.colors.black};
    }
  }

  li:first-child {
    padding-top: 14px;
  }

  li:last-child {
    padding-bottom: 14px;
  }
`;
