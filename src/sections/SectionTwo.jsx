import React from "react";
import TopBlogBox from "../components/TopBlogBox";
import jsonData from "../jsons/text_data.json";
import BlogBox from "../components/BlogBox";
import blogImg from "../assets/blog-one.jpg";

function SectionTwo() {
  return (
    <div>
      <TopBlogBox
        header={jsonData.Travel.header}
        description={jsonData.Travel.description}
      />
      <div className="flex container mx-auto my-10">
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
      </div>
      <hr className="h-px my-14 w-2/4 mx-auto bg-gray-200 border-0" />

      <TopBlogBox
        header={jsonData.Travel.header}
        description={jsonData.Travel.description}
      />
      <div className="flex container mx-auto my-10">
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
        <BlogBox
          img={blogImg}
          title={jsonData.Travel.blogHeader}
          description={jsonData.Travel.description}
          reviews={999}
          rating={4.9}
        />
      </div>
      <hr className="h-px my-14 w-2/4 mx-auto bg-gray-200 border-0" />
    </div>
  );
}

export default SectionTwo;
