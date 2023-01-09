import React from "react";

const Filter = ({ handleFilter, photoFilter }) => {
  return (
    <div className="my-5 ">
      <select
        id="favColor"
        value={photoFilter}
        onChange={handleFilter}
        name="favColor"
        className="text-3xl font-bold bg-transparent cursor-pointer focus-visible: outline-0 text-slate-800 md:text-4xl lg:text-6xl lg:mt-20 lg:mb-14 "
      >
        <option value="all">All</option>
        <option value="hot">Hot</option>
        <option value="top">Top</option>
        <option value="user">User</option>
      </select>
    </div>
  );
};

export default Filter;
