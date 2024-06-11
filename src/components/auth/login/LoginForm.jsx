import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Input } from "./LoginFormStyles";
import svg from "../../../assets/icons.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/auth/slice";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),
});

export const LoginForm = () => {
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
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Log In</h3>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <Input>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
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
        {errors.password && <p>{errors.password.message}</p>}
      </Input>
      <button type="submit">Sign In</button>
    </Form>
  );
};
