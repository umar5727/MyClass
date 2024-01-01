import React from "react";
import { Button } from "../../components";

const CourseCard = ({ heading, para, btn, className = "" }) => {
  return (
    <div className={` flex rounded-lg ${className}`}>
      <div className="flex flex-col gap-2 py-14 ps-14  items-start">
        <h3 className="text-2xl font-bold">{heading}</h3>

        <p>{para}</p>
        <Button className="mt-5 hover:text-white">{btn}</Button>
      </div>
      <img
        src="student30.png"
        alt=""
        className="w-28 aspect-square justify-self-end self-end rounded-lg md:w-2/6 mb-2 mr-1"
      />
    </div>
  );
};

export default CourseCard;
