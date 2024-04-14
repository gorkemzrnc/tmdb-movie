import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, poster_path, title }) => {
  return (
    <div className="flex justify-center w-[45%] sm:w-[30%] md:w-[28%] lg:w-[21%] my-4">
      <Link to={`/movie/${id}`} className="h-full w-full">
        <img
          src={`http://image.tmdb.org/t/p/w780${poster_path}`}
          className="min-h-[80%] rounded-md"
        />
        <span className="min-h-[20%] font-light text-sm flex justify-center">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default MovieCard;
