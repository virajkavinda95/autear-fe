import React from "react";
import CategoryTag from "../components/CategoryTag";
import {
  BsCalendar3,
  BsChatLeftDots,
  BsEye,
  BsHandThumbsUp,
  BsPersonCircle,
} from "react-icons/bs";
import jsonData from "../jsons/text_data.json";
import blogImg from "../assets/blog-one.jpg";
import sliderImg from "../assets/slide-1.jpg";
import RecentBlogs from "../components/RecentBlogs";

function ViewBlogPage() {
  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center justify-start">
        <CategoryTag category={"Education"} />

        <div className="flex mx-5 text-sm font-normal">
          <span className="text-md text-black flex flex-row justify-center items-center gap-3">
            <BsCalendar3 /> Dec 25, 2024 &nbsp; &nbsp;|
          </span>

          <span className="text-md text-black flex flex-row justify-center items-center gap-3">
            <BsPersonCircle className="ml-3" /> J.K. Rowling &nbsp; &nbsp;|
          </span>

          <span className="text-md text-black flex flex-row justify-center items-center gap-3">
            <BsChatLeftDots className="ml-3" /> 9999 &nbsp; &nbsp;|
          </span>

          <span className="text-md text-black flex flex-row justify-center items-center gap-3">
            <BsEye className="ml-3" /> 9999 &nbsp; &nbsp;|
          </span>

          <span className="text-md text-black flex flex-row justify-center items-center gap-3">
            <BsHandThumbsUp className="ml-3" /> 9999
          </span>
        </div>
      </div>

      <div className="flex my-5">
        <div className="w-3/4 flex flex-wrap mr-10">
          <h4 className="text-4xl font-bold text-justify">
            The Quick Brown Fox Jumps Over The Lazy Dog
          </h4>

          <div className="w-auto rounded-lg mt-5">
            <img
              src={sliderImg}
              alt="blog_img"
              className="object-contain mx-0 p-0 md:object-scale-down rounded-xl"
            />
          </div>

          <article className="text-md format lg:format-lg text-justify leading-8 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus mollis arcu, eu pulvinar ipsum vehicula finibus. Vivamus et
            consectetur diam. Nunc vehicula mattis lectus bibendum vehicula.
            Curabitur ut finibus dui, elementum dictum erat. Cras vehicula eros
            nec nibh condimentum dictum. Nunc feugiat velit non suscipit
            laoreet. Nulla facilisi. Suspendisse elementum nisl sit amet dolor
            scelerisque, eget efficitur arcu viverra. Morbi lacinia vitae tortor
            sit amet viverra. Nulla malesuada egestas facilisis. Cras diam
            ligula, tristique et iaculis non, fermentum sed nulla. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; In sed odio ac enim tempor sagittis. Etiam leo urna,
            dictum sit amet porta non, accumsan eu nibh. Maecenas urna urna,
            malesuada at ligula a, pellentesque tincidunt dui. Fusce condimentum
            lorem ac massa semper, nec semper nisi fringilla. Curabitur enim
            urna, posuere et ullamcorper vitae, tempus non odio. Maecenas
            tristique, velit nec accumsan tincidunt, tellus ipsum pulvinar diam,
            iaculis ornare nulla eros vel nisl. Maecenas at velit elit. Etiam
            quis ultricies purus. Sed non dolor quis nisi pellentesque viverra.
            Fusce pretium lacus nec dolor euismod mollis. Fusce venenatis dolor
            id libero laoreet, et pulvinar felis elementum.
            <h4 className="text-xl font-semibold text-left my-4">
              Sub Heading 1
            </h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus mollis arcu, eu pulvinar ipsum vehicula finibus. Vivamus et
            consectetur diam. Nunc vehicula mattis lectus bibendum vehicula.
            Curabitur ut finibus dui, elementum dictum erat. Cras vehicula eros
            nec nibh condimentum dictum. Nunc feugiat velit non suscipit
            laoreet. Nulla facilisi. Suspendisse elementum nisl sit amet dolor
            scelerisque, eget efficitur arcu viverra. Morbi lacinia vitae tortor
            sit amet viverra. Nulla malesuada egestas facilisis. Cras diam
            ligula, tristique et iaculis non, fermentum sed nulla. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; In sed odio ac enim tempor sagittis. Etiam leo urna,
            dictum sit amet porta non, accumsan eu nibh. Maecenas urna urna,
            malesuada at ligula a, pellentesque tincidunt dui. Fusce condimentum
            lorem ac massa semper, nec semper nisi fringilla. Curabitur enim
            urna, posuere et ullamcorper vitae, tempus non odio. Maecenas
            tristique, velit nec accumsan tincidunt, tellus ipsum pulvinar diam,
            iaculis ornare nulla eros vel nisl. Maecenas at velit elit. Etiam
            quis ultricies purus. Sed non dolor quis nisi pellentesque viverra.
            Fusce pretium lacus nec dolor euismod mollis. Fusce venenatis dolor
            id libero laoreet, et pulvinar felis elementum.
            <h4 className="text-xl font-semibold text-left my-4">
              Sub Heading 2
            </h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus mollis arcu, eu pulvinar ipsum vehicula finibus. Vivamus et
            consectetur diam. Nunc vehicula mattis lectus bibendum vehicula.
            Curabitur ut finibus dui, elementum dictum erat. Cras vehicula eros
            nec nibh condimentum dictum. Nunc feugiat velit non suscipit
            laoreet. Nulla facilisi. Suspendisse elementum nisl sit amet dolor
            scelerisque, eget efficitur arcu viverra. Morbi lacinia vitae tortor
            sit amet viverra. Nulla malesuada egestas facilisis. Cras diam
            ligula, tristique et iaculis non, fermentum sed nulla. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; In sed odio ac enim tempor sagittis. Etiam leo urna,
            dictum sit amet porta non, accumsan eu nibh. Maecenas urna urna,
            malesuada at ligula a, pellentesque tincidunt dui. Fusce condimentum
            lorem ac massa semper, nec semper nisi fringilla. Curabitur enim
            urna, posuere et ullamcorper vitae, tempus non odio. Maecenas
            tristique, velit nec accumsan tincidunt, tellus ipsum pulvinar diam,
            iaculis ornare nulla eros vel nisl. Maecenas at velit elit. Etiam
            quis ultricies purus. Sed non dolor quis nisi pellentesque viverra.
            Fusce pretium lacus nec dolor euismod mollis. Fusce venenatis dolor
            id libero laoreet, et pulvinar felis elementum.
          </article>
        </div>

        <div className="w-1/4 mr-0 ml-auto">
          <RecentBlogs
            type={"Related Blogs"}
            image={blogImg}
            title={jsonData.Travel.blogHeader}
            date={jsonData.Travel.date}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewBlogPage;
