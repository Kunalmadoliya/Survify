import { useForm } from "react-hook-form";
import { login as authLogin } from "../store/actions/authSlice";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { Input, Button } from "./index";
import { useState } from "react";

const Login = ({ onToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="bg-gray-800 border border-white/10 p-12 sm:p-10 rounded-md space-y-5"
    >
      <div className="flex border border-white/10 rounded-md overflow-hidden">
        <button
          type="button"
          className="flex w-1/2 justify-center font-semibold p-2 bg-custom-oklch text-white"
        >
          Login
        </button>
        <button
          type="button"
          onClick={onToggle}
          className="flex w-1/2 justify-center font-semibold p-2 text-gray-500 hover:bg-gray-800 hover:text-white"
        >
          Sign up
        </button>
      </div>

      <div className="space-y-5 pt-4">
        <Input
          icon={<i className="ri-mail-line text-gray-400 text-xl"></i>}
          type="email"
          placeholder="Enter your Email"
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
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

        {error && (
          <p className="text-red-500 text-left text-sm pl-1">{error}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-3">
        {isSubmitting ? (
          <i className="ri-loader-4-line animate-spin text-xl"></i>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
};

export default Login;
