import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/slice";
import PsychologistItem from "../PsychologistItem/PsychologistItem";

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length === 0 ? (
        <h3>No favorites</h3>
      ) : (
        <ul>
          {favorites.map((psychologist) => (
            <PsychologistItem
              key={psychologist.id}
              psychologist={psychologist}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default FavoritesList;
