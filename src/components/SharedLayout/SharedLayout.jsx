import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import { LogoContainer } from "./SharedLayoutStyles";
import Modal from "../modal/Modal";
import { LoginForm } from "../auth/login/LoginForm";
import RegistrationForm from "../auth/registration/RegistrationForm";
import { logout } from "../../redux/auth/slice";

const SharedLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const closeModal = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  return (
    <>
      <header>
        <LogoContainer>
          <Link to="/">
            <span>psychologists.</span>services
          </Link>
        </LogoContainer>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/psychologists">Psychologists</NavLink>
          {user && <NavLink to="/favorites">Favorites</NavLink>}
        </nav>
        <div>
          <button onClick={handleLoginClick}>Log In</button>
          <button onClick={handleRegisterClick}>Registration</button>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      {isLoginModalOpen && (
        <Modal onClose={closeModal}>
          <LoginForm />
        </Modal>
      )}

      {isRegisterModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default SharedLayout;
