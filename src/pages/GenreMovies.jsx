import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMenu } from "../redux/configSlice";
import { fetchMovies } from "../redux/movies/moviesSlice";
import MovieCard from "../components/MovieCard";

const GenreMovies = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { movies, status, error } = useSelector((state) => state.movies.movie);
  const { selectedMenu, config } = useSelector((state) => state.config);
  const { genres } = useSelector((state) => state.config.genre);

  useEffect(() => {
    dispatch(setSelectedMenu({ selected: params.name }));
    dispatch(fetchMovies());

    return () => {
      dispatch(setSelectedMenu({ selected: null }));
    };
  }, [params.name, selectedMenu, genres]);

  if (status == "idle" || status == "loading") {
    return "loading..";
  }

  if (status == "error") {
    return <div>{error}</div>;
  }

  return (
    <div className="h-full w-full p-3 flex flex-wrap justify-between">
      {movies.results.map((data, i) => {
        return (
          <MovieCard
            id={data.id}
            poster_path={data.poster_path}
            title={data.title}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default GenreMovies;
