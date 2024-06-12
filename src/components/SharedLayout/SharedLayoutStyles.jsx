import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const Container = styled.div`
  header {
    display: flex;
    flex-direction: row;
    gap: 150px;
    border: solid black;
  }
  nav {
    display: flex;
    flex-direction: row;
    gap: 50px;
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
