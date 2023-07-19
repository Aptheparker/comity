// imports

// components
import LoginHeader from "../components/Layout/LoginHeader";
import Title from "../components/Common/Title";
import GoogleLogin from "../components/Login/GoogleLoginButton";

// css
import "./LoginPage.css";

function LoginPage() {
  return (
      <div className="login-page">
        <LoginHeader />
        <Title text="Comity" fontSize={100} marginTop={200} />
        <GoogleLogin />
      </div>
  );
}

export default LoginPage;
