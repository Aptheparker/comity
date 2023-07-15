// imports

// components
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Title from "../components/Title/Title";
import GoogleLogin from "../components/GoogleLoginButton/GoogleLoginButton";

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
