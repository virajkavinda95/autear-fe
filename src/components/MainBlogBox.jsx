import React from "react";
import { NavLink } from "react-router-dom";

function MainBlogBox({ image, title, description, author, date }) {
  return (
    <div className="w-52 rounded-xl border border-gray-100 hover:shadow-md mx-1 mb-5">
      <div className="relative text-center">
        <img
          src={image}
          alt="blog_img"
          className="object-contain mx-0 p-0 md:object-scale-down rounded-t-xl"
        />
      </div>
      <div className="w-full mx-auto px-3 mt-2 mb-8">
        <NavLink
          to={"#"}
          className="text-left text-md font-semibold hover:underline line-clamp-1"
        >
          {title}
        </NavLink>
        <p className="text-xs leading-5 text-justify font-light line-clamp-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center w-full px-2 pb-2 mb-0 mt-auto">
        <span className="text-xs mr-4 text-black font-semibold">{author}</span>
        <span className="bg-black rounded-full w-1.5 h-1.5 my-auto items-center"></span>
        <span className="text-xs ml-4 text-black font-semibold">{date}</span>
      </div>
    </div>
  );
}

export default MainBlogBox;
