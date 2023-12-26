import React from 'react'

const H1 = ({children, className=''}) => {
  return (
    <h1 className={`text-4xl  font-bold text-center text-primary-text-heading dark:text-white md:text-6xl ${className}`}>{children}</h1>
  )
}

export default H1