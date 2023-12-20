import React from "react";
import FeedbackCard from "./FeedbackCard";
import Button from "../Button";
import RatingCard from "./RatingCard";

const FeedbackContainer = () => {
  const feedback = [{}];
  return (
    <section className="mt-10 py-20 relative before:block before:absolute before:bg-primary-light before:left-2/4 before:-translate-x-2/4 before:w-screen before:h-full before:-z-10 before:content-[''] before:top-0  ">
      <div className="flex flex-col lg:flex-row ">
      <div className="flex justify-center items-center  gap-2 flex-col my-4 order-1 text-center lg:order-2 lg:text-left lg:items-start lg:w-2/5 p-4 lg:gap-4">
        <h2 className="text-3xl font-bold lg:text-4xl">
          Some valuable feedback from our students
        </h2>
        <p className="  text-sm text-primary-text-normal dark:text-primary-text-normal-dark">
          Supposing so be resolving breakfast am or perfectly. It drew a hill
          from me. Valley by oh twenty direct me so. Departure defective
          arranging rapturous did believe him all had supported. Family months
          lasted simple set nature vulgar him. Picture for attempt joy excited
          ten carried manners talking how.
        </p>
        <Button className="hover:text-white">          
          View Reviews 
        </Button>
      </div>
      {/* heading and discription ends  */}

      <div className="grid gap-5 md:grid-cols-2 order-2   lg:order-1 lg:w-3/5  lg:flex lg:flex-wrap  lg:gap-10">
        {/* <div className='flex gap-2'> */}
        <FeedbackCard className="shadow-custom lg:relative lg:top-28 lg:w-7/12 " />
        <FeedbackCard className=" shadow-custom lg:w-3/12 " />
        {/* </div> */}
        <div className="hidden lg:block lg:relative lg:w-7/12 h-fit lg:top-28 ">
          <RatingCard className="shadow-custom first-line: lg:w-fit lg:h-fit lg:float-right" />
        </div>
        <FeedbackCard className=" shadow-custom lg:w-4/12 lg:justify-self-end" />
      </div>
      </div>
    </section>
  );
};

export default FeedbackContainer;
