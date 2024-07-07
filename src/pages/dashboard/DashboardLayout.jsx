import { faBasketShopping, faBell, faBook, faBorderAll, faCartShopping, faCheckCircle, faClipboardCheck, faFolder, faGear, faMedal, faPencilSquare, faQuestionCircle, faSignOut, faStar, faTv, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, SmallCard } from '../../components';
import { NavLink, Outlet } from 'react-router-dom';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';

const DashboardLayout = () => {

    const fields = [
        { name: "Dashboard", slug: "/MyClass/dashboard", icon: faBorderAll, },
        { name: "My Subscriptions", slug: "/#", icon: faRectangleList },
        { name: "My Courses", slug: "/MyClass/dashboard/myCourses", icon: faBasketShopping },
        { name: "Course Resume", slug: "/#", icon: faQuestionCircle },
        { name: "Quiz", slug: "/#", icon: faQuestionCircle },
        { name: "Wishlist", slug: "/#", icon: faCartShopping },
        { name: "Reviews", slug: "/#", icon: faStar },
        { name: "Edit Profile", slug: "/#", icon: faPencilSquare },
        { name: "Notification", slug: "/#", icon: faBell },
        { name: "Settings", slug: "/#", icon: faGear },
        { name: "Sign Out", slug: "/#", icon: faSignOut },
    ];
    const cards = [
        {
            className: "bg-primary-yellow-light",
            number: 20,
            numberSpan: "+",
            title: "Total Courses",
            iconClassName: "text-primary-yellow  text-6xl",
            iconName: faTv,
        },
        {
            className: "bg-primary-purple-light",
            number: 60,
            numberSpan: "K",
            title: "Complete lessons",
            iconClassName: "text-primary-purple text-6xl",
            iconName: faClipboardCheck,
        },
        {
            className: "bg-primary-info-light",
            number: 10,
            numberSpan: "+",
            title: "Achieved Certificates",
            iconClassName: "text-primary-info text-6xl",
            iconName: faMedal,
        },
    ];

    const userData = useSelector((state) => state.auth.userData)
    useEffect(() => {


    }, [])

    return (

        <div className="mt-5 font-medium">
            <div className='w-screen my-0 m-[calc(-50vw+50%)] '>

                <img src="/MyClass/public/studentBanner.jpg" alt="banner" className='w-full h-52 object-cover' />
            </div>
            {/* top starts  */}
            <section className="top flex justify-between items-center ">
                <div className="flex gap-4 items-center">
                    <div className='relative -top-4'>
                        {/* image from backend */}
                        {
                            userData.avatar ?
                                <img src={userData.avatar} alt="" className="w-32 rounded-full" />
                                :
                                <img src="/MyClass/public/userDemo.jpg" alt="" className="w-32 rounded-full" />
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
                            {/* reviews starts */}
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
                            {/* reviews end s */}
                            <div>
                                <FontAwesomeIcon
                                    icon={faUserGraduate}
                                    className="pr-2 text-primary-orange"
                                />
                                {/* backend data*/}

                                {userData
                                    ?
                                    <span>{userData.totalEnrolled} </span>
                                    :
                                    <span>12k </span>
                                }
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
                {/* top left  ends*/}
                {/* top rigt starts */}
                <div className=''>

                    {
                        userData.role === 'instructor'
                            ?
                            <div>
                                <Button className="hover:text-white">Create a Course</Button>
                            </div>
                            :
                            <div >
                                <Button className="hover:text-white">View My Courses</Button>
                            </div>
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