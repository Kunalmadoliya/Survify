import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
