import React from "react";
import PriceCard from "./PriceCard";

const ProductPage = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
      {/* Left Column */}
      <div className="lg:w-[70%] py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
        <h1 className="text-3xl md:text-4xl font-bold  text-primary-text-heading dark:text-white">
          Fox Nymphs Grab Quick-jived Waltz. Brick Quiz Whangs
        </h1>
        <img src="student6.jpg" alt="image" className=" w-full aspect-video rounded-lg" />
        {/* heading ends  */}
      </div>

      {/* Right Column -  */}
      <div className="lg:w-[30%] flex justify-start lg:justify-end relative overflow-hidden">
        <PriceCard />
      </div>
    </section>
  );
};

export default ProductPage;
