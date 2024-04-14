import React from "react";
import Searchbar from "./Searchbar";
import { useSelector, useDispatch } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { setSidebar } from "../redux/configSlice";

const Header = () => {
  const selected = useSelector((state) => state.config.selectedMenu);
  const isMenuOpen = useSelector((state)=> state.config.sidebar);
  const dispatch = useDispatch();
  console.log(isMenuOpen);

  return (
    <header className="flex justify-between w-full p-5">
      <div className="flex items-center gap-6">
        <FiMenu className="text-2xl cursor-pointer md:hidden" onClick={()=> dispatch(setSidebar(!isMenuOpen))}/>
        <div className="flex flex-col gap-y-1">
          <div className="font-extralight text-lg md:text-xl lg:text-2xl tracking-tight uppercase text-headerColor ">
            {selected}
          </div>
          <div className="font-bold text-xs md:text-sm lg:text-base text-secondaryHeaderColor">
            Movies
          </div>
        </div>
      </div>

      <Searchbar />
    </header>
  );
};

export default Header;
