import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import { Button } from '../../components'


const Courses = () => {


  const allCourses = useSelector((state) => state.course.courseData)

  useEffect(() => {

  })

  return (
    <section className='border border-primary-text-normal rounded-md '>

      {/* header start  */}
      <div className="flex justify-between border-b  border-primary-text-normal p-5 mb-5">
        <div>
          <h2 className="text-2xl font-semibold">
            All Courses
          </h2>
        </div>
        <div>
          <Button className="hover:text-white !pt-1 !px-4 !font-medium border-none bg-primary-light">
            view all
          </Button>
        </div>
      </div>
      {/* header ends  */}

      {/* row */}
      <div className='flex flex-col p-5'>


        {/* second header starts  */}
        <div className="grid grid-cols-6 justify-center py-3 bg-black rounded-md text-white ">
          <div className="col-span-3 ps-4">Course Name</div>

          <div className="text-center">Duration</div>

          <div className="text-center">Total Enrolleds</div>
          {/* <div className="text-center">Total Lectures</div> */}

          {/* <div className="px-5">Period</div> */}
          <div className="text-center">Published ON</div>
        </div>
        {/* second header ends  */}

        {/* content starts  */}
        <div className='flex flex-col gap-4 '>
          {
            allCourses?.map((field, index) => {
              return (
                <div
                  key={field._id || index}
                  className='grid grid-cols-6 rounded-md p-2 py-4 border-b-2 border-primary-light hover:bg-primary-light'
                >
                  <div className='col-span-3 flex gap-2 items-center'>
                    <div className='w-[100px] '>
                      <img src={field.thumbNail} alt={field.title} className='rounded-md' />
                    </div>
                    <div>{field.title}</div>
                  </div>
                  <div className='text-center'>{field.duration}</div>
                  <div className='text-center'>{field.duration}</div>
                  <div className='text-center'>{field.createdAt.slice(0, 10)}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Courses