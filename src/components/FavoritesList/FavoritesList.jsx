import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/slice";
import PsychologistItem from "../PsychologistItem/PsychologistItem";
import Filter from "../Filter/Filter";
import {
  FavoriteContainer,
  FavoriteSection,
  FavoriteList,
  Title,
} from "./FavoritesListStyled";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <FavoriteSection>
      <FavoriteContainer>
        <Filter />
        {favorites.length === 0 ? (
          <Title>
            No favorites. Go to the{" "}
            <Link to="/psychologists">Psychologists</Link> and add doctor to
            your favorites.
          </Title>
        ) : (
          <FavoriteList>
            {favorites.map((psychologist) => (
              <PsychologistItem
                key={psychologist.id}
                psychologist={psychologist}
              />
            ))}
          </FavoriteList>
        )}
      </FavoriteContainer>
    </FavoriteSection>
  );
};
export default FavoritesList;
