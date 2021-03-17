import React from "react";
import { USERS_PER_PAGE } from "./constatns";
import { User } from "./User";

export const Users = ({ users, page }) => {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  return selectedUsers?.map((user) => (
    <User user={user} key={user.login.uuid} />
  ));
};
