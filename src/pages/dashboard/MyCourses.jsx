import React, { useEffect } from 'react'
import { Button } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { base_url } from '../../constants/constant'
import { UserCourses } from '../../app/features/authSlice'
const MyCourses = ({ }) => {
    const dispatch = useDispatch()

    const userData = useSelector((state) => state.auth.userData)
    const userCoursesData = useSelector((state) => state.auth.userCoursesData)

    const accessToken = localStorage.getItem('accessToken')
    const userProfile = async () => {
        try {
            const response = await fetch(base_url + '/users/userProfile', {
                mode: 'cors',
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ "userId": userData._id, accessToken })
            })
            const courseData = await response.json();

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


    const userCourses = useSelector((state) => state.auth.userCoursesData)
    // console.log(userCourses[0].thumbNail, userCourses[0].title)
    console.log(userData.role)
    return (
        <section className="">

            <div className="border border-primary-text-normal rounded-md">
                <div className="flex justify-between border-b  border-primary-text-normal p-4">
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
                <div className=" mt-4">

                    {/* course content */}
                    <div className="px-4 flex flex-col ">
                        {/* row */}
                        <div className="grid grid-cols-6 justify-center py-3 bg-black rounded-md text-white ">
                            <div className="col-span-3 ps-4">Course Name</div>
                            <div className="text-center">Total Lectures</div>
                            {

                                userData.role != 'instructor' ?
                                    <div className="text-center">Completed Lectures</div>
                                    :
                                    <div className="text-center">Total Enrolleds</div>
                            }
                            {/* <div className="px-5">Period</div> */}
                            <div className="text-center">Starting Date</div>
                        </div>
                        {/* coursess header ends */}
                        {/* row */}

                        <div className="flex flex-col mb-2">
                            {
                                userData.role != 'instructor' ?
                                    userCourses?.map((course, index) => (
                                        <div key={index} className='grid grid-cols-6  rounded-md  p-2 py-4   border-b-2 border-primary-light hover:bg-primary-light'>
                                            <div className="col-span-3 flex gap-2 items-center">
                                                <div className='w-[100px] '>
                                                    <img src={course.courseDetails.thumbNail} alt="thumbnail" className='rounded-md' />
                                                </div>
                                                <div className='font-bold'>
                                                    <div>
                                                        {course.courseDetails.title}

                                                    </div>
                                                    <div>
                                                        {/* {course.} */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* course title ends  */}
                                            <div className="flex items-center justify-center"> {course.courseDetails.totalLectures} </div>
                                            <div className=" flex items-center justify-center">0</div>
                                            <div className=" flex items-center justify-center">{course.createdAt.slice(0, 10)}</div>
                                        </div>
                                    ))
                                    :
                                    userCourses?.map((course, index) => (
                                        // { console.log(course.title) }
                                        <div key={index} className='grid grid-cols-6  rounded-md  p-2 py-4   border-b-2 border-primary-light hover:bg-primary-light'>
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
                                            <div className="flex items-center justify-center"> {course.totalLectures} </div>
                                            <div className=" flex items-center justify-center">{course.studentsCount}</div>

                                            <div className=" flex items-center justify-center">{course.createdAt.slice(0, 10)}</div>
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