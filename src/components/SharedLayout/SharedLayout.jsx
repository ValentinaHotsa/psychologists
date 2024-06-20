import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import {
  LogoContainer,
  Container,
  ButtonLog,
  ButtonReg,
} from "./SharedLayoutStyles";
import Modal from "../modal/Modal";
import { LoginForm } from "../auth/login/LoginForm";
import RegistrationForm from "../auth/registration/RegistrationForm";
import { logoutUser } from "../../redux/auth/slice";
import { resetItems } from "../../redux/favorites/slice";

const SharedLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(resetItems());
  };

  return (
    <Container>
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
          {user ? (
            <>
              <span>{user.displayName}</span>
              <button onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <>
              <ButtonLog onClick={handleLoginClick}>Log In</ButtonLog>
              <ButtonReg onClick={handleRegisterClick}>Registration</ButtonReg>
            </>
          )}
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      {isLoginModalOpen && (
        <Modal onClose={closeModal}>
          <LoginForm onSuccess={closeModal} />
        </Modal>
      )}

      {isRegisterModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm onSuccess={closeModal} />
        </Modal>
      )}
    </Container>
  );
};

export default SharedLayout;
