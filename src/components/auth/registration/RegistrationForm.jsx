import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Input } from "./RegistrationFormStyles";
import { auth } from "../../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import svg from "../../../assets/icons.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/auth/slice.js";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),
});

const RegistrationForm = () => {
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
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Registration</h3>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <Input>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
      </Input>
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
      <button type="submit">Sign Up</button>
    </Form>
  );
};

export default RegistrationForm;
