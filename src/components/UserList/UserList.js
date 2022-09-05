import React from "react";

import styles from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((userInfo) => (
          <li key={userInfo.id} id={userInfo.id}>
            {userInfo.userName} ({userInfo.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
