import React from "react";

function CategoryTag({ category }) {
  return (
    <div className="flex w-auto bg-[#009E9D] px-4 py-2 text-sm text-white rounded-full">
      {category}
    </div>
  );
}

export default CategoryTag;
