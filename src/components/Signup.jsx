import React, {useState} from "react";
import Stepper from "awesome-react-stepper";
import {Input, Button} from "./index";
import authService from "../appwrite/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {login} from "../store/actions/authSlice";
import service from "../appwrite/configuration";

const Signup = ({onToggle}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();

  const create = async (data) => {
    setError("");
    try {
      setValue("role", selectedRole); 
      const userData = await authService.createAccount(data);
      const role = watc
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        dispatch(login(currentUser));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(create)}
      className="bg-gray-800 border border-white/10 p-12 sm:p-10 rounded-lg space-y-8 text-white"
    >
      <div className="flex border border-white/10 rounded-md overflow-hidden">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-1/2 justify-center font-semibold p-2 text-gray-500 hover:bg-gray-800 hover:text-white"
        >
          Login
        </button>
        <button
          type="button"
          className="flex w-1/2 justify-center font-semibold p-2 bg-custom-oklch text-white"
        >
          Sign up
        </button>
      </div>

      <Stepper>
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold mt-3">Choose Account Type</h1>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <button
              type="button"
              className={`border border-white/10 text-center p-5 hover:bg-gray-800 hover:text-white rounded-md ${
                selectedRole === "customer" ? "bg-custom-oklch" : ""
              }`}
              onClick={() => setSelectedRole("customer")}
            >
              <div className="flex flex-col items-center">
                <i className="ri-user-line"></i>
                Customer
              </div>
            </button>
            <button
              type="button"
              className={`border border-white/10 text-center p-5 hover:bg-gray-800 hover:text-white rounded-md ${
                selectedRole === "provider" ? "bg-custom-oklch" : ""
              }`}
              onClick={() => setSelectedRole("provider")}
            >
              <div className="flex flex-col items-center">
                <i className="ri-briefcase-4-line"></i>
                Provider
              </div>
            </button>
          </div>

          <div className="space-y-6">
            <Input
              icon={<i className="ri-mail-line text-gray-400 text-xl"></i>}
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Input
              icon={<i className="ri-lock-2-line text-gray-400 text-xl"></i>}
              type="password"
              placeholder="Enter your Password"
              {...register("password", {required: "Password is required"})}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>

        <div>
         {selectedRole==="customer" ? "" : ""}
        </div>
        <div>
          <h1>Thank you for using Awesome React Stepper</h1>
        </div>
      </Stepper>
    </form>
  );
};

export default Signup;
