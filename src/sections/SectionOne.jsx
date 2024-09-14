import React from "react";
import CategoryCard from "../components/CategoryCard";
import catImgOne from "../assets/category-1.jpg";
import catImgTwo from "../assets/category-2.jpeg";
import catImgThree from "../assets/category-3.jpg";
import catImgFour from "../assets/category-4.jpg";
import CarouselSlider from "../components/CarouselSlider";

function SectionOne() {
  return (
    <>
      <CarouselSlider />

      <div className="flex items-center justify-center mt-10">
        <CategoryCard img={catImgOne} text={"Travel"} />
        <CategoryCard img={catImgTwo} text={"Places"} />
        <CategoryCard img={catImgThree} text={"Technology"} />
        <CategoryCard img={catImgFour} text={"Education"} />
      </div>
    </>
  );
}

export default SectionOne;
