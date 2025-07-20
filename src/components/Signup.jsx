import React, {useState, useRef} from "react";
import Stepper from "awesome-react-stepper";
import {Input, Button, Hoverbutton} from "./index";
import authService from "../appwrite/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {login} from "../store/actions/authSlice";

const Signup = ({onToggle}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stepperRef = useRef(null);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    trigger,
  } = useForm();

  const handleNext = async () => {
    const isValid = await trigger(["email", "password", "selectedRole"]);
    if (!selectedRole) {
      return;
    }
    if (isValid) {
      stepperRef.current.nextStep();
    }
  };

  const create = async (data) => {
    setError("");
    try {
      setValue("role", selectedRole);
      const userData = await authService.createAccount(data);
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
      className="border p-10 sm:p-10 rounded-lg space-y-8"
    >
      {/* Toggle Buttons */}
      <div className="flex border rounded-md overflow-hidden">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-1/2 justify-center font-semibold p-2 text-black hover:bg-blue-00 transition"
        >
          Login
        </button>
        <button
          type="button"
          className="flex w-1/2 justify-center font-semibold p-2 text-black hover:bg-green-300 transition"
        >
          Sign up
        </button>
      </div>

      <Stepper
        
      >
        {/* Step 1: Role + Email + Password */}
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold mt-3 text-black">
            Choose Account Type
          </h1>

          <div className="mt-5   grid grid-cols-2 gap-5">
            <button
              type="button"
              className={`border text-center p-5 hover:bg-blue-500 text-black rounded-md transition ${
                selectedRole === "client" ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedRole("client")}
            >
              <div className="flex flex-col items-center">
                <i className="ri-user-line text-xl"></i>
                Customer
              </div>
            </button>
            <button
              type="button"
              className={`border text-center p-5 hover:bg-green-300 text-black rounded-md transition ${
                selectedRole === "provider" ? "bg-green-100" : ""
              }`}
              onClick={() => setSelectedRole("provider")}
            >
              <div className="flex flex-col items-center">
                <i className="ri-briefcase-4-line text-xl"></i>
                Provider
              </div>
            </button>
          </div>

          <div className="space-y-5 ">
            <Input
              icon={<i className="ri-mail-line text-black text-xl"></i>}
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
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}

            <Input
              icon={<i className="ri-lock-2-line text-black text-xl"></i>}
              type="password"
              placeholder="Enter your Password"
              {...register("password", {required: "Password is required"})}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}

            {error && <p className="text-red-600 text-sm">{error}</p>}

          </div>
        </div>

        {/* Step 2: Customer info */}
        <div>
          {selectedRole === "client" && (
            <div className="space-y  mt-5">
              <Input
                icon={<i className="ri-user-line"></i>}
                placeholder="Full Name"
                type="text"
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
          )}
          <Button type="submit" className="mt-4 w-full">
            Sign Up
          </Button>
        </div>

        {/* Step 3: Confirmation */}
        <div>
          <h1 className="text-black font-semibold">
            Thank you for using HomeServify!
          </h1>
        </div>
      </Stepper>
    </form>
  );
};

export default Signup;
