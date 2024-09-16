import React, { useState } from "react";
import "../App.css";
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl min-h-[500px] relative">
          <div className="w-1/2 p-5">
            <div>
              <SignIn/>
            </div>
          </div>
          <div className={`w-1/2 absolute right-0 h-full bg-[#347723] text-white rounded-tr-2xl ${isLogin ? 'rounded-tr-2xl':'rounded-tl-2xl'} rounded-br-2xl py-36 px-14 ${isLogin ? 'rounded-br-2xl':'rounded-bl-2xl'} transition-transform duration-700 transform ${
            isLogin ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome':'Hello, Friends'}
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-12">Fill up personal information and start booking futsal with us.</p>
            <button onClick={toggleAuthMode}
             className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#347723]">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
          <div className="w-1/2 pl-7 pr-7">
            <SignUp/>
          </div>
        </div>

      </main>
    </div>
  );
};
export default Auth;
