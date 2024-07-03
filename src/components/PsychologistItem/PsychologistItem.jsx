import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

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
  ButtonMore,
} from "./PsychologistItemStyles";
import svg from "../../assets/icons.svg";
import MoreInfo from "./MoreInfo/MoreInfo";

const PsychologistItem = ({ psychologist }) => {
  const { id, name, specialization, rating, price_per_hour } = psychologist;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

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
    (id) => {
      dispatch(removeFromFavorites(id));
    },
    [dispatch]
  );

  const handleFavoriteToggle = () => {
    if (!user) {
      Swal.fire({
        text: "This feature is available only for registered users. Please log in.",
        icon: "error",
        confirmButtonColor: "#54BE96",
      });

      return;
    }

    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(psychologist);
    }
  };

  const handleMoreClick = () => {
    setShowMoreInfo(!showMoreInfo);
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
              Initial_consultation:
              <span>{psychologist.initial_consultation}</span>
            </li>
          </InfoList>
          <Description>{psychologist.about}</Description>
          {!showMoreInfo && (
            <ButtonMore type="button" onClick={handleMoreClick}>
              Read more
            </ButtonMore>
          )}
          {showMoreInfo && <MoreInfo psychologist={psychologist} />}
        </CardContainer>
      </ItemWrapper>
    </li>
  );
};

export default PsychologistItem;

// const addFavorite = useCallback(
//   (item) => {
//     const isFavorites = favorites.some((favItem) => favItem.id === id);
//     if (!isFavorites) {
//       dispatch(addToFavorites(item));
//     }
//   },
//   [dispatch, favorites, id]
// );

// const removeFavorite = useCallback(
//   (item) => {
//     dispatch(removeFromFavorites(item));
//   },
//   [dispatch]
// );

// const handleFavoriteToggle = () => {
//   if (!user) {
//     alert(
//       "This feature is available only for registered users. Please log in."
//     );
//     return;
//   }
//   if (isFavorite) {
//     removeFavorite(id);
//   } else {
//     addFavorite(psychologist);
//   }
// };

// useEffect(() => {
//   setIsFavorite(favorites.some((favItem) => favItem.id === psychologist.id));
// }, [psychologist, favorites]);
