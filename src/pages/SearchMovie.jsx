import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../redux/moviesSlice";
import queryString from "query-string";
import Container from "./Container";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const SearchMovies = () => {
  const { movies, status } = useSelector((state) => state.movies.movie);

  const dispatch = useDispatch();

  const params = useParams();

  const location = useLocation().search;

  const queryUrl = queryString.parse(location);


  useEffect(() => {
    dispatch(fetchSearchMovies({ search: params.query, page: queryUrl.page }));
  }, [params.query, queryUrl.page]);

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
      <Pagination movies={movies} />
    </Container>
  );
};

export default SearchMovies;
