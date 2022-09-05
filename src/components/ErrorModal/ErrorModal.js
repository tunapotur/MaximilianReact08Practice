import React from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeErrorModal = (event) => {
    event.preventDefault();
    props.onCloseErrorModal(true);
  };

  return (
    <div>
      <div className={styles.backdrop} onClick={closeErrorModal}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>{props.errorText}</div>
        <button className={styles.actions} onClick={closeErrorModal}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
