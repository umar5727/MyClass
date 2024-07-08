import React from 'react'
import { Button } from '../../components'

const MyCourses = () => {

    const courses = [
        { name: 'web dev', image: '/MyClass/public/python.jpg', progress: 20, totalLectures: 40, completedLectures: 10, action: 'continue', },
        { name: 'web dev', image: '/MyClass/public/python.jpg', progress: 20, totalLectures: 40, completedLectures: 10, action: 'continue', }
    ]

    return (
        <section className="my-8">

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
                            <div className="text-center">Completed Lectures</div>
                            {/* <div className="px-5">Period</div> */}
                            <div className="text-center">Action</div>
                        </div>
                        {/* coursess header ends */}
                        {/* row */}
                        <div className="flex flex-col mb-2">
                            {
                                courses.map((course, index) => (
                                    <div key={index} className='grid grid-cols-6  rounded-md  p-2 py-4   border-b-2 border-primary-light hover:bg-primary-light'>
                                        <div className="col-span-3 flex gap-2 items-center">
                                            <div className='w-[100px] '>
                                                <img src="/MyClass/python.jpg" alt="thumbnail" className='rounded-md' />
                                            </div>
                                            <div className='font-bold'>
                                                <div>
                                                    {course.name}

                                                </div>
                                                <div>
                                                    {course.progress}
                                                </div>
                                            </div>
                                        </div>
                                        {/* course title ends  */}
                                        <div className="flex items-center justify-center"> {course.totalLectures} </div>
                                        <div className=" flex items-center justify-center">{course.completedLectures}</div>
                                        <div className=" flex items-center justify-center">{course.action}</div>
                                    </div>
                                ))
                            }
                        </div>


                    </div>
                </div>
            </div>
        </section >
    )
}

export default MyCourses