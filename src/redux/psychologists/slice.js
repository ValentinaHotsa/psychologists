// slice.js
import { createSlice } from "@reduxjs/toolkit";

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    data: [],
    currentPage: 1,
    itemsPerPage: 3,
    filter: "",
  },
  reducers: {
    setPsychologists: (state, action) => {
      state.data = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    resetState: (state) => {
      state.data = [];
      state.currentPage = 1;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setPsychologists, setFilter, nextPage, resetState } =
  psychologistsSlice.actions;

export const psychologistsReducer = psychologistsSlice.reducer;
