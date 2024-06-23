import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import {
  LogoContainer,
  Header,
  ContainerPage,
  ButtonContainer,
  ButtonLog,
  UserContainer,
  IconContainer,
  NameContainer,
} from "./SharedLayoutStyles";
import Modal from "../modal/Modal";
import { LoginForm } from "../auth/login/LoginForm";
import RegistrationForm from "../auth/registration/RegistrationForm";
import { logoutUser } from "../../redux/auth/slice";
import { resetItems } from "../../redux/favorites/slice";
import svg from "../../assets/icons.svg";

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
    <ContainerPage>
      <Header>
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
            <UserContainer>
              <NameContainer>
                <IconContainer>
                  <svg>
                    <use href={`${svg}#icon-user`} />
                  </svg>
                </IconContainer>

                <span>{user.displayName}</span>
              </NameContainer>
              <ButtonLog onClick={handleLogout}>Log Out</ButtonLog>
            </UserContainer>
          ) : (
            <ButtonContainer>
              <ButtonLog onClick={handleLoginClick}>Log In</ButtonLog>
              <ButtonLog onClick={handleRegisterClick}>Registration</ButtonLog>
            </ButtonContainer>
          )}
        </div>
      </Header>
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
    </ContainerPage>
  );
};

export default SharedLayout;
