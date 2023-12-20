import React from 'react'

const H2 = ({children, className=''}) => {
  return (
    <h2 className={`text-3xl font-bold  ${className}`}>{children}</h2>
  )
}

export default H2