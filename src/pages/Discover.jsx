import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { fetchDiscover } from "../redux/moviesSlice";
import { setSelectedMenu } from "../redux/configSlice";
import MovieCard from "../components/MovieCard";
import Container from "./Container";
import Pagination from "../components/Pagination";

const Discover = () => {
  const { movies, status, error } = useSelector((state) => state.movies.movie);

  const params = useParams();

  const dispatch = useDispatch();

  const location = useLocation().search;

  const queryUrl = queryString.parse(location);

  useEffect(() => {
    const query = params.name.replace(/\s+/g, "_").toLowerCase();

    dispatch(setSelectedMenu({ selected: params.name }));
    dispatch(fetchDiscover({ name: query, page: queryUrl.page }));

    return () => dispatch(setSelectedMenu({ selected: null }));
  }, [params.name, queryUrl.page]);

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

export default Discover;
