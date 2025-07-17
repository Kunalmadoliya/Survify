import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home, About, Service, Authentication} from "../components/index";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
};

export default Mainroutes;
