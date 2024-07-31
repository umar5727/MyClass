import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { Children } from 'react'
import NumberDisplay from "./NumberDisplay";

const SmallCard = ({
  className,
  children,
  number = 10,
  numberSpan = "K",
  title = "Course",
  speed = 200,
  ...props
}) => {
  return (
    <div
      className={`flex justify-evenly w-full ${className} w-80 h-28 rounded-lg`}
      {...props}
    >
      <div className="w-fit flex justify-center items-center">{children}</div>
      <div className="w-fit text-primary-text-heading font-semibold flex justify-center flex-col text-lg dark:text-white">
        <div className="flex ">
          <NumberDisplay number={number} speed={speed} />
          <span>{numberSpan}</span>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SmallCard;
