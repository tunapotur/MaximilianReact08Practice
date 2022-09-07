import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App(props) {
  const [userInfos, setUserInfos] = useState([]);

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

  return (
    <div>
      <section id="addUser-form">
        <AddUser onAddUserInfo={addUserInfoHandler} />
      </section>
      <section id="users-list">
        {userInfos.length > 0 && <UserList items={userInfos} />}
      </section>
    </div>
  );
}

export default App;
