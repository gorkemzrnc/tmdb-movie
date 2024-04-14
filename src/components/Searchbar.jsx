import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const element = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.addEventListener("mousedown", clickHandler);
    document
      .getElementById("search-input")
      .addEventListener("keypress", enterHandler);
  }, []);
  

  const clickHandler = (event) => {
    if (element.current.contains(event.target)) return;

    setFocus(false);
  };

  const enterHandler = useCallback((event)=>{
    if (event.key === "Enter") {
      submitHandler();
    }
  },[search]);

  const submitHandler = () => {
    if (inputRef.current.value.trim() == 0) return;
    if (focus == false) return;

    navigate(`/movies/${inputRef.current.value}`);
  };

  return (
    <div
      className="flex items-center h-7 bg-slate-300 rounded-full border border-gray-500"
      ref={element}
    >
      <button
        className={`rounded-full bg-slate-200  flex justify-center items-center w-8 h-full`}
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

      />
    </div>
  );
};

export default Searchbar;
