import React from "react";

const CategoryCard = ({ image, heading, totalCourses }) => {
  return (
    <div className="p-5 text-center flex flex-col justify-center items-center gap-2 duration-300 hover:-translate-x-1">
      <img src={image} alt="" className="rounded-full w-10 h-10" />
      <h2>{heading}</h2>
      <p>{totalCourses} Courses</p>
    </div>
  );
};

export default CategoryCard;
