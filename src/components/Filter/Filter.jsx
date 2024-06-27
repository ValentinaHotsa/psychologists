import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/psychologists/slice";
import Dropdown from "./Dropdown";
import { FilterContainer } from "./FilterStyled";

const Filter = () => {
  const defaultFilter = "Show All";
  const dispatch = useDispatch();
  const options = [
    "A to Z",
    "Z to A",
    "Less to greater",
    "Greater to less",
    "Popular",
    "Not popular",
    "Show all",
  ];
  const handleFilterChange = (selectedFilter) => {
    dispatch(setFilter(selectedFilter));
  };
  return (
    <FilterContainer>
      <span>Filters</span>
      <Dropdown
        defaultOption={defaultFilter}
        onSelect={handleFilterChange}
        options={options}
      ></Dropdown>
    </FilterContainer>
  );
};

export default Filter;
