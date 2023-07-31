// React and CSS imports
import React from 'react';
import classes from './Modal.module.css';

const Modal = ({modalTitle, modalContent, modalButton, onClick}) => {

  return (
    <div className={classes.modal}>
      <div className={classes.container}>
        <div className={classes.content}>{modalContent}</div>
        <button className={classes.button} onClick={onClick}>
          {modalButton}
        </button>
      </div>
    </div>
  );
};

export default Modal;
