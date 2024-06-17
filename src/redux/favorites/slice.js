import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    resetItems: (state) => {
      state.favorites = [];
    },
  },
});

export const selectFavorites = (state) => state.favorites.favorites;

export const { addToFavorites, removeFromFavorites, resetItems } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
