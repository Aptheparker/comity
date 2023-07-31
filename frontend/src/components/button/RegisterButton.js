// imports
import { Link } from "react-router-dom";

// css
import classes from "./RegisterButton.module.css";

const RegisterButton = () => {
  return (
    <Link to="/register" className={classes["register-button"]}>
      <button>
        <div className={classes["register-button__text"]}>Register</div>
      </button>
    </Link>
  );
};

export default RegisterButton;
