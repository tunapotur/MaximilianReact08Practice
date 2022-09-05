import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App(props) {
  const [userInfos, setUserInfos] = useState([]);
  const [enteredUserInfo, setEnteredUserInfo] = useState({});
  const [closeErrorModalStatus, setCloseErrorModalStatus] = useState(false);

  let errorModal = "";
  let userInfoListContent = "";
  const nonValidEnter = "Please enter a valid name and age (non-empty values).";
  const ageError = "Please enter a valid age (>0)";

  const addUserInfoHandler = (formEnteredUserInfo) => {
    setCloseErrorModalStatus(() => false);

    setEnteredUserInfo(() => {
      return formEnteredUserInfo;
    });

    setUserInfos((prevUserInfos) => {
      const updatedUserInfos = [...prevUserInfos];
      if (
        formEnteredUserInfo.userName !== "" &&
        formEnteredUserInfo.age !== "" &&
        formEnteredUserInfo.age >= 0
      )
        updatedUserInfos.unshift({
          userName: formEnteredUserInfo.userName,
          age: formEnteredUserInfo.age,
          id: Math.random().toString(),
        });

      return updatedUserInfos;
    });
  };

  const closeErrorModalHandler = (clickInfo) => {
    setCloseErrorModalStatus(() => clickInfo);
  };

  if (closeErrorModalStatus) {
    errorModal = "";
  } else {
    if (enteredUserInfo.userName === "") {
      errorModal = (
        <ErrorModal
          errorText={nonValidEnter}
          onCloseErrorModal={closeErrorModalHandler}
        />
      );
    } else if (enteredUserInfo.age === "")
      errorModal = (
        <ErrorModal
          errorText={nonValidEnter}
          onCloseErrorModal={closeErrorModalHandler}
        />
      );
    else if (enteredUserInfo.age < 0)
      errorModal = (
        <ErrorModal
          errorText={ageError}
          onCloseErrorModal={closeErrorModalHandler}
        />
      );
  }

  if (userInfos.length > 0)
    userInfoListContent = <UserList items={userInfos} />;

  return (
    <div>
      <section id="addUser-form">
        <AddUser onAddUserInfo={addUserInfoHandler} />
      </section>
      <section id="users-list">{userInfoListContent}</section>
      <section id="error-modal">{errorModal}</section>
    </div>
  );
}

export default App;
