import { faBook, faCheckCircle, faStar, faTv, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, SmallCard } from '../../components';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const fields = [
        { name: "Profile", slug: "#" },
        { name: "Courses", slug: "#" },
        { name: "Quiz", slug: "#" },
        { name: "Notice", slug: "#" },
        { name: "Schedule", slug: "#" },
        { name: "Sign Out", slug: "#" },
    ];
    const cards = [
        {
            className: "bg-primary-yellow-light",
            number: 20,
            numberSpan: "+",
            title: "Online Courses",
            iconClassName: "text-primary-yellow  text-6xl",
            iconName: faTv,
        },
        {
            className: "bg-primary-purple-light",
            number: 60,
            numberSpan: "K",
            title: "Online Students",
            iconClassName: "text-primary-purple text-6xl",
            iconName: faUserTie,
        },
        {
            className: "bg-primary-info-light",
            number: 10,
            numberSpan: "+",
            title: "Certified Courses",
            iconClassName: "text-primary-info text-6xl",
            iconName: faCheckCircle,
        },
    ];

    const userData = useSelector((state) => state.auth.userData)
    useEffect(() => {


    }, [])

    return (
        <div className="mt-5 font-medium">
            <section className="top flex justify-between items-center">
                <div className="flex gap-4">
                    <div>
                        {/* image from backend */}
                        {
                            userData ?
                                <img src={userData.avatar} alt="" className="w-16 rounded-full" />
                                :
                                <img src="userDemo.jpg" alt="" className="w-16 rounded-full" />
                        }
                    </div>
                    <div className="">
                        <div className="flex gap-2 items-center ">
                            <h3 className="text-2xl font-semibold">
                                {/*  backend data */}
                                {
                                    userData ? <span className='capitalize'> {userData.fullName}</span> : <span>Umar Khan</span>
                                }
                            </h3>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                        </div>
                        <div className="flex gap-5">
                            <div className="reviews">
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="pr-2 text-primary-yellow"
                                />
                                {/*  backend data */}
                                {
                                    userData ? <span>{userData.reviews}</span> : <span>4.5</span>
                                }
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
                <div>
                    <Button className="hover:text-white">Create a Course</Button>
                </div>
                {/*top  right end s */}
            </section>
            {/* top ends  */}
            <main className="grid grid-cols-4 gap-7 mt-7 mb-10">
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
                <div className="col-span-3">
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
                    </section>
                    {/* small cards ends  */}
                    {/* all courses  */}
                    <section className="my-8">
                        <div className="p-4 border border-primary-text-normal rounded-md">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold">
                                        Most Selling Courses
                                    </h2>
                                </div>
                                <div>
                                    <Button className="hover:text-white !pt-1 !px-4 !font-medium border-none bg-primary-light">
                                        view all
                                    </Button>
                                </div>
                            </div>
                            {/* courses top ends  */}
                            {/* content starts  */}
                            <div className="overflow-x-auto">

                                {/* course content */}
                                <div className="pt-4 flex flex-col gap-2 ">
                                    {/* row */}
                                    <div className="flex p-2 py-3 bg-black rounded-md text-white">
                                        <div className="flex-grow">Course Name</div>
                                        <div className="px-5">Selling</div>
                                        <div className="px-5">Amount</div>
                                        <div className="px-5">Period</div>
                                        <div className="px-5">Action</div>
                                    </div>
                                    {/* row */}
                                    <div className="flex p-2 py-4  rounded-md border-b-2 border-border-dark">
                                        <div className="flex-grow">Course Name</div>
                                        <div className="px-5">Selling</div>
                                        <div className="px-5">Amount</div>
                                        <div className="px-5">Period</div>
                                        <div className="px-5">Action</div>
                                    </div>
                                    {/* row */}
                                    <div className="flex p-2 py-4  rounded-md border-b-2 border-border-dark">
                                        <div className="flex-grow">Course Name</div>
                                        <div className="px-5">Selling</div>
                                        <div className="px-5">Amount</div>
                                        <div className="px-5">Period</div>
                                        <div className="px-5">Action</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* right side ends */}
            </main>
        </div>
    );
}

export default Dashboard