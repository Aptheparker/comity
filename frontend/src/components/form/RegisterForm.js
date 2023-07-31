// imports
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import Text from "../common/Text";
import Input from "../common/Input";

// mui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// css module
import styles from "./RegisterForm.module.css";

// context
import EmailContext from "../../context/EmailContext";

// services
import { userRegister } from "../../services/api";

function RegisterForm() {
  const { email } = useContext(EmailContext);
  // ... Rest of the code

  const location = useLocation();
  const emailFromContext = email || location.state?.email || "";
  console.log("Email:", emailFromContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state based on the input field name
    switch (name) {
      case "이름":
        setName(value);
        break;
      case "학번":
        setStudentId(value);
        break;
      case "전화번호":
        setPhoneNumber(value);
        break;
      case "성별":
        setGender(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      name: name,
      email: email,
      studentID: studentId,
      phoneNumber: phoneNumber,
      sex: gender,
    };

    userRegister(userInfo)
      .then((response) => {
        console.log("response from server: ", response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    // Check if any of the fields are empty
    if (name === "" || studentId === "" || phoneNumber === "") {
      alert("Please fill in all the fields.");
      return;
    }

    console.log("Name:", name);
    console.log("Student ID:", studentId);
    console.log("Phone Number:", phoneNumber);
    console.log("Gender:", gender);

    // show the modal
    setSubmitted(true);

    // Reset the form
    setName("");
    setStudentId("");
    setPhoneNumber("");
    setGender("");
  };

  const closeModal = () => {
    setSubmitted(false);
    navigate("/", { replace: true });
  };

  return (
    <>
      <form className={styles["register-form"]} onSubmit={handleSubmit}>
        <Text text={"REGISTER"} fontSize={24} />
        <Input
          type="text"
          name="이름"
          value={name}
          placeholder="Ex: 홍길동"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="학번"
          id="studentId"
          value={studentId}
          placeholder="Ex: 2020123123"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="전화번호"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="Ex: 01012341234"
          onChange={handleChange}
        />
        <select
          id="gender"
          name="성별"
          value={gender}
          onChange={handleChange}
          className={styles["select"]}
        >
          <option value="Male">남자</option>
          <option value="Female">여자</option>
        </select>

        <button type="submit" className={styles["register-button"]}>
          <span className={styles["register-button__text"]}>Register</span>
        </button>
      </form>

      <button type="button" className={styles["back-button"]} onClick={()=>{navigate('/')}}>
        <ArrowBackIosIcon className={styles["back-button__icon"]} />
        <span className={styles["back-button__text"]}>BACK</span>
      </button>

      {submitted && (
        <div className={styles["modal"]}>
          <div className={styles["modal-content"]}>
            <h2>Submitted</h2>
            <button
              className={styles["close-modal-button"]}
              onClick={closeModal}
            >
              <span className={styles["close-modal-button__text"]}>Close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterForm;
