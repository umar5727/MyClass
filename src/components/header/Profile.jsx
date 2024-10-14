import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// images import 
import dummyUser from '/user/user-dummy.webp'
import { useSignout } from "../../hooks/signout/useSignout";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  const [profile, setProfile] = useState(false);
  const { signOutHandler } = useSignout()

  let profileRef = useRef();
  let contentRef = useRef();
  const profileItem = [
    { name: "Edit Profile", slug: "/user/dashboard/editProfile" },
    { name: "My Courses", slug: "/user/dashboard/myCourses" },

  ];
  if (profile) {
    var className = "block";
  } else {
    var className = "hidden";
  }

  // const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const loginstatus = useSelector((state) => state.auth.status);


  useEffect(() => {
    // store ends
    const handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setProfile(false); //if click outside the profile container
      }
    };
    if (profile) {
      document.addEventListener("click", handler);
    }
    return () => {
      document.removeEventListener("click", handler);
    };
  }), [];
  // useEffect ends
  return (
    <section ref={profileRef} className="relative z-[90]">
      <div
        className=" rounded-full w-10 h-10 justify-center items-center cursor-pointer hover:opacity-80 overflow-hidden"
        onClick={() => setProfile(!profile)}
      >
        {
          userData?.avatar
            ?
            <img src={userData.avatar} alt="avatar" />
            :
            <img src={dummyUser} alt='avatar'
              className="w-full h-full text-white rounded-full"
            />
        }
      </div>

      {/* profile contents starts  */}

      <div
        ref={contentRef}
        className={`lightShadow w-64 rounded-lg py-4 px-2 absolute top-14 right-0 bg-white z-50 ${className} dark:bg-primarydark 
          `}
      >
        <div className="absolute -top-2 right-3 w-4 h-4 bg-white rotate-45 dark:bg-primarydark"></div>
        {/* before ends */}

        {/* profile header starts  */}
        <div className="flex gap-3 px-3">
          <div className="overflow-hidden w-10 h-10 rounded-full ">
            {
              userData?.avatar
                ?
                <img src={userData.avatar} alt="avatar" />
                :
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  className="w-full h-full  bg-primary text-white "
                />
            }
          </div>
          <div className="">
            <h2 className="font-bold text-primary capitalize">{userData.fullName}</h2>
            <p className="font-normal text-xs dark:text-gray-200">
              {userData.email}
            </p>
          </div>
        </div>
        {/* profile header ends  */}
        <div className="mt-4 mb-2 w-full h-[1px] bg-blue-800"></div>

        <ul className="">
          {profileItem.map((item, index) => (
            <li
              key={index}
              className=" rounded-md dark:text-gray-300 text-gray-700 overflow-hidden font-bold"
            >
              <NavLink
                to={item.slug}
                className="inline-block w-full px-4 py-2 hover:bg-primary-light  dark:hover:bg-primary-dark-hover transition hover:scale-105 dark:hover:text-white duration-300 ease-in-out"
                onClick={() => setProfile(!profile)}
              >
                <FontAwesomeIcon icon={faSignOut} className="me-2" />
                {item.name}
              </NavLink>
            </li>
          ))}
          <li
            className=" rounded-md font-medium dark:text-gray-300 text-gray-700 overflow-hidden "
            onClick={() => { setProfile(!profile); signOutHandler() }}
          >
            <Button
              className="inline-block w-full !px-4 py-2 hover:bg-primary-light !text-inherit dark:!text-gray-300 dark:hover:!text-white dark:hover:bg-primary-dark-hover hover:scale-105 !transition duration-300 ease-in-out border-none !justify-start !rounded-md"
            >
              <FontAwesomeIcon icon={faSignOut} className="me-2" />
              Log Out
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
