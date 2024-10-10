import React from 'react'

const LoadingButton = () => {
  return (
    <div className='flex gap-1 items-center min-w-fit font-semibold' >
      <div className='w-6 h-6 rounded-full border-[4px] border-white border-t-[4px] border-t-blue-500 animate-spin '></div>
      <span>Loading . . .</span>
    </div>
  )
}

export default LoadingButton