

// components
import Text from "../common/Text";
import GoogleLoginButton from "../button/GoogleLoginButton";
// css
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes["login-form"]}>
      <Text text={"Start"} fontSize={24} />
      <GoogleLoginButton />
    </div>
  );
};

export default LoginForm;
