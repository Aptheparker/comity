// imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Text from "../common/Text";
import Input from "../common/Input";
import Modal from "../common/Modal";

// images
import CryingImage from "../../assets/icons/crying_emoji.png";

// mui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// css module
import classes from "./RegisterForm.module.css";

// services
import { userRegister } from "../../services/api";

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Male");

  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

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
      email: "aptheparker@gmail.com",
      studentID: studentId,
      phoneNumber: phoneNumber,
      sex: gender,
    };

    // Check if any of the fields are empty
    if (name === "" || studentId === "" || phoneNumber === "") {
      alert("Please fill in all the fields.");
      return;
    }

    userRegister(userInfo)
      .then((response) => {
        setSubmitted(true)
        // if (response.status == "ok") {
        //   setSubmitted(true);
        // } else {
        //   setFailed(true);
        // }
      })
      .catch((error) => {
        console.error(error.message);
      });

    // Reset the form
    setName("");
    setStudentId("");
    setPhoneNumber("");
    setGender("");
  };

  const closeModal = () => {
    setSubmitted(false);
    setFailed(false);
  };

  return (
    <>
      <form className={classes["register-form"]} onSubmit={handleSubmit}>
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
        <fieldset className={classes["select-legend"]}>
          <legend>성별</legend>
          <select
            id="gender"
            name="성별"
            value={gender}
            onChange={handleChange}
            className={classes["select"]}
          >
            <option value="Male">남자</option>
            <option value="Female">여자</option>
          </select>
        </fieldset>

        <button type="submit" className={classes["register-button"]}>
          <span className={classes["register-button__text"]}>Register</span>
        </button>
      </form>

      <button
        type="button"
        className={classes["back-button"]}
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIosIcon className={classes["back-button__icon"]} />
        <span className={classes["back-button__text"]}>BACK</span>
      </button>

      {submitted && (
        <Modal
          modalImage={CryingImage}
          modalTitle={"가입 성공."}
          modalContent={"성공"}
          modalButton={"OK"}
          onClean={closeModal}
        />
      )}

      {failed && (
        <Modal
          modalImage={CryingImage}
          modalTitle={"가입 실패."}
          modalContent={"이미 회원가입을 했거나 없는 이메일입니다."}
          modalButton={"OK"}
          onClean={closeModal}
        />
      )}
    </>
  );
}

export default RegisterForm;
