import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/slice";
import PsychologistItem from "../PsychologistItem/PsychologistItem";
import Filter from "../Filter/Filter";
import {
  FavoriteContainer,
  FavoriteSection,
  FavoriteList,
  Title,
  LoadButton,
  ListWrap,
} from "./FavoritesListStyled";
import { Link } from "react-router-dom";
import {
  selectCurrentPage,
  selectFilter,
  selectItemsPerPage,
} from "../../redux/psychologists/selectors";
import ScrollUp from "../ScrollUp/ScrollUp";
import { nextPage } from "../../redux/psychologists/slice";

const FavoritesList = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const applyFilter = (favorites, filter) => {
    switch (filter) {
      case "A to Z":
        return favorites.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return favorites.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "Less to greater":
        return favorites
          .slice()
          .sort((a, b) => a.price_per_hour - b.price_per_hour);
      case "Greater to less":
        return favorites
          .slice()
          .sort((a, b) => b.price_per_hour - a.price_per_hour);
      case "Popular":
        return favorites.slice().sort((a, b) => b.rating - a.rating);
      case "Not popular":
        return favorites.slice().sort((a, b) => a.rating - b.rating);
      default:
        return favorites;
    }
  };
  const filteredPsychologists = applyFilter(favorites, filter);

  const visiblePsychologists = filteredPsychologists.slice(
    0,
    currentPage * itemsPerPage
  );
  const itemsNeedVisible = visiblePsychologists.length < favorites.length;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

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
          <ListWrap>
            <FavoriteList>
              {visiblePsychologists.map((psychologist) => (
                <PsychologistItem
                  key={psychologist.id}
                  psychologist={psychologist}
                />
              ))}
            </FavoriteList>

            {itemsNeedVisible && (
              <LoadButton onClick={handleLoadMore}>Load more</LoadButton>
            )}
          </ListWrap>
        )}
      </FavoriteContainer>
      <ScrollUp />
    </FavoriteSection>
  );
};
export default FavoritesList;
