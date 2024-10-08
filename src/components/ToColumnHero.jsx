// TwoColumnHero.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const TwoColumnHero = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10 relative">
      {/* logos */}
      <div>
        <div
          data-aos='fade-right'
        >
          <img src="node.png" alt="#" className="absolute w-14 aspect-square right-1/2 bottom-14 z-50 hover:animate-shake " />
        </div>
      </div>
      {/* logos ends  */}
      {/* Left Column */}
      <div className="lg:w-3/5 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0 relative">
        <div>
          <img src="dots.png" alt="" className="absolute top-28 -left-32 w-52 -z-20 opacity-30 rotate-180" />
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold  text-primary-text-heading dark:text-white"
          data-aos='fade-right'
        >
          Explore Boundless Learning Anytime, Anywhere
        </h1>
        <p
          className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark"
          data-aos='fade-right'
        >
          Online learning and teaching marketplace with 5K+ courses & 10M
          students. Taught by experts to help you acquire new skills.
        </p>
        {/* discription ends  */}
        <div
          className="flex gap-4"
          data-aos='fade-right'
          data-aos-delay='100'
        >
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

        <Link
          to="/login"
          data-aos='fade-up'
        >
          <Button>Get Started</Button>
        </Link>
      </div>

      {/* Right Column - Full Image */}
      <div className="lg:w-2/5 flex justify-center relative">
        <div className="">
          <FontAwesomeIcon icon={faReact}
            className="absolute text-5xl text-primary font-extrabold left-0 top-28  hover:animate-spin-slow z-50"
            data-aos='fade-right'
            data-aos-duration='1800'
          />
        </div>
        <div>
          <img
            src="figma.svg"
            alt="figma"
            className="absolute w-10 right-32 top-10 z-[20] hover:animate-shake md:right-20"
            data-aos='fade-down'
          />

        </div>
        <div
          className="absolute right-0 top-52 z-50"
          data-aos='fade-left'
          data-aos-duration='1800'
        >
          <img src="nextjs.svg" alt="next" className="relative w-12 z-50 hover:animate-shake  rounded-full" />
          <div className="bg-white w-11 h-11 rounded-full absolute top-[2px] left-[2px] z-10"></div>
        </div>
        <div
          className="absolute left-0 bottom-20 z-50"
          data-aos='fade-up'
          data-aos-duration='1800'
          data-aos-offset='80'
        >
          <img src="node-js.svg" alt="node" className="relative w-12 z-50 hover:animate-shake  rounded-full" />
          {/* <div className="bg-white w-11 h-11 rounded-full absolute top-[2px] left-[2px] z-10"></div> */}
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
            src="/self-without-bg.png"
            alt=""
            className="mainImg rounded-bl-[166px] rounded-br-[180px] overflow-hidden  z-40 relative "
            data-aos='zoom-in'
            data-aos-duration='1000'
          />
        </div>
      </div>
    </section>
  );
};

export default TwoColumnHero;
