import React from "react";
import CategoryCard from "./CategoryCard";
import { H1 } from "../../components";

const CategoryContainer = () => {
  const category = [
    {
      heading: "Data Science",
      image: "data-science.svg",
      totalCourses: 15,
      bgColor: "bg-primary-green-light",
    },
    {
      heading: "IT & Software",
      image: "online.svg",
      totalCourses: 35,
      bgColor: "bg-primary-info-light",
    },
    {
      heading: "Engineering",
      image: "engineering.svg",
      totalCourses: 15,
      bgColor: "bg-primary-purple-light",
    },
    {
      heading: "Web Development",
      image: "coding.svg",
      totalCourses: 35,
      bgColor: "bg-primary-info-light",
    },
    {
      heading: "Finance",
      image: "profit.svg",
      totalCourses: 15,
      bgColor: "bg-primary-yellow-light",
    },
    {
      heading: "Marketing",
      image: "marketing.svg",
      totalCourses: 35,
      bgColor: "bg-primary-green-light",
    },
    {
      heading: "Accounting",
      image: "account.svg",
      totalCourses: 15,
      bgColor: "bg-primary-info-light",
    },
    {
      heading: "IT & Software",
      image: "student2.jpg",
      totalCourses: 35,
      bgColor: "bg-primary-purple-light",
    },
  ];
  return (
    <section className="my-10">
      <div className="text-center mb-5">
        <H1 className="md:!text-5xl mb-5">Choose a Categories</H1>
        <p>Perceived end knowledge certainly day sweetness why cordially</p>
      </div>
      <div className="grid  md:grid-col-2 lg:grid-cols-4 gap-5 ">
        {category.map((item) => (
          <CategoryCard
            heading={item.heading}
            image={item.image}
            totalCourses={item.totalCourses}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryContainer;
