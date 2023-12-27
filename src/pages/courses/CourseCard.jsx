import React from "react";
import { Button } from "../../components";

const CourseCard = ({ heading, para, btn, className = "" }) => {
  return (
    <div className={` flex pt-14 ps-14 rounded-lg ${className}`}>
      <div className="flex flex-col gap-2 items-start">
        <h3 className="text-2xl font-bold">{heading}</h3>
        <p>{para}</p>
        <Button className="mt-5 hover:text-white">{btn}</Button>
      </div>
      <img
        src="student2.jpg"
        alt=""
        className="w-28 h-28 justify-self-end self-end rounded-lg md:w-auto md:h-auto"
      />
    </div>
  );
};

export default CourseCard;
