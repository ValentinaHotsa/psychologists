import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { authReducer } from "./auth/slice";
// import storage from "redux-persist/lib/storage";
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "auth",
//   storage,
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
