import React from 'react'

const Courses = () => {

  const allCourses = [1, 2]
  return (
    <section>
      courses page
      <div className='flex flex-col gap-4'>
        {
          allCourses.map((field, index) => {
            return (
              <div
                key={field._id || index}
                className='flex justify-between items-center h-20 bg-red-600 px-5'
              >
                <div>
                  <div>image</div>
                  <div>name</div>
                </div>
                <div>courses enrolled</div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Courses