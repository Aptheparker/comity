// imports

// components
import LeftLayout from "../components/layout/LeftLayout";
import RightLayout from "../components/layout/RightLayout";
import LoginForm from "../components/form/LoginForm";

// css
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes["login-page"]}>
      <LeftLayout
        Title1={"COMITY"}
        Title2={"Start"}
      />
      <RightLayout>
        <LoginForm />
      </RightLayout>
    </div>
  );
};

export default LoginPage;
