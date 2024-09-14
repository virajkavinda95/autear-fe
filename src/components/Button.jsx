import React from "react";

function Button({ text, style }) {
  return (
    <button
      type="submit"
      className={`${style} text-white lg:mt-5 bg-gradient-to-r from-[#02103F] via-[#01777F] to-[#00DFC0] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-cyan-700 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
    >
      {text}
    </button>
  );
}

export default Button;
