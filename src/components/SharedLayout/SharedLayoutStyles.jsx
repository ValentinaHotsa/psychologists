import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 20px;
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
  align-items: center;
  justify-content: center;
  padding: 24px 36px;

  nav {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;

    a {
      color: ${theme.colors.black};
      font-size: 16px;
      line-height: 20px;
      transition: color 0.3s ease;
    }
    a:hover,
    a:focus {
      color: ${theme.colors.green};
    }
    .active {
      position: relative;
    }
    .active::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 135%;
      display: block;
      width: 8px;
      height: 8px;
      transform: translate(-50%, -50%);
      border-radius: 50px;
      background-color: ${theme.colors.green};
    }
  }
  @media screen and (min-width: 850px) {
    justify-content: space-evenly;
  }
`;

export const LogoContainer = styled.div`
  a {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: ${theme.colors.black};
  }
  span {
    color: ${theme.colors.green};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLog = styled.button`
  padding: 14px 40px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  background-color: transparent;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.green};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  align-items: center;
  justify-content: center;
  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.white};
  }
`;
