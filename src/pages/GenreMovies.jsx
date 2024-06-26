import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMenu } from "../redux/configSlice";
import { fetchMovies } from "../redux/moviesSlice";
import queryString from "query-string";
import MovieCard from "../components/MovieCard";
import Container from "./Container";
import Pagination from "../components/Pagination";

const GenreMovies = () => {
  const params = useParams();

  const location = useLocation().search;

  const queryUrl = queryString.parse(location);

  const dispatch = useDispatch();

  const { movies, status, error } = useSelector((state) => state.movies.discoverMovie);

  const { genres } = useSelector((state) => state.config.genre);

  useEffect(() => {
    dispatch(setSelectedMenu({ selected: params.name }));
    dispatch(fetchMovies({ page: queryUrl.page }));

    return ()=>{
      dispatch(setSelectedMenu({selected: null}));
    }
  }, [params, queryUrl.page, genres]);

  if (status == "idle" || status == "loading") {
    return "loading..";
  }

  if (status == "error") {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <div className="flex flex-wrap justify-between">
        {movies.results.map((data, i) => {
          return (
            <MovieCard
              id={data.id}
              poster_path={data.poster_path}
              title={data.title}
              key={i}
              vote_average={data.vote_average}
            />
          );
        })}
      </div>
      <Pagination movies={movies} />
    </Container>
  );
};

export default GenreMovies;
