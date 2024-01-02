import React, { useState } from "react";
import Button from "../Button";
import ProductCard from "../ProductCard";

const Tabs = () => {
  const [tabState, setTabState] = useState(0);
  const tabInfo = [
    {
      title: "Web Design",
      content: [
        {
          id: 1,
          name: "Sketch from A to Z: for app designer",
          description: "Proposal indulged no do sociable he throwing settling.",
          // price: 19.99,
          image: "student1.jpg",
          category: "All level",
          color: {
            primary: "text-primary-purple",
            light: "bg-primary-purple-light",
          },
          lectures: 15,
        },
        {
          id: 2,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points ",
          // price: 19.99,
          image: "student2.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 65,
        },
        {
          id: 3,
          name: "Create a Design System in Figma",
          description:
            "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
          // price: 19.99,
          image: "student4.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 40,
        },
        {
          id: 4,
          name: "Deep Learning with React-Native",
          description:
            "Far advanced settling say finished raillery. Offered chiefly farther",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 115,
        },
        {
          id: 5,
          name: "Sketch from A to Z: for app designer",
          description: "Proposal indulged no do sociable he throwing settling.",
          // price: 19.99,
          image: "student2.jpg",
          category: "All level",
          color: {
            primary: "text-primary-purple",
            light: "bg-primary-purple-light",
          },
          lectures: 15,
        },
        {
          id: 6,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points ",
          // price: 19.99,
          image: "student4.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 65,
        },
        {
          id: 7,
          name: "Create a Design System in Figma",
          description:
            "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 40,
        },
        {
          id: 8,
          name: "Deep Learning with React-Native",
          description:
            "Far advanced settling say finished raillery. Offered chiefly farther",
          // price: 19.99,
          image: "student2.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 115,
        },
      ],
    },
    // web design ends
    {
      title: "Development",
      content: [
        {
          id: 9,
          name: "JavaScript: Full Understanding",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "All level",
          color: {
            primary: "text-primary-purple",
            light: "bg-primary-purple-light",
          },
          lectures: 15,
        },
        {
          id: 10,
          name: "Bootstrap 5 From Scratch",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Intermediate",
          color: {
            primary: "text-primary-info",
            light: "bg-primary-info-light",
          },
          lectures: 15,
        },
        {
          id: 11,
          name: "Deep Learning with React-Native",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 12,
          name: "The Complete Web Development in python",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 13,
          name: "JavaScript: Full Understanding",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student2.jpg",
          category: "All level",
          color: {
            primary: "text-primary-purple",
            light: "bg-primary-purple-light",
          },
          lectures: 15,
        },
        {
          id: 14,
          name: "Bootstrap 5 From Scratch",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student2.jpg",
          category: "Intermediate",
          color: {
            primary: "text-primary-info",
            light: "bg-primary-info-light",
          },
          lectures: 15,
        },
        {
          id: 15,
          name: "Deep Learning with React-Native",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student2.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 16,
          name: "The Complete Web Development in python",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student2.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
      ],
    },
    // Development ends
    {
      title: "Graphic Design",
      content: [
        {
          id: 17,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student4.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 18,
          name: "Learn Invision",
          description:
            "Arrived off she elderly beloved him Course regard to up he hardly.",
          // price: 19.99,
          image: "student4.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 82,
        },
        {
          id: 19,
          name: "Create a Design System in Figma",
          description:
            "Rooms oh fully taken by worse do. Points afraid but may end.",
          // price: 19.99,
          image: "student4.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 32,
        },
        {
          id: 20,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student4.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 21,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 22,
          name: "Learn Invision",
          description:
            "Arrived off she elderly beloved him Course regard to up he hardly.",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 82,
        },
        {
          id: 23,
          name: "Create a Design System in Figma",
          description:
            "Rooms oh fully taken by worse do. Points afraid but may end.",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 32,
        },
        {
          id: 24,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
      ],
    },
    // Graphic Design ends
    {
      title: "Marketing",
      content: [
        {
          id: 25,
          name: "Digital Marketing Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 82,
        },
        {
          id: 26,
          name: "Sketch from A to Z: for app designer",
          description: "Proposal indulged no do sociable he throwing settling.",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 27,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 28,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
      ],
    },
    // Marketing ends
    {
      title: "Finance",
      content: [
        {
          id: 29,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 30,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 31,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
        {
          id: 32,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image: "student1.jpg",
          category: "Beginner",
          color: {
            primary: "text-primary-green",
            light: "bg-primary-green-light",
          },
          lectures: 15,
        },
      ],
    },
  ];
  const handleClick = (index) => {
    setTabState(index);
    // console.log(index);
  };
  return (
    <section className="mt-14 mb-12">
      <div className="text-center  dark:text-white pb-5">
        <h2 className="text-3xl font-bold ">Most Popular Courses</h2>
        <p>Choose from hundreds of courses from specialist organizations</p>
      </div>
      <div
        className={`flex flex-wrap gap-2 w-full lg:justify-center bg-primary-light py-4 rounded-lg text-primary`}
      >
        {tabInfo.map((item, index) => (
          <Button
            className={
              index === tabState
                ? " text-white bg-primary font-semibold border-none cursor-auto"
                : "bg-transparent font-semibold hover:text-black hover:bg-primary-light border-none"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 pt-5">
        {tabInfo.map((item, index) => {
          if (index === tabState) {
            return item.content.map((course) => {
              return <ProductCard key={course.id} product={course} />;
            });
          } else {
            return;
          }
        })}
      </div>
    </section>
  );
};

export default Tabs;
