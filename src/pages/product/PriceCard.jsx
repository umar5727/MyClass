import { faClipboard, faClock, faFile, faPager, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { H2 } from "../../components";
import { useSelector } from "react-redux";
import { useEnrollFetch } from "../../hooks/enrollFetch/useEnrollFetch";

const PriceCard = ({ duration, department, totalLectures = 0, price = 0, totalEnrolled = 0, courseId, }) => {
  const [enrolleds, setEnrolleds] = useState(totalEnrolled)
  const userData = useSelector((state) => state.auth.userData)
  const userCourses = useSelector((state) => state.auth.MyCourses)




  const features = [
    {
      svg: faUser,
      title: 'Enrolled',
      content: `${enrolleds || totalEnrolled} Students`
    },
    {
      svg: faClock,
      title: 'Duration',
      content: `${duration} Hours`
    },
    {
      svg: faPager,
      title: 'Lectures',
      content: totalLectures
    },
    {
      svg: faFile,
      title: 'Department',
      content: department
    },
    {
      svg: faTags,
      title: 'Tags',
      content: 'webDev, JavaScript'
    },
    {
      svg: faClipboard,
      title: 'Instructor',
      content: 'Ethan Dean'
    },
  ];

  const { status, enrollFetch } = useEnrollFetch(courseId) //custom hook

  useEffect(() => {
    if (status === 'success') {

      setEnrolleds((prev) => prev + 1)
    }

  }, [status])

  return (
    <div className=" border border-primary-border-light w-full xl:w-[350px] rounded-lg h-fit text-primary-text-heading dark:text-primary-text-normal-dark text-xl font-normal ">
      <H2 className=" dark:text-white text-center pt-6">Course Features</H2>
      {/* fretures starts  */}
      <div className="p-6 flex flex-col gap-3">
        {
          features?.map((item, index) => (

            <div className="flex items-center gap-3 " key={index}>
              <FontAwesomeIcon icon={item.svg} className="text-sm dark:text-white" />
              <span>
                <strong className="dark:text-white">{item.title} : </strong> {item.content}
              </span>
            </div>
          ))
        }
      </div>
      {/* features ends  */}

      {/* price starts  */}
      <div className="bg-primary-light flex flex-col justify-between items-center py-4  lg:py-6">
        <div className="dark:text-white w-full flex justify-between px-6 mb-4 lg:mb-6">
          <h3 className="pr-1 font-bold text-2xl ">Price:</h3>
          <span className="text-2xl font-medium" >
            {
              price ?
                <span>₹ {price}</span>
                :
                <span className="text-green-500 ">FREE</span>
            }

          </span>

        </div>
        {
          userCourses?.some(enroll => enroll.course === courseId) ?
            <div
              // onClick={}
              className="w-full px-6"
            >
              <Button
                className="w-full hover:text-white"
              >Start Learning</Button>
            </div>
            :
            <div
              onClick={enrollFetch}
              className="w-full px-6"
            >
              <Button
                className="w-full hover:text-white"
              >ENROLL COURSE</Button>
            </div>
        }
      </div>
    </div>
  );
};

export default PriceCard;
