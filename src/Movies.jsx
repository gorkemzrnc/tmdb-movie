import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchMovies } from './redux/movies/moviesSlice';
import { fetchGenres } from './redux/configSlice';

const MovieList = () => {
  return <div>movie</div>;
};

export default MovieList;

  // const movies = useSelector((state) => state.movies.movies);
  // const status = useSelector((state) => state.movies.status);
  // const error = useSelector((state) => state.movies.error);
  // const config = useSelector((state)=> state.config);
  
  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchMovies(1));
  //     dispatch(fetchGenres());
  //   }
  // }, [status, dispatch]);

  // let content;

  // if (status === 'loading') {
  //   content = <div>Loading...</div>;
  // } else if (status === 'failed') {
  //   content = <div>Error: {error}</div>;
  // } else if (status === 'succeeded') {
  //   content = (
  //     <ul>
  //       {movies[0].results.map((movie) => (
  //         <li key={movie.id}>{movie.title}</li>
  //       ))}
  //     </ul>
  //   );
  // }