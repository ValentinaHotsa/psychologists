import { useEffect, useRef, useState } from "react";
import svg from "../../assets/icons.svg";
import {
  DropDownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListContainer,
} from "./AppointmentFormStyled";

const TimeSelect = ({ field, form }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(field.value || "00:00");
  const availableTimes = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];
  const dropdownRef = useRef(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
    form.setValue(field.name, time);
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

  return (
    <DropDownContainer ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedTime}
        <svg>
          <use href={`${svg}#icon-clock`} />
        </svg>
      </DropdownHeader>

      {isOpen && (
        <DropdownListContainer>
          <p>Meeting time</p>
          <DropdownList>
            {availableTimes.map((time) => (
              <li key={time} onClick={() => handleTimeSelect(time)}>
                {time}
              </li>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropDownContainer>
  );
};

export default TimeSelect;
