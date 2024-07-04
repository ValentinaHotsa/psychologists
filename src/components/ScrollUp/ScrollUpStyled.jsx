import styled from "@emotion/styled";
import { theme } from "../../styles/root";

export const ScrollContainer = styled.div`
  .scroll-to-top {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${theme.colors.lightGreen};
    transition: background-color 0.3s ease;
    right: 10px;
    bottom: 10px;
    box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  }
  .scroll-to-top:hover {
    background-color: ${theme.colors.green};
    svg {
      stroke: ${theme.colors.white};
    }
  }
  svg {
    width: 25px;
    height: 25px;
    fill: transparent;
    stroke: ${theme.colors.green};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    .scroll-to-top {
      width: 80px;
      height: 80px;
      right: 30px;
      bottom: 30px;
    }
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
