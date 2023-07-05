// imports
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// components
import GoogleLogo from "./google_logo.png";
import "./GoogleLoginButton.css";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  // const [post, setPost] = useState([]);

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
            let verification = verifyAccount(res.data.email);
            if(verification === 'admin'){
              alert('Welcome admin ' + res.data.name + '!');
            }
            else if(verification === 'user'){
              alert('Welcome user ' + res.data.name + '!');
            }
            else{
              navigate('/register', { replace: true });
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  // const logOut = () => {
  //   googleLogout();
  // };

  const verifyAccount = (email)  => {
    if(email === 'aptheparker@gmail.com'){
      return 'admin'
    }
    else{
      alert('Not verified account. Please register.')
      return 'not found'
    }
    // axios
    //    .get('') // send with the email
    //    .then((response) => {
    //       setPost(response.data);
    //    })
    //    .catch((err) => {
    //       console.log(err);
    //    });
    // if(post === 'admin'){
    //   return 'admin'
    // }
    // else if(post === 'user'){
    //   return 'user'
    // }
    // else{
    //   return 'not found'
    // }
  }

  return (
    <button className="google-login-button" onClick={() => login()}>
      <span className="google-login-button__icon">
        <img src={GoogleLogo} alt="google-logo" />
      </span>
      <span className="google-login-button__text">START WITH GOOGLE</span>
    </button>
  );
};

export default GoogleLoginButton;
