import { useForm } from "react-hook-form";
import { login  } from "../store/actions/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { Input, Button } from "./index";

const Login = () => {
  const dispatch = useDispatch();

  // Initialize useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(authLogin(data));
  };

  return (
    <>
      <div className="w-full h-screen bg-hsl-dark flex items-center justify-center">
        <div className="text-center w-110">
          <h1 className="text-4xl text-white font-bold mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              HomeServify
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-4">
            Join thousands of satisfied customers and trusted professionals
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 border p-8 space-y-5 border-white/10 rounded-md mb-4"
          >
            <div className="flex">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex w-full justify-center font-semibold p-2 rounded-md text-center transition-colors duration-300 ${
                    isActive
                      ? "bg-custom-oklch text-white"
                      : "text-gray-500 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `flex w-full justify-center font-semibold p-2 rounded-md text-center transition-colors duration-300 ${
                    isActive
                      ? "bg-custom-oklch text-white"
                      : "text-gray-500 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                Sign up
              </NavLink>
            </div>

            <div className="space-y-5 pt-6">
              <Input
                icon={<i className="ri-mail-line text-gray-400 text-xl"></i>}
                type="email"
                placeholder="Enter your Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-left text-sm pl-1">
                  {errors.email.message}
                </p>
              )}
              <Input
                icon={<i className="ri-lock-2-line text-gray-400 text-xl"></i>}
                type="password"
                placeholder="Enter your Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-left text-sm pl-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <Button type="submit">Sign In</Button>
            </div>
          </form>
          <p className="text-gray-400 font-semibold">
            By signing up, you agree to our{" "}
            <span className="text-custom-oklch">Terms of Service</span> and{" "}
            <span className="text-custom-oklch">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
