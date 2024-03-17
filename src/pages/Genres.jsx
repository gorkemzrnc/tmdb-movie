import React, { useEffect } from "react";
import useGenres from "../hooks/useGenres";
import MenuItem from "../components/MenuItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Genres = () => {
  const { genres, status } = useGenres();

  const { selectedMenu } = useSelector((state) => state.config);
  const { staticCategories } = useSelector((state) => state.config);

  if (status == "idle" || status == "pending") {
    return "loading..";
  }

  return (
    <nav className="p-5 flex flex-col h-full gap-3">
      <div className="flex flex-col">
        <span className="font-semibold mb-3 text-black">Discover</span>
        {staticCategories.map((item, i) => {
          return (
            <Link to={`/discover/${item}`} key={i} className="ml-1">
              <MenuItem name={item} selected={selectedMenu} />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col">
        <span className="font-semibold mb-3 text-black">Genres</span>
        <div className="flex flex-col gap-[1px]">
          {genres.map((item, i) => {
            return (
              <Link to={`/genres/${item.name}`} key={i} className="ml-1">
                <MenuItem  name={item.name} selected={selectedMenu} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Genres;
