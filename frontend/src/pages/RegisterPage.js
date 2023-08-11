// imports

// components
import LeftLayout from "../components/layout/LeftLayout";
import RightLayout from "../components/layout/RightLayout";
import RegisterForm from "../components/form/RegisterForm";
import Text from "../components/common/Text";

// css
import classes from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={classes["register-page"]}>
      <LeftLayout Title1={"COMITY"} Title2={"Sign Up"}>
        <div className={classes["description"]}>
          <Text className={classes["description-text"]} text="Study" />
          <Text className={classes["description-text"]} text="Design" />
          <Text className={classes["description-text"]} text="Coding" />
        </div>
        <div className={classes["information"]}>
          <Text className={classes["information-text"]} text="Comity" />
          <Text className={classes["information-text"]} text="comit.skku.io" />
        </div>
      </LeftLayout>

      <RightLayout>
        <RegisterForm />
      </RightLayout>
    </div>
  );
};

export default RegisterPage;
