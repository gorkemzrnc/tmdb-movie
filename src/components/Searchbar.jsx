import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const element = useRef();
  const [bool, setBool] = useState(false);

  useEffect(()=>{
    document.addEventListener('mousedown',clickHandler);

    return document.removeEventListener('mousedown',clickHandler);
  },[])

  const clickHandler = (event)=>{
    if (element.current.contains(event.target)) {
      return;
    }
    setBool(false);
  }
  
  return (
    <div className="relative flex items-center h-7 bg-slate-300 rounded-full border border-gray-500" ref={element}>
      <button className={`rounded-full bg-slate-200  flex justify-center items-center w-8 h-full`} onClick={()=> setBool(true)}>
        <IoIosSearch className="text-xl"/>
      </button>
      
      <input  className={`${bool ? 'w-40 md:w-44 lg:w-48 px-1' : 'w-0'} h-full transition-width duration-500 block border-none outline-none bg-transparent text-black`} />
    </div>
  );
};

export default Searchbar;
