import React, {useState} from "react";
import Stepper from "awesome-react-stepper";
import {Input, Button} from "./index";
import authService from "../appwrite/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {login} from "../store/actions/authSlice";

const Signup = ({onToggle}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [value, setValue] = useState("customer");

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();

  const create = async (data) => {
    setError("");
    setValue(" ");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(create)}
        className="bg-gray-800 border border-white/10 p-6 sm:p-8 rounded-md space-y-5 text-white"
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
          <div className="space-y-1">
            <div className="mt-4">
              <h1 className="text-xl font-semibold">Choose Account Type</h1>
            </div>
            <div>
              <button className="" onClick={() => setValue("customer")}>Customer</button>
              <button className="" onClick={() => setValue("Provider")}>Provider</button>
            </div>
            <div>
              <div className="space-y-5 pt-4">
                <Input
                  icon={<i className="ri-mail-line text-gray-400 text-xl"></i>}
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      matchPattern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-left text-sm pl-1">
                    {errors.email.message}
                  </p>
                )}

                <Input
                  icon={
                    <i className="ri-lock-2-line text-gray-400 text-xl"></i>
                  }
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", {required: "Password is required"})}
                />
                {errors.password && (
                  <p className="text-red-500 text-left text-sm pl-1">
                    {errors.password.message}
                  </p>
                )}

                {error && (
                  <p className="text-red-500 text-left text-sm pl-1">{error}</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <h1>Add your content here!!!</h1>
          </div>
          <div>
            <h1>Thank you for using Awesome React Stepper</h1>
          </div>
        </Stepper>
      </form>
    </>
  );
};

export default Signup;
