import React from 'react'

const H3 = ({children,className=''}) => {
  return (
    <h3 className={`font-bold text-xl transition-colors duration-300  cursor-pointer hover:text-primary ${className}`} >{children}</h3>
  )
}

export default H3