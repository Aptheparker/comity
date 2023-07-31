// components
import Title from '../common/Text';
import GoogleLogin from '../button/GoogleLoginButton';
// css
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return(
    <div className={classes["login-form"]}>
      <Title text={'Start'} fontSize={24}/>
      <Title text={'---------- or continue with ----------'} color={'grey'} fontSize={14}/>
      <GoogleLogin />
    </div>
  )
}

export default LoginForm