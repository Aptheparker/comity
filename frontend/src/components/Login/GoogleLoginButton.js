// imports
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import GoogleLogo from "../../assets/images/google_logo.png";
import Modal from "../../pages/modals/Modal";

// css
import "./GoogleLoginButton.css";

// validation
import { verifyAccount } from "../Validation/loginValidation";
import { checkUserStatus } from '../../services/api';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [wait, setWait] = useState();
  const [isUserIdValid, setIsUserIdValid] = useState(false); //api

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

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
            console.log(res.data.name);
            console.log(res.data.email);
            console.log(res.data.picture);
            console.log(res.data.id); // google id
            verifyAccount(res.data.email)
            .then((verification) => {
              if (verification === "admin") {
                alert("Welcome admin " + res.data.name + "!");
              } else if (verification === "wait") {
                setWait({
                  name: res.data.name,
                  email: res.data.email,
                });
              } else {
                navigate("/register", { replace: true });
              }
            })
            .catch((error) => {
              console.error(error.message);
            });
          }
          // const handleCheckUserId = async () => {
          //   try {
          //     const response = await checkUserStatus(email);
          //     setIsUserIdValid(response.isValid); // Assuming the backend returns an object with an "isValid" property
          //   } catch (error) {
          //     // Handle the error, e.g., show an error message to the user
          //   }
          // };
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  // const logOut = () => {
  //   googleLogout();
  // };

  const cleanWait = () => {
    setWait(null);
  };

  return (
    <div>
      {wait && (
        <Modal
          modalContent={`Already registered: (${wait.email}) Please wait for admin’s acceptance.`}
          modalButton={"OK"}
          onClick={cleanWait}
        />
      )}
      <button className="google-login-button" onClick={() => login()}>
        <span className="google-login-button__icon">
          <img src={GoogleLogo} alt="google-logo" />
        </span>
        <span className="google-login-button__text">START WITH GOOGLE</span>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
