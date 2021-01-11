import "./Login.css";
import React from "react";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { login } from "./features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <Button variant="contained" color="secondary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
