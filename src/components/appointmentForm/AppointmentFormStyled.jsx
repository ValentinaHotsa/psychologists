import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ModalContainer = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleWrap = styled.div``;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  color: ${theme.colors.black};
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${theme.colors.grayText};
`;

export const DoctorWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

export const PhotoThumb = styled.div`
  img {
    border-radius: 15px;
    width: 44px;
    height: 44px;
  }
`;

export const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    color: ${theme.colors.grayText};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }

  h5 {
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  color: ${theme.colors.white};
  background-color: ${theme.colors.green};
  border-radius: 30px;
  border: none;
  padding: 14px 32px;
  transition: background-color 0.3s ease;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background: rgb(54, 163, 121);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.div`
  max-width: 472px;
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
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
