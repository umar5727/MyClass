
import { faCalendar, faClock, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { InsideViewport } from '../InsideViewport';
// import { useSelector } from 'react-redux'

const Course = ({ courseData, withPrice, index }) => {

    const [like, setLike] = useState(false)
    var color;
    if (courseData.difficulty === 'All Level') {
        color =
            "text-primary-purple bg-primary-purple-light"

    } else if (courseData.difficulty === 'Beginner') {
        color =
            "text-primary-green bg-primary-green-light"

    } else if (courseData.difficulty === 'Intermediate') {
        color = "text-primary-info bg-primary-info-light"

    }
    var className;
    const handleScroll = () => {
    }
    useEffect(() => {
        // console.log('effect')
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className=''>
            <div

                className="group flex flex-col lightShadow rounded-lg  w-full bg-white dark:bg-card-dark-bg  overflow-hidden h-full duration-200 hover:rotate-1 ">
                <div className="overflow-hidden">
                    <img
                        className="w-full aspect-[16/12] object-cover object-center bg-red-700 duration-500 group-hover:scale-105"
                        src={courseData.thumbNail}
                        alt={courseData.title}
                    />
                </div>

                {/* card content starts  */}
                <Link key={index} to={`/MyClass/courses/${courseData._id}`} className='grow'>
                    <div className="px-6 py-4 flex flex-col gap-2 text-sm h-full">
                        <div className="flex justify-between  items-center">
                            <p className={`${color} ${color} rounded-lg px-4 py-1  font-semibold mr-2`}>
                                {courseData.difficulty}
                            </p>
                            <div className="text-primary-danger cursor-pointer" onClick={() => setLike(!like)}>

                                {
                                    !like
                                        ? <FontAwesomeIcon icon={faHeart} />
                                        : <FontAwesomeIcon icon={faHeart} />
                                }
                            </div>
                        </div>
                        {/* category ends  */}

                        <div className=" flex-1  ">

                            <h3 className="font-bold text-xl transition-colors duration-300  cursor-pointer hover:text-primary capitalize">{courseData.title}</h3>

                            <p className="text-primary-text-normal text-sm dark:text-primary-text-normal-dark">{courseData.shortDescription}</p>
                        </div>
                        {/* title ends  */}

                        <div className=" ">
                            <span className="text-primary-text-normal text-base font-bold dark:text-primary-text-normal-dark">
                                {/* ${courseData.price} */}
                                <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
                                <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
                                <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
                                <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
                                <FontAwesomeIcon icon={faStar} className="text-primary-yellow" />
                                <span className="text-primary-text-normal  pl-1 dark:text-primary-text-normal-dark">5/5</span>
                            </span>
                        </div>
                        {/* star ends */}
                        <div className='flex flex-col gap-2 justify-end'>
                            {
                                !withPrice ?
                                    <hr />
                                    :
                                    null
                            }
                            <div className=" flex justify-between  ">
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faClock} className="text-primary-green" />
                                    <span>5h 56m</span>
                                    {/* need to modify the total time  */}
                                </div>
                                {/* time ends  */}
                                <div>
                                    <FontAwesomeIcon icon={faCalendar} className="text-primary-orange" />
                                    <span className="ps-1">{courseData.totalLectures} lectures</span>
                                </div>
                            </div>
                            {
                                withPrice ?
                                    <div>

                                        <hr />

                                        <div className='flex justify-between'>
                                            <div className="flex items-center gap-1">
                                                <img src={courseData.instructor.avatar} alt="#" />
                                                {courseData.instructor.fullName}
                                            </div>
                                            <div>
                                                {
                                                    courseData.price === 0 ?
                                                        <span>FREE</span>
                                                        :
                                                        <span>{courseData.price}</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                        {/* footer ends  */}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Course