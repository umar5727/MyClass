import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Course from "../course/Course";

const Tabs = () => {
  const courseData = useSelector((state) => state.course.courseData)
  const [tabState, setTabState] = useState(0);
  const [indexData, setIndexData] = useState(null)

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

  // console.log(indexData);

  useEffect(() => {
    if (!indexData) {

      setIndexData(courseData?.filter(
        (course) =>
          course.department.toLowerCase().includes('web design')
      )
      )
    }
  }, [indexData, courseData])
  return (
    <section
      className="mt-24 mb-14"
      data-aos='fade-up'
    >
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
          (indexData?.length) ?
            indexData.map((course, index) => (
              <Course courseData={course} key={course._id} withPrice={false} />
            ))
            :
            <div className="pb-20 col-span-4 text-center dark:text-white text-3xl">More Courses are comming soon...</div>

        }

      </div>
    </section>
  );
};

export default Tabs;
