import React, {useState, useRef} from "react";
import Stepper from "awesome-react-stepper";
import {Input, Button} from "./index";
import authService from "../appwrite/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {login} from "../store/actions/authSlice";
import {Hoverbutton} from "../components/index";

const Signup = ({onToggle}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stepperRef = useRef(null);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const jobs = [
    "House Cleaning",
    "Plumbing",
    "Salon at Home",
    "Painting",
    "AC Repair & Service",
    "Electrical Work",
    "Appliance Repair",
    "Carpentry",
  ];

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    trigger,
    watch,
  } = useForm();

  const handleNext = async () => {
    const isValid = await trigger(["fullName", "email"]);
    if (!selectedRole) return;
    if (isValid) stepperRef.current.nextStep();
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
      className="border p-10 rounded-lg space-y-8"
    >
      <div className="flex border rounded-md overflow-hidden">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-1/2 border justify-center font-semibold p-2 text-black hover:bg-blue-100 transition"
        >
          Login
        </button>
        <button
          type="button"
          className="flex w-1/2 border justify-center font-semibold p-2 text-black hover:bg-green-300 transition"
        >
          Sign up
        </button>
      </div>

      <Stepper
        ref={stepperRef}
        strokeColor="#17253975"
        fillStroke="#172539"
        activeColor="#172539"
        activeProgressBorder="2px solid #17253975"
        continueBtn={
          <Hoverbutton
            type="button"
            className="stepperBtn rounded-md"
            onClick={handleNext}
          >
            Next
          </Hoverbutton>
        }
        backBtn={
          <Hoverbutton
            type="button"
            className="stepperBtn rounded-md"
            onClick={() => stepperRef.current.previousStep()}
          >
            Back
          </Hoverbutton>
        }
        submitBtn={
          <Hoverbutton type="submit" className="stepperBtn rounded-md">
            Sign Up
          </Hoverbutton>
        }
      >
        {/* Step 1: Role + Basic Info */}
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold mt-3 text-black">
            Choose Account Type
          </h1>

          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              className={`border text-center p-5 text-black rounded-md transition ${
                selectedRole === "client"
                  ? "bg-[hsl(274.87deg_95.9%_52.16%)] text-white"
                  : ""
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
              className={`border text-center p-5 text-black rounded-md transition ${
                selectedRole === "provider" ? "bg-[#009966] text-white" : ""
              }`}
              onClick={() => setSelectedRole("provider")}
            >
              <div className="flex flex-col items-center">
                <i className="ri-briefcase-4-line text-xl"></i>
                Provider
              </div>
            </button>
          </div>

          <Input
            icon={<i className="ri-user-line text-black text-xl"></i>}
            type="text"
            placeholder="Full Name"
            {...register("fullName", {required: "Full name is required"})}
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}

          <Input
            icon={<i className="ri-mail-line text-black text-xl"></i>}
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Step 2: Role-based Inputs */}
        <div className="space-y-5 mt-5">
          {/* Passwords (for both roles) */}
          <Input
            icon={<i className="ri-lock-2-line text-black text-xl"></i>}
            type="password"
            placeholder="Password"
            {...register("password", {required: "Password is required"})}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}

          <Input
            icon={<i className="ri-lock-password-line text-black text-xl"></i>}
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Client-Specific Input */}
          {selectedRole === "client" && (
            <Input
              icon={<i className="ri-phone-line text-black text-xl"></i>}
              type="text"
              placeholder="Phone Number (optional)"
              {...register("phone")}
            />
          )}

          {/* Provider-Specific Inputs */}
          {selectedRole === "provider" && (
            <>
              <div>
                <p className="text-black font-medium mb-2">Service Category</p>
                <div className="grid grid-cols-2 gap-3">
                  {jobs.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedService(item)}
                      className={`border p-2 rounded-md text-sm ${
                        selectedService === item
                          ? "bg-blue-600 text-white"
                          : "text-black"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <Input
                className="mt-5 flex "
                icon={
                  <i className="ri-briefcase-3-line text-black text-xl"></i>
                }
                type="text"
                placeholder="Years of Experience"
                {...register("experience", {
                  required: "Experience is required",
                })}
              />
              {errors.experience && (
                <p className="text-red-600 text-sm">
                  {errors.experience.message}
                </p>
              )}
            </>
          )}
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
