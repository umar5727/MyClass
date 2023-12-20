

import { faHeart as regular, faClock, } from "@fortawesome/free-regular-svg-icons";

import {  faCalendar, faFaceSmile, faHeart, faIndianRupee, faRupee, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


const Product = ({image, name, difficulty, description, lectures, mentors, time, price, category}) => {
    const [like, setLike] = useState(false);
let textColor='';
let bgColor='';
if(difficulty){
    if(difficulty.toUpperCase() === 'BEGINNER'){
        textColor='text-primary-green'
        bgColor='bg-primary-green-light'
    }else if(difficulty.toUpperCase() === 'INTERMEDIATE'){
        textColor='text-primary-info'
        bgColor='bg-primary-info-light'
    }else if(difficulty.toUpperCase() === 'ALLLEVEL'){
        textColor='text-primary-purple'
        bgColor='bg-primary-purple-light'
    }
}
  return (
    <div className="lightShadow rounded-lg  w-full bg-white dark:bg-card-dark-bg  overflow-hidden">
      <img
        className="w-full  object-cover object-center bg-red-700"
        src={image}
        alt={name}
      />
      {/* card content starts  */}
      <div className="px-6 py-4 flex flex-col gap-2 text-sm">
        <div className="flex justify-between  items-center">
          <div className="flex gap2">
              {
                category?<p className="text-primary bg-primary-light px-4 py-1 font-semibold mr-2 rounded-full">{category}</p>:null
              }
              <p className={`${textColor } ${bgColor} rounded-full px-4 py-1  font-semibold mr-2`}>
                {difficulty}
              </p>
          </div>
          <div className="text-primary-danger cursor-pointer" onClick={()=>setLike(!like)}>

          {
            !like
            ?<FontAwesomeIcon icon={regular} />
            :<FontAwesomeIcon icon={faHeart}  />
          }
          </div>
        </div>
        {/* category ends  */}

        <div className=" ">
          <h3 className="font-bold text-xl transition-colors duration-300  cursor-pointer hover:text-primary ">{name}</h3>
          {
            description
            ?
              <p className="text-primary-text-normal text-sm dark:text-primary-text-normal-dark">{description}</p>
            : null
          }
        </div>
        {/* title ends  */}

        <div className=" ">
          <span className="text-primary-text-normal text-base font-bold dark:text-primary-text-normal-dark">
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow"/>
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow"/>
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow"/>
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow"/>
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow"/>
            <span className="text-primary-text-normal  pl-1 dark:text-primary-text-normal-dark">5/5</span>
          </span>
        </div>
        {/* star ends */}
          {
                !price?<hr />: null
            
          }
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-primary-green"/>
            <span>{time}</span>
          </div>
          {/* time and lectures ends  */}
          <div>
            <FontAwesomeIcon icon={faCalendar} className="text-primary-orange"/>
            <span className="ps-1">{lectures} lectures</span>
          </div>
        </div>
          {/* time and lectures ends  */}

      {price? <hr/> :null}
      
      <div className=" flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faFaceSmile} className="text-primary-green"/>
            <span>{mentors}</span>
          </div>
          <div className="text-primary-green font-bold text-xl">
            <FontAwesomeIcon icon={faIndianRupee} className="text-primary-green"/>
            <span className="ps-1 text-2xl">{price}</span>
          </div>
      {/* ${product.price ends} */}
        </div>
        {/* footer ends  */}
      </div>
    </div>
  
  )
}

export default Product