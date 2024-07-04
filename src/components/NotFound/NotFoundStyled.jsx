import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ContainerPage = styled.div`
  position: relative;
  height: 100vh;
`;

export const ContainerWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 250px;
  width: 100%;
  line-height: 1.4;
  text-align: center;

  a {
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 14px 40px;
    background: #54be96;
    font-size: 18px;
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background: rgb(54, 163, 121);
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 520px;
  }
`;

export const TextWrap = styled.div`
  position: relative;
  height: 120px;
  margin: 0 auto 20px;
  z-index: -1;

  h1 {
    font-size: 100px;
    font-weight: 200;
    margin: 0;
    color: #211b19;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  h2 {
    font-size: 12px;
    text-transform: uppercase;
    color: #211b19;
    background: #f3f3f3;
    padding: 10px 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    border-radius: 30px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    height: 200px;

    h1 {
      font-size: 236px;
    }

    h2 {
      font-size: 28px;
    }
  }
`;
