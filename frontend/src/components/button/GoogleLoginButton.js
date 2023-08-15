// hooks
import { useState, useEffect, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import GoogleLogo from "../../assets/images/google_logo.png";
import Modal from "../common/Modal";

// images
import CryingImage from "../../assets/icons/crying_emoji.png";

// css
import classes from "./GoogleLoginButton.module.css";

// api
import { checkUserStatus } from "../../services/api";

// context
import EmailContext from "../../context/email-context";

const GoogleLoginButton = () => {

  const ctx = useContext(EmailContext); // context
  const [user, setUser] = useState(null);
  const [wait, setWait] = useState();
  const [notExist, setNotExist] = useState();
  const navigate = useNavigate();
  
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const cleanWaitHandler = () => {
    setWait(null);
  };

  const cleanNotExistHandler = () => {
    setNotExist(null);
    navigate("/register");
  };

  useEffect(() => {
    if (user) {
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
            const email = res.data.email;
            // ctx.setEmail(email);

            checkUserStatus(email)
              .then((response) => {
                if (response.userStatus === "User") {
                  navigate("/main", {
                    state: { email: email },
                    replace: true,
                  });
                } else if (response.userStatus === "Waiting") {
                  // setWait(true);
                  setNotExist(true);
                } else {
                }
              })
              .catch((error) => {
                console.error(error.message);
              });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate, ctx]);

  return (
    <>
      {wait && (
        <Modal
          modalImage={CryingImage}
          modalTitle={"이미 가입 신청을 완료한 이메일입니다."}
          modalContent={"관리자의 승인을 기다려주십시오."}
          modalButton={"OK"}
          onClean={cleanWaitHandler}
        />
      )}
      {notExist && (
        <Modal
          modalImage={CryingImage}
          modalTitle={"등록되지 않은 회원입니다."}
          modalContent={"회원가입을 해주세요."}
          modalButton={"OK"}
          onClean={cleanNotExistHandler}
        />
      )}
      <button
        className={classes["google-login-button"]}
        onClick={() => login()}
      >
        <span className={classes["google-login-button__icon"]}>
          <img src={GoogleLogo} alt="google-logo" />
        </span>
        <span className={classes["google-login-button__text"]}>
          Start with Google
        </span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
