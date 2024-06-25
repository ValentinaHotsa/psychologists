import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const PsychologistsPageSection = styled.section`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LoadButton = styled.button`
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 0.3s ease;
  background-color: ${theme.colors.green};
  border-radius: 30px;
  border: none;
  padding: 14px 48px;
  margin: 0 auto;

  &:hover {
    background: rgb(54, 163, 121);
  }
`;

export const Pc = styled.div``;
