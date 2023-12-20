import React from 'react'
import Button from './Button'

const Add = () => {
  return (
    <section className='flex flex-col items-start gap-4 bg-primary-info rounded-lg text-white p-4 lg:flex-row lg:items-center lg:py-10 lg:px-20 mb-12'>
        <div className='lg:w-3/5'>
            <h2 className='text-2xl font-bold'>
                Become an Instructor!
            </h2>
            <p className='text-base pt-4'>
                Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
        </div>
        <div className='lg:w-2/5 h-inherit flex-1 flex justify-center '>
            <Button children='Start Teaching Today' className='bg-transparent
            border border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-black dark:hover:text-black font-medium ' />
        </div>
    </section>
  )
}

export default Add