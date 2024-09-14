import React from "react";
import logo from "../assets/logo.png";

function FormLayout({ children }) {
  return (
    <div className="flex items-center justify-center h-screen w-auto p-0 md:block lg:flex lg:items-center lg:justify-center lg:h-screen lg:w-auto lg:p-0">
      <div className="flex-1 border-r border-gray-700 md:border-hidden lg:border-solid lg:pr-0 lg:mr-0 lg:py-28">
        <img
          src={logo}
          alt="logo"
          className="h-auto max-w-xs md:max-w-20 lg:h-auto lg:max-w-xs lg:ml-auto lg:mr-40"
        />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default FormLayout;
