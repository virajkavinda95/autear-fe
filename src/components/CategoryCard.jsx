import React from "react";

function CategoryCard({ img, text }) {
  return (
    <>
      <div className="relative text-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105">
        <img
          src={img}
          alt="category_img"
          className="object-contain md:object-scale-down h-72 m-5 rounded-2xl"
        />
        <div className="w-full absolute bottom-6 left-0 text-center">
          <h4 className="text-white uppercase text-2xl font-bold">{text}</h4>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
