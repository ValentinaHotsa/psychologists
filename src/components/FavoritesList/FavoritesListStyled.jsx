import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const FavoriteSection = styled.section`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FavoriteContainer = styled.div``;

export const FavoriteList = styled.ul`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h4`
  font-size: 18px;
  text-align: center;
  a {
    color: ${theme.colors.green};
    transition: all 0.3s ease;
  }

  a:hover {
    color: rgb(54, 163, 121);
    text-decoration: underline;
  }
`;
