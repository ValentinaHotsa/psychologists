import { useForm, Controller } from "react-hook-form";
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
  ErrorMessage,
} from "./AppointmentFormStyled";
import TimeSelect from "./TimeSelect";

const appointmentSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(15, "Too Long!"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+380\d{9}$/, "Phone number is not valid"),

  time: Yup.string().required("Time is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  comment: Yup.string().required("Comment is required").min(2, "Too Short!"),
});

const AppointmentForm = ({ psychologist, onSuccess }) => {
  const {
    control,
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
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Input>
        <FormWrap>
          <Input style={{ width: "232px" }}>
            <label htmlFor="phone">Phone</label>
            <Controller
              name="phone"
              control={control}
              defaultValue="+380"
              render={({ field }) => (
                <input
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (value.startsWith("+380")) {
                      field.onChange(value);
                    } else {
                      field.onChange("+380");
                    }
                  }}
                />
              )}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </Input>

          <Input style={{ width: "232px" }}>
            <label htmlFor="time">Time</label>
            <TimeSelect />
            {errors.time && <ErrorMessage>{errors.time.message}</ErrorMessage>}
          </Input>
        </FormWrap>

        <Input>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} placeholder="Email" />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Input>

        <Input>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            {...register("comment")}
            placeholder="Comment"
          />
          {errors.comment && (
            <ErrorMessage>{errors.comment.message}</ErrorMessage>
          )}
        </Input>
        <Button type="submit">Send</Button>
      </Form>
    </ModalContainer>
  );
};

export default AppointmentForm;
