import React, { useEffect, useState } from 'react'
import { Button } from '../../components'
import { useSelector } from 'react-redux'

const MyCourses = ({ }) => {

    const userData = useSelector((state) => state.auth.userData)
    const userCourses = useSelector((state) => state.auth.MyCourses)
    const allCourses = useSelector((state) => state.course.courseData)
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        if (!userCourses) {
            setCourses('')
        } else {

            setCourses(
                // allCourses.filter((course) => userCourses?.includes(course._id))
                allCourses.filter(num => userCourses.some(course => course.course === num._id)).map((num) => {
                    const matchingCourse = userCourses.find(course => course.course === num._id);
                    return { ...num, enrolledDate: matchingCourse.createdAt };
                })
            )
        }

    }, [userCourses])

    return (
        <section className="">

            <div className="border border-primary-text-normal rounded-md">
                <div className="flex justify-between border-b  border-primary-text-normal p-4">
                    <div>
                        <h2 className="text-2xl font-semibold">
                            Enrolled Courses
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
                <div className=" mt-4">

                    {/* course content */}
                    <div className="px-4 flex flex-col ">
                        {/* row */}
                        <div className="grid grid-cols-1 lg:grid-cols-6 justify-center py-3 bg-black rounded-md text-white ">
                            <div className="col-span-3 ps-4">Course Name</div>
                            <div className="hidden lg:block text-center">Total Lectures</div>
                            {

                                userData.role != 'instructor' ?
                                    <div className="hidden lg:block text-center">Duration</div>
                                    :
                                    <div className="hidden lg:block text-center">Total Enrolleds</div>
                            }
                            {/* <div className="px-5">Period</div> */}
                            <div className="hidden lg:blocks text-center">Starting Date</div>
                        </div>
                        {/* coursess header ends */}
                        {/* row */}

                        <div className="flex flex-col mb-2">
                            {
                                userData.role != 'instructor' ?
                                    courses?.map((course, index) => (
                                        <div key={index} className='grid grid-cols-1 lg:grid-cols-6  rounded-md p-1 lg:p-2 py-4   border-b-2 border-primary-light hover:bg-primary-light'>
                                            <div className="lg:col-span-3 flex gap-2 items-center">
                                                <div className='w-[50px] lg:w-[100px] flex-0'>
                                                    <img src={course.thumbNail} alt="thumbnail" className='w-full rounded-md' />
                                                </div>
                                                <div className='font-bold grow'>
                                                    <div>
                                                        {course.title}

                                                    </div>
                                                    <div>
                                                        {/* {course.} */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* course title ends  */}
                                            <div className="hidden lg:flex items-center justify-center "> {course.totalLectures} </div>
                                            <div className="hidden lg:flex items-center justify-center">{course.duration} h</div>
                                            <div className=" hidden lg:flex items-center justify-center">{course.enrolledDate?.slice(0, 10)}</div>
                                        </div>
                                    ))
                                    :
                                    userCourses?.map((course, index) => (

                                        <div key={index} className='grid grid-cols-1 lg:grid-cols-6  rounded-md  p-2 py-4   border-b-2 border-primary-light hover:bg-primary-light'>
                                            <div className="col-span-3 flex gap-2 items-center">
                                                <div className='w-[100px] '>
                                                    <img src={course.thumbNail} alt="thumbnail" className='rounded-md' />
                                                </div>
                                                <div className='font-bold'>
                                                    <div>
                                                        {course.title}

                                                    </div>
                                                    <div>
                                                        {/* {course.} */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* course title ends  */}
                                            <div className="hidden lg:flex items-center justify-center"> {course.totalLectures} </div>
                                            <div className=" hidden lg:flex items-center justify-center">{course.studentsCount}</div>

                                            <div className=" hidden lg:flex items-center justify-center">{course.createdAt.slice(0, 10)}</div>
                                        </div>
                                    )

                                    )
                            }
                        </div>


                    </div>
                </div>
            </div>
        </section >
    )
}

export default MyCourses