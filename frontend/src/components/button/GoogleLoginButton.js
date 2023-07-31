// imports
import { useState, useEffect, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import GoogleLogo from "../../assets/images/google_logo.png";
import Modal from "../../pages/modals/Modal";

// css
import "./GoogleLoginButton.css";

// validation
import { checkUserStatus } from "../../services/api";

// context
import EmailContext from "../../context/EmailContext";


const GoogleLoginButton = () => {
  const { setEmail } = useContext(EmailContext);

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [wait, setWait] = useState();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const cleanWait = () => {
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
            console.log(res.data.name);
            console.log(res.data.email);
            console.log(res.data.picture);
            console.log(res.data.id); // google id

            setEmail(res.data.email); // Set the email in the context

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
                  // setWait(res.data.email);
                  navigate("/register", {
                    state: { email: res.data.email },
                    replace: true,
                  });
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
          modalContent={`Already registered: (${wait.email}) Please wait for admin’s acceptance.`}
          modalButton={"OK"}
          onClick={cleanWait}
        />
      )}
      <button className="google-login-button" onClick={() => login()}>
        <span className="google-login-button__icon">
          <img src={GoogleLogo} alt="google-logo" />
        </span>
        <span className="google-login-button__text">Start With Google</span>
      </button>
    </>
  );
};

export default GoogleLoginButton;
