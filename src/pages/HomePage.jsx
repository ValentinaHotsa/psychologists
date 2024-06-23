import { useState } from "react";
import Home from "../components/home/Home";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return <Home />;
};

export default HomePage;
