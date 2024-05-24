import { useParams } from "react-router-dom";
import Container from "./Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, setSingleMovie } from "../redux/moviesSlice";
import "../App.css";

import Rating from "../components/RatingStar";
import { FaCircleDot } from "react-icons/fa6";

const Movie = () => {
  const { id } = useParams();

  const { movie } = useSelector((state) => state.movies.singleMovie);

  console.log(movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie({ id }));
    return () => {
      dispatch(setSingleMovie({}));
    };
  }, []);

  return (
    <Container>
      <div className="flex flex-col">
        <div className="mx-auto flex md:flex-row flex-col w-3/4 md:w-[90%] md:h-[500px] lg:h-[650px] gap-6 2xl:max-w-[1450px] ">
          <img
            src={`http://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            className="w-full md:w-1/2 h-[400px] md:h-auto rounded-md"
          />
          <div className="w-full md:w-1/2 px-2 py-1">
            <h1 className="font-extralight text-2xl lg:text-3xl xl:text-4xl uppercase tracking-wide font-montserrat mb-1">
              {movie.title}
            </h1>
            <h2 className="mb-3 font-medium text-zinc-800 text-base lg:text-lg xl:text-xl">
              {movie?.tagline}
            </h2>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
              <div className="flex gap-4 items-center">
                <Rating value={movie.vote_average} />
                <span className="text-sm text-zinc-700 font-semibold">
                  {movie.vote_average}
                </span>
              </div>
              <div className="uppercase text-zinc-700 text-xs ">
                {movie.spoken_languages && movie.spoken_languages[0].name} /{" "}
                {movie.runtime} min /{" "}
                {movie.release_date && movie.release_date.split("-")[0]}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 font-light mb-3 text-sm text-gray-700">
              <span className="text-base font-semibold">Genres:</span>
              {movie.genres?.map((item) => (
                <div className="flex items-center gap-1">
                  <FaCircleDot className="text-gray-500"/>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            <p className="font-light text-sm">{movie.overview}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Movie;
