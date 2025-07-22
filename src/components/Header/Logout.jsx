import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actions/authSlice";
import authService from "../../appwrite/auth";

const Logout = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then((userData) => {
      dispatch(logout(userData));
    });
  };
  return (
    <>
      <button onClick={logoutHandler}> Logout</button>
    </>
  );
};

export default Logout;
