// TwoColumnHero.js

import React from "react";
import NumberDisplay from "./NumberDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const TwoColumnHero = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
      {/* Left Column */}
      <div className="lg:w-3/5 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold  text-primary-text-heading dark:text-white">
          Explore Boundless Learning Anytime, Anywhere
        </h1>
        <p className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark">
          Online learning and teaching marketplace with 5K+ courses & 10M
          students. Taught by experts to help you acquire new skills.
        </p>
        {/* discription ends  */}
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="dark:text-white" />
            <span className="text-primary-text-normal font-medium dark:text-primary-text-normal-dark">
              Learn with experts
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="dark:text-white" />
            <span className="text-primary-text-normal font-medium dark:text-primary-text-normal-dark">
              Get certificate
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="dark:text-white" />
            <span className="text-primary-text-normal font-medium dark:text-primary-text-normal-dark">
              Get membership
            </span>
          </div>
        </div>
        {/* <button className=" bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 hover:text-white ">
          Get Started
          
        </button> */}
        <Button >
          Get Started
        </Button>
      </div>

      {/* Right Column - Full Image */}
      <div className="lg:w-2/5 flex justify-center relative overflow-hidden">
        <div className="relative  ">
          <figure className=" absolute -left-28 -bottom-12 figure z-0">
            <img
              src="/blob-haikei3.svg"
              alt=""
              className="w-full h-full z-0 relative"
            />
          </figure>
          <img
            src="/self-without-bg.png"
            alt=""
            className="mainImg rounded-b-full overflow-hidden  z-40 relative "
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnHero;
