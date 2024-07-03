import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ModalDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  // width: 90vw;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${theme.colors.white};
  padding: 30px;
  max-height: 100vh;

  @media screen and (min-width: 500px) {
    max-width: 982px;
    padding: 64px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  width: 32px;
  height: 32px;

  svg {
    width: 26px;
    height: 26px;
    stroke: ${theme.colors.black};
  }
`;
