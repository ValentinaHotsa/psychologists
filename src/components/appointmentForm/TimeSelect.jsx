import { useRef, useState } from "react";
import svg from "../../assets/icons.svg";
import {
  DropDownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListContainer,
} from "./AppointmentFormStyled";

const TimeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const availableTimes = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00"];
  const dropdownRef = useRef(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };
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
