import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  ContainerLogin,
  Form,
  Input,
  SubmitButton,
  TitleWrap,
  ErrorMessage,
} from "./FormStyles";
import svg from "../../assets/icons.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/slice";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/^[a-zA-Z0-9]+$/, "Password can only contain Latin letters."),
});

export const LoginForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    onSuccess();
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerLogin>
      <TitleWrap>
        <h3>Log In</h3>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </TitleWrap>

      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>
    </ContainerLogin>
  );
};
