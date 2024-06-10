import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Input } from "./RegistrationFormStyles";
import { auth } from "../../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import svg from "../../../assets/icons.svg";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });
      console.log("User registered:", user);
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          type="password"
          placeholder="Password"
        />
        <svg>
          <use href={`${svg}#icon-eye`}></use>
        </svg>
        {errors.password && <p>{errors.password.message}</p>}
      </Input>
      <button type="submit">Sign Up</button>
    </Form>
  );
};

export default RegistrationForm;
