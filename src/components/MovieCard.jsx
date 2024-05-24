import React from "react";
import { Link } from "react-router-dom";
import RatingStar from "./RatingStar";

const MovieCard = ({ id, poster_path, title, vote_average }) => {
  return (
    <div className="flex justify-center w-[45%] sm:w-[30%] md:w-[28%] lg:w-[21%] my-4 shadow-md hover:scale-105 hover:bg-slate-800 hover:text-white transition-all duration-200 rounded-md">
      <Link to={`/movie/${id}`} className="h-full w-full">
        <img
          src={`http://image.tmdb.org/t/p/w780${poster_path}`}
          className="min-h-[85%] h-[85%] w-full rounded-md"
        />
        <div className="h-[15%] font-extralight tracking-wider text-sm flex flex-col py-2 px-1">
          <span id="title" className="w-full h-full text-center truncate">{title}</span>
          <RatingStar value={vote_average} classNameVal='mx-auto'/>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
