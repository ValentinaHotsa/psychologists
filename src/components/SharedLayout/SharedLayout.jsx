import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/psychologists">Psychologists</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
