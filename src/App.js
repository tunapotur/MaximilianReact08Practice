import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App(props) {
  const [userInfos, setUserInfos] = useState([]);

  let userInfoListContent = "";

  const addUserInfoHandler = (formEnteredUserInfo) => {
    setUserInfos((prevUserInfos) => {
      const updatedUserInfos = [...prevUserInfos];
      updatedUserInfos.unshift({
        userName: formEnteredUserInfo.userName,
        age: formEnteredUserInfo.age,
        id: Math.random().toString(),
      });

      return updatedUserInfos;
    });
  };

  if (userInfos.length > 0)
    userInfoListContent = <UserList items={userInfos} />;

  return (
    <div>
      <section id="addUser-form">
        <AddUser onAddUserInfo={addUserInfoHandler} />
      </section>
      <section id="users-list">{userInfoListContent}</section>
    </div>
  );
}

export default App;
