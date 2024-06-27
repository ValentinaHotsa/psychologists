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
import Modal from "../../modal/Modal";
import AppointmentForm from "../../appointmentForm/AppointmentForm";

const MoreInfo = ({ psychologist }) => {
  const user = useSelector((state) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
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
          {user ? (
            <AppointmentForm
              psychologist={psychologist}
              onSuccess={closeModal}
            />
          ) : (
            "This action is only for logged in users"
          )}
        </Modal>
      )}
    </Container>
  );
};

export default MoreInfo;
