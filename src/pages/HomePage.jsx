import { useState } from "react";
import Modal from "../components/modal/Modal";
import { LoginForm } from "../components/auth/login/LoginForm";
import RegistrationForm from "../components/auth/registration/RegistrationForm";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
