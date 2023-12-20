import React from 'react'

const Container = ({children}) => {
  return (
   <div className='max-w-screen-xl xl:mx-auto mx-4'>
    {children}
   </div>
  )
}

export default Container