import { useEffect, useRef, useState } from "react";
import {
  DropDownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListContainer,
} from "./FilterStyled";
import svg from "../../assets/icons.svg";

const Dropdown = ({ defaultOption, onSelect, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);
  return (
    <DropDownContainer ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <svg>
          <use href={isOpen ? `${svg}#icon-up` : `${svg}#icon-down`} />
        </svg>
      </DropdownHeader>

      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map((option) => (
              <li key={option} onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Dropdown;
