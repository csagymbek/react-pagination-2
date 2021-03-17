import React from "react";

export const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div>
      {pages.map((num, i) => (
        <button key={i} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};
