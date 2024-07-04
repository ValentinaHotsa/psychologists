import { Link } from "react-router-dom";
import { ContainerPage, ContainerWrap, TextWrap } from "./NotFoundStyled";

const NotFound = () => {
  return (
    <ContainerPage>
      <ContainerWrap>
        <TextWrap>
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </TextWrap>
        <Link to="/">Go to homepage</Link>
      </ContainerWrap>
    </ContainerPage>
  );
};

export default NotFound;
