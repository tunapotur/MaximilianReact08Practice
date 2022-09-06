import React, { useState } from "react";

import Button from "../UI/Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [errorModal, setErrorModal] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const userNameInputChangeHandler = (event) => {
    setUserNameValue(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setAgeValue(event.target.value);
  };

  const closeErrorModalHandler = (closeInfo) => {
    setErrorModal(closeInfo);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formValue = {
      userName: userNameValue,
      age: ageValue,
      id: Math.random().toString(),
    };

    if (userNameValue === "" || ageValue === "") {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      setErrorModal(false);
    } else if (ageValue < 0) {
      setErrorMessage("Please enter a valid age (>0)");
      setErrorModal(false);
    } else {
      props.onAddUserInfo(formValue);
      setUserNameValue("");
      setAgeValue("");
    }
  };

  return (
    <div>
      <form className={styles.input} onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={userNameValue}
            onChange={userNameInputChangeHandler}
          ></input>
          <label>Age (Years)</label>
          <input
            type="number"
            value={ageValue}
            onChange={userAgeChangeHandler}
          ></input>
        </div>
        <Button type="submit"></Button>
      </form>
      {!errorModal && (
        <section id="error-modal">
          {
            <ErrorModal
              errorText={errorMessage}
              onCloseErrorModal={closeErrorModalHandler}
            />
          }
        </section>
      )}
    </div>
  );
};

export default AddUser;
