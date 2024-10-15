import React, { useEffect, useState } from "react";
import PriceCard from "./PriceCard";
import TabsProduct from "./TabsProduct";
import { H2, Product } from "../../components";
import { useParams } from "react-router-dom";
import { base_url } from "../../constants/constant";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const coursesData = useSelector((state) => state.course.courseData)

  const [newCourse, setNewCourse] = useState(null)
  const { courseId } = useParams();  //getting coursee id from url


  const fetchData = async () => {
    try {
      const response = await fetch(base_url + `/courses/${courseId}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
      const { courseData } = await response.json();
      setNewCourse(courseData)
    } catch (error) {
      console.log('product not found : ', error)
    }
  }

  useEffect(() => {
    fetchData();

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="flex flex-col items-center gap-6 lg:items-start lg:gap-8 lg:flex-row w-full h-max my-10 ">
        {/* Left Column */}
        <div className="lg:w-4/6 xl:w-[70%] py-8 flex flex-col gap-2 items-center text-center lg:text-left lg:items-start md:py-0 flex-grow">
          <h1 className="text-3xl md:text-4xl font-bold  text-primary-text-heading dark:text-white">
            {newCourse?.title}
          </h1>
          <img
            src={newCourse?.thumbNail}
            alt="image"
            className=" w-full aspect-video rounded-lg"
          />
          {/* heading ends  */}

          <TabsProduct />
        </div>

        {/* Right Column -  */}
        <div className="lg:w-2/6 md:w-1/2  xl:w-[30%]  flex flex-col items-start lg:items-end gap-10 pt-12 justify-center ">
          <div className="w-full">

            <PriceCard
              duration={newCourse?.duration}
              totalLectures={newCourse?.totalLectures}
              department={newCourse?.department}
              totalEnrolled={newCourse?.totalEnrolls}
              courseId={courseId}

            />
          </div>
          {/* PriceCard ends  */}

          <div className="w-full ">
            <H2 className="mb-5 text-center">Tranding Courses</H2>

            {
              coursesData ?
                <Product
                  name={coursesData[0].title}
                  mentors={coursesData[0].instructor}
                  mentorImg={coursesData[0].thumbNail}
                  category={coursesData[0].department}
                  difficulty={coursesData[0].difficulty}
                  description={coursesData[0].shortDescription}
                  image={coursesData[0].thumbNail}
                  time={coursesData[0].duration}
                  lectures={coursesData[0].totalLectures}
                  price={coursesData[0].price}
                  height="h-fit"
                />
                : ''
            }
          </div>
          {/* tranding course ends  */}
        </div>
      </section>

      {/* more course starts  */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 2xl:grid-cols-4 pt-5 mb-16">
        {
          coursesData?.map((field) => (
            <div key={field._id} className="w-full">
              <Product
                name={field.title}
                mentors={field.instructor}
                mentorImg={field.thumbNail}
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
          ))
        }

      </div>
    </>
  );
};

export default ProductPage;
