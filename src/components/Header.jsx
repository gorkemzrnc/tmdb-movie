import React from "react";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";

const Header = () => {
  const selected = useSelector((state) => state.config.selectedMenu);

  return (
    <header className="flex justify-between w-full p-5">
      <div className="flex flex-col gap-y-1">
        <div className="font-extralight text-xl tracking-tight uppercase text-headerColor ">
          {selected}
        </div>
        <div className="font-bold text-xs text-secondaryHeaderColor">
          Movies
        </div>
      </div>
      <Searchbar />
    </header>
  );
};

export default Header;
