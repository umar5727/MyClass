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
  speed=200,
  
}) => {
  return (
    <div className={`flex w-full ${className} w-80 h-28 rounded-lg`}>
      <div className="w-2/5 flex justify-center items-center">{children}</div>
      <div className="w-3/5 ps-2 text-primary-text-heading font-semibold flex justify-center flex-col text-lg dark:text-white">
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
