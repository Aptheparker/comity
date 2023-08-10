// imports
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import GoogleLogo from "../../assets/images/google_logo.png";
import Modal from "../common/Modal";

// css
import classes from "./GoogleLoginButton.module.css";

// validation
import { checkUserStatus } from "../../services/api";

const GoogleLoginButton = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [wait, setWait] = useState();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const cleanWaitHandler = () => {
    setWait(null);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data) {

            const userEmail = {
              email: res.data.email,
            };

            checkUserStatus(userEmail)
              .then((response) => {
                if (response.status === "User") {
                  navigate("/main", {
                    state: { email: res.data.email },
                    replace: true,
                  });
                } else if (response.status === "Waiting") {
                  setWait(res.data.email);
                } else {
                  navigate("/register", {
                    state: { email: res.data.email },
                    replace: true,
                  });
                }
              })
              .catch((error) => {
                console.error(error.message);
              });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  return (
    <>
      {wait && (
        <Modal
          modalTitle={`Already registered: (${wait})`}
          modalContent={"Please wait for admin’s acceptance."}
          modalButton={"OK"}
          onCleanWait={cleanWaitHandler}
        />
      )}
      <button className={classes["google-login-button"]} onClick={() => login()}>
        <span className={classes["google-login-button__icon"]}>
          <img src={GoogleLogo} alt="google-logo" />
        </span>
      <span className={classes["google-login-button__text"]}>Start with Google</span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
