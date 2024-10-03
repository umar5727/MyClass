import { faClipboardCheck, faMedal, faTv, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SmallCard } from '../../components';
import { base_url } from '../../constants/constant';
import MyCourses from './MyCourses';
import { UserCourses } from '../../app/features/authSlice';


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
    const dispatch = useDispatch()

    const userData = useSelector((state) => state.auth.userData)
    const userCoursesData = useSelector((state) => state.auth.userCoursesData)


    const userProfile = async () => {
        try {
            const response = await fetch(base_url + '/users/userProfile', {
                mode: 'cors',
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ "userId": userData._id })
            })
            const courseData = await response.json();
            console.log('courses pipline : ', courseData)
            console.log('\n pipline : ', courseData.userCourses)
            // const courseData = response.courses
            const userCoursesData = courseData.userCourses
            dispatch(UserCourses({ userCoursesData }))

        } catch (error) {
            console.log('courses fetch error : ', error)
        }
    }

    // const userCourses = useSelector((state) => state.auth.userCoursesData)

    useEffect(() => {
        if (!userCoursesData) {
            // dispatch(UserCourses(''))
            userProfile()
        }

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

            <MyCourses
            // userCourses={userCourses}
            />


        </>
    );
}

export default Dashboard