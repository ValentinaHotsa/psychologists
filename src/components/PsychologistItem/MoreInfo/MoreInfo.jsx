import {
  Container,
  ReviewList,
  Content,
  RatingWrap,
  ReviewContainer,
  NameWrap,
  Avatar,
  HeaderWrap,
  Name,
} from "./MoreInfoStyled";
import svg from "../../../assets/icons.svg";

const MoreInfo = ({ psychologist }) => {
  return (
    <Container>
      <ReviewList>
        {psychologist.reviews.map((review, reviewIndex) => (
          <li key={reviewIndex}>
            <ReviewContainer>
              <HeaderWrap>
                <Avatar>{review.reviewer.charAt(0)}</Avatar>
                <NameWrap>
                  <Name> {review.reviewer}</Name>
                  <RatingWrap>
                    <svg>
                      <use href={`${svg}#icon-star`} />
                    </svg>
                    <p>{review.rating}</p>
                  </RatingWrap>
                </NameWrap>
              </HeaderWrap>
              <Content>{review.comment}</Content>
            </ReviewContainer>
          </li>
        ))}
      </ReviewList>
    </Container>
  );
};

export default MoreInfo;
