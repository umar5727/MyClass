import React from 'react'

const Li = ({children, className=''}) => {
  return (
    <li className={`w-full py-3 rounded-lg transition-colors duration-300 hover:bg-primary-light hover:text-primary cursor-pointer dark:text-dark-nav dark:hover:text-primary ${className}`}>{children}</li>
  )
}

export default Li