import { useState } from "react";

import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import "./sign-up-form.scss"

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthWithEmailAndPassword(email, password);
      console.log(response.user);

      await createUserDocumentFromAuth(response.user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user , email already in use ");
      }
      console.log("Invalid credentials", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Don't Hav an Account Sign up</h2>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
