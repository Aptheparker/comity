// React and CSS imports
import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ modalTitle, modalContent, modalButton, onCleanWait }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.title}>{modalTitle}</div>
      <div className={classes.content}>{modalContent}</div>
      <button className={classes.button} onClick={onCleanWait}>
        {modalButton}d
      </button>
    </div>
  );
};

export default Modal;
