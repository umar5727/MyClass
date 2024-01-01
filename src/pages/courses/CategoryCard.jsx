import React from "react";
import { H2 } from "../../components";

const CategoryCard = ({ image, heading, totalCourses, bgColor }) => {
  return (
    <div
      className={`group py-8 text-center flex flex-col justify-center items-center gap-2 duration-300 hover:-translate-y-1  ${bgColor} cursor-pointer rounded-lg`}
    >
      <div className="rounded-full bg-white p-3 dark:bg-primarydark">
        <img src={image} alt="" className="rounded-full w-16 h-16" />
      </div>
      <H2 className="!text-2xl transition-colors duration-300 group-hover:text-primary">
        {heading}
      </H2>
      <p>{totalCourses} Courses</p>
    </div>
  );
};

export default CategoryCard;
