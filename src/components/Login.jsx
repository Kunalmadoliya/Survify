import { useForm } from "react-hook-form";
import { login as authLogin } from "../store/actions/authSlice";
import authSer from "../services/authSer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { Input, Hoverbutton } from "./index";
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
      const session = await authSer.login(data);
      const userData = await authSer.getCurrentUser();

      if (userData) {
        dispatch(authLogin(userData)); // only userData, not wrapped in object
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="border p-10 sm:p-10 rounded-md space-y-5"
    >
      <div className="flex border rounded-md overflow-hidden hover:cursor-pointer">
        <button
          type="button"
          className="flex w-1/2 border justify-center font-semibold p-2 text-black transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={onToggle}
          className="flex w-1/2 border justify-center font-semibold p-2 text-black transition"
        >
          Sign up
        </button>
      </div>

      <div className="space-y-5 pt-4">
        <Input
          icon={<i className="ri-mail-line text-black text-xl"></i>}
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
          <p className="text-red-600 text-left text-sm pl-1">
            {errors.email.message}
          </p>
        )}

        <Input
          icon={<i className="ri-lock-2-line text-black text-xl"></i>}
          type="password"
          placeholder="Enter your Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-600 text-left text-sm pl-1">
            {errors.password.message}
          </p>
        )}

        {error && (
          <p className="text-red-600 text-left text-sm pl-1">{error}</p>
        )}
      </div>

      <Hoverbutton
        type="submit"
        disabled={isSubmitting}
        className="mt-3 w-full h-15 text-[1.3rem] rounded-md"
      >
        {isSubmitting ? (
          <i className="ri-loader-4-line animate-spin text-1xl"></i>
        ) : (
          "Login"
        )}
      </Hoverbutton>
    </form>
  );
};

export default Login;
