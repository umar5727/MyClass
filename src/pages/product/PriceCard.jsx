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
      const response = await fetch(base_url + `/enrolled/${courseId}/addEnrolled`, {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
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
      content: `${totalEnrolled} Students`
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
  return (
    <div className=" border border-primary-border-light w-full xl:w-[350px] rounded-lg h-fit text-primary-text-heading dark:text-primary-text-normal-dark text-xl font-normal ">
      <H2 className=" dark:text-white text-center pt-6">Course Features</H2>
      {/* fretures starts  */}
      <div className="p-6 flex flex-col gap-3">
        {
          features.map((item, index) => (

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
      <div className="bg-primary-light flex flex-col justify-between items-center py-4">
        <div className="dark:text-white w-full flex justify-between px-6 mb-4">
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
        <div
          onClick={handleClick}
          className="w-full px-6"
        >
          <Button
            className="w-full hover:text-white"
          >ENROLL COURSE</Button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
