import { faBasketShopping, faBell, faBook, faBorderAll, faCartShopping, faCheckCircle, faGear, faPencilSquare, faQuestionCircle, faSignOut, faStar, faTv, faUserGraduate, faUserGroup, } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect, useState } from 'react'
import { Button } from '../../components';
import { Link, NavLink, Outlet } from 'react-router-dom';
// redux import 
import { useSelector } from 'react-redux';

// images import 
import dummyUser from '/user/user-dummy.webp'
import bannerImg from '/studentBanner.jpg'

const DashboardLayout = () => {
    const userData = useSelector((state) => state.auth.userData)
    const [fields, setFields] = useState([])

    const userCourses = useSelector((state) => state.auth.userCoursesData)
    const [studentsCount, setStudentsCount] = useState(0)

    useEffect(() => {
        if (userData.role === 'instructor') {
            setFields([
                { name: "DashBoard", slug: "/user/InstructorDashboard", icon: faBorderAll, },
                { name: "My Courses", slug: "/user/InstructorDashboard/myCourses", icon: faBasketShopping },
                { name: "Students", slug: "/students", icon: faUserGroup },
                { name: "Reviews", slug: "/#", icon: faStar },
                { name: "Notification", slug: "/#", icon: faBell },
                { name: "Create Quiz", slug: "/#", icon: faQuestionCircle },
                // { name: "Create Course", slug: "/InstructorDashboard/createCourse" },
                { name: "Edit Profile", slug: "/user/InstructorDashboard/editProfile", icon: faPencilSquare },
                { name: "Remove Student", slug: "/#" },
                { name: "Sign Out", slug: "/user/signOut", icon: faSignOut },
            ])
        }
        else {
            setFields(
                [
                    { name: "Dashboard", slug: "/user/dashboard", icon: faBorderAll, },
                    { name: "My Courses", slug: "myCourses", icon: faBasketShopping },
                    { name: "Edit Profile", slug: "editProfile", icon: faPencilSquare },
                    { name: "Wishlist", slug: "wishlist", icon: faCartShopping },
                    { name: "Assignments", slug: "./", icon: faRectangleList },
                    { name: "Paused Courses", slug: "./", icon: faQuestionCircle },
                    { name: "Quiz", slug: "./", icon: faQuestionCircle },
                    { name: "Reviews", slug: "./", icon: faStar },
                    { name: "Notification", slug: "./", icon: faBell },
                    // { name: "Settings", slug: "/#", icon: faGear },
                    { name: "Sign Out", slug: "/user/signOut", icon: faSignOut },
                ]
            )
        }


    }, [userData.role])
    useEffect(() => {
        setStudentsCount(0)

        if (userCourses) {
            userCourses.map((course) => {

                setStudentsCount((prev) => prev + course.studentsCount)
            })
        }
    }, [userCourses])
    return (

        <div className="mt-5 font-medium">
            <div className='w-screen my-0 m-[calc(-50vw+50%)] '>

                <img src={bannerImg} alt="banner" className='w-full h-52 object-cover' />
            </div>
            {/* top starts  */}
            <section className="top flex justify-between items-center ">
                <div className="flex gap-4 items-center">
                    <div className='relative -top-4 w-28 aspect-square overflow-hidden rounded-full'>
                        {/* image from backend */}
                        {
                            userData.avatar ?
                                <img src={userData.avatar} alt="" className="w-full  " />
                                :
                                <div className="w-28 bg-white rounded-full flex justify-center items-center p-1 overflow-hidden aspect-square" >

                                    <img src={dummyUser} alt="user" className='w-full aspect-square' />
                                </div>
                        }
                    </div>
                    <div className="">
                        <div className="flex gap-2 items-center ">
                            <h3 className="text-3xl font-bold">
                                {/*  backend data */}
                                {
                                    userData ? <span className='capitalize'> {userData.fullName}</span> : <span>Umar Khan</span>
                                }
                            </h3>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                        </div>
                        <div className="flex gap-5">
                            {
                                userData.role === 'instructor' ?
                                    // {/* reviews starts */}
                                    <div className="flex gap-2 items-center ">
                                        <div className="flex items-center reviews">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="pr-2 text-primary-yellow"
                                            />
                                            <div className='font-bold'>

                                                {/*  backend data */}
                                                {
                                                    userData.reviews ? <span>{userData.reviews}</span> : <span>4.5</span>
                                                }
                                            </div>
                                            /5.0
                                        </div>
                            //  {/* reviews end s */}
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faUserGraduate}
                                                className="pr-2 text-primary-orange"
                                            />
                                            {/* backend data*/}

                                            {userData
                                                ?
                                                <span>{studentsCount} </span>
                                                :
                                                <span>12k </span>
                                            }
                                            Enrolled Students
                                        </div>
                                    </div>
                                    // {/* enrolled students ends  */}
                                    :
                                    ""
                            }
                            <div>
                                <FontAwesomeIcon
                                    icon={faBook}
                                    className="pr-2 text-primary-purple"
                                />
                                <span>{userCourses?.length}</span> {/* backend data */}
                                courses
                            </div>
                            {/* courses end s */}
                        </div>
                    </div>
                </div>
                {/* top left  ends*/}
                {/* top rigt starts */}
                <div className=''>

                    {
                        userData.role === 'instructor'
                            ?
                            <Link to='/user/InstructorDashboard/createCourse'
                            >
                                <Button className="hover:text-white">Create a Course</Button>
                            </Link>
                            :
                            <Link to="/user/dashboard/myCourses" >
                                <Button className="hover:text-white">View My Courses</Button>
                            </Link>
                    }
                </div>
                {/*top  right end s */}
            </section>
            {/* top ends  */}
            <main className="grid grid-cols-4 gap-7 mt-7 mb-10">
                <section className="leftSide ">
                    <div className="flex flex-col gap-[10px] p-5 bg-primary-light rounded-md">
                        {fields.map((field, index) => (
                            <NavLink
                                end        //'end' when the path ends exactly with that target path. 
                                to={field.slug}
                                className={({ isActive }) => `${isActive ? "bg-primary text-white" : ""} flex gap-2 items-center py-2 px-4 transition-colors duration-500 text-primary hover:text-white hover:bg-primary rounded-md dark:text-white `}
                                key={index}
                            >
                                <FontAwesomeIcon icon={field.icon} />
                                <div>{field.name}</div>
                            </NavLink>
                        ))}
                    </div>
                </section>
                {/* left side ends  */}

                <div className="col-span-3">

                    <Outlet />
                </div>
                {/* right side ends */}
            </main>
        </div>
    );
}

export default DashboardLayout