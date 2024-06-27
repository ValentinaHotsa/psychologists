import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ModalContainer,
  Title,
  SubTitle,
  DoctorWrap,
  PhotoThumb,
  NameWrap,
  TitleWrap,
  Button,
  Form,
  Input,
  FormWrap,
} from "./AppointmentFormStyled";

const appointmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Name is required"),
  phone: Yup.string()
    .matches(
      /^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
  time: Yup.string().required("Time is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  comment: Yup.string().min(2, "Too Short!").required("Name is required"),
});

const AppointmentForm = ({ psychologist, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(appointmentSchema) });

  const onSubmit = (data) => {
    alert(data.name);
    onSuccess();
  };

  return (
    <ModalContainer>
      <TitleWrap>
        <Title>Make an appointment with a psychologists</Title>
        <SubTitle>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </SubTitle>
      </TitleWrap>

      <DoctorWrap>
        <PhotoThumb>
          <img src={psychologist.avatar_url} alt={psychologist.name} />
        </PhotoThumb>
        <NameWrap>
          <p>Your psychologist</p>
          <h5>{psychologist.name}</h5>
        </NameWrap>
      </DoctorWrap>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name")} placeholder="Name" />
          {errors.name && <p>{errors.name.message}</p>}
        </Input>
        <FormWrap>
          <Input style={{ width: "232px" }}>
            <label htmlFor="phone">Phone</label>
            <input id="phone" {...register("phone")} placeholder="Phone" />
            {errors.phone && <p>{errors.phone.message}</p>}
          </Input>

          <Input style={{ width: "232px" }}>
            <label htmlFor="time">Time</label>
            <input id="time" {...register("time")} placeholder="Time" />
            {errors.time && <p>{errors.time.message}</p>}
          </Input>
        </FormWrap>

        <Input>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </Input>

        <Input>
          <label htmlFor="comment">Comment</label>
          <input id="comment" {...register("comment")} placeholder="Comment" />
          {errors.comment && <p>{errors.comment.message}</p>}
        </Input>
        <Button type="submit">Send</Button>
      </Form>
    </ModalContainer>
  );
};

export default AppointmentForm;
