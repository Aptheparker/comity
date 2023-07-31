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
        <Text
          text="Study"
          color={"white"}
          fontSize={24}
          marginTop={50}
          marginLeft={50}
        />
        <Text text="Design" color={"white"} fontSize={24} marginLeft={50} />
        <Text text="Coding" color={"white"} fontSize={24} marginLeft={50} />
        <Text
          text="Comity"
          color={"white"}
          fontSize={16}
          marginTop={150}
          marginLeft={50}
        />
        <Text
          text="comit.skku.io"
          color={"white"}
          fontSize={16}
          marginLeft={50}
        />
      </LeftLayout>

      <RightLayout>
        <RegisterForm />
      </RightLayout>
    </div>
  );
};

export default RegisterPage;
