import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = useUserAuth();
  const history = useHistory();

  // Add password validation function here
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
      return;
    }

    try {
      await logIn(email, password);
      history.push("/home");
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const passwordEyeToggler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center">
      <section className="rounded-lg shadow-2xl max-w-[80%] p-8 bg-white flex flex-col items-center transform hover:scale-105 transition duration-500 ease-in-out">
        <h1 className="py-4 text-4xl font-extrabold text-center text-gray-800">
          Log In
        </h1>
        <h1 className="py-2 text-2xl font-semibold text-center text-gray-700">
          Enter your Credentials for logging in
        </h1>
        {error && (
          <h2 className="text-red-600 text-center border-2 border-red-600 bg-red-200 px-2 py-1 mt-2 rounded-lg">
            {error}
          </h2>
        )}
        <form onSubmit={onSubmitHandler} className="pt-8 space-y-5 w-full">
          <div className="px-4 py-2 border border-gray-300 rounded-lg">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="outline-none w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="px-4 py-2 border border-gray-300 rounded-lg flex justify-between">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="outline-none w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPassword ? (
              <BsFillEyeFill
                className="cursor-pointer text-gray-500"
                onClick={passwordEyeToggler}
              />
            ) : (
              <BsFillEyeSlashFill
                className="cursor-pointer text-gray-500"
                onClick={passwordEyeToggler}
              />
            )}
          </div>
          <div className="px-4 py-2 rounded-lg bg-blue-600 flex justify-center hover:bg-blue-500 transition duration-300 ease-in-out">
            <button type="submit" className="text-white font-bold">
              Log In
            </button>
          </div>
        </form>
      </section>
      <section className="mt-4 rounded-lg shadow-2xl max-w-[80%] p-4 bg-white flex flex-col items-center transform hover:scale-105 transition duration-500 ease-in-out">
        <div className="text-base font-bold text-gray-700">
          Don't have an account?&nbsp;
          <Link to="/signup" className="text-blue-600 underline">
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
