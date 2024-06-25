import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../../redux/favorites/slice";
import {
  ItemWrapper,
  PhotoContainer,
  CardContainer,
  HeaderCard,
  LeftWrap,
  RightWrap,
  InfoList,
  RatingWrap,
  Description,
  BtnWrap,
  FavoriteButton,
} from "./PsychologistItemStyles";
import svg from "../../assets/icons.svg";

const PsychologistItem = ({ psychologist }) => {
  const { id, name, specialization, rating, price_per_hour } = psychologist;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((favItem) => favItem.id === id));
  }, [favorites, id]);

  const addFavorite = useCallback(
    (item) => {
      dispatch(addToFavorites(item));
    },
    [dispatch]
  );

  const removeFavorite = useCallback(
    (item) => {
      dispatch(removeFromFavorites(item));
    },
    [dispatch]
  );

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(psychologist);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <li>
      <ItemWrapper>
        <PhotoContainer>
          <img src={psychologist.avatar_url} alt={name} />
        </PhotoContainer>

        <CardContainer>
          <HeaderCard>
            <LeftWrap>
              <p>Psychologist</p>
              <h2>{name}</h2>
            </LeftWrap>
            <RightWrap>
              <RatingWrap>
                <svg>
                  <use href={`${svg}#icon-star`} />
                </svg>
                <p>Rating: {rating}</p>
              </RatingWrap>
              <BtnWrap>
                <p>
                  Price / 1 hour: <span>{price_per_hour}$</span>
                </p>

                <FavoriteButton type="button" onClick={handleFavoriteToggle}>
                  <svg
                    style={{
                      fill: isFavorite ? "#54BE96" : "",
                      stroke: isFavorite ? "#54BE96" : "#191A15",
                    }}
                  >
                    <use href={`${svg}#icon-heart`} />
                  </svg>
                </FavoriteButton>
              </BtnWrap>
            </RightWrap>
          </HeaderCard>

          <InfoList>
            <li>
              Experience: <span>{psychologist.experience}</span>
            </li>
            <li>
              License: <span>{psychologist.license}</span>
            </li>
            <li>
              Specialization: <span>{specialization}</span>
            </li>
            <li>
              Initial_consultation:{" "}
              <span>{psychologist.initial_consultation}</span>
            </li>
          </InfoList>
          <Description>{psychologist.about}</Description>
        </CardContainer>
      </ItemWrapper>

      {/* 
           
            <h3>Reviews:</h3>
            <ul>
              {psychologist.reviews.map((review, reviewIndex) => (
                <li key={reviewIndex}>
                  <p>Reviewer: {review.reviewer}</p>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </li>
              ))}
            </ul> */}
    </li>
  );
};

export default PsychologistItem;
