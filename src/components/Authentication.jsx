import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Authentication = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="min-h-screen w-full bg-hsl-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-5 text-center">
        <h1 className="text-3xl sm:text-4xl text-white font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
            HomeServify
          </span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Join thousands of satisfied customers and trusted professionals
        </p>

        {/* Form area */}
        {isLogin ? (
          <Login onToggle={() => setLogin(false)} />
        ) : (
          <Signup onToggle={() => setLogin(true)} />
        )}

        <p className="text-gray-400 text-sm sm:text-base font-semibold">
          By signing up, you agree to our{" "}
          <span className="text-custom-oklch">Terms of Service</span> and{" "}
          <span className="text-custom-oklch">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
