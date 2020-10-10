import { UsersListItem } from "./users-list-item";
import React from "react";

const usersListStyles = {
  textAlign: "left",
  listStyle: "none",
  border: "1px solid #727a84",
  borderRadius: ".5rem",
  padding: "2rem",
  maxHeight: "max(10vh, 30rem)",
  overflow: "auto",
};
export const UsersList = ({ data, ...props }) => {
  if (!data)
    return (
      <p>
        Search a name
        <br />
        in GitHub
      </p>
    );
  const { items, total_count } = data;
  // return null;
  return !items || items.length === 0 ? (
    <p>Nothing found ¯\_(ツ)_/¯</p>
  ) : (
    <div>
      <p>
        {items.length} / {total_count}
      </p>
      <ul style={usersListStyles}>
        {items.map((userData) => (
          <UsersListItem data={userData} key={userData.id} />
        ))}
      </ul>
    </div>
  );
};
