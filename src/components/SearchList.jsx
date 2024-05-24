import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovie } from "../redux/moviesSlice";

const SearchList = ({ isOpen, keyword }) => {
  const dispatch = useDispatch();

  const { movies } = useSelector(
    (state) => state.movies.searchMovie
  );

  useEffect(() => {
    dispatch(fetchSearchMovie(keyword));
  }, [keyword]);

  return (
    <div className={`absolute top-full left-0 z-10 w-full ${!isOpen && "hidden"} overflow-hidden` }>
      <div className="w-full bg-slate-800 rounded-md mt-2">
        {movies.map((item) => {
          return (
            <div className="px-2 flex gap-2 py-1 cursor-pointer hover:bg-slate-600 rounded-md overflow-hidden">
              <img
                src={`http://image.tmdb.org/t/p/w45${item.poster_path}`}
                className="rounded-xl"
              />
              <div className="text-white text-sm flex flex-col gap-y-1">
                <p className="">{item.title}</p>
                <p className="">{item.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchList;
