import { faBars, faCross, faX, faXRay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const NavToggle = ({toggle, navbtn}) => {
    
  return (
    <div
     className='group flex justify-center items-center w-10 h-10 hover:bg-primary-light rounded-lg cursor-pointer lg:hidden '
     onClick={toggle}
     >
        {
           !navbtn?
                <FontAwesomeIcon icon={faBars} className='w-5 h-5 text-primary-grayText group-hover:text-black dark:group-hover:text-white'/>
                :
                <FontAwesomeIcon icon={faX} className='w-5 h-5 text-primary-grayText group-hover:text-black dark:group-hover:text-white'/>
            
        }
    </div>
  )
}

export default NavToggle