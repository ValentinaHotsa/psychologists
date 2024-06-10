import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Input } from "./LoginFormStyles";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import svg from "../../../assets/icons.svg";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User login:", user);
    } catch (error) {
      console.error("Error sign in:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          type="password"
          placeholder="Password"
        />
        <svg>
          <use href={`${svg}#icon-eye`}></use>
        </svg>
        {errors.password && <p>{errors.password.message}</p>}
      </Input>
      <button type="submit">Sign In</button>
    </Form>
  );
};
