import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1184px;
  height: auto;
  border-radius: 24px;
  padding: 24px;
  background-color: ${theme.colors.white};
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
  }
`;

export const PhotoContainer = styled.div`
  box-sizing: border-box;
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 30px;
  position: relative;
  min-width: 120px;
  max-width: 120px;
  //   width: 120px;
  height: 120px;
  padding: 10.4px;
  img {
    border-radius: 15px;
    width: 96px;
    height: 96px;
  }
  &::after {
    content: "";
    position: absolute;
    left: 85%;
    top: 12%;
    display: block;
    width: 11.63px;
    height: 11.63px;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    border: 2.3px solid ${theme.colors.white};
    background-color: ${theme.colors.brightGreen};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${theme.colors.secondGray};
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  span {
    color: ${theme.colors.brightGreen};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
  }
`;

export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding-right: 16px;

  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.yellow};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    border-right: 1px solid rgba(25, 26, 21, 0.2);
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    justify-content: right;
    gap: 30px;
    width: auto;
  }
`;

export const FavoriteButton = styled.button`
  border: none;
  background-color: transparent;
  width: 26px;
  height: 26px;
  svg {
    width: 23px;
    height: 20px;
    fill: transparent;
    stroke: ${theme.colors.black};
  }
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 4px;

  li {
    border-radius: 24px;
    background-color: ${theme.colors.grayBckgrnd};
    padding: 8px 16px 8px 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${theme.colors.grayText};
  }
  span {
    color: ${theme.colors.black};
  }
`;

export const Description = styled.p`1
font-size: 16px;
line-height: 20px;
color: ${theme.colors.grayText}`;
