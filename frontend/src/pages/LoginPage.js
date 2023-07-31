// imports

// components
import LeftLayout from "../components/layout/LeftLayout";
import RightLayout from "../components/layout/RightLayout";
import LoginForm from "../components/form/LoginForm";

// css
import classes from "./LoginPage.module.css";

const LoginPage = () => {

  
  return (
    // <div className="login-page">
    //   <LoginHeader />
    //   <Title text="Comity" fontSize={100} marginTop={200} />
    //   <GoogleLogin />
    // </div>
    <div className={classes["login-page"]}>
      <LeftLayout Title1={"COMITY"} Title2={"Start"} />
      <RightLayout>
        <LoginForm />
      </RightLayout>
    </div>
  );
};

export default LoginPage;
