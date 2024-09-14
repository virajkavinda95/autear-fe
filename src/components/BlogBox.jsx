import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function BlogBox({ img, title, description, reviews, rating }) {
  return (
    <div className="w-56 mx-auto shadow-md rounded-xl">
      <div className="relative text-center">
        <img
          src={img}
          alt="blog_img"
          className="object-contain mx-0 p-0 md:object-scale-down rounded-t-xl"
        />
      </div>
      <div className="w-full mx-auto px-2 mt-2">
        <NavLink
          to={"#"}
          className="text-left text-md font-semibold hover:underline line-clamp-1"
        >
          {title}
        </NavLink>
        <p className="text-xs leading-5 text-justify font-light line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex px-2 mt-3">
        <div className="flex-1 mt-3">
          <span className="text-xs text-gray-400">{reviews} reviews</span>
          <div className="flex justify-start">
            <BsFillStarFill className="text-xs text-yellow-400" />
            <BsFillStarFill className="text-xs text-yellow-400" />
            <BsFillStarFill className="text-xs text-yellow-400" />
            <BsFillStarFill className="text-xs text-yellow-400" />
            <BsFillStarFill className="text-xs text-yellow-400" />
            <span className="text-gray-400 text-xs ml-2">{rating}</span>
          </div>
        </div>
        <div className="flex-1 ">
          <Button text={"Read More"} style="text-xs lg:px-1" />
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
