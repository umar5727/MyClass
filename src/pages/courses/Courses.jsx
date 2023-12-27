import React from "react";
import { H1 } from "../../components";

const Courses = () => {
  return (
    <section className=" grid gap-5 grid-cols-2 lg:grid-cols-4 my-10 py-10  relative before:block before:absolute before:bg-footer-light-bg before:left-2/4 before:-translate-x-2/4 before:w-screen before:h-full before:-z-10 before:content-[''] before:top-0  dark:before:bg-dark-bg-light">
      <div className="col-span-2 order-1 lg:order-2 ">
        <H1>
        what do you want to learn?

        </H1>
        <p>
          Grow your skill with the most reliable online courses and
          certifications
        </p>
      </div>
      <div className="order-2 lg:order-1">
        <img src="students1.jpg" alt="" />
      </div>
      <div className="order-3">
        <img src="student2.jpg" alt="" />
      </div>
    </section>
  );
};

export default Courses;
