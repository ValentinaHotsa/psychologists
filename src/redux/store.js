// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { psychologistsReducer } from "./psychologists/slice";
import { favoritesReducer } from "./favorites/slice";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  psychologists: psychologistsReducer,
  favorites: persistReducer(persistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["auth.user"],
      },
    }),
});

export const persistor = persistStore(store);
