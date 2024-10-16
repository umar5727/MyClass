import React, { Children } from 'react'

const Popup = ({ text }) => {
  return (
    <div className=' hidden px-2 py-1 bg-primary/20 backdrop-blur-sm  text-gray-100 font-medium border text-xs border-primary shadow-sm absolute top-0 left-1/2 -translate-x-1/2  group-hover/wishlist:block group-hover/wishlist:-top-7 transition ease-jump duration-200 min-w-max z-40' >
      <div className=''>{text}</div>
    </div>
  )
}

export default Popup