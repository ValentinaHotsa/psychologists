import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import svg from "../../assets/icons.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/slice.js";
import {
  ContainerLogin,
  TitleWrap,
  Form,
  Input,
  SubmitButton,
  ErrorMessage,
} from "./FormStyles.jsx";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(15, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/^[a-zA-Z0-9]+$/, "Password can only contain Latin letters."),
});

const RegistrationForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    onSuccess();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerLogin>
      <TitleWrap>
        <h3>Registration</h3>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </TitleWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name")} placeholder="Name" />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Input>
        <Input>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} placeholder="Email" />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Input>
        <Input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <svg onClick={togglePassword}>
            <use
              href={showPassword ? `${svg}#icon-eye` : `${svg}#icon-eye-off`}
            ></use>
          </svg>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </Input>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    </ContainerLogin>
  );
};

export default RegistrationForm;
