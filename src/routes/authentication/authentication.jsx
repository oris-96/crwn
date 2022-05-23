// import {
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
//   auth,
// } from "../../utils/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss'

// import { useEffect } from "react";

// import { getRedirectResult } from "firebase/auth";
// import { async } from "@firebase/util";

const Authentication = () => {
  //   useEffect(() => {
  //     const signInWithRedirectGoog = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     signInWithRedirectGoog();
  //   }, []);

  // const signInWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>Sign In with google pop up</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with google redirect
      </button> */}

      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
