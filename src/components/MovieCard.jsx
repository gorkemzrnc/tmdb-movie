import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({id,poster_path,title}) => {
  return (
    <div
      className="flex flex-col w-[50%] sm:w-[32%] flex-shrink-24 md:w-[24%] lg:w-[18%]"
    >
      <Link to={`/movie/${id}`}>
        <img
          src={`http://image.tmdb.org/t/p/w780${poster_path}`}
          className=""
        />
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default MovieCard;
