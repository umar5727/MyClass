// TwoColumnHero.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import HeroContent from "../pages/home/HeroContent";

const TwoColumnHero = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10 relative">
      {/* logos */}
      <div>
        <div
          data-aos='fade-right'
        >
          <img src="node.png" alt="node" className="absolute w-14 aspect-square right-1/2 bottom-14 z-50 hover:animate-shake " />
        </div>
      </div>
      {/* logos ends  */}
      {/* Left Column */}
      <HeroContent />

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
