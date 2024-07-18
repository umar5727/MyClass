// TwoColumnHero.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const TwoColumnHero = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
      {/* logos */}
      <div>
        <div>
          <img src="node.png" alt="#" className="absolute w-14 right-1/2 bottom-14 z-50 hover:animate-shake " />
        </div>
      </div>
      {/* logos ends  */}
      {/* Left Column */}
      <div className="lg:w-3/5 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0 relative">
        <div>
          <img src="dots.png" alt="" className="absolute top-28 -left-32 w-52 -z-20 opacity-30 rotate-180" />
        </div>
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
        <Link to="/MYClass/login">
          <Button>Get Started</Button>
        </Link>
      </div>

      {/* Right Column - Full Image */}
      <div className="lg:w-2/5 flex justify-center relative overflow-hidden">
        <div className="">
          <FontAwesomeIcon icon={faReact} className="absolute text-5xl text-primary font-extrabold  left-0 top-28  hover:animate-spin-slow z-40" />
        </div>
        <div>
          <img src="figma.svg" alt="#" className="absolute w-10 right-32 top-10 z-50 hover:animate-shake" />
        </div>
        <div>
          <img src="angular.svg" alt="#" className="absolute w-14 right-0 top-52 z-50 hover:animate-shake" />
        </div>
        {/* logos ends */}
        <div>

        </div>
        <div className="relative  ">
          <figure className=" absolute -left-28 -bottom-12 figure z-0 dark:opacity-60">
            <img
              src="figure.svg"
              alt=""
              className=" h-full z-0 relative w-full"
            />
          </figure>
          <img
            src="/MyClass/self-without-bg.png"
            alt=""
            className="mainImg rounded-bl-[166px] rounded-br-[180px] overflow-hidden  z-40 relative "
          />
        </div>
      </div>
    </section>
  );
};

export default TwoColumnHero;
