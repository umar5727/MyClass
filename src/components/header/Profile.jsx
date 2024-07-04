import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../app/features/authSlice";
const Profile = () => {
  const [profile, setProfile] = useState(false);
  // const [user, setUser] = useState

  let profileRef = useRef();
  let contentRef = useRef();
  const profileItem = [
    { name: "Edit Profile", slug: "#" },
    { name: "My Courses", slug: "#" },
    { name: "Sign Out", slug: "/MyClass/singOut" }, //need to add the react router fetch request  or alternate request to logout the user 
  ];
  if (profile) {
    var className = "block";
  } else {
    var className = "hidden";
  }

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);
  const loginstatus = useSelector((state) => state.auth.status);

  useEffect(() => {

    // store ends
    const handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setProfile(false); //if click outside the profile container

        console.log(
          "\n user from profile :- " +
          user +
          "\n login Status : " +
          loginstatus,
        );
      }
    };
    if (profile) {
      document.addEventListener("mousedown", handler);

      console.log(
        "\n user from profile :- " + user + "\n login Status : " + loginstatus,
      );
    }
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }),
    [user, loginstatus, navigate];
  // useEffect ends
  return (
    <section ref={profileRef} className="relative">
      <div
        className=" bg-primary rounded-full w-10 h-10 justify-center items-center cursor-pointer hover:opacity-80 overflow-hidden"
        onClick={() => setProfile(!profile)}
      >
        {
          user.avatar
            ?
            <img src={user.avatar} alt="#" />
            :
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="w-full h-full  bg-primary text-white rounded-full"
            />
        }
      </div>

      {/* profile contents starts  */}

      <div
        ref={contentRef}
        className={`lightShadow w-64 rounded-lg py-4 px-2 absolute top-14 right-0 bg-white z-50 ${className} dark:bg-black 
          `}
      >
        <div className="absolute -top-2 right-3 w-4 h-4 bg-white rotate-45 dark:bg-black"></div>
        {/* before ends */}

        {/* profile header starts  */}
        <div className="flex gap-3 px-3">
          <div className="overflow-hidden w-10 h-10 rounded-full">
            <FontAwesomeIcon
              icon={faFaceSmile}
              className="w-full h-full  bg-primary text-white "
            />
          </div>
          <div className="">
            <h2 className="font-bold dark:text-white capitalize">{user.fullName}</h2>
            <p className="font-normal text-xs dark:text-primary-grayText">
              {user.email}
            </p>
          </div>
        </div>
        {/* profile header ends  */}
        <hr className="mt-4 mb-2 " />
        <ul className="">
          {profileItem.map((item, index) => (
            <li
              key={index}
              className=" rounded-lg font-medium text-primary-grayText"
            >
              <NavLink
                to={item.slug}
                className="inline-block w-full px-4 py-2 hover:bg-primary-light hover:text-primary dark:hover:bg-primary-dark-hover transition-all duration-300 ease-in-out"
                onClick={() => setProfile(!profile)}
              >
                <FontAwesomeIcon icon={faFaceSmile} className="me-2" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
