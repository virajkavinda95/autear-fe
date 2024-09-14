import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-black.jpg";
import { BsFacebook, BsGoogle, BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full bg-black py-5">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-6">
        <div className="max-w-3xl mx-auto">
          <NavLink to={"#"} className="flex justify-center">
            <img src={logo} alt="logo" className="h-auto max-w-xs" />
          </NavLink>

          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-8 mb-10 border-b border-gray-200">
            <li>
              <a href="#" className="text-gray-400 hover:text-cyan-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-cyan-600">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-cyan-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-cyan-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-cyan-600">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-400 hover:text-cyan-600">
                Sign Up
              </a>
            </li>
          </ul>
          <>
            <div className="flex space-x-10 justify-center items-center mb-10">
              <a
                href="#"
                className="block text-3xl text-gray-400 transition-all duration-500 hover:text-cyan-600 "
              >
                <BsFacebook />
              </a>
              <a
                href="#"
                className="block text-3xl text-gray-400 transition-all duration-500 hover:text-cyan-600 "
              >
                <BsGoogle />
              </a>
              <a
                href="#"
                className="block text-3xl text-gray-400 transition-all duration-500 hover:text-cyan-600 "
              >
                <BsTwitterX />
              </a>
            </div>
            <span className="text-lg text-gray-400 text-center block">
              Copyright &copy; 2024 <a href="#">Auteur</a>. All Rights Reserved.
            </span>
          </>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
