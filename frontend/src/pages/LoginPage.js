// imports

// components
import NavigationBar from "../components/Layout/NavigationBar";
import Title from "../components/Common/Title";
import GoogleLogin from "../components/Login/GoogleLoginButton";

// css
import "./LoginPage.css";

function LoginPage() {
  return (
      <div className="login-page">
        <NavigationBar />
        <Title text="Comity" fontSize={100} marginTop={200} />
        <GoogleLogin />
      </div>
  );
}

export default LoginPage;
