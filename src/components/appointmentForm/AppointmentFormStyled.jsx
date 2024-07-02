import styled from "@emotion/styled";
import { theme } from "../../styles/root";
import Select from "react-select";

export const ModalContainer = styled.div`
  max-width: 472px;
`;

export const TitleWrap = styled.div`
  margin-bottom: 40px;
`;

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
  margin-bottom: 40px;
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
  margin-top: 24px;

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

  textarea {
    width: 100%;
    height: 116px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    font-size: 16px;
    padding: 16px 18px;
    outline: none;
    resize: none;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${theme.colors.black};
    opacity: 1;
    font-size: 16px;
    font-family: Inter;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ErrorMessage = styled.div`
  color: #ff2e2e;
  position: absolute;
  font-size: 12px;
  right: 8px;
  top: 4px;
`;

export const DropDownContainer = styled.div`
  position: relative;
  // width: 226px;
`;

export const DropdownHeader = styled.div`
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
  background-color: white;
  font-size: 16px;
  padding: 16px 18px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 226px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 17px;
    height: 17px;
    stroke: ${theme.colors.black};
    fill: transparent;
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 151px;
  height: 180px;
  overflow-y: auto;
  border: none;
  z-index: 1000;
  border-radius: 12px;
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  background: rgb(255, 255, 255);
  padding: 16px;
  p {
    font-weight: 500;
  }
`;

export const DropdownList = styled.ul`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;

  li {
    border-radius: 10px;
    padding-left: 8px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: ${theme.colors.lightGreen};
    }
  }
`;
