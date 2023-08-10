

// components
import Text from "../common/Text";
import GoogleLoginButton from "../button/GoogleLoginButton";
// css
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes["login-form"]}>
      <Text className={classes['form-title']} text={"Start"}/>
      <GoogleLoginButton />
    </div>
  );
};

export default LoginForm;
