import React from "react";
import { BsEnvelope, BsKey, BsPersonCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import FormLayout from "../components/FormLayout";

function RegisterPage() {
  return (
    <FormLayout>
      {/* <h4 className="text-center text-2xl font-semibold md:mt-2 md:text-xl lg:text-left lg:ml-32 lg:text-2xl lg:font-semibold">
      Create an Account
      </h4> */}
      <div className="max-w-lg mx-auto lg:ml-20 lg:mt-0">
        <h4 className="text-left text-2xl font-semibold md:text-xl md:mt-4 lg:mt-8 lg:text-2xl">
          Create an Account
        </h4>
        <span className="font-light text-sm md:text-xs lg:text-sm">
          Let's begin your writers' journey with auteur.com
        </span>

        <form className="max-w-lg mx-auto lg:mt-4 ">
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-light text-gray-900 "
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <BsPersonCircle />
              </div>
              <input
                type="text"
                id="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full ps-10 p-2.5"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-light text-gray-900 lg:mt-4"
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

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-light text-gray-900 lg:mt-4"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <BsKey />
              </div>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full ps-10 p-2.5"
                placeholder="●●●●●●●●"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmpassword"
              className="block mb-2 text-sm font-light text-gray-900 lg:mt-4"
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <BsKey />
              </div>
              <input
                type="password"
                id="confirmpassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full ps-10 p-2.5"
                placeholder="●●●●●●●●"
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white lg:mt-5 bg-gradient-to-r from-[#02103F] via-[#01777F] to-[#00DFC0] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-cyan-700 w-full font-light uppercase rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-start">
          <span className="text-left font-light text-sm">
            Already have an account? &nbsp;
            <a
              href="#"
              className="font-light text-blue-500 underline hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Sign in
            </a>
          </span>
        </div>
        <div className="mt-5">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="text-black border bg-[#FCFCFC] hover:bg-[#F9F9F9] focus:ring-4 focus:outline-none focus:ring-[#FCFCFC] font-light rounded-lg text-sm px-5 py-2.5 text-center w-full inline-flex items-center justify-center"
          >
            <FcGoogle size={30} /> &nbsp;&nbsp; Sign up with Google
          </button>
        </div>
      </div>
    </FormLayout>
  );
}

export default RegisterPage;
