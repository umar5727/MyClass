import { faClipboard, faClock, faFile, faPager, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../components/Button";
import { H2 } from "../../components";
import { base_url } from "../../constants/constant";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PriceCard = ({ duration, department, totalLectures = 0, price = 0, totalEnrolled = 1, courseId, }) => {
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()

  const handleClick = async () => {

    if (!userData?._id) {
      navigate("/MyClass/login")
    }
    try {
      const response = await fetch(base_url + `/enrolled/addEnrolled`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'userId': userData?._id })
      })
      const enrolled = await response.json();
      console.log('courses res : ', enrolled)


    } catch (error) {
      console.log('courses fetch error : ', error)
    }

  }

  const features = [
    {
      svg: faUser,
      title: 'Enrolled',
      content: `${totalEnrolled} students`
    },
    {
      svg: faClock,
      title: 'Duration',
      content: `${duration} hours`
    },
    {
      svg: faPager,
      title: 'Lectures',
      content: totalLectures
    },
    {
      svg: faFile,
      title: 'Categories',
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
  return (
    <div className=" border border-primary-border-light w-full xl:w-[350px] rounded-lg h-fit text-primary-text-heading dark:text-primary-text-normal-dark text-base font-normal ">
      <H2 className=" ml-6 mt-4 dark:text-white">Course Features</H2>
      {/* fretures starts  */}
      <div className="m-6">
        {
          features.map((item, index) => (

            <div className="flex items-center gap-2 pb-2 " key={index}>
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
      <div className="bg-primary-light flex flex-col justify-center items-center px-4 py-8">
        <div className="dark:text-white mb-2 w-full flex justify-between px-2">
          <h3 className="pr-1 font-bold text-2xl ">Price:</h3>
          <span className="text-2xl font-medium" >
            {
              price ?
                <span>₹ {price}</span>
                :
                <span className="text-green-500 pl-2">FREE</span>
            }

          </span>

        </div>
        <div
          onClick={handleClick}
        >

          <Button
            className="w-full hover:text-white mt-2"
          >ENROLL COURSE</Button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
