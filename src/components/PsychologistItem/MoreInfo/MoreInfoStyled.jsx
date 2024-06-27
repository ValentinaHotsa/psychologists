import styled from "@emotion/styled";
import { theme } from "../../../styles/root";

export const Container = styled.div``;

export const ReviewList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 25px;
  }
`;
export const ReviewContainer = styled.div``;
export const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Name = styled.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.colors.black};
`;
export const Avatar = styled.div`
  font-size: 20px;
  font-weight: 500;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.lightGreen};
  color: ${theme.colors.green};
`;
export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-bottom: 16px;
`;
export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.black};
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.yellow};
  }
`;
export const Content = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.grayText};
`;
