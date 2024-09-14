import React from "react";
import { NavLink } from "react-router-dom";

function RecentBlogs({ type, image, title, date }) {
  return (
    <div className="border border-gray-200 p-2 rounded-lg my-5">
      <h4 className="text-black text-xl font-semibold mb-5">{type}</h4>

      <div className="grid grid-cols-2 w-full m-0 p-0">
        <div className="w-auto mr-2 my-1">
          <img
            src={image}
            alt="blog_img"
            className="object-contain mx-0 p-0 md:object-scale-down rounded-md"
          />
        </div>

        <div className="my-auto">
          <NavLink
            to={"#"}
            className="text-left ml-0 text-sm font-medium hover:underline line-clamp-1"
          >
            {title}
          </NavLink>
          <span className="text-xs text-black font-medium">{date}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full m-0 p-0">
        <div className="w-auto mr-2 my-1">
          <img
            src={image}
            alt="blog_img"
            className="object-contain mx-0 p-0 md:object-scale-down rounded-md"
          />
        </div>

        <div className="my-auto">
          <NavLink
            to={"#"}
            className="text-left ml-0 text-sm font-medium hover:underline line-clamp-1"
          >
            {title}
          </NavLink>
          <span className="text-xs text-black font-medium">{date}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full m-0 p-0">
        <div className="w-auto mr-2 my-1">
          <img
            src={image}
            alt="blog_img"
            className="object-contain mx-0 p-0 md:object-scale-down rounded-md"
          />
        </div>

        <div className="my-auto">
          <NavLink
            to={"#"}
            className="text-left ml-0 text-sm font-medium hover:underline line-clamp-1"
          >
            {title}
          </NavLink>
          <span className="text-xs text-black font-medium">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default RecentBlogs;
