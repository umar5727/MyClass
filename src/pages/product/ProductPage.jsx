import React, { useEffect, useState } from "react";
import PriceCard from "./PriceCard";
import TabsProduct from "./TabsProduct";
import { H2, Product } from "../../components";
import { useParams } from "react-router-dom";
import { base_url } from "../../constants/constant";
import { useSelector } from "react-redux";
import { UserCourses } from "../../app/features/authSlice";

const ProductPage = () => {
  const coursesData = useSelector((state) => state.course.courseData)

  const [newCourse, setNewCourse] = useState(null)
  const [totalEnrolled, setTotalEnrolled] = useState(0)

  const { courseId } = useParams();  //getting coursee id from url

  // const coursesData = courses?.find((course) => course._id === courseId)

  const fetchData = async () => {
    try {
      const response = await fetch(base_url + `/courses/${courseId}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
      // const Data = 
      const { courseData } = await response.json();
      // setTotalEnrolled('')
      console.log('course find by id : ', courseData?.totalEnrolls)

      setNewCourse(courseData)
    } catch (error) {
      console.log('courses fetch error : ', error)
    }
  }
  console.log('new course data', coursesData)
  useEffect(() => {
    fetchData();

    window.scrollTo(0, 0);
  }, [!newCourse]);
  return (
    <>
      <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
        {/* Left Column */}
        <div className="lg:w-4/6 xl:w-[70%] py-8  flex flex-col gap-2 items-center text-center lg:text-left lg:items-start md:py-0">
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
        <div className="lg:w-2/6 md:w-1/2  xl:w-[30%]  flex flex-col items-start lg:items-end gap-10 overflow-hidden pt-12">
          <div className="lg:pl-8 w-full">

            <PriceCard
              duration={newCourse?.duration}
              totalLectures={newCourse?.totalLectures}
              department={newCourse?.department}
              totalEnrolled={totalEnrolled}
              courseId={courseId}

            />
          </div>
          {/* PriceCard ends  */}

          <div className="w-full lg:pl-8">
            <H2 className="mb-5">Tranding Courses</H2>
            <Product
              name="Web Development"
              mentors="Umar"
              category="beginner"
              image="../student4.jpg"
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
        {
          coursesData?.map((field) => (
            <div key={field._id}>
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
              />
            </div>
          ))
        }

      </div>
    </>
  );
};

export default ProductPage;
