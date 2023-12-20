import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  
  const [theme, setTheme]=useState(false);
  useEffect(() => {
    if(theme){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
     
  }, [theme])
  
  return (
    <div className='group w-10 h-10 rounded-lg flex justify-center items-center hover:bg-primaryHover cursor-pointer'
    onClick={()=>setTheme(!theme)}
    >
        {
            (theme)?
              //  <FontAwesomeIcon icon={faSun}  className='text-white group-hover:text-black'/>
            <img src="brightness.svg" alt="" />

       
            :

                <FontAwesomeIcon icon={faMoon} className='text-gray-600 group-hover:text-black'/>
            
        }
    </div>
  )
}

export default ThemeToggle