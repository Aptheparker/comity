// imports
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import Input from "../common/Input";

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
      case "name":
        setName(value);
        break;
      case "studentId":
        setStudentId(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "gender":
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
        console.log("response from server: ",response);
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
    <div className={styles["register-form"]}>
      <div className={styles["register-top"]}>
      </div>
      <form className={styles["inputs"]} onSubmit={handleSubmit}>
        <div className={styles["input-name"]}>이름</div>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Ex: 홍길동"
          onChange={handleChange}
        />
        <div className={styles["input-name"]}>학번</div>
        <Input
          type="text"
          name="studentId"
          value={studentId}
          placeholder="Ex: 2020123123"
          onChange={handleChange}
        />
        <div className={styles["input-name"]}>전화번호</div>
        <Input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Ex: 01012341234"
          onChange={handleChange}
        />
        <div className={styles["input-name"]}>성별</div>
        <select
          id="gender"
          name="gender"
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
    </div>
  );
}

export default RegisterForm;
