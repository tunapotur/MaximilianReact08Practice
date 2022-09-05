import React, { useState } from "react";

import Button from "../UI/Button/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");

  const userNameInputChangeHandler = (event) => {
    setUserNameValue(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setAgeValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formValue = {
      userName: userNameValue,
      age: ageValue,
      id: Math.random().toString(),
    };

    props.onAddUserInfo(formValue);

    const userNameInput =
      event.target.firstElementChild.getElementsByTagName("input")[0];
    const ageInput =
      event.target.firstElementChild.getElementsByTagName("input")[1];

    userNameInput.value = "";
    ageInput.value = "";

    setUserNameValue("");
    setAgeValue("");
  };

  return (
    <form className={styles.input} onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={userNameInputChangeHandler}></input>
        <label>Age (Years)</label>
        <input type="number" onChange={userAgeChangeHandler}></input>
      </div>
      <Button type="submit"></Button>
    </form>
  );
};

export default AddUser;
