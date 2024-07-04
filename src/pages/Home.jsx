import React, { useEffect } from "react";

import TwoColumnHero from "../components/ToColumnHero";

import {
  Add,
  Carousel,
  FeedbackContainer,
  SmallCardContainer,
  Tabs,
} from "../components";
import Loading from "../components/Loading";
const Home = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    // Add more products as needed
    {
      id: 2,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 3,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 4,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 5,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 6,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 7,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
    {
      id: 8,
      name: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      price: 19.99,
      image: "https://placekitten.com/300/200", // Replace with your product image URL
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className=" dark:bg-boot-dark ">
      {/* Home */}
      <TwoColumnHero />

      {/* <div className="flex flex-wrap justify-center mt-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div> */}

      <SmallCardContainer />

      <Tabs />
      {/* advirtisment  */}
      <Add />

      <Loading /> {/* testing  */}

      {/* trending courses        */}

      <section>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Our Trending Courses</h1>
          <p className="text-primary-text-normal dark:text-primary-text-normal-dark">
            Check out most 🔥 courses in the market
          </p>
        </div>
        <Carousel />
      </section>

      {/* feedback  */}
      <FeedbackContainer />
    </main>
  );
};

export default Home;
