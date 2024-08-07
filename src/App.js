import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./components/routes/PrivateRoute";
import { auth } from "./firebase";
import { setUser, clearUser } from "./redux/auth/slice";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/HomePage"));
const Psychologists = lazy(() => import("./pages/PsychologistsPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
