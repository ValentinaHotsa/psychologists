import ScrollToTop from "react-scroll-to-top";
import svg from "../../assets/icons.svg";
import { ScrollContainer } from "./ScrollUpStyled";

const ScrollUp = () => {
  return (
    <ScrollContainer>
      <ScrollToTop
        smooth
        component={
          <svg>
            <use href={`${svg}#icon-up`} />
          </svg>
        }
      />
    </ScrollContainer>
  );
};

export default ScrollUp;
