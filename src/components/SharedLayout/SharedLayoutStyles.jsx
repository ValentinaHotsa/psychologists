import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const Container = styled.div`
  header {
    display: flex;
    flex-direction: row;
    gap: 150px;
    border-bottom: 1px solid rgba(25, 26, 21, 0.1);
    align-items: center;
    justify-content: center;
    padding-top: 38px;
    padding-bottom: 38px;
  }
  nav {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;

    a {
      color: ${theme.colors.black};
      font-size: 16px;
      line-height: 20px;
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

export const ButtonLog = styled.button`
  width: 124px;
  height: 48px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;

  background-color: transparent;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const ButtonReg = styled.button`
  width: 124px;
  height: 48px;
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;

  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
