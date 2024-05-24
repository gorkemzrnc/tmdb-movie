import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SearchList from "./SearchList";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const element = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);
  }, []);

  useEffect(() => {
    const enterHandler = (event) => {
      if (event.key === "Enter") {
        submitHandler();
      }
    };

    const searchInput = document.getElementById("search-input");

    searchInput.removeEventListener("keypress", enterHandler);
    searchInput.addEventListener("keypress", enterHandler);

    return () => {
      searchInput.removeEventListener("keypress", enterHandler);
    };
  }, [search]);

  const clickHandler = (event) => {
    if (element.current.contains(event.target)) return;

    setFocus(false);
  };

  const submitHandler = () => {
    if (search.length == 0) return;
    if (focus == false) return;

    navigate(`/movies/${search}`);
    setSearch("");
    setFocus(false);
  };

  return (
    <div
      className="relative flex items-center h-7 rounded-full border border-gray-500 shadow-md"
      ref={element}
    >
      <button
        className={`rounded-full flex justify-center items-center w-8 h-full`}
        onClick={() => {
          setFocus(true);
          inputRef.current.focus();
          submitHandler();
        }}
      >
        <IoIosSearch className="text-xl" />
      </button>

      <input
        ref={inputRef}
        className={`${
          focus ? "w-40 md:w-44 lg:w-48 px-1" : "w-0"
        } h-full transition-width duration-500 block border-none outline-none bg-transparent text-black`}
        id="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SearchList isOpen={focus} keyword={search} />
    </div>
  );
};

export default Searchbar;
