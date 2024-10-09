// Carousel.js

import React, { useEffect, useState } from "react";

import Product from "../cards/Product";
import { useSelector } from "react-redux";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlider, setAutoSlider] = useState(true);
  const [duration, setDuration] = useState("500ms");
  const [width, setwidth] = useState(100);
  // const items = [
  //   {
  //     name: "JavaScript: Full first",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Development",
  //     time: "3h",
  //     lectures: 15,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full second",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "4h",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full third",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "4h",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full fourth",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "fourth",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full fifth",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "4h",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full sixth",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "4h",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full first",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Development",
  //     time: "3h",
  //     lectures: 15,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full second",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "4h",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full third",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "4h",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  //   {
  //     name: "JavaScript: Full fourth",
  //     image: "student2.jpg",

  //     // price: 19.99,

  //     difficulty: "Beginner",
  //     category: "Design",
  //     time: "fourth",
  //     lectures: 25,
  //     price: 300,
  //     mentors: "Umar Khan",
  //   },
  // ];

  const coursesData = useSelector((state) => state.course.courseData)
  console.log('crousel :', coursesData)
  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
  //   console.log(currentIndex);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
  // };


  const stopAutoSlider = () => {
    setAutoSlider(false);
  };
  const startAutoSlider = () => {
    setAutoSlider(true);
  };

  useEffect(() => {
    let slider;
    let delay = 2000;
    var x = window.matchMedia("(min-width: 768px)");
    var lg = window.matchMedia("(min-width: 1024px");
    if (lg.matches) {
      setwidth(33.33);
    } else if (x.matches) {
      setwidth(50);
    } else {
      setwidth(100);
    }

    if (autoSlider) {
      if (currentIndex === 7) {
        setDuration("0ms");
        delay = 0;
        setCurrentIndex(0);
      } else {
        setDuration("500ms");
        delay = 3000;
      }
      slider = setInterval(() => {
        setCurrentIndex(currentIndex + 1);
      }, delay);
    }

    return () => {
      clearInterval(slider);
    };
  }, [autoSlider, currentIndex]);
  return (
    <div
      onMouseEnter={stopAutoSlider}
      onMouseLeave={startAutoSlider}
      className="max-w-full mx-auto relative"
    >
      <div className="overflow-hidden pb-10 rounded-lg">
        <div
          className={`flex transition-transform  ease-in-out transform `}
          style={{
            transform: `translateX(${-currentIndex * width}%) `,
            transitionDuration: `${duration}`,
          }}
        >
          {
            coursesData?.map((field, index) => {
              if (index >= 10) {
                return;
              }
              return (
                <div
                  key={field._id}
                  className="shadow-more w-full md:w-3/6 lg:w-2/6 px-3 flex-shrink-0 "
                >
                  <Product
                    courseId={field._id}
                    name={field.title}
                    // mentors={field.instructor}
                    // mentorImg={field.thumbNail}
                    category={field.department}
                    difficulty={field.difficulty}
                    description={field.shortDescription}
                    image={field.thumbNail}
                    time={field.duration}
                    lectures={field.totalLectures}
                    price={field.price}
                    discountPrice={field.discountPrice}
                  />
                </div>
              )
            }
            )}
        </div>
      </div>
      {/*            
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8249;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &#8250;
      </button> */}
    </div>
  );
};

export default Carousel;
