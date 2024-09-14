import React from "react";

function TopBlogBox({ header, description }) {
  return (
    <div className="container mx-auto">
      <h4 className="text-2xl text-left font-semibold mb-2">{header}</h4>
      <p className="text-sm leading-6 text-justify font-light">{description}</p>
    </div>
  );
}

export default TopBlogBox;
