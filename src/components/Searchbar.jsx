import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(false);
  const element = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  const clickHandler = (event) => {
    if (element.current.contains(event.target)) return;

    setBool(false);
  };

  const submitHandler = () => {
    if (search.trim() == 0) return;
    if (bool == false) return;

    navigate(`/movies/${search}`);
  };

  return (
    <div
      className="flex items-center h-7 bg-slate-300 rounded-full border border-gray-500"
      ref={element}
    >
      <button
        className={`rounded-full bg-slate-200  flex justify-center items-center w-8 h-full`}
        onClick={() => {
          setBool(true);
          inputRef.current.focus();
          submitHandler();
        }}
      >
        <IoIosSearch className="text-xl" />
      </button>

      <input
        ref={inputRef}
        className={`${
          bool ? "w-40 md:w-44 lg:w-48 px-1" : "w-0"
        } h-full transition-width duration-500 block border-none outline-none bg-transparent text-black`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
