import React, { useEffect, useRef } from "react";
import Logo from "./Logo.jsx";
import Genres from "../pages/Genres.jsx";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { setSidebar } from "../redux/configSlice.js";

const Sidebar = () => {
  const containerRef = useRef();

  const isMenuOpen = useSelector((state) => state.config.sidebar);

  const dispatch = useDispatch();

  const handleMenuResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) dispatch(setSidebar(false));
  };

  const outsideClickHandler = (event) => {
    if (containerRef.current.contains(event.target)) return;

    dispatch(setSidebar(false));
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);

    window.addEventListener("resize", handleMenuResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col w-48 min-w-48 h-full border-r-[1px] border-slate-400 fixed md:left-0 ${
        isMenuOpen ? "left-0" : "-left-[100%]"
      } top-0 bg-white transition-all duration-300`}
    >
      <MdOutlineClose
        className="absolute right-2 top-2 text-2xl cursor-pointer md:hidden"
        onClick={() => dispatch(setSidebar(!isMenuOpen))}
      />
      <Logo />
      <Genres />
    </div>
  );
};

export default Sidebar;
