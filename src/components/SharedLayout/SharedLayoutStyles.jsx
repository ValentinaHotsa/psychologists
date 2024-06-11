import styled from "@emotion/styled";
import { theme } from "../../styles/root";

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
