import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../redux/movies/moviesSlice";
import Container from "./Container";
import MovieCard from "../components/MovieCard";

const SearchMovies = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies.movie);
  const params = useParams();
  console.log(movies);
  useEffect(() => {
    dispatch(fetchSearchMovies({ search: params.query }));
  }, [params.query]);


  if (status == "idle" || status == "loading") {
    return "loading..";
  }

  if (status == "error") {
    return <div>{error}</div>;
  }

  return (
    <Container>
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
    </Container>
  );
};

export default SearchMovies;
