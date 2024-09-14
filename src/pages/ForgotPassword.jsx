import React from "react";
import { BsEnvelope } from "react-icons/bs";
import logo from "../assets/logo.png";

function ForgotPassword() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <img src={logo} alt="logo" className="h-auto max-w-52 lg:mb-0" />
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h4 className="text-left text-2xl font-semibold md:text-xl md:mt-4 lg:mt-8 lg:text-2xl">
          Forgot Password
        </h4>
        <span className="font-light text-sm md:text-xs lg:text-sm">
          Enter your registered email to get password reset link.
        </span>

        <form className="max-w-lg mx-auto lg:mt-0">
          <div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-light text-gray-900 "
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <BsEnvelope />
              </div>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full ps-10 p-2.5"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white lg:mt-5 bg-gradient-to-r from-[#02103F] via-[#01777F] to-[#00DFC0] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-cyan-700 w-full font-light uppercase rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
