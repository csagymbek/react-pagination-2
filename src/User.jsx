import React from "react";

export const User = ({ user }) => {
  console.log(user);
  return (
    <div>
      <hr />
      <p>{`Full name: ${user.name.first} ${user.name.last}`}</p>
      <p>{`Phone number: ${user.phone}`}</p>
    </div>
  );
};
