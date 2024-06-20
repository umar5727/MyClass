import React from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCheckCircle,
  faStar,
  faTv,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SmallCard } from "../../components";

const InstructorDashboard = () => {
  const fields = [
    { name: "DashBoard", slug: "#" },
    { name: "My Courses", slug: "#" },
    { name: "Quiz", slug: "#" },
    { name: "Earnings", slug: "#" },
    { name: "Students", slug: "#" },
    { name: "Orders", slug: "#" },
    { name: "Reviews", slug: "#" },
    { name: "Edit Profile", slug: "#" },
    { name: "Payouts", slug: "#" },
    { name: "Settings", slug: "#" },
    { name: "Delete Profile", slug: "#" },
    { name: "Sign Out", slug: "#" },
  ];
  const cards = [
    {
      className: "bg-primary-yellow-light",
      number: 10,
      numberSpan: "K",
      title: "Online Courses",
      iconClassName: "text-primary-yellow  text-6xl",
      iconName: faTv,
    },
    {
      className: "bg-primary-purple-light",
      number: 60,
      numberSpan: "+",
      title: "Online Students",
      iconClassName: "text-primary-purple text-6xl",
      iconName: faUserTie,
    },
    {
      className: "bg-primary-info-light",
      number: 6,
      numberSpan: "+",
      title: "Certified Courses",
      iconClassName: "text-primary-info text-6xl",
      iconName: faCheckCircle,
    },
  ];
  return (
    <div className="mt-5 font-medium">
      <section className="top flex justify-between items-center">
        <div className="flex gap-4">
          <div>
            {/* image from backend */}
            <img src="userDemo.jpg" alt="" className="w-16 rounded-full" />
          </div>
          <div className="">
            <div className="flex gap-2 items-center ">
              <h3 className="text-2xl font-semibold">Umar Khan</h3>
              {/* //edit name as per backend data */}
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
            </div>
            <div className="flex gap-5">
              <div className="reviews">
                <FontAwesomeIcon
                  icon={faStar}
                  className="pr-2 text-primary-yellow"
                />
                <span>4.5</span> {/*backend data*/}
                /5.0
              </div>
              {/* reviews end s */}
              <div>
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  className="pr-2 text-primary-orange"
                />
                {/* enter the total number student enrolled from backend */}
                <span>12k </span>
                Enrolled Students
              </div>
              {/* enrolled students ends  */}
              <div>
                <FontAwesomeIcon
                  icon={faBook}
                  className="pr-2 text-primary-purple"
                />
                <span>25</span> {/* backend data */}
                courses
              </div>
              {/* courses end s */}
            </div>
          </div>
        </div>
        {/* left  ends*/}
        <div>
          <Button className="hover:text-white">Create a Course</Button>
        </div>
        {/* right end s */}
      </section>
      {/* top ends  */}
      <main className="grid grid-cols-4 gap-7 mt-7">
        <section className="leftSide ">
          <div className="flex flex-col gap-[10px] p-5 bg-primary-light rounded-md">
            {fields.map((field, index) => (
              <Link
                to={field.slug}
                className="py-2 px-4 transition-colors duration-500 text-primary hover:text-white hover:bg-primary rounded-md dark:text-white "
                key={index}
              >
                <div>{/* icons */}</div>
                <div>{field.name}</div>
              </Link>
            ))}
          </div>
        </section>
        {/* left side ends  */}
        <section className="rightSide col-span-3  rounded-md">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {cards.map((card, index) => {
              return (
                <SmallCard
                  className={card.className}
                  number={card.number}
                  numberSpan={card.numberSpan}
                  title={card.title}
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={card.iconName}
                    className={card.iconClassName}
                  />
                </SmallCard>
              );
            })}
          </div>
          {/* small cards ends  */}
        </section>
        {/* right side ends */}
      </main>
    </div>
  );
};

export default InstructorDashboard;
