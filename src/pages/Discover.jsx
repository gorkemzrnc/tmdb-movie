import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover } from "../redux/movies/moviesSlice";
import { setSelectedMenu } from "../redux/configSlice";
import MovieCard from "../components/MovieCard";
import Container from "./Container";

const Discover = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { movies, status, error } = useSelector((state) => state.movies.movie);

  useEffect(() => {
    const query = params.name.replace(/\s+/g, "_").toLowerCase();

    dispatch(setSelectedMenu({ selected: params.name }));
    dispatch(fetchDiscover({ name: query }));

    return () => dispatch(setSelectedMenu({ selected: null }));
  }, [params.name]);

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

export default Discover;
