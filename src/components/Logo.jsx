import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex justify-center w-full">
      <Link to={`/`} className="w-2/4 h-auto">
        <MdLocalMovies className="w-full h-full text-black" />
      </Link>
    </div>
  );
};

export default Logo;
