import React from "react";

const Container = ({ children }) => {
  return (
    <div className="h-full w-[90%] p-3 flex flex-wrap justify-between mx-auto">
      {children}
    </div>
  );
};

export default Container;
