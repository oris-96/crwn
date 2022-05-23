import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields({
      email: "",
      password: "",
    });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {

      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already Have an Account Sign In</h2>

      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
