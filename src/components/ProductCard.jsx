// ProductCard.js

import { faHeart as regular, faClock, } from "@fortawesome/free-regular-svg-icons";

import { faCalendar, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  const [like, setLike] = useState(false);
  return (
    <div

      className="group lightShadow rounded-lg  w-full bg-white dark:bg-card-dark-bg  overflow-hidden  hover:rotate-1">
      <div className="overflow-hidden">
        <img
          className="w-full aspect-[16/12] object-cover object-center bg-red-700 duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* card bottom starts  */}
      <div className="px-6 py-4 flex flex-col gap-2 text-sm">
        <div className="flex justify-between  items-center">
          <p className={`${product.color.primary} ${product.color.light} rounded-lg px-4 py-1  font-semibold mr-2`} key={index}>
            {product.category}
          </p>
          <div className="text-primary-danger cursor-pointer" onClick={() => setLike(!like)}>

            {
              !like
                ? <FontAwesomeIcon icon={regular} />
                : <FontAwesomeIcon icon={faHeart} />
            }
          </div>
        </div>
        {/* category ends  */}

        <div className=" ">
          <Link to='/course'>
            <h3 className="font-bold text-xl transition-colors duration-300  cursor-pointer hover:text-primary ">{product.name}</h3>
          </Link>
          <p className="text-primary-text-normal text-sm dark:text-primary-text-normal-dark">{product.description}</p>
        </div>
        {/* title ends  */}

        <div className=" ">
          <span className="text-primary-text-normal text-base font-bold dark:text-primary-text-normal-dark">
            {/* ${product.price} */}
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
            <span className="text-primary-text-normal  pl-1 dark:text-primary-text-normal-dark">5/5</span>
          </span>
        </div>
        {/* star ends */}
        <hr />
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-primary-green" />
            <span>5h 56m</span>
          </div>
          {/* time ends  */}
          <div>
            <FontAwesomeIcon icon={faCalendar} className="text-primary-orange" />
            <span className="ps-1">{product.lectures} lectures</span>
          </div>
        </div>
        {/* footer ends  */}
      </div>
    </div>
  );
};

export default ProductCard;
