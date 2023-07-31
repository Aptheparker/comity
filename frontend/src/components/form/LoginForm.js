

// components
import Title from "../common/Text";
import RegisterButton from "../button/RegisterButton";
import GoogleLoginButton from "../button/GoogleLoginButton";
// css
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes["login-form"]}>
      <Title text={"Start"} fontSize={24} />
      <RegisterButton />

      <Title
        text={"-------------- or continue with --------------"}
        color={"grey"}
        fontSize={14}
      />
      <GoogleLoginButton />
    </div>
  );
};

export default LoginForm;
