import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ movies }) => {
  const { page } = movies;

  if (page <= 1) {
    return (
      <div className="w-full relative mb-5">
        <Link
          className="absolute right-0 w-24 h-8 bg-black text-white rounded-full flex justify-center items-center"
          to={`?page=${page + 1}`}
        >
          <button className="">next</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="w-full relative mb-5">
        <Link
          className="absolute right-0 w-24 h-8 bg-black text-white rounded-full flex justify-center items-center"
          to={`?page=${page + 1}`}
        >
          <button className="">next</button>
        </Link>
        <Link
          className="absolute left-0 w-24 h-8 bg-black text-white rounded-full flex justify-center items-center"
          to={`?page=${page - 1}`}
        >
          <button className="">previous</button>
        </Link>
      </div>
    );
  }
};

export default Pagination;
