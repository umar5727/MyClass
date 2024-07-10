import React, { useEffect } from "react";
import { H1, PogressBar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Course from "../../components/course/Course";
import { useSelector } from "react-redux";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("email :- " + email);
    // fetch starts
    // const response = fetch("http://localhost:8000/api/v1/dashboard/getStudentCourses", {
    //   mode: "cors",
    //   method: "GET",
    //   credentials: 'include',
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   // },
    //   // body: JSON.stringify({ email, password }),
    // });

  }, []);
  const courseData = useSelector((state) => state.course.courseData)
  console.log(courseData)
  return (
    <>
      {
        courseData ?
          <Course
            courseData={courseData[0]}
          />
          :
          null
      }
      <section className="my-20">
        <H1 className="!text-2xl md:!text-4xl mb-14 w-5/6 mx-auto">
          MyClass, built specifically for the education centers which is
          dedicated to teaching and involve learners.
        </H1>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="grid grid-cols-2 gap-5">
            <img src="student3.webp" alt="" className="rounded-xl" />
            <div></div>
            <img src="student4.jpg" alt="" className="col-span-2 rounded-xl" />
          </div>
          <img src="student6.jpg" alt="" className="h-full rounded-xl" />

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br bg-orange-500 col-span-2 rounded-xl flex justify-center text-center items-center px-10">
              <h3 className="text-2xl font-bold">
                “Be open to new ideas and approaches. Develop your
                problem-solving skills.”
              </h3>
            </div>
            <img src="student3.webp" alt="" className="rounded-xl" />
            <div></div>
          </div>
        </div>
      </section>
      {/* grid ends  */}
      <article>
        <div className="lg:w-4/6">
          <h3 className="text-2xl md:text-3xl font-bold  text-primary-text-heading dark:text-white mb-2 mt-5">
            About MYClass
          </h3>
          <p className="text-base font-medium md:text-base  text-primary-text-normal dark:text-primary-text-normal-dark">
            How promotion excellent curiosity yet attempted happiness Gay
            prosperous impression had conviction For every delay death ask to
            style Me mean able my by in they Extremity now strangers contained.
          </p>
        </div>
        <section className="flex flex-col gap-6 lg:gap-0 lg:flex-row py-10">
          {/* left Column - Full Image */}
          <div className="lg:w-2/5 flex justify-center relative overflow-hidden">
            <div className="relative  ">
              <img
                src="/MyClass/self-without-bg.png"
                alt=""
                className="mainImg rounded-b-full overflow-hidden  z-40 relative "
              />
            </div>
          </div>

          {/* right Column */}
          <div className="lg:w-3/5 py-8  flex flex-col gap-8 justify-center items-center  lg:text-left lg:items-start md:py-0">
            <h3 className="text-xl md:text-2xl font-bold text-center text-primary-text-heading dark:text-white">
              35,000+ happy students joined with us to achieve their goals
            </h3>
            <p className="text-base font-medium md:text-lg  text-primary-text-normal dark:text-primary-text-normal-dark">
              How promotion excellent curiosity yet attempted happiness Gay
              prosperous impression had conviction For every delay death ask to
              style Me mean able my by in they Extremity now strangers contained
              breakfast him discourse additions Sincerity collected contented
              led now perpetual extremely forfeited
            </p>
            <p className="text-base font-medium md:text-lg  text-primary-text-normal dark:text-primary-text-normal-dark">
              Happiness prosperous impression had conviction For every delay in
              they Extremity now strangers contained breakfast him discourse
              additions Sincerity collected contented led now perpetual
              extremely forfeited
            </p>
            {/* discription ends  */}
            <div className="text-base font-medium md:text-base  text-primary-text-normal dark:text-primary-text-normal-dark">
              <div className="flex gap-2 items-center ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary-green"
                />
                <span>Setup and installation takes less time</span>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary-green"
                />
                <span>Setup and installation takes less time</span>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary-green"
                />
                <span>Setup and installation takes less time</span>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary-green"
                />
                <span>Setup and installation takes less time</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 w-full">
              <PogressBar progres={85} />
              <PogressBar progres={90} />
              <PogressBar progres={96} />
              <PogressBar progres={75} />
            </div>
          </div>
        </section>
      </article>
      {/* <FontAwesomeIcon icon={faGoogle} /> */}
    </>
  );
};

export default AboutUs;
