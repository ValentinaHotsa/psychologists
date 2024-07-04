import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPsychologists } from "../../redux/psychologists/operations";
import {
  selectPsychologists,
  selectCurrentPage,
  selectFilter,
  selectItemsPerPage,
} from "../../redux/psychologists/selectors";
import {
  resetState,
  nextPage,
  setFilter,
} from "../../redux/psychologists/slice";
import Filter from "../../components/Filter/Filter";
import PsychologistItem from "../PsychologistItem/PsychologistItem";
import {
  PsychologistsPageSection,
  ListWrap,
  List,
  Pc,
  LoadButton,
} from "./PsychologistsListStyles";
import ScrollUp from "../ScrollUp/ScrollUp";

const PsychologistsList = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectPsychologists);
  const currentPage = useSelector(selectCurrentPage);
  const filter = useSelector(selectFilter);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const applyFilter = (psychologists, filter) => {
    switch (filter) {
      case "A to Z":
        return psychologists
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return psychologists
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
      case "Less to greater":
        return psychologists
          .slice()
          .sort((a, b) => a.price_per_hour - b.price_per_hour);
      case "Greater to less":
        return psychologists
          .slice()
          .sort((a, b) => b.price_per_hour - a.price_per_hour);
      case "Popular":
        return psychologists.slice().sort((a, b) => b.rating - a.rating);
      case "Not popular":
        return psychologists.slice().sort((a, b) => a.rating - b.rating);
      default:
        return psychologists;
    }
  };

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const filteredPsychologists = applyFilter(psychologists, filter);

  const visiblePsychologists = filteredPsychologists.slice(
    0,
    currentPage * itemsPerPage
  );
  const itemsNeedVisible = visiblePsychologists.length < psychologists.length;

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  return (
    <PsychologistsPageSection>
      <Pc>
        <Filter />
        <ListWrap>
          <List>
            {visiblePsychologists.map((psychologist) => (
              <PsychologistItem
                key={psychologist.id}
                psychologist={psychologist}
              />
            ))}
          </List>
          {itemsNeedVisible && (
            <LoadButton onClick={handleLoadMore}>Load more</LoadButton>
          )}
        </ListWrap>
      </Pc>
      <ScrollUp />
    </PsychologistsPageSection>
  );
};

export default PsychologistsList;
