import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../../redux/favorites/slice";

const PsychologistItem = ({ psychologist }) => {
  const { id, name, specialization } = psychologist;
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
      {/* <img src={psychologist.avatar_url} alt={psychologist.name} /> */}
      <h2>{name}</h2>
      <p>{specialization}</p>
      <button type="button" onClick={handleFavoriteToggle}>
        Favorite
      </button>
      {/* <p>Experience: {psychologist.experience}</p>
            <p>Price per hour: ${psychologist.price_per_hour}</p>
            <p>Rating: {psychologist.rating}</p>
            <p>License: {psychologist.license}</p>
            <p>Initial Consultation: {psychologist.initial_consultation}</p>
            <p>About: {psychologist.about}</p>
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
