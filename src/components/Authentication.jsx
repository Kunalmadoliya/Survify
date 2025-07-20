import React, {useState} from "react";
import {Login, Signup, Container, Logo} from "../components/index";
import {useNavigate} from "react-router-dom";

const Authentication = () => {
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <Container>
      <div className="min-h-screen flex flex-col">
        {/* Top bar */}
        <div className="flex items-center p-6 justify-between ">
          <p
            onClick={() => navigate("/")}
            className="text-[1.1rem] hover:cursor-pointer"
          >
           <i className="ri-arrow-left-line"></i> Back
          </p>
          <Logo  />
        </div>

        {/* Content area */}
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-md space-y-2 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">
              Welcome to{" "}
              <span className="hover:bg-blue-300 hover:text-black transition px-1">
                HomeServify
              </span>
            </h1>
            <p className="text-gray-500 text-base sm:text-md">
              Join thousands of satisfied clients and trusted professionals
            </p>

            {/* Form area */}
            {isLogin ? (
              <Login onToggle={() => setLogin(false)} />
            ) : (
              <Signup onToggle={() => setLogin(true)} />
            )}

            <p className="text-gray-400 text-sm sm:text-base font-semibold">
              By signing up, you agree to our{" "}
              <span className="hover:bg-green-300 hover:text-black transition px-1 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="hover:bg-green-300 hover:text-black transition px-1 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Authentication;
