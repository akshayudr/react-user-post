import React, { useEffect } from "react";
import store from "../Store/Store";
import { observer } from "mobx-react-lite";

const Users = () => {
  const { users, selectUsers, displayPost } = store;

  useEffect(() => {
    selectUsers();
  }, []);

  const handleClick = async (id: number) => {
    displayPost(id);
  };
  return (
    <div>
      <h1>Users & Posts</h1>
      <select onChange={(e: any) => handleClick(e.target.value)}>
        {users.map((user: any, id: any) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default observer(Users);
