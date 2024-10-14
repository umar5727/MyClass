import { faClipboardCheck, faMedal, faTv, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SmallCard } from '../../components';
import { base_url } from '../../constants/constant';
import MyCourses from './MyCourses';
import { UserCourses } from '../../app/features/authSlice';


const Dashboard = () => {

    const userCourses = useSelector((state) => state.auth.MyCourses)
    const cards = [
        {
            className: "bg-primary-yellow-light",
            number: userCourses?.length,
            numberSpan: "",
            title: "Total Courses Enrolled",
            iconClassName: "text-primary-yellow  text-6xl",
            iconName: faTv,
        },
        {
            className: "bg-primary-purple-light",
            number: 0,
            numberSpan: "",
            title: "Complete lessons",
            iconClassName: "text-primary-purple text-6xl",
            iconName: faClipboardCheck,
        },
        {
            className: "bg-primary-info-light",
            number: 0,
            numberSpan: "+",
            title: "Achieved Certificates",
            iconClassName: "text-primary-info text-6xl",
            iconName: faMedal,
        },
    ];

    return (

        <section className='flex flex-col gap-8'>
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
            {/* My courses  */}

            <MyCourses
            // userCourses={userCourses}
            />


        </section>
    );
}

export default Dashboard