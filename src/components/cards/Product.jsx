

import { faHeart as regular, faClock, } from "@fortawesome/free-regular-svg-icons";

import { faCalendar, faFaceSmile, faHeart, faIndianRupee, faRupee, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wishlist from "../wishlist/Wishlist";


const Product = ({ courseId, image, name, difficulty, description, lectures, mentors, time, price = 100, category, mentorImg, height = 'h-full', discountPrice }) => {
  const [like, setLike] = useState(false);
  // adding color to difficulty 
  let textColor = '';
  let bgColor = '';
  if (difficulty) {
    if (difficulty.toUpperCase() === 'BEGINNER') {
      textColor = 'text-primary-green'
      bgColor = 'bg-primary-green-light'
    } else if (difficulty.toUpperCase() === 'INTERMEDIATE') {
      textColor = 'text-primary-info'
      bgColor = 'bg-primary-info-light'
    } else if (difficulty.toUpperCase() === 'ALL LEVEL') {
      textColor = 'text-primary-purple'
      bgColor = 'bg-primary-purple-light'
    }
  }
  return (
    <div className={`group/product lightShadow rounded-lg  w-full bg-white dark:bg-card-dark-bg flex flex-col ${height} hover:shadow-product duration-300`}>
      <div className="w-full aspect-[3/2] overflow-hidden">

        <img
          className="group-hover/product:scale-125 duration-300 w-full h-full object-cover object-center  "
          src={image}
          alt={name}
        />
      </div>
      {/* card content starts  */}
      <div className="px-6 py-4 flex flex-col gap-2 text-sm flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex gap2">
            {
              category ? <p className="text-primary bg-primary-light px-4 py-1 font-semibold mr-2 rounded-lg">{category}</p> : null
            }
            <p className={`${textColor} ${bgColor} rounded-md px-4 py-1  font-semibold mr-2`}>
              {difficulty}
            </p>
          </div>

          <Wishlist courseId={courseId} />


        </div>
        {/* category ends  */}

        {/* <div className=" "> */}
        <Link to={`/courses/${courseId}`}>
          <h3 className="font-bold text-xl transition-colors duration-300  cursor-pointer hover:text-primary capitalize ">
            {name}
          </h3>
        </Link>
        <div className=" flex-grow">
          {
            description
              ?
              <p className="text-primary-text-normal text-sm dark:text-primary-text-normal-dark">{description}</p>
              : null
          }
        </div>
        {/* </div> */}
        {/* title ends  */}

        <div className=" ">
          <span className="text-primary-text-normal text-base font-bold dark:text-primary-text-normal-dark">
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <span className="text-primary-text-normal  pl-1 dark:text-primary-text-normal-dark">5/5</span>
          </span>
        </div>
        {/* star ends */}
        {
          !price ? <hr /> : null

        }
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-primary-green" />
            <span>{time} Hours</span>
          </div>
          {/* time and lectures ends  */}
          <div>
            <FontAwesomeIcon icon={faCalendar} className="text-primary-orange" />
            <span className="ps-1">{lectures} lectures</span>
          </div>
        </div>
        {/* time and lectures ends  */}

        {price ? <hr /> : null}

        <div className=" flex justify-end items-center">
          {/* <div className="flex items-center gap-1 w-3/5 overflow-hidden">
            <img src={mentorImg} alt="mentor" className="w-7 h-7 rounded-full" />
            <span className="">{mentors?.split(' ')[0]}</span>
          </div> */}
          <span className="line-through mr-5 text-xl text-gray-500 font-semibold">₹ {price}</span>
          {
            discountPrice ?
              <div className="text-primary-green font-bold text-xl">
                <FontAwesomeIcon icon={faIndianRupee} className="text-primary-green" />
                <span className="ps-1 text-2xl">{discountPrice}</span>
              </div>
              :
              <div className="text-primary-green font-bold text-2xl">
                <span>{discountPrice}</span>
                FREE
              </div>
          }
          {/* ${product.price ends} */}
        </div>
        {/* footer ends  */}
      </div>
    </div>

  )
}

export default Product