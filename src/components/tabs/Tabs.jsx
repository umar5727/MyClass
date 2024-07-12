import React, { useState } from "react";
import Button from "../Button";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import Course from "../course/Course";

const Tabs = () => {
  const courseData = useSelector((state) => state.course.courseData)
  const [tabState, setTabState] = useState(0);
  const [indexData, setIndexData] = useState(courseData?.filter(
    (course) =>
      course.department.toLowerCase().includes('web design')
  ))

  const tabs = [
    {
      id: 0,
      title: 'web design'
    },
    {
      id: 1,
      title: 'development'
    },
    {
      id: 2,
      title: 'graphic design'
    },
    {
      id: 3,
      title: 'finance'
    },
  ]
  // const tabInfo = [
  //   {
  //     title: "Web Design",
  //     content: [
  //       {
  //         id: 1,
  //         name: "Sketch from A to Z: for app designer",
  //         description: "Proposal indulged no do sociable he throwing settling.",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "All level",
  //         color: {
  //           primary: "text-primary-purple",
  //           light: "bg-primary-purple-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 2,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points ",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 65,
  //       },
  //       {
  //         id: 3,
  //         name: "Create a Design System in Figma",
  //         description:
  //           "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
  //         // price: 19.99,
  //         image: "student4.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 40,
  //       },
  //       {
  //         id: 4,
  //         name: "Deep Learning with React-Native",
  //         description:
  //           "Far advanced settling say finished raillery. Offered chiefly farther",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 115,
  //       },
  //       {
  //         id: 5,
  //         name: "Sketch from A to Z: for app designer",
  //         description: "Proposal indulged no do sociable he throwing settling.",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "All level",
  //         color: {
  //           primary: "text-primary-purple",
  //           light: "bg-primary-purple-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 6,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points ",
  //         // price: 19.99,
  //         image: "student4.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 65,
  //       },
  //       {
  //         id: 7,
  //         name: "Create a Design System in Figma",
  //         description:
  //           "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 40,
  //       },
  //       {
  //         id: 8,
  //         name: "Deep Learning with React-Native",
  //         description:
  //           "Far advanced settling say finished raillery. Offered chiefly farther",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 115,
  //       },
  //     ],
  //   },
  //   // web design ends
  //   {
  //     title: "Development",
  //     content: [
  //       {
  //         id: 9,
  //         name: "JavaScript: Full Understanding",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "All level",
  //         color: {
  //           primary: "text-primary-purple",
  //           light: "bg-primary-purple-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 10,
  //         name: "Bootstrap 5 From Scratch",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Intermediate",
  //         color: {
  //           primary: "text-primary-info",
  //           light: "bg-primary-info-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 11,
  //         name: "Deep Learning with React-Native",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 12,
  //         name: "The Complete Web Development in python",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 13,
  //         name: "JavaScript: Full Understanding",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "All level",
  //         color: {
  //           primary: "text-primary-purple",
  //           light: "bg-primary-purple-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 14,
  //         name: "Bootstrap 5 From Scratch",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "Intermediate",
  //         color: {
  //           primary: "text-primary-info",
  //           light: "bg-primary-info-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 15,
  //         name: "Deep Learning with React-Native",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 16,
  //         name: "The Complete Web Development in python",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student2.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //     ],
  //   },
  //   // Development ends
  //   {
  //     title: "Graphic Design",
  //     content: [
  //       {
  //         id: 17,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student4.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 18,
  //         name: "Learn Invision",
  //         description:
  //           "Arrived off she elderly beloved him Course regard to up he hardly.",
  //         // price: 19.99,
  //         image: "student4.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 82,
  //       },
  //       {
  //         id: 19,
  //         name: "Create a Design System in Figma",
  //         description:
  //           "Rooms oh fully taken by worse do. Points afraid but may end.",
  //         // price: 19.99,
  //         image: "student4.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 32,
  //       },
  //       {
  //         id: 20,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student4.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 21,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 22,
  //         name: "Learn Invision",
  //         description:
  //           "Arrived off she elderly beloved him Course regard to up he hardly.",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 82,
  //       },
  //       {
  //         id: 23,
  //         name: "Create a Design System in Figma",
  //         description:
  //           "Rooms oh fully taken by worse do. Points afraid but may end.",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 32,
  //       },
  //       {
  //         id: 24,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //     ],
  //   },
  //   // Graphic Design ends
  //   {
  //     title: "Marketing",
  //     content: [
  //       {
  //         id: 25,
  //         name: "Digital Marketing Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 82,
  //       },
  //       {
  //         id: 26,
  //         name: "Sketch from A to Z: for app designer",
  //         description: "Proposal indulged no do sociable he throwing settling.",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 27,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 28,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //     ],
  //   },
  //   // Marketing ends
  //   {
  //     title: "Finance",
  //     content: [
  //       {
  //         id: 29,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 30,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 31,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //       {
  //         id: 32,
  //         name: "Graphic Design Masterclass",
  //         description:
  //           "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
  //         // price: 19.99,
  //         image: "student1.jpg",
  //         category: "Beginner",
  //         color: {
  //           primary: "text-primary-green",
  //           light: "bg-primary-green-light",
  //         },
  //         lectures: 15,
  //       },
  //     ],
  //   },
  // ];

  const handleClick = (index) => {

    setTabState(index);

    switch (index) {
      case 0:
        setIndexData(courseData?.filter(
          (course) =>
            course.department.toLowerCase().includes('web design')
        )
        )

        break;
      case 1:
        setIndexData(courseData?.filter(
          (course) =>
            course.department.toLowerCase().includes('development')
        ))
        break;
      case 2:
        setIndexData(courseData?.filter(
          (course) =>
            course.department.toLowerCase().includes('graphic design')
        ))
        break;
      case 3:
        setIndexData(courseData?.filter(
          (course) =>
            course.department.toLowerCase().includes('finance')
        ))
        break;
      default:
        setIndexData(null)
    }
  };


  return (
    <section className="mt-24 mb-14">
      <div className="text-center  dark:text-white pb-5">
        <h2 className="text-3xl font-bold ">Most Popular Courses</h2>
        <p>Choose from hundreds of courses from specialist organizations</p>
      </div>
      <div
        className={`flex flex-wrap gap-2 w-full lg:justify-center bg-primary-light py-3 rounded-lg text-primary lg:gap-12`}
      >

        {
          tabs.map((item) => (
            <div
              className={
                `${item.id === tabState
                  ? " text-white bg-primary font-semibold border-none cursor-auto "
                  : "bg-transparent font-semibold hover:text-black hover:bg-primary-light border-none"}  px-4 py-2 rounded-md cursor-pointer dark:hover:text-white capitalize lg:px-8`
              }
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </div>
          ))
        }
      </div>
      <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 pt-5" >
        {
          indexData?.map((course, index) => (
            <Course courseData={course} key={index} withPrice={false} />
          ))
        }
        {/* {
          tabInfo.map((item, index) => {
            if (index === tabState) {
              return item.content.map((course, index) => {
                return <ProductCard index={index} product={course} />;
              });
            } else {
              return;
            }
          })
        } */}
      </div>
    </section>
  );
};

export default Tabs;
