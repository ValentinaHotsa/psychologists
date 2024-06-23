import {
  HomeContainer,
  LeftWrap,
  RightWrap,
  IconQuestion,
  IconUsers,
  ButtonStart,
  BoxContainer,
  WhiteBox,
  TextWrap,
} from "./HomeStyles";

import svg from "../../assets/icons.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
      <LeftWrap>
        <h1>
          The road to the <span>depths</span> of the human soul
        </h1>
        <h3>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </h3>
        <Link to="/psychologists">
          <ButtonStart>
            Get started
            <svg>
              <use href={`${svg}#icon-arrow`} />
            </svg>
          </ButtonStart>
        </Link>
      </LeftWrap>
      <RightWrap>
        <IconQuestion>
          <svg>
            <use href={`${svg}#icon-question`} />
          </svg>
        </IconQuestion>
        <IconUsers>
          <svg>
            <use href={`${svg}#icon-users`} />
          </svg>
        </IconUsers>

        <BoxContainer>
          <WhiteBox>
            <svg>
              <use href={`${svg}#icon-check`} />
            </svg>
          </WhiteBox>
          <TextWrap>
            <h3>Experienced psychologists</h3>
            <span>15,000</span>
          </TextWrap>
        </BoxContainer>
      </RightWrap>
    </HomeContainer>
  );
};

export default Home;
