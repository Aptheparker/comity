// React and CSS imports
import React from 'react';
import classes from './Modal.module.css';

// Image import
import comitLogo from '../../assets/images/comit_logo.png';

const Modal = (props) => {
  const { modalContent, modalButton } = props;

  return (
    <div className={classes.modal}>
      <img src={comitLogo} alt="comit logo" />
      <div className={classes.container}>
        <div className={classes.content}>{modalContent}</div>
        <button className={classes.button} onClick={props.onClick}>
          {modalButton}
        </button>
      </div>
    </div>
  );
};

export default Modal;
