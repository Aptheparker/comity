// imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import ComitLogoImage from "../../assets/images/comit_logo.png";
import BackIcon from "./back_icon.png";
import Title from "../Title/Title";
import Input from "../Input/Input";

// css module
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Female");
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

    // Check if any of the fields are empty
    if (
      name === "" ||
      studentId === "" ||
      phoneNumber === ""
    ) {
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

  const goBack = () => {
    navigate("/", { replace: true }); // Navigate back to the previous page
  };

  const closeModal = () => {
    setSubmitted(false);
    navigate("/", { replace: true });
  };

  return (
    <div className={styles["register-form"]}>
      <div className={styles["register-top"]}>
        <img
          src={ComitLogoImage}
          alt="comit_logo"
          className={styles["comit-logo"]}
        />
        <Title text="Register" fontSize={36} marginRight={120}></Title>
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
        >
          <option value="Male">남자</option>
          <option value="Female">여자</option>
        </select>

        <button type="submit" className={styles["register-button"]}>
          <span className={styles["register-button__text"]}>Register</span>
        </button>
      </form>

      <button type="button" className={styles["back-button"]} onClick={goBack}>
        <img src={BackIcon} alt="back" className={styles["back-icon"]} />
        Back
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
    </div>
  );
}

export default RegisterForm;
