import React from 'react'
import MultiStepForm from '../../components/multiStepForm/MultiStepForm'

const CreateCourse = () => {
    return (
        <div className='mt-10 mb-16'>
            {/* <div className='w-screen my-0 m-[calc(-50vw+50%)] mb-10 '>
                <img src="/MyClass/public/studentBanner.jpg" alt="banner" className='w-full h-52 object-cover' />
            </div> */}
            <div className="bg-[url('../public/studentBanner.jpg')] h-52 object-cover bg-no-repeat flex justify-center items-center bg-cover w-screen my-0 m-[calc(-50vw+50%)] mb-5 font-extrabold text-5xl text-white">
                Create  a new Course
            </div>
            <div className='flex justify-center mb-5'>
                <p className='w-2/3 text-center'>Use this interface to add a new Course to the portal. Once you are done adding the item it will be reviewed for quality. If approved, your course will appear for sale and you will be informed by email that your course has been accepted.</p>
            </div>
            <div className='relative p-10 outline outline-1 outline-gray-300 dark:outline-gray-600 rounded-md'>

                <MultiStepForm />
            </div>

        </div>
    )
}

export default CreateCourse