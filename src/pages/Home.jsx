import React, { useEffect, useState } from "react";

import TwoColumnHero from "../components/ToColumnHero";

import {
  Add,
  Carousel,
  FeedbackContainer,
  SmallCardContainer,
  Tabs,
} from "../components";

const Home = () => {

  useEffect(() => {
    if (!window.scrollTo) return;

    window.scrollTo(0, 0);

  }, []);

  return (

    <main className=" dark:bg-boot-dark ">

      {/* Home */}
      <TwoColumnHero />

      <SmallCardContainer />

      <Tabs />

      <Add />  {/* advirtisment  */}

      <section>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Our Trending Courses</h1>
          <p className="text-primary-text-normal dark:text-primary-text-normal-dark">
            Check out most 🔥 courses in the market
          </p>
        </div>
        <Carousel />
      </section>

      <FeedbackContainer />    {/* feedback  */}
    </main>

  );
};

export default Home;
