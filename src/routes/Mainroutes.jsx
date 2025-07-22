import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../Home";
import {About, Service, Authentication, Header} from "../components/index";
import Authservice from "../components/Authservice";

const Mainroutes = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Public route: only for unauthenticated users */}
        <Route
          path="/auth"
          element={
            <Authservice authentication={false}>
              <Authentication />
            </Authservice>
          }
        />

        {/* Protected routes: only for authenticated users */}
        <Route
          path="/about"
          element={
            <Authservice authentication={false}>
              <About />
            </Authservice>
          }
        />

        <Route
          path="/service"
          element={
            <Authservice authentication={false}>
              <Service />
            </Authservice>
          }
        />
      </Routes>
    </>
  );
};

export default Mainroutes;
