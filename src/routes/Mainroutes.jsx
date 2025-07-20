import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../Home";
import {About, Service, Authentication, Header} from "../components/index";

const Mainroutes = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </>
  );
};

export default Mainroutes;
