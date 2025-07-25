import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actions/authSlice";
import {useNavigate} from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Logout;
