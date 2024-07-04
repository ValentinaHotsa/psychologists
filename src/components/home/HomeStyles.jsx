import styled from "@emotion/styled";
import { theme } from "../../styles/root";
import imgHero from "../../assets/hero@1x.jpg";
import imgHero2x from "../../assets/hero@2x.jpg";

export const HomeContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 25px;
  padding-bottom: 25px;

  position: relative;
  background: linear-gradient(
    to top left,
    ${theme.colors.green},
    rgba(25, 26, 21, 0) 50%
  );
  min-height: 100vh;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    gap: 125px;
  }
`;

export const LeftWrap = styled.div`
  max-width: 595px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h1 {
    font-size: 50px;
    font-weight: 600;
  }
  span {
    color: ${theme.colors.green};
    font-style: italic;
  }

  h3 {
    max-width: 510px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    h1 {
      font-size: 80px;
      line-height: 82px;
    }
  }
`;

export const RightWrap = styled.div`
  position: relative;
  background-image: url(${imgHero});
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  width: 100%;
  max-width: 464px;
  height: 526px;
  border-radius: 10px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgHero2x});
  }
`;

export const IconQuestion = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  transform: rotate(-15deg);
  border-radius: 10px;
  background: rgb(69, 53, 175);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30%;
  left: -7%;

  svg {
    width: 9px;
    height: 15px;
    fill: ${theme.colors.white};
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    left: 0%;
  }
`;

export const IconUsers = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  transform: rotate(15deg);
  border-radius: 10px;
  background: rgb(251, 199, 94);
  display: flex;
  justify-content: center;
  align-items: center;
  right: -7%;
  top: 30%;
  svg {
    width: 20px;
    height: 20px;
    fill: ${theme.colors.white};
    transform: rotate(-15deg);
  }

  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    right: 0%;
  }
`;

export const ImgThumb = styled.div``;

export const ButtonStart = styled.div`
  color: ${theme.colors.white};
  width: 235px;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  background-color: ${theme.colors.green};
  border-radius: 30px;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgb(54, 163, 121);
  }
  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.white};
  }
`;

export const BoxContainer = styled.div`
  position: absolute;
  top: 65%;
  left: -20%;
  background-color: ${theme.colors.green};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  max-width: 311px;
  width: 100%;
  max-height: 118px;
  padding: 32px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    left: 0%;
  }
`;

export const WhiteBox = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 16px;
  width: 53px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 22px;
    height: 15px;
    fill: ${theme.colors.green};
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3 {
    color: rgba(251, 251, 251, 0.5);
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
  }
  span {
    color: ${theme.colors.white};
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    line-height: 1.2;
  }
`;
