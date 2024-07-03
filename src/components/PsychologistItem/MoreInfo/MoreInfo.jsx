import {
  Container,
  ReviewList,
  Content,
  RatingWrap,
  ReviewContainer,
  NameWrap,
  Avatar,
  HeaderWrap,
  Name,
  ButtonAppointment,
} from "./MoreInfoStyled";
import svg from "../../../assets/icons.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";

import Modal from "../../modal/Modal";
import AppointmentForm from "../../appointmentForm/AppointmentForm";

const MoreInfo = ({ psychologist }) => {
  const user = useSelector((state) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (!user) {
      Swal.fire({
        text: "This feature is available only for registered users. Please log in.",
        icon: "error",
        confirmButtonColor: "#54BE96",
      });

      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <ReviewList>
        {psychologist.reviews.map((review, reviewIndex) => (
          <li key={reviewIndex}>
            <ReviewContainer>
              <HeaderWrap>
                <Avatar>{review.reviewer.charAt(0)}</Avatar>
                <NameWrap>
                  <Name> {review.reviewer}</Name>
                  <RatingWrap>
                    <svg>
                      <use href={`${svg}#icon-star`} />
                    </svg>
                    <p>{review.rating}</p>
                  </RatingWrap>
                </NameWrap>
              </HeaderWrap>
              <Content>{review.comment}</Content>
            </ReviewContainer>
          </li>
        ))}
      </ReviewList>
      <ButtonAppointment type="button" onClick={handleOpenModal}>
        Make an appointment
      </ButtonAppointment>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AppointmentForm psychologist={psychologist} onSuccess={closeModal} />
        </Modal>
      )}
    </Container>
  );
};

export default MoreInfo;
