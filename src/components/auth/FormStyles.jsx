import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ContainerLogin = styled.div`
  max-width: 438px;
`;

export const TitleWrap = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    color: ${theme.colors.grayText};
  }

  @media screen and (min-width: 500px) {
    margin-bottom: 40px;

    h3 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
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
  input {
    width: 100%;
    height: 52px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    font-size: 16px;
    padding: 16px 18px;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${theme.colors.black};
    opacity: 1;
    font-size: 16px;
    font-family: Inter;
  }
  svg {
    position: absolute;
    right: 10px;
    stroke: ${theme.colors.black};
    fill: transparent;
    width: 20px;
    height: 20px;
    top: 30%;
    right: 19px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  color: ${theme.colors.white};
  background-color: ${theme.colors.green};
  border-radius: 30px;
  border: none;
  padding: 16px 32px;
  transition: background-color 0.3s ease;
  font-size: 16px;
  font-weight: 500;
  margin-top: 22px;

  &:hover {
    background: rgb(54, 163, 121);
  }
`;
