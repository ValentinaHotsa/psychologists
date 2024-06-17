import { useEffect, useState } from "react";
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
      case "Less than 10$":
        return psychologists.filter(
          (psychologist) => psychologist.price_per_hour < 10
        );
      case "Greater than 10$":
        return psychologists.filter(
          (psychologist) => psychologist.price_per_hour > 10
        );
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
    <div>
      <h1>Psychologists List</h1>
      <Filter />
      <ul>
        {visiblePsychologists.map((psychologist) => (
          <PsychologistItem key={psychologist.id} psychologist={psychologist} />
        ))}
      </ul>
      {itemsNeedVisible && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};

export default PsychologistsList;
