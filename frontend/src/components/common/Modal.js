// React and CSS imports
import React from "react";

// css
import classes from "./Modal.module.css";

const Modal = ({ modalImage, modalTitle, modalContent, modalButton, onClean }) => {
  return (
    <div className={classes["modal"]}>
      <img src={modalImage} className={classes["modal-image"]} alt="emoji"/>
      <div className={classes["modal-title"]}>{modalTitle}</div>
      <div className={classes["modal-content"]}>{modalContent}</div>
      <button className={classes["modal-button"]} onClick={onClean}>
        {modalButton}
      </button>
    </div>
  );
};

export default Modal;
