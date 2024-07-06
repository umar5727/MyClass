import { faBasketShopping, faBell, faBook, faBorderAll, faCartShopping, faCheckCircle, faClipboardCheck, faFolder, faGear, faMedal, faPencilSquare, faQuestionCircle, faSignOut, faStar, faTv, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, SmallCard } from '../../components';
import { NavLink, Outlet } from 'react-router-dom';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';


const Dashboard = () => {

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

        <>
            {/* small card starts  */}
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
        </>
    );
}

export default Dashboard