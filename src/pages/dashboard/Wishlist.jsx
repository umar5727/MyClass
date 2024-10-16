import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../../components'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.auth.wishlist)
  const courses = useSelector((state) => state.course.courseData)

  const [wishlistData, setWishlistData] = useState(null)
  useEffect(() => {
    setWishlistData(courses.filter((course) =>
      wishlist.includes(course._id)
    ))
  }, [wishlist])
  // console.log('wishlist data :: ', wishlist)
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

              <div className="text-center">Total Enrolleds</div>

              {/* <div className="px-5">Period</div> */}
              <div className="text-center"> Price</div>
            </div>
            {/* coursess header ends */}
            {/* row */}

            <div className="flex flex-col mb-2">
              {
                wishlistData?.map((course, index) => (
                  // {console.log(course.title)}
                  <div
                    key={index}
                    className=' rounded-md  p-2 py-4 border-b-2 border-primary-light hover:bg-primary-light'

                  >
                    <Link
                      to={`/courses/${course._id}`}
                      className='grid grid-cols-6 '
                    >

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
                      <div className=" flex items-center justify-center">{course.difficulty}</div>
                      <div className=" flex items-center justify-center">{course.discountPrice || 'FREE'}</div>
                    </Link>
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

export default Wishlist