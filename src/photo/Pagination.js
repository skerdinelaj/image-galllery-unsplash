import React from "react";

const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= totalPosts / postPerPage; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-2">
      {pages.map((page) => (
        <button
          className="px-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
