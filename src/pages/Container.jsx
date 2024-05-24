import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-[90%] p-3 mx-auto">
      {children}
    </div>
  );
};

export default Container;
