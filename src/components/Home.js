import React from "react";
import { useUserAuth } from "../context/UserAuthContextProvider";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const history = useHistory();

  const logOutHandler = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const playChessHandler = () => {
    window.open("https://chessmasters.vercel.app/", "_blank");
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center">
      <section className="rounded-lg shadow-2xl max-w-[80%] p-8 bg-white flex flex-col items-center transform hover:scale-105 transition duration-500 ease-in-out">
        <h1 className="py-4 text-4xl font-bold text-center text-gray-800 animate-pulse">
        Congratulations!!
        </h1>
        {user && (
          <h2 className="py-2 text-2xl font-semibold text-center text-gray-700">
            {user.email}
          </h2>
        )}
        <h2 className="py-2 font-semibold text-center text-gray-600">
          You have successfully logged in.
        </h2>
        <div className="flex gap-4 mt-6">
          <button
            onClick={logOutHandler}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all duration-300 ease-in-out"
          >
            Log Out
          </button>
          <button
            onClick={playChessHandler}
            className="px-6 py-2 rounded-lg bg-green-600 text-white font-bold hover:bg-green-500 transition-all duration-300 ease-in-out"
          >
            Play Chess
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
