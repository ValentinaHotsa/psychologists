import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/psychologists/slice";
import Dropdown from "./Dropdown";

const Filter = () => {
  const defaultFilter = "Show All";
  const dispatch = useDispatch();
  const options = [
    "A to Z",
    "Z to A",
    "Less than 10$",
    "Greater than 10$",
    "Popular",
    "Not popular",
    "Show all",
  ];
  const handleFilterChange = (selectedFilter) => {
    dispatch(setFilter(selectedFilter));
  };
  return (
    <div>
      <span>Filter</span>
      <Dropdown
        defaultOption={defaultFilter}
        onSelect={handleFilterChange}
        options={options}
      ></Dropdown>
    </div>
  );
};

export default Filter;
