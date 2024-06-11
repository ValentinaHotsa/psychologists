import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const Form = styled.form`
  h3 {
  }
  p {
  }
`;
export const Input = styled.div`
  position: relative;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  svg {
    position: absolute;
    right: 10px;
    stroke: ${theme.colors.black};
    fill: transparent;
    width: 20px;
    height: 20px;
  }
`;
