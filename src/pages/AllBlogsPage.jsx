import React from "react";
import MainBlogBox from "../components/MainBlogBox";
import jsonData from "../jsons/text_data.json";
import blogImg from "../assets/blog-one.jpg";
import SearchInput from "../components/SearchInput";
import RecentBlogs from "../components/RecentBlogs";
import { NavLink } from "react-router-dom";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import CarouselSlider from "../components/CarouselSlider";

function AllBlogsPage() {
  return (
    <>
      <CarouselSlider />
      <div className="container mx-auto my-10">
        <div className="flex">
          <div className="w-3/4 flex flex-wrap">
            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />
            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />

            <MainBlogBox
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              description={jsonData.Travel.description}
              author={jsonData.Travel.author}
              date={jsonData.Travel.date}
            />
          </div>

          <div className="w-1/4 mr-0 ml-auto">
            <SearchInput style={"text-xs px-20"} />
            <RecentBlogs
              type={"Recent Blogs"}
              image={blogImg}
              title={jsonData.Travel.blogHeader}
              date={jsonData.Travel.date}
            />
          </div>
        </div>

        <div className="navigation">
          <nav className="navigation">
            <ul className="inline-flex gap-3 -space-x-px text-md">
              <li>
                <NavLink
                  to={"#"}
                  className="flex justify-center items-center w-9 h-9 p-2 align-middle transition-all rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600"
                >
                  <BsChevronDoubleLeft />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"#"}
                  className="flex justify-center bg-cyan-500 text-white items-center w-9 h-9 p-2 align-middle transition-all rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600"
                >
                  1
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"#"}
                  className="flex justify-center items-center w-9 h-9 p-2 align-middle transition-all rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600"
                >
                  2
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"#"}
                  className="flex justify-center items-center w-9 h-9 p-2 align-middle transition-all rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600"
                >
                  3
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"#"}
                  className="flex items-center w-9 h-9 p-2 align-middle transition-all rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600"
                >
                  99
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"#"}
                  className="flex justify-center items-center w-9 h-9 p-2 align-middle transition-all rounded-full hover:bg-cyan-500 hover:text-white active:bg-cyan-600"
                >
                  <BsChevronDoubleRight />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default AllBlogsPage;
