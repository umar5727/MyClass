import React, { useEffect } from "react";
import PriceCard from "./PriceCard";
import TabsProduct from "./TabsProduct";
import { H2, Product } from "../../components";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
        {/* Left Column */}
        <div className="lg:w-4/6 xl:w-[70%] py-8  flex flex-col gap-2 justify-center items-center text-center lg:text-left lg:items-start md:py-0">
          <h1 className="text-3xl md:text-4xl font-bold  text-primary-text-heading dark:text-white">
            Start Your Carrer Now
          </h1>
          <img
            src="student6.jpg"
            alt="image"
            className=" w-full aspect-video rounded-lg"
          />
          {/* heading ends  */}

          <TabsProduct />
        </div>

        {/* Right Column -  */}
        <div className="lg:w-2/6 md:w-1/2  xl:w-[30%]  flex flex-col items-start lg:items-end gap-10 overflow-hidden">
          <div className="lg:pl-8 w-full">

          <PriceCard />
          </div>
          {/* PriceCard ends  */}

          <div className="w-full lg:pl-8">
            <H2 className="mb-5">Tranding Courses</H2>
            <Product
              name="Web Development"
              mentors="Umar"
              category="beginner"
              image="student4.jpg"
              time="3 Hours"
              lectures={12}
              price={1500}
            />
          </div>
          {/* tranding course ends  */}
        </div>
      </section>
      {/* more course starts  */}
      <div className="w-full grid sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 pt-5 mb-16">
        <Product
          name="Web Development"
          mentors="Umar"
          category="beginner"
          image="student4.jpg"
          time="3 Hours"
          lectures={12}
          price={1500}
        />
        <Product
          name="Web Development"
          mentors="Umar"
          category="beginner"
          image="student4.jpg"
          time="3 Hours"
          lectures={12}
          price={1500}
        />
        <Product
          name="Web Development"
          mentors="Umar"
          category="beginner"
          image="student4.jpg"
          time="3 Hours"
          lectures={12}
          price={1500}
        />
        <Product
          name="Web Development"
          mentors="Umar"
          category="beginner"
          image="student4.jpg"
          time="3 Hours"
          lectures={12}
          price={1500}
        />
      </div>
    </>
  );
};

export default ProductPage;
