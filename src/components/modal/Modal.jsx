import ReactDOM from "react-dom";
import { ModalDrop, ModalWrapper, CloseButton } from "./ModalStyles";
import { useEffect, useRef } from "react";
import svg from "../../assets/icons.svg";

const Modal = ({ onClose, children }) => {
  const targetElement = document.getElementById("modal-root");
  const backdrop = useRef();

  const handleClickOutside = (event) => {
    if (event.target === backdrop.current) {
      onClose();
    }
    document.body.style.overflow = "";
    document.body.style.position = "";
    event.stopPropagation();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      document.body.style.overflow = "";
      document.body.style.position = "";
      onClose();
    }
  };

  useEffect(() => {
    const eventHandler = (e) => handleKeyDown(e);
    document.addEventListener("keydown", eventHandler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", eventHandler);
    };
  }, []);

  return ReactDOM.createPortal(
    <ModalDrop onClick={handleClickOutside} ref={backdrop}>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <svg>
            <use href={`${svg}#icon-close`}></use>
          </svg>
        </CloseButton>
        {children}
      </ModalWrapper>
    </ModalDrop>,
    targetElement
  );
};

export default Modal;
