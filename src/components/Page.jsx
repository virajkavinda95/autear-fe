import React from "react";
import Navbar from "./Navbar";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import Footer from "./Footer";

function Page() {
  return (
    <>
      <section className="section-1">
        <SectionOne />
        <hr className="h-px my-14 w-2/4 mx-auto bg-gray-200 border-0" />
      </section>
      <section className="section-2">
        <SectionTwo />
      </section>
      <section className="section-3">
        <SectionThree />
        <hr className="h-px my-14 w-2/4 mx-auto bg-gray-200 border-0" />
      </section>
    </>
  );
}

export default Page;
