import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./components/routes/PrivateRoute";

const Home = lazy(() => import("./pages/HomePage"));
const Psychologists = lazy(() => import("./pages/PsychologistsPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="psychologists" element={<Psychologists />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
