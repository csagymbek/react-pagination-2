import React, { useEffect, useState } from "react";
import { USERS_PER_PAGE } from "./constatns";
import { Pagination } from "./Pagination";
import { Users } from "./Users";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log(totalPages);

  const fetchUsers = async () => {
    setLoading(true);
    await fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setTotalPages(Math.ceil(data.results.length / USERS_PER_PAGE));
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pagination</h1>
      <h3>Page: {page}</h3>
      {loading ? <h1>Loading...</h1> : <Users users={users} page={page} />}
      <Pagination totalPages={totalPages} handleClick={handleClick} />
    </div>
  );
};
