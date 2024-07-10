import { faClipboardCheck, faMedal, faTv, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, SmallCard } from '../../components';

import MyCourses from './MyCourses';


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
            {/* My courses  */}
            <MyCourses />

        </>
    );
}

export default Dashboard